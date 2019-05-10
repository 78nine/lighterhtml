/*! (c) Andrea Giammarchi - ISC */var lighterhtml=function(e){"use strict";var t=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const{isArray:n}=Array,r=t.prototype.nodeType;var o=function(e){var t="fragment";return function(e,r){return("svg"===r?function(e){var r=n(t),o=n("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(r,o.firstChild.childNodes),r}:function(e){var t=n("template");return t.innerHTML=e,t.content})(e)};function n(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document);const a=(e,t,n,r,o,a)=>{if(o-r<2)t.insertBefore(e(n[r],1),a);else{const i=t.ownerDocument.createDocumentFragment();for(;r<o;)i.appendChild(e(n[r++],1));t.insertBefore(i,a)}},i=(e,t)=>e==t,l=e=>e,c=(e,t,n,r,o,a,i)=>{const l=a-o;if(l<1)return-1;for(;n-t>=l;){let l=t,c=o;for(;l<n&&c<a&&i(e[l],r[c]);)l++,c++;if(c===a)return t;t=l+1}return-1},s=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,u=(e,t,n,r,o)=>{if(o-r<2)t.removeChild(e(n[r],-1));else{const a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},f=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},p=(e,t,n,r,o,i,l,c,s,p,h,d,m)=>{((e,t,n,r,o,i,l,c,s)=>{const f=new Map,p=e.length;let h=l,d=0;for(;d<p;)switch(e[d++]){case 0:o++,h++;break;case 1:f.set(r[o],1),a(t,n,r,o++,o,h<c?t(i[h],0):s);break;case-1:h++}for(d=0;d<p;)switch(e[d++]){case 0:l++;break;case-1:f.has(i[l])?l++:u(t,n,i,l++,l)}})(((e,t,n,r,o,a,i)=>{const l=n+a,c=[];let s,u,f,p,h,d,m;e:for(s=0;s<=l;s++){if(s>50)return null;for(m=s-1,h=s?c[s-1]:[0,0],d=c[s]=[],u=-s;u<=s;u+=2){for(f=(p=u===-s||u!==s&&h[m+u-1]<h[m+u+1]?h[m+u+1]:h[m+u-1]+1)-u;p<a&&f<n&&i(r[o+p],e[t+f]);)p++,f++;if(p===a&&f===n)break e;d[s+u]=p}}const v=Array(s/2+l/2);let g=v.length-1;for(s=c.length-1;s>=0;s--){for(;p>0&&f>0&&i(r[o+p-1],e[t+f-1]);)v[g--]=0,p--,f--;if(!s)break;m=s-1,h=s?c[s-1]:[0,0],(u=p-f)==-s||u!==s&&h[m+u-1]<h[m+u+1]?(f--,v[g--]=1):(p--,v[g--]=-1)}return v})(n,r,i,l,c,p,d)||((e,t,n,r,o,a,i,l)=>{let c=0,s=r<l?r:l;const u=Array(s++),p=Array(s);p[0]=-1;for(let e=1;e<s;e++)p[e]=i;const h=new Map;for(let e=a;e<i;e++)h.set(o[e],e);for(let r=t;r<n;r++){const t=h.get(e[r]);null!=t&&-1<(c=f(p,s,t))&&(p[c]=t,u[c]={newi:r,oldi:t,prev:u[c-1]})}for(c=--s,--i;p[c]>i;)--c;s=l+r-c;const d=Array(s);let m=u[c];for(--n;m;){const{newi:e,oldi:t}=m;for(;n>e;)d[--s]=1,--n;for(;i>t;)d[--s]=-1,--i;d[--s]=0,--n,--i,m=m.prev}for(;n>=t;)d[--s]=1,--n;for(;i>=a;)d[--s]=-1,--i;return d})(n,r,o,i,l,c,s,p),e,t,n,r,l,c,h,m)},h=(e,t,n,r)=>{r||(r={});const o=r.compare||i,f=r.node||l,h=null==r.before?null:f(r.before,0),d=t.length;let m=d,v=0,g=n.length,w=0;for(;v<m&&w<g&&o(t[v],n[w]);)v++,w++;for(;v<m&&w<g&&o(t[m-1],n[g-1]);)m--,g--;const y=v===m,b=w===g;if(y&&b)return n;if(y&&w<g)return a(f,e,n,w,g,s(f,t,v,d,h)),n;if(b&&v<m)return u(f,e,t,v,m),n;const N=m-v,x=g-w;let k=-1;if(N<x){if(-1<(k=c(n,w,g,t,v,m,o)))return a(f,e,n,w,k,f(t[v],0)),a(f,e,n,k+N,g,s(f,t,m,d,h)),n}else if(x<N&&-1<(k=c(t,v,m,n,w,g,o)))return u(f,e,t,v,k),u(f,e,t,k+x,m),n;return N<2||x<2?(a(f,e,n,w,g,f(t[v],0)),u(f,e,t,v,m),n):N===x&&((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t})(n,g,t,v,m,o)?(a(f,e,n,w,g,s(f,t,m,d,h)),n):(p(f,e,n,w,g,x,t,v,m,N,d,o,h),n)};var d,m="-"+Math.random().toFixed(6)+"%";try{"content"in(d=document.createElement("template"))&&(d.innerHTML='<p tabindex="'+m+'"></p>',d.content.childNodes[0].getAttribute("tabindex")==m)||(m="_dt: "+m.slice(1,-1)+";")}catch(e){}var v="\x3c!--"+m+"--\x3e",g=8,w=1,y=3,b=/^(?:style|textarea)$/i,N=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var x=" \\f\\n\\r\\t",k="[^"+x+"\\/>\"'=]+",C="["+x+"]+"+k,E="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",A="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+k.replace("\\/","")+"))?)",S=new RegExp(E+C+A+"+)(["+x+"]*/?>)","g"),T=new RegExp(E+C+A+"*)(["+x+"]*/>)","g"),j=new RegExp("("+C+"\\s*=\\s*)(['\"]?)"+v+"\\2","gi");function M(e,t,n,r){return"<"+t+n.replace(j,D)+r}function D(e,t,n){return t+(n||'"')+m+(n||'"')}function L(e,t,n){return N.test(t)?e:"<"+t+n+"></"+t+">"}var $=String.prototype.trim;function _(e,t,n,r){return{name:r,node:t,path:n,type:e}}function O(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function G(e,t,n,r){for(var o=new Map,a=e.attributes,i=[],l=i.slice.call(a,0),c=l.length,s=0;s<c;){var u=l[s++];if(u.value===m){var f=u.name;if(!o.has(f)){var p=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),h=a[p]||a[p.toLowerCase()];o.set(f,h),t.push(_("attr",h,r,p))}i.push(u)}}for(c=i.length,s=0;s<c;){var d=i[s++];/^id$/i.test(d.name)?e.removeAttribute(d.name):e.removeAttributeNode(d)}var v=e.nodeName;if(/^script$/i.test(v)){var g=document.createElement(v);for(c=a.length,s=0;s<c;)g.setAttributeNode(a[s++].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}}var R=document.importNode,V=String.prototype.trim,W=new WeakMap,z=new WeakMap;function B(e,t){var n=function(e){return e.join(v).replace(T,L).replace(S,M)}(t),r=e.transform;r&&(n=r(n));var a=o(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===V.call(r.textContent).length&&e.removeChild(r)}}(a);var i=[];!function e(t,n,r,o){for(var a=t.childNodes,i=a.length,l=0;l<i;){var c=a[l];switch(c.nodeType){case w:var s=o.concat(l);G(c,n,r,s),e(c,n,r,s);break;case g:c.textContent===m&&(r.shift(),n.push(b.test(t.nodeName)?_("text",t,o):_("any",c,o.concat(l))));break;case y:b.test(t.nodeName)&&$.call(c.textContent)===v&&(r.shift(),n.push(_("text",t,o)))}l++}}(a,i,t.slice(0),[]);var l={content:a,updates:function(n){for(var r=[],o=i.length,a=0;a<o;){var l=i[a++],c=O(n,l.path);switch(l.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,l.name,l.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,a=e-1,i=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return W.set(t,l),l}function F(e){return function(t){var n=z.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=W.get(t)||B(e,t),r=R.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return z.set(e,o),o}(e,t)),n.updates.apply(null,arguments),n.content}}var H=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(l){var c,s,u,f;switch(typeof l){case"object":if(l){if("object"===a){if(!o&&i!==l)for(s in i)s in l||(r[s]="")}else o?r.value="":r.cssText="";for(s in c=o?{}:r,l)u="number"!=typeof(f=l[s])||e.test(s)?f:f+"px",!o&&/^--/.test(s)?c.setProperty(s,u):c[s]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=c):i=l;break}default:i!=l&&(a="string",i=l,o?r.value=l||"":r.cssText=l||"")}}}}();const Z=(e,t)=>e.nodeType===r?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,P=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},q=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},I=/^(?:form|list)$/i,J=[].slice,K=(e,t)=>e.ownerDocument.createTextNode(t);function Q(e){return this.type=e,F(this)}function U(e){return e(this)}Q.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return P(e,n);t="className";case"data":case"props":return q(e,t);case"style":return H(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||I.test(t))?q(e,t):P(e,n)}},any(e,t){const r={node:Z,before:e},a="ownerSVGElement"in e?"svg":"html";let i,l=!1;const c=s=>{switch(typeof s){case"string":case"number":case"boolean":l?i!==s&&(i=s,t[0].textContent=s):(l=!0,i=s,t=h(e.parentNode,t,[K(e,s)],r));break;case"function":c(s(e));break;case"object":case"undefined":if(null==s){l=!1,t=h(e.parentNode,t,[],r);break}default:if(l=!1,i=s,n(s))if(0===s.length)t.length&&(t=h(e.parentNode,t,[],r));else switch(typeof s[0]){case"string":case"number":case"boolean":c(String(s));break;case"function":c(s.map(U,e));break;case"object":n(s[0])&&(s=s.concat.apply([],s));default:t=h(e.parentNode,t,s,r)}else(e=>"ELEMENT_NODE"in e)(s)?t=h(e.parentNode,t,11===s.nodeType?J.call(s.childNodes):[s],r):"text"in s?c(String(s.text)):"any"in s?c(s.any):"html"in s?t=h(e.parentNode,t,J.call(o([].concat(s.html).join(""),a).childNodes),r):"length"in s&&c(J.call(s))}};return c},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(J.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const X=new WeakMap,Y=new WeakMap;let ee=null;const te=ae("html"),ne=ae("svg");function re(e,t){return e.nodeType===r?e.valueOf(t):e}function oe(e,t){return function(){const n=e(null);return null===n.current&&(n.current=t.for(n)),re(n.current.apply(null,arguments),!1)}}function ae(e){const t=new WeakMap;return n.for=((n,r)=>{const o=t.get(n)||function(e){const n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),o[r]||function(t,n){let r=null;const o=new Q(e);return t[n]=function(){const e=o.apply(null,arguments);return r||(r=le(e))}}(o,r)}),n;function n(){const t=arguments;return ee?new ce(e,t):new Q(e).apply(null,t)}}function ie(e,t){const{i:r,length:o,stack:a}=ee,{type:i,args:l}=e,c=r<o;ee.i++,c||(ee.length=a.push({l:t,kind:i,tag:null,tpl:l[0],wire:null})),function e(t,r,o){for(const{length:a}=t;r<a;r++){const a=t[r];"object"==typeof a&&a&&(a instanceof ce?t[r]=ie(a,o-1):n(a)&&(t[r]=e(a,0,o++)))}return t}(l,1,t+1);const s=a[r];if(c){const{l:e,kind:n,tag:r,tpl:o,wire:a}=s;if(e===t&&i===n&&o===l[0])return r.apply(null,l),a}const u=new Q(i),f=le(u.apply(null,l));return s.l=t,s.kind=i,s.tag=u,s.tpl=l[0],s.wire=f,r<1&&(ee.update=!0),f}function le(e){const n=e.childNodes,{length:r}=n;return 1===r?n[0]:r?new t(n):e}function ce(e,t){this.type=e,this.args=t}return Object.freeze(ce),e.Hole=ce,e.hook=(e=>({html:oe(e,te),svg:oe(e,ne)})),e.html=te,e.render=function(e,t){const n=function(e,t){const n=ee;(ee=X.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return X.set(e,t),t}(e)).i=0;const r=t.call(this);let o;if(r instanceof ce){o=re(ie(r,0),ee.update);const{i:e,length:t,stack:n,update:a}=ee;e<t&&n.splice(ee.length=e),a&&(ee.update=!1)}else o=re(r,!1);return ee=n,o}.call(this,e,t);return Y.get(e)!==n&&(Y.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e},e.svg=ne,e.transform=(e=>{const{transform:t}=Q.prototype;Q.prototype.transform=t?n=>e(t(n)):e}),e}({});
