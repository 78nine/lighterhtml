/*! (c) Andrea Giammarchi - ISC */
var lighterhtml=function(e){"use strict";
var t,n,r="-"+Math.random().toFixed(6)+"%",a=!1;try{t=document.createElement("template"),n="tabindex","content"in t&&(t.innerHTML='<p tabindex="'+r+'"></p>',t.content.childNodes[0].getAttribute(n)==r)||(r="_dt: "+r.slice(1,-1)+";",a=!0)}catch(e){}var o="\x3c!--"+r+"--\x3e",s=/^(?:style|textarea)$/i,i=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;

function l(e){return e.join(o).replace(v,b).replace(d,m)}var c=" \\f\\n\\r\\t",u="[^ \\f\\n\\r\\t\\/>\"'=]+",f="[ \\f\\n\\r\\t]+"+u,p="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",h="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+u.replace("\\/","")+"))?)",d=new RegExp(p+f+h+"+)(["+c+"]*/?>)","g"),v=new RegExp(p+f+h+"*)(["+c+"]*/>)","g"),g=new RegExp("("+f+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function m(e,t,n,r){return"<"+t+n.replace(g,y)+r}function y(e,t,n){return t+(n||'"')+r+(n||'"')}function b(e,t,n){return i.test(t)?e:"<"+t+n+"></"+t+">"}const{isArray:w}=Array,{indexOf:x,slice:N}=[];var C=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const E=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,k=e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;const r=N.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}};

var A=function(e){var t="fragment",n=function(e){var t=r("template");return t.innerHTML=e,t.content};return function(e,t){return("svg"===t?a:n)(e)};function r(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function a(e){var n=r(t),a=r("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(n,a.firstChild.childNodes),n}}(document),S=(e,t,n,r,a)=>{const o=n.length;let s=t.length,i=o,l=0,c=0,u=null;for(;l<s||c<i;)if(s===l){const t=i<o?c?r(n[c-1],-0).nextSibling:r(n[i-c],0):a;for(;c<i;)e.insertBefore(r(n[c++],1),t)}else if(i===c)for(;l<s;)u&&u.has(t[l])||e.removeChild(r(t[l],-1)),l++;else if(t[l]===n[c])l++,c++;else if(t[s-1]===n[i-1])s--,i--;else if(t[l]===n[i-1]&&n[c]===t[s-1]){const a=r(t[--s],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[l++],-1).nextSibling),e.insertBefore(r(n[--i],1),a),t[s]=n[i]}else{if(!u){u=new Map;let e=c;for(;e<i;)u.set(n[e],e++)}if(u.has(t[l])){const a=u.get(t[l]);if(c<a&&a<i){let o=l,f=1;for(;++o<s&&o<i&&u.get(t[o])===a+f;)f++;if(f>a-c){const o=r(t[l],0);for(;c<a;)e.insertBefore(r(n[c++],1),o)}else e.replaceChild(r(n[c++],1),r(t[l++],-1))}else l++}else e.removeChild(r(t[l++],-1))}return n},j=String.prototype.trim,T=a?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function L(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function O(e,t,n,s){for(var i=e.attributes,l=[],c=[],u=T(i,n),f=u.length,p=0;p<f;){var h,d=u[p++],v=d.value===r;if(v||1<(h=d.value.split(o)).length){var g=d.name;if(l.indexOf(g)<0){l.push(g);var m=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=i[m]||i[m.toLowerCase()];if(v)t.push($(y,s,m,null));else{for(var b=h.length-2;b--;)n.shift();t.push($(y,s,m,h))}}c.push(d)}}p=0;for(var w=(0<(f=c.length)&&a&&!("ownerSVGElement"in e));p<f;){var x=c[p++];w&&(x.value=""),e.removeAttribute(x.name)}var N=e.nodeName;if(/^script$/i.test(N)){var C=document.createElement(N);for(f=i.length,p=0;p<f;)C.setAttributeNode(i[p++].cloneNode(!0));C.textContent=e.textContent,e.parentNode.replaceChild(C,e)}}function M(e,t){return{type:"any",node:e,path:t}}function $(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function R(e,t){return{type:"text",node:e,path:t}}var z=document.importNode,B=String.prototype.trim,D=C(new WeakMap);function H(e,t){var n=(e.convert||l)(t),a=e.transform;a&&(n=a(n));var i=A(n,e.type);W(i);var c=[];return function e(t,n,a,i){for(var l=t.childNodes,c=l.length,u=0;u<c;){var f=l[u];switch(f.nodeType){case 1:var p=i.concat(u);O(f,n,a,p),e(f,n,a,p);break;case 8:var h=f.textContent;if(h===r)a.shift(),n.push(s.test(t.nodeName)?R(t,i):M(f,i.concat(u)));else switch(h.slice(0,2)){case"/*":if("*/"!==h.slice(-2))break;case"👻":t.removeChild(f),u--,c--}break;case 3:s.test(t.nodeName)&&j.call(f.textContent)===o&&(a.shift(),n.push(R(t,i)))}u++}}(i,c,t.slice(0),[]),{content:i,updates:function(n){for(var r=[],a=c.length,o=0,s=0;o<a;){var i=c[o++],l=L(n,i.path);switch(i.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var u=i.sparse,f=e.attribute(l,i.name,i.node);null===u?r.push({fn:f,sparse:!1}):(s+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return a+=s,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,s=1;o<e;){var i=r[o-s];if(i.sparse){var l=i.values,c=l[0],u=1,f=l.length;for(s+=f-2;u<f;)c+=arguments[o++]+l[u++];i.fn(c)}else i.fn(arguments[o++])}return n}}}}function Z(e,t){var n=D.get(t)||D.set(t,H(e,t));return n.updates(z.call(document,n.content,!0))}var _=[];function W(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===B.call(r.textContent).length&&e.removeChild(r)}}
var F=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,s;return function(i){var l,c,u,f;switch(typeof i){case"object":if(i){if("object"===o){if(!a&&s!==i)for(c in s)c in i||(r[c]="")}else a?r.value="":r.cssText="";for(c in l=a?{}:r,i)u="number"!=typeof(f=i[c])||e.test(c)?f:f+"px",!a&&/^--/.test(c)?l.setProperty(c,u):l[c]=u;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(s=l):s=i;break}default:s!=i&&(o="string",s=i,a?r.value=i||"":r.cssText=i||"")}}}}();const G=(e,t)=>{let n,r=!0;const a=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(a),r=!0):(a.value=t,r&&(e.setAttributeNodeNS(a),r=!1)))}},V=(e,t)=>n=>{e[t]=n},P=/^(?:form|list)$/i,q=(e,t)=>e.ownerDocument.createTextNode(t);function I(e){return this.type=e,t=this,n=_,r=W,function(e){return n!==e&&(r=Z(t,n=e)),r.apply(null,arguments)};var t,n,r}function J(e){return e(this)}I.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return G(e,t);t="className";case"props":return V(e,t);case"aria":return(e=>t=>{for(const n in t){const r="role"===n?n:"aria-"+n,a=t[n];null==a?e.removeAttribute(r):e.setAttribute(r,a)}})(e);case"style":return F(e,n,r);case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);case".dataset":return(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e);default:return"."===t.slice(0,1)?V(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const a=w(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}})(e,t):!(t in e)||r||P.test(t)?G(e,t):((e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}})(e,t)}},any(e,t){const{type:n}=this;let r,a=!1;const o=s=>{switch(typeof s){case"string":case"number":case"boolean":a?r!==s&&(r=s,t[0].textContent=s):(a=!0,r=s,t=S(e.parentNode,t,[q(e,s)],E,e));break;case"function":o(s(e));break;case"object":case"undefined":if(null==s){a=!1,t=S(e.parentNode,t,[],E,e);break}default:if(a=!1,r=s,w(s))if(0===s.length)t.length&&(t=S(e.parentNode,t,[],E,e));else switch(typeof s[0]){case"string":case"number":case"boolean":o(String(s));break;case"function":o(s.map(J,e));break;case"object":w(s[0])&&(s=s.concat.apply([],s));default:t=S(e.parentNode,t,s,E,e)}else"ELEMENT_NODE"in s?t=S(e.parentNode,t,11===s.nodeType?N.call(s.childNodes):[s],E,e):"text"in s?o(String(s.text)):"any"in s?o(s.any):"html"in s?t=S(e.parentNode,t,N.call(A([].concat(s.html).join(""),n).childNodes),E,e):"length"in s&&o(N.call(s))}};return o},text(e){let t;const n=r=>{if(t!==r){t=r;const a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(N.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:K,freeze:Q,keys:U}=Object,X=I.prototype,Y=C(new WeakMap),ee=e=>({html:ne("html",e),svg:ne("svg",e),render(t,n){const r="function"==typeof n?n():n,a=Y.get(t)||Y.set(t,te()),o=r instanceof oe?re(e,a,r):r;return o!==a.wire&&(a.wire=o,t.textContent="",t.appendChild(o.valueOf())),t}}),te=()=>({stack:[],entry:null,wire:null}),ne=(e,t)=>{const n=C(new WeakMap);return r.for=(e,a)=>{const o=n.get(e)||n.set(e,K(null));return o[a]||(o[a]=(s=te(),function(){return re(t,s,r.apply(null,arguments))}));var s},r.node=function(){return re(t,te(),r.apply(null,arguments)).valueOf()},r;function r(){return new oe(e,ue.apply(null,arguments))}},re=(e,t,{type:n,template:r,values:a})=>{const{length:o}=a;ae(e,t,a,o);let{entry:s}=t;if(s&&s.template===r&&s.type===n)s.tag(r,...a);else{const o=new e(n);t.entry=s={type:n,template:r,tag:o,wire:k(o(r,...a))}}return s.wire},ae=(e,{stack:t},n,r)=>{for(let a=0;a<r;a++){const r=n[a];r instanceof se?n[a]=re(e,t[a]||(t[a]=te()),r):w(r)?ae(e,t[a]||(t[a]=te()),r,r.length):t[a]=null}r<t.length&&t.splice(r)};function oe(e,t){this.type=e,this.template=t.shift(),this.values=t}Q(oe);const se=oe,{render:ie,html:le,svg:ce}=ee(I);function ue(){let e=[],t=0,{length:n}=arguments;for(;t<n;)e.push(arguments[t++]);return e}return e.Hole=se,e.custom=e=>{const t=K(X);return U(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?l:String))}),n.prototype=t,ee(n);function n(){return I.apply(this,arguments)}},e.html=le,e.render=ie,e.svg=ce,e}({});
