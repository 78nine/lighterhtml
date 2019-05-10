/*! (c) Andrea Giammarchi - ISC */
var lighterhtml=function(e,t){"use strict";var n={};try{n.WeakMap=WeakMap}catch(e){n.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=a.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},a;function a(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var r=n.WeakMap,o=function(){var t=!1,n=function(o){if(!("raw"in o)||o.propertyIsEnumerable("raw")||!Object.isFrozen(o.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var a={};n=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return a[t]||(a[t]=e)}}else t=!0;return r(o)};return r;function r(e){return t?e:n(e)}}();function a(e){for(var t=arguments.length,n=[o(e)],r=1;r<t;)n.push(arguments[r++]);return n}var i=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),u=Array.isArray,c=i.prototype.nodeType,l=function(e){var t="fragment",n="content"in o("template")?function(e){var t=o("template");return t.innerHTML=e,t.content}:function(e){var n=o(t),a=o("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;a.innerHTML="<table>"+e+"</table>",i=a.querySelectorAll(u)}else a.innerHTML=e,i=a.childNodes;return r(n,i),n};return function(e,a){return("svg"===a?function(e){var n=o(t),a=o("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,a.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),s={};try{s.Map=Map}catch(e){s.Map=function(){var e=0,t=[],n=[];return{delete:function(o){var a=r(o);return a&&(t.splice(e,1),n.splice(e,1)),a},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(o,a){return n[r(o)?e:t.push(o)-1]=a,this}};function r(n){return-1<(e=t.indexOf(n))}}}var f,h=s.Map,p=function(e,t,n,r,o,a){if(o-r<2)t.insertBefore(e(n[r],1),a);else{for(var i=t.ownerDocument.createDocumentFragment();r<o;)i.appendChild(e(n[r++],1));t.insertBefore(i,a)}},d=function(e,t){return e==t},v=function(e){return e},g=function(e,t,n,r,o,a,i){var u=a-o;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=o;c<n&&l<a&&i(e[c],r[l]);)c++,l++;if(l===a)return t;t=c+1}return-1},m=function(e,t,n,r,o){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o},y=function(e,t,n,r,o){if(o-r<2)t.removeChild(e(n[r],-1));else{var a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},w=function(e,t,n){for(var r=1,o=t;r<o;){var a=(r+o)/2>>>0;n<e[a]?o=a:r=a+1}return r},b=function(e,t,n,r,o,a,i,u,c,l,s,f,d){!function(e,t,n,r,o,a,i,u,c){for(var l=new h,s=e.length,f=i,d=0;d<s;)switch(e[d++]){case 0:o++,f++;break;case 1:l.set(r[o],1),p(t,n,r,o++,o,f<u?t(a[f],0):c);break;case-1:f++}for(d=0;d<s;)switch(e[d++]){case 0:i++;break;case-1:l.has(a[i])?i++:y(t,n,a,i++,i)}}(function(e,t,n,r,o,a,i){var u,c,l,s,f,h,p,d=n+a,v=[];e:for(u=0;u<=d;u++){if(u>50)return null;for(p=u-1,f=u?v[u-1]:[0,0],h=v[u]=[],c=-u;c<=u;c+=2){for(l=(s=c===-u||c!==u&&f[p+c-1]<f[p+c+1]?f[p+c+1]:f[p+c-1]+1)-c;s<a&&l<n&&i(r[o+s],e[t+l]);)s++,l++;if(s===a&&l===n)break e;h[u+c]=s}}var g=Array(u/2+d/2),m=g.length-1;for(u=v.length-1;u>=0;u--){for(;s>0&&l>0&&i(r[o+s-1],e[t+l-1]);)g[m--]=0,s--,l--;if(!u)break;p=u-1,f=u?v[u-1]:[0,0],(c=s-l)==-u||c!==u&&f[p+c-1]<f[p+c+1]?(l--,g[m--]=1):(s--,g[m--]=-1)}return g}(n,r,a,i,u,l,f)||function(e,t,n,r,o,a,i,u){var c=0,l=r<u?r:u,s=Array(l++),f=Array(l);f[0]=-1;for(var p=1;p<l;p++)f[p]=i;for(var d=new h,v=a;v<i;v++)d.set(o[v],v);for(var g=t;g<n;g++){var m=d.get(e[g]);null!=m&&-1<(c=w(f,l,m))&&(f[c]=m,s[c]={newi:g,oldi:m,prev:s[c-1]})}for(c=--l,--i;f[c]>i;)--c;l=u+r-c;var y=Array(l),b=s[c];for(--n;b;){for(var N=b,x=N.newi,C=N.oldi;n>x;)y[--l]=1,--n;for(;i>C;)y[--l]=-1,--i;y[--l]=0,--n,--i,b=b.prev}for(;n>=t;)y[--l]=1,--n;for(;i>=a;)y[--l]=-1,--i;return y}(n,r,o,a,i,u,c,l),e,t,n,r,i,u,s,d)},N=function(e,t,n,r){r||(r={});for(var o=r.compare||d,a=r.node||v,i=null==r.before?null:a(r.before,0),u=t.length,c=u,l=0,s=n.length,f=0;l<c&&f<s&&o(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&o(t[c-1],n[s-1]);)c--,s--;var h=l===c,w=f===s;if(h&&w)return n;if(h&&f<s)return p(a,e,n,f,s,m(a,t,l,u,i)),n;if(w&&l<c)return y(a,e,t,l,c),n;var N=c-l,x=s-f,C=-1;if(N<x){if(-1<(C=g(n,f,s,t,l,c,o)))return p(a,e,n,f,C,a(t[l],0)),p(a,e,n,C+N,s,m(a,t,c,u,i)),n}else if(x<N&&-1<(C=g(t,l,c,n,f,s,o)))return y(a,e,t,l,C),y(a,e,t,C+x,c),n;return N<2||x<2?(p(a,e,n,f,s,a(t[l],0)),y(a,e,t,l,c),n):N===x&&function(e,t,n,r,o,a){for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,c,o)?(p(a,e,n,f,s,m(a,t,c,u,i)),n):(b(a,e,n,f,s,x,t,l,c,N,u,o,i),n)},x=function(e,t,n,r,o){var a="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(a?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],a=o.length,i=0;n&&i<a;i++)r.appendChild(e(o[i],n));return r}:a?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),C="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},k="-"+Math.random().toFixed(6)+"%";try{"content"in(f=e.createElement("template"))&&(f.innerHTML='<p tabindex="'+k+'"></p>',f.content.childNodes[0].getAttribute("tabindex")==k)||(k="_dt: "+k.slice(1,-1)+";")}catch(e){}var E="\x3c!--"+k+"--\x3e",A=8,T=1,M=3,S=/^(?:style|textarea)$/i,j=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var _=" \\f\\n\\r\\t",D="[^"+_+"\\/>\"'=]+",L="["+_+"]+"+D,$="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",O="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+D.replace("\\/","")+"))?)",F=new RegExp($+L+O+"+)(["+_+"]*/?>)","g"),R=new RegExp($+L+O+"*)(["+_+"]*/>)","g"),H=new RegExp("("+L+"\\s*=\\s*)(['\"]?)"+E+"\\2","gi");function V(e,t,n,r){return"<"+t+n.replace(H,z)+r}function z(e,t,n){return t+(n||'"')+k+(n||'"')}function G(e,t,n){return j.test(t)?e:"<"+t+n+"></"+t+">"}function B(e,t,n,r){return{name:r,node:t,path:n,type:e}}function W(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function Z(t,n,r,o){for(var a=new h,i=t.attributes,u=[],c=u.slice.call(i,0),l=c.length,s=0;s<l;){var f=c[s++];if(f.value===k){var p=f.name;if(!a.has(p)){var d=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),v=i[d]||i[d.toLowerCase()];a.set(p,v),n.push(B("attr",v,o,d))}u.push(f)}}for(l=u.length,s=0;s<l;){var g=u[s++];/^id$/i.test(g.name)?t.removeAttribute(g.name):t.removeAttributeNode(g)}var m=t.nodeName;if(/^script$/i.test(m)){var y=e.createElement(m);for(l=i.length,s=0;s<l;)y.setAttributeNode(i[s++].cloneNode(!0));y.textContent=t.textContent,t.parentNode.replaceChild(y,t)}}var P=new r,q=new r;function I(e,t){var n=function(e){return e.join(E).replace(R,G).replace(F,V)}(t),r=e.transform;r&&(n=r(n));var o=l(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===C.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var a=t.childNodes,i=a.length,u=0;u<i;){var c=a[u];switch(c.nodeType){case T:var l=o.concat(u);Z(c,n,r,l),e(c,n,r,l);break;case A:c.textContent===k&&(r.shift(),n.push(S.test(t.nodeName)?B("text",t,o):B("any",c,o.concat(u))));break;case M:S.test(t.nodeName)&&C.call(c.textContent)===E&&(r.shift(),n.push(B("text",t,o)))}u++}}(o,a,t.slice(0),[]);var i={content:o,updates:function(n){for(var r=[],o=a.length,i=0;i<o;){var u=a[i++],c=W(n,u.path);switch(u.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,u.name,u.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,a=e-1,i=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return P.set(t,i),i}function J(t){return function(n){var r=q.get(t);return null!=r&&r.template===n||(r=function(t,n){var r=P.get(n)||I(t,n),o=x.call(e,r.content,!0),a={content:o,template:n,updates:r.updates(o)};return q.set(t,a),a}(t,n)),r.updates.apply(null,arguments),r.content}}var K=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(u){var c,l,s,f;switch(typeof u){case"object":if(u){if("object"===a){if(!o&&i!==u)for(l in i)l in u||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,u)s="number"!=typeof(f=u[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?c.setProperty(l,s):c[l]=s;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=c):i=u;break}default:i!=u&&(a="string",i=u,o?r.value=u||"":r.cssText=u||"")}}}}(),Q=function(e,t){return e.nodeType===c?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},U=function(e,t){var n,r=!1,o=t.cloneNode(!0);return function(t){n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},X=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},Y=/^(?:form|list)$/i,ee=[].slice;function te(e){return this.type=e,J(this)}function ne(e){return e(this)}te.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return U(e,n);t="className";case"data":case"props":return X(e,t);case"style":return K(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||Y.test(t))?X(e,t):U(e,n)}},any:function(e,t){var n,r={node:Q,before:e},o="ownerSVGElement"in e?"svg":"html",a=!1;return function i(c){switch(typeof c){case"string":case"number":case"boolean":a?n!==c&&(n=c,t[0].textContent=c):(a=!0,n=c,t=N(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,c)],r));break;case"function":i(c(e));break;case"object":case"undefined":if(null==c){a=!1,t=N(e.parentNode,t,[],r);break}default:if(a=!1,n=c,u(c))if(0===c.length)t.length&&(t=N(e.parentNode,t,[],r));else switch(typeof c[0]){case"string":case"number":case"boolean":i(String(c));break;case"function":i(c.map(ne,e));break;case"object":u(c[0])&&(c=c.concat.apply([],c));default:t=N(e.parentNode,t,c,r)}else!function(e){return"ELEMENT_NODE"in e}(c)?"text"in c?i(String(c.text)):"any"in c?i(c.any):"html"in c?t=N(e.parentNode,t,ee.call(l([].concat(c.html).join(""),o).childNodes),r):"length"in c&&i(ee.call(c)):t=N(e.parentNode,t,11===c.nodeType?ee.call(c.childNodes):[c],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(ee.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}}}};var re=new r,oe=new r,ae=null;var ie=se("html"),ue=se("svg");function ce(e,t){return e.nodeType===c?e.valueOf(t):e}function le(e,t){return function(){var n=e(null);return null===n.current&&(n.current=t.for(n)),ce(n.current.apply(null,arguments),!1)}}function se(e){var t=new r;return n.for=function(n,r){var o=t.get(n)||function(e){var n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),o[r]||function(t,n){var r=null,o=new te(e);return t[n]=function(){var e=o.apply(null,a.apply(null,arguments));return r||(r=he(e))}}(o,r)},n;function n(){var t=a.apply(null,arguments);return ae?new pe(e,t):new te(e).apply(null,t)}}function fe(e,t){var n=ae,r=n.i,o=n.length,a=n.stack,i=e.type,c=e.args,l=r<o;ae.i++,l||(ae.length=a.push({l:t,kind:i,tag:null,tpl:c[0],wire:null})),function e(t,n,r){for(var o=t.length;n<o;n++){var a=t[n];"object"==typeof a&&a&&(a instanceof pe?t[n]=fe(a,r-1):u(a)&&(t[n]=e(a,0,r++)))}return t}(c,1,t+1);var s=a[r];if(l){var f=s.l,h=s.kind,p=s.tag,d=s.tpl,v=s.wire;if(f===t&&i===h&&d===c[0])return p.apply(null,c),v}var g=new te(i),m=he(g.apply(null,c));return s.l=t,s.kind=i,s.tag=g,s.tpl=c[0],s.wire=m,r<1&&(ae.update=!0),m}function he(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new i(t):e}function pe(e,t){this.type=e,this.args=t}return Object.freeze(pe),t.Hole=pe,t.hook=function(e){return{html:le(e,ie),svg:le(e,ue)}},t.html=ie,t.render=function(e,t){var n=function(e,t){var n,r,o=ae;(ae=re.get(e)||(n=e,r={i:0,length:0,stack:[],update:!1},re.set(n,r),r)).i=0;var a,i=t.call(this);if(i instanceof pe){a=ce(fe(i,0),ae.update);var u=ae,c=u.i,l=u.length,s=u.stack,f=u.update;c<l&&s.splice(ae.length=c),f&&(ae.update=!1)}else a=ce(i,!1);return ae=o,a}.call(this,e,t);return oe.get(e)!==n&&(oe.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e},t.svg=ue,t.transform=function(e){var t=te.prototype.transform;te.prototype.transform=t?function(n){return e(t(n))}:e},t}(document,{});
