import WeakMap from '@ungap/weakmap';
import tta from '@ungap/template-tag-arguments';
import domsanitizer from 'domsanitizer';

import {Tagger} from './tagger.js';
import {Wire, create, freeze, isArray, keys} from './shared.js';

const tProto = Tagger.prototype;

const cache = new WeakMap;

const createRender = Tagger => ({
  html: outer('html', Tagger),
  svg: outer('svg', Tagger),
  render(where, what) {
    const hole = typeof what === 'function' ? what() : what;
    const info = cache.get(where) || setCache(where);
    const wire = hole instanceof LighterHole ?
                  retrieve(Tagger, info, hole) : hole;
    if (wire !== info.wire) {
      info.wire = wire;
      where.textContent = '';
      where.appendChild(wire.valueOf(true));
    }
    return where;
  }
});

const newInfo = () => ({sub: [], stack: [], wire: null});

const outer = (type, Tagger) => {
  const cache = new WeakMap;
  const fixed = info => function () {
    return retrieve(Tagger, info, hole.apply(null, arguments));
  };
  const set = ref => {
    const memo = create(null);
    cache.set(ref, memo);
    return memo;
  };
  hole.for = (ref, id) => {
    const memo = cache.get(ref) || set(ref);
    return memo[id] || (memo[id] = fixed(newInfo()));
  };
  hole.node = function () {
    return retrieve(Tagger, newInfo(), hole.apply(null, arguments)).valueOf(true);
  };
  return hole;
  function hole() {
    return new LighterHole(type, tta.apply(null, arguments));
  }
};

const retrieve = (Tagger, info, hole) => {
  const {sub, stack} = info;
  const counter = {
    a: 0, aLength: sub.length,
    i: 0, iLength: stack.length
  };
  const wire = unroll(Tagger, info, hole, counter);
  const {a, i, aLength, iLength} = counter;
  if (a < aLength)
    sub.splice(a);
  if (i < iLength)
    stack.splice(i);
  return wire;
};

const setCache = where => {
  const info = newInfo();
  cache.set(where, info);
  return info;
};

const unroll = (Tagger, info, hole, counter) => {
  const {stack} = info;
  const {i, iLength} = counter;
  const {type, args} = hole;
  const unknown = i === iLength;
  if (unknown)
    counter.iLength = stack.push({
      type,
      id: args[0],
      tag: null,
      wire: null
    });
  counter.i++;
  unrollArray(Tagger, info, args, counter);
  const entry = stack[i];
  if (unknown || entry.id !== args[0] || entry.type !== type) {
    entry.type = type;
    entry.id = args[0];
    entry.tag = new Tagger(type);
    entry.wire = wiredContent(entry.tag.apply(null, args));
  }
  else
    entry.tag.apply(null, args);
  return entry.wire;
};

const unrollArray = (Tagger, info, args, counter) => {
  let {a, aLength} = counter;
  for (let i = 1, {length} = args, {sub} = info; i < length; i++) {
    const hole = args[i];
    if (typeof hole === 'object' && hole) {
      if (hole instanceof LighterHole)
        args[i] = unroll(Tagger, info, hole, counter);
      else if (isArray(hole)) {
        const {length} = hole;
        const next = a + length;
        while (aLength < next)
          aLength = sub.push(null);
        for (let i = 0, {length} = hole; i < length; i++) {
          const inner = hole[i];
          if (typeof inner === 'object' && inner && inner instanceof LighterHole)
            hole[i] = retrieve(Tagger, sub[a] || (sub[a] = newInfo()), inner);
          a++;
        }
      }
    }
    a++;
  }
  counter.a = a;
  counter.aLength = aLength;
};

const wiredContent = node => {
  const childNodes = node.childNodes;
  const {length} = childNodes;
  return length === 1 ?
    childNodes[0] :
    (length ? new Wire(childNodes) : node);
};

freeze(LighterHole);
function LighterHole(type, args) {
  this.type = type;
  this.args = args;
};
export const Hole = LighterHole;

export const custom = overrides => {
  const prototype = create(tProto);
  keys(overrides).forEach(key => {
    prototype[key] = overrides[key](
      prototype[key] ||
      (key === 'convert' ? domsanitizer : String)
    );
  });
  CustomTagger.prototype = prototype;
  return createRender(CustomTagger);
  function CustomTagger() {
    return Tagger.apply(this, arguments);
  }
};

const {render, html, svg} = createRender(Tagger);
export {render, html, svg};
