(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});Array.prototype.reduce===a&&(Array.prototype.reduce=function(g){if(void 0===this||null===this)throw new TypeError;var n=Object(this),d=n.length>>>0,l=0,q;if("function"!=typeof g)throw new TypeError;if(0==d&&1==arguments.length)throw new TypeError;if(2<=arguments.length)q=arguments[1];else{do{if(l in n){q=n[l++];break}if(++l>=d)throw new TypeError;}while(1)}for(;l<d;)l in n&&(q=g.call(a,
q,n[l],l,n)),l++;return q})})();
var Zepto=function(){function a(b){return null==b?String(b):I[U.call(b)]||"object"}function g(b){return"function"==a(b)}function n(b){return null!=b&&b==b.window}function d(b){return null!=b&&b.nodeType==b.DOCUMENT_NODE}function l(b){return"object"==a(b)}function q(b){return l(b)&&!n(b)&&b.__proto__==Object.prototype}function t(b){return b instanceof Array}function r(b){return"number"==typeof b.length}function m(b){return s.call(b,function(b){return null!=b})}function p(b){return b.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,
"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(b){return b in J?J[b]:J[b]=RegExp("(^|\\s)"+b+"(\\s|$)")}function w(b){return"children"in b?F.call(b.children):c.map(b.childNodes,function(b){if(1==b.nodeType)return b})}function B(b,y,a){for(k in y)a&&(q(y[k])||t(y[k]))?(q(y[k])&&!q(b[k])&&(b[k]={}),t(y[k])&&!t(b[k])&&(b[k]=[]),B(b[k],y[k],a)):y[k]!==h&&(b[k]=y[k])}function D(b,y){return y===h?c(b):c(b).filter(y)}function v(b,y,a,c){return g(y)?y.call(b,a,c):
y}function z(b,y){var a=b.className,c=a&&a.baseVal!==h;if(y===h)return c?a.baseVal:a;c?a.baseVal=y:b.className=y}function E(b){var y;try{return b?"true"==b||("false"==b?!1:"null"==b?null:!isNaN(y=Number(b))?y:/^[\[\{]/.test(b)?c.parseJSON(b):b):b}catch(a){return b}}function e(b,a){a(b);for(var C in b.childNodes)e(b.childNodes[C],a)}var h,k,c,G,A=[],F=A.slice,s=A.filter,f=window.document,K={},J={},L=f.defaultView.getComputedStyle,O={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,
"z-index":1,zoom:1},P=/^\s*<(\w+|!)[^>]*>/,V=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Q=/^(?:body|html)$/i,W="val css html text data width height offset".split(" "),M=f.createElement("table"),R=f.createElement("tr"),S={tr:f.createElement("tbody"),tbody:M,thead:M,tfoot:M,td:R,th:R,"*":f.createElement("div")},X=/complete|loaded|interactive/,Y=/^\.([\w-]+)$/,Z=/^#([\w-]*)$/,$=/^[\w-]+$/,I={},U=I.toString,x={},N,H,T=f.createElement("div");x.matches=function(b,a){if(!b||
1!==b.nodeType)return!1;var C=b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector||b.matchesSelector;if(C)return C.call(b,a);var c;c=b.parentNode;(C=!c)&&(c=T).appendChild(b);c=~x.qsa(c,a).indexOf(b);C&&T.removeChild(b);return c};N=function(b){return b.replace(/-+(.)?/g,function(b,a){return a?a.toUpperCase():""})};H=function(b){return s.call(b,function(a,c){return b.indexOf(a)==c})};x.fragment=function(b,a,C){b.replace&&(b=b.replace(V,"<$1></$2>"));a===h&&(a=P.test(b)&&RegExp.$1);a in
S||(a="*");var f,e=S[a];e.innerHTML=""+b;b=c.each(F.call(e.childNodes),function(){e.removeChild(this)});q(C)&&(f=c(b),c.each(C,function(b,a){if(-1<W.indexOf(b))f[b](a);else f.attr(b,a)}));return b};x.Z=function(b,a){b=b||[];b.__proto__=c.fn;b.selector=a||"";return b};x.isZ=function(b){return b instanceof x.Z};x.init=function(b,a){if(b){if(g(b))return c(f).ready(b);if(x.isZ(b))return b;var C;if(t(b))C=m(b);else if(l(b))C=[q(b)?c.extend({},b):b],b=null;else if(P.test(b))C=x.fragment(b.trim(),RegExp.$1,
a),b=null;else{if(a!==h)return c(a).find(b);C=x.qsa(f,b)}return x.Z(C,b)}return x.Z()};c=function(b,a){return x.init(b,a)};c.extend=function(b){var a,c=F.call(arguments,1);"boolean"==typeof b&&(a=b,b=c.shift());c.forEach(function(c){B(b,c,a)});return b};x.qsa=function(b,a){var c;return d(b)&&Z.test(a)?(c=b.getElementById(RegExp.$1))?[c]:[]:1!==b.nodeType&&9!==b.nodeType?[]:F.call(Y.test(a)?b.getElementsByClassName(RegExp.$1):$.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a))};c.contains=function(b,
a){return b!==a&&b.contains(a)};c.type=a;c.isFunction=g;c.isWindow=n;c.isArray=t;c.isPlainObject=q;c.isEmptyObject=function(b){for(var a in b)return!1;return!0};c.inArray=function(b,a,c){return A.indexOf.call(a,b,c)};c.camelCase=N;c.trim=function(b){return b.trim()};c.uuid=0;c.support={};c.expr={};c.map=function(b,a){var f,e=[],s;if(r(b))for(s=0;s<b.length;s++)f=a(b[s],s),null!=f&&e.push(f);else for(s in b)f=a(b[s],s),null!=f&&e.push(f);return 0<e.length?c.fn.concat.apply([],e):e};c.each=function(b,
a){var c;if(r(b))for(c=0;c<b.length&&!1!==a.call(b[c],c,b[c]);c++);else for(c in b)if(!1===a.call(b[c],c,b[c]))break;return b};c.grep=function(b,a){return s.call(b,a)};window.JSON&&(c.parseJSON=JSON.parse);c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b,a){I["[object "+a+"]"]=a.toLowerCase()});c.fn={forEach:A.forEach,reduce:A.reduce,push:A.push,sort:A.sort,indexOf:A.indexOf,concat:A.concat,map:function(b){return c(c.map(this,function(a,c){return b.call(a,
c,a)}))},slice:function(){return c(F.apply(this,arguments))},ready:function(b){X.test(f.readyState)?b(c):f.addEventListener("DOMContentLoaded",function(){b(c)},!1);return this},get:function(b){return b===h?F.call(this):this[0<=b?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(b){A.every.call(this,function(a,c){return!1!==b.call(a,c,a)});
return this},filter:function(b){return g(b)?this.not(this.not(b)):c(s.call(this,function(a){return x.matches(a,b)}))},add:function(b,a){return c(H(this.concat(c(b,a))))},is:function(b){return 0<this.length&&x.matches(this[0],b)},not:function(b){var a=[];if(g(b)&&b.call!==h)this.each(function(c){b.call(this,c)||a.push(this)});else{var f="string"==typeof b?this.filter(b):r(b)&&g(b.item)?F.call(b):c(b);this.forEach(function(b){0>f.indexOf(b)&&a.push(b)})}return c(a)},has:function(b){return this.filter(function(){return l(b)?
c.contains(this,b):c(this).find(b).size()})},eq:function(b){return-1===b?this.slice(b):this.slice(b,+b+1)},first:function(){var b=this[0];return b&&!l(b)?b:c(b)},last:function(){var b=this[this.length-1];return b&&!l(b)?b:c(b)},find:function(b){var a=this;return"object"==typeof b?c(b).filter(function(){var b=this;return A.some.call(a,function(a){return c.contains(a,b)})}):1==this.length?c(x.qsa(this[0],b)):this.map(function(){return x.qsa(this,b)})},closest:function(b,a){var f=this[0],e=!1;for("object"==
typeof b&&(e=c(b));f&&!(e?0<=e.indexOf(f):x.matches(f,b));)f=f!==a&&!d(f)&&f.parentNode;return c(f)},parents:function(b){for(var a=[],f=this;0<f.length;)f=c.map(f,function(b){if((b=b.parentNode)&&!d(b)&&0>a.indexOf(b))return a.push(b),b});return D(a,b)},parent:function(b){return D(H(this.pluck("parentNode")),b)},children:function(b){return D(this.map(function(){return w(this)}),b)},contents:function(){return this.map(function(){return F.call(this.childNodes)})},siblings:function(b){return D(this.map(function(b,
a){return s.call(w(a.parentNode),function(b){return b!==a})}),b)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(b){return c.map(this,function(a){return a[b]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null);if("none"==L(this,"").getPropertyValue("display")){var b=this.style,a=this.nodeName,c,e;K[a]||(c=f.createElement(a),f.body.appendChild(c),e=L(c,"").getPropertyValue("display"),c.parentNode.removeChild(c),"none"==
e&&(e="block"),K[a]=e);b.display=K[a]}})},replaceWith:function(b){return this.before(b).remove()},wrap:function(b){var a=g(b);if(this[0]&&!a)var f=c(b).get(0),e=f.parentNode||1<this.length;return this.each(function(s){c(this).wrapAll(a?b.call(this,s):e?f.cloneNode(!0):f)})},wrapAll:function(b){if(this[0]){c(this[0]).before(b=c(b));for(var a;(a=b.children()).length;)b=a.first();c(b).append(this)}return this},wrapInner:function(b){var a=g(b);return this.each(function(f){var e=c(this),s=e.contents();
f=a?b.call(this,f):b;s.length?s.wrapAll(f):e.append(f)})},unwrap:function(){this.parent().each(function(){c(this).replaceWith(c(this).children())});return this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var a=c(this);(b===h?"none"==a.css("display"):b)?a.show():a.hide()})},prev:function(b){return c(this.pluck("previousElementSibling")).filter(b||"*")},next:function(b){return c(this.pluck("nextElementSibling")).filter(b||
"*")},html:function(b){return b===h?0<this.length?this[0].innerHTML:null:this.each(function(a){var f=this.innerHTML;c(this).empty().append(v(this,b,a,f))})},text:function(b){return b===h?0<this.length?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(b,a){var c;return"string"==typeof b&&a===h?0==this.length||1!==this[0].nodeType?h:"value"==b&&"INPUT"==this[0].nodeName?this.val():!(c=this[0].getAttribute(b))&&b in this[0]?this[0][b]:c:this.each(function(c){if(1===this.nodeType)if(l(b))for(k in b){c=
k;var f=b[k];null==f?this.removeAttribute(c):this.setAttribute(c,f)}else c=v(this,a,c,this.getAttribute(b)),null==c?this.removeAttribute(b):this.setAttribute(b,c)})},removeAttr:function(b){return this.each(function(){1===this.nodeType&&this.removeAttribute(b)})},prop:function(b,a){return a===h?this[0]&&this[0][b]:this.each(function(c){this[b]=v(this,a,c,this[b])})},data:function(b,a){var c=this.attr("data-"+p(b),a);return null!==c?E(c):h},val:function(b){return b===h?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(b){return this.selected}).pluck("value"):
this[0].value):this.each(function(a){this.value=v(this,b,a,this.value)})},offset:function(b){if(b)return this.each(function(a){var f=c(this);a=v(this,b,a,f.offset());var e=f.offsetParent().offset();a={top:a.top-e.top,left:a.left-e.left};"static"==f.css("position")&&(a.position="relative");f.css(a)});if(0==this.length)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:Math.round(a.width),height:Math.round(a.height)}},css:function(b,
c){if(2>arguments.length&&"string"==typeof b)return this[0]&&(this[0].style[N(b)]||L(this[0],"").getPropertyValue(b));var f="";if("string"==a(b))!c&&0!==c?this.each(function(){this.style.removeProperty(p(b))}):f=p(b)+":"+("number"==typeof c&&!O[p(b)]?c+"px":c);else for(k in b)!b[k]&&0!==b[k]?this.each(function(){this.style.removeProperty(p(k))}):f+=p(k)+":"+("number"==typeof b[k]&&!O[p(k)]?b[k]+"px":b[k])+";";return this.each(function(){this.style.cssText+=";"+f})},index:function(b){return b?this.indexOf(c(b)[0]):
this.parent().children().indexOf(this[0])},hasClass:function(b){return A.some.call(this,function(b){return this.test(z(b))},u(b))},addClass:function(b){return this.each(function(a){G=[];var f=z(this);v(this,b,a,f).split(/\s+/g).forEach(function(b){c(this).hasClass(b)||G.push(b)},this);G.length&&z(this,f+(f?" ":"")+G.join(" "))})},removeClass:function(b){return this.each(function(a){if(b===h)return z(this,"");G=z(this);v(this,b,a,G).split(/\s+/g).forEach(function(b){G=G.replace(u(b)," ")});z(this,
G.trim())})},toggleClass:function(b,a){return this.each(function(f){var e=c(this);v(this,b,f,z(this)).split(/\s+/g).forEach(function(b){(a===h?!e.hasClass(b):a)?e.addClass(b):e.removeClass(b)})})},scrollTop:function(){if(this.length)return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(this.length){var b=this[0],a=this.offsetParent(),f=this.offset(),e=Q.test(a[0].nodeName)?{top:0,left:0}:a.offset();f.top-=parseFloat(c(b).css("margin-top"))||0;f.left-=parseFloat(c(b).css("margin-left"))||
0;e.top+=parseFloat(c(a[0]).css("border-top-width"))||0;e.left+=parseFloat(c(a[0]).css("border-left-width"))||0;return{top:f.top-e.top,left:f.left-e.left}}},offsetParent:function(){return this.map(function(){for(var b=this.offsetParent||f.body;b&&!Q.test(b.nodeName)&&"static"==c(b).css("position");)b=b.offsetParent;return b})}};c.fn.detach=c.fn.remove;["width","height"].forEach(function(b){c.fn[b]=function(a){var f,e=this[0],s=b.replace(/./,function(b){return b[0].toUpperCase()});return a===h?n(e)?
e["inner"+s]:d(e)?e.documentElement["offset"+s]:(f=this.offset())&&f[b]:this.each(function(f){e=c(this);e.css(b,v(this,a,f,e[b]()))})}});["after","prepend","before","append"].forEach(function(b,f){var s=f%2;c.fn[b]=function(){var b,h=c.map(arguments,function(c){b=a(c);return"object"==b||"array"==b||null==c?c:x.fragment(c)}),d,k=1<this.length;return 1>h.length?this:this.each(function(b,a){d=s?a:a.parentNode;a=0==f?a.nextSibling:1==f?a.firstChild:2==f?a:null;h.forEach(function(b){if(k)b=b.cloneNode(!0);
else if(!d)return c(b).remove();e(d.insertBefore(b,a),function(b){null!=b.nodeName&&("SCRIPT"===b.nodeName.toUpperCase()&&(!b.type||"text/javascript"===b.type)&&!b.src)&&window.eval.call(window,b.innerHTML)})})})};c.fn[s?b+"To":"insert"+(f?"Before":"After")]=function(a){c(a)[b](this);return this}});x.Z.prototype=c.fn;x.uniq=H;x.deserializeValue=E;c.zepto=x;return c}();window.Zepto=Zepto;"$"in window||(window.$=Zepto);
(function(a){function g(a){var d=this.os={},g=this.browser={},q=a.match(/WebKit\/([\d.]+)/),t=a.match(/(Android)\s+([\d.]+)/),r=a.match(/(iPad).*OS\s([\d_]+)/),m=!r&&a.match(/(iPhone\sOS)\s([\d_]+)/),p=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=p&&a.match(/TouchPad/),w=a.match(/Kindle\/([\d.]+)/),B=a.match(/Silk\/([\d._]+)/),D=a.match(/(BlackBerry).*Version\/([\d.]+)/),v=a.match(/(BB10).*Version\/([\d.]+)/),z=a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),E=a.match(/PlayBook/),e=a.match(/Chrome\/([\d.]+)/)||
a.match(/CriOS\/([\d.]+)/),h=a.match(/Firefox\/([\d.]+)/);if(g.webkit=!!q)g.version=q[1];t&&(d.android=!0,d.version=t[2]);m&&(d.ios=d.iphone=!0,d.version=m[2].replace(/_/g,"."));r&&(d.ios=d.ipad=!0,d.version=r[2].replace(/_/g,"."));p&&(d.webos=!0,d.version=p[2]);u&&(d.touchpad=!0);D&&(d.blackberry=!0,d.version=D[2]);v&&(d.bb10=!0,d.version=v[2]);z&&(d.rimtabletos=!0,d.version=z[2]);E&&(g.playbook=!0);w&&(d.kindle=!0,d.version=w[1]);B&&(g.silk=!0,g.version=B[1]);!B&&(d.android&&a.match(/Kindle Fire/))&&
(g.silk=!0);e&&(g.chrome=!0,g.version=e[1]);h&&(g.firefox=!0,g.version=h[1]);d.tablet=!(!r&&!E&&!(t&&!a.match(/Mobile/)||h&&a.match(/Tablet/)));d.phone=!(d.tablet||!t&&!m&&!p&&!D&&!v&&!(e&&a.match(/Android/)||e&&a.match(/CriOS\/([\d.]+)/)||h&&a.match(/Mobile/)))}g.call(a,navigator.userAgent);a.__detect=g})(Zepto);
(function(a){function g(a){return a._zid||(a._zid=u++)}function n(a,h,k,c){h=d(h);if(h.ns)var m=RegExp("(?:^| )"+h.ns.replace(" "," .* ?")+"(?: |$)");return(p[g(a)]||[]).filter(function(a){return a&&(!h.e||a.e==h.e)&&(!h.ns||m.test(a.ns))&&(!k||g(a.fn)===g(k))&&(!c||a.sel==c)})}function d(a){a=(""+a).split(".");return{e:a[0],ns:a.slice(1).sort().join(" ")}}function l(e,h,d){"string"!=a.type(e)?a.each(e,d):e.split(/\s/).forEach(function(a){d(a,h)})}function q(e,h,k,c,m,u){var r=g(e),s=p[r]||(p[r]=
[]);l(h,k,function(f,h){var k=d(f);k.fn=h;k.sel=c;k.e in B&&(h=function(c){var f=c.relatedTarget;if(!f||f!==this&&!a.contains(this,f))return k.fn.apply(this,arguments)});k.del=m&&m(h,f);var g=k.del||h;k.proxy=function(a){var c=g.apply(e,[a].concat(a.data));!1===c&&(a.preventDefault(),a.stopPropagation());return c};k.i=s.length;s.push(k);e.addEventListener(B[k.e]||k.e,k.proxy,k.del&&("focus"==k.e||"blur"==k.e)||!!u)})}function t(a,h,k,c,d){var m=g(a);l(h||"",k,function(h,s){n(a,h,s,c).forEach(function(c){delete p[m][c.i];
a.removeEventListener(B[c.e]||c.e,c.proxy,c.del&&("focus"==c.e||"blur"==c.e)||!!d)})})}function r(e){var h,k={originalEvent:e};for(h in e)!z.test(h)&&void 0!==e[h]&&(k[h]=e[h]);a.each(E,function(a,h){k[a]=function(){this[h]=D;return e[a].apply(e,arguments)};k[h]=v});return k}function m(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var h=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0;h.call(this)}}}var p={},u=1,w={},B={mouseenter:"mouseover",mouseleave:"mouseout"};w.click=
w.mousedown=w.mouseup=w.mousemove="MouseEvents";a.event={add:q,remove:t};a.proxy=function(e,h){if(a.isFunction(e)){var k=function(){return e.apply(h,arguments)};k._zid=g(e);return k}if("string"==typeof h)return a.proxy(e[h],e);throw new TypeError("expected function");};a.fn.bind=function(a,h){return this.each(function(){q(this,a,h)})};a.fn.unbind=function(a,h){return this.each(function(){t(this,a,h)})};a.fn.one=function(a,h){return this.each(function(k,c){q(this,a,h,null,function(a,e){return function(){var h=
a.apply(c,arguments);t(c,e,a);return h}})})};var D=function(){return!0},v=function(){return!1},z=/^([A-Z]|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(e,h,k){return this.each(function(c,d){q(d,h,k,e,function(c){return function(h){var s,f=a(h.target).closest(e,d).get(0);if(f)return s=a.extend(r(h),{currentTarget:f,liveFired:d}),c.apply(f,[s].concat([].slice.call(arguments,
1)))}})})};a.fn.undelegate=function(a,h,d){return this.each(function(){t(this,h,d,a)})};a.fn.live=function(e,h){a(document.body).delegate(this.selector,e,h);return this};a.fn.die=function(e,h){a(document.body).undelegate(this.selector,e,h);return this};a.fn.on=function(e,h,d){return!h||a.isFunction(h)?this.bind(e,h||d):this.delegate(h,e,d)};a.fn.off=function(e,h,d){return!h||a.isFunction(h)?this.unbind(e,h||d):this.undelegate(h,e,d)};a.fn.trigger=function(e,h){if("string"==typeof e||a.isPlainObject(e))e=
a.Event(e);m(e);e.data=h;return this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})};a.fn.triggerHandler=function(e,h){var d,c;this.each(function(g,m){d=r("string"==typeof e?a.Event(e):e);d.data=h;d.target=m;a.each(n(m,e.type||e),function(a,e){c=e.proxy(d);if(d.isImmediatePropagationStopped())return!1})});return c};"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){a.fn[e]=
function(a){return a?this.bind(e,a):this.trigger(e)}});["focus","blur"].forEach(function(e){a.fn[e]=function(a){a?this.bind(e,a):this.each(function(){try{this[e]()}catch(a){}});return this}});a.Event=function(a,h){"string"!=typeof a&&(h=a,a=h.type);var d=document.createEvent(w[a]||"Events"),c=!0;if(h)for(var g in h)"bubbles"==g?c=!!h[g]:d[g]=h[g];d.initEvent(a,c,!0,null,null,null,null,null,null,null,null,null,null,null,null);d.isDefaultPrevented=function(){return this.defaultPrevented};return d}})(Zepto);
(function(a){function g(c,f,e,d){if(c.global)return c=f||v,e=a.Event(e),a(c).trigger(e,d),!e.defaultPrevented}function n(c){c.global&&0===a.active++&&g(c,null,"ajaxStart")}function d(a,c){var e=c.context;if(!1===c.beforeSend.call(e,a,c)||!1===g(c,e,"ajaxBeforeSend",[a,c]))return!1;g(c,e,"ajaxSend",[a,c])}function l(a,c,e){var d=e.context;e.success.call(d,a,"success",c);g(e,d,"ajaxSuccess",[c,e,a]);t("success",c,e)}function q(a,c,e,d){var h=d.context;d.error.call(h,e,c,a);g(d,h,"ajaxError",[e,d,a]);
t(c,e,d)}function t(c,f,e){var d=e.context;e.complete.call(d,f,c);g(e,d,"ajaxComplete",[f,e]);e.global&&!--a.active&&g(e,null,"ajaxStop")}function r(){}function m(a){a&&(a=a.split(";",2)[0]);return a&&(a==G?"html":a==c?"json":h.test(a)?"script":k.test(a)&&"xml")||"text"}function p(a,c){return(a+"&"+c).replace(/[&?]{1,2}/,"?")}function u(c){c.processData&&(c.data&&"string"!=a.type(c.data))&&(c.data=a.param(c.data,c.traditional));if(c.data&&(!c.type||"GET"==c.type.toUpperCase()))c.url=p(c.url,c.data)}
function w(c,f,e,d){var h=!a.isFunction(f);return{url:c,data:h?f:void 0,success:!h?f:a.isFunction(e)?e:void 0,dataType:h?d||e:e}}function B(c,f,e,d){var h,g=a.isArray(f);a.each(f,function(f,m){h=a.type(m);d&&(f=e?d:d+"["+(g?"":f)+"]");!d&&g?c.add(m.name,m.value):"array"==h||!e&&"object"==h?B(c,m,e,f):c.add(f,m)})}var D=0,v=window.document,z,E,e=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,h=/^(?:text|application)\/javascript/i,k=/^(?:text|application)\/xml/i,c="application/json",G="text/html",
A=/^\s*$/;a.active=0;a.ajaxJSONP=function(c){if(!("type"in c))return a.ajax(c);var f="jsonp"+ ++D,e=v.createElement("script"),h=function(){clearTimeout(p);a(e).remove();delete window[f]},g=function(a){h();if(!a||"timeout"==a)window[f]=r;q(null,a||"abort",m,c)},m={abort:g},p;if(!1===d(m,c))return g("abort"),!1;window[f]=function(a){h();l(a,m,c)};e.onerror=function(){g("error")};e.src=c.url.replace(/=\?/,"="+f);a("head").append(e);0<c.timeout&&(p=setTimeout(function(){g("timeout")},c.timeout));return m};
a.ajaxSettings={type:"GET",beforeSend:r,success:r,error:r,complete:r,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:c,xml:"application/xml, text/xml",html:G,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0};a.ajax=function(c){var f=a.extend({},c||{});for(z in a.ajaxSettings)void 0===f[z]&&(f[z]=a.ajaxSettings[z]);n(f);f.crossDomain||(f.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(f.url)&&RegExp.$2!=
window.location.host);f.url||(f.url=window.location.toString());u(f);!1===f.cache&&(f.url=p(f.url,"_="+Date.now()));var e=f.dataType;c=/=\?/.test(f.url);if("jsonp"==e||c)return c||(f.url=p(f.url,"callback=?")),a.ajaxJSONP(f);c=f.accepts[e];var h={},g=/^([\w-]+:)\/\//.test(f.url)?RegExp.$1:window.location.protocol,k=f.xhr(),w;f.crossDomain||(h["X-Requested-With"]="XMLHttpRequest");c&&(h.Accept=c,-1<c.indexOf(",")&&(c=c.split(",",2)[0]),k.overrideMimeType&&k.overrideMimeType(c));if(f.contentType||!1!==
f.contentType&&f.data&&"GET"!=f.type.toUpperCase())h["Content-Type"]=f.contentType||"application/x-www-form-urlencoded";f.headers=a.extend(h,f.headers||{});k.onreadystatechange=function(){if(4==k.readyState){k.onreadystatechange=r;clearTimeout(w);var c,d=!1;if(200<=k.status&&300>k.status||304==k.status||0==k.status&&"file:"==g){e=e||m(k.getResponseHeader("content-type"));c=k.responseText;try{"script"==e?(0,eval)(c):"xml"==e?c=k.responseXML:"json"==e&&(c=A.test(c)?null:a.parseJSON(c))}catch(h){d=h}d?
q(d,"parsererror",k,f):l(c,k,f)}else q(null,k.status?"error":"abort",k,f)}};k.open(f.type,f.url,"async"in f?f.async:!0);for(E in f.headers)k.setRequestHeader(E,f.headers[E]);if(!1===d(k,f))return k.abort(),!1;0<f.timeout&&(w=setTimeout(function(){k.onreadystatechange=r;k.abort();q(null,"timeout",k,f)},f.timeout));k.send(f.data?f.data:null);return k};a.get=function(c,f,e,d){return a.ajax(w.apply(null,arguments))};a.post=function(c,f,e,d){var h=w.apply(null,arguments);h.type="POST";return a.ajax(h)};
a.getJSON=function(c,f,e){var d=w.apply(null,arguments);d.dataType="json";return a.ajax(d)};a.fn.load=function(c,f,d){if(!this.length)return this;var h=this,k=c.split(/\s/),g;c=w(c,f,d);var m=c.success;1<k.length&&(c.url=k[0],g=k[1]);c.success=function(c){h.html(g?a("<div>").html(c.replace(e,"")).find(g):c);m&&m.apply(h,arguments)};a.ajax(c);return this};var F=encodeURIComponent;a.param=function(a,c){var e=[];e.add=function(a,c){this.push(F(a)+"="+F(c))};B(e,a,c);return e.join("&").replace(/%20/g,
"+")}})(Zepto);
(function(a){a.fn.serializeArray=function(){var g=[],n;a(Array.prototype.slice.call(this.get(0).elements)).each(function(){n=a(this);var d=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&(!this.disabled&&"submit"!=d&&"reset"!=d&&"button"!=d&&("radio"!=d&&"checkbox"!=d||this.checked))&&g.push({name:n.attr("name"),value:n.val()})});return g};a.fn.serialize=function(){var a=[];this.serializeArray().forEach(function(n){a.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))});return a.join("&")};
a.fn.submit=function(g){g?this.bind("submit",g):this.length&&(g=a.Event("submit"),this.eq(0).trigger(g),g.defaultPrevented||this.get(0).submit());return this}})(Zepto);
(function(a,g){function n(a){return a.toLowerCase()}var d="",l,q=window.document.createElement("div"),t=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,r,m,p,u,w,B,D,v={};a.each({Webkit:"webkit",Moz:"",O:"o",ms:"MS"},function(a,m){if(q.style[a+"TransitionProperty"]!==g)return d="-"+n(a)+"-",l=m,!1});r=d+"transform";v[m=d+"transition-property"]=v[p=d+"transition-duration"]=v[u=d+"transition-timing-function"]=v[w=d+"animation-name"]=v[B=d+"animation-duration"]=v[D=d+"animation-timing-function"]=
"";a.fx={off:l===g&&q.style.transitionProperty===g,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:l?l+"TransitionEnd":n("TransitionEnd"),animationEnd:l?l+"AnimationEnd":n("AnimationEnd")};a.fn.animate=function(d,g,e,h){a.isPlainObject(g)&&(e=g.easing,h=g.complete,g=g.duration);g&&(g=("number"==typeof g?g:a.fx.speeds[g]||a.fx.speeds._default)/1E3);return this.anim(d,g,e,h)};a.fn.anim=function(d,l,e,h){var k,c={},q,A="",F=this,s,f=a.fx.transitionEnd;l===g&&(l=0.4);a.fx.off&&(l=0);
if("string"==typeof d)c[w]=d,c[B]=l+"s",c[D]=e||"linear",f=a.fx.animationEnd;else{q=[];for(k in d)t.test(k)?A+=k+"("+d[k]+") ":(c[k]=d[k],q.push(n(k.replace(/([a-z])([A-Z])/,"$1-$2"))));A&&(c[r]=A,q.push(r));0<l&&"object"===typeof d&&(c[m]=q.join(", "),c[p]=l+"s",c[u]=e||"linear")}s=function(c){if("undefined"!==typeof c){if(c.target!==c.currentTarget)return;a(c.target).unbind(f,s)}a(this).css(v);h&&h.call(this)};0<l&&this.bind(f,s);this.size()&&this.get(0).clientLeft;this.css(c);0>=l&&setTimeout(function(){F.each(function(){s.call(this)})},
0);return this};q=null})(Zepto);
(function(a,g){function n(d,m,p,u,l){"function"==typeof m&&!l&&(l=m,m=g);p={opacity:p};u&&(p.scale=u,d.css(a.fx.cssPrefix+"transform-origin","0 0"));return d.animate(p,m,null,l)}function d(d,g,p,l){return n(d,g,0,p,function(){q.call(a(this));l&&l.call(this)})}var l=a.fn.show,q=a.fn.hide,t=a.fn.toggle;a.fn.show=function(a,d){l.call(this);a===g?a=0:this.css("opacity",0);return n(this,a,1,"1,1",d)};a.fn.hide=function(a,m){return a===g?q.call(this):d(this,a,"0,0",m)};a.fn.toggle=function(d,m){return d===
g||"boolean"==typeof d?t.call(this,d):this.each(function(){var g=a(this);g["none"==g.css("display")?"show":"hide"](d,m)})};a.fn.fadeTo=function(a,d,g){return n(this,a,d,null,g)};a.fn.fadeIn=function(a,d){var g=this.css("opacity");0<g?this.css("opacity",0):g=1;return l.call(this).fadeTo(a,g,d)};a.fn.fadeOut=function(a,g){return d(this,a,null,g)};a.fn.fadeToggle=function(d,g){return this.each(function(){var p=a(this);p[0==p.css("opacity")||"none"==p.css("display")?"fadeIn":"fadeOut"](d,g)})}})(Zepto);
(function(a){var g=[],n;a.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(g.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",n&&clearTimeout(n),n=setTimeout(function(){g=[]},6E4)),this.parentNode.removeChild(this))})}})(Zepto);
(function(a){function g(d,g){var u=d[r],u=u&&l[u];if(void 0===g)return u||n(d);if(u){if(g in u)return u[g];var w=t(g);if(w in u)return u[w]}return q.call(a(d),g)}function n(g,p,u){var n=g[r]||(g[r]=++a.uuid);g=l[n]||(l[n]=d(g));void 0!==p&&(g[t(p)]=u);return g}function d(d){var g={};a.each(d.attributes,function(d,m){0==m.name.indexOf("data-")&&(g[t(m.name.replace("data-",""))]=a.zepto.deserializeValue(m.value))});return g}var l={},q=a.fn.data,t=a.camelCase,r=a.expando="Zepto"+ +new Date;a.fn.data=
function(d,l){return void 0===l?a.isPlainObject(d)?this.each(function(g,l){a.each(d,function(a,d){n(l,a,d)})}):0==this.length?void 0:g(this[0],d):this.each(function(){n(this,d,l)})};a.fn.removeData=function(d){"string"==typeof d&&(d=d.split(/\s+/));return this.each(function(){var g=this[r],u=g&&l[g];u&&a.each(d,function(){delete u[t(this)]})})}})(Zepto);
(function(a){function g(d){d=a(d);return!(!d.width()&&!d.height())&&"none"!==d.css("display")}function n(a,d){a=a.replace(/=#\]/g,'="#"]');var g,l,m=r.exec(a);m&&m[2]in t&&(g=t[m[2]],l=m[3],a=m[1],l&&(m=Number(l),l=isNaN(m)?l.replace(/^["']|["']$/g,""):m));return d(a,g,l)}var d=a.zepto,l=d.qsa,q=d.matches,t=a.expr[":"]={visible:function(){if(g(this))return this},hidden:function(){if(!g(this))return this},selected:function(){if(this.selected)return this},checked:function(){if(this.checked)return this},
parent:function(){return this.parentNode},first:function(a){if(0===a)return this},last:function(a,d){if(a===d.length-1)return this},eq:function(a,d,g){if(a===g)return this},contains:function(d,g,l){if(-1<a(this).text().indexOf(l))return this},has:function(a,g,l){if(d.qsa(this,l).length)return this}},r=/(.*):(\w+)(?:\(([^)]+)\))?$\s*/,m=/^\s*>/,p="Zepto"+ +new Date;d.qsa=function(g,q){return n(q,function(n,r,t){try{var z;!n&&r?n="*":m.test(n)&&(z=a(g).addClass(p),n="."+p+" "+n);var E=l(g,n)}catch(e){throw console.error("error performing selector: %o",
q),e;}finally{z&&z.removeClass(p)}return!r?E:d.uniq(a.map(E,function(a,d){return r.call(a,d,E,t)}))})};d.matches=function(a,d){return n(d,function(d,g,l){return(!d||q(a,d))&&(!g||g.call(a,null,l)===a)})}})(Zepto);
(function(a){a.fn.end=function(){return this.prevObject||a()};a.fn.andSelf=function(){return this.add(this.prevObject||a())};"filter add not eq first last find closest parents parent children siblings".split(" ").forEach(function(g){var n=a.fn[g];a.fn[g]=function(){var a=n.apply(this,arguments);a.prevObject=this;return a}})})(Zepto);
this.Zepto&&function(a){var g,n;g=function(a,g,n,t,r){var m;return a?(m=a[n](),g={width:["left","right"],height:["top","bottom"]},g[n].forEach(function(g){m+=parseInt(a.css("padding-"+g),10);t&&(m+=parseInt(a.css("border-"+g+"-width"),10));if(r)return m+=parseInt(a.css("margin-"+g),10)}),m):null};["width","height"].forEach(function(d){var l,n,t,r,m;l=d.replace(/./,function(a){return a[0].toUpperCase()});(n=a.fn)[r="inner"+l]||(n[r]=function(a){return g(this,l,d,!1,a)});return(t=a.fn)[m="outer"+l]||
(t[m]=function(a){return g(this,l,d,!0,a)})});return(n=a.fn).detach||(n.detach=function(a){var g;g=this;null!=a&&(g=g.filter(a));a=g.clone(!0);g.remove();return a})}(Zepto);