/* @license MIT https://raw.githubusercontent.com/jquery/jquery/3.7.1/LICENSE.txt */
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});
;
/* @license MIT https://raw.githubusercontent.com/jashkenas/underscore/1.13.6/LICENSE */
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.13.6
//     https://underscorejs.org
//     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.13.6",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,o=t.push,i=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(r+1);for(u=0;u<r;u++)o[u]=arguments[u];return o[r]=e,n.apply(this,o)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k&&(T=function(n){return"function"==typeof n||!1});var D=T,R=x("Object"),F=l&&R(new DataView(new ArrayBuffer(8))),V="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=F?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=s||x("Array");function W(n,r){return null!=n&&f.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function J(n){return function(r){return null==r?void 0:r[n]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=c?function(n){return h?h(n)&&!q(n):H(n)&&Q.test(a.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,o=D(u)&&u.prototype||e,i="constructor";for(W(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=b[t])in n&&n[i]!==o[i]&&!r.contains(i)&&r.push(i)}function nn(n){if(!_(n))return[];if(p)return p(n);var r=[];for(var t in n)W(n,t)&&r.push(t);return g&&Z(n,r),r}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.value=function(){return this._wrapped},tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value,tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var o=typeof n;return("function"===o||"object"===o||"object"==typeof r)&&function n(r,t,e,o){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var i=a.call(r);if(i!==a.call(t))return!1;if(F&&"[object Object]"==i&&q(r)){if(!q(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,o)}var f="[object Array]"===i;if(!f&&X(r)){if(G(r)!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;f=!0}if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,l=t.constructor;if(c!==l&&!(D(c)&&c instanceof c&&D(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}o=o||[];var s=(e=e||[]).length;for(;s--;)if(e[s]===r)return o[s]===t;if(e.push(r),o.push(t),f){if((s=r.length)!==t.length)return!1;for(;s--;)if(!on(r[s],t[s],e,o))return!1}else{var p,v=nn(r);if(s=v.length,nn(t).length!==s)return!1;for(;s--;)if(p=v[s],!W(t,p)||!on(r[p],t[p],e,o))return!1}return e.pop(),o.pop(),!0}(n,r,t,e)}function an(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Z(n,r),r}function fn(n){var r=Y(n);return function(t){if(null==t)return!1;var e=an(t);if(Y(e))return!1;for(var u=0;u<r;u++)if(!D(t[n[u]]))return!1;return n!==hn||!D(t[cn])}}var cn="forEach",ln="has",sn=["clear","delete"],pn=["get",ln,"set"],vn=sn.concat(cn,pn),hn=sn.concat(pn),yn=["add"].concat(sn,cn,ln),dn=V?fn(vn):x("Map"),gn=V?fn(hn):x("WeakMap"),bn=V?fn(yn):x("Set"),mn=x("WeakSet");function jn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function _n(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function wn(n){var r=[];for(var t in n)D(n[t])&&r.push(t);return r.sort()}function An(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,f=0;f<a;f++){var c=i[f];r&&void 0!==t[c]||(t[c]=o[c])}return t}}var xn=An(an),Sn=An(nn),On=An(an,!0);function Mn(n){if(!_(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function En(n){return U(n)?n:[n]}function Bn(n){return tn.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){var e=Nn(n,Bn(r));return w(e)?t:e}function Tn(n){return n}function kn(n){return n=Sn({},n),function(r){return rn(r,n)}}function Dn(n){return n=Bn(n),function(r){return Nn(r,n)}}function Rn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}}function Fn(n,r,t){return null==n?Tn:D(n)?Rn(n,r,t):_(n)&&!U(n)?kn(n):Dn(n)}function Vn(n,r){return Fn(n,r,1/0)}function Pn(n,r,t){return tn.iteratee!==Vn?tn.iteratee(n,r):Fn(n,r,t)}function qn(){}function Un(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=En,tn.iteratee=Vn;var Wn=Date.now||function(){return(new Date).getTime()};function zn(n){var r=function(r){return n[r]},t="(?:"+nn(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$n=zn(Ln),Cn=zn(_n(Ln)),Kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Jn=/(.)^/,Gn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Hn=/\\|'|\r|\n|\u2028|\u2029/g;function Qn(n){return"\\"+Gn[n]}var Xn=/^\s*(\w|\$)+\s*$/;var Yn=0;function Zn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=Mn(n.prototype),i=n.apply(o,u);return _(i)?i:o}var nr=j((function(n,r){var t=nr.placeholder,e=function(){for(var u=0,o=r.length,i=Array(o),a=0;a<o;a++)i[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)i.push(arguments[u++]);return Zn(n,e,this,this,i)};return e}));nr.placeholder=tn;var rr=j((function(n,r,t){if(!D(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return Zn(n,e,r,this,t.concat(u))}));return e})),tr=K(Y);function er(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=Y(n);o<i;o++){var a=n[o];if(tr(a)&&(U(a)||L(a)))if(r>1)er(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var ur=j((function(n,r){var t=(r=er(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=rr(n[e],n)}return n}));var or=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),ir=nr(or,tn,1);function ar(n){return function(){return!n.apply(this,arguments)}}function fr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var cr=nr(fr,2);function lr(n,r,t){r=Pn(r,t);for(var e,u=nn(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function sr(n){return function(r,t,e){t=Pn(t,e);for(var u=Y(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}var pr=sr(1),vr=sr(-1);function hr(n,r,t,e){for(var u=(t=Pn(t,e,1))(r),o=0,i=Y(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function yr(n,r,t){return function(e,u,o){var a=0,f=Y(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+f,a):f=o>=0?Math.min(o+1,f):o+f+1;else if(t&&o&&f)return e[o=t(e,u)]===u?o:-1;if(u!=u)return(o=r(i.call(e,a,f),$))>=0?o+a:-1;for(o=n>0?a:f-1;o>=0&&o<f;o+=n)if(e[o]===u)return o;return-1}}var dr=yr(1,pr,hr),gr=yr(-1,vr);function br(n,r,t){var e=(tr(n)?pr:lr)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function mr(n,r,t){var e,u;if(r=Rn(r,t),tr(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=nn(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n}function jr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function _r(n){var r=function(r,t,e,u){var o=!tr(r)&&nn(r),i=(o||r).length,a=n>0?0:i-1;for(u||(e=r[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var f=o?o[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var o=arguments.length>=3;return r(n,Rn(t,u,4),e,o)}}var wr=_r(1),Ar=_r(-1);function xr(n,r,t){var e=[];return r=Pn(r,t),mr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function Sr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function Or(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function Mr(n,r,t,e){return tr(n)||(n=jn(n)),("number"!=typeof t||e)&&(t=0),dr(n,r,t)>=0}var Er=j((function(n,r,t){var e,u;return D(r)?u=r:(r=Bn(r),e=r.slice(0,-1),r=r[r.length-1]),jr(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=Nn(n,e)),null==n)return;o=n[r]}return null==o?o:o.apply(n,t)}))}));function Br(n,r){return jr(n,Dn(r))}function Nr(n,r,t){var e,u,o=-1/0,i=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e>o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}var Ir=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Tr(n){return n?U(n)?i.call(n):S(n)?n.match(Ir):tr(n)?jr(n,Tn):jn(n):[]}function kr(n,r,t){if(null==r||t)return tr(n)||(n=jn(n)),n[Un(n.length-1)];var e=Tr(n),u=Y(e);r=Math.max(Math.min(r,u),0);for(var o=u-1,i=0;i<r;i++){var a=Un(i,o),f=e[i];e[i]=e[a],e[a]=f}return e.slice(0,r)}function Dr(n,r){return function(t,e,u){var o=r?[[],[]]:{};return e=Pn(e,u),mr(t,(function(r,u){var i=e(r,u,t);n(o,r,i)})),o}}var Rr=Dr((function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]})),Fr=Dr((function(n,r,t){n[t]=r})),Vr=Dr((function(n,r,t){W(n,t)?n[t]++:n[t]=1})),Pr=Dr((function(n,r,t){n[t?0:1].push(r)}),!0);function qr(n,r,t){return r in t}var Ur=j((function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(r.length>1&&(e=Rn(e,r[1])),r=an(n)):(e=qr,r=er(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}return t})),Wr=j((function(n,r){var t,e=r[0];return D(e)?(e=ar(e),r.length>1&&(t=r[1])):(r=jr(er(r,!1,!1),String),e=function(n,t){return!Mr(r,t)}),Ur(n,e,t)}));function zr(n,r,t){return i.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Lr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:zr(n,n.length-r)}function $r(n,r,t){return i.call(n,null==r||t?1:r)}var Cr=j((function(n,r){return r=er(r,!0,!0),xr(n,(function(n){return!Mr(r,n)}))})),Kr=j((function(n,r){return Cr(n,r)}));function Jr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Pn(t,e));for(var u=[],o=[],i=0,a=Y(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?Mr(o,c)||(o.push(c),u.push(f)):Mr(u,f)||u.push(f)}return u}var Gr=j((function(n){return Jr(er(n,!0,!0))}));function Hr(n){for(var r=n&&Nr(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Br(n,e);return t}var Qr=j(Hr);function Xr(n,r){return n._chain?tn(r).chain():r}function Yr(n){return mr(wn(n),(function(r){var t=tn[r]=n[r];tn.prototype[r]=function(){var n=[this._wrapped];return o.apply(n,arguments),Xr(this,t.apply(tn,n))}})),tn}mr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];tn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Xr(this,t)}})),mr(["concat","join","slice"],(function(n){var r=t[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Xr(this,n)}}));var Zr=Yr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:dn,isWeakMap:gn,isSet:bn,isWeakSet:mn,keys:nn,allKeys:an,values:jn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:_n,functions:wn,methods:wn,extend:xn,extendOwn:Sn,assign:Sn,defaults:On,create:function(n,r){var t=Mn(n);return r&&Sn(t,r),t},clone:function(n){return _(n)?U(n)?n.slice():xn({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=Bn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Pn(r,t);for(var e=nn(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:C,noop:qn,toPath:En,property:Dn,propertyOf:function(n){return null==n?qn:function(r){return In(n,r)}},matcher:kn,matches:kn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Rn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Un,now:Wn,escape:$n,unescape:Cn,templateSettings:Kn,template:function(n,r,t){!r&&t&&(r=t),r=On({},r,tn.templateSettings);var e=RegExp([(r.escape||Jn).source,(r.interpolate||Jn).source,(r.evaluate||Jn).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,(function(r,t,e,i,a){return o+=n.slice(u,a).replace(Hn,Qn),u=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),r})),o+="';\n";var i,a=r.variable;if(a){if(!Xn.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(a,"_",o)}catch(n){throw n.source=o,n}var f=function(n){return i.call(this,n,tn)};return f.source="function("+a+"){\n"+o+"}",f},result:function(n,r,t){var e=(r=Bn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=D(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Yn+"";return n?n+r:r},chain:function(n){var r=tn(n);return r._chain=!0,r},iteratee:Vn,partial:nr,bind:rr,bindAll:ur,memoize:function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return W(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},delay:or,defer:ir,throttle:function(n,r,t){var e,u,o,i,a=0;t||(t={});var f=function(){a=!1===t.leading?0:Wn(),e=null,i=n.apply(u,o),e||(u=o=null)},c=function(){var c=Wn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,o=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,i=n.apply(u,o),e||(u=o=null)):e||!1===t.trailing||(e=setTimeout(f,l)),i};return c.cancel=function(){clearTimeout(e),a=0,e=u=o=null},c},debounce:function(n,r,t){var e,u,o,i,a,f=function(){var c=Wn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(i=n.apply(a,o)),e||(o=a=null))},c=j((function(c){return a=this,o=c,u=Wn(),e||(e=setTimeout(f,r),t&&(i=n.apply(a,o))),i}));return c.cancel=function(){clearTimeout(e),e=o=a=null},c},wrap:function(n,r){return nr(r,n)},negate:ar,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:fr,once:cr,findKey:lr,findIndex:pr,findLastIndex:vr,sortedIndex:hr,indexOf:dr,lastIndexOf:gr,find:br,detect:br,findWhere:function(n,r){return br(n,kn(r))},each:mr,forEach:mr,map:jr,collect:jr,reduce:wr,foldl:wr,inject:wr,reduceRight:Ar,foldr:Ar,filter:xr,select:xr,reject:function(n,r,t){return xr(n,ar(Pn(r)),t)},every:Sr,all:Sr,some:Or,any:Or,contains:Mr,includes:Mr,include:Mr,invoke:Er,pluck:Br,where:function(n,r){return xr(n,kn(r))},max:Nr,min:function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e<o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o},shuffle:function(n){return kr(n,1/0)},sample:kr,sortBy:function(n,r,t){var e=0;return r=Pn(r,t),Br(jr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Rr,indexBy:Fr,countBy:Vr,partition:Pr,toArray:Tr,size:function(n){return null==n?0:tr(n)?n.length:nn(n).length},pick:Ur,omit:Wr,first:Lr,head:Lr,take:Lr,initial:zr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:$r(n,Math.max(0,n.length-r))},rest:$r,tail:$r,drop:$r,compact:function(n){return xr(n,Boolean)},flatten:function(n,r){return er(n,r,!1)},without:Kr,uniq:Jr,unique:Jr,union:Gr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var o=n[e];if(!Mr(r,o)){var i;for(i=1;i<t&&Mr(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Cr,unzip:Hr,transpose:Hr,zip:Qr,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(i.call(n,e,e+=r));return t},mixin:Yr,default:tn});return Zr._=Zr,Zr}));;
/* @license GPL-2.0-or-later https://git.drupalcode.org/project/once/-/raw/v1.0.1/LICENSE.md */
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/* @license MIT https://raw.githubusercontent.com/jashkenas/backbone/1.6.0/LICENSE */
(function(r){var n=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(t,e,i){n.Backbone=r(n,i,t,e)})}else if(typeof exports!=="undefined"){var t=require("underscore"),e;try{e=require("jquery")}catch(t){}r(n,exports,t,e)}else{n.Backbone=r(n,{},n._,n.jQuery||n.Zepto||n.ender||n.$)}})(function(t,h,x,e){var i=t.Backbone;var a=Array.prototype.slice;h.VERSION="1.6.0";h.$=e;h.noConflict=function(){t.Backbone=i;return this};h.emulateHTTP=false;h.emulateJSON=false;var r=h.Events={};var o=/\s+/;var l;var u=function(t,e,i,r,n){var s=0,a;if(i&&typeof i==="object"){if(r!==void 0&&"context"in n&&n.context===void 0)n.context=r;for(a=x.keys(i);s<a.length;s++){e=u(t,e,a[s],i[a[s]],n)}}else if(i&&o.test(i)){for(a=i.split(o);s<a.length;s++){e=t(e,a[s],r,n)}}else{e=t(e,i,r,n)}return e};r.on=function(t,e,i){this._events=u(n,this._events||{},t,e,{context:i,ctx:this,listening:l});if(l){var r=this._listeners||(this._listeners={});r[l.id]=l;l.interop=false}return this};r.listenTo=function(t,e,i){if(!t)return this;var r=t._listenId||(t._listenId=x.uniqueId("l"));var n=this._listeningTo||(this._listeningTo={});var s=l=n[r];if(!s){this._listenId||(this._listenId=x.uniqueId("l"));s=l=n[r]=new p(this,t)}var a=c(t,e,i,this);l=void 0;if(a)throw a;if(s.interop)s.on(e,i);return this};var n=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,r){try{t.on(e,i,r)}catch(t){return t}};r.off=function(t,e,i){if(!this._events)return this;this._events=u(s,this._events,t,e,{context:i,listeners:this._listeners});return this};r.stopListening=function(t,e,i){var r=this._listeningTo;if(!r)return this;var n=t?[t._listenId]:x.keys(r);for(var s=0;s<n.length;s++){var a=r[n[s]];if(!a)break;a.obj.off(e,i,this);if(a.interop)a.off(e,i)}if(x.isEmpty(r))this._listeningTo=void 0;return this};var s=function(t,e,i,r){if(!t)return;var n=r.context,s=r.listeners;var a=0,o;if(!e&&!n&&!i){for(o=x.keys(s);a<o.length;a++){s[o[a]].cleanup()}return}o=e?[e]:x.keys(t);for(;a<o.length;a++){e=o[a];var h=t[e];if(!h)break;var l=[];for(var u=0;u<h.length;u++){var c=h[u];if(i&&i!==c.callback&&i!==c.callback._callback||n&&n!==c.context){l.push(c)}else{var f=c.listening;if(f)f.off(e,i)}}if(l.length){t[e]=l}else{delete t[e]}}return t};r.once=function(t,e,i){var r=u(f,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(r,e,i)};r.listenToOnce=function(t,e,i){var r=u(f,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,r)};var f=function(t,e,i,r){if(i){var n=t[e]=x.once(function(){r(e,n);i.apply(this,arguments)});n._callback=i}return t};r.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];u(d,this._events,t,void 0,i);return this};var d=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)v(n,r);if(s)v(s,[e].concat(r))}return t};var v=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};var p=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};p.prototype.on=r.on;p.prototype.off=function(t,e){var i;if(this.interop){this._events=u(s,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};p.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};r.bind=r.on;r.unbind=r.off;x.extend(h,r);var g=h.Model=function(t,e){var i=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=x.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};var r=x.result(this,"defaults");i=x.defaults(x.extend({},r,i),r);this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};x.extend(g.prototype,r,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return x.clone(this.attributes)},sync:function(){return h.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return x.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!x.iteratee(t,this)(this.attributes)},set:function(t,e,i){if(t==null)return this;var r;if(typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i||(i={});if(!this._validate(r,i))return false;var n=i.unset;var s=i.silent;var a=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=x.clone(this.attributes);this.changed={}}var h=this.attributes;var l=this.changed;var u=this._previousAttributes;for(var c in r){e=r[c];if(!x.isEqual(h[c],e))a.push(c);if(!x.isEqual(u[c],e)){l[c]=e}else{delete l[c]}n?delete h[c]:h[c]=e}if(this.idAttribute in r){var f=this.id;this.id=this.get(this.idAttribute);this.trigger("changeId",this,f,i)}if(!s){if(a.length)this._pending=i;for(var d=0;d<a.length;d++){this.trigger("change:"+a[d],this,h[a[d]],i)}}if(o)return this;if(!s){while(this._pending){i=this._pending;this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,x.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,x.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!x.isEmpty(this.changed);return x.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?x.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var i={};var r;for(var n in t){var s=t[n];if(x.isEqual(e[n],s))continue;i[n]=s;r=true}return r?i:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return x.clone(this._previousAttributes)},fetch:function(i){i=x.extend({parse:true},i);var r=this;var n=i.success;i.success=function(t){var e=i.parse?r.parse(t,i):t;if(!r.set(e,i))return false;if(n)n.call(i.context,r,t,i);r.trigger("sync",r,t,i)};G(this,i);return this.sync("read",this,i)},save:function(t,e,i){var r;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=x.extend({validate:true,parse:true},i);var n=i.wait;if(r&&!n){if(!this.set(r,i))return false}else if(!this._validate(r,i)){return false}var s=this;var a=i.success;var o=this.attributes;i.success=function(t){s.attributes=o;var e=i.parse?s.parse(t,i):t;if(n)e=x.extend({},r,e);if(e&&!s.set(e,i))return false;if(a)a.call(i.context,s,t,i);s.trigger("sync",s,t,i)};G(this,i);if(r&&n)this.attributes=x.extend({},o,r);var h=this.isNew()?"create":i.patch?"patch":"update";if(h==="patch"&&!i.attrs)i.attrs=r;var l=this.sync(h,this,i);this.attributes=o;return l},destroy:function(e){e=e?x.clone(e):{};var i=this;var r=e.success;var n=e.wait;var s=function(){i.stopListening();i.trigger("destroy",i,i.collection,e)};e.success=function(t){if(n)s();if(r)r.call(e.context,i,t,e);if(!i.isNew())i.trigger("sync",i,t,e)};var t=false;if(this.isNew()){x.defer(e.success)}else{G(this,e);t=this.sync("delete",this,e)}if(!n)s();return t},url:function(){var t=x.result(this,"urlRoot")||x.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},x.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=x.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,x.extend(e,{validationError:i}));return false}});var m=h.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,x.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var _={add:true,remove:false};var E=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};x.extend(m.prototype,r,{model:g,preinitialize:function(){},initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return h.sync.apply(this,arguments)},add:function(t,e){return this.set(t,x.extend({merge:false},e,_))},remove:function(t,e){e=x.extend({},e);var i=!x.isArray(t);t=i?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return i?r[0]:r},set:function(t,e){if(t==null)return;e=x.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var i=!x.isArray(t);t=i?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var n=[];var s=[];var a=[];var o=[];var h={};var l=e.add;var u=e.merge;var c=e.remove;var f=false;var d=this.comparator&&r==null&&e.sort!==false;var v=x.isString(this.comparator)?this.comparator:null;var p,g;for(g=0;g<t.length;g++){p=t[g];var m=this.get(p);if(m){if(u&&p!==m){var _=this._isModel(p)?p.attributes:p;if(e.parse)_=m.parse(_,e);m.set(_,e);a.push(m);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;n.push(m)}t[g]=m}else if(l){p=t[g]=this._prepareModel(p,e);if(p){s.push(p);this._addReference(p,e);h[p.cid]=true;n.push(p)}}}if(c){for(g=0;g<this.length;g++){p=this.models[g];if(!h[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&l&&c;if(n.length&&b){y=this.length!==n.length||x.some(this.models,function(t,e){return t!==n[e]});this.models.length=0;E(this.models,n,0);this.length=this.models.length}else if(s.length){if(d)f=true;E(this.models,s,r==null?this.length:r);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(g=0;g<s.length;g++){if(r!=null)e.index=r+g;p=s[g];p.trigger("add",p,this,e)}if(f||y)this.trigger("sort",this,e);if(s.length||o.length||a.length){e.changes={added:s,removed:o,merged:a};this.trigger("update",this,e)}}return i?t[0]:t},reset:function(t,e){e=e?x.clone(e):{};for(var i=0;i<this.models.length;i++){this._removeReference(this.models[i],e)}e.previousModels=this.models;this._reset();t=this.add(t,x.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,x.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,x.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return a.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t,t.idAttribute)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var i=e.length;if(x.isFunction(e))e=e.bind(this);if(i===1||x.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(i){i=x.extend({parse:true},i);var r=i.success;var n=this;i.success=function(t){var e=i.reset?"reset":"set";n[e](t,i);if(r)r.call(i.context,n,t,i);n.trigger("sync",n,t,i)};G(this,i);return this.sync("read",this,i)},create:function(t,e){e=e?x.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r){t.off("error",n._forwardPristineError,n);n.add(t,i)}if(s)s.call(i.context,t,e,i)};if(r){t.once("error",this._forwardPristineError,this)}t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t,e){return t[e||this.model.prototype.idAttribute||"id"]},values:function(){return new b(this,S)},keys:function(){return new b(this,I)},entries:function(){return new b(this,k)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?x.clone(e):{};e.collection=this;var i;if(this.model.prototype){i=new this.model(t,e)}else{i=this.model(t,e)}if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes,n.idAttribute);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}if(t.length>0&&!e.silent)delete e.index;return i},_isModel:function(t){return t instanceof g},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="changeId"){var n=this.modelId(e.previousAttributes(),e.idAttribute);var s=this.modelId(e.attributes,e.idAttribute);if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)},_forwardPristineError:function(t,e,i){if(this.has(t))return;this._onModelEvent("error",t,e,i)}});var y=typeof Symbol==="function"&&Symbol.iterator;if(y){m.prototype[y]=m.prototype.values}var b=function(t,e){this._collection=t;this._kind=e;this._index=0};var S=1;var I=2;var k=3;if(y){b.prototype[y]=function(){return this}}b.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===S){e=t}else{var i=this._collection.modelId(t.attributes,t.idAttribute);if(this._kind===I){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var A=h.View=function(t){this.cid=x.uniqueId("view");this.preinitialize.apply(this,arguments);x.extend(this,x.pick(t,T));this._ensureElement();this.initialize.apply(this,arguments)};var P=/^(\S+)\s*(.*)$/;var T=["model","collection","el","id","attributes","className","tagName","events"];x.extend(A.prototype,r,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof h.$?t:h.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=x.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!x.isFunction(i))i=this[i];if(!i)continue;var r=e.match(P);this.delegate(r[1],r[2],i.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=x.extend({},x.result(this,"attributes"));if(this.id)t.id=x.result(this,"id");if(this.className)t["class"]=x.result(this,"className");this.setElement(this._createElement(x.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(x.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var H=function(r,t,n,s){switch(t){case 1:return function(){return r[n](this[s])};case 2:return function(t){return r[n](this[s],t)};case 3:return function(t,e){return r[n](this[s],C(t,this),e)};case 4:return function(t,e,i){return r[n](this[s],C(t,this),e,i)};default:return function(){var t=a.call(arguments);t.unshift(this[s]);return r[n].apply(r,t)}}};var $=function(i,r,t,n){x.each(t,function(t,e){if(r[e])i.prototype[e]=H(r,t,e,n)})};var C=function(e,t){if(x.isFunction(e))return e;if(x.isObject(e)&&!t._isModel(e))return R(e);if(x.isString(e))return function(t){return t.get(e)};return e};var R=function(t){var e=x.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};x.each([[m,M,"models"],[g,N,"attributes"]],function(t){var i=t[0],e=t[1],r=t[2];i.mixin=function(t){var e=x.reduce(x.functions(t),function(t,e){t[e]=0;return t},{});$(i,t,e,r)};$(i,x,e,r)});h.sync=function(t,e,r){var i=j[t];x.defaults(r||(r={}),{emulateHTTP:h.emulateHTTP,emulateJSON:h.emulateJSON});var n={type:i,dataType:"json"};if(!r.url){n.url=x.result(e,"url")||V()}if(r.data==null&&e&&(t==="create"||t==="update"||t==="patch")){n.contentType="application/json";n.data=JSON.stringify(r.attrs||e.toJSON(r))}if(r.emulateJSON){n.contentType="application/x-www-form-urlencoded";n.data=n.data?{model:n.data}:{}}if(r.emulateHTTP&&(i==="PUT"||i==="DELETE"||i==="PATCH")){n.type="POST";if(r.emulateJSON)n.data._method=i;var s=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",i);if(s)return s.apply(this,arguments)}}if(n.type!=="GET"&&!r.emulateJSON){n.processData=false}var a=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(a)a.call(r.context,t,e,i)};var o=r.xhr=h.ajax(x.extend(n,r));e.trigger("request",e,o,r);return o};var j={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};h.ajax=function(){return h.$.ajax.apply(h.$,arguments)};var O=h.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;x.extend(O.prototype,r,{preinitialize:function(){},initialize:function(){},route:function(i,r,n){if(!x.isRegExp(i))i=this._routeToRegExp(i);if(x.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;h.history.route(i,function(t){var e=s._extractParameters(i,t);if(s.execute(n,e,r)!==false){s.trigger.apply(s,["route:"+r].concat(e));s.trigger("route",r,e);h.history.trigger("route",s,r,e)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,e){h.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=x.result(this,"routes");var t,e=x.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return x.map(i,function(t,e){if(e===i.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=h.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;x.extend(B.prototype,r,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=x.extend({root:"/"},this.options,t);this.root=this.options.root;this._trailingSlash=this.options.trailingSlash;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var i=document.body;var r=i.insertBefore(this.iframe,i.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var n=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){n("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){n("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment){if(!this.matchRoot())return this.notfound();return false}if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(e){if(!this.matchRoot())return this.notfound();e=this.fragment=this.getFragment(e);return x.some(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}})||this.notfound()},notfound:function(){this.trigger("notfound");return false},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(!this._trailingSlash&&(t===""||t.charAt(0)==="?")){i=i.slice(0,-1)||"/"}var r=i+t;t=t.replace(W,"");var n=this.decodeFragment(t);if(this.fragment===n)return;this.fragment=n;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});h.history=new B;var D=function(t,e){var i=this;var r;if(t&&x.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}x.extend(r,i,e);r.prototype=x.create(i.prototype,t);r.prototype.constructor=r;r.__super__=i.prototype;return r};g.extend=m.extend=O.extend=A.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(e,i){var r=i.error;i.error=function(t){if(r)r.call(i.context,e,t,i);e.trigger("error",e,t,i)}};h._debug=function(){return{root:t,_:x}};return h});

/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function(){const settingsElement=document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');window.drupalSettings={};if(settingsElement!==null)window.drupalSettings=JSON.parse(settingsElement.textContent);})();;
window.Drupal={behaviors:{},locale:{}};(function(Drupal,drupalSettings,drupalTranslations,console,Proxy,Reflect){Drupal.throwError=function(error){setTimeout(()=>{throw error;},0);};Drupal.attachBehaviors=function(context,settings){context=context||document;settings=settings||drupalSettings;const behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach((i)=>{if(typeof behaviors[i].attach==='function')try{behaviors[i].attach(context,settings);}catch(e){Drupal.throwError(e);}});};Drupal.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||drupalSettings;trigger=trigger||'unload';const behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach((i)=>{if(typeof behaviors[i].detach==='function')try{behaviors[i].detach(context,settings,trigger);}catch(e){Drupal.throwError(e);}});};Drupal.checkPlain=function(str){str=str.toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');return str;};Drupal.formatString=function(str,args){const processedArgs={};Object.keys(args||{}).forEach((key)=>{switch(key.charAt(0)){case '@':processedArgs[key]=Drupal.checkPlain(args[key]);break;case '!':processedArgs[key]=args[key];break;default:processedArgs[key]=Drupal.theme('placeholder',args[key]);break;}});return Drupal.stringReplace(str,processedArgs,null);};Drupal.stringReplace=function(str,args,keys){if(str.length===0)return str;if(!Array.isArray(keys)){keys=Object.keys(args||{});keys.sort((a,b)=>a.length-b.length);}if(keys.length===0)return str;const key=keys.pop();const fragments=str.split(key);if(keys.length){for(let i=0;i<fragments.length;i++)fragments[i]=Drupal.stringReplace(fragments[i],args,keys.slice(0));}return fragments.join(args[key]);};Drupal.t=function(str,args,options){options=options||{};options.context=options.context||'';if(typeof drupalTranslations!=='undefined'&&drupalTranslations.strings&&drupalTranslations.strings[options.context]&&drupalTranslations.strings[options.context][str])str=drupalTranslations.strings[options.context][str];if(args)str=Drupal.formatString(str,args);return str;};Drupal.url=function(path){return drupalSettings.path.baseUrl+drupalSettings.path.pathPrefix+path;};Drupal.url.toAbsolute=function(url){const urlParsingNode=document.createElement('a');try{url=decodeURIComponent(url);}catch(e){}urlParsingNode.setAttribute('href',url);return urlParsingNode.cloneNode(false).href;};Drupal.url.isLocal=function(url){let absoluteUrl=Drupal.url.toAbsolute(url);let {protocol}=window.location;if(protocol==='http:'&&absoluteUrl.startsWith('https:'))protocol='https:';let baseUrl=`${protocol}//${window.location.host}${drupalSettings.path.baseUrl.slice(0,-1)}`;try{absoluteUrl=decodeURIComponent(absoluteUrl);}catch(e){}try{baseUrl=decodeURIComponent(baseUrl);}catch(e){}return absoluteUrl===baseUrl||absoluteUrl.startsWith(`${baseUrl}/`);};Drupal.formatPlural=function(count,singular,plural,args,options){args=args||{};args['@count']=count;const pluralDelimiter=drupalSettings.pluralDelimiter;const translations=Drupal.t(singular+pluralDelimiter+plural,args,options).split(pluralDelimiter);let index=0;if(typeof drupalTranslations!=='undefined'&&drupalTranslations.pluralFormula)index=count in drupalTranslations.pluralFormula?drupalTranslations.pluralFormula[count]:drupalTranslations.pluralFormula.default;else{if(args['@count']!==1)index=1;}return translations[index];};Drupal.encodePath=function(item){return window.encodeURIComponent(item).replace(/%2F/g,'/');};Drupal.deprecationError=({message})=>{if(drupalSettings.suppressDeprecationErrors===false&&typeof console!=='undefined'&&console.warn)console.warn(`[Deprecation] ${message}`);};Drupal.deprecatedProperty=({target,deprecatedProperty,message})=>{if(!Proxy||!Reflect)return target;return new Proxy(target,{get:(target,key,...rest)=>{if(key===deprecatedProperty)Drupal.deprecationError({message});return Reflect.get(target,key,...rest);}});};Drupal.theme=function(func,...args){if(func in Drupal.theme)return Drupal.theme[func](...args);};Drupal.theme.placeholder=function(str){return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;};Drupal.elementIsVisible=function(elem){return !!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};Drupal.elementIsHidden=function(elem){return !Drupal.elementIsVisible(elem);};})(Drupal,window.drupalSettings,window.drupalTranslations,window.console,window.Proxy,window.Reflect);;
if(window.jQuery)jQuery.noConflict();document.documentElement.className+=' js';(function(Drupal,drupalSettings){const domReady=(callback)=>{const listener=()=>{callback();document.removeEventListener('DOMContentLoaded',listener);};if(document.readyState!=='loading')setTimeout(callback,0);else document.addEventListener('DOMContentLoaded',listener);};domReady(()=>{Drupal.attachBehaviors(document,drupalSettings);});})(Drupal,window.drupalSettings);;
(function($,Drupal,drupalSettings,_,Backbone,JSON,storage){const options=$.extend(drupalSettings.contextual,{strings:{open:Drupal.t('Open'),close:Drupal.t('Close')}});const cachedPermissionsHash=storage.getItem('Drupal.contextual.permissionsHash');const permissionsHash=drupalSettings.user.permissionsHash;if(cachedPermissionsHash!==permissionsHash){if(typeof permissionsHash==='string')_.chain(storage).keys().each((key)=>{if(key.startsWith('Drupal.contextual.'))storage.removeItem(key);});storage.setItem('Drupal.contextual.permissionsHash',permissionsHash);}function adjustIfNestedAndOverlapping($contextual){const $contextuals=$contextual.parents('.contextual-region').eq(-1).find('.contextual');if($contextuals.length<=1)return;const firstTop=$contextuals.eq(0).offset().top;const secondTop=$contextuals.eq(1).offset().top;if(firstTop===secondTop){const $nestedContextual=$contextuals.eq(1);let height=0;const $trigger=$nestedContextual.find('.trigger');$trigger.removeClass('visually-hidden');height=$nestedContextual.height();$trigger.addClass('visually-hidden');$nestedContextual[0].style.top=$nestedContextual.position().top+height;}}function initContextual($contextual,html){const $region=$contextual.closest('.contextual-region');const contextual=Drupal.contextual;$contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));const destination=`destination=${Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath+window.location.search))}`;$contextual.find('.contextual-links a').each(function(){const url=this.getAttribute('href');const glue=url.includes('?')?'&':'?';this.setAttribute('href',url+glue+destination);});let title='';const $regionHeading=$region.find('h2');if($regionHeading.length)title=$regionHeading[0].textContent.trim();const model=new contextual.StateModel({title});const viewOptions=$.extend({el:$contextual,model},options);contextual.views.push({visual:new contextual.VisualView(viewOptions),aural:new contextual.AuralView(viewOptions),keyboard:new contextual.KeyboardView(viewOptions)});contextual.regionViews.push(new contextual.RegionView($.extend({el:$region,model},options)));contextual.collection.add(model);$(document).trigger('drupalContextualLinkAdded',Drupal.deprecatedProperty({target:{$el:$contextual,$region,model},deprecatedProperty:'model',message:'The model property is deprecated in drupal:9.4.0 and is removed from drupal:12.0.0. There is no replacement.'}));adjustIfNestedAndOverlapping($contextual);}Drupal.behaviors.contextual={attach(context){const $context=$(context);let $placeholders=$(once('contextual-render','[data-contextual-id]',context));if($placeholders.length===0)return;const ids=[];$placeholders.each(function(){ids.push({id:$(this).attr('data-contextual-id'),token:$(this).attr('data-contextual-token')});});const uncachedIDs=[];const uncachedTokens=[];ids.forEach((contextualID)=>{const html=storage.getItem(`Drupal.contextual.${contextualID.id}`);if(html&&html.length){window.setTimeout(()=>{initContextual($context.find(`[data-contextual-id="${contextualID.id}"]:empty`).eq(0),html);});return;}uncachedIDs.push(contextualID.id);uncachedTokens.push(contextualID.token);});if(uncachedIDs.length>0)$.ajax({url:Drupal.url('contextual/render'),type:'POST',data:{'ids[]':uncachedIDs,'tokens[]':uncachedTokens},dataType:'json',success(results){_.each(results,(html,contextualID)=>{storage.setItem(`Drupal.contextual.${contextualID}`,html);if(html.length>0){$placeholders=$context.find(`[data-contextual-id="${contextualID}"]`);for(let i=0;i<$placeholders.length;i++)initContextual($placeholders.eq(i),html);}});}});}};Drupal.contextual={views:[],regionViews:[]};Drupal.contextual.collection=new Backbone.Collection([],{model:Drupal.contextual.StateModel});Drupal.theme.contextualTrigger=function(){return '<button class="trigger visually-hidden focusable" type="button"></button>';};$(document).on('drupalContextualLinkAdded',(event,data)=>{Drupal.ajax.bindAjaxLinks(data.$el[0]);});})(jQuery,Drupal,drupalSettings,_,Backbone,window.JSON,window.sessionStorage);;
(function(Drupal,Backbone){Drupal.contextual.StateModel=Backbone.Model.extend({defaults:{title:'',regionIsHovered:false,hasFocus:false,isOpen:false,isLocked:false},toggleOpen(){const newIsOpen=!this.get('isOpen');this.set('isOpen',newIsOpen);if(newIsOpen)this.focus();return this;},close(){this.set('isOpen',false);return this;},focus(){this.set('hasFocus',true);const cid=this.cid;this.collection.each((model)=>{if(model.cid!==cid)model.close().blur();});return this;},blur(){if(!this.get('isOpen'))this.set('hasFocus',false);return this;}});})(Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextual.AuralView=Backbone.View.extend({initialize(options){this.options=options;this.listenTo(this.model,'change',this.render);this.render();},render(){const isOpen=this.model.get('isOpen');this.$el.find('.contextual-links').prop('hidden',!isOpen);const $trigger=this.$el.find('.trigger');$trigger.each((index,element)=>{element.textContent=Drupal.t('@action @title configuration options',{'@action':!isOpen?this.options.strings.open:this.options.strings.close,'@title':this.model.get('title')});}).attr('aria-pressed',isOpen);}});})(Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextual.KeyboardView=Backbone.View.extend({events:{'focus .trigger':'focus','focus .contextual-links a':'focus','blur .trigger':function(){this.model.blur();},'blur .contextual-links a':function(){const that=this;this.timer=window.setTimeout(()=>{that.model.close().blur();},150);}},initialize(){this.timer=NaN;},focus(){window.clearTimeout(this.timer);this.model.focus();}});})(Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextual.RegionView=Backbone.View.extend({events(){let touchStart=false;return {touchstart(){touchStart=true;},mouseenter(){if(!touchStart)this.model.set('regionIsHovered',true);},mouseleave(){if(!touchStart)this.model.close().blur().set('regionIsHovered',false);},mousemove(){touchStart=false;}};},initialize(){this.listenTo(this.model,'change:hasFocus',this.render);},render(){this.$el.toggleClass('focus',this.model.get('hasFocus'));return this;}});})(Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextual.VisualView=Backbone.View.extend({events(){const touchEndToClick=function(event){event.preventDefault();event.target.click();};let touchStart=false;return {touchstart(){touchStart=true;},mouseenter(){if(!touchStart)this.model.focus();},mousemove(){touchStart=false;},'click .trigger':function(){this.model.toggleOpen();},'touchend .trigger':touchEndToClick,'click .contextual-links a':function(){this.model.close().blur();},'touchend .contextual-links a':touchEndToClick};},initialize(){this.listenTo(this.model,'change',this.render);},render(){const isOpen=this.model.get('isOpen');const isVisible=this.model.get('isLocked')||this.model.get('regionIsHovered')||isOpen;this.$el.toggleClass('open',isOpen).find('.trigger').toggleClass('visually-hidden',!isVisible);if('isOpen' in this.model.changed)this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);return this;}});})(Drupal,Backbone);;
/* @license MIT https://raw.githubusercontent.com/focus-trap/tabbable/v6.2.0/LICENSE */
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):(t="undefined"!=typeof globalThis?globalThis:t||self,function(){var n=t.tabbable,o=t.tabbable={};e(o),o.noConflict=function(){return t.tabbable=n,o}}())}(this,(function(t){"use strict";var e=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],n=e.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!o&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return null==t?void 0:t.ownerDocument},a=function t(e,n){var o;void 0===n&&(n=!0);var r=null==e||null===(o=e.getAttribute)||void 0===o?void 0:o.call(e,"inert");return""===r||"true"===r||n&&e&&t(e.parentNode)},l=function(t,e,o){if(a(t))return[];var i=Array.prototype.slice.apply(t.querySelectorAll(n));return e&&r.call(t,n)&&i.unshift(t),i=i.filter(o)},u=function t(e,o,i){for(var l=[],u=Array.from(e);u.length;){var d=u.shift();if(!a(d,!1))if("SLOT"===d.tagName){var c=d.assignedElements(),f=t(c.length?c:d.children,!0,i);i.flatten?l.push.apply(l,f):l.push({scopeParent:d,candidates:f})}else{r.call(d,n)&&i.filter(d)&&(o||!e.includes(d))&&l.push(d);var s=d.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(d),p=!a(s,!1)&&(!i.shadowRootFilter||i.shadowRootFilter(d));if(s&&p){var h=t(!0===s?d.children:s.children,!0,i);i.flatten?l.push.apply(l,h):l.push({scopeParent:d,candidates:h})}else u.unshift.apply(u,d.children)}}return l},d=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},c=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var e,n=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===n||"true"===n}(t))&&!d(t)?0:t.tabIndex},f=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},s=function(t){return"INPUT"===t.tagName},p=function(t){return function(t){return s(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||i(t),o=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=o(window.CSS.escape(t.name));else try{e=o(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var r=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!r||r===t}(t)},h=function(t){var e=t.getBoundingClientRect(),n=e.width,o=e.height;return 0===n&&0===o},v=function(t,e){var n=e.displayCheck,o=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var a=r.call(t,"details>summary:first-of-type")?t.parentElement:t;if(r.call(a,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return h(t)}else{if("function"==typeof o){for(var l=t;t;){var u=t.parentElement,d=i(t);if(u&&!u.shadowRoot&&!0===o(u))return h(t);t=t.assignedSlot?t.assignedSlot:u||d===t.ownerDocument?u:d.host}t=l}if(function(t){var e,n,o,r,a=t&&i(t),l=null===(e=a)||void 0===e?void 0:e.host,u=!1;if(a&&a!==t)for(u=!!(null!==(n=l)&&void 0!==n&&null!==(o=n.ownerDocument)&&void 0!==o&&o.contains(l)||null!=t&&null!==(r=t.ownerDocument)&&void 0!==r&&r.contains(t));!u&&l;){var d,c,f;u=!(null===(c=l=null===(d=a=i(l))||void 0===d?void 0:d.host)||void 0===c||null===(f=c.ownerDocument)||void 0===f||!f.contains(l))}return u}(t))return!t.getClientRects().length;if("legacy-full"!==n)return!0}return!1},b=function(t,e){return!(e.disabled||a(e)||function(t){return s(t)&&"hidden"===t.type}(e)||v(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var o=e.children.item(n);if("LEGEND"===o.tagName)return!!r.call(e,"fieldset[disabled] *")||!o.contains(t)}return!0}e=e.parentElement}return!1}(e))},m=function(t,e){return!(p(e)||c(e)<0||!b(t,e))},g=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},y=function t(e){var n=[],o=[];return e.forEach((function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,l=function(t,e){var n=c(t);return n<0&&e&&!d(t)?0:n}(a,i),u=i?t(e.candidates):a;0===l?i?n.push.apply(n,u):n.push(a):o.push({documentOrder:r,tabIndex:l,item:e,isScope:i,content:u})})),o.sort(f).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(n)},w=e.concat("iframe").join(",");t.focusable=function(t,e){return(e=e||{}).getShadowRoot?u([t],e.includeContainer,{filter:b.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):l(t,e.includeContainer,b.bind(null,e))},t.getTabIndex=c,t.isFocusable=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==r.call(t,w)&&b(e,t)},t.isTabbable=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==r.call(t,n)&&m(e,t)},t.tabbable=function(t,e){var n;return n=(e=e||{}).getShadowRoot?u([t],e.includeContainer,{filter:m.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:g}):l(t,e.includeContainer,m.bind(null,e)),y(n)},Object.defineProperty(t,"__esModule",{value:!0})}));

;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($,Drupal){Drupal.theme.progressBar=function(id){const escapedId=Drupal.checkPlain(id);return (`<div id="${escapedId}" class="progress" aria-live="polite">`+'<div class="progress__label">&nbsp;</div>'+'<div class="progress__track"><div class="progress__bar"></div></div>'+'<div class="progress__percentage"></div>'+'<div class="progress__description">&nbsp;</div>'+'</div>');};Drupal.ProgressBar=function(id,updateCallback,method,errorCallback){this.id=id;this.method=method||'GET';this.updateCallback=updateCallback;this.errorCallback=errorCallback;this.element=$(Drupal.theme('progressBar',id));};$.extend(Drupal.ProgressBar.prototype,{setProgress(percentage,message,label){if(percentage>=0&&percentage<=100){$(this.element).find('div.progress__bar').each(function(){this.style.width=`${percentage}%`;});$(this.element).find('div.progress__percentage').html(`${percentage}%`);}$('div.progress__description',this.element).html(message);$('div.progress__label',this.element).html(label);if(this.updateCallback)this.updateCallback(percentage,message,this);},startMonitoring(uri,delay){this.delay=delay;this.uri=uri;this.sendPing();},stopMonitoring(){clearTimeout(this.timer);this.uri=null;},sendPing(){if(this.timer)clearTimeout(this.timer);if(this.uri){const pb=this;let uri=this.uri;if(!uri.includes('?'))uri+='?';else uri+='&';uri+='_format=json';$.ajax({type:this.method,url:uri,data:'',dataType:'json',success(progress){if(progress.status===0){pb.displayError(progress.data);return;}pb.setProgress(progress.percentage,progress.message,progress.label);pb.timer=setTimeout(()=>{pb.sendPing();},pb.delay);},error(xmlhttp){const e=new Drupal.AjaxError(xmlhttp,pb.uri);pb.displayError(`<pre>${e.message}</pre>`);}});}},displayError(string){const error=$('<div class="messages messages--error"></div>').html(string);$(this.element).before(error).hide();if(this.errorCallback)this.errorCallback(this);}});})(jQuery,Drupal);;
/* @license MIT https://raw.githubusercontent.com/muicss/loadjs/4.3.0/LICENSE.txt */
loadjs=function(){var h=function(){},o={},c={},f={};function u(e,n){if(e){var t=f[e];if(c[e]=n,t)for(;t.length;)t[0](e,n),t.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function p(t,r,i,s){var o,e,u,n=document,c=i.async,f=(i.numRetries||0)+1,l=i.before||h,a=t.replace(/[\?|#].*$/,""),d=t.replace(/^(css|img|module|nomodule)!/,"");if(s=s||0,/(^css!|\.css$)/.test(a))(u=n.createElement("link")).rel="stylesheet",u.href=d,(o="hideFocus"in u)&&u.relList&&(o=0,u.rel="preload",u.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(a))(u=n.createElement("img")).src=d;else if((u=n.createElement("script")).src=d,u.async=void 0===c||c,e="noModule"in u,/^module!/.test(a)){if(!e)return r(t,"l");u.type="module"}else if(/^nomodule!/.test(a)&&e)return r(t,"l");!(u.onload=u.onerror=u.onbeforeload=function(e){var n=e.type[0];if(o)try{u.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((s+=1)<f)return p(t,r,i,s)}else if("preload"==u.rel&&"style"==u.as)return u.rel="stylesheet";r(t,n,e.defaultPrevented)})!==l(t,u)&&n.head.appendChild(u)}function t(e,n,t){var r,i;if(n&&n.trim&&(r=n),i=(r?t:n)||{},r){if(r in o)throw"LoadJS";o[r]=!0}function s(n,t){!function(e,r,n){var t,i,s=(e=e.push?e:[e]).length,o=s,u=[];for(t=function(e,n,t){if("e"==n&&u.push(e),"b"==n){if(!t)return;u.push(e)}--s||r(u)},i=0;i<o;i++)p(e[i],t,n)}(e,function(e){l(i,e),n&&l({success:n,error:t},e),u(r,e)},i)}if(i.returnPromise)return new Promise(s);s()}return t.ready=function(e,n){return function(e,t){e=e.push?e:[e];var n,r,i,s=[],o=e.length,u=o;for(n=function(e,n){n.length&&s.push(e),--u||t(s)};o--;)r=e[o],(i=c[r])?n(r,i):(f[r]=f[r]||[]).push(n)}(e,function(e){l(n,e)}),t},t.done=function(e){u(e,[])},t.reset=function(){o={},c={},f={}},t.isDefined=function(e){return e in o},t}();;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
Drupal.debounce=function(func,wait,immediate){let timeout;let result;return function(...args){const context=this;const later=function(){timeout=null;if(!immediate)result=func.apply(context,args);};const callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)result=func.apply(context,args);return result;};};;
(function(Drupal,debounce){let liveElement;const announcements=[];Drupal.behaviors.drupalAnnounce={attach(context){if(!liveElement){liveElement=document.createElement('div');liveElement.id='drupal-live-announce';liveElement.className='visually-hidden';liveElement.setAttribute('aria-live','polite');liveElement.setAttribute('aria-busy','false');document.body.appendChild(liveElement);}}};function announce(){const text=[];let priority='polite';let announcement;const il=announcements.length;for(let i=0;i<il;i++){announcement=announcements.pop();text.unshift(announcement.text);if(announcement.priority==='assertive')priority='assertive';}if(text.length){liveElement.innerHTML='';liveElement.setAttribute('aria-busy','true');liveElement.setAttribute('aria-live',priority);liveElement.innerHTML=text.join('\n');liveElement.setAttribute('aria-busy','false');}}Drupal.announce=function(text,priority){announcements.push({text,priority});return debounce(announce,200)();};})(Drupal,Drupal.debounce);;
((Drupal)=>{Drupal.Message=class{constructor(messageWrapper=null){if(!messageWrapper)this.messageWrapper=Drupal.Message.defaultWrapper();else this.messageWrapper=messageWrapper;}static defaultWrapper(){let wrapper=document.querySelector('[data-drupal-messages]')||document.querySelector('[data-drupal-messages-fallback]');if(!wrapper){wrapper=document.createElement('div');document.body.appendChild(wrapper);}if(wrapper.hasAttribute('data-drupal-messages-fallback')){wrapper.removeAttribute('data-drupal-messages-fallback');wrapper.classList.remove('hidden');}wrapper.setAttribute('data-drupal-messages','');return wrapper.innerHTML===''?Drupal.Message.messageInternalWrapper(wrapper):wrapper.firstElementChild;}static getMessageTypeLabels(){return {status:Drupal.t('Status message'),error:Drupal.t('Error message'),warning:Drupal.t('Warning message')};}add(message,options={}){if(!options.hasOwnProperty('type'))options.type='status';if(typeof message!=='string')throw new Error('Message must be a string.');Drupal.Message.announce(message,options);options.id=options.id?String(options.id):`${options.type}-${Math.random().toFixed(15).replace('0.','')}`;if(!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)){const {type}=options;throw new Error(`The message type, ${type}, is not present in Drupal.Message.getMessageTypeLabels().`);}this.messageWrapper.appendChild(Drupal.theme('message',{text:message},options));return options.id;}select(id){return this.messageWrapper.querySelector(`[data-drupal-message-id^="${id}"]`);}remove(id){return this.messageWrapper.removeChild(this.select(id));}clear(){Array.prototype.forEach.call(this.messageWrapper.querySelectorAll('[data-drupal-message-id]'),(message)=>{this.messageWrapper.removeChild(message);});}static announce(message,options){if(!options.priority&&(options.type==='warning'||options.type==='error'))options.priority='assertive';if(options.announce!=='')Drupal.announce(options.announce||message,options.priority);}static messageInternalWrapper(messageWrapper){const innerWrapper=document.createElement('div');innerWrapper.setAttribute('class','messages__wrapper');messageWrapper.insertAdjacentElement('afterbegin',innerWrapper);return innerWrapper;}};Drupal.theme.message=({text},{type,id})=>{const messagesTypes=Drupal.Message.getMessageTypeLabels();const messageWrapper=document.createElement('div');messageWrapper.setAttribute('class',`messages messages--${type}`);messageWrapper.setAttribute('role',type==='error'||type==='warning'?'alert':'status');messageWrapper.setAttribute('data-drupal-message-id',id);messageWrapper.setAttribute('data-drupal-message-type',type);messageWrapper.setAttribute('aria-label',messagesTypes[type]);messageWrapper.innerHTML=`${text}`;return messageWrapper;};})(Drupal);;
(function($,window,Drupal,drupalSettings,loadjs,{isFocusable,tabbable}){Drupal.behaviors.AJAX={attach(context,settings){function loadAjaxBehavior(base){const elementSettings=settings.ajax[base];if(typeof elementSettings.selector==='undefined')elementSettings.selector=`#${base}`;once('drupal-ajax',$(elementSettings.selector)).forEach((el)=>{elementSettings.element=el;elementSettings.base=base;Drupal.ajax(elementSettings);});}Object.keys(settings.ajax||{}).forEach(loadAjaxBehavior);Drupal.ajax.bindAjaxLinks(document.body);once('ajax','.use-ajax-submit').forEach((el)=>{const elementSettings={};elementSettings.url=$(el.form).attr('action');elementSettings.setClick=true;elementSettings.event='click';elementSettings.progress={type:'throbber'};elementSettings.base=el.id;elementSettings.element=el;Drupal.ajax(elementSettings);});},detach(context,settings,trigger){if(trigger==='unload')Drupal.ajax.expired().forEach((instance)=>{Drupal.ajax.instances[instance.instanceIndex]=null;});}};Drupal.AjaxError=function(xmlhttp,uri,customMessage){let statusCode;let statusText;let responseText;if(xmlhttp.status)statusCode=`\n${Drupal.t('An AJAX HTTP error occurred.')}\n${Drupal.t('HTTP Result Code: !status',{'!status':xmlhttp.status})}`;else statusCode=`\n${Drupal.t('An AJAX HTTP request terminated abnormally.')}`;statusCode+=`\n${Drupal.t('Debugging information follows.')}`;const pathText=`\n${Drupal.t('Path: !uri',{'!uri':uri})}`;statusText='';try{statusText=`\n${Drupal.t('StatusText: !statusText',{'!statusText':xmlhttp.statusText.trim()})}`;}catch(e){}responseText='';try{responseText=`\n${Drupal.t('ResponseText: !responseText',{'!responseText':xmlhttp.responseText.trim()})}`;}catch(e){}responseText=responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,'');responseText=responseText.replace(/[\n]+\s+/g,'\n');const readyStateText=xmlhttp.status===0?`\n${Drupal.t('ReadyState: !readyState',{'!readyState':xmlhttp.readyState})}`:'';customMessage=customMessage?`\n${Drupal.t('CustomMessage: !customMessage',{'!customMessage':customMessage})}`:'';this.message=statusCode+pathText+statusText+customMessage+responseText+readyStateText;this.name='AjaxError';if(!Drupal.AjaxError.messages)Drupal.AjaxError.messages=new Drupal.Message();Drupal.AjaxError.messages.add(Drupal.t("Oops, something went wrong. Check your browser's developer console for more details."),{type:'error'});};Drupal.AjaxError.prototype=new Error();Drupal.AjaxError.prototype.constructor=Drupal.AjaxError;Drupal.ajax=function(settings){if(arguments.length!==1)throw new Error('Drupal.ajax() function must be called with one configuration object only');const base=settings.base||false;const element=settings.element||false;delete settings.base;delete settings.element;if(!settings.progress&&!element)settings.progress=false;const ajax=new Drupal.Ajax(base,element,settings);ajax.instanceIndex=Drupal.ajax.instances.length;Drupal.ajax.instances.push(ajax);return ajax;};Drupal.ajax.instances=[];Drupal.ajax.expired=function(){return Drupal.ajax.instances.filter((instance)=>instance&&instance.element!==false&&!document.body.contains(instance.element));};Drupal.ajax.bindAjaxLinks=(element)=>{once('ajax','.use-ajax',element).forEach((ajaxLink)=>{const $linkElement=$(ajaxLink);const elementSettings={progress:{type:'throbber'},dialogType:$linkElement.data('dialog-type'),dialog:$linkElement.data('dialog-options'),dialogRenderer:$linkElement.data('dialog-renderer'),base:$linkElement.attr('id'),element:ajaxLink};const href=$linkElement.attr('href');if(href){elementSettings.url=href;elementSettings.event='click';}const httpMethod=$linkElement.data('ajax-http-method');if(httpMethod)elementSettings.httpMethod=httpMethod;Drupal.ajax(elementSettings);});};Drupal.Ajax=function(base,element,elementSettings){const defaults={httpMethod:'POST',event:element?'mousedown':null,keypress:true,selector:base?`#${base}`:null,effect:'none',speed:'none',method:'replaceWith',progress:{type:'throbber',message:Drupal.t('Processing...')},submit:{js:true}};$.extend(this,defaults,elementSettings);this.commands=new Drupal.AjaxCommands();this.instanceIndex=false;if(this.wrapper)this.wrapper=`#${this.wrapper}`;this.element=element;this.preCommandsFocusedElementSelector=null;this.elementSettings=elementSettings;if(this.element&&this.element.form)this.$form=$(this.element.form);if(!this.url){const $element=$(this.element);if(this.element.tagName==='A')this.url=$element.attr('href');else{if(this.element&&element.form)this.url=this.$form.attr('action');}}const originalUrl=this.url;this.url=this.url.replace(/\/nojs(\/|$|\?|#)/,'/ajax$1');if(drupalSettings.ajaxTrustedUrl[originalUrl])drupalSettings.ajaxTrustedUrl[this.url]=true;const ajax=this;ajax.options={url:ajax.url,data:ajax.submit,isInProgress(){return ajax.ajaxing;},beforeSerialize(elementSettings,options){return ajax.beforeSerialize(elementSettings,options);},beforeSubmit(formValues,elementSettings,options){ajax.ajaxing=true;ajax.preCommandsFocusedElementSelector=null;return ajax.beforeSubmit(formValues,elementSettings,options);},beforeSend(xmlhttprequest,options){ajax.ajaxing=true;return ajax.beforeSend(xmlhttprequest,options);},success(response,status,xmlhttprequest){ajax.preCommandsFocusedElementSelector=document.activeElement.getAttribute('data-drupal-selector');if(typeof response==='string')response=$.parseJSON(response);if(response!==null&&!drupalSettings.ajaxTrustedUrl[ajax.url])if(xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token')!=='1'){const customMessage=Drupal.t('The response failed verification so will not be processed.');return ajax.error(xmlhttprequest,ajax.url,customMessage);}return (Promise.resolve(ajax.success(response,status)).then(()=>{ajax.ajaxing=false;$(document).trigger('ajaxSuccess',[xmlhttprequest,this]);$(document).trigger('ajaxComplete',[xmlhttprequest,this]);if(--$.active===0)$(document).trigger('ajaxStop');}));},error(xmlhttprequest,status,error){ajax.ajaxing=false;},complete(xmlhttprequest,status){if(status==='error'||status==='parsererror')return ajax.error(xmlhttprequest,ajax.url);},dataType:'json',jsonp:false,method:ajax.httpMethod};if(elementSettings.dialog)ajax.options.data.dialogOptions=elementSettings.dialog;if(!ajax.options.url.includes('?'))ajax.options.url+='?';else ajax.options.url+='&';let wrapper=`drupal_${elementSettings.dialogType||'ajax'}`;if(elementSettings.dialogRenderer)wrapper+=`.${elementSettings.dialogRenderer}`;ajax.options.url+=`${Drupal.ajax.WRAPPER_FORMAT}=${wrapper}`;$(ajax.element).on(elementSettings.event,function(event){if(!drupalSettings.ajaxTrustedUrl[ajax.url]&&!Drupal.url.isLocal(ajax.url))throw new Error(Drupal.t('The callback URL is not local and not trusted: !url',{'!url':ajax.url}));return ajax.eventResponse(this,event);});if(elementSettings.keypress)$(ajax.element).on('keypress',function(event){return ajax.keypressResponse(this,event);});if(elementSettings.prevent)$(ajax.element).on(elementSettings.prevent,false);};Drupal.ajax.WRAPPER_FORMAT='_wrapper_format';Drupal.Ajax.AJAX_REQUEST_PARAMETER='_drupal_ajax';Drupal.Ajax.prototype.execute=function(){if(this.ajaxing)return;try{this.beforeSerialize(this.element,this.options);return $.ajax(this.options);}catch(e){this.ajaxing=false;window.alert(`An error occurred while attempting to process ${this.options.url}: ${e.message}`);return $.Deferred().reject();}};Drupal.Ajax.prototype.keypressResponse=function(element,event){const ajax=this;if(event.which===13||(event.which===32&&element.type!=='text'&&element.type!=='textarea'&&element.type!=='tel'&&element.type!=='number')){event.preventDefault();event.stopPropagation();$(element).trigger(ajax.elementSettings.event);}};Drupal.Ajax.prototype.eventResponse=function(element,event){event.preventDefault();event.stopPropagation();const ajax=this;if(ajax.ajaxing)return;try{if(ajax.$form){if(ajax.setClick)element.form.clk=element;ajax.$form.ajaxSubmit(ajax.options);}else{ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options);}}catch(e){ajax.ajaxing=false;window.alert(`An error occurred while attempting to process ${ajax.options.url}: ${e.message}`);}};Drupal.Ajax.prototype.beforeSerialize=function(element,options){if(this.$form&&document.body.contains(this.$form.get(0))){const settings=this.settings||drupalSettings;Drupal.detachBehaviors(this.$form.get(0),settings,'serialize');}options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER]=1;const pageState=drupalSettings.ajaxPageState;options.data['ajax_page_state[theme]']=pageState.theme;options.data['ajax_page_state[theme_token]']=pageState.theme_token;options.data['ajax_page_state[libraries]']=pageState.libraries;};Drupal.Ajax.prototype.beforeSubmit=function(formValues,element,options){};Drupal.Ajax.prototype.beforeSend=function(xmlhttprequest,options){if(this.$form){options.extraData=options.extraData||{};options.extraData.ajax_iframe_upload='1';const v=$.fieldValue(this.element);if(v!==null)options.extraData[this.element.name]=v;}$(this.element).prop('disabled',true);if(!this.progress||!this.progress.type)return;const progressIndicatorMethod=`setProgressIndicator${this.progress.type.slice(0,1).toUpperCase()}${this.progress.type.slice(1).toLowerCase()}`;if(progressIndicatorMethod in this&&typeof this[progressIndicatorMethod]==='function')this[progressIndicatorMethod].call(this);};Drupal.theme.ajaxProgressThrobber=(message)=>{const messageMarkup=typeof message==='string'?Drupal.theme('ajaxProgressMessage',message):'';const throbber='<div class="throbber">&nbsp;</div>';return `<div class="ajax-progress ajax-progress-throbber">${throbber}${messageMarkup}</div>`;};Drupal.theme.ajaxProgressIndicatorFullscreen=()=>'<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';Drupal.theme.ajaxProgressMessage=(message)=>`<div class="message">${message}</div>`;Drupal.theme.ajaxProgressBar=($element)=>$('<div class="ajax-progress ajax-progress-bar"></div>').append($element);Drupal.Ajax.prototype.setProgressIndicatorBar=function(){const progressBar=new Drupal.ProgressBar(`ajax-progress-${this.element.id}`,$.noop,this.progress.method,$.noop);if(this.progress.message)progressBar.setProgress(-1,this.progress.message);if(this.progress.url)progressBar.startMonitoring(this.progress.url,this.progress.interval||1500);this.progress.element=$(Drupal.theme('ajaxProgressBar',progressBar.element));this.progress.object=progressBar;$(this.element).after(this.progress.element);};Drupal.Ajax.prototype.setProgressIndicatorThrobber=function(){this.progress.element=$(Drupal.theme('ajaxProgressThrobber',this.progress.message));if($(this.element).closest('[data-drupal-ajax-container]').length)$(this.element).closest('[data-drupal-ajax-container]').after(this.progress.element);else $(this.element).after(this.progress.element);};Drupal.Ajax.prototype.setProgressIndicatorFullscreen=function(){this.progress.element=$(Drupal.theme('ajaxProgressIndicatorFullscreen'));$('body').append(this.progress.element);};Drupal.Ajax.prototype.commandExecutionQueue=function(response,status){const ajaxCommands=this.commands;return Object.keys(response||{}).reduce((executionQueue,key)=>executionQueue.then(()=>{const {command}=response[key];if(command&&ajaxCommands[command])return ajaxCommands[command](this,response[key],status);}),Promise.resolve());};Drupal.Ajax.prototype.success=function(response,status){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.element).prop('disabled',false);const elementParents=$(this.element).parents('[data-drupal-selector]').addBack().toArray();const focusChanged=Object.keys(response||{}).some((key)=>{const {command,method}=response[key];return (command==='focusFirst'||command==='openDialog'||(command==='invoke'&&method==='focus'));});return (this.commandExecutionQueue(response,status).then(()=>{if(!focusChanged){let target=false;if(this.element){if($(this.element).data('refocus-blur')&&this.preCommandsFocusedElementSelector)target=document.querySelector(`[data-drupal-selector="${this.preCommandsFocusedElementSelector}"]`);if(!target&&!$(this.element).data('disable-refocus')){for(let n=elementParents.length-1;!target&&n>=0;n--)target=document.querySelector(`[data-drupal-selector="${elementParents[n].getAttribute('data-drupal-selector')}"]`);}}if(target)$(target).trigger('focus');}if(this.$form&&document.body.contains(this.$form.get(0))){const settings=this.settings||drupalSettings;Drupal.attachBehaviors(this.$form.get(0),settings);}this.settings=null;}).catch((error)=>console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error',{'!error':error}))));};Drupal.Ajax.prototype.getEffect=function(response){const type=response.effect||this.effect;const speed=response.speed||this.speed;const effect={};if(type==='none'){effect.showEffect='show';effect.hideEffect='hide';effect.showSpeed='';}else if(type==='fade'){effect.showEffect='fadeIn';effect.hideEffect='fadeOut';effect.showSpeed=speed;}else{effect.showEffect=`${type}Toggle`;effect.hideEffect=`${type}Toggle`;effect.showSpeed=speed;}return effect;};Drupal.Ajax.prototype.error=function(xmlhttprequest,uri,customMessage){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.wrapper).show();$(this.element).prop('disabled',false);if(this.$form&&document.body.contains(this.$form.get(0))){const settings=this.settings||drupalSettings;Drupal.attachBehaviors(this.$form.get(0),settings);}throw new Drupal.AjaxError(xmlhttprequest,uri,customMessage);};Drupal.theme.ajaxWrapperNewContent=($newContent,ajax,response)=>(response.effect||ajax.effect)!=='none'&&$newContent.filter((i)=>!(($newContent[i].nodeName==='#comment'||($newContent[i].nodeName==='#text'&&/^(\s|\n|\r)*$/.test($newContent[i].textContent))))).length>1?Drupal.theme('ajaxWrapperMultipleRootElements',$newContent):$newContent;Drupal.theme.ajaxWrapperMultipleRootElements=($elements)=>$('<div></div>').append($elements);Drupal.AjaxCommands=function(){};Drupal.AjaxCommands.prototype={insert(ajax,response){const $wrapper=response.selector?$(response.selector):$(ajax.wrapper);const method=response.method||ajax.method;const effect=ajax.getEffect(response);const settings=response.settings||ajax.settings||drupalSettings;let $newContent=$($.parseHTML(response.data,document,true));$newContent=Drupal.theme('ajaxWrapperNewContent',$newContent,ajax,response);switch(method){case 'html':case 'replaceWith':case 'replaceAll':case 'empty':case 'remove':Drupal.detachBehaviors($wrapper.get(0),settings);break;default:break;}$wrapper[method]($newContent);if(effect.showEffect!=='show')$newContent.hide();const $ajaxNewContent=$newContent.find('.ajax-new-content');if($ajaxNewContent.length){$ajaxNewContent.hide();$newContent.show();$ajaxNewContent[effect.showEffect](effect.showSpeed);}else{if(effect.showEffect!=='show')$newContent[effect.showEffect](effect.showSpeed);}$newContent.each((index,element)=>{if(element.nodeType===Node.ELEMENT_NODE&&document.documentElement.contains(element))Drupal.attachBehaviors(element,settings);});},remove(ajax,response,status){const settings=response.settings||ajax.settings||drupalSettings;$(response.selector).each(function(){Drupal.detachBehaviors(this,settings);}).remove();},changed(ajax,response,status){const $element=$(response.selector);if(!$element.hasClass('ajax-changed')){$element.addClass('ajax-changed');if(response.asterisk)$element.find(response.asterisk).append(` <abbr class="ajax-changed" title="${Drupal.t('Changed')}">*</abbr> `);}},alert(ajax,response,status){window.alert(response.text);},announce(ajax,response){if(response.priority)Drupal.announce(response.text,response.priority);else Drupal.announce(response.text);},redirect(ajax,response,status){window.location=response.url;},css(ajax,response,status){$(response.selector).css(response.argument);},settings(ajax,response,status){const ajaxSettings=drupalSettings.ajax;if(ajaxSettings)Drupal.ajax.expired().forEach((instance)=>{if(instance.selector){const selector=instance.selector.replace('#','');if(selector in ajaxSettings)delete ajaxSettings[selector];}});if(response.merge)$.extend(true,drupalSettings,response.settings);else ajax.settings=response.settings;},data(ajax,response,status){$(response.selector).data(response.name,response.value);},focusFirst(ajax,response,status){let focusChanged=false;const container=document.querySelector(response.selector);if(container){const tabbableElements=tabbable(container);if(tabbableElements.length){tabbableElements[0].focus();focusChanged=true;}else{if(isFocusable(container)){container.focus();focusChanged=true;}}}if(ajax.hasOwnProperty('element')&&!focusChanged)ajax.element.focus();},invoke(ajax,response,status){const $element=$(response.selector);$element[response.method](...response.args);},restripe(ajax,response,status){$(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');},update_build_id(ajax,response,status){document.querySelectorAll(`input[name="form_build_id"][value="${response.old}"]`).forEach((item)=>{item.value=response.new;});},add_css(ajax,response,status){if(typeof response.data==='string'){Drupal.deprecationError({message:'Passing a string to the Drupal.ajax.add_css() method is deprecated in 10.1.0 and is removed from drupal:11.0.0. See https://www.drupal.org/node/3154948.'});$('head').prepend(response.data);return;}const allUniqueBundleIds=response.data.map(function(style){const uniqueBundleId=style.href+ajax.instanceIndex;loadjs(`css!${style.href}`,uniqueBundleId,{before(path,styleEl){Object.keys(style).forEach((attributeKey)=>{styleEl.setAttribute(attributeKey,style[attributeKey]);});}});return uniqueBundleId;});return new Promise((resolve,reject)=>{loadjs.ready(allUniqueBundleIds,{success(){resolve();},error(depsNotFound){const message=Drupal.t(`The following files could not be loaded: @dependencies`,{'@dependencies':depsNotFound.join(', ')});reject(message);}});});},message(ajax,response){const messages=new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));if(response.clearPrevious)messages.clear();messages.add(response.message,response.messageOptions);},add_js(ajax,response,status){const parentEl=document.querySelector(response.selector||'body');const settings=ajax.settings||drupalSettings;const allUniqueBundleIds=response.data.map((script)=>{const uniqueBundleId=script.src+ajax.instanceIndex;loadjs(script.src,uniqueBundleId,{async:false,before(path,scriptEl){Object.keys(script).forEach((attributeKey)=>{scriptEl.setAttribute(attributeKey,script[attributeKey]);});parentEl.appendChild(scriptEl);return false;}});return uniqueBundleId;});return new Promise((resolve,reject)=>{loadjs.ready(allUniqueBundleIds,{success(){Drupal.attachBehaviors(parentEl,settings);resolve();},error(depsNotFound){const message=Drupal.t(`The following files could not be loaded: @dependencies`,{'@dependencies':depsNotFound.join(', ')});reject(message);}});});},scrollTop(ajax,response){const offset=$(response.selector).offset();let scrollTarget=response.selector;while($(scrollTarget).scrollTop()===0&&$(scrollTarget).parent())scrollTarget=$(scrollTarget).parent();if(offset.top-10<$(scrollTarget).scrollTop())scrollTarget.get(0).scrollTo({top:offset.top-10,behavior:'smooth'});}};const stopEvent=(xhr,settings)=>{return (xhr.getResponseHeader('X-Drupal-Ajax-Token')==='1'&&settings.isInProgress&&settings.isInProgress());};$.extend(true,$.event.special,{ajaxSuccess:{trigger(event,xhr,settings){if(stopEvent(xhr,settings))return false;}},ajaxComplete:{trigger(event,xhr,settings){if(stopEvent(xhr,settings)){$.active++;return false;}}}});})(jQuery,window,Drupal,drupalSettings,loadjs,window.tabbable);;
/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bootstrap = {}, global.jQuery));
})(this, (function (exports, $) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _extends$1() {
    _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };
    return _extends$1.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

    _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.2): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Private TransitionEnd Helpers
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default["default"](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default["default"](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default["default"].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default["default"].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * Public Util API
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default["default"](element).css('transition-duration');
      var transitionDelay = $__default["default"](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default["default"](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default["default"] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default["default"].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * Constants
   */

  var NAME$a = 'alert';
  var VERSION$a = '4.6.2';
  var DATA_KEY$a = 'bs.alert';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$a = $__default["default"].fn[NAME$a];
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_SHOW$7 = 'show';
  var EVENT_CLOSE = "close" + EVENT_KEY$a;
  var EVENT_CLOSED = "closed" + EVENT_KEY$a;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$a + DATA_API_KEY$7;
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  /**
   * Class definition
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$a);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default["default"](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default["default"].Event(EVENT_CLOSE);
      $__default["default"](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default["default"](element).removeClass(CLASS_NAME_SHOW$7);

      if (!$__default["default"](element).hasClass(CLASS_NAME_FADE$5)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default["default"](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default["default"](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$a);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY$a, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }]);

    return Alert;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$a] = Alert._jQueryInterface;
  $__default["default"].fn[NAME$a].Constructor = Alert;

  $__default["default"].fn[NAME$a].noConflict = function () {
    $__default["default"].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Alert._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$9 = 'button';
  var VERSION$9 = '4.6.2';
  var DATA_KEY$9 = 'bs.button';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default["default"].fn[NAME$9];
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$9 + DATA_API_KEY$6;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$9 + DATA_API_KEY$6 + " " + ("blur" + EVENT_KEY$9 + DATA_API_KEY$6);
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$9 + DATA_API_KEY$6;
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_BUTTON = '.btn';
  /**
   * Class definition
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default["default"](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE$3)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE$2);

              if (activeElement) {
                $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$3);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE$3);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default["default"](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE$3));
        }

        if (triggerChangeEvent) {
          $__default["default"](this._element).toggleClass(CLASS_NAME_ACTIVE$3);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$9);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$9, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Button;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default["default"](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default["default"](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default["default"](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default["default"](event.target).closest(SELECTOR_BUTTON)[0];
    $__default["default"](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default["default"](window).on(EVENT_LOAD_DATA_API$2, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE$3);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE$3);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$4));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE$3);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE$3);
      }
    }
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$9] = Button._jQueryInterface;
  $__default["default"].fn[NAME$9].Constructor = Button;

  $__default["default"].fn[NAME$9].noConflict = function () {
    $__default["default"].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Button._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$8 = 'carousel';
  var VERSION$8 = '4.6.2';
  var DATA_KEY$8 = 'bs.carousel';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default["default"].fn[NAME$8];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$8;
  var EVENT_SLID = "slid" + EVENT_KEY$8;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$8;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$8;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$8;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$8;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$8;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$8;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$8;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$8;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$8 + DATA_API_KEY$5;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$8 + DATA_API_KEY$5;
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var Default$7 = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType$7 = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * Class definition
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default["default"](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default["default"](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default["default"](this._element).off(EVENT_KEY$8);
      $__default["default"].removeData(this._element, DATA_KEY$8);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends$1({}, Default$7, config);
      Util.typeCheckConfig(NAME$8, config, DefaultType$7);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default["default"](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default["default"](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        _this3.touchDeltaX = event.originalEvent.touches && event.originalEvent.touches.length > 1 ? 0 : event.originalEvent.touches[0].clientX - _this3.touchStartX;
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default["default"](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default["default"](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default["default"](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default["default"](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default["default"](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default["default"](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default["default"].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default["default"](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default["default"](indicators).removeClass(CLASS_NAME_ACTIVE$2);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default["default"](nextIndicator).addClass(CLASS_NAME_ACTIVE$2);
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      if (!element) {
        return;
      }

      var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default["default"](nextElement).hasClass(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;
      var slidEvent = $__default["default"].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default["default"](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default["default"](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default["default"](activeElement).addClass(directionalClassName);
        $__default["default"](nextElement).addClass(directionalClassName);
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default["default"](activeElement).one(Util.TRANSITION_END, function () {
          $__default["default"](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$2);
          $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default["default"](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2);
        $__default["default"](nextElement).addClass(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        $__default["default"](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$8);

        var _config = _extends$1({}, Default$7, $__default["default"](this).data());

        if (typeof config === 'object') {
          _config = _extends$1({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default["default"](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default["default"](selector)[0];

      if (!target || !$__default["default"](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends$1({}, $__default["default"](target).data(), $__default["default"](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default["default"](target), config);

      if (slideIndex) {
        $__default["default"](target).data(DATA_KEY$8).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Carousel;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default["default"](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default["default"](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$8] = Carousel._jQueryInterface;
  $__default["default"].fn[NAME$8].Constructor = Carousel;

  $__default["default"].fn[NAME$8].noConflict = function () {
    $__default["default"].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return Carousel._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$7 = 'collapse';
  var VERSION$7 = '4.6.2';
  var DATA_KEY$7 = 'bs.collapse';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$7 = $__default["default"].fn[NAME$7];
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var EVENT_SHOW$4 = "show" + EVENT_KEY$7;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$7;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$7;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$7;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$7 + DATA_API_KEY$4;
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="collapse"]';
  var Default$6 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$6 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  /**
   * Class definition
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$3));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default["default"](actives).not(this._selector).data(DATA_KEY$7);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default["default"].Event(EVENT_SHOW$4);
      $__default["default"](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default["default"](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default["default"](actives).data(DATA_KEY$7, null);
        }
      }

      var dimension = this._getDimension();

      $__default["default"](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default["default"](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default["default"](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default["default"](_this._element).trigger(EVENT_SHOWN$4);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
        return;
      }

      var startEvent = $__default["default"].Event(EVENT_HIDE$4);
      $__default["default"](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default["default"](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default["default"]([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$6)) {
              $__default["default"](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default["default"](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN$4);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$7);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends$1({}, Default$6, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default["default"](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default["default"](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default["default"](element).hasClass(CLASS_NAME_SHOW$6);

      if (triggerArray.length) {
        $__default["default"](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$7);

        var _config = _extends$1({}, Default$6, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return Collapse;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default["default"](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default["default"](selectors).each(function () {
      var $target = $__default["default"](this);
      var data = $target.data(DATA_KEY$7);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$7] = Collapse._jQueryInterface;
  $__default["default"].fn[NAME$7].Constructor = Collapse;

  $__default["default"].fn[NAME$7].noConflict = function () {
    $__default["default"].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Collapse._jQueryInterface;
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

  var timeoutDuration = function () {
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        return 1;
      }
    }
    return 0;
  }();

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  /**
   * Returns the reference node of the reference object, or the reference object itself.
   * @method
   * @memberof Popper.Utils
   * @param {Element|Object} reference - the reference element (the popper will be relative to this)
   * @returns {Element} parent
   */
  function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop);
      var marginLeft = parseFloat(styles.marginLeft);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

      // flips variation if reference element overflows boundaries
      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      // flips variation if popper content overflows boundaries
      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport',
      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,
      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  var Popper$1 = Popper;

  /**
   * Constants
   */

  var NAME$6 = 'dropdown';
  var VERSION$6 = '4.6.2';
  var DATA_KEY$6 = 'bs.dropdown';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$6 = $__default["default"].fn[NAME$6];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE$1);
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_SHOW$5 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$6;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$6;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$6;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$6;
  var EVENT_CLICK = "click" + EVENT_KEY$6;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$6 + DATA_API_KEY$3;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$6 + DATA_API_KEY$3;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$6 + DATA_API_KEY$3;
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$5 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$5 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * Class definition
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var isActive = $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default["default"].Event(EVENT_SHOW$3, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default["default"](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (!this._inNavbar && usePopper) {
        // Check for Popper dependency
        if (typeof Popper$1 === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default["default"](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper$1(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default["default"](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default["default"](document.body).children().on('mouseover', null, $__default["default"].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
      $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_SHOWN$3, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || !$__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default["default"](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
      $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$6);
      $__default["default"](this._element).off(EVENT_KEY$6);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default["default"](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends$1({}, this.constructor.Default, $__default["default"](this._element).data(), config);
      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default["default"](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default["default"](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends$1({}, data.offsets, _this2._config.offset(data.offsets, _this2._element));
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends$1({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$6);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default["default"](this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default["default"](toggles[i]).data(DATA_KEY$6);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default["default"](parent).hasClass(CLASS_NAME_SHOW$5)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default["default"].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);
        $__default["default"](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default["default"](document.body).children().off('mouseover', null, $__default["default"].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default["default"](dropdownMenu).removeClass(CLASS_NAME_SHOW$5);
        $__default["default"](parent).removeClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE$1 && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default["default"](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default["default"](this).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default["default"](parent).hasClass(CLASS_NAME_SHOW$5);

      if (!isActive && event.which === ESCAPE_KEYCODE$1) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE$1 || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE$1) {
          $__default["default"](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default["default"](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default["default"](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Dropdown;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$2 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default["default"](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$2, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$6] = Dropdown._jQueryInterface;
  $__default["default"].fn[NAME$6].Constructor = Dropdown;

  $__default["default"].fn[NAME$6].noConflict = function () {
    $__default["default"].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Dropdown._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.6.2';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default["default"].fn[NAME$5];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$5 + DATA_API_KEY$2;
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  var Default$4 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$4 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  /**
   * Class definition
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      var showEvent = $__default["default"].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
        this._isTransitioning = true;
      }

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function (event) {
        return _this.hide(event);
      });
      $__default["default"](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default["default"](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default["default"](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE$2);
      $__default["default"](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default["default"](document).off(EVENT_FOCUSIN);
      $__default["default"](this._element).removeClass(CLASS_NAME_SHOW$4);
      $__default["default"](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default["default"](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default["default"](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default["default"](document).off(EVENT_FOCUSIN);
      $__default["default"].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends$1({}, Default$4, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      var hideEventPrevented = $__default["default"].Event(EVENT_HIDE_PREVENTED);
      $__default["default"](this._element).trigger(hideEventPrevented);

      if (hideEventPrevented.isDefaultPrevented()) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
      $__default["default"](this._element).off(Util.TRANSITION_END);
      $__default["default"](this._element).one(Util.TRANSITION_END, function () {
        _this3._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          $__default["default"](_this3._element).one(Util.TRANSITION_END, function () {
            _this3._element.style.overflowY = '';
          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
        }
      }).emulateTransitionEnd(modalTransitionDuration);

      this._element.focus();
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default["default"](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default["default"](this._element).addClass(CLASS_NAME_SHOW$4);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default["default"].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default["default"](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default["default"](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default["default"](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default["default"](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default["default"](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default["default"](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default["default"](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default["default"](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default["default"](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default["default"](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default["default"](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4) ? CLASS_NAME_FADE$4 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default["default"](this._backdrop).appendTo(document.body);
        $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default["default"](this._backdrop).addClass(CLASS_NAME_SHOW$4);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default["default"](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default["default"](this._backdrop).removeClass(CLASS_NAME_SHOW$4);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default["default"](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default["default"](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default["default"](element).css('padding-right');
          $__default["default"](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default["default"](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default["default"](element).css('margin-right');
          $__default["default"](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default["default"](document.body).css('padding-right');
        $__default["default"](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default["default"](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default["default"](fixedContent).each(function (index, element) {
        var padding = $__default["default"](element).data('padding-right');
        $__default["default"](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default["default"](elements).each(function (index, element) {
        var margin = $__default["default"](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default["default"](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default["default"](document.body).data('padding-right');
      $__default["default"](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$5);

        var _config = _extends$1({}, Default$4, $__default["default"](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default["default"](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }]);

    return Modal;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default["default"](target).data(DATA_KEY$5) ? 'toggle' : _extends$1({}, $__default["default"](target).data(), $__default["default"](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default["default"](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default["default"](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default["default"](target), config, this);
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$5] = Modal._jQueryInterface;
  $__default["default"].fn[NAME$5].Constructor = Modal;

  $__default["default"].fn[NAME$5].noConflict = function () {
    $__default["default"].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.2): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes); // eslint-disable-next-line unicorn/prefer-spread

      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * Constants
   */

  var NAME$4 = 'tooltip';
  var VERSION$4 = '4.6.2';
  var DATA_KEY$4 = 'bs.tooltip';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var JQUERY_NO_CONFLICT$4 = $__default["default"].fn[NAME$4];
  var CLASS_PREFIX$1 = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    INSERTED: "inserted" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    FOCUSIN: "focusin" + EVENT_KEY$4,
    FOCUSOUT: "focusout" + EVENT_KEY$4,
    MOUSEENTER: "mouseenter" + EVENT_KEY$4,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$4
  };
  /**
   * Class definition
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper$1 === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      } // Private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default["default"](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default["default"](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default["default"](this.getTipElement()).hasClass(CLASS_NAME_SHOW$3)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default["default"].removeData(this.element, this.constructor.DATA_KEY);
      $__default["default"](this.element).off(this.constructor.EVENT_KEY);
      $__default["default"](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default["default"](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default["default"](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default["default"].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default["default"](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default["default"].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default["default"](tip).addClass(CLASS_NAME_FADE$3);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default["default"](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default["default"].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default["default"](tip).appendTo(container);
        }

        $__default["default"](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper$1(this.element, tip, this._getPopperConfig(attachment));
        $__default["default"](tip).addClass(CLASS_NAME_SHOW$3);
        $__default["default"](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default["default"](document.body).children().on('mouseover', null, $__default["default"].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default["default"](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default["default"](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default["default"].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default["default"](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default["default"](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default["default"](tip).removeClass(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default["default"](document.body).children().off('mouseover', null, $__default["default"].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default["default"](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default["default"](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default["default"](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default["default"](tip).removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$3);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default["default"](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default["default"](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends$1({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends$1({}, data.offsets, _this4.config.offset(data.offsets, _this4.element));
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default["default"](this.config.container);
      }

      return $__default["default"](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default["default"](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default["default"](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default["default"](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends$1({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default["default"](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default["default"](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default["default"](context.getTipElement()).hasClass(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default["default"](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default["default"](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default["default"](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends$1({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default["default"](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default["default"](tip).removeClass(CLASS_NAME_FADE$3);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$4);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$4;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$4;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$4;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$3;
      }
    }]);

    return Tooltip;
  }();
  /**
   * jQuery
   */


  $__default["default"].fn[NAME$4] = Tooltip._jQueryInterface;
  $__default["default"].fn[NAME$4].Constructor = Tooltip;

  $__default["default"].fn[NAME$4].noConflict = function () {
    $__default["default"].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Tooltip._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$3 = 'popover';
  var VERSION$3 = '4.6.2';
  var DATA_KEY$3 = 'bs.popover';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var JQUERY_NO_CONFLICT$3 = $__default["default"].fn[NAME$3];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$2 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';

  var Default$2 = _extends$1({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$2 = _extends$1({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var Event = {
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    INSERTED: "inserted" + EVENT_KEY$3,
    CLICK: "click" + EVENT_KEY$3,
    FOCUSIN: "focusin" + EVENT_KEY$3,
    FOCUSOUT: "focusout" + EVENT_KEY$3,
    MOUSEENTER: "mouseenter" + EVENT_KEY$3,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$3
  };
  /**
   * Class definition
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default["default"](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default["default"](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$2);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default["default"](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$3);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default["default"](this).data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      get: // Getters
      function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$3;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$3;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$3;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * jQuery
   */


  $__default["default"].fn[NAME$3] = Popover._jQueryInterface;
  $__default["default"].fn[NAME$3].Constructor = Popover;

  $__default["default"].fn[NAME$3].noConflict = function () {
    $__default["default"].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Popover._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$2 = 'scrollspy';
  var VERSION$2 = '4.6.2';
  var DATA_KEY$2 = 'bs.scrollspy';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default["default"].fn[NAME$2];
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$2;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$1;
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  /**
   * Class definition
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default["default"](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default["default"](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(Boolean).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$2);
      $__default["default"](this._scrollElement).off(EVENT_KEY$2);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends$1({}, Default$1, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default["default"](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$2);
          $__default["default"](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default["default"]([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN$1).find(SELECTOR_DROPDOWN_TOGGLE$1).addClass(CLASS_NAME_ACTIVE$1);
        $link.addClass(CLASS_NAME_ACTIVE$1);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$1); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$1); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$1);
      }

      $__default["default"](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$1);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$1);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$2);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default["default"](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](window).on(EVENT_LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default["default"](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$2] = ScrollSpy._jQueryInterface;
  $__default["default"].fn[NAME$2].Constructor = ScrollSpy;

  $__default["default"].fn[NAME$2].noConflict = function () {
    $__default["default"].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$1 = 'tab';
  var VERSION$1 = '4.6.2';
  var DATA_KEY$1 = 'bs.tab';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default["default"].fn[NAME$1];
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$1 = 'show';
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$1;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$1;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$1;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$1;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY$1 + DATA_API_KEY;
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * Class definition
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default["default"](this._element).hasClass(CLASS_NAME_ACTIVE) || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED) || this._element.hasAttribute('disabled')) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default["default"](this._element).closest(SELECTOR_NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = $__default["default"].makeArray($__default["default"](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE$1, {
        relatedTarget: this._element
      });
      var showEvent = $__default["default"].Event(EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (previous) {
        $__default["default"](previous).trigger(hideEvent);
      }

      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default["default"].Event(EVENT_HIDDEN$1, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default["default"].Event(EVENT_SHOWN$1, {
          relatedTarget: previous
        });
        $__default["default"](previous).trigger(hiddenEvent);
        $__default["default"](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default["default"](container).find(SELECTOR_ACTIVE_UL) : $__default["default"](container).children(SELECTOR_ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default["default"](active).hasClass(CLASS_NAME_FADE$1);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default["default"](active).removeClass(CLASS_NAME_SHOW$1).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default["default"](active).removeClass(CLASS_NAME_ACTIVE);
        var dropdownChild = $__default["default"](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default["default"](dropdownChild).removeClass(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default["default"](element).addClass(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      var parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && $__default["default"](parent).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default["default"](element).closest(SELECTOR_DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE));
          $__default["default"](dropdownToggleList).addClass(CLASS_NAME_ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default["default"](this);
        var data = $this.data(DATA_KEY$1);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$1, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Tab;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default["default"](this), 'show');
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$1] = Tab._jQueryInterface;
  $__default["default"].fn[NAME$1].Constructor = Tab;

  $__default["default"].fn[NAME$1].noConflict = function () {
    $__default["default"].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Tab._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME = 'toast';
  var VERSION = '4.6.2';
  var DATA_KEY = 'bs.toast';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $__default["default"].fn[NAME];
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var SELECTOR_DATA_DISMISS = '[data-dismiss="toast"]';
  var Default = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  /**
   * Class definition
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default["default"].Event(EVENT_SHOW);
      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW);

        $__default["default"](_this._element).trigger(EVENT_SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE);
      $__default["default"](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      $__default["default"](this._element).off(EVENT_CLICK_DISMISS);
      $__default["default"].removeData(this._element, DATA_KEY);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends$1({}, Default, $__default["default"](this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default["default"](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default["default"](_this3._element).trigger(EVENT_HIDDEN);
      };

      this._element.classList.remove(CLASS_NAME_SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Toast;
  }();
  /**
   * jQuery
   */


  $__default["default"].fn[NAME] = Toast._jQueryInterface;
  $__default["default"].fn[NAME].Constructor = Toast;

  $__default["default"].fn[NAME].noConflict = function () {
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

;
(function(Drupal,drupalSettings){Drupal.behaviors.activeLinks={attach(context){const path=drupalSettings.path;const queryString=JSON.stringify(path.currentQuery);const querySelector=path.currentQuery?`[data-drupal-link-query='${queryString}']`:':not([data-drupal-link-query])';const originalSelectors=[`[data-drupal-link-system-path="${path.currentPath}"]`];let selectors;if(path.isFront)originalSelectors.push('[data-drupal-link-system-path="<front>"]');selectors=[].concat(originalSelectors.map((selector)=>`${selector}:not([hreflang])`),originalSelectors.map((selector)=>`${selector}[hreflang="${path.currentLanguage}"]`));selectors=selectors.map((current)=>current+querySelector);const activeLinks=context.querySelectorAll(selectors.join(','));const il=activeLinks.length;for(let i=0;i<il;i++){activeLinks[i].classList.add('is-active');activeLinks[i].setAttribute('aria-current','page');}},detach(context,settings,trigger){if(trigger==='unload'){const activeLinks=context.querySelectorAll('[data-drupal-link-system-path].is-active');const il=activeLinks.length;for(let i=0;i<il;i++){activeLinks[i].classList.remove('is-active');activeLinks[i].removeAttribute('aria-current');}}}};})(Drupal,drupalSettings);;
(function($,Drupal,debounce){const cache={right:0,left:0,bottom:0,top:0};const cssVarPrefix='--drupal-displace-offset';const documentStyle=document.documentElement.style;const offsetKeys=Object.keys(cache);const offsetProps={};offsetKeys.forEach((edge)=>{offsetProps[edge]={enumerable:true,get(){return cache[edge];},set(value){if(value!==cache[edge])documentStyle.setProperty(`${cssVarPrefix}-${edge}`,`${value}px`);cache[edge]=value;}};});const offsets=Object.seal(Object.defineProperties({},offsetProps));function getRawOffset(el,edge){const $el=$(el);const documentElement=document.documentElement;let displacement=0;const horizontal=edge==='left'||edge==='right';let placement=$el.offset()[horizontal?'left':'top'];placement-=window[`scroll${horizontal?'X':'Y'}`]||document.documentElement[`scroll${horizontal?'Left':'Top'}`]||0;switch(edge){case 'top':displacement=placement+$el.outerHeight();break;case 'left':displacement=placement+$el.outerWidth();break;case 'bottom':displacement=documentElement.clientHeight-placement;break;case 'right':displacement=documentElement.clientWidth-placement;break;default:displacement=0;}return displacement;}function calculateOffset(edge){let edgeOffset=0;const displacingElements=document.querySelectorAll(`[data-offset-${edge}]`);const n=displacingElements.length;for(let i=0;i<n;i++){const el=displacingElements[i];if(el.style.display==='none')continue;let displacement=parseInt(el.getAttribute(`data-offset-${edge}`),10);if(isNaN(displacement))displacement=getRawOffset(el,edge);edgeOffset=Math.max(edgeOffset,displacement);}return edgeOffset;}function displace(broadcast=true){const newOffsets={};offsetKeys.forEach((edge)=>{newOffsets[edge]=calculateOffset(edge);});offsetKeys.forEach((edge)=>{offsets[edge]=newOffsets[edge];});if(broadcast)$(document).trigger('drupalViewportOffsetChange',offsets);return offsets;}Drupal.behaviors.drupalDisplace={attach(){if(this.displaceProcessed)return;this.displaceProcessed=true;$(window).on('resize.drupalDisplace',debounce(displace,200));}};Drupal.displace=displace;Object.defineProperty(Drupal.displace,'offsets',{value:offsets,writable:false});Drupal.displace.calculateOffset=calculateOffset;})(jQuery,Drupal,Drupal.debounce);;
(function($,Drupal,drupalSettings){let activeItem=Drupal.url(drupalSettings.path.currentPath);$.fn.drupalToolbarMenuHorizontal=function(){let currentPath=drupalSettings.path.currentPath;const menu=once('toolbar-menu-horizontal',this);if(menu.length){const $menu=$(menu);if(activeItem){const count=currentPath.split('/').length;for(let i=0;i<count;i++){const $menuItem=$menu.find(`a[data-drupal-link-system-path="${currentPath}"]`);if($menuItem.length!==0){$menuItem.closest('a').addClass('is-active');break;}const lastIndex=currentPath.lastIndexOf('/');currentPath=currentPath.slice(0,lastIndex);}}}};$.fn.drupalToolbarMenu=function(){const ui={handleOpen:Drupal.t('Extend'),handleClose:Drupal.t('Collapse')};function toggleList($item,switcher){const $toggle=$item.children('.toolbar-box').children('.toolbar-handle');switcher=typeof switcher!=='undefined'?switcher:!$item.hasClass('open');$item.toggleClass('open',switcher);$toggle.toggleClass('open',switcher);$toggle.find('.action').each((index,element)=>{element.textContent=switcher?ui.handleClose:ui.handleOpen;});}function toggleClickHandler(event){const $toggle=$(event.target);const $item=$toggle.closest('li');toggleList($item);const $openItems=$item.siblings().filter('.open');toggleList($openItems,false);}function linkClickHandler(event){if(!Drupal.toolbar.models.toolbarModel.get('isFixed'))Drupal.toolbar.models.toolbarModel.set('activeTab',null);event.stopPropagation();}function initItems($menu){const options={class:'toolbar-icon toolbar-handle',action:ui.handleOpen,text:''};$menu.find('li > a').wrap('<div class="toolbar-box">');$menu.find('li').each((index,element)=>{const $item=$(element);if($item.children('ul.toolbar-menu').length){const $box=$item.children('.toolbar-box');const $link=$box.find('a');options.text=Drupal.t('@label',{'@label':$link.length?$link[0].textContent:''});$item.children('.toolbar-box').append($(Drupal.theme('toolbarMenuItemToggle',options)).hide().fadeIn(150));}});}function markListLevels($lists,level){level=!level?1:level;const $lis=$lists.children('li').addClass(`level-${level}`);$lists=$lis.children('ul');if($lists.length)markListLevels($lists,level+1);}function openActiveItem($menu){let currentPath=drupalSettings.path.currentPath;const pathItem=$menu.find(`a[href="${window.location.pathname}"]`);if(pathItem.length&&!activeItem)activeItem=window.location.pathname;if(activeItem){const $activeItem=$menu.find(`a[href="${activeItem}"]`).addClass('menu-item--active');if(pathItem.length===0&&activeItem){const count=currentPath.split('/').length;for(let i=0;i<count;i++){const $menuItem=$menu.find(`a[data-drupal-link-system-path="${currentPath}"]`);if($menuItem.length!==0){const $activeTrail=$menuItem.parentsUntil('.root','li').addClass('menu-item--active-trail');toggleList($activeTrail,true);break;}const lastIndex=currentPath.lastIndexOf('/');currentPath=currentPath.slice(0,lastIndex);}}else{const $activeTrail=$activeItem.parentsUntil('.root','li').addClass('menu-item--active-trail');toggleList($activeTrail,true);}}}return this.each(function(selector){const menu=once('toolbar-menu-vertical',this);if(menu.length){const $menu=$(menu);$menu.on('click.toolbar','.toolbar-box',toggleClickHandler).on('click.toolbar','.toolbar-box a',linkClickHandler);$menu.addClass('root');initItems($menu);markListLevels($menu);openActiveItem($menu);}});};Drupal.theme.toolbarMenuItemToggle=function(options){return `<button class="${options.class}"><span class="action">${options.action}</span> <span class="label">${options.text}</span></button>`;};})(jQuery,Drupal,drupalSettings);;
(function($,Drupal,drupalSettings){(()=>{if(!sessionStorage.getItem('Drupal.toolbar.toolbarState'))return;const toolbarState=JSON.parse(sessionStorage.getItem('Drupal.toolbar.toolbarState'));const {activeTray,orientation,isOriented}=toolbarState;const activeTrayElement=document.querySelector(`.toolbar-tray[data-toolbar-tray="${activeTray}"]`);const activeTrayToggle=document.querySelector(`.toolbar-item[data-toolbar-tray="${activeTray}"]`);if(activeTrayElement){activeTrayElement.classList.add(`toolbar-tray-${orientation}`,'is-active');activeTrayToggle.classList.add('is-active');}if(isOriented)document.querySelector('#toolbar-administration').classList.add('toolbar-oriented');})();const options=$.extend({breakpoints:{'toolbar.narrow':'','toolbar.standard':'','toolbar.wide':''}},drupalSettings.toolbar,{strings:{horizontal:Drupal.t('Horizontal orientation'),vertical:Drupal.t('Vertical orientation')}});Drupal.behaviors.toolbar={attach(context){if(!window.matchMedia('only screen').matches)return;once('toolbar','#toolbar-administration',context).forEach((toolbar)=>{const model=new Drupal.toolbar.ToolbarModel({locked:JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),activeTab:document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),height:$('#toolbar-administration').outerHeight()});Drupal.toolbar.models.toolbarModel=model;Object.keys(options.breakpoints).forEach((label)=>{const mq=options.breakpoints[label];const mql=window.matchMedia(mq);Drupal.toolbar.mql[label]=mql;mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null,model,label));Drupal.toolbar.mediaQueryChangeHandler.call(null,model,label,mql);});Drupal.toolbar.views.toolbarVisualView=new Drupal.toolbar.ToolbarVisualView({el:toolbar,model,strings:options.strings});Drupal.toolbar.views.toolbarAuralView=new Drupal.toolbar.ToolbarAuralView({el:toolbar,model,strings:options.strings});Drupal.toolbar.views.bodyVisualView=new Drupal.toolbar.BodyVisualView({el:toolbar,model});model.trigger('change:isFixed',model,model.get('isFixed'));model.trigger('change:activeTray',model,model.get('activeTray'));const menuModel=new Drupal.toolbar.MenuModel();Drupal.toolbar.models.menuModel=menuModel;Drupal.toolbar.views.menuVisualView=new Drupal.toolbar.MenuVisualView({el:$(toolbar).find('.toolbar-menu-administration').get(0),model:menuModel,strings:options.strings});Drupal.toolbar.setSubtrees.done((subtrees)=>{menuModel.set('subtrees',subtrees);const theme=drupalSettings.ajaxPageState.theme;localStorage.setItem(`Drupal.toolbar.subtrees.${theme}`,JSON.stringify(subtrees));model.set('areSubtreesLoaded',true);});Drupal.toolbar.views.toolbarVisualView.loadSubtrees();$(document).on('drupalViewportOffsetChange.toolbar',(event,offsets)=>{model.set('offsets',offsets);});model.on('change:orientation',(model,orientation)=>{$(document).trigger('drupalToolbarOrientationChange',orientation);}).on('change:activeTab',(model,tab)=>{$(document).trigger('drupalToolbarTabChange',tab);}).on('change:activeTray',(model,tray)=>{$(document).trigger('drupalToolbarTrayChange',tray);});const toolbarState=sessionStorage.getItem('Drupal.toolbar.toolbarState')?JSON.parse(sessionStorage.getItem('Drupal.toolbar.toolbarState')):{};if(Drupal.toolbar.models.toolbarModel.get('orientation')==='horizontal'&&Drupal.toolbar.models.toolbarModel.get('activeTab')===null&&!toolbarState.orientation)Drupal.toolbar.models.toolbarModel.set({activeTab:$('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)});window.addEventListener('dialog:aftercreate',(e)=>{const $element=$(e.target);const {settings}=e;const toolbarBar=document.getElementById('toolbar-bar');if(toolbarBar){toolbarBar.style.marginTop='0';if(settings.drupalOffCanvasPosition==='top'){const height=Drupal.offCanvas.getContainer($element).outerHeight();toolbarBar.style.marginTop=`${height}px`;$element.on('dialogContentResize.off-canvas',()=>{const newHeight=Drupal.offCanvas.getContainer($element).outerHeight();toolbarBar.style.marginTop=`${newHeight}px`;});}}});window.addEventListener('dialog:beforeclose',()=>{const toolbarBar=document.getElementById('toolbar-bar');if(toolbarBar)toolbarBar.style.marginTop='0';});});if(once('toolbarAntiFlicker','#toolbar-administration',context).length)Drupal.toolbar.models.toolbarModel.on('change:activeTab change:orientation change:isOriented change:isTrayToggleVisible change:offsets',function(){const userButton=document.querySelector('#toolbar-item-user');const hasActiveTab=!!$(this.get('activeTab')).length>0;const previousToolbarState=sessionStorage.getItem('Drupal.toolbar.toolbarState')?JSON.parse(sessionStorage.getItem('Drupal.toolbar.toolbarState')):{};const toolbarState={...previousToolbarState,orientation:Drupal.toolbar.models.toolbarModel.get('orientation'),hasActiveTab,activeTabId:hasActiveTab?this.get('activeTab').id:null,activeTray:$(this.get('activeTab')).attr('data-toolbar-tray'),isOriented:this.get('isOriented'),isFixed:this.get('isFixed'),userButtonMinWidth:userButton?userButton.clientWidth:0};sessionStorage.setItem('Drupal.toolbar.toolbarState',JSON.stringify(toolbarState));});}};Drupal.toolbar={views:{},models:{},mql:{},setSubtrees:new $.Deferred(),mediaQueryChangeHandler(model,label,mql){switch(label){case 'toolbar.narrow':model.set({isOriented:mql.matches,isTrayToggleVisible:false});if(!mql.matches||!model.get('orientation'))model.set({orientation:'vertical'},{validate:true});break;case 'toolbar.standard':model.set({isFixed:mql.matches});break;case 'toolbar.wide':model.set({orientation:mql.matches&&!model.get('locked')?'horizontal':'vertical'},{validate:true});model.set({isTrayToggleVisible:mql.matches});break;default:break;}}};Drupal.theme.toolbarOrientationToggle=function(){return ('<div class="toolbar-toggle-orientation"><div class="toolbar-lining">'+'<button class="toolbar-icon" type="button"></button>'+'</div></div>');};Drupal.AjaxCommands.prototype.setToolbarSubtrees=function(ajax,response,status){Drupal.toolbar.setSubtrees.resolve(response.subtrees);};})(jQuery,Drupal,drupalSettings);;
(function(Backbone,Drupal){Drupal.toolbar.MenuModel=Backbone.Model.extend({defaults:{subtrees:null}});})(Backbone,Drupal);;
(function(Backbone,Drupal){Drupal.toolbar.ToolbarModel=Backbone.Model.extend({defaults:{activeTab:null,activeTray:null,isOriented:false,isFixed:false,areSubtreesLoaded:false,isViewportOverflowConstrained:false,orientation:'horizontal',locked:false,isTrayToggleVisible:true,height:null,offsets:{top:0,right:0,bottom:0,left:0}},validate(attributes,options){if(attributes.orientation==='horizontal'&&this.get('locked')&&!options.override)return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');}});})(Backbone,Drupal);;
(function($,Drupal,Backbone){Drupal.toolbar.BodyVisualView=Backbone.View.extend({initialize(){this.listenTo(this.model,'change:activeTray ',this.render);this.listenTo(this.model,'change:isFixed change:isViewportOverflowConstrained',this.isToolbarFixed);},isToolbarFixed(){const isViewportOverflowConstrained=this.model.get('isViewportOverflowConstrained');$('body').toggleClass('toolbar-fixed',isViewportOverflowConstrained||this.model.get('isFixed'));},render(){$('body').toggleClass('toolbar-tray-open',!!this.model.get('activeTray'));}});})(jQuery,Drupal,Backbone);;
(function($,Backbone,Drupal){Drupal.toolbar.MenuVisualView=Backbone.View.extend({initialize(){this.listenTo(this.model,'change:subtrees',this.render);this.render();},render(){this.renderVertical();this.renderHorizontal();},renderHorizontal(){if('drupalToolbarMenu' in $.fn)this.$el.children('.toolbar-menu').drupalToolbarMenuHorizontal();},renderVertical(){const subtrees=this.model.get('subtrees');if(!this.model.get('subtrees'))return;Object.keys(subtrees||{}).forEach((id)=>{$(once('toolbar-subtrees',this.$el.find(`#toolbar-link-${id}`))).after(subtrees[id]);});if('drupalToolbarMenu' in $.fn)this.$el.children('.toolbar-menu').drupalToolbarMenu();}});})(jQuery,Backbone,Drupal);;
(function(Backbone,Drupal){Drupal.toolbar.ToolbarAuralView=Backbone.View.extend({initialize(options){this.strings=options.strings;this.listenTo(this.model,'change:orientation',this.onOrientationChange);this.listenTo(this.model,'change:activeTray',this.onActiveTrayChange);},onOrientationChange(model,orientation){Drupal.announce(Drupal.t('Tray orientation changed to @orientation.',{'@orientation':orientation}));},onActiveTrayChange(model,tray){const relevantTray=tray===null?model.previous('activeTray'):tray;if(!relevantTray)return;const action=tray===null?Drupal.t('closed'):Drupal.t('opened');const trayNameElement=relevantTray.querySelector('.toolbar-tray-name');let text;if(trayNameElement!==null)text=Drupal.t('Tray "@tray" @action.',{'@tray':trayNameElement.textContent,'@action':action});else text=Drupal.t('Tray @action.',{'@action':action});Drupal.announce(text);}});})(Backbone,Drupal);;
(function($,Drupal,drupalSettings,Backbone){Drupal.toolbar.ToolbarVisualView=Backbone.View.extend({events(){const touchEndToClick=function(event){event.preventDefault();event.target.click();};return {'click .toolbar-bar .toolbar-tab .trigger':'onTabClick','click .toolbar-toggle-orientation button':'onOrientationToggleClick','touchend .toolbar-bar .toolbar-tab .trigger':touchEndToClick,'touchend .toolbar-toggle-orientation button':touchEndToClick};},initialize(options){this.strings=options.strings;this.listenTo(this.model,'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible',this.render);this.listenTo(this.model,'change:mqMatches',this.onMediaQueryChange);this.listenTo(this.model,'change:offsets',this.adjustPlacement);this.listenTo(this.model,'change:activeTab change:orientation change:isOriented',this.updateToolbarHeight);this.$el.find('.toolbar-tray .toolbar-lining').has('.toolbar-menu').append(Drupal.theme('toolbarOrientationToggle'));this.model.trigger('change:activeTab');},updateToolbarHeight(){const toolbarTabOuterHeight=$('#toolbar-bar').find('.toolbar-tab').outerHeight()||0;const toolbarTrayHorizontalOuterHeight=$('.is-active.toolbar-tray-horizontal').outerHeight()||0;this.model.set('height',toolbarTabOuterHeight+toolbarTrayHorizontalOuterHeight);$('body')[0].style.paddingTop=`${this.model.get('height')}px`;$('html')[0].style.scrollPaddingTop=`${this.model.get('height')}px`;this.triggerDisplace();},triggerDisplace(){_.defer(()=>{Drupal.displace(true);});},render(){this.updateTabs();this.updateTrayOrientation();this.updateBarAttributes();$('[data-toolbar-anti-flicker-loading]').remove();$('html').removeClass(['toolbar-loading','toolbar-horizontal','toolbar-vertical','toolbar-tray-open','toolbar-fixed','toolbar-oriented','toolbar-anti-flicker']);$('body').removeClass('toolbar-loading');if(this.model.changed.orientation==='vertical'||this.model.changed.activeTab)this.loadSubtrees();return this;},onTabClick(event){if(event.currentTarget.hasAttribute('data-toolbar-tray')){const activeTab=this.model.get('activeTab');const clickedTab=event.currentTarget;this.model.set('activeTab',!activeTab||clickedTab!==activeTab?clickedTab:null);event.preventDefault();event.stopPropagation();}},onOrientationToggleClick(event){const orientation=this.model.get('orientation');const antiOrientation=orientation==='vertical'?'horizontal':'vertical';const locked=antiOrientation==='vertical';if(locked)localStorage.setItem('Drupal.toolbar.trayVerticalLocked','true');else localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');this.model.set({locked,orientation:antiOrientation},{validate:true,override:true});event.preventDefault();event.stopPropagation();},updateTabs(){const $tab=$(this.model.get('activeTab'));$(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed',false);$(this.model.previous('activeTray')).removeClass('is-active');localStorage.removeItem('Drupal.toolbar.activeTabID');if($tab.length>0){$tab.addClass('is-active').prop('aria-pressed',true);const name=$tab.attr('data-toolbar-tray');const id=$tab.get(0).id;if(id)localStorage.setItem('Drupal.toolbar.activeTabID',JSON.stringify(id));const $tray=this.$el.find(`[data-toolbar-tray="${name}"].toolbar-tray`);if($tray.length){$tray.addClass('is-active');this.model.set('activeTray',$tray.get(0));}else this.model.set('activeTray',null);}else{this.model.set('activeTray',null);localStorage.removeItem('Drupal.toolbar.activeTabID');}},updateBarAttributes(){const isOriented=this.model.get('isOriented');if(isOriented)this.$el.find('.toolbar-bar').attr('data-offset-top','');else this.$el.find('.toolbar-bar').removeAttr('data-offset-top');this.$el.toggleClass('toolbar-oriented',isOriented);},updateTrayOrientation(){const orientation=this.model.get('orientation');const antiOrientation=orientation==='vertical'?'horizontal':'vertical';$('body').toggleClass('toolbar-vertical',orientation==='vertical').toggleClass('toolbar-horizontal',orientation==='horizontal');const removeClass=antiOrientation==='horizontal'?'toolbar-tray-horizontal':'toolbar-tray-vertical';const $trays=this.$el.find('.toolbar-tray').removeClass(removeClass).addClass(`toolbar-tray-${orientation}`);const iconClass=`toolbar-icon-toggle-${orientation}`;const iconAntiClass=`toolbar-icon-toggle-${antiOrientation}`;const $orientationToggle=this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));const $orientationToggleButton=$orientationToggle.find('button');$orientationToggleButton[0].value=antiOrientation;$orientationToggleButton.attr('title',this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);$orientationToggleButton[0].textContent=this.strings[antiOrientation];const dir=document.documentElement.dir;const edge=dir==='rtl'?'right':'left';$trays.removeAttr('data-offset-left data-offset-right data-offset-top');$trays.filter('.toolbar-tray-vertical.is-active').attr(`data-offset-${edge}`,'');$trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top','');},adjustPlacement(){const $trays=this.$el.find('.toolbar-tray');if(!this.model.get('isOriented'))$trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');},loadSubtrees(){const $activeTab=$(this.model.get('activeTab'));const orientation=this.model.get('orientation');if(!this.model.get('areSubtreesLoaded')&&typeof $activeTab.data('drupal-subtrees')!=='undefined'&&orientation==='vertical'){const subtreesHash=drupalSettings.toolbar.subtreesHash;const theme=drupalSettings.ajaxPageState.theme;const endpoint=Drupal.url(`toolbar/subtrees/${subtreesHash}`);const cachedSubtreesHash=localStorage.getItem(`Drupal.toolbar.subtreesHash.${theme}`);const cachedSubtrees=JSON.parse(localStorage.getItem(`Drupal.toolbar.subtrees.${theme}`));const isVertical=this.model.get('orientation')==='vertical';if(isVertical&&subtreesHash===cachedSubtreesHash&&cachedSubtrees)Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);else{if(isVertical){localStorage.removeItem(`Drupal.toolbar.subtreesHash.${theme}`);localStorage.removeItem(`Drupal.toolbar.subtrees.${theme}`);Drupal.ajax({url:endpoint}).execute();localStorage.setItem(`Drupal.toolbar.subtreesHash.${theme}`,subtreesHash);}}}}});})(jQuery,Drupal,drupalSettings,Backbone);;
/* @license MIT https://raw.githubusercontent.com/shipshapecode/shepherd/v10.0.1/LICENSE */
/*! shepherd.js 10.0.1 */

'use strict';(function(O,pa){"object"===typeof exports&&"undefined"!==typeof module?module.exports=pa():"function"===typeof define&&define.amd?define(pa):(O="undefined"!==typeof globalThis?globalThis:O||self,O.Shepherd=pa())})(this,function(){function O(a,b){return!1!==b.clone&&b.isMergeableObject(a)?ea(Array.isArray(a)?[]:{},a,b):a}function pa(a,b,c){return a.concat(b).map(function(d){return O(d,c)})}function Db(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Sa(a){return Object.keys(a).concat(Db(a))}function Ta(a,b){try{return b in a}catch(c){return!1}}function Eb(a,b,c){var d={};c.isMergeableObject(a)&&Sa(a).forEach(function(e){d[e]=O(a[e],c)});Sa(b).forEach(function(e){if(!Ta(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ta(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:ea}else f=ea;d[e]=f(a[e],b[e],c)}else d[e]=O(b[e],c)});return d}function ea(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||pa;c.isMergeableObject=c.isMergeableObject||Fb;c.cloneUnlessOtherwiseSpecified=O;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?O(b,c):d?c.arrayMerge(a,b,c):Eb(a,b,c)}function Z(a){return"function"===typeof a}function qa(a){return"string"===typeof a}function Ua(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function Gb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function Hb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=Gb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function M(a){return a?(a.nodeName||"").toLowerCase():null}function K(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function fa(a){var b=K(a).Element;return a instanceof b||a instanceof Element}function F(a){var b=K(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function Ea(a){if("undefined"===typeof ShadowRoot)return!1;var b=K(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function N(a){return a.split("-")[0]}
function ha(a,b){void 0===b&&(b=!1);var c=a.getBoundingClientRect(),d=1,e=1;F(a)&&b&&(b=a.offsetHeight,a=a.offsetWidth,0<a&&(d=ia(c.width)/a||1),0<b&&(e=ia(c.height)/b||1));return{width:c.width/d,height:c.height/e,top:c.top/e,right:c.right/d,bottom:c.bottom/e,left:c.left/d,x:c.left/d,y:c.top/e}}function Fa(a){var b=ha(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Va(a,b){var c=
b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&Ea(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function P(a){return K(a).getComputedStyle(a)}function U(a){return((fa(a)?a.ownerDocument:a.document)||window.document).documentElement}function wa(a){return"html"===M(a)?a:a.assignedSlot||a.parentNode||(Ea(a)?a.host:null)||U(a)}function Wa(a){return F(a)&&"fixed"!==P(a).position?a.offsetParent:null}function ra(a){for(var b=K(a),c=Wa(a);c&&0<=["table","td",
"th"].indexOf(M(c))&&"static"===P(c).position;)c=Wa(c);if(c&&("html"===M(c)||"body"===M(c)&&"static"===P(c).position))return b;if(!c)a:{c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!F(a)||"fixed"!==P(a).position)for(a=wa(a),Ea(a)&&(a=a.host);F(a)&&0>["html","body"].indexOf(M(a));){var d=P(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||
c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function Ga(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Xa(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function Ya(a,b){return b.reduce(function(c,d){c[d]=a;return c},{})}function ja(a){return a.split("-")[1]}function Za(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.variation,g=a.offsets,l=a.position,m=a.gpuAcceleration,k=a.adaptive,p=a.roundOffsets,q=a.isFixed;a=g.x;a=void 0===
a?0:a;var n=g.y,r=void 0===n?0:n;n="function"===typeof p?p({x:a,y:r}):{x:a,y:r};a=n.x;r=n.y;n=g.hasOwnProperty("x");g=g.hasOwnProperty("y");var x="left",h="top",t=window;if(k){var v=ra(c),A="clientHeight",u="clientWidth";v===K(c)&&(v=U(c),"static"!==P(v).position&&"absolute"===l&&(A="scrollHeight",u="scrollWidth"));if("top"===e||("left"===e||"right"===e)&&"end"===f)h="bottom",r-=(q&&v===t&&t.visualViewport?t.visualViewport.height:v[A])-d.height,r*=m?1:-1;if("left"===e||("top"===e||"bottom"===e)&&
"end"===f)x="right",a-=(q&&v===t&&t.visualViewport?t.visualViewport.width:v[u])-d.width,a*=m?1:-1}c=Object.assign({position:l},k&&Ib);!0===p?(p=r,d=window.devicePixelRatio||1,a={x:ia(a*d)/d||0,y:ia(p*d)/d||0}):a={x:a,y:r};p=a;a=p.x;r=p.y;if(m){var w;return Object.assign({},c,(w={},w[h]=g?"0":"",w[x]=n?"0":"",w.transform=1>=(t.devicePixelRatio||1)?"translate("+a+"px, "+r+"px)":"translate3d("+a+"px, "+r+"px, 0)",w))}return Object.assign({},c,(b={},b[h]=g?r+"px":"",b[x]=n?a+"px":"",b.transform="",b))}
function xa(a){return a.replace(/left|right|bottom|top/g,function(b){return Jb[b]})}function $a(a){return a.replace(/start|end/g,function(b){return Kb[b]})}function Ha(a){a=K(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function Ia(a){return ha(U(a)).left+Ha(a).scrollLeft}function Ja(a){a=P(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function ab(a){return 0<=["html","body","#document"].indexOf(M(a))?a.ownerDocument.body:F(a)&&Ja(a)?a:ab(wa(a))}function sa(a,
b){var c;void 0===b&&(b=[]);var d=ab(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=K(d);d=a?[c].concat(c.visualViewport||[],Ja(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(sa(wa(d)))}function Ka(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function bb(a,b){if("viewport"===b){b=K(a);var c=U(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(e=b.offsetLeft,
f=b.offsetTop));a={width:d,height:c,x:e+Ia(a),y:f};a=Ka(a)}else fa(b)?(a=ha(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=U(a),a=U(f),d=Ha(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=L(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=L(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+Ia(f),d=-d.scrollTop,"rtl"===P(b||
a).direction&&(f+=L(a.clientWidth,b?b.clientWidth:0)-c),a=Ka({width:c,height:e,x:f,y:d}));return a}function Lb(a){var b=sa(wa(a)),c=0<=["absolute","fixed"].indexOf(P(a).position)&&F(a)?ra(a):a;return fa(c)?b.filter(function(d){return fa(d)&&Va(d,c)&&"body"!==M(d)}):[]}function Mb(a,b,c){b="clippingParents"===b?Lb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(d,e){e=bb(a,e);d.top=L(e.top,d.top);d.right=V(e.right,d.right);d.bottom=V(e.bottom,d.bottom);d.left=L(e.left,d.left);return d},bb(a,
c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function cb(a){var b=a.reference,c=a.element,d=(a=a.placement)?N(a):null;a=a?ja(a):null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?Ga(d):null;if(null!=d)switch(f="y"===d?"height":"width",a){case "start":e[d]-=
b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ta(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var g=c.altBoundary,l=void 0===g?!1:g;c=c.padding;c=void 0===c?0:c;c=Xa("number"!==typeof c?c:Ya(c,ua));g=a.rects.popper;l=a.elements[l?"popper"===d?"reference":"popper":d];e=Mb(fa(l)?l:l.contextElement||U(a.elements.popper),
e,f);f=ha(a.elements.reference);l=cb({reference:f,element:g,strategy:"absolute",placement:b});g=Ka(Object.assign({},g,l));f="popper"===d?g:f;var m={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var k=a[b];Object.keys(m).forEach(function(p){var q=0<=["right","bottom"].indexOf(p)?1:-1,n=0<=["top","bottom"].indexOf(p)?"y":"x";m[p]+=k[n]*q})}return m}function Nb(a,b){void 0===b&&(b={});var c=
b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,g=b.allowedAutoPlacements,l=void 0===g?db:g,m=ja(b.placement);b=m?f?eb:eb.filter(function(p){return ja(p)===m}):ua;f=b.filter(function(p){return 0<=l.indexOf(p)});0===f.length&&(f=b);var k=f.reduce(function(p,q){p[q]=ta(a,{placement:q,boundary:c,rootBoundary:d,padding:e})[N(q)];return p},{});return Object.keys(k).sort(function(p,q){return k[p]-k[q]})}function Ob(a){if("auto"===N(a))return[];var b=xa(a);return[$a(a),b,$a(b)]}function fb(a,
b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function gb(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Pb(a,b,c){void 0===c&&(c=!1);var d=F(b),e;if(e=F(b)){var f=b.getBoundingClientRect();e=ia(f.width)/b.offsetWidth||1;f=ia(f.height)/b.offsetHeight||1;e=1!==e||1!==f}f=e;e=U(b);a=ha(a,f);f={scrollLeft:0,scrollTop:0};var g={x:0,y:0};if(d||!d&&!c){if("body"!==M(b)||Ja(e))f=
b!==K(b)&&F(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:Ha(b);F(b)?(g=ha(b,!0),g.x+=b.clientLeft,g.y+=b.clientTop):e&&(g.x=Ia(e))}return{x:a.left+f.scrollLeft-g.x,y:a.top+f.scrollTop-g.y,width:a.width,height:a.height}}function Qb(a){function b(f){d.add(f.name);[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(g){d.has(g)||(g=c.get(g))&&b(g)});e.push(f)}var c=new Map,d=new Set,e=[];a.forEach(function(f){c.set(f.name,f)});a.forEach(function(f){d.has(f.name)||b(f)});return e}function Rb(a){var b=
Qb(a);return Sb.reduce(function(c,d){return c.concat(b.filter(function(e){return e.phase===d}))},[])}function Tb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Ub(a){var b=a.reduce(function(c,d){var e=c[d.name];c[d.name]=e?Object.assign({},e,d,{options:Object.assign({},e.options,d.options),data:Object.assign({},e.data,d.data)}):d;return c},{});return Object.keys(b).map(function(c){return b[c]})}function hb(){for(var a=
arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(d){return!(d&&"function"===typeof d.getBoundingClientRect)})}function La(){La=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return La.apply(this,arguments)}function Vb(){return[{name:"applyStyles",fn(a){let {state:b}=a;Object.keys(b.elements).forEach(c=>{if("popper"===c){var d=b.attributes[c]||
{},e=b.elements[c];Object.assign(e.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});Object.keys(d).forEach(f=>{let g=d[f];!1===g?e.removeAttribute(f):e.setAttribute(f,!0===g?"":g)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function ib(a){return{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus({preventScroll:!0})},300)}}}function jb(a){return qa(a)&&""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Ma(){let a=
Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function kb(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(e=>e.name);b=b.modifiers.filter(e=>!d.includes(e.name));c.modifiers=Array.from(new Set([...b,...a.popperOptions.modifiers]))}return c}return b}function G(){}
function Wb(a,b){for(let c in b)a[c]=b[c];return a}function ka(a){return a()}function lb(a){return"function"===typeof a}function Q(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function H(a){a.parentNode.removeChild(a)}function mb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function ya(a,b,c,d){a.addEventListener(b,c,d);return()=>a.removeEventListener(b,c,d)}function B(a,b,c){null==c?a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}
function nb(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:B(a,d,b[d])}function la(a,b,c){a.classList[c?"add":"remove"](b)}function za(){if(!R)throw Error("Function called outside component initialization");return R}function Na(a){Aa.push(a)}function ob(){let a=R;do{for(;Ba<va.length;){var b=va[Ba];Ba++;R=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(ka);
var c=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,c);b.after_update.forEach(Na)}}R=null;for(Ba=va.length=0;ma.length;)ma.pop()();for(b=0;b<Aa.length;b+=1)c=Aa[b],Oa.has(c)||(Oa.add(c),c());Aa.length=0}while(va.length);for(;pb.length;)pb.pop()();Pa=!1;Oa.clear();R=a}function aa(){ba={r:0,c:[],p:ba}}function ca(){ba.r||ba.c.forEach(ka);ba=ba.p}function z(a,b){a&&a.i&&(Ca.delete(a),a.i(b))}function C(a,b,c,d){a&&a.o?Ca.has(a)||(Ca.add(a),ba.c.push(()=>{Ca.delete(a);d&&(c&&a.d(1),d())}),a.o(b)):
d&&d()}function da(a){a&&a.c()}function W(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:g,after_update:l}=a.$$;e&&e.m(b,c);d||Na(()=>{let m=f.map(ka).filter(lb);g?g.push(...m):m.forEach(ka);a.$$.on_mount=[]});l.forEach(Na)}function X(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(ka),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function S(a,b,c,d,e,f,g,l){void 0===l&&(l=[-1]);let m=R;R=a;let k=a.$$={fragment:null,ctx:null,props:f,update:G,not_equal:e,bound:Object.create(null),
on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(b.context||(m?m.$$.context:[])),callbacks:Object.create(null),dirty:l,skip_bound:!1,root:b.target||m.$$.root};g&&g(k.root);let p=!1;k.ctx=c?c(a,b.props||{},function(q,n){let r=(2>=arguments.length?0:arguments.length-2)?2>=arguments.length?void 0:arguments[2]:n;if(k.ctx&&e(k.ctx[q],k.ctx[q]=r)){if(!k.skip_bound&&k.bound[q])k.bound[q](r);p&&(-1===a.$$.dirty[0]&&(va.push(a),Pa||(Pa=!0,Xb.then(ob)),a.$$.dirty.fill(0)),
a.$$.dirty[q/31|0]|=1<<q%31)}return n}):[];k.update();p=!0;k.before_update.forEach(ka);k.fragment=d?d(k.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),k.fragment&&k.fragment.l(c),c.forEach(H)):k.fragment&&k.fragment.c(),b.intro&&z(a.$$.fragment),W(a,b.target,b.anchor,b.customElement),ob());R=m}function Yb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");B(b,"aria-label",c=a[3]?a[3]:null);B(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);
b.disabled=a[2];B(b,"tabindex","0")},m(g,l){g.insertBefore(b,l||null);b.innerHTML=a[5];e||(f=ya(b,"click",function(){lb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(g,l){[l]=l;a=g;l&32&&(b.innerHTML=a[5]);l&8&&c!==(c=a[3]?a[3]:null)&&B(b,"aria-label",c);l&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&B(b,"class",d);l&4&&(b.disabled=a[2])},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function Zb(a,b,c){function d(n){return Z(n)?n.call(f):n}let {config:e,step:f}=b,g,l,m,k,p,q;
a.$$set=n=>{"config"in n&&c(6,e=n.config);"step"in n&&c(7,f=n.step)};a.$$.update=()=>{a.$$.dirty&192&&(c(0,g=e.action?e.action.bind(f.tour):null),c(1,l=e.classes),c(2,m=e.disabled?d(e.disabled):!1),c(3,k=e.label?d(e.label):null),c(4,p=e.secondary),c(5,q=e.text?d(e.text):null))};return[g,l,m,k,p,q,e,f]}function qb(a,b,c){a=a.slice();a[2]=b[c];return a}function rb(a){let b,c,d=a[1],e=[];for(let g=0;g<d.length;g+=1)e[g]=sb(qb(a,d,g));let f=g=>C(e[g],1,1,()=>{e[g]=null});return{c(){for(let g=0;g<e.length;g+=
1)e[g].c();b=document.createTextNode("")},m(g,l){for(let m=0;m<e.length;m+=1)e[m].m(g,l);g.insertBefore(b,l||null);c=!0},p(g,l){if(l&3){d=g[1];let m;for(m=0;m<d.length;m+=1){let k=qb(g,d,m);e[m]?(e[m].p(k,l),z(e[m],1)):(e[m]=sb(k),e[m].c(),z(e[m],1),e[m].m(b.parentNode,b))}aa();for(m=d.length;m<e.length;m+=1)f(m);ca()}},i(g){if(!c){for(g=0;g<d.length;g+=1)z(e[g]);c=!0}},o(g){e=e.filter(Boolean);for(g=0;g<e.length;g+=1)C(e[g]);c=!1},d(g){var l=e;for(let m=0;m<l.length;m+=1)l[m]&&l[m].d(g);g&&H(b)}}}
function sb(a){let b,c;b=new $b({props:{config:a[2],step:a[0]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.config=d[2]);e&1&&(f.step=d[0]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ac(a){let b,c,d=a[1]&&rb(a);return{c(){b=document.createElement("footer");d&&d.c();B(b,"class","shepherd-footer")},m(e,f){e.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(e,f){[f]=f;e[1]?d?(d.p(e,f),f&2&&z(d,1)):(d=rb(e),d.c(),z(d,
1),d.m(b,null)):d&&(aa(),C(d,1,1,()=>{d=null}),ca())},i(e){c||(z(d),c=!0)},o(e){C(d);c=!1},d(e){e&&H(b);d&&d.d()}}}function bc(a,b,c){let d,{step:e}=b;a.$$set=f=>{"step"in f&&c(0,e=f.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function cc(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";B(c,"aria-hidden","true");B(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");B(b,"class","shepherd-cancel-icon");
B(b,"type","button")},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);e||(f=ya(b,"click",a[1]),e=!0)},p(g,l){[l]=l;l&1&&d!==(d=g[0].label?g[0].label:"Close Tour")&&B(b,"aria-label",d)},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function dc(a,b,c){let {cancelIcon:d,step:e}=b;a.$$set=f=>{"cancelIcon"in f&&c(0,d=f.cancelIcon);"step"in f&&c(2,e=f.step)};return[d,f=>{f.preventDefault();e.cancel()},e]}function ec(a){let b;return{c(){b=document.createElement("h3");B(b,"id",a[1]);B(b,"class","shepherd-title")},m(c,
d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function fc(a,b,c){let {labelId:d,element:e,title:f}=b;za().$$.after_update.push(()=>{Z(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=g=>{"labelId"in g&&c(1,d=g.labelId);"element"in g&&c(0,e=g.element);"title"in g&&c(2,f=g.title)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function tb(a){let b,c;b=new gc({props:{labelId:a[0],title:a[2]}});return{c(){da(b.$$.fragment)},
m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.labelId=d[0]);e&4&&(f.title=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ub(a){let b,c;b=new hc({props:{cancelIcon:a[3],step:a[1]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&8&&(f.cancelIcon=d[3]);e&2&&(f.step=d[1]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ic(a){let b,c,d,e=a[2]&&tb(a),f=a[3]&&a[3].enabled&&
ub(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();B(b,"class","shepherd-header")},m(g,l){g.insertBefore(b,l||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(g,l){[l]=l;g[2]?e?(e.p(g,l),l&4&&z(e,1)):(e=tb(g),e.c(),z(e,1),e.m(b,c)):e&&(aa(),C(e,1,1,()=>{e=null}),ca());g[3]&&g[3].enabled?f?(f.p(g,l),l&8&&z(f,1)):(f=ub(g),f.c(),z(f,1),f.m(b,null)):f&&(aa(),C(f,1,1,()=>{f=null}),ca())},i(g){d||(z(e),z(f),d=!0)},o(g){C(e);C(f);d=!1},d(g){g&&
H(b);e&&e.d();f&&f.d()}}}function jc(a,b,c){let {labelId:d,step:e}=b,f,g;a.$$set=l=>{"labelId"in l&&c(0,d=l.labelId);"step"in l&&c(1,e=l.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,g=e.options.cancelIcon))};return[d,e,f,g]}function kc(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-text");B(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function lc(a,b,c){let {descriptionId:d,
element:e,step:f}=b;za().$$.after_update.push(()=>{let {text:g}=f.options;Z(g)&&(g=g.call(f));g instanceof HTMLElement?e.appendChild(g):c(0,e.innerHTML=g,e)});a.$$set=g=>{"descriptionId"in g&&c(1,d=g.descriptionId);"element"in g&&c(0,e=g.element);"step"in g&&c(2,f=g.step)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function vb(a){let b,c;b=new mc({props:{labelId:a[1],step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.labelId=d[1]);e&4&&
(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function wb(a){let b,c;b=new nc({props:{descriptionId:a[0],step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.descriptionId=d[0]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function xb(a){let b,c;b=new oc({props:{step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};
e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function pc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,g=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,l,m=c&&vb(a),k=e&&wb(a),p=g&&xb(a);return{c(){b=document.createElement("div");m&&m.c();d=document.createTextNode(" ");k&&k.c();f=document.createTextNode(" ");p&&p.c();B(b,"class","shepherd-content")},
m(q,n){q.insertBefore(b,n||null);m&&m.m(b,null);b.appendChild(d);k&&k.m(b,null);b.appendChild(f);p&&p.m(b,null);l=!0},p(q,n){[n]=n;n&4&&(c=void 0!==q[2].options.title||q[2].options.cancelIcon&&q[2].options.cancelIcon.enabled);c?m?(m.p(q,n),n&4&&z(m,1)):(m=vb(q),m.c(),z(m,1),m.m(b,d)):m&&(aa(),C(m,1,1,()=>{m=null}),ca());n&4&&(e=void 0!==q[2].options.text);e?k?(k.p(q,n),n&4&&z(k,1)):(k=wb(q),k.c(),z(k,1),k.m(b,f)):k&&(aa(),C(k,1,1,()=>{k=null}),ca());n&4&&(g=Array.isArray(q[2].options.buttons)&&q[2].options.buttons.length);
g?p?(p.p(q,n),n&4&&z(p,1)):(p=xb(q),p.c(),z(p,1),p.m(b,null)):p&&(aa(),C(p,1,1,()=>{p=null}),ca())},i(q){l||(z(m),z(k),z(p),l=!0)},o(q){C(m);C(k);C(p);l=!1},d(q){q&&H(b);m&&m.d();k&&k.d();p&&p.d()}}}function qc(a,b,c){let {descriptionId:d,labelId:e,step:f}=b;a.$$set=g=>{"descriptionId"in g&&c(0,d=g.descriptionId);"labelId"in g&&c(1,e=g.labelId);"step"in g&&c(2,f=g.step)};return[d,e,f]}function yb(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-arrow");B(b,"data-popper-arrow",
"")},m(c,d){c.insertBefore(b,d||null)},d(c){c&&H(b)}}}function rc(a){let b,c,d,e,f,g,l,m,k=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on&&yb();d=new sc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let p=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:null},a[1],{role:"dialog"},{tabindex:"0"}],q={};for(let n=0;n<p.length;n+=1)q=Wb(q,p[n]);return{c(){b=document.createElement("div");
k&&k.c();c=document.createTextNode(" ");da(d.$$.fragment);nb(b,q);la(b,"shepherd-has-cancel-icon",a[5]);la(b,"shepherd-has-title",a[6]);la(b,"shepherd-element",!0)},m(n,r){n.insertBefore(b,r||null);k&&k.m(b,null);b.appendChild(c);W(d,b,null);a[13](b);g=!0;l||(m=ya(b,"keydown",a[7]),l=!0)},p(n,r){var [x]=r;n[4].options.arrow&&n[4].options.attachTo&&n[4].options.attachTo.element&&n[4].options.attachTo.on?k||(k=yb(),k.c(),k.m(b,c)):k&&(k.d(1),k=null);r={};x&4&&(r.descriptionId=n[2]);x&8&&(r.labelId=
n[3]);x&16&&(r.step=n[4]);d.$set(r);r=b;x=[(!g||x&20&&e!==(e=void 0!==n[4].options.text?n[2]:null))&&{"aria-describedby":e},(!g||x&24&&f!==(f=n[4].options.title?n[3]:null))&&{"aria-labelledby":f},x&2&&n[1],{role:"dialog"},{tabindex:"0"}];let h={},t={},v={$$scope:1},A=p.length;for(;A--;){let u=p[A],w=x[A];if(w){for(let y in u)y in w||(t[y]=1);for(let y in w)v[y]||(h[y]=w[y],v[y]=1);p[A]=w}else for(let y in u)v[y]=1}for(let u in t)u in h||(h[u]=void 0);nb(r,q=h);la(b,"shepherd-has-cancel-icon",n[5]);
la(b,"shepherd-has-title",n[6]);la(b,"shepherd-element",!0)},i(n){g||(z(d.$$.fragment,n),g=!0)},o(n){C(d.$$.fragment,n);g=!1},d(n){n&&H(b);k&&k.d();X(d);a[13](null);l=!1;m()}}}function zb(a){return a.split(" ").filter(b=>!!b.length)}function tc(a,b,c){let {classPrefix:d,element:e,descriptionId:f,firstFocusableElement:g,focusableElements:l,labelId:m,lastFocusableElement:k,step:p,dataStepId:q}=b,n,r,x;za().$$.on_mount.push(()=>{c(1,q={[`data-${d}shepherd-step-id`]:p.id});c(9,l=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));
c(8,g=l[0]);c(10,k=l[l.length-1])});za().$$.after_update.push(()=>{if(x!==p.options.classes){var h=x;qa(h)&&(h=zb(h),h.length&&e.classList.remove(...h));h=x=p.options.classes;qa(h)&&(h=zb(h),h.length&&e.classList.add(...h))}});a.$$set=h=>{"classPrefix"in h&&c(11,d=h.classPrefix);"element"in h&&c(0,e=h.element);"descriptionId"in h&&c(2,f=h.descriptionId);"firstFocusableElement"in h&&c(8,g=h.firstFocusableElement);"focusableElements"in h&&c(9,l=h.focusableElements);"labelId"in h&&c(3,m=h.labelId);"lastFocusableElement"in
h&&c(10,k=h.lastFocusableElement);"step"in h&&c(4,p=h.step);"dataStepId"in h&&c(1,q=h.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,n=p.options&&p.options.cancelIcon&&p.options.cancelIcon.enabled),c(6,r=p.options&&p.options.title))};return[e,q,f,m,p,n,r,h=>{const {tour:t}=p;switch(h.keyCode){case 9:if(0===l.length){h.preventDefault();break}if(h.shiftKey){if(document.activeElement===g||document.activeElement.classList.contains("shepherd-element"))h.preventDefault(),k.focus()}else document.activeElement===
k&&(h.preventDefault(),g.focus());break;case 27:t.options.exitOnEsc&&p.cancel();break;case 37:t.options.keyboardNavigation&&t.back();break;case 39:t.options.keyboardNavigation&&t.next()}},g,l,k,d,()=>e,function(h){ma[h?"unshift":"push"](()=>{e=h;c(0,e)})}]}function uc(a){a&&({steps:a}=a,a.forEach(b=>{b.options&&!1===b.options.canClickTarget&&b.options.attachTo&&b.target instanceof HTMLElement&&b.target.classList.remove("shepherd-target-click-disabled")}))}function vc(a){let b,c,d,e,f;return{c(){b=
mb("svg");c=mb("path");B(c,"d",a[2]);B(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);a[11](b);e||(f=ya(b,"touchmove",a[3]),e=!0)},p(g,l){[l]=l;l&4&&B(c,"d",g[2]);l&2&&d!==(d=`${g[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&B(b,"class",d)},i:G,o:G,d(g){g&&H(b);a[11](null);e=!1;f()}}}function Ab(a){if(!a)return null;let b=a instanceof HTMLElement&&window.getComputedStyle(a).overflowY;
return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:Ab(a.parentElement)}function wc(a,b,c){function d(){c(4,p={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,q=!1);l()}function f(h,t,v,A){void 0===h&&(h=0);void 0===t&&(t=0);if(A){var u=A.getBoundingClientRect();let y=u.y||u.top;u=u.bottom||y+u.height;if(v){var w=v.getBoundingClientRect();v=w.y||w.top;w=w.bottom||v+w.height;y=Math.max(y,v);u=Math.min(u,w)}let {y:Y,height:E}={y,height:Math.max(u-y,0)},{x:I,width:D,left:na}=A.getBoundingClientRect();
c(4,p={width:D+2*h,height:E+2*h,x:(I||na)-h,y:Y-h,r:t})}else d()}function g(){c(1,q=!0)}function l(){n&&(cancelAnimationFrame(n),n=void 0);window.removeEventListener("touchmove",x,{passive:!1})}function m(h){let {modalOverlayOpeningPadding:t,modalOverlayOpeningRadius:v}=h.options,A=Ab(h.target),u=()=>{n=void 0;f(t,v,A,h.target);n=requestAnimationFrame(u)};u();window.addEventListener("touchmove",x,{passive:!1})}let {element:k,openingProperties:p}=b;Ma();let q=!1,n=void 0,r;d();let x=h=>{h.preventDefault()};
a.$$set=h=>{"element"in h&&c(0,k=h.element);"openingProperties"in h&&c(4,p=h.openingProperties)};a.$$.update=()=>{if(a.$$.dirty&16){let {width:h,height:t,x:v=0,y:A=0,r:u=0}=p,{innerWidth:w,innerHeight:y}=window;c(2,r=`M${w},${y}\
H0\
V0\
H${w}\
V${y}\
Z\
M${v+u},${A}\
a${u},${u},0,0,0-${u},${u}\
V${t+A-u}\
a${u},${u},0,0,0,${u},${u}\
H${h+v-u}\
a${u},${u},0,0,0,${u}-${u}\
V${A+u}\
a${u},${u},0,0,0-${u}-${u}\
Z`)}};return[k,q,r,h=>{h.stopPropagation()},p,()=>k,d,e,f,function(h){l();h.tour.options.useModalOverlay?(m(h),g()):e()},g,function(h){ma[h?"unshift":"push"](()=>{k=h;c(0,k)})}]}var Fb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===xc);return b},xc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;ea.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");
return a.reduce(function(c,d){return ea(c,d,b)},{})};var yc=ea;class Qa{on(a,b,c,d){void 0===d&&(d=!1);void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a){for(var b=
arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((e,f)=>{let {ctx:g,handler:l,once:m}=e;l.apply(g||this,c);m&&this.bindings[a].splice(f,1)});return this}}var ua=["top","bottom","right","left"],eb=ua.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),db=[].concat(ua,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",b+"-end"])},[]),Sb="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
L=Math.max,V=Math.min,ia=Math.round,Ib={top:"auto",right:"auto",bottom:"auto",left:"auto"},Da={passive:!0},Jb={left:"right",right:"left",bottom:"top",top:"bottom"},Kb={start:"end",end:"start"},Bb={placement:"bottom",modifiers:[],strategy:"absolute"},zc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?Bb:a;return function(e,f,g){function l(){k.orderedModifiers.forEach(function(r){var x=r.name,h=r.options;h=void 0===h?{}:h;r=r.effect;"function"===
typeof r&&(x=r({state:k,name:x,instance:n,options:h}),p.push(x||function(){}))})}function m(){p.forEach(function(r){return r()});p=[]}void 0===g&&(g=d);var k={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bb,d),modifiersData:{},elements:{reference:e,popper:f},attributes:{},styles:{}},p=[],q=!1,n={state:k,setOptions:function(r){r="function"===typeof r?r(k.options):r;m();k.options=Object.assign({},d,k.options,r);k.scrollParents={reference:fa(e)?sa(e):e.contextElement?sa(e.contextElement):
[],popper:sa(f)};r=Rb(Ub([].concat(c,k.options.modifiers)));k.orderedModifiers=r.filter(function(x){return x.enabled});l();return n.update()},forceUpdate:function(){if(!q){var r=k.elements,x=r.reference;r=r.popper;if(hb(x,r))for(k.rects={reference:Pb(x,ra(r),"fixed"===k.options.strategy),popper:Fa(r)},k.reset=!1,k.placement=k.options.placement,k.orderedModifiers.forEach(function(v){return k.modifiersData[v.name]=Object.assign({},v.data)}),x=0;x<k.orderedModifiers.length;x++)if(!0===k.reset)k.reset=
!1,x=-1;else{var h=k.orderedModifiers[x];r=h.fn;var t=h.options;t=void 0===t?{}:t;h=h.name;"function"===typeof r&&(k=r({state:k,options:t,name:h,instance:n})||k)}}},update:Tb(function(){return new Promise(function(r){n.forceUpdate();r(k)})}),destroy:function(){m();q=!0}};if(!hb(e,f))return n;n.setOptions(g).then(function(r){if(!q&&g.onFirstUpdate)g.onFirstUpdate(r)});return n}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;
a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,g=K(b.elements.popper),l=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&l.forEach(function(m){m.addEventListener("scroll",c.update,Da)});f&&g.addEventListener("resize",c.update,Da);return function(){e&&l.forEach(function(m){m.removeEventListener("scroll",c.update,Da)});f&&g.removeEventListener("resize",c.update,Da)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=
cb({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:N(b.placement),variation:ja(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&
(b.styles.popper=Object.assign({},b.styles.popper,Za(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,Za(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",
fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(c){var d=b.styles[c]||{},e=b.attributes[c]||{},f=b.elements[c];F(f)&&M(f)&&(Object.assign(f.style,d),Object.keys(e).forEach(function(g){var l=e[g];!1===l?f.removeAttribute(g):f.setAttribute(g,!0===l?"":l)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=c;b.elements.arrow&&
Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(d){var e=b.elements[d],f=b.attributes[d]||{};d=Object.keys(b.styles.hasOwnProperty(d)?b.styles[d]:c[d]).reduce(function(g,l){g[l]="";return g},{});F(e)&&M(e)&&(Object.assign(e.style,d),Object.keys(f).forEach(function(g){e.removeAttribute(g)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;a=a.options.offset;
var d=void 0===a?[0,0]:a;a=db.reduce(function(g,l){var m=b.rects;var k=N(l);var p=0<=["left","top"].indexOf(k)?-1:1,q="function"===typeof d?d(Object.assign({},m,{placement:l})):d;m=q[0];q=q[1];m=m||0;q=(q||0)*p;k=0<=["left","right"].indexOf(k)?{x:q,y:m}:{x:m,y:q};g[l]=k;return g},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=
a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,g=c.padding,l=c.boundary,m=c.rootBoundary,k=c.altBoundary,p=c.flipVariations,q=void 0===p?!0:p,n=c.allowedAutoPlacements;c=b.options.placement;p=N(c);f=f||(p!==c&&q?Ob(c):[xa(c)]);var r=[c].concat(f).reduce(function(E,I){return E.concat("auto"===N(I)?Nb(b,{placement:I,boundary:l,rootBoundary:m,padding:g,flipVariations:q,allowedAutoPlacements:n}):
I)},[]);c=b.rects.reference;f=b.rects.popper;var x=new Map;p=!0;for(var h=r[0],t=0;t<r.length;t++){var v=r[t],A=N(v),u="start"===ja(v),w=0<=["top","bottom"].indexOf(A),y=w?"width":"height",Y=ta(b,{placement:v,boundary:l,rootBoundary:m,altBoundary:k,padding:g});u=w?u?"right":"left":u?"bottom":"top";c[y]>f[y]&&(u=xa(u));y=xa(u);w=[];d&&w.push(0>=Y[A]);e&&w.push(0>=Y[u],0>=Y[y]);if(w.every(function(E){return E})){h=v;p=!1;break}x.set(v,w)}if(p)for(d=function(E){var I=r.find(function(D){if(D=x.get(D))return D.slice(0,
E).every(function(na){return na})});if(I)return h=I,"break"},e=q?3:1;0<e&&"break"!==d(e);e--);b.placement!==h&&(b.modifiersData[a]._skip=!0,b.placement=h,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;var g=void 0===d?!0:d;d=c.tetherOffset;var l=void 0===d?0:d,m=ta(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary}),k=N(b.placement),p=ja(b.placement),q=!p,n=Ga(k);c="x"===n?"y":"x";d=b.modifiersData.popperOffsets;var r=b.rects.reference,x=b.rects.popper;l="function"===typeof l?l(Object.assign({},b.rects,{placement:b.placement})):l;var h="number"===typeof l?{mainAxis:l,altAxis:l}:Object.assign({mainAxis:0,altAxis:0},l),t=b.modifiersData.offset?b.modifiersData.offset[b.placement]:null;l={x:0,y:0};if(d){if(e){var v,A="y"===n?"top":"left",u="y"===n?"bottom":"right",w=
"y"===n?"height":"width";e=d[n];var y=e+m[A],Y=e-m[u],E=g?-x[w]/2:0,I="start"===p?r[w]:x[w];p="start"===p?-x[w]:-r[w];var D=b.elements.arrow;D=g&&D?Fa(D):{width:0,height:0};var na=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};A=na[A];u=na[u];D=L(0,V(r[w],D[w]));I=q?r[w]/2-E-D-A-h.mainAxis:I-D-A-h.mainAxis;q=q?-r[w]/2+E+D+u+h.mainAxis:p+D+u+h.mainAxis;w=(w=b.elements.arrow&&ra(b.elements.arrow))?"y"===n?w.clientTop||0:w.clientLeft||
0:0;E=null!=(v=null==t?void 0:t[n])?v:0;v=e+q-E;y=g?V(y,e+I-E-w):y;v=g?L(Y,v):Y;v=L(y,V(e,v));d[n]=v;l[n]=v-e}if(f){var J;f=d[c];e="y"===c?"height":"width";v=f+m["x"===n?"top":"left"];m=f-m["x"===n?"bottom":"right"];k=-1!==["top","left"].indexOf(k);n=null!=(J=null==t?void 0:t[c])?J:0;J=k?v:f-r[e]-x[e]-n+h.altAxis;r=k?f+r[e]+x[e]-n-h.altAxis:m;g&&k?(J=L(J,V(f,r)),J=J>r?r:J):J=L(g?J:v,V(f,g?r:m));d[c]=J;l[c]=J-f}b.modifiersData[a]=l}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",
fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,l=N(c.placement);a=Ga(l);l=0<=["left","right"].indexOf(l)?"height":"width";if(f&&g){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Xa("number"!==typeof e?e:Ya(e,ua));var m=Fa(f),k="y"===a?"top":"left",p="y"===a?"bottom":"right",q=c.rects.reference[l]+c.rects.reference[a]-g[a]-c.rects.popper[l];g=g[a]-c.rects.reference[a];f=(f=ra(f))?"y"===a?f.clientHeight||
0:f.clientWidth||0:0;g=f/2-m[l]/2+(q/2-g/2);l=L(e[k],V(g,f-m[l]-e[p]));c.modifiersData[d]=(b={},b[a]=l,b.centerOffset=l-g,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Va(b.elements.popper,a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=
a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ta(b,{elementContext:"reference"}),g=ta(b,{altBoundary:!0});c=fb(f,c);d=fb(g,d,e);e=gb(c);g=gb(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:g};b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":g})}}]});let R,va=[],ma=[],Aa=[],pb=[],Xb=Promise.resolve(),Pa=!1,Oa=new Set,Ba=0,Ca=new Set,
ba;class T{$destroy(){X(this,1);this.$destroy=G}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let d=c.indexOf(b);-1!==d&&c.splice(d,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class $b extends T{constructor(a){super();S(this,a,Zb,Yb,Q,{config:6,step:7})}}class oc extends T{constructor(a){super();S(this,a,bc,ac,Q,{step:0})}}class hc extends T{constructor(a){super();S(this,a,dc,cc,Q,{cancelIcon:0,
step:2})}}class gc extends T{constructor(a){super();S(this,a,fc,ec,Q,{labelId:1,element:0,title:2})}}class mc extends T{constructor(a){super();S(this,a,jc,ic,Q,{labelId:0,step:1})}}class nc extends T{constructor(a){super();S(this,a,lc,kc,Q,{descriptionId:1,element:0,step:2})}}class sc extends T{constructor(a){super();S(this,a,qc,pc,Q,{descriptionId:0,labelId:1,step:2})}}class Ac extends T{constructor(a){super();S(this,a,tc,rc,Q,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,
labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var Cb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function c(h,t){this.scrollLeft=h;this.scrollTop=t}function d(h){if(null===h||"object"!==typeof h||void 0===h.behavior||"auto"===h.behavior||"instant"===h.behavior)return!0;if("object"===typeof h&&"smooth"===h.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+
h.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(h,t){if("Y"===t)return h.clientHeight+x<h.scrollHeight;if("X"===t)return h.clientWidth+x<h.scrollWidth}function f(h,t){h=k.getComputedStyle(h,null)["overflow"+t];return"auto"===h||"scroll"===h}function g(h){var t=e(h,"Y")&&f(h,"Y");h=e(h,"X")&&f(h,"X");return t||h}function l(h){var t=(r()-h.startTime)/468;var v=.5*(1-Math.cos(Math.PI*(1<t?1:t)));t=h.startX+(h.x-h.startX)*v;v=h.startY+(h.y-h.startY)*v;h.method.call(h.scrollable,
t,v);t===h.x&&v===h.y||k.requestAnimationFrame(l.bind(k,h))}function m(h,t,v){var A=r();if(h===p.body){var u=k;var w=k.scrollX||k.pageXOffset;h=k.scrollY||k.pageYOffset;var y=n.scroll}else u=h,w=h.scrollLeft,h=h.scrollTop,y=c;l({scrollable:u,method:y,startTime:A,startX:w,startY:h,x:t,y:v})}var k=window,p=document;if(!("scrollBehavior"in p.documentElement.style&&!0!==k.__forceSmoothScrollPolyfill__)){var q=k.HTMLElement||k.Element,n={scroll:k.scroll||k.scrollTo,scrollBy:k.scrollBy,elementScroll:q.prototype.scroll||
c,scrollIntoView:q.prototype.scrollIntoView},r=k.performance&&k.performance.now?k.performance.now.bind(k.performance):Date.now,x=/MSIE |Trident\/|Edge\//.test(k.navigator.userAgent)?1:0;k.scroll=k.scrollTo=function(h,t){void 0!==h&&(!0===d(h)?n.scroll.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:k.scrollX||k.pageXOffset,void 0!==h.top?h.top:void 0!==t?t:k.scrollY||k.pageYOffset):m.call(k,p.body,void 0!==h.left?~~h.left:k.scrollX||k.pageXOffset,void 0!==h.top?~~h.top:k.scrollY||k.pageYOffset))};
k.scrollBy=function(h,t){void 0!==h&&(d(h)?n.scrollBy.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:0,void 0!==h.top?h.top:void 0!==t?t:0):m.call(k,p.body,~~h.left+(k.scrollX||k.pageXOffset),~~h.top+(k.scrollY||k.pageYOffset)))};q.prototype.scroll=q.prototype.scrollTo=function(h,t){if(void 0!==h)if(!0===d(h)){if("number"===typeof h&&void 0===t)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==h.left?~~h.left:"object"!==typeof h?~~h:this.scrollLeft,void 0!==
h.top?~~h.top:void 0!==t?~~t:this.scrollTop)}else t=h.left,h=h.top,m.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof h?this.scrollTop:~~h)};q.prototype.scrollBy=function(h,t){void 0!==h&&(!0===d(h)?n.elementScroll.call(this,void 0!==h.left?~~h.left+this.scrollLeft:~~h+this.scrollLeft,void 0!==h.top?~~h.top+this.scrollTop:~~t+this.scrollTop):this.scroll({left:~~h.left+this.scrollLeft,top:~~h.top+this.scrollTop,behavior:h.behavior}))};q.prototype.scrollIntoView=function(h){if(!0===
d(h))n.scrollIntoView.call(this,void 0===h?!0:h);else{for(h=this;h!==p.body&&!1===g(h);)h=h.parentNode||h.host;var t=h.getBoundingClientRect(),v=this.getBoundingClientRect();h!==p.body?(m.call(this,h,h.scrollLeft+v.left-t.left,h.scrollTop+v.top-t.top),"fixed"!==k.getComputedStyle(h).position&&k.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):k.scrollBy({left:v.left,top:v.top,behavior:"smooth"})}}}}}})()});Cb.polyfill;Cb.polyfill();class Ra extends Qa{constructor(a,b){void 0===b&&(b={});super(a,
b);this.tour=a;this.classPrefix=this.tour.options?jb(this.tour.options.classPrefix):"";this.styles=a.styles;this._resolvedAttachTo=null;Ua(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();
this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}_resolveAttachToOptions(){let a=this.options.attachTo||{},b=Object.assign({},a);Z(b.element)&&(b.element=b.element.call(this));if(qa(b.element)){try{b.element=document.querySelector(b.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return this._resolvedAttachTo=b}_getResolvedAttachToOptions(){return null===this._resolvedAttachTo?
this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return!(!this.el||this.el.hidden)}show(){if(Z(this.options.beforeShowPromise)){let a=this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=new Ac({target:this.tour.options.stepsContainer||
document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=this._getResolvedAttachToOptions();Z(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=
b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a){void 0===a&&(a={});let b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=yc({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Ma()}`;c&&Object.keys(c).forEach(d=>{this.on(d,c[d],this)})}_setupElements(){void 0!==
this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&Hb(this);this.tooltip&&this.tooltip.destroy();let a=this._getResolvedAttachToOptions(),b=a.element;var c={modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!1}},ib(this)],strategy:"absolute"};if(void 0!==a&&null!==a&&a.element&&a.on)c.placement=a.on;else{c=Vb();var d={placement:"top",strategy:"fixed",modifiers:[ib(this)]};c=d=La({},d,{modifiers:Array.from(new Set([...d.modifiers,...c]))})}(d=this.tour&&
this.tour.options&&this.tour.options.defaultStepOptions)&&(c=kb(d,c));c=kb(this.options,c);void 0!==a&&null!==a&&a.element&&a.on||(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=zc(b,this.el,c);this.target=a.element}_show(){this.trigger("before-show");this._resolveAttachToOptions();this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);this.el.hidden=!1;this.options.scrollTo&&
setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),b.classList.remove("shepherd-target-click-disabled"),!1===a.options.canClickTarget&&
b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class Bc extends T{constructor(a){super();S(this,a,wc,vc,Q,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}
let oa=new Qa;class Cc extends Qa{constructor(a){void 0===a&&(a={});super(a);Ua(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=jb(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(b=>{(c=>{this.on(c,d=>{d=d||{};d.tour=this;oa.trigger(c,d)})})(b)});this._setTourID();return this}addStep(a,b){a instanceof Ra?a.tour=this:a=new Ra(this,a);void 0!==b?this.steps.splice(b,0,a):
this.steps.push(a);return a}addSteps(a){Array.isArray(a)&&a.forEach(b=>{this.addStep(b)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return oa.activeTour===
this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((c,d)=>{if(c.id===a)return c.isOpen()&&c.hide(),c.destroy(),this.steps.splice(d,1),!0});b&&b.id===a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a,b){void 0===a&&(a=0);void 0===b&&(b=!0);if(a=qa(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),Z(a.options.showOn)&&!a.options.showOn()?
this._skipStep(a,b):(this.trigger("show",{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(c=>c.destroy());uc(this);this.trigger(a,{index:b});oa.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==
a&&"complete"!==a||!this.modal||(a=document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});oa.activeTour=this}_setupModal(){this.modal=new Bc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);a===this.steps.length-1?this.complete():this.show(b?a+1:a-
1,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Ma()}`}}Object.assign(oa,{Tour:Cc,Step:Ra});return oa})

;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(($,Backbone,Drupal,settings,document,Shepherd)=>{const queryString=decodeURI(window.location.search);Drupal.behaviors.tour={attach(context){once('tour','body').forEach(()=>{const model=new Drupal.tour.models.StateModel();new Drupal.tour.views.ToggleTourView({el:$(context).find('#toolbar-tab-tour'),model});model.on('change:isActive',(tourModel,isActive)=>{$(document).trigger(isActive?'drupalTourStarted':'drupalTourStopped');});if(settings._tour_internal)model.set('tour',settings._tour_internal);if(/tour=?/i.test(queryString))model.set('isActive',true);});}};Drupal.tour=Drupal.tour||{models:{},views:{}};Drupal.tour.models.StateModel=Backbone.Model.extend({defaults:{tour:[],isActive:false,activeTour:[]}});Drupal.tour.views.ToggleTourView=Backbone.View.extend({events:{click:'onClick'},initialize(){this.listenTo(this.model,'change:tour change:isActive',this.render);this.listenTo(this.model,'change:isActive',this.toggleTour);},render(){this.$el.toggleClass('hidden',this._getTour().length===0);const isActive=this.model.get('isActive');this.$el.find('button').toggleClass('is-active',isActive).attr('aria-pressed',isActive);return this;},toggleTour(){if(this.model.get('isActive')){this._removeIrrelevantTourItems(this._getTour());const tourItems=this.model.get('tour');const that=this;if(tourItems.length){settings.tourShepherdConfig.defaultStepOptions.popperOptions.modifiers.push({name:'moveArrowJoyridePosition',enabled:true,phase:'write',fn({state}){const {arrow}=state.elements;const {placement}=state;if(arrow&&/^top|bottom/.test(placement)&&/-start|-end$/.test(placement)){const horizontalPosition=placement.split('-')[1];const offset=horizontalPosition==='start'?28:state.elements.popper.clientWidth-56;arrow.style.transform=`translate3d(${offset}px, 0px, 0px)`;}}});const shepherdTour=new Shepherd.Tour(settings.tourShepherdConfig);shepherdTour.on('cancel',()=>{that.model.set('isActive',false);});shepherdTour.on('complete',()=>{that.model.set('isActive',false);});tourItems.forEach((tourStepConfig,index)=>{const tourItemOptions={title:tourStepConfig.title?Drupal.checkPlain(tourStepConfig.title):null,text:()=>Drupal.theme('tourItemContent',tourStepConfig),attachTo:tourStepConfig.attachTo,buttons:[Drupal.tour.nextButton(shepherdTour,tourStepConfig)],classes:tourStepConfig.classes,index};tourItemOptions.when={show(){const nextButton=shepherdTour.currentStep.el.querySelector('footer button');nextButton.focus();if(Drupal.tour.hasOwnProperty('convertToJoyrideMarkup'))Drupal.tour.convertToJoyrideMarkup(shepherdTour);}};shepherdTour.addStep(tourItemOptions);});shepherdTour.start();this.model.set({isActive:true,activeTour:shepherdTour});}}else{this.model.get('activeTour').cancel();this.model.set({isActive:false,activeTour:[]});}},onClick(event){this.model.set('isActive',!this.model.get('isActive'));event.preventDefault();event.stopPropagation();},_getTour(){return this.model.get('tour');},_removeIrrelevantTourItems(tourItems){const tips=/tips=([^&]+)/.exec(queryString);const filteredTour=tourItems.filter((tourItem)=>{if(tips&&tourItem.hasOwnProperty('classes')&&tourItem.classes.indexOf(tips[1])===-1)return false;return !(tourItem.selector&&!document.querySelector(tourItem.selector));});if(tourItems.length!==filteredTour.length){filteredTour.forEach((filteredTourItem,filteredTourItemId)=>{filteredTour[filteredTourItemId].counter=Drupal.t('!tour_item of !total',{'!tour_item':filteredTourItemId+1,'!total':filteredTour.length});if(filteredTourItemId===filteredTour.length-1)filteredTour[filteredTourItemId].cancelText=Drupal.t('End tour');});this.model.set('tour',filteredTour);}}});Drupal.tour.nextButton=(shepherdTour,tourStepConfig)=>{return {classes:'button button--primary',text:tourStepConfig.cancelText?tourStepConfig.cancelText:Drupal.t('Next'),action:tourStepConfig.cancelText?shepherdTour.cancel:shepherdTour.next};};Drupal.theme.tourItemContent=(tourStepConfig)=>`${tourStepConfig.body}<div class="tour-progress">${tourStepConfig.counter}</div>`;})(jQuery,Backbone,Drupal,drupalSettings,document,window.Shepherd);;
((Drupal)=>{Drupal.tour.convertToJoyrideMarkup=(shepherdTour)=>{const changeTag=(element,tag)=>{if(element){const newTagElement=document.createElement(tag);[...element.attributes].forEach((attr)=>{newTagElement.setAttribute(attr.name,attr.value);});newTagElement.innerHTML=element.innerHTML;element.parentNode.replaceChild(newTagElement,element);}};const shepherdElement=shepherdTour.currentStep.el;const shepherdContent=shepherdElement.querySelector('.shepherd-content');const shepherdCancel=shepherdElement.querySelector('.shepherd-cancel-icon');const shepherdTitle=shepherdElement.querySelector('.shepherd-title');const shepherdText=shepherdElement.querySelector('.shepherd-text');const shepherdNext=shepherdElement.querySelector('footer .button');const tourProgress=shepherdElement.querySelector('.tour-progress');shepherdElement.classList.add('joyride-tip-guide');shepherdContent.classList.add('joyride-content-wrapper');shepherdNext.classList.add('joyride-next-tip');shepherdNext.setAttribute('href','#');shepherdNext.setAttribute('role','button');shepherdNext.removeAttribute('type');shepherdCancel.classList.add('joyride-close-tip');shepherdCancel.removeAttribute('type');shepherdCancel.setAttribute('href','#');shepherdCancel.setAttribute('role','button');shepherdElement.setAttribute('data-index',shepherdTour.currentStep.options.index);shepherdElement.querySelector('footer').remove();shepherdContent.insertBefore(shepherdTitle,shepherdContent.firstChild);shepherdContent.insertBefore(tourProgress,shepherdText.nextSibling);shepherdContent.appendChild(shepherdCancel);shepherdContent.querySelector('.shepherd-header').remove();shepherdContent.insertBefore(shepherdNext,tourProgress.nextSibling);shepherdCancel.innerHTML='<span aria-hidden="true">×</span>';shepherdTitle.classList.add('tour-tip-label');changeTag(shepherdTitle,'h2');shepherdText.outerHTML=shepherdText.innerHTML;changeTag(shepherdElement.querySelector('.joyride-close-tip'),'a');changeTag(shepherdElement.querySelector('.joyride-next-tip'),'a');const shepherdArrow=shepherdElement.querySelector('.shepherd-arrow');if(shepherdArrow){shepherdArrow.classList.add('joyride-nub');if(shepherdTour.currentStep.options.attachTo.on){const stepToTipPosition={bottom:'top',top:'bottom',left:'right',right:'left'};shepherdArrow.classList.add(stepToTipPosition[shepherdTour.currentStep.options.attachTo.on.split('-')[0]]);}changeTag(shepherdArrow,'span');}else{const nub=document.createElement('span');nub.classList.add('joyride-nub');nub.setAttribute('style','display: none;');shepherdElement.insertBefore(nub,shepherdElement.firstChild);}shepherdElement.querySelector('.joyride-next-tip').addEventListener('click',(e)=>{e.preventDefault();shepherdTour.next();});shepherdElement.querySelector('.joyride-close-tip').addEventListener('click',(e)=>{e.preventDefault();shepherdTour.cancel();});shepherdElement.querySelector('.joyride-next-tip').focus();};})(Drupal);;
(function($,Drupal,{tabbable,isTabbable}){function TabbingManager(){this.stack=[];}function TabbingContext(options){$.extend(this,{level:null,$tabbableElements:$(),$disabledElements:$(),released:false,active:false,trapFocus:false},options);}$.extend(TabbingManager.prototype,{constrain(elements,{trapFocus=false}={}){const il=this.stack.length;for(let i=0;i<il;i++)this.stack[i].deactivate();let tabbableElements=[];$(elements).each((index,rootElement)=>{tabbableElements=[...tabbableElements,...tabbable(rootElement)];if(isTabbable(rootElement))tabbableElements=[...tabbableElements,rootElement];});const tabbingContext=new TabbingContext({level:this.stack.length,$tabbableElements:$(tabbableElements),trapFocus});this.stack.push(tabbingContext);tabbingContext.activate();$(document).trigger('drupalTabbingConstrained',tabbingContext);return tabbingContext;},release(){let toActivate=this.stack.length-1;while(toActivate>=0&&this.stack[toActivate].released)toActivate--;this.stack.splice(toActivate+1);if(toActivate>=0)this.stack[toActivate].activate();},activate(tabbingContext){const $set=tabbingContext.$tabbableElements;const level=tabbingContext.level;const $disabledSet=$(tabbable(document.body)).not($set);tabbingContext.$disabledElements=$disabledSet;const il=$disabledSet.length;for(let i=0;i<il;i++)this.recordTabindex($disabledSet.eq(i),level);$disabledSet.prop('tabindex',-1).prop('autofocus',false);let $hasFocus=$set.filter('[autofocus]').eq(-1);if($hasFocus.length===0)$hasFocus=$set.eq(0);$hasFocus.trigger('focus');if($set.length&&tabbingContext.trapFocus){$set.last().on('keydown.focus-trap',(event)=>{if(event.key==='Tab'&&!event.shiftKey){event.preventDefault();$set.first().focus();}});$set.first().on('keydown.focus-trap',(event)=>{if(event.key==='Tab'&&event.shiftKey){event.preventDefault();$set.last().focus();}});}},deactivate(tabbingContext){const $set=tabbingContext.$disabledElements;const level=tabbingContext.level;const il=$set.length;tabbingContext.$tabbableElements.first().off('keydown.focus-trap');tabbingContext.$tabbableElements.last().off('keydown.focus-trap');for(let i=0;i<il;i++)this.restoreTabindex($set.eq(i),level);},recordTabindex($el,level){const tabInfo=$el.data('drupalOriginalTabIndices')||{};tabInfo[level]={tabindex:$el[0].getAttribute('tabindex'),autofocus:$el[0].hasAttribute('autofocus')};$el.data('drupalOriginalTabIndices',tabInfo);},restoreTabindex($el,level){const tabInfo=$el.data('drupalOriginalTabIndices');if(tabInfo&&tabInfo[level]){const data=tabInfo[level];if(data.tabindex)$el[0].setAttribute('tabindex',data.tabindex);else $el[0].removeAttribute('tabindex');if(data.autofocus)$el[0].setAttribute('autofocus','autofocus');if(level===0)$el.removeData('drupalOriginalTabIndices');else{let levelToDelete=level;while(tabInfo.hasOwnProperty(levelToDelete)){delete tabInfo[levelToDelete];levelToDelete++;}$el.data('drupalOriginalTabIndices',tabInfo);}}}});$.extend(TabbingContext.prototype,{release(){if(!this.released){this.deactivate();this.released=true;Drupal.tabbingManager.release(this);$(document).trigger('drupalTabbingContextReleased',this);}},activate(){if(!this.active&&!this.released){this.active=true;Drupal.tabbingManager.activate(this);$(document).trigger('drupalTabbingContextActivated',this);}},deactivate(){if(this.active){this.active=false;Drupal.tabbingManager.deactivate(this);$(document).trigger('drupalTabbingContextDeactivated',this);}}});if(Drupal.tabbingManager)return;Drupal.tabbingManager=new TabbingManager();})(jQuery,Drupal,window.tabbable);;
(function($,Drupal,Backbone){const strings={tabbingReleased:Drupal.t('Tabbing is no longer constrained by the Contextual module.'),tabbingConstrained:Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),pressEsc:Drupal.t('Press the esc key to exit.')};function initContextualToolbar(context){if(!Drupal.contextual||!Drupal.contextual.collection)return;const contextualToolbar=Drupal.contextualToolbar;contextualToolbar.model=new contextualToolbar.StateModel({isViewing:document.querySelector('body .contextual-region')===null||localStorage.getItem('Drupal.contextualToolbar.isViewing')!=='false'},{contextualCollection:Drupal.contextual.collection});const viewOptions={el:$('.toolbar .toolbar-bar .contextual-toolbar-tab'),model:contextualToolbar.model,strings};new contextualToolbar.VisualView(viewOptions);new contextualToolbar.AuralView(viewOptions);}Drupal.behaviors.contextualToolbar={attach(context){if(once('contextualToolbar-init','body').length)initContextualToolbar(context);}};Drupal.contextualToolbar={model:null};})(jQuery,Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextualToolbar.StateModel=Backbone.Model.extend({defaults:{isViewing:true,isVisible:false,contextualCount:0,tabbingContext:null},initialize(attrs,options){this.listenTo(options.contextualCollection,'reset remove add',this.countContextualLinks);this.listenTo(options.contextualCollection,'add',this.lockNewContextualLinks);this.listenTo(this,'change:contextualCount',this.updateVisibility);this.listenTo(this,'change:isViewing',(model,isViewing)=>{options.contextualCollection.each((contextualModel)=>{contextualModel.set('isLocked',!isViewing);});});},countContextualLinks(contextualModel,contextualCollection){this.set('contextualCount',contextualCollection.length);},lockNewContextualLinks(contextualModel,contextualCollection){if(!this.get('isViewing'))contextualModel.set('isLocked',true);},updateVisibility(){this.set('isVisible',this.get('contextualCount')>0);}});})(Drupal,Backbone);;
(function($,Drupal,Backbone,_){Drupal.contextualToolbar.AuralView=Backbone.View.extend({announcedOnce:false,initialize(options){this.options=options;this.listenTo(this.model,'change',this.render);this.listenTo(this.model,'change:isViewing',this.manageTabbing);$(document).on('keyup',_.bind(this.onKeypress,this));this.manageTabbing();},render(){this.$el.find('button').attr('aria-pressed',!this.model.get('isViewing'));return this;},manageTabbing(){let tabbingContext=this.model.get('tabbingContext');if(tabbingContext){if(tabbingContext.active)Drupal.announce(this.options.strings.tabbingReleased);tabbingContext.release();}if(!this.model.get('isViewing')){tabbingContext=Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));this.model.set('tabbingContext',tabbingContext);this.announceTabbingConstraint();this.announcedOnce=true;}},announceTabbingConstraint(){const strings=this.options.strings;Drupal.announce(Drupal.formatString(strings.tabbingConstrained,{'@contextualsCount':Drupal.formatPlural(Drupal.contextual.collection.length,'@count contextual link','@count contextual links')}));Drupal.announce(strings.pressEsc);},onKeypress(event){if(!this.announcedOnce&&event.keyCode===9&&!this.model.get('isViewing')){this.announceTabbingConstraint();this.announcedOnce=true;}if(event.keyCode===27)this.model.set('isViewing',true);}});})(jQuery,Drupal,Backbone,_);;
(function(Drupal,Backbone){Drupal.contextualToolbar.VisualView=Backbone.View.extend({events(){const touchEndToClick=function(event){event.preventDefault();event.target.click();};return {click(){this.model.set('isViewing',!this.model.get('isViewing'));},touchend:touchEndToClick};},initialize(){this.listenTo(this.model,'change',this.render);this.listenTo(this.model,'change:isViewing',this.persist);},render(){this.$el.toggleClass('hidden',!this.model.get('isVisible'));this.$el.find('button').toggleClass('is-active',!this.model.get('isViewing'));return this;},persist(model,isViewing){if(!isViewing)localStorage.setItem('Drupal.contextualToolbar.isViewing','false');else localStorage.removeItem('Drupal.contextualToolbar.isViewing');}});})(Drupal,Backbone);;
(function($,Drupal,drupalSettings){const pathInfo=drupalSettings.path;const escapeAdminPath=sessionStorage.getItem('escapeAdminPath');const windowLocation=window.location;if(!pathInfo.currentPathIsAdmin&&!/destination=/.test(windowLocation.search))sessionStorage.setItem('escapeAdminPath',windowLocation);Drupal.behaviors.escapeAdmin={attach(){const toolbarEscape=once('escapeAdmin','[data-toolbar-escape-admin]');if(toolbarEscape.length&&pathInfo.currentPathIsAdmin&&escapeAdminPath!==null)$(toolbarEscape).attr('href',escapeAdminPath);}};})(jQuery,Drupal,drupalSettings);;
((Drupal,drupalSettings)=>{const replacementsSelector=`script[data-big-pipe-replacement-for-placeholder-with-id]`;const ajaxObject=Drupal.ajax({url:'',base:false,element:false,progress:false});function mapTextContentToAjaxResponse(content){if(content==='')return false;try{return JSON.parse(content);}catch(e){return false;}}function processReplacement(replacement){const id=replacement.dataset.bigPipeReplacementForPlaceholderWithId;const content=replacement.textContent.trim();if(typeof drupalSettings.bigPipePlaceholderIds[id]==='undefined')return;const response=mapTextContentToAjaxResponse(content);if(response===false)return;delete drupalSettings.bigPipePlaceholderIds[id];ajaxObject.success(response,'success');}function checkMutation(node){return Boolean(node.nodeType===Node.ELEMENT_NODE&&node.nodeName==='SCRIPT'&&node.dataset&&node.dataset.bigPipeReplacementForPlaceholderWithId&&typeof drupalSettings.bigPipePlaceholderIds[node.dataset.bigPipeReplacementForPlaceholderWithId]!=='undefined');}function checkMutationAndProcess(node){if(checkMutation(node))processReplacement(node);else{if(node.parentNode!==null&&checkMutation(node.parentNode))processReplacement(node.parentNode);}}function processMutations(mutations){mutations.forEach(({addedNodes,type,target})=>{addedNodes.forEach(checkMutationAndProcess);if(type==='characterData'&&checkMutation(target.parentNode)&&drupalSettings.bigPipePlaceholderIds[target.parentNode.dataset.bigPipeReplacementForPlaceholderWithId]===true)processReplacement(target.parentNode);});}const observer=new MutationObserver(processMutations);Drupal.attachBehaviors(document);document.querySelectorAll(replacementsSelector).forEach(processReplacement);observer.observe(document.body,{childList:true,subtree:true,characterData:true});window.addEventListener('DOMContentLoaded',()=>{const mutations=observer.takeRecords();observer.disconnect();if(mutations.length)processMutations(mutations);Drupal.ajax.instances[ajaxObject.instanceIndex]=null;});})(Drupal,drupalSettings);;
