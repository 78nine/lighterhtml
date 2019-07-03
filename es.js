/*! (c) Andrea Giammarchi - ISC */var lighterhtml=function(e){"use strict";var t=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const{isArray:n}=Array,r=t.prototype.nodeType;var o=function(e){var t="fragment";return function(e,r){return("svg"===r?function(e){var r=n(t),o=n("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(r,o.firstChild.childNodes),r}:function(e){var t=n("template");return t.innerHTML=e,t.content})(e)};function n(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document);const a=(e,t,n,r,o,a)=>{const i="selectedIndex"in t;let l=-1;for(;r<o;){const o=e(n[r],1);i&&l<0&&o.selected&&(l=r),t.insertBefore(o,a),r++}i&&-1<l&&(t.selectedIndex=l)},i=(e,t)=>e==t,l=e=>e,s=(e,t,n,r,o,a,i)=>{const l=a-o;if(l<1)return-1;for(;n-t>=l;){let l=t,s=o;for(;l<n&&s<a&&i(e[l],r[s]);)l++,s++;if(s===a)return t;t=l+1}return-1},c=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,u=(e,t,n,r,o)=>{if(o-r<2)t.removeChild(e(n[r],-1));else{const a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},f=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},p=(e,t,n,r,o,i,l,s,c,p,h,d,v)=>{((e,t,n,r,o,i,l,s,c)=>{const f=new Map,p=e.length;let h=l,d=0;for(;d<p;)switch(e[d++]){case 0:o++,h++;break;case 1:f.set(r[o],1),a(t,n,r,o++,o,h<s?t(i[h],0):c);break;case-1:h++}for(d=0;d<p;)switch(e[d++]){case 0:l++;break;case-1:f.has(i[l])?l++:u(t,n,i,l++,l)}})(((e,t,n,r,o,a,i)=>{const l=n+a,s=[];let c,u,f,p,h,d,v;e:for(c=0;c<=l;c++){if(c>50)return null;for(v=c-1,h=c?s[c-1]:[0,0],d=s[c]=[],u=-c;u<=c;u+=2){for(f=(p=u===-c||u!==c&&h[v+u-1]<h[v+u+1]?h[v+u+1]:h[v+u-1]+1)-u;p<a&&f<n&&i(r[o+p],e[t+f]);)p++,f++;if(p===a&&f===n)break e;d[c+u]=p}}const m=Array(c/2+l/2);let g=m.length-1;for(c=s.length-1;c>=0;c--){for(;p>0&&f>0&&i(r[o+p-1],e[t+f-1]);)m[g--]=0,p--,f--;if(!c)break;v=c-1,h=c?s[c-1]:[0,0],(u=p-f)==-c||u!==c&&h[v+u-1]<h[v+u+1]?(f--,m[g--]=1):(p--,m[g--]=-1)}return m})(n,r,i,l,s,p,d)||((e,t,n,r,o,a,i,l)=>{let s=0,c=r<l?r:l;const u=Array(c++),p=Array(c);p[0]=-1;for(let e=1;e<c;e++)p[e]=i;const h=new Map;for(let e=a;e<i;e++)h.set(o[e],e);for(let r=t;r<n;r++){const t=h.get(e[r]);null!=t&&-1<(s=f(p,c,t))&&(p[s]=t,u[s]={newi:r,oldi:t,prev:u[s-1]})}for(s=--c,--i;p[s]>i;)--s;c=l+r-s;const d=Array(c);let v=u[s];for(--n;v;){const{newi:e,oldi:t}=v;for(;n>e;)d[--c]=1,--n;for(;i>t;)d[--c]=-1,--i;d[--c]=0,--n,--i,v=v.prev}for(;n>=t;)d[--c]=1,--n;for(;i>=a;)d[--c]=-1,--i;return d})(n,r,o,i,l,s,c,p),e,t,n,r,l,s,h,v)},h=(e,t,n,r)=>{r||(r={});const o=r.compare||i,f=r.node||l,h=null==r.before?null:f(r.before,0),d=t.length;let v=d,m=0,g=n.length,w=0;for(;m<v&&w<g&&o(t[m],n[w]);)m++,w++;for(;m<v&&w<g&&o(t[v-1],n[g-1]);)v--,g--;const y=m===v,b=w===g;if(y&&b)return n;if(y&&w<g)return a(f,e,n,w,g,c(f,t,m,d,h)),n;if(b&&m<v)return u(f,e,t,m,v),n;const N=v-m,x=g-w;let k=-1;if(N<x){if(-1<(k=s(n,w,g,t,m,v,o)))return a(f,e,n,w,k,f(t[m],0)),a(f,e,n,k+N,g,c(f,t,v,d,h)),n}else if(x<N&&-1<(k=s(t,m,v,n,w,g,o)))return u(f,e,t,m,k),u(f,e,t,k+x,v),n;return N<2||x<2?(a(f,e,n,w,g,f(t[m],0)),u(f,e,t,m,v),n):N===x&&((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t})(n,g,t,m,v,o)?(a(f,e,n,w,g,c(f,t,v,d,h)),n):(p(f,e,n,w,g,x,t,m,v,N,d,o,h),n)};var d,v="-"+Math.random().toFixed(6)+"%";try{"content"in(d=document.createElement("template"))&&(d.innerHTML='<p tabindex="'+v+'"></p>',d.content.childNodes[0].getAttribute("tabindex")==v)||(v="_dt: "+v.slice(1,-1)+";",!0)}catch(e){}var m="\x3c!--"+v+"--\x3e",g=8,w=1,y=3,b=/^(?:style|textarea)$/i,N=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var x=" \\f\\n\\r\\t",k="[^"+x+"\\/>\"'=]+",C="["+x+"]+"+k,E="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",A="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+k.replace("\\/","")+"))?)",S=new RegExp(E+C+A+"+)(["+x+"]*/?>)","g"),T=new RegExp(E+C+A+"*)(["+x+"]*/>)","g"),j=new RegExp("("+C+"\\s*=\\s*)(['\"]?)"+m+"\\2","gi");function M(e,t,n,r){return"<"+t+n.replace(j,L)+r}function L(e,t,n){return t+(n||'"')+v+(n||'"')}function D(e,t,n){return N.test(t)?e:"<"+t+n+"></"+t+">"}var $=String.prototype.trim;function _(e,t,n,r){return{name:r,node:t,path:n,type:e}}function O(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function G(e,t,n,r){for(var o=new Map,a=e.attributes,i=[],l=i.slice.call(a,0),s=l.length,c=0;c<s;){var u=l[c++];if(u.value===v){var f=u.name;if(!o.has(f)){var p=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),h=a[p]||a[p.toLowerCase()];o.set(f,h),t.push(_("attr",h,r,p))}i.push(u)}}for(s=i.length,c=0;c<s;){var d=i[c++];/^id$/i.test(d.name)?e.removeAttribute(d.name):e.removeAttributeNode(d)}var m=e.nodeName;if(/^script$/i.test(m)){var g=document.createElement(m);for(s=a.length,c=0;c<s;)g.setAttributeNode(a[c++].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}}var R=document.importNode,V=String.prototype.trim,W=new WeakMap,z=new WeakMap;function H(e,t){var n=function(e){return e.join(m).replace(T,D).replace(S,M)}(t),r=e.transform;r&&(n=r(n));var a=o(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===V.call(r.textContent).length&&e.removeChild(r)}}(a);var i=[];!function e(t,n,r,o){for(var a=t.childNodes,i=a.length,l=0;l<i;){var s=a[l];switch(s.nodeType){case w:var c=o.concat(l);G(s,n,r,c),e(s,n,r,c);break;case g:var u=s.textContent;if(u===v)r.shift(),n.push(b.test(t.nodeName)?_("text",t,o):_("any",s,o.concat(l)));else switch(u.slice(0,2)){case"/*":if("*/"!==u.slice(-2))break;case"👻":t.removeChild(s),l--,i--}break;case y:b.test(t.nodeName)&&$.call(s.textContent)===m&&(r.shift(),n.push(_("text",t,o)))}l++}}(a,i,t.slice(0),[]);var l={content:a,updates:function(n){for(var r=[],o=i.length,a=0;a<o;){var l=i[a++],s=O(n,l.path);switch(l.type){case"any":r.push(e.any(s,[]));break;case"attr":r.push(e.attribute(s,l.name,l.node));break;case"text":r.push(e.text(s)),s.textContent=""}}return function(){var e=arguments.length,a=e-1,i=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return W.set(t,l),l}function Z(e,t){var n=W.get(t)||H(e,t),r=R.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return z.set(e,o),o}var B=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(l){var s,c,u,f;switch(typeof l){case"object":if(l){if("object"===a){if(!o&&i!==l)for(c in i)c in l||(r[c]="")}else o?r.value="":r.cssText="";for(c in s=o?{}:r,l)u="number"!=typeof(f=l[c])||e.test(c)?f:f+"px",!o&&/^--/.test(c)?s.setProperty(c,u):s[c]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=s):i=l;break}default:i!=l&&(a="string",i=l,o?r.value=l||"":r.cssText=l||"")}}}}();const F=(e,t)=>e.nodeType===r?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,I=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},P=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},q=/^(?:form|list)$/i,J=[].slice,K=(e,t)=>e.ownerDocument.createTextNode(t);function Q(e){return this.type=e,t=this,function(e){var n=z.get(t);return null!=n&&n.template===e||(n=Z(t,e)),n.updates.apply(null,arguments),n.content};var t}function U(e){return e(this)}Q.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return I(e,n);t="className";case"data":case"props":return P(e,t);case"style":return B(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t)=>n=>{e[t]=n})(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||q.test(t))?P(e,t):I(e,n)}},any(e,t){const r={node:F,before:e},a="ownerSVGElement"in e?"svg":"html";let i,l=!1;const s=c=>{switch(typeof c){case"string":case"number":case"boolean":l?i!==c&&(i=c,t[0].textContent=c):(l=!0,i=c,t=h(e.parentNode,t,[K(e,c)],r));break;case"function":s(c(e));break;case"object":case"undefined":if(null==c){l=!1,t=h(e.parentNode,t,[],r);break}default:if(l=!1,i=c,n(c))if(0===c.length)t.length&&(t=h(e.parentNode,t,[],r));else switch(typeof c[0]){case"string":case"number":case"boolean":s(String(c));break;case"function":s(c.map(U,e));break;case"object":n(c[0])&&(c=c.concat.apply([],c));default:t=h(e.parentNode,t,c,r)}else(e=>"ELEMENT_NODE"in e)(c)?t=h(e.parentNode,t,11===c.nodeType?J.call(c.childNodes):[c],r):"text"in c?s(String(c.text)):"any"in c?s(c.any):"html"in c?t=h(e.parentNode,t,J.call(o([].concat(c.html).join(""),a).childNodes),r):"length"in c&&s(J.call(c))}};return s},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(J.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const X=new WeakMap,Y=new WeakMap;let ee=null;const te=ae("html"),ne=ae("svg");function re(e,t){return e.nodeType===r?e.valueOf(t):e}function oe(e,t){return function(){const n=e(null);return null===n.current&&(n.current=t.for(n)),re(n.current.apply(null,arguments),!1)}}function ae(e){const t=new WeakMap;return n.for=(n,r)=>{const o=t.get(n)||function(e){const n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),o[r]||function(t,n){let r=[],o=null;const a=new Q(e),i=()=>a.apply(null,se(r,1,1));return t[n]=function(){r=arguments;const e=ie(a,i);return o||(o=ce(e))}}(o,r)},n;function n(){const t=arguments;return ee?new ue(e,t):new Q(e).apply(null,t)}}function ie(e,t){const n=ee;(ee=X.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return X.set(e,t),t}(e)).i=0;const r=t.call(this);let o;if(r instanceof ue){o=re(le(r,0),ee.update);const{i:e,length:t,stack:n,update:a}=ee;e<t&&n.splice(ee.length=e),a&&(ee.update=!1)}else o=re(r,!1);return ee=n,o}function le(e,t){const{i:n,length:r,stack:o}=ee,{type:a,args:i}=e,l=n<r;ee.i++,l||(ee.length=o.push({l:t,kind:a,tag:null,tpl:i[0],wire:null})),se(i,1,t+1);const s=o[n];if(l){const{l:e,kind:n,tag:r,tpl:o,wire:l}=s;if(e===t&&a===n&&o===i[0])return r.apply(null,i),l}const c=new Q(a),u=ce(c.apply(null,i));return s.l=t,s.kind=a,s.tag=c,s.tpl=i[0],s.wire=u,n<1&&(ee.update=!0),u}function se(e,t,r){for(const{length:o}=e;t<o;t++){const o=e[t];"object"==typeof o&&o&&(o instanceof ue?e[t]=le(o,r-1):n(o)&&(e[t]=se(o,0,r++)))}return e}function ce(e){const n=e.childNodes,{length:r}=n;return 1===r?n[0]:r?new t(n):e}function ue(e,t){this.type=e,this.args=t}return Object.freeze(ue),e.Hole=ue,e.hook=e=>({html:oe(e,te),svg:oe(e,ne)}),e.html=te,e.render=function(e,t){const n=ie.call(this,e,t);return Y.get(e)!==n&&(Y.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e},e.svg=ne,e.transform=e=>{const{transform:t}=Q.prototype;Q.prototype.transform=t?n=>e(t(n)):e},e}({});
