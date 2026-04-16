var Tg=Object.defineProperty;var wg=(r,t,e)=>t in r?Tg(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Xt=(r,t,e)=>wg(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function cp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zo={duration:.5,overwrite:!1,delay:0},uh,rn,Ce,Qn=1e8,Ee=1/Qn,Gc=Math.PI*2,bg=Gc/4,Ag=0,up=Math.sqrt,Rg=Math.cos,Cg=Math.sin,Qe=function(t){return typeof t=="string"},Ne=function(t){return typeof t=="function"},Bi=function(t){return typeof t=="number"},hh=function(t){return typeof t>"u"},Si=function(t){return typeof t=="object"},Rn=function(t){return t!==!1},fh=function(){return typeof window<"u"},ra=function(t){return Ne(t)||Qe(t)},hp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,Pg=/random\([^)]+\)/g,Lg=/,\s*/g,rf=/(?:-?\.?\d|\.)+/gi,fp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dp=/[+-]=-?[.\d]+/,Dg=/[^,'"\[\]\s]+/gi,Ig=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,fi,Wc,dh,qn={},ul={},pp,mp=function(t){return(ul=Bs(t,qn))&&Dn},ph=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ko=function(t,e){return!e&&console.warn(t)},gp=function(t,e){return t&&(qn[t]=e)&&ul&&(ul[t]=e)||qn},Ho=function(){return 0},Ug={suppressEvents:!0,isStart:!0,kill:!1},Ya={suppressEvents:!0,kill:!1},Ng={suppressEvents:!0},mh={},rr=[],Xc={},_p,zn={},Xl={},sf=30,$a=[],gh="",_h=function(t){var e=t[0],n,i;if(Si(e)||Ne(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=$a.length;i--&&!$a[i].targetTest(e););n=$a[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new zp(t[i],n)))||t.splice(i,1);return t},Ur=function(t){return t._gsap||_h(ti(t))[0]._gsap},vp=function(t,e,n){return(n=t[e])&&Ne(n)?t[e]():hh(n)&&t.getAttribute&&t.getAttribute(e)||n},Cn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},Le=function(t){return Math.round(t*1e7)/1e7||0},ws=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Og=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},hl=function(){var t=rr.length,e=rr.slice(0),n,i;for(Xc={},rr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vh=function(t){return!!(t._initted||t._startAt||t.add)},xp=function(t,e,n,i){rr.length&&!rn&&hl(),t.render(e,n,!!(rn&&e<0&&vh(t))),rr.length&&!rn&&hl()},yp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Dg).length<2?e:Qe(t)?t.trim():t},Sp=function(t){return t},Yn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Fg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Bs=function(t,e){for(var n in e)t[n]=e[n];return t},of=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Si(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},fl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},To=function(t){var e=t.parent||De,n=t.keyframes?Fg(dn(t.keyframes)):Yn;if(Rn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Bg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Mp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Pl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},cr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Nr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},zg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},qc=function(t,e,n,i){return t._startAt&&(rn?t._startAt.revert(Ya):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},kg=function r(t){return!t||t._ts&&r(t.parent)},af=function(t){return t._repeat?zs(t._tTime,t=t.duration()+t._rDelay)*t:0},zs=function(t,e){var n=Math.floor(t=Le(t/e));return t&&n===t?n-1:n},dl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ll=function(t){return t._end=Le(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Dl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ll(t),n._dirty||Nr(n,t)),t},Ep=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=dl(t.rawTime(),e),(!e._dur||Qo(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),Nr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},gi=function(t,e,n,i){return e.parent&&cr(e),e._start=Le((Bi(n)?n:n||t!==De?Zn(t,n,e):t._time)+e._delay),e._end=Le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Mp(t,e,"_first","_last",t._sort?"_start":0),Yc(e)||(t._recent=e),i||Ep(t,e),t._ts<0&&Dl(t,t._tTime),t},Tp=function(t,e){return(qn.ScrollTrigger||ph("scrollTrigger",e))&&qn.ScrollTrigger.create(e,t)},wp=function(t,e,n,i,s){if(yh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!rn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&_p!==Hn.frame)return rr.push(t),t._lazy=[s,i],1},Hg=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Yc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Vg=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Hg(t)&&!(!t._initted&&Yc(t))||(t._ts<0||t._dp._ts<0)&&!Yc(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=Qo(0,t._tDur,e),u=zs(l,a),t._yoyo&&u&1&&(o=1-o),u!==zs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||rn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&wp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&qc(t,e,n,!0),t._onUpdate&&!n&&Gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&cr(t,1),!n&&!rn&&(Gn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Gg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ks=function(t,e,n,i){var s=t._repeat,o=Le(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Le(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Dl(t,t._tTime=t._tDur*a),t.parent&&Ll(t),n||Nr(t.parent,t),t},lf=function(t){return t instanceof bn?Nr(t):ks(t,t._dur)},Wg={_start:0,endTime:Ho,totalDuration:Ho},Zn=function r(t,e,n){var i=t.labels,s=t._recent||Wg,o=t.duration()>=Qn?s.endTime(!1):t._dur,a,l,c;return Qe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},wo=function(t,e,n){var i=Bi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Rn(l.vars.inherit)&&l.parent;o.immediateRender=Rn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ve(e[0],o,e[s+1])},dr=function(t,e){return t||t===0?e(t):e},Qo=function(t,e,n){return n<t?t:n>e?e:n},hn=function(t,e){return!Qe(t)||!(e=Ig.exec(t))?"":e[1]},Xg=function(t,e,n){return dr(n,function(i){return Qo(t,e,i)})},$c=[].slice,bp=function(t,e){return t&&Si(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Si(t[0]))&&!t.nodeType&&t!==fi},qg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Qe(i)&&!e||bp(i,1)?(s=n).push.apply(s,ti(i)):n.push(i)})||n},ti=function(t,e,n){return Ce&&!e&&Ce.selector?Ce.selector(t):Qe(t)&&!n&&(Wc||!Hs())?$c.call((e||dh).querySelectorAll(t),0):dn(t)?qg(t,n):bp(t)?$c.call(t,0):t?[t]:[]},Kc=function(t){return t=ti(t)[0]||ko("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ti(e,n.querySelectorAll?n:n===t?ko("Invalid scope")||dh.createElement("div"):t)}},Ap=function(t){return t.sort(function(){return .5-Math.random()})},Rp=function(t){if(Ne(t))return t;var e=Si(t)?t:{each:t},n=Or(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,f=i;return Qe(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,m){var _=(m||e).length,p=o[_],g,y,v,S,R,A,E,L,N;if(!p){if(N=e.grid==="auto"?0:(e.grid||[1,Qn])[1],!N){for(E=-Qn;E<(E=m[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(p=o[_]=[],g=l?Math.min(N,_)*u-.5:i%N,y=N===Qn?0:l?_*f/N-.5:i/N|0,E=0,L=Qn,A=0;A<_;A++)v=A%N-g,S=y-(A/N|0),p[A]=R=c?Math.abs(c==="y"?S:v):up(v*v+S*S),R>E&&(E=R),R<L&&(L=R);i==="random"&&Ap(p),p.max=E-L,p.min=L,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(N>_?_-1:c?c==="y"?_/N:N:Math.max(N,_/N))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=hn(e.amount||e.each)||0,n=n&&_<0?s0(n):n}return _=(p[h]-p.min)/p.max||0,Le(p.b+(n?n(_):_)*p.v)+p.u}},Zc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Le(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Bi(n)?0:hn(n))}},Cp=function(t,e){var n=dn(t),i,s;return!n&&Si(t)&&(i=n=t.radius||Qn,t.values?(t=ti(t.values),(s=!Bi(t[0]))&&(i*=i)):t=Zc(t.increment)),dr(e,n?Ne(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:o,s||u===o||Bi(o)?u:u+hn(o)}:Zc(t))},Pp=function(t,e,n,i){return dr(dn(t)?!e:n===!0?!!(n=0):!i,function(){return dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Yg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},$g=function(t,e){return function(n){return t(parseFloat(n))+(e||hn(n))}},Kg=function(t,e,n){return Dp(t,e,0,1,n)},Lp=function(t,e,n){return dr(n,function(i){return t[~~e(i)]})},Zg=function r(t,e,n){var i=e-t;return dn(t)?Lp(t,r(0,t.length),e):dr(n,function(s){return(i+(s-t)%i)%i+t})},Jg=function r(t,e,n){var i=e-t,s=i*2;return dn(t)?Lp(t,r(0,t.length-1),e):dr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Vo=function(t){return t.replace(Pg,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Lg);return Pp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Dp=function(t,e,n,i,s){var o=e-t,a=i-n;return dr(s,function(l){return n+((l-t)/o*a||0)})},jg=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Qe(t),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(dn(t)&&!dn(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(m){m*=f;var _=Math.min(h,~~m);return u[_](m-_)},n=e}else i||(t=Bs(dn(t)?[]:{},t));if(!u){for(l in e)xh.call(a,t,l,"get",e[l]);s=function(m){return Eh(m,a)||(o?t.p:t)}}}return dr(n,s)},cf=function(t,e,n){var i=t.labels,s=Qn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(t,e,n){var i=t.vars,s=i[e],o=Ce,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&rr.length&&hl(),a&&(Ce=a),u=l?s.apply(c,l):s.call(c),Ce=o,u},mo=function(t){return cr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!rn),t.progress()<1&&Gn(t,"onInterrupt"),t},Ss,Ip=[],Up=function(t){if(t)if(t=!t.name&&t.default||t,fh()||t.headless){var e=t.name,n=Ne(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ho,render:Eh,add:xh,kill:m0,modifier:p0,rawVars:0},o={targetTest:0,get:0,getSetter:Mh,aliases:{},register:0};if(Hs(),t!==i){if(zn[e])return;Yn(i,Yn(fl(t,s),o)),Bs(i.prototype,Bs(s,fl(t,o))),zn[i.prop=e]=i,t.targetTest&&($a.push(i),mh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}gp(e,i),t.register&&t.register(Dn,i,Pn)}else Ip.push(t)},Me=255,go={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},ql=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},Np=function(t,e,n){var i=t?Bi(t)?[t>>16,t>>8&Me,t&Me]:0:go.black,s,o,a,l,c,u,f,h,d,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),go[t])i=go[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Me,i&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(rf),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=ql(l+1/3,s,o),i[1]=ql(l,s,o),i[2]=ql(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(fp),n&&i.length<4&&(i[3]=1),i}else i=t.match(rf)||go.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/Me,o=i[1]/Me,a=i[2]/Me,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Op=function(t){var e=[],n=[],i=-1;return t.split(sr).forEach(function(s){var o=s.match(ys)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},uf=function(t,e,n){var i="",s=(t+i).match(sr),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Np(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Op(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(sr,"1").split(ys),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(sr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in go)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Qg=/hsl[a]?\(/,Fp=function(t){var e=t.join(" "),n;if(sr.lastIndex=0,sr.test(e))return n=Qg.test(e),t[1]=uf(t[1],n),t[0]=uf(t[0],n,Op(t[1])),!0},Go,Hn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,m=function _(p){var g=r()-i,y=p===!0,v,S,R,A;if((g>t||g<0)&&(n+=g-e),i+=g,R=i-n,v=R-o,(v>0||y)&&(A=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=v+(v>=s?4:s-v),S=1),y||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](R,h,A,p)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){pp&&(!Wc&&fh()&&(fi=Wc=window,dh=fi.document||{},qn.gsap=Dn,(fi.gsapVersions||(fi.gsapVersions=[])).push(Dn.version),mp(ul||fi.GreenSockGlobals||!fi.gsap&&fi||{}),Ip.forEach(Up)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Go=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Go=0,c=Ho},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,g,y){var v=g?function(S,R,A,E){p(S,R,A,E),f.remove(v)}:p;return f.remove(p),a[y?"unshift":"push"](v),Hs(),v},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},f}(),Hs=function(){return!Go&&Hn.wake()},fe={},t0=/^[\d.\-M][\d.\-,\s]/,e0=/["']/g,n0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(e0,"").trim():+c,i=l.substr(a+1).trim();return e},i0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},r0=function(t){var e=(t+"").split("("),n=fe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[n0(e[1])]:i0(t).split(",").map(yp)):fe._CE&&t0.test(t)?fe._CE("",t):n},s0=function(t){return function(e){return 1-t(1-e)}},Or=function(t,e){return t&&(Ne(t)?t:fe[t]||r0(t))||e},Yr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Cn(t,function(a){fe[a]=qn[a]=s,fe[o=a.toLowerCase()]=n;for(var l in s)fe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=fe[a+"."+l]=s[l]}),s},Bp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Yl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Gc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Cg((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Bp(a);return s=Gc/s,l.config=function(c,u){return r(t,c,u)},l},$l=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Bp(n);return i.config=function(s){return r(t,s)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Yr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});fe.Linear.easeNone=fe.none=fe.Linear.easeIn;Yr("Elastic",Yl("in"),Yl("out"),Yl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Yr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Yr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Yr("Circ",function(r){return-(up(1-r*r)-1)});Yr("Sine",function(r){return r===1?1:-Rg(r*bg)+1});Yr("Back",$l("in"),$l("out"),$l());fe.SteppedEase=fe.steps=qn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Ee;return function(a){return((i*Qo(0,o,a)|0)+s)*n}}};zo.ease=fe["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gh+=r+","+r+"Params,"});var zp=function(t,e){this.id=Ag++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:vp,this.set=e?e.getSetter:Mh},Wo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ks(this,+e.duration,1,1),this.data=e.data,Ce&&(this._ctx=Ce,Ce.data.push(this)),Go||Hn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Hs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Dl(this,n),!s._dp||s.parent||Ep(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+af(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+af(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?zs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(Qo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ll(this),zg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Le(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ng);var i=rn;return rn=n,vh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Zn(this,n),Rn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Rn(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ne(n)?n:Sp,l=function(){var u=i.then;i.then=null,s&&s(),Ne(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){mo(this)},r}();Yn(Wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var bn=function(r){cp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Rn(n.sortChildren),De&&gi(n.parent||De,Li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Tp(Li(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return wo(0,arguments,this),this},e.from=function(i,s,o){return wo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return wo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,To(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ve(i,s,Zn(this,o),1),this},e.call=function(i,s,o){return gi(this,Ve.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ve(i,o,Zn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,To(o).immediateRender=Rn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,To(a).immediateRender=Rn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Le(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,m,_,p,g,y,v,S,R,A,E;if(this!==De&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,S=this._start,v=this._ts,g=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Le(u%p),u===l?(_=this._repeat,h=c):(R=Le(u/p),_=~~R,_&&_===R&&(h=c,_--),h>c&&(h=c)),R=zs(this._tTime,p),!a&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),A&&_&1&&(h=c-h,E=1),_!==R&&!this._lock){var L=A&&R&1,N=L===(A&&_&1);if(_<R&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Le(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,N&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Gg(this,Le(a),Le(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(Gn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!g){y=0,m&&(u+=this._zTime=-Ee);break}}d=m}else{d=this._last;for(var x=i<0?i:h;d;){if(m=d._prev,(d._act||x<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||rn&&vh(d)),h!==this._time||!this._ts&&!g){y=0,m&&(u+=this._zTime=x?-Ee:Ee);break}}d=m}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-Ee)._zTime=h>=a?1:-1,this._ts))return this._start=S,Ll(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&cr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Bi(s)||(s=Zn(this,s,i)),!(i instanceof Wo)){if(dn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Qe(i))return this.addLabel(i,s);if(Ne(i))i=Ve.delayedCall(0,i);else return this}return this!==i?gi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ve?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Qe(i)?this.removeLabel(i):Ne(i)?this.killTweensOf(i):(i.parent===this&&Pl(this,i),i===this._recent&&(this._recent=this._last),Nr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Le(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Zn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ve.delayedCall(0,s||Ho,o);return a.data="isPause",this._hasPause=1,gi(this,a,Zn(this,i))},e.removePause=function(i){var s=this._first;for(i=Zn(this,i);s;)s._start===i&&s.data==="isPause"&&cr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Qi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ti(i),l=this._first,c=Bi(s),u;l;)l instanceof Ve?Og(l._targets,a)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Zn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,m=Ve.to(o,Yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ee,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&ks(m,p,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,f||[])}},s));return h?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Yn({startAt:{time:Zn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),cf(this,Zn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),cf(this,Zn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Le(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Nr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Nr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Qn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Le(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ks(o,o===De&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(De._ts&&(xp(De,dl(i,De)),_p=Hn.frame),Hn.frame>=sf){sf+=Xn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&Xn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},t}(Wo);Yn(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var o0=function(t,e,n,i,s,o,a){var l=new Pn(this._pt,t,e,0,1,Xp,null,s),c=0,u=0,f,h,d,m,_,p,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Vo(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),h=n.match(Wl)||[];f=Wl.exec(i);)m=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?ws(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},c=Wl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(dp.test(i)||g)&&(l.e=0),this._pt=l,l},xh=function(t,e,n,i,s,o,a,l,c,u){Ne(i)&&(i=i(s||0,t,o));var f=t[e],h=n!=="get"?n:Ne(f)?c?t[e.indexOf("set")||!Ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Ne(f)?c?h0:Gp:Sh,m;if(Qe(i)&&(~i.indexOf("random(")&&(i=Vo(i)),i.charAt(1)==="="&&(m=ws(h,i)+(hn(h)||0),(m||m===0)&&(i=m))),!u||h!==i||Jc)return!isNaN(h*i)&&i!==""?(m=new Pn(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?d0:Wp,0,d),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!f&&!(e in t)&&ph(e,i),o0.call(this,t,e,h,i,d,l||Xn.stringFilter,c))},a0=function(t,e,n,i,s){if(Ne(t)&&(t=bo(t,s,e,n,i)),!Si(t)||t.style&&t.nodeType||dn(t)||hp(t))return Qe(t)?bo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=bo(t[a],s,e,n,i);return o},kp=function(t,e,n,i,s,o){var a,l,c,u;if(zn[t]&&(a=new zn[t]).init(s,a.rawVars?e[t]:a0(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Pn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ss))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qi,Jc,yh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:p,v=t._overwrite==="auto"&&!uh,S=t.timeline,R=i.easeReverse||f,A,E,L,N,x,M,I,z,D,H,k,X,V;if(S&&(!h||!s)&&(s="none"),t._ease=Or(s,zo.ease),t._rEase=R&&(Or(R)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||h&&!i.stagger){if(z=p[0]?Ur(p[0]).harness:0,X=z&&i[z.prop],A=fl(i,mh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&m?Ya:Ug),_._lazy=0),o){if(cr(t._startAt=Ve.set(p,Yn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Rn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn||!a&&!d)&&t._startAt.revert(Ya),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&m&&!_){if(e&&(a=!1),L=Yn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Rn(l),immediateRender:a,stagger:0,parent:g},A),X&&(L[z.prop]=X),cr(t._startAt=Ve.set(p,L)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn?t._startAt.revert(Ya):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Rn(l)||l&&!m,E=0;E<p.length;E++){if(x=p[E],I=x._gsap||_h(p)[E]._gsap,t._ptLookup[E]=H={},Xc[I.id]&&rr.length&&hl(),k=y===p?E:y.indexOf(x),z&&(D=new z).init(x,X||A,t,k,y)!==!1&&(t._pt=N=new Pn(t._pt,x,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(lt){H[lt]=N}),D.priority&&(M=1)),!z||X)for(L in A)zn[L]&&(D=kp(L,A,t,k,x,y))?D.priority&&(M=1):H[L]=N=xh.call(t,x,L,"get",A[L],k,y,0,i.stringFilter);t._op&&t._op[E]&&t.kill(x,t._op[E]),v&&t._pt&&(Qi=t,De.killTweensOf(x,H,t.globalTime(e)),V=!t.parent,Qi=0),t._pt&&l&&(Xc[I.id]=1)}M&&qp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,h&&e<=0&&S.render(Qn,!0,!0)},l0=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Jc=1,t.vars[e]="+=0",yh(t,a),Jc=0,l?ko(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Be(n)+hn(f.e)),f.b&&(f.b=u.s+hn(f.b))},c0=function(t,e){var n=t[0]?Ur(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Bs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},u0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(dn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},bo=function(t,e,n,i,s){return Ne(t)?t.call(e,n,i,s):Qe(t)&&~t.indexOf("random(")?Vo(t):t},Hp=gh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vp={};Cn(Hp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vp[r]=1});var Ve=function(r){cp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:To(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||De,y=(dn(n)||hp(n)?Bi(n[0]):"length"in i)?[n]:ti(n),v,S,R,A,E,L,N,x;if(a._targets=y.length?_h(y):ko("GSAP target "+n+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||h||ra(c)||ra(u)){i=a.vars;var M=i.easeReverse||i.yoyoEase;if(v=a.timeline=new bn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),v.kill(),v.parent=v._dp=Li(a),v._start=0,h||ra(c)||ra(u)){if(A=y.length,N=h&&Rp(h),Si(h))for(E in h)~Hp.indexOf(E)&&(x||(x={}),x[E]=h[E]);for(S=0;S<A;S++)R=fl(i,Vp),R.stagger=0,M&&(R.easeReverse=M),x&&Bs(R,x),L=y[S],R.duration=+bo(c,Li(a),S,L,y),R.delay=(+bo(u,Li(a),S,L,y)||0)-a._delay,!h&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),v.to(L,R,N?N(S,L,y):0),v._ease=fe.none;v.duration()?c=u=0:a.timeline=0}else if(m){To(Yn(v.vars.defaults,{ease:"none"})),v._ease=Or(m.ease||i.ease||"none");var I=0,z,D,H;if(dn(m))m.forEach(function(k){return v.to(y,k,">")}),v.duration();else{R={};for(E in m)E==="ease"||E==="easeEach"||u0(E,m[E],R,m.easeEach);for(E in R)for(z=R[E].sort(function(k,X){return k.t-X.t}),I=0,S=0;S<z.length;S++)D=z[S],H={ease:D.e,duration:(D.t-(S?z[S-1].t:0))/100*c},H[E]=D.v,v.to(y,H,I),I+=H.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!uh&&(Qi=Li(a),De.killTweensOf(y),Qi=0),gi(g,Li(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!m&&a._start===Le(g._time)&&Rn(f)&&kg(Li(a))&&g.data!=="nested")&&(a._tTime=-Ee,a.render(Math.max(0,-u)||0)),p&&Tp(Li(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Ee&&!u?l:i<Ee?0:i,h,d,m,_,p,g,y,v;if(!c)Vg(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Le(f%_),f===l?(m=this._repeat,h=c):(p=Le(f/_),m=~~p,m&&m===p?(h=c,m--):h>c&&(h=c)),g=this._yoyo&&m&1,g&&(h=c-h),p=zs(this._tTime,_),h===a&&!o&&this._initted&&m===p)return this._tTime=f,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Le(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(wp(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=h<a;if(S!==this._inv){var R=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(S?-1:1)/R:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(Gn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&qc(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&qc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&cr(this,1),!s&&!(u&&!a)&&(f||a||g)&&(Gn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Go||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||yh(this,c),u=this._ease(c/this._dur),l0(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Dl(this,0),this.parent||Mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?mo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qi&&Qi.vars.overwrite!==!0)._first||mo(this),this.parent&&o!==this.timeline.totalDuration()&&ks(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ti(i):a,c=this._ptLookup,u=this._pt,f,h,d,m,_,p,g;if((!s||s==="all")&&Bg(a,l))return s==="all"&&(this._pt=0),mo(this);for(f=this._op=this._op||[],s!=="all"&&(Qe(s)&&(_={},Cn(s,function(y){return _[y]=1}),s=_),s=c0(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){h=c[g],s==="all"?(f[g]=s,m=h,d={}):(d=f[g]=f[g]||{},m=s);for(_ in m)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Pl(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&mo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return wo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return wo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return De.killTweensOf(i,s,o)},t}(Wo);Yn(Ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(r){Ve[r]=function(){var t=new bn,e=$c.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Sh=function(t,e,n){return t[e]=n},Gp=function(t,e,n){return t[e](n)},h0=function(t,e,n,i){return t[e](i.fp,n)},f0=function(t,e,n){return t.setAttribute(e,n)},Mh=function(t,e){return Ne(t[e])?Gp:hh(t[e])&&t.setAttribute?f0:Sh},Wp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},d0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Xp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Eh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},p0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},m0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Pl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},g0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},qp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Pn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Wp,this.d=l||this,this.set=c||Sh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=g0,this.m=n,this.mt=s,this.tween=i},r}();Cn(gh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return mh[r]=1});qn.TweenMax=qn.TweenLite=Ve;qn.TimelineLite=qn.TimelineMax=bn;De=new bn({sortChildren:!1,defaults:zo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=Fp;var Fr=[],Ka={},_0=[],hf=0,v0=0,Kl=function(t){return(Ka[t]||_0).map(function(e){return e()})},jc=function(){var t=Date.now(),e=[];t-hf>2&&(Kl("matchMediaInit"),Fr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=fi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Kl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),hf=t,Kl("matchMedia"))},Yp=function(){function r(e,n){this.selector=n&&Kc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=v0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ne(n)&&(s=i,i=n,n=Ne);var o=this,a=function(){var c=Ce,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Kc(s)),Ce=o,f=i.apply(o,arguments),Ne(f)&&o._r.push(f),Ce=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Ne?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ce;Ce=null,n(this),Ce=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ve&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ve)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Fr.length;o--;)Fr[o].id===this.id&&Fr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),x0=function(){function r(e){this.contexts=[],this.scope=e,Ce&&Ce.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Si(n)||(n={matches:n});var o=new Yp(0,s||this.scope),a=o.conditions={},l,c,u;Ce&&!o.selector&&(o.selector=Ce.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=fi.matchMedia(n[c]),l&&(Fr.indexOf(o)<0&&Fr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(jc):l.addEventListener("change",jc)));return u&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),pl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Up(i)})},timeline:function(t){return new bn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){Qe(t)&&(t=ti(t)[0]);var s=Ur(t||{}).get,o=n?Sp:yp;return n==="native"&&(n=""),t&&(e?o((zn[e]&&zn[e].get||s)(t,e,n,i)):function(a,l,c){return o((zn[a]&&zn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ti(t),t.length>1){var i=t.map(function(u){return Dn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var o=zn[e],a=Ur(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;Ss._pt=0,f.init(t,n?u+n:u,Ss,0,[t]),f.render(1,f),Ss._pt&&Eh(1,Ss)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Dn.to(t,Yn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Or(t.ease,zo.ease)),of(zo,t||{})},config:function(t){return of(Xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!zn[a]&&!qn[a]&&ko(e+" effect requires "+a+" plugin.")}),Xl[e]=function(a,l,c){return n(ti(a),Yn(l||{},s),c)},o&&(bn.prototype[e]=function(a,l,c){return this.add(Xl[e](a,Si(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){fe[t]=Or(e)},parseEase:function(t,e){return arguments.length?Or(t,e):fe},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new bn(t),i,s;for(n.smoothChildTiming=Rn(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ve&&i.vars.onComplete===i._targets[0]))&&gi(n,i,i._start-i._delay),i=s;return gi(De,n,0),n},context:function(t,e){return t?new Yp(t,e):Ce},matchMedia:function(t){return new x0(t)},matchMediaRefresh:function(){return Fr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||jc()},addEventListener:function(t,e){var n=Ka[t]||(Ka[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ka[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Zg,wrapYoyo:Jg,distribute:Rp,random:Pp,snap:Cp,normalize:Kg,getUnit:hn,clamp:Xg,splitColor:Np,toArray:ti,selector:Kc,mapRange:Dp,pipe:Yg,unitize:$g,interpolate:jg,shuffle:Ap},install:mp,effects:Xl,ticker:Hn,updateRoot:bn.updateRoot,plugins:zn,globalTimeline:De,core:{PropTween:Pn,globals:gp,Tween:Ve,Timeline:bn,Animation:Wo,getCache:Ur,_removeLinkedListItem:Pl,reverting:function(){return rn},context:function(t){return t&&Ce&&(Ce.data.push(t),t._ctx=Ce),Ce},suppressOverwrites:function(t){return uh=t}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pl[r]=Ve[r]});Hn.add(bn.updateRoot);Ss=pl.to({},{duration:0});var y0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},S0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=y0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Zl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Qe(s)&&(l={},Cn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}S0(a,s)}}}},Dn=pl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Zl("roundProps",Zc),Zl("modifiers"),Zl("snap",Cp))||pl;Ve.version=bn.version=Dn.version="3.15.0";pp=1;fh()&&Hs();fe.Power0;fe.Power1;fe.Power2;fe.Power3;fe.Power4;fe.Linear;fe.Quad;fe.Cubic;fe.Quart;fe.Quint;fe.Strong;fe.Elastic;fe.Back;fe.SteppedEase;fe.Bounce;fe.Sine;fe.Expo;fe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ff,tr,bs,Th,Pr,df,wh,M0=function(){return typeof window<"u"},zi={},Er=180/Math.PI,As=Math.PI/180,jr=Math.atan2,pf=1e8,bh=/([A-Z])/g,E0=/(left|right|width|margin|padding|x)/i,T0=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},w0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},b0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},A0=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},R0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},$p=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Kp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},C0=function(t,e,n){return t.style[e]=n},P0=function(t,e,n){return t.style.setProperty(e,n)},L0=function(t,e,n){return t._gsap[e]=n},D0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},I0=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},U0=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ie="transform",Ln=Ie+"Origin",N0=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in zi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=_i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Di(i,a)}):this.tfm[t]=o.x?o[t]:Di(i,t),t===Ln&&(this.tfm.zOrigin=o.zOrigin);else return _i.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ie)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=Ie}(s||e)&&this.props.push(t,e,s[t])},Zp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},O0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(bh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=wh(),(!s||!s.isStart)&&!n[Ie]&&(Zp(n),i.zOrigin&&n[Ln]&&(n[Ln]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jp=function(t,e){var n={target:t,props:[],revert:O0,save:N0};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},jp,tu=function(t,e){var n=tr.createElementNS?tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):tr.createElement(t);return n&&n.style?n:tr.createElement(t)},Wn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(bh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Vs(e)||e,1)||""},mf="O,Moz,ms,Ms,Webkit".split(","),Vs=function(t,e,n){var i=e||Pr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(mf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?mf[o]:"")+t},eu=function(){M0()&&window.document&&(ff=window,tr=ff.document,bs=tr.documentElement,Pr=tu("div")||{style:{}},tu("div"),Ie=Vs(Ie),Ln=Ie+"Origin",Pr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jp=!!Vs("perspective"),wh=Dn.core.reverting,Th=1)},gf=function(t){var e=t.ownerSVGElement,n=tu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),bs.removeChild(n),s},_f=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Qp=function(t){var e,n;try{e=t.getBBox()}catch{e=gf(t),n=1}return e&&(e.width||e.height)||n||(e=gf(t)),e&&!e.width&&!e.x&&!e.y?{x:+_f(t,["x","cx","x1"])||0,y:+_f(t,["y","cy","y1"])||0,width:0,height:0}:e},tm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Qp(t))},ur=function(t,e){if(e){var n=t.style,i;e in zi&&e!==Ln&&(e=Ie),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(bh,"-$1").toLowerCase())):n.removeAttribute(e)}},er=function(t,e,n,i,s,o){var a=new Pn(t._pt,e,n,0,1,o?Kp:$p);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},vf={deg:1,rad:1,turn:1},F0={grid:1,flex:1},hr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Pr.style,l=E0.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",m,_,p,g;if(i===o||!s||vf[i]||vf[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),g=t.getCTM&&tm(t),(d||o==="%")&&(zi[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[u],Be(d?s/m*f:s/100*m);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===tr||!_.appendChild)&&(_=tr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Hn.time&&!p.uncache)return Be(s/p.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,m=t[u],y?t.style[e]=y:ur(t,e)}else(d||o==="%")&&!F0[Wn(_,"display")]&&(a.position=Wn(t,"position")),_===t&&(a.position="static"),_.appendChild(Pr),m=Pr[u],_.removeChild(Pr),a.position="absolute";return l&&d&&(p=Ur(_),p.time=Hn.time,p.width=_[u]),Be(h?m*s/f:m&&s?f/m*s:0)},Di=function(t,e,n,i){var s;return Th||eu(),e in _i&&e!=="transform"&&(e=_i[e],~e.indexOf(",")&&(e=e.split(",")[0])),zi[e]&&e!=="transform"?(s=qo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:gl(Wn(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ml[e]&&ml[e](t,e,n)||Wn(t,e)||vp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?hr(t,e,s,n)+n:s},B0=function(t,e,n,i){if(!n||n==="none"){var s=Vs(e,t,1),o=s&&Wn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Wn(t,"borderTopColor"))}var a=new Pn(this._pt,t.style,e,0,1,Xp),l=0,c=0,u,f,h,d,m,_,p,g,y,v,S,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Wn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Wn(t,e)||i,_?t.style[e]=_:ur(t,e)),u=[n,i],Fp(u),n=u[0],i=u[1],h=n.match(ys)||[],R=i.match(ys)||[],R.length){for(;f=ys.exec(i);)p=f[0],y=i.substring(l,f.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),p.charAt(1)==="="&&(p=ws(d,p)+S),g=parseFloat(p),v=p.substr((g+"").length),l=ys.lastIndex-v.length,v||(v=v||Xn.units[e]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(d=hr(t,e,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Kp:$p;return dp.test(i)&&(a.e=0),this._pt=a,a},xf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},z0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=xf[n]||n,e[1]=xf[i]||i,e.join(" ")},k0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],zi[a]&&(l=1,a=a==="transformOrigin"?Ln:Ie),ur(n,a);l&&(ur(n,Ie),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qo(n,1),o.uncache=1,Zp(i)))}},ml={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Pn(t._pt,e,n,0,0,k0);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Xo=[1,0,0,1,0,0],em={},nm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},yf=function(t){var e=Wn(t,Ie);return nm(e)?Xo:e.substr(7).match(fp).map(Be)},Ah=function(t,e){var n=t._gsap||Ur(t),i=t.style,s=yf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xo:s):(s===Xo&&!t.offsetParent&&t!==bs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,bs.appendChild(t)),s=yf(t),l?i.display=l:ur(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):bs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nu=function(t,e,n,i,s,o){var a=t._gsap,l=s||Ah(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],m=l[1],_=l[2],p=l[3],g=l[4],y=l[5],v=e.split(" "),S=parseFloat(v[0])||0,R=parseFloat(v[1])||0,A,E,L,N;n?l!==Xo&&(E=d*p-m*_)&&(L=S*(p/E)+R*(-_/E)+(_*y-p*g)/E,N=S*(-m/E)+R*(d/E)-(d*y-m*g)/E,S=L,R=N):(A=Qp(t),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),R=A.y+(~(v[1]||v[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(g=S-c,y=R-u,a.xOffset=f+(g*d+y*_)-g,a.yOffset=h+(g*m+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ln]="0px 0px",o&&(er(o,a,"xOrigin",c,S),er(o,a,"yOrigin",u,R),er(o,a,"xOffset",f,a.xOffset),er(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+R)},qo=function(t,e){var n=t._gsap||new zp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Wn(t,Ln)||"0",u,f,h,d,m,_,p,g,y,v,S,R,A,E,L,N,x,M,I,z,D,H,k,X,V,lt,b,st,Ut,Nt,Z,Q;return u=f=h=_=p=g=y=v=S=0,d=m=1,n.svg=!!(t.getCTM&&tm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ie]!=="none"?l[Ie]:"")),i.scale=i.rotate=i.translate="none"),E=Ah(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),nu(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,E)),R=n.xOrigin||0,A=n.yOrigin||0,E!==Xo&&(M=E[0],I=E[1],z=E[2],D=E[3],u=H=E[4],f=k=E[5],E.length===6?(d=Math.sqrt(M*M+I*I),m=Math.sqrt(D*D+z*z),_=M||I?jr(I,M)*Er:0,y=z||D?jr(z,D)*Er+_:0,y&&(m*=Math.abs(Math.cos(y*As))),n.svg&&(u-=R-(R*M+A*z),f-=A-(R*I+A*D))):(Q=E[6],Nt=E[7],b=E[8],st=E[9],Ut=E[10],Z=E[11],u=E[12],f=E[13],h=E[14],L=jr(Q,Ut),p=L*Er,L&&(N=Math.cos(-L),x=Math.sin(-L),X=H*N+b*x,V=k*N+st*x,lt=Q*N+Ut*x,b=H*-x+b*N,st=k*-x+st*N,Ut=Q*-x+Ut*N,Z=Nt*-x+Z*N,H=X,k=V,Q=lt),L=jr(-z,Ut),g=L*Er,L&&(N=Math.cos(-L),x=Math.sin(-L),X=M*N-b*x,V=I*N-st*x,lt=z*N-Ut*x,Z=D*x+Z*N,M=X,I=V,z=lt),L=jr(I,M),_=L*Er,L&&(N=Math.cos(L),x=Math.sin(L),X=M*N+I*x,V=H*N+k*x,I=I*N-M*x,k=k*N-H*x,M=X,H=V),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),d=Be(Math.sqrt(M*M+I*I+z*z)),m=Be(Math.sqrt(k*k+Q*Q)),L=jr(H,k),y=Math.abs(L)>2e-4?L*Er:0,S=Z?1/(Z<0?-Z:Z):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!nm(Wn(t,Ie)),X&&t.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Be(d),n.scaleY=Be(m),n.rotation=Be(_)+a,n.rotationX=Be(p)+a,n.rotationY=Be(g)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ln]=gl(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?V0:jp?im:H0,n.uncache=0,n},gl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Jl=function(t,e,n){var i=hn(e);return Be(parseFloat(e)+parseFloat(hr(t,"x",n+"px",i)))+i},H0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,im(t,e)},mr="0deg",eo="0px",gr=") ",im=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,v=n.zOrigin,S="",R=g==="auto"&&t&&t!==1||g===!0;if(v&&(f!==mr||u!==mr)){var A=parseFloat(u)*As,E=Math.sin(A),L=Math.cos(A),N;A=parseFloat(f)*As,N=Math.cos(A),o=Jl(y,o,E*N*-v),a=Jl(y,a,-Math.sin(A)*-v),l=Jl(y,l,L*N*-v+v)}p!==eo&&(S+="perspective("+p+gr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||o!==eo||a!==eo||l!==eo)&&(S+=l!==eo||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+gr),c!==mr&&(S+="rotate("+c+gr),u!==mr&&(S+="rotateY("+u+gr),f!==mr&&(S+="rotateX("+f+gr),(h!==mr||d!==mr)&&(S+="skew("+h+", "+d+gr),(m!==1||_!==1)&&(S+="scale("+m+", "+_+gr),y.style[Ie]=S||"translate(0, 0)"},V0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,v=parseFloat(o),S=parseFloat(a),R,A,E,L,N;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=As,c*=As,R=Math.cos(l)*f,A=Math.sin(l)*f,E=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=As,N=Math.tan(c-u),N=Math.sqrt(1+N*N),E*=N,L*=N,u&&(N=Math.tan(u),N=Math.sqrt(1+N*N),R*=N,A*=N)),R=Be(R),A=Be(A),E=Be(E),L=Be(L)):(R=f,L=h,A=E=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=hr(d,"x",o,"px"),S=hr(d,"y",a,"px")),(m||_||p||g)&&(v=Be(v+m-(m*R+_*E)+p),S=Be(S+_-(m*A+_*L)+g)),(i||s)&&(N=d.getBBox(),v=Be(v+i/100*N.width),S=Be(S+s/100*N.height)),N="matrix("+R+","+A+","+E+","+L+","+v+","+S+")",d.setAttribute("transform",N),y&&(d.style[Ie]=N)},G0=function(t,e,n,i,s){var o=360,a=Qe(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Er:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*pf)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*pf)%o-~~(c/o)*o)),t._pt=h=new Pn(t._pt,e,n,i,c,w0),h.e=u,h.u="deg",t._props.push(n),h},Sf=function(t,e){for(var n in e)t[n]=e[n];return t},W0=function(t,e,n){var i=Sf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ie]=e,a=qo(n,1),ur(n,Ie),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ie],o[Ie]=e,a=qo(n,1),o[Ie]=c);for(l in zi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=hn(c),m=hn(u),f=d!==m?hr(n,l,c,m):parseFloat(c),h=parseFloat(u),t._pt=new Pn(t._pt,a,l,f,h-f,Qc),t._pt.u=m||0,t._props.push(l));Sf(a,i)};Cn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});ml[t>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(m){return Di(a,m,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(m,_){return d[m]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var rm={name:"css",register:eu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,d,m,_,p,g,y,v,S,R,A,E,L,N;Th||eu(),this.styles=this.styles||Jp(t),L=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(zn[_]&&kp(_,e,n,i,t,s)))){if(d=typeof u,m=ml[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Vo(u)),m)m(this,t,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",sr.lastIndex=0,sr.test(c)||(p=hn(c),g=hn(u),g?p!==g&&(c=hr(t,_,c,g)+g):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Qe(c)&&~c.indexOf("random(")&&(c=Vo(c)),hn(c+"")||c==="auto"||(c+=Xn.units[_]||hn(Di(t,_))||""),(c+"").charAt(1)==="="&&(c=Di(t,_))):c=Di(t,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in _i&&(_==="autoAlpha"&&(h===1&&Di(t,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,a.visibility),er(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=_i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in zi,v){if(this.styles.save(_),N=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Wn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=u,u=Wn(t,"perspective"),x?t.style.perspective=x:ur(t,"perspective")}f=parseFloat(u)}if(S||(R=t._gsap,R.renderTransform&&!e.parseTransform||qo(t,e.parseTransform),A=e.smoothOrigin!==!1&&R.smooth,S=this._pt=new Pn(this._pt,a,Ie,0,1,R.renderTransform,R,0,-1),S.dep=1),_==="scale")this._pt=new Pn(this._pt,R,"scaleY",R.scaleY,(y?ws(R.scaleY,y+f):f)-R.scaleY||0,Qc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Ln,0,a[Ln]),u=z0(u),R.svg?nu(t,u,0,A,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==R.zOrigin&&er(this,R,"zOrigin",R.zOrigin,g),er(this,a,_,gl(c),gl(u)));continue}else if(_==="svgOrigin"){nu(t,u,1,A,0,this);continue}else if(_ in em){G0(this,R,_,h,y?ws(h,y+u):u);continue}else if(_==="smoothOrigin"){er(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){W0(this,u,t);continue}}else _ in a||(_=Vs(_)||_);if(v||(f||f===0)&&(h||h===0)&&!T0.test(u)&&_ in a)p=(c+"").substr((h+"").length),f||(f=0),g=hn(u)||(_ in Xn.units?Xn.units[_]:p),p!==g&&(h=hr(t,_,c,g)),this._pt=new Pn(this._pt,v?R:a,_,h,(y?ws(h,y+f):f)-h,!v&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?R0:Qc),this._pt.u=g||0,v&&N!==u?(this._pt.b=c,this._pt.e=N,this._pt.r=A0):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=b0);else if(_ in a)B0.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,i,s);else if(_!=="parseTransform"){ph(_,u);continue}v||(_ in a?L.push(_,0,a[_]):typeof t[_]=="function"?L.push(_,2,t[_]()):L.push(_,1,c||t[_])),o.push(_)}}E&&qp(this)},render:function(t,e){if(e.tween._time||!wh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Di,aliases:_i,getSetter:function(t,e,n){var i=_i[e];return i&&i.indexOf(",")<0&&(e=i),e in zi&&e!==Ln&&(t._gsap.x||Di(t,"x"))?n&&df===n?e==="scale"?D0:L0:(df=n||{})&&(e==="scale"?I0:U0):t.style&&!hh(t.style[e])?C0:~e.indexOf("-")?P0:Mh(t,e)},core:{_removeProperty:ur,_getMatrix:Ah}};Dn.utils.checkPrefix=Vs;Dn.core.getStyleSaver=Jp;(function(r,t,e,n){var i=Cn(r+","+t+","+e,function(s){zi[s]=1});Cn(t,function(s){Xn.units[s]="deg",em[s]=1}),_i[i[13]]=r+","+t,Cn(n,function(s){var o=s.split(":");_i[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xn.units[r]="px"});Dn.registerPlugin(rm);var Yt=Dn.registerPlugin(rm)||Dn;Yt.core.Tween;function X0(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function q0(r,t,e){return t&&X0(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nn,Za,Vn,nr,ir,Rs,sm,Tr,Cs,om,Ni,oi,am,lm=function(){return nn||typeof window<"u"&&(nn=window.gsap)&&nn.registerPlugin&&nn},cm=1,Ms=[],ae=[],yi=[],Ao=Date.now,iu=function(t,e){return e},Y0=function(){var t=Cs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ae),i.push.apply(i,yi),ae=n,yi=i,iu=function(o,a){return e[o](a)}},or=function(t,e){return~yi.indexOf(t)&&yi[yi.indexOf(t)+1][e]},Ro=function(t){return!!~om.indexOf(t)},gn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},mn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},sa="scrollLeft",oa="scrollTop",ru=function(){return Ni&&Ni.isPressed||ae.cache++},_l=function(t,e){var n=function i(s){if(s||s===0){cm&&(Vn.history.scrollRestoration="manual");var o=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),t(s),i.cacheID=ae.cache,o&&iu("ss",s)}else(e||ae.cache!==i.cacheID||iu("ref"))&&(i.cacheID=ae.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Sn={s:sa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_l(function(r){return arguments.length?Vn.scrollTo(r,We.sc()):Vn.pageXOffset||nr[sa]||ir[sa]||Rs[sa]||0})},We={s:oa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:_l(function(r){return arguments.length?Vn.scrollTo(Sn.sc(),r):Vn.pageYOffset||nr[oa]||ir[oa]||Rs[oa]||0})},wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||nn.utils.toArray)(t)[0]||(typeof t=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},$0=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},fr=function(t,e){var n=e.s,i=e.sc;Ro(t)&&(t=nr.scrollingElement||ir);var s=ae.indexOf(t),o=i===We.sc?1:2;!~s&&(s=ae.push(t)-1),ae[s+o]||gn(t,"scroll",ru);var a=ae[s+o],l=a||(ae[s+o]=_l(or(t,n),!0)||(Ro(t)?i:_l(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=nn.getProperty(t,"scrollBehavior")==="smooth"),l},su=function(t,e,n){var i=t,s=t,o=Ao(),a=o,l=e||50,c=Math.max(500,l*3),u=function(m,_){var p=Ao();_||p-o>l?(s=i,i=m,a=o,o=p):n?i+=m:i=s+(m-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(m){var _=a,p=s,g=Ao();return(m||m===0)&&m!==i&&u(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},no=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Mf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},um=function(){Cs=nn.core.globals().ScrollTrigger,Cs&&Cs.core&&Y0()},hm=function(t){return nn=t||lm(),!Za&&nn&&typeof document<"u"&&document.body&&(Vn=window,nr=document,ir=nr.documentElement,Rs=nr.body,om=[Vn,nr,ir,Rs],nn.utils.clamp,am=nn.core.context||function(){},Tr="onpointerenter"in Rs?"pointer":"mouse",sm=ze.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,oi=ze.eventTypes=("ontouchstart"in ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cm=0},500),Za=1),Cs||um(),Za};Sn.op=We;ae.cache=0;var ze=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Za||hm(nn)||console.warn("Please gsap.registerPlugin(Observer)"),Cs||um();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,y=n.onDrag,v=n.onPress,S=n.onRelease,R=n.onRight,A=n.onLeft,E=n.onUp,L=n.onDown,N=n.onChangeX,x=n.onChangeY,M=n.onChange,I=n.onToggleX,z=n.onToggleY,D=n.onHover,H=n.onHoverEnd,k=n.onMove,X=n.ignoreCheck,V=n.isNormalizer,lt=n.onGestureStart,b=n.onGestureEnd,st=n.onWheel,Ut=n.onEnable,Nt=n.onDisable,Z=n.onClick,Q=n.scrollSpeed,_t=n.capture,ht=n.allowClicks,St=n.lockAxis,Ct=n.onLockAxis;this.target=a=wn(a)||ir,this.vars=n,d&&(d=nn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Vn.getComputedStyle(Rs).lineHeight)||22);var Bt,Ht,at,C,dt,pt,ut,O=this,Pt=0,Mt=0,P=n.passive||!u&&n.passive!==!1,T=fr(a,Sn),q=fr(a,We),nt=T(),ct=q(),et=~o.indexOf("touch")&&!~o.indexOf("pointer")&&oi[0]==="pointerdown",Dt=Ro(a),ft=a.ownerDocument||nr,tt=[0,0,0],vt=[0,0,0],U=0,Y=function(){return U=Ao()},j=function(Ft,le){return(O.event=Ft)&&d&&$0(Ft.target,d)||le&&et&&Ft.pointerType!=="touch"||X&&X(Ft,le)},xt=function(){O._vx.reset(),O._vy.reset(),Ht.pause(),f&&f(O)},ot=function(){var Ft=O.deltaX=Mf(tt),le=O.deltaY=Mf(vt),wt=Math.abs(Ft)>=i,Kt=Math.abs(le)>=i;M&&(wt||Kt)&&M(O,Ft,le,tt,vt),wt&&(R&&O.deltaX>0&&R(O),A&&O.deltaX<0&&A(O),N&&N(O),I&&O.deltaX<0!=Pt<0&&I(O),Pt=O.deltaX,tt[0]=tt[1]=tt[2]=0),Kt&&(L&&O.deltaY>0&&L(O),E&&O.deltaY<0&&E(O),x&&x(O),z&&O.deltaY<0!=Mt<0&&z(O),Mt=O.deltaY,vt[0]=vt[1]=vt[2]=0),(C||at)&&(k&&k(O),at&&(p&&at===1&&p(O),y&&y(O),at=0),C=!1),pt&&!(pt=!1)&&Ct&&Ct(O),dt&&(st(O),dt=!1),Bt=0},Tt=function(Ft,le,wt){tt[wt]+=Ft,vt[wt]+=le,O._vx.update(Ft),O._vy.update(le),c?Bt||(Bt=requestAnimationFrame(ot)):ot()},Et=function(Ft,le){St&&!ut&&(O.axis=ut=Math.abs(Ft)>Math.abs(le)?"x":"y",pt=!0),ut!=="y"&&(tt[2]+=Ft,O._vx.update(Ft,!0)),ut!=="x"&&(vt[2]+=le,O._vy.update(le,!0)),c?Bt||(Bt=requestAnimationFrame(ot)):ot()},kt=function(Ft){if(!j(Ft,1)){Ft=no(Ft,u);var le=Ft.clientX,wt=Ft.clientY,Kt=le-O.x,Gt=wt-O.y,Jt=O.isDragging;O.x=le,O.y=wt,(Jt||(Kt||Gt)&&(Math.abs(O.startX-le)>=s||Math.abs(O.startY-wt)>=s))&&(at||(at=Jt?2:1),Jt||(O.isDragging=!0),Et(Kt,Gt))}},F=O.onPress=function(Ot){j(Ot,1)||Ot&&Ot.button||(O.axis=ut=null,Ht.pause(),O.isPressed=!0,Ot=no(Ot),Pt=Mt=0,O.startX=O.x=Ot.clientX,O.startY=O.y=Ot.clientY,O._vx.reset(),O._vy.reset(),gn(V?a:ft,oi[1],kt,P,!0),O.deltaX=O.deltaY=0,v&&v(O))},it=O.onRelease=function(Ot){if(!j(Ot,1)){mn(V?a:ft,oi[1],kt,!0);var Ft=!isNaN(O.y-O.startY),le=O.isDragging,wt=le&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Kt=no(Ot);!wt&&Ft&&(O._vx.reset(),O._vy.reset(),u&&ht&&nn.delayedCall(.08,function(){if(Ao()-U>300&&!Ot.defaultPrevented){if(Ot.target.click)Ot.target.click();else if(ft.createEvent){var Gt=ft.createEvent("MouseEvents");Gt.initMouseEvent("click",!0,!0,Vn,1,Kt.screenX,Kt.screenY,Kt.clientX,Kt.clientY,!1,!1,!1,!1,0,null),Ot.target.dispatchEvent(Gt)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,f&&le&&!V&&Ht.restart(!0),at&&ot(),g&&le&&g(O),S&&S(O,wt)}},J=function(Ft){return Ft.touches&&Ft.touches.length>1&&(O.isGesturing=!0)&&lt(Ft,O.isDragging)},rt=function(){return(O.isGesturing=!1)||b(O)},mt=function(Ft){if(!j(Ft)){var le=T(),wt=q();Tt((le-nt)*Q,(wt-ct)*Q,1),nt=le,ct=wt,f&&Ht.restart(!0)}},gt=function(Ft){if(!j(Ft)){Ft=no(Ft,u),st&&(dt=!0);var le=(Ft.deltaMode===1?l:Ft.deltaMode===2?Vn.innerHeight:1)*m;Tt(Ft.deltaX*le,Ft.deltaY*le,0),f&&!V&&Ht.restart(!0)}},qt=function(Ft){if(!j(Ft)){var le=Ft.clientX,wt=Ft.clientY,Kt=le-O.x,Gt=wt-O.y;O.x=le,O.y=wt,C=!0,f&&Ht.restart(!0),(Kt||Gt)&&Et(Kt,Gt)}},ue=function(Ft){O.event=Ft,D(O)},Te=function(Ft){O.event=Ft,H(O)},ie=function(Ft){return j(Ft)||no(Ft,u)&&Z(O)};Ht=O._dc=nn.delayedCall(h||.25,xt).pause(),O.deltaX=O.deltaY=0,O._vx=su(0,50,!0),O._vy=su(0,50,!0),O.scrollX=T,O.scrollY=q,O.isDragging=O.isGesturing=O.isPressed=!1,am(this),O.enable=function(Ot){return O.isEnabled||(gn(Dt?ft:a,"scroll",ru),o.indexOf("scroll")>=0&&gn(Dt?ft:a,"scroll",mt,P,_t),o.indexOf("wheel")>=0&&gn(a,"wheel",gt,P,_t),(o.indexOf("touch")>=0&&sm||o.indexOf("pointer")>=0)&&(gn(a,oi[0],F,P,_t),gn(ft,oi[2],it),gn(ft,oi[3],it),ht&&gn(a,"click",Y,!0,!0),Z&&gn(a,"click",ie),lt&&gn(ft,"gesturestart",J),b&&gn(ft,"gestureend",rt),D&&gn(a,Tr+"enter",ue),H&&gn(a,Tr+"leave",Te),k&&gn(a,Tr+"move",qt)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=C=at=!1,O._vx.reset(),O._vy.reset(),nt=T(),ct=q(),Ot&&Ot.type&&F(Ot),Ut&&Ut(O)),O},O.disable=function(){O.isEnabled&&(Ms.filter(function(Ot){return Ot!==O&&Ro(Ot.target)}).length||mn(Dt?ft:a,"scroll",ru),O.isPressed&&(O._vx.reset(),O._vy.reset(),mn(V?a:ft,oi[1],kt,!0)),mn(Dt?ft:a,"scroll",mt,_t),mn(a,"wheel",gt,_t),mn(a,oi[0],F,_t),mn(ft,oi[2],it),mn(ft,oi[3],it),mn(a,"click",Y,!0),mn(a,"click",ie),mn(ft,"gesturestart",J),mn(ft,"gestureend",rt),mn(a,Tr+"enter",ue),mn(a,Tr+"leave",Te),mn(a,Tr+"move",qt),O.isEnabled=O.isPressed=O.isDragging=!1,Nt&&Nt(O))},O.kill=O.revert=function(){O.disable();var Ot=Ms.indexOf(O);Ot>=0&&Ms.splice(Ot,1),Ni===O&&(Ni=0)},Ms.push(O),V&&Ro(a)&&(Ni=O),O.enable(_)},q0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();ze.version="3.15.0";ze.create=function(r){return new ze(r)};ze.register=hm;ze.getAll=function(){return Ms.slice()};ze.getById=function(r){return Ms.filter(function(t){return t.vars.id===r})[0]};lm()&&nn.registerPlugin(ze);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zt,_s,oe,ve,kn,me,Rh,vl,Yo,Co,_o,aa,ln,Il,ou,xn,Ef,Tf,vs,fm,jl,dm,vn,au,pm,mm,Ji,lu,Ch,Ps,Ph,Po,cu,Ql,la=1,cn=Date.now,tc=cn(),ei=0,vo=0,wf=function(t,e,n){var i=Bn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},bf=function(t,e){return e&&(!Bn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},K0=function r(){return vo&&requestAnimationFrame(r)},Af=function(){return Il=1},Rf=function(){return Il=0},di=function(t){return t},xo=function(t){return Math.round(t*1e5)/1e5||0},gm=function(){return typeof window<"u"},_m=function(){return zt||gm()&&(zt=window.gsap)&&zt.registerPlugin&&zt},Hr=function(t){return!!~Rh.indexOf(t)},vm=function(t){return(t==="Height"?Ph:oe["inner"+t])||kn["client"+t]||me["client"+t]},xm=function(t){return or(t,"getBoundingClientRect")||(Hr(t)?function(){return el.width=oe.innerWidth,el.height=Ph,el}:function(){return Ii(t)})},Z0=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=or(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?vm(s):t["client"+s])||0}},J0=function(t,e){return!e||~yi.indexOf(t)?xm(t):function(){return el}},vi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=or(t,n))?o()-xm(t)()[s]:Hr(t)?(kn[n]||me[n])-vm(i):t[n]-t["offset"+i])},ca=function(t,e){for(var n=0;n<vs.length;n+=3)(!e||~e.indexOf(vs[n+1]))&&t(vs[n],vs[n+1],vs[n+2])},Bn=function(t){return typeof t=="string"},fn=function(t){return typeof t=="function"},yo=function(t){return typeof t=="number"},wr=function(t){return typeof t=="object"},io=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Qr=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ts=Math.abs,ym="left",Sm="top",Lh="right",Dh="bottom",Br="width",zr="height",Lo="Right",Do="Left",Io="Top",Uo="Bottom",He="padding",Jn="margin",Gs="Width",Ih="Height",Ge="px",jn=function(t){return oe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},j0=function(t){var e=jn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Cf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ii=function(t,e){var n=e&&jn(t)[ou]!=="matrix(1, 0, 0, 1, 0, 0)"&&zt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},xl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Mm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Q0=function(t){return function(e){return zt.utils.snap(Mm(t),e)}},Uh=function(t){var e=zt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},t_=function(t){return function(e,n){return Uh(Mm(t))(e,n.direction)}},ua=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},je=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ha=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Pf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},fa={toggleActions:"play",anticipatePin:0},yl={top:0,left:0,center:.5,bottom:1,right:1},Ja=function(t,e){if(Bn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in yl?yl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},da=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,m=ve.createElement("div"),_=Hr(n)||or(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?me:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,v=y?c:u,S="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(i===We?Lh:Dh)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=S,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],ja(m,0,i,y),m},ja=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Gs]=1,s["border"+a+Gs]=0,s[n.p]=e+"px",zt.set(t,s)},se=[],uu={},$o,Lf=function(){return cn()-ei>34&&($o||($o=requestAnimationFrame(Fi)))},es=function(){(!vn||!vn.isPressed||vn.startX>me.clientWidth)&&(ae.cache++,vn?$o||($o=requestAnimationFrame(Fi)):Fi(),ei||Gr("scrollStart"),ei=cn())},ec=function(){mm=oe.innerWidth,pm=oe.innerHeight},So=function(t){ae.cache++,(t===!0||!ln&&!dm&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!au||mm!==oe.innerWidth||Math.abs(oe.innerHeight-pm)>oe.innerHeight*.25))&&vl.restart(!0)},Vr={},e_=[],Em=function r(){return Je(jt,"scrollEnd",r)||Lr(!0)},Gr=function(t){return Vr[t]&&Vr[t].map(function(e){return e()})||e_},Fn=[],Tm=function(t){for(var e=0;e<Fn.length;e+=5)(!t||Fn[e+4]&&Fn[e+4].query===t)&&(Fn[e].style.cssText=Fn[e+1],Fn[e].getBBox&&Fn[e].setAttribute("transform",Fn[e+2]||""),Fn[e+3].uncache=1)},wm=function(){return ae.forEach(function(t){return fn(t)&&++t.cacheID&&(t.rec=t())})},Nh=function(t,e){var n;for(xn=0;xn<se.length;xn++)n=se[xn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Po=!0,e&&Tm(e),e||Gr("revert")},bm=function(t,e){ae.cache++,(e||!yn)&&ae.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),Bn(t)&&(oe.history.scrollRestoration=Ch=t)},yn,kr=0,Df,n_=function(){if(Df!==kr){var t=Df=kr;requestAnimationFrame(function(){return t===kr&&Lr(!0)})}},Am=function(){me.appendChild(Ps),Ph=!vn&&Ps.offsetHeight||oe.innerHeight,me.removeChild(Ps)},If=function(t){return Yo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Lr=function(t,e){if(kn=ve.documentElement,me=ve.body,Rh=[oe,ve,kn,me],ei&&!t&&!Po){je(jt,"scrollEnd",Em);return}Am(),yn=jt.isRefreshing=!0,Po||wm();var n=Gr("refreshInit");fm&&jt.sort(),e||Nh(),ae.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),se.slice(0).forEach(function(i){return i.refresh()}),Po=!1,se.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),cu=1,If(!0),se.forEach(function(i){var s=vi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),If(!1),cu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ae.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),bm(Ch,1),vl.pause(),kr++,yn=2,Fi(2),se.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),yn=jt.isRefreshing=!1,Gr("refresh")},hu=0,Qa=1,No,Fi=function(t){if(t===2||!yn&&!Po){jt.isUpdating=!0,No&&No.update(0);var e=se.length,n=cn(),i=n-tc>=50,s=e&&se[0].scroll();if(Qa=hu>s?-1:1,yn||(hu=s),i&&(ei&&!Il&&n-ei>200&&(ei=0,Gr("scrollEnd")),_o=tc,tc=n),Qa<0){for(xn=e;xn-- >0;)se[xn]&&se[xn].update(0,i);Qa=1}else for(xn=0;xn<e;xn++)se[xn]&&se[xn].update(0,i);jt.isUpdating=!1}$o=0},fu=[ym,Sm,Dh,Lh,Jn+Uo,Jn+Lo,Jn+Io,Jn+Do,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],tl=fu.concat([Br,zr,"boxSizing","max"+Gs,"max"+Ih,"position",Jn,He,He+Io,He+Lo,He+Uo,He+Do]),i_=function(t,e,n){Ls(n);var i=t._gsap;if(i.spacerIsNative)Ls(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},nc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=fu.length,o=e.style,a=t.style,l;s--;)l=fu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Dh]=a[Lh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Br]=xl(t,Sn)+Ge,o[zr]=xl(t,We)+Ge,o[He]=a[Jn]=a[Sm]=a[ym]="0",Ls(i),a[Br]=a["max"+Gs]=n[Br],a[zr]=a["max"+Ih]=n[zr],a[He]=n[He],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},r_=/([A-Z])/g,Ls=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||zt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(r_,"-$1").toLowerCase())}},pa=function(t){for(var e=tl.length,n=t.style,i=[],s=0;s<e;s++)i.push(tl[s],n[tl[s]]);return i.t=t,i},s_=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},el={left:0,top:0},Uf=function(t,e,n,i,s,o,a,l,c,u,f,h,d,m){fn(t)&&(t=t(l)),Bn(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Ja("0"+t.substr(3),n):0));var _=d?d.time():0,p,g,y;if(d&&d.seek(0),isNaN(t)||(t=+t),yo(t))d&&(t=zt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),a&&ja(a,n,i,!0);else{fn(e)&&(e=e(l));var v=(t||"0").split(" "),S,R,A,E;y=wn(e,l)||me,S=Ii(y)||{},(!S||!S.left&&!S.top)&&jn(y).display==="none"&&(E=y.style.display,y.style.display="block",S=Ii(y),E?y.style.display=E:y.style.removeProperty("display")),R=Ja(v[0],S[i.d]),A=Ja(v[1]||"0",n),t=S[i.p]-c[i.p]-u+R+s-A,a&&ja(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var L=t+n,N=o._isStart;p="scroll"+i.d2,ja(o,L,i,N&&L>20||!N&&(f?Math.max(me[p],kn[p]):o.parentNode[p])<=L+1),f&&(c=Ii(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ge))}return d&&y&&(p=Ii(y),d.seek(h),g=Ii(y),d._caScrollDist=p[i.p]-g[i.p],t=t/d._caScrollDist*h),d&&d.seek(_),d?t:Math.round(t)},o_=/(webkit|moz|length|cssText|inset)/i,Nf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===me){t._stOrig=s.cssText,a=jn(t);for(o in a)!+o&&!o_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;zt.core.getCache(t).uncache=1,e.appendChild(t)}},Rm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ma=function(t,e,n){var i={};i[e.p]="+="+n,zt.set(t,i)},Of=function(t,e){var n=fr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,m={};c=c||n();var _=Rm(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ae.cache++,o.tween&&Fi()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=zt.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},je(t,"wheel",n.wheelHandler),jt.isTouch&&je(t,"touchmove",n.wheelHandler),s},jt=function(){function r(e,n){_s||r.register(zt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),lu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!vo){this.update=this.refresh=this.kill=di;return}n=Cf(Bn(n)||yo(n)||n.nodeType?{trigger:n}:n,fa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,v=s.once,S=s.snap,R=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,L=s.fastScrollEnd,N=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:We,M=!f&&f!==0,I=wn(n.scroller||oe),z=zt.core.getCache(I),D=Hr(I),H=("pinType"in n?n.pinType:or(I,"pinType")||D&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=M&&n.toggleActions.split(" "),V="markers"in n?n.markers:fa.markers,lt=D?0:parseFloat(jn(I)["border"+x.p2+Gs])||0,b=this,st=n.onRefreshInit&&function(){return n.onRefreshInit(b)},Ut=Z0(I,D,x),Nt=J0(I,D),Z=0,Q=0,_t=0,ht=fr(I,x),St,Ct,Bt,Ht,at,C,dt,pt,ut,O,Pt,Mt,P,T,q,nt,ct,et,Dt,ft,tt,vt,U,Y,j,xt,ot,Tt,Et,kt,F,it,J,rt,mt,gt,qt,ue,Te;if(b._startClamp=b._endClamp=!1,b._dir=x,p*=45,b.scroller=I,b.scroll=E?E.time.bind(E):ht,Ht=ht(),b.vars=n,i=i||n.animation,"refreshPriority"in n&&(fm=1,n.refreshPriority===-9999&&(No=b)),z.tweenScroll=z.tweenScroll||{top:Of(I,We),left:Of(I,Sn)},b.tweenTo=St=z.tweenScroll[x.p],b.scrubDuration=function(wt){J=yo(wt)&&wt,J?it?it.duration(wt):it=zt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:J,paused:!0,onComplete:function(){return g&&g(b)}}):(it&&it.progress(1).kill(),it=0)},i&&(i.vars.lazy=!1,i._initted&&!b.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),b.animation=i.pause(),i.scrollTrigger=b,b.scrubDuration(f),kt=0,l||(l=i.vars.id)),S&&((!wr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in me.style&&zt.set(D?[me,kn]:I,{scrollBehavior:"auto"}),ae.forEach(function(wt){return fn(wt)&&wt.target===(D?ve.scrollingElement||kn:I)&&(wt.smooth=!1)}),Bt=fn(S.snapTo)?S.snapTo:S.snapTo==="labels"?Q0(i):S.snapTo==="labelsDirectional"?t_(i):S.directional!==!1?function(wt,Kt){return Uh(S.snapTo)(wt,cn()-Q<500?0:Kt.direction)}:zt.utils.snap(S.snapTo),rt=S.duration||{min:.1,max:2},rt=wr(rt)?Co(rt.min,rt.max):Co(rt,rt),mt=zt.delayedCall(S.delay||J/2||.1,function(){var wt=ht(),Kt=cn()-Q<500,Gt=St.tween;if((Kt||Math.abs(b.getVelocity())<10)&&!Gt&&!Il&&Z!==wt){var Jt=(wt-C)/T,Pe=i&&!M?i.totalProgress():Jt,Qt=Kt?0:(Pe-F)/(cn()-_o)*1e3||0,Re=zt.utils.clamp(-Jt,1-Jt,ts(Qt/2)*Qt/.185),Oe=Jt+(S.inertia===!1?0:Re),we,Se,_e=S,In=_e.onStart,be=_e.onInterrupt,w=_e.onComplete;if(we=Bt(Oe,b),yo(we)||(we=Oe),Se=Math.max(0,Math.round(C+we*T)),wt<=dt&&wt>=C&&Se!==wt){if(Gt&&!Gt._initted&&Gt.data<=ts(Se-wt))return;S.inertia===!1&&(Re=we-Jt),St(Se,{duration:rt(ts(Math.max(ts(Oe-Pe),ts(we-Pe))*.185/Qt/.05||0)),ease:S.ease||"power3",data:ts(Se-wt),onInterrupt:function(){return mt.restart(!0)&&be&&Qr(b,be)},onComplete:function(){b.update(),Z=ht(),i&&!M&&(it?it.resetTo("totalProgress",we,i._tTime/i._tDur):i.progress(we)),kt=F=i&&!M?i.totalProgress():b.progress,y&&y(b),w&&Qr(b,w)}},wt,Re*T,Se-wt-Re*T),In&&Qr(b,In,St.tween)}}else b.isActive&&Z!==wt&&mt.restart(!0)}).pause()),l&&(uu[l]=b),h=b.trigger=wn(h||d!==!0&&d),Te=h&&h._gsap&&h._gsap.stRevert,Te&&(Te=Te(b)),d=d===!0?h:wn(d),Bn(a)&&(a={targets:h,className:a}),d&&(m===!1||m===Jn||(m=!m&&d.parentNode&&d.parentNode.style&&jn(d.parentNode).display==="flex"?!1:He),b.pin=d,Ct=zt.core.getCache(d),Ct.spacer?q=Ct.pinState:(A&&(A=wn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ct.spacerIsNative=!!A,A&&(Ct.spacerState=pa(A))),Ct.spacer=et=A||ve.createElement("div"),et.classList.add("pin-spacer"),l&&et.classList.add("pin-spacer-"+l),Ct.pinState=q=pa(d)),n.force3D!==!1&&zt.set(d,{force3D:!0}),b.spacer=et=Ct.spacer,Et=jn(d),Y=Et[m+x.os2],ft=zt.getProperty(d),tt=zt.quickSetter(d,x.a,Ge),nc(d,et,Et),ct=pa(d)),V){Mt=wr(V)?Cf(V,Pf):Pf,O=da("scroller-start",l,I,x,Mt,0),Pt=da("scroller-end",l,I,x,Mt,0,O),Dt=O["offset"+x.op.d2];var ie=wn(or(I,"content")||I);pt=this.markerStart=da("start",l,ie,x,Mt,Dt,0,E),ut=this.markerEnd=da("end",l,ie,x,Mt,Dt,0,E),E&&(ue=zt.quickSetter([pt,ut],x.a,Ge)),!H&&!(yi.length&&or(I,"fixedMarkers")===!0)&&(j0(D?me:I),zt.set([O,Pt],{force3D:!0}),xt=zt.quickSetter(O,x.a,Ge),Tt=zt.quickSetter(Pt,x.a,Ge))}if(E){var Ot=E.vars.onUpdate,Ft=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){b.update(0,0,1),Ot&&Ot.apply(E,Ft||[])})}if(b.previous=function(){return se[se.indexOf(b)-1]},b.next=function(){return se[se.indexOf(b)+1]},b.revert=function(wt,Kt){if(!Kt)return b.kill(!0);var Gt=wt!==!1||!b.enabled,Jt=ln;Gt!==b.isReverted&&(Gt&&(gt=Math.max(ht(),b.scroll.rec||0),_t=b.progress,qt=i&&i.progress()),pt&&[pt,ut,O,Pt].forEach(function(Pe){return Pe.style.display=Gt?"none":"block"}),Gt&&(ln=b,b.update(Gt)),d&&(!R||!b.isActive)&&(Gt?i_(d,et,q):nc(d,et,jn(d),j)),Gt||b.update(Gt),ln=Jt,b.isReverted=Gt)},b.refresh=function(wt,Kt,Gt,Jt){if(!((ln||!b.enabled)&&!Kt)){if(d&&wt&&ei){je(r,"scrollEnd",Em);return}!yn&&st&&st(b),ln=b,St.tween&&!Gt&&(St.tween.kill(),St.tween=0),it&&it.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(re){return re.vars.immediateRender&&re.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Pe=Ut(),Qt=Nt(),Re=E?E.duration():vi(I,x),Oe=T<=.01||!T,we=0,Se=Jt||0,_e=wr(Gt)?Gt.end:n.end,In=n.endTrigger||h,be=wr(Gt)?Gt.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),w=b.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,b),W=h&&Math.max(0,se.indexOf(b))||0,$=W,K,G,yt,It,Rt,bt,Wt,Zt,Vt,he,ce,xe,Ke;for(V&&wr(Gt)&&(xe=zt.getProperty(O,x.p),Ke=zt.getProperty(Pt,x.p));$-- >0;)bt=se[$],bt.end||bt.refresh(0,1)||(ln=b),Wt=bt.pin,Wt&&(Wt===h||Wt===d||Wt===w)&&!bt.isReverted&&(he||(he=[]),he.unshift(bt),bt.revert(!0,!0)),bt!==se[$]&&(W--,$--);for(fn(be)&&(be=be(b)),be=wf(be,"start",b),C=Uf(be,h,Pe,x,ht(),pt,O,b,Qt,lt,H,Re,E,b._startClamp&&"_startClamp")||(d?-.001:0),fn(_e)&&(_e=_e(b)),Bn(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(Bn(be)?be.split(" ")[0]:"")+_e:(we=Ja(_e.substr(2),Pe),_e=Bn(be)?be:(E?zt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,C):C)+we,In=h)),_e=wf(_e,"end",b),dt=Math.max(C,Uf(_e||(In?"100% 0":Re),In,Pe,x,ht()+we,ut,Pt,b,Qt,lt,H,Re,E,b._endClamp&&"_endClamp"))||-.001,we=0,$=W;$--;)bt=se[$]||{},Wt=bt.pin,Wt&&bt.start-bt._pinPush<=C&&!E&&bt.end>0&&(K=bt.end-(b._startClamp?Math.max(0,bt.start):bt.start),(Wt===h&&bt.start-bt._pinPush<C||Wt===w)&&isNaN(be)&&(we+=K*(1-bt.progress)),Wt===d&&(Se+=K));if(C+=we,dt+=we,b._startClamp&&(b._startClamp+=we),b._endClamp&&!yn&&(b._endClamp=dt||-.001,dt=Math.min(dt,vi(I,x))),T=dt-C||(C-=.01)&&.001,Oe&&(_t=zt.utils.clamp(0,1,zt.utils.normalize(C,dt,gt))),b._pinPush=Se,pt&&we&&(K={},K[x.a]="+="+we,w&&(K[x.p]="-="+ht()),zt.set([pt,ut],K)),d&&!(cu&&b.end>=vi(I,x)))K=jn(d),It=x===We,yt=ht(),vt=parseFloat(ft(x.a))+Se,!Re&&dt>1&&(ce=(D?ve.scrollingElement||kn:I).style,ce={style:ce,value:ce["overflow"+x.a.toUpperCase()]},D&&jn(me)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ce.style["overflow"+x.a.toUpperCase()]="scroll")),nc(d,et,K),ct=pa(d),G=Ii(d,!0),Zt=H&&fr(I,It?Sn:We)(),m?(j=[m+x.os2,T+Se+Ge],j.t=et,$=m===He?xl(d,x)+T+Se:0,$&&(j.push(x.d,$+Ge),et.style.flexBasis!=="auto"&&(et.style.flexBasis=$+Ge)),Ls(j),w&&se.forEach(function(re){re.pin===w&&re.vars.pinSpacing!==!1&&(re._subPinOffset=!0)}),H&&ht(gt)):($=xl(d,x),$&&et.style.flexBasis!=="auto"&&(et.style.flexBasis=$+Ge)),H&&(Rt={top:G.top+(It?yt-C:Zt)+Ge,left:G.left+(It?Zt:yt-C)+Ge,boxSizing:"border-box",position:"fixed"},Rt[Br]=Rt["max"+Gs]=Math.ceil(G.width)+Ge,Rt[zr]=Rt["max"+Ih]=Math.ceil(G.height)+Ge,Rt[Jn]=Rt[Jn+Io]=Rt[Jn+Lo]=Rt[Jn+Uo]=Rt[Jn+Do]="0",Rt[He]=K[He],Rt[He+Io]=K[He+Io],Rt[He+Lo]=K[He+Lo],Rt[He+Uo]=K[He+Uo],Rt[He+Do]=K[He+Do],nt=s_(q,Rt,R),yn&&ht(0)),i?(Vt=i._initted,jl(1),i.render(i.duration(),!0,!0),U=ft(x.a)-vt+T+Se,ot=Math.abs(T-U)>1,H&&ot&&nt.splice(nt.length-2,2),i.render(0,!0,!0),Vt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),jl(0)):U=T,ce&&(ce.value?ce.style["overflow"+x.a.toUpperCase()]=ce.value:ce.style.removeProperty("overflow-"+x.a));else if(h&&ht()&&!E)for(G=h.parentNode;G&&G!==me;)G._pinOffset&&(C-=G._pinOffset,dt-=G._pinOffset),G=G.parentNode;he&&he.forEach(function(re){return re.revert(!1,!0)}),b.start=C,b.end=dt,Ht=at=yn?gt:ht(),!E&&!yn&&(Ht<gt&&ht(gt),b.scroll.rec=0),b.revert(!1,!0),Q=cn(),mt&&(Z=-1,mt.restart(!0)),ln=0,i&&M&&(i._initted||qt)&&i.progress()!==qt&&i.progress(qt||0,!0).render(i.time(),!0,!0),(Oe||_t!==b.progress||E||_||i&&!i._initted)&&(i&&!M&&(i._initted||_t||i.vars.immediateRender!==!1)&&i.totalProgress(E&&C<-.001&&!_t?zt.utils.normalize(C,dt,0):_t,!0),b.progress=Oe||(Ht-C)/T===_t?0:_t),d&&m&&(et._pinOffset=Math.round(b.progress*U)),it&&it.invalidate(),isNaN(xe)||(xe-=zt.getProperty(O,x.p),Ke-=zt.getProperty(Pt,x.p),ma(O,x,xe),ma(pt,x,xe-(Jt||0)),ma(Pt,x,Ke),ma(ut,x,Ke-(Jt||0))),Oe&&!yn&&b.update(),u&&!yn&&!P&&(P=!0,u(b),P=!1)}},b.getVelocity=function(){return(ht()-at)/(cn()-_o)*1e3||0},b.endAnimation=function(){io(b.callbackAnimation),i&&(it?it.progress(1):i.paused()?M||io(i,b.direction<0,1):io(i,i.reversed()))},b.labelToScroll=function(wt){return i&&i.labels&&(C||b.refresh()||C)+i.labels[wt]/i.duration()*T||0},b.getTrailing=function(wt){var Kt=se.indexOf(b),Gt=b.direction>0?se.slice(0,Kt).reverse():se.slice(Kt+1);return(Bn(wt)?Gt.filter(function(Jt){return Jt.vars.preventOverlaps===wt}):Gt).filter(function(Jt){return b.direction>0?Jt.end<=C:Jt.start>=dt})},b.update=function(wt,Kt,Gt){if(!(E&&!Gt&&!wt)){var Jt=yn===!0?gt:b.scroll(),Pe=wt?0:(Jt-C)/T,Qt=Pe<0?0:Pe>1?1:Pe||0,Re=b.progress,Oe,we,Se,_e,In,be,w,W;if(Kt&&(at=Ht,Ht=E?ht():Jt,S&&(F=kt,kt=i&&!M?i.totalProgress():Qt)),p&&d&&!ln&&!la&&ei&&(!Qt&&C<Jt+(Jt-at)/(cn()-_o)*p?Qt=1e-4:Qt===1&&dt>Jt+(Jt-at)/(cn()-_o)*p&&(Qt=.9999)),Qt!==Re&&b.enabled){if(Oe=b.isActive=!!Qt&&Qt<1,we=!!Re&&Re<1,be=Oe!==we,In=be||!!Qt!=!!Re,b.direction=Qt>Re?1:-1,b.progress=Qt,In&&!ln&&(Se=Qt&&!Re?0:Qt===1?1:Re===1?2:3,M&&(_e=!be&&X[Se+1]!=="none"&&X[Se+1]||X[Se],W=i&&(_e==="complete"||_e==="reset"||_e in i))),N&&(be||W)&&(W||f||!i)&&(fn(N)?N(b):b.getTrailing(N).forEach(function(yt){return yt.endAnimation()})),M||(it&&!ln&&!la?(it._dp._time-it._start!==it._time&&it.render(it._dp._time-it._start),it.resetTo?it.resetTo("totalProgress",Qt,i._tTime/i._tDur):(it.vars.totalProgress=Qt,it.invalidate().restart())):i&&i.totalProgress(Qt,!!(ln&&(Q||wt)))),d){if(wt&&m&&(et.style[m+x.os2]=Y),!H)tt(xo(vt+U*Qt));else if(In){if(w=!wt&&Qt>Re&&dt+1>Jt&&Jt+1>=vi(I,x),R)if(!wt&&(Oe||w)){var $=Ii(d,!0),K=Jt-C;Nf(d,me,$.top+(x===We?K:0)+Ge,$.left+(x===We?0:K)+Ge)}else Nf(d,et);Ls(Oe||w?nt:ct),ot&&Qt<1&&Oe||tt(vt+(Qt===1&&!w?U:0))}}S&&!St.tween&&!ln&&!la&&mt.restart(!0),a&&(be||v&&Qt&&(Qt<1||!Ql))&&Yo(a.targets).forEach(function(yt){return yt.classList[Oe||v?"add":"remove"](a.className)}),o&&!M&&!wt&&o(b),In&&!ln?(M&&(W&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),o&&o(b)),(be||!Ql)&&(c&&be&&Qr(b,c),k[Se]&&Qr(b,k[Se]),v&&(Qt===1?b.kill(!1,1):k[Se]=0),be||(Se=Qt===1?1:3,k[Se]&&Qr(b,k[Se]))),L&&!Oe&&Math.abs(b.getVelocity())>(yo(L)?L:2500)&&(io(b.callbackAnimation),it?it.progress(1):io(i,_e==="reverse"?1:!Qt,1))):M&&o&&!ln&&o(b)}if(Tt){var G=E?Jt/E.duration()*(E._caScrollDist||0):Jt;xt(G+(O._isFlipped?1:0)),Tt(G)}ue&&ue(-Jt/E.duration()*(E._caScrollDist||0))}},b.enable=function(wt,Kt){b.enabled||(b.enabled=!0,je(I,"resize",So),D||je(I,"scroll",es),st&&je(r,"refreshInit",st),wt!==!1&&(b.progress=_t=0,Ht=at=Z=ht()),Kt!==!1&&b.refresh())},b.getTween=function(wt){return wt&&St?St.tween:it},b.setPositions=function(wt,Kt,Gt,Jt){if(E){var Pe=E.scrollTrigger,Qt=E.duration(),Re=Pe.end-Pe.start;wt=Pe.start+Re*wt/Qt,Kt=Pe.start+Re*Kt/Qt}b.refresh(!1,!1,{start:bf(wt,Gt&&!!b._startClamp),end:bf(Kt,Gt&&!!b._endClamp)},Jt),b.update()},b.adjustPinSpacing=function(wt){if(j&&wt){var Kt=j.indexOf(x.d)+1;j[Kt]=parseFloat(j[Kt])+wt+Ge,j[1]=parseFloat(j[1])+wt+Ge,Ls(j)}},b.disable=function(wt,Kt){if(wt!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,Kt||it&&it.pause(),gt=0,Ct&&(Ct.uncache=1),st&&Je(r,"refreshInit",st),mt&&(mt.pause(),St.tween&&St.tween.kill()&&(St.tween=0)),!D)){for(var Gt=se.length;Gt--;)if(se[Gt].scroller===I&&se[Gt]!==b)return;Je(I,"resize",So),D||Je(I,"scroll",es)}},b.kill=function(wt,Kt){b.disable(wt,Kt),it&&!Kt&&it.kill(),l&&delete uu[l];var Gt=se.indexOf(b);Gt>=0&&se.splice(Gt,1),Gt===xn&&Qa>0&&xn--,Gt=0,se.forEach(function(Jt){return Jt.scroller===b.scroller&&(Gt=1)}),Gt||yn||(b.scroll.rec=0),i&&(i.scrollTrigger=null,wt&&i.revert({kill:!1}),Kt||i.kill()),pt&&[pt,ut,O,Pt].forEach(function(Jt){return Jt.parentNode&&Jt.parentNode.removeChild(Jt)}),No===b&&(No=0),d&&(Ct&&(Ct.uncache=1),Gt=0,se.forEach(function(Jt){return Jt.pin===d&&Gt++}),Gt||(Ct.spacer=0)),n.onKill&&n.onKill(b)},se.push(b),b.enable(!1,!1),Te&&Te(b),i&&i.add&&!T){var le=b.update;b.update=function(){b.update=le,ae.cache++,C||dt||b.refresh()},zt.delayedCall(.01,b.update),T=.01,C=dt=0}else b.refresh();d&&n_()},r.register=function(n){return _s||(zt=n||_m(),gm()&&window.document&&r.enable(),_s=vo),_s},r.defaults=function(n){if(n)for(var i in n)fa[i]=n[i];return fa},r.disable=function(n,i){vo=0,se.forEach(function(o){return o[i?"kill":"disable"](n)}),Je(oe,"wheel",es),Je(ve,"scroll",es),clearInterval(aa),Je(ve,"touchcancel",di),Je(me,"touchstart",di),ua(Je,ve,"pointerdown,touchstart,mousedown",Af),ua(Je,ve,"pointerup,touchend,mouseup",Rf),vl.kill(),ca(Je);for(var s=0;s<ae.length;s+=3)ha(Je,ae[s],ae[s+1]),ha(Je,ae[s],ae[s+2])},r.enable=function(){if(oe=window,ve=document,kn=ve.documentElement,me=ve.body,zt){if(Yo=zt.utils.toArray,Co=zt.utils.clamp,lu=zt.core.context||di,jl=zt.core.suppressOverwrites||di,Ch=oe.history.scrollRestoration||"auto",hu=oe.pageYOffset||0,zt.core.globals("ScrollTrigger",r),me){vo=1,Ps=document.createElement("div"),Ps.style.height="100vh",Ps.style.position="absolute",Am(),K0(),ze.register(zt),r.isTouch=ze.isTouch,Ji=ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),au=ze.isTouch===1,je(oe,"wheel",es),Rh=[oe,ve,kn,me],zt.matchMedia?(r.matchMedia=function(u){var f=zt.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},zt.addEventListener("matchMediaInit",function(){wm(),Nh()}),zt.addEventListener("matchMediaRevert",function(){return Tm()}),zt.addEventListener("matchMedia",function(){Lr(0,1),Gr("matchMedia")}),zt.matchMedia().add("(orientation: portrait)",function(){return ec(),ec})):console.warn("Requires GSAP 3.11.0 or later"),ec(),je(ve,"scroll",es);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,o=zt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ii(me),We.m=Math.round(a.top+We.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),aa=setInterval(Lf,250),zt.delayedCall(.5,function(){return la=0}),je(ve,"touchcancel",di),je(me,"touchstart",di),ua(je,ve,"pointerdown,touchstart,mousedown",Af),ua(je,ve,"pointerup,touchend,mouseup",Rf),ou=zt.utils.checkPrefix("transform"),tl.push(ou),_s=cn(),vl=zt.delayedCall(.2,Lr).pause(),vs=[ve,"visibilitychange",function(){var u=oe.innerWidth,f=oe.innerHeight;ve.hidden?(Ef=u,Tf=f):(Ef!==u||Tf!==f)&&So()},ve,"DOMContentLoaded",Lr,oe,"load",Lr,oe,"resize",So],ca(je),se.forEach(function(u){return u.enable(0,1)}),l=0;l<ae.length;l+=3)ha(Je,ae[l],ae[l+1]),ha(Je,ae[l],ae[l+2])}else if(ve){var c=function u(){r.enable(),ve.removeEventListener("DOMContentLoaded",u)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Ql=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(aa)||(aa=i)&&setInterval(Lf,i),"ignoreMobileResize"in n&&(au=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ca(Je)||ca(je,n.autoRefreshEvents||"none"),dm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),o=ae.indexOf(s),a=Hr(s);~o&&ae.splice(o,a?6:2),i&&(a?yi.unshift(oe,i,me,i,kn,i):yi.unshift(s,i))},r.clearMatchMedia=function(n){se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Bn(n)?wn(n):n).getBoundingClientRect(),a=o[s?Br:zr]*i||0;return s?o.right-a>0&&o.left+a<oe.innerWidth:o.bottom-a>0&&o.top+a<oe.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=wn(n));var o=n.getBoundingClientRect(),a=o[s?Br:zr],l=i==null?a/2:i in yl?yl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/oe.innerWidth:(o.top+l)/oe.innerHeight},r.killAll=function(n){if(se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Vr.killAll||[];Vr={},i.forEach(function(s){return s()})}},r}();jt.version="3.15.0";jt.saveStyles=function(r){return r?Yo(r).forEach(function(t){if(t&&t.style){var e=Fn.indexOf(t);e>=0&&Fn.splice(e,5),Fn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),zt.core.getCache(t),lu())}}):Fn};jt.revert=function(r,t){return Nh(!r,t)};jt.create=function(r,t){return new jt(r,t)};jt.refresh=function(r){return r?So(!0):(_s||jt.register())&&Lr(!0)};jt.update=function(r){return++ae.cache&&Fi(r===!0?2:0)};jt.clearScrollMemory=bm;jt.maxScroll=function(r,t){return vi(r,t?Sn:We)};jt.getScrollFunc=function(r,t){return fr(wn(r),t?Sn:We)};jt.getById=function(r){return uu[r]};jt.getAll=function(){return se.filter(function(r){return r.vars.id!=="ScrollSmoother"})};jt.isScrolling=function(){return!!ei};jt.snapDirectional=Uh;jt.addEventListener=function(r,t){var e=Vr[r]||(Vr[r]=[]);~e.indexOf(t)||e.push(t)};jt.removeEventListener=function(r,t){var e=Vr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var f=[],h=[],d=zt.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(m){f.length||d.restart(!0),f.push(m.trigger),h.push(m),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&fn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return fn(s)&&(s=s(),je(jt,"refresh",function(){return s=t.batchMax()})),Yo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(jt.create(c))}),e};var Ff=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},ic=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ze.isTouch?" pinch-zoom":""):"none",t===kn&&r(me,e)},ga={auto:1,scroll:1},a_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||zt.core.getCache(s),a=cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ga[(l=jn(s)).overflowY]||ga[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Hr(s)&&(ga[(l=jn(s)).overflowY]||ga[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Cm=function(t,e,n,i){return ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&a_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&je(ve,ze.eventTypes[0],zf,!1,!0)},onDisable:function(){return Je(ve,ze.eventTypes[0],zf,!0)}})},l_=/(input|label|select|textarea)/i,Bf,zf=function(t){var e=l_.test(t.target.tagName);(e||Bf)&&(t._gsapAllow=!0,Bf=e)},c_=function(t){wr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=wn(t.target)||kn,u=zt.core.globals().ScrollSmoother,f=u&&u.get(),h=Ji&&(t.content&&wn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=fr(c,We),m=fr(c,Sn),_=1,p=(ze.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,g=0,y=fn(i)?function(){return i(a)}:function(){return i||2.8},v,S,R=Cm(c,t.type,!0,s),A=function(){return S=!1},E=di,L=di,N=function(){l=vi(c,We),L=Co(Ji?1:0,l),n&&(E=Co(0,vi(c,Sn))),v=kr},x=function(){h._gsap.y=xo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},M=function(){if(S){requestAnimationFrame(A);var V=xo(a.deltaY/2),lt=L(d.v-V);if(h&&lt!==d.v+d.offset){d.offset=lt-d.v;var b=xo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",h._gsap.y=b+"px",d.cacheID=ae.cache,Fi()}return!0}d.offset&&x(),S=!0},I,z,D,H,k=function(){N(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return h&&zt.set(h,{y:"+=0"}),t.ignoreCheck=function(X){return Ji&&X.type==="touchmove"&&M()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){S=!1;var X=_;_=xo((oe.visualViewport&&oe.visualViewport.scale||1)/p),I.pause(),X!==_&&ic(c,_>1.01?!0:n?!1:"x"),z=m(),D=d(),N(),v=kr},t.onRelease=t.onGestureStart=function(X,V){if(d.offset&&x(),!V)H.restart(!0);else{ae.cache++;var lt=y(),b,st;n&&(b=m(),st=b+lt*.05*-X.velocityX/.227,lt*=Ff(m,b,st,vi(c,Sn)),I.vars.scrollX=E(st)),b=d(),st=b+lt*.05*-X.velocityY/.227,lt*=Ff(d,b,st,vi(c,We)),I.vars.scrollY=L(st),I.invalidate().duration(lt).play(.01),(Ji&&I.vars.scrollY>=l||b>=l-1)&&zt.to({},{onUpdate:k,duration:lt})}o&&o(X)},t.onWheel=function(){I._ts&&I.pause(),cn()-g>1e3&&(v=0,g=cn())},t.onChange=function(X,V,lt,b,st){if(kr!==v&&N(),V&&n&&m(E(b[2]===V?z+(X.startX-X.x):m()+V-b[1])),lt){d.offset&&x();var Ut=st[2]===lt,Nt=Ut?D+X.startY-X.y:d()+lt-st[1],Z=L(Nt);Ut&&Nt!==Z&&(D+=Z-Nt),d(Z)}(lt||V)&&Fi()},t.onEnable=function(){ic(c,n?!1:"x"),jt.addEventListener("refresh",k),je(oe,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),R.enable()},t.onDisable=function(){ic(c,!0),Je(oe,"resize",k),jt.removeEventListener("refresh",k),R.kill()},t.lockAxis=t.lockAxis!==!1,a=new ze(t),a.iOS=Ji,Ji&&!d()&&d(1),Ji&&zt.ticker.add(di),H=a._dc,I=zt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Rm(d,d(),function(){return I.pause()})},onUpdate:Fi,onComplete:H.vars.onComplete}),a};jt.sort=function(r){if(fn(r))return se.sort(r);var t=oe.pageYOffset||0;return jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+oe.innerHeight}),se.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};jt.observe=function(r){return new ze(r)};jt.normalizeScroll=function(r){if(typeof r>"u")return vn;if(r===!0&&vn)return vn.enable();if(r===!1){vn&&vn.kill(),vn=r;return}var t=r instanceof ze?r:c_(r);return vn&&vn.target===t.target&&vn.kill(),Hr(t.target)&&(vn=t),t};jt.core={_getVelocityProp:su,_inputObserver:Cm,_scrollers:ae,_proxies:yi,bridge:{ss:function(){ei||Gr("scrollStart"),ei=cn()},ref:function(){return ln}}};_m()&&zt.registerPlugin(jt);const Oh=window.matchMedia("(pointer: coarse)").matches,Pm=()=>window.innerWidth>=1025,Sl=window.matchMedia("(prefers-reduced-motion: reduce)"),u_=Sl.matches;function Lm(r,t){typeof r.addEventListener=="function"?r.addEventListener("change",t):typeof r.addListener=="function"&&r.addListener(t)}var kf="1.3.23";function Dm(r,t,e){return Math.max(r,Math.min(t,e))}function h_(r,t,e){return(1-e)*r+e*t}function f_(r,t,e,n){return h_(r,t,1-Math.exp(-e*n))}function d_(r,t){return(r%t+t)%t}var p_=class{constructor(){Xt(this,"isRunning",!1);Xt(this,"value",0);Xt(this,"from",0);Xt(this,"to",0);Xt(this,"currentTime",0);Xt(this,"lerp");Xt(this,"duration");Xt(this,"easing");Xt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Dm(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=f_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function m_(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var g_=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Xt(this,"width",0);Xt(this,"height",0);Xt(this,"scrollHeight",0);Xt(this,"scrollWidth",0);Xt(this,"debouncedResize");Xt(this,"wrapperResizeObserver");Xt(this,"contentResizeObserver");Xt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=m_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Im=class{constructor(){Xt(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const __=100/6,Wi={passive:!1};function Hf(r,t){return r===1?__:r===2?t:1}var v_=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Xt(this,"touchStart",{x:0,y:0});Xt(this,"lastDelta",{x:0,y:0});Xt(this,"window",{width:0,height:0});Xt(this,"emitter",new Im);Xt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Xt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Xt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Xt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=Hf(n,this.window.width),s=Hf(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Xt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Wi),this.element.addEventListener("touchstart",this.onTouchStart,Wi),this.element.addEventListener("touchmove",this.onTouchMove,Wi),this.element.addEventListener("touchend",this.onTouchEnd,Wi)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Wi),this.element.removeEventListener("touchstart",this.onTouchStart,Wi),this.element.removeEventListener("touchmove",this.onTouchMove,Wi),this.element.removeEventListener("touchend",this.onTouchEnd,Wi)}};const Vf=r=>Math.min(1,1.001-2**(-10*r));var x_=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:y=!0,autoRaf:v=!1,anchors:S=!1,autoToggle:R=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:L=E,stopInertiaOnNavigate:N=!1}={}){Xt(this,"_isScrolling",!1);Xt(this,"_isStopped",!1);Xt(this,"_isLocked",!1);Xt(this,"_preventNextNativeScrollEvent",!1);Xt(this,"_resetVelocityTimeout",null);Xt(this,"_rafId",null);Xt(this,"isTouching");Xt(this,"time",0);Xt(this,"userData",{});Xt(this,"lastVelocity",0);Xt(this,"velocity",0);Xt(this,"direction",0);Xt(this,"options");Xt(this,"targetScroll");Xt(this,"animatedScroll");Xt(this,"animate",new p_);Xt(this,"emitter",new Im);Xt(this,"dimensions");Xt(this,"virtualScroll");Xt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Xt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Xt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Xt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Xt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Xt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>{var _,p,g,y,v;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent"))||u==="vertical"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-vertical"))||u==="horizontal"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-horizontal"))||i&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-touch"))||s&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Xt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Xt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=kf,window.lenis||(window.lenis={}),window.lenis.version=kf,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Vf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:y,autoRaf:v,anchors:S,autoToggle:R,allowNestedScroll:A,naiveDimensions:L,stopInertiaOnNavigate:N},this.dimensions=new g_(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new v_(e,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let m=null;if(typeof h=="string"?(m=document.querySelector(h),m||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(m=h),m){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?S.left:S.top}const _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(v)?0:v)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const m=h-this.animatedScroll;m>this.limit/2?h-=this.limit:m<-this.limit/2&&(h+=this.limit)}}else h=Dm(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=Vf:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,f,h,d,m;if(n-(i.time??0)>2e3){i.time=Date.now();const A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,m=r.clientHeight,a=f>d,l=h>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,g,y,v,S,R;if(_==="horizontal")p=Math.round(r.scrollLeft),g=f-d,y=t,v=s,S=a,R=c;else if(_==="vertical")p=Math.round(r.scrollTop),g=h-m,y=e,v=o,S=l,R=u;else return!1;return!R&&(p>=g||p<=0)?!0:(y>0?p<g:p>0)&&v&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?d_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};let Mo=null,Um=0,Gf=0;function Nm(){return Um}function Wf(){return Mo}function y_(){jt.config({limitCallbacks:!0,ignoreMobileResize:!0}),Mo=new x_({duration:1.15,easing:r=>1-Math.pow(1-r,4),wheelMultiplier:.92,touchMultiplier:1.45,smoothTouch:!1}),Mo.on("scroll",jt.update),Mo.on("scroll",r=>{Um=r.velocity??0}),Yt.ticker.lagSmoothing(0),Yt.ticker.add(r=>{Mo.raf(r*1e3)}),window.addEventListener("resize",S_,{passive:!0}),window.addEventListener("orientationchange",()=>{window.requestAnimationFrame(()=>{window.requestAnimationFrame(Om)})},{passive:!0})}function S_(){window.clearTimeout(Gf),Gf=window.setTimeout(Om,180)}function Om(){jt.refresh(!0)}const Fm=window.matchMedia("(prefers-reduced-motion: reduce)");function M_(){const r=document.getElementById("nav");if(!r)return;function t(){const e=document.querySelector(".chapter"),n=e?e.getBoundingClientRect().top+window.scrollY-Math.round(window.innerHeight*.15):window.innerHeight;r.classList.toggle("nav-solid",window.scrollY>=n),r.classList.remove("nav-hidden")}t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0})}function E_(){const r=document.body;document.getElementById("nav");const t=document.getElementById("navToggle"),e=document.getElementById("drawer"),n=document.getElementById("drawerBackdrop"),i=document.getElementById("drawerClose"),s=Array.from(document.querySelectorAll(".drawer-link"));if(!e||!t||!i||!n)return;const o=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(",");let a=null,l=0;function c(){return Array.from(e.querySelectorAll(o)).filter(h=>!h.hasAttribute("hidden")&&h.getAttribute("aria-hidden")!=="true")}function u(h){if(!e.classList.contains("open")||h.key!=="Tab")return;const d=c();if(!d.length){h.preventDefault(),e.focus();return}const m=d[0],_=d[d.length-1],p=document.activeElement;h.shiftKey&&p===m?(h.preventDefault(),_.focus()):!h.shiftKey&&p===_&&(h.preventDefault(),m.focus())}function f(h){if(e.classList.toggle("open",h),e.setAttribute("aria-hidden",h?"false":"true"),t.classList.toggle("open",h),t.setAttribute("aria-expanded",h?"true":"false"),r.classList.toggle("drawer-open",h),window.clearTimeout(l),h?(n.hidden=!1,window.requestAnimationFrame(()=>{n.classList.add("is-visible")})):(n.classList.remove("is-visible"),l=window.setTimeout(()=>{n.hidden=!0},320)),h){a=document.activeElement instanceof HTMLElement?document.activeElement:t;const d=c();window.setTimeout(()=>{(d[0]||i||e).focus()},40);return}a instanceof HTMLElement?a.focus():t.focus()}t.addEventListener("click",()=>{f(!e.classList.contains("open"))}),i.addEventListener("click",()=>{f(!1)}),n.addEventListener("click",()=>{f(!1)}),s.forEach(h=>{h.addEventListener("click",()=>{f(!1)})}),document.addEventListener("keydown",h=>{h.key==="Escape"&&e.classList.contains("open")&&f(!1),u(h)}),Lm(Fm,h=>{h.matches&&e.classList.contains("open")&&f(!1)})}function T_(){const r=document.querySelector(".hero-h1");if(!r||Fm.matches)return;const t=Array.from(r.querySelectorAll(".h1-block")),e=26,n=90;let s=160;function o(l){const c=[];return function u(f){if(f.nodeType===Node.TEXT_NODE){const h=document.createDocumentFragment(),d=f.textContent??"";for(const m of d){const _=document.createElement("span");_.className="hero-char",_.textContent=m,h.appendChild(_),c.push(_)}f.parentNode.replaceChild(h,f);return}f.nodeType===Node.ELEMENT_NODE&&Array.from(f.childNodes).forEach(u)}(l),c}const a=document.createElement("span");a.className="hero-cursor",a.setAttribute("aria-hidden","true"),t[0].prepend(a),t.forEach((l,c)=>{o(l).forEach(f=>{const h=s;window.setTimeout(()=>{f.style.opacity="1",f.after(a)},h),s+=e}),c<t.length-1&&(s+=n)}),window.setTimeout(()=>{a.classList.add("hero-cursor--done")},s+320)}function w_(r){document.querySelectorAll('a[href^="#"]').forEach(t=>{const e=t.getAttribute("href");if(!e||e==="#")return;const n=document.querySelector(e);n&&t.addEventListener("click",i=>{i.preventDefault();const s=r();s?s.scrollTo(n,{offset:-80,duration:1.35}):n.scrollIntoView({behavior:"smooth",block:"start"})})})}function b_(){const r=[["sobre","#sobre"],["soluções","#soluções"],["processo","#processo"],["cases","#cases"],["fundadores","#fundadores"]],t=Array.from(document.querySelectorAll(".nav-links a")),e=Array.from(document.querySelectorAll(".drawer-link"));function n(i){t.forEach(s=>{s.classList.toggle("nav-active",s.getAttribute("href")===i)}),e.forEach(s=>{s.classList.toggle("drawer-link-active",s.getAttribute("href")===i)})}r.forEach(([i,s])=>{const o=document.getElementById(i);o&&jt.create({trigger:o,start:"top 42%",end:"bottom 42%",onEnter:()=>n(s),onEnterBack:()=>n(s)})})}function A_(){Oh||document.querySelectorAll(".btn-primary, .btn-ghost, .nav-btn").forEach(r=>{r.addEventListener("mousemove",t=>{const e=r.getBoundingClientRect(),n=(t.clientX-e.left-e.width*.5)*.18,i=(t.clientY-e.top-e.height*.5)*.18;Yt.to(r,{x:n,y:i,duration:.24,ease:"power2.out",overwrite:!0})}),r.addEventListener("mouseleave",()=>{Yt.to(r,{x:0,y:0,duration:.6,ease:"elastic.out(1,0.55)",overwrite:!0})})})}function R_(){const r=document.getElementById("page-progress");r&&(Yt.set(r,{scaleX:0,transformOrigin:"0 0"}),Yt.to(r,{scaleX:1,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:0}}))}const Xf="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";function C_(r,t){if(!r)return;const e=r.textContent??"",n=Math.round(t/1e3*40);let i=0;const s=window.setInterval(()=>{r.textContent=e.split("").map((o,a)=>o===" "||o==="/"||i/n-a/e.length*.28>=.72?o:Xf[Math.floor(Math.random()*Xf.length)]).join(""),i+=1,i>n&&(r.textContent=e,window.clearInterval(s))},1e3/40)}new IntersectionObserver((r,t)=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-visible"),t.unobserve(e.target))})},{threshold:.12,rootMargin:"0px 0px -10% 0px"});function P_(){const r=Array.from(document.querySelectorAll("[data-reveal]"));r.length&&r.forEach(t=>{jt.create({trigger:t,start:"top 88%",once:!0,onEnter:()=>t.classList.add("is-visible")})})}function L_(){document.querySelectorAll(".sec-kicker").forEach(e=>{jt.create({trigger:e,start:"top 90%",once:!0,onEnter:()=>C_(e,700)}),Yt.from(e,{x:-18,opacity:0,duration:.62,ease:"power3.out",immediateRender:!1,scrollTrigger:{trigger:e,start:"top 90%",toggleActions:"play none none none"}})}),document.querySelectorAll(".sec-title").forEach(e=>{Yt.from(e,{y:44,opacity:0,duration:1,ease:"power4.out",immediateRender:!1,scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none none"}})}),[{selector:".mstep",y:26,stagger:.08,trigger:".manifesto-steps"},{selector:".proc-item",y:36,stagger:.11,trigger:".process-track"},{selector:".case-card",y:48,stagger:.1,trigger:".cases-grid"},{selector:".tech-pillar",x:-26,stagger:.1,trigger:".tech-pillars"},{selector:".cm-item",y:18,stagger:.03,trigger:".clients-marquee"}].forEach(({selector:e,trigger:n,y:i=0,x:s=0,stagger:o})=>{const a=document.querySelectorAll(e),l=document.querySelector(n);!a.length||!l||Yt.from(a,{x:s,y:i,opacity:0,stagger:o,duration:.85,ease:"power3.out",immediateRender:!1,scrollTrigger:{trigger:l,start:"top 84%",toggleActions:"play none none none"}})});const t=document.querySelector(".process-line");if(t){const e=t.querySelector("line");e?Yt.to(e,{strokeDashoffset:0,ease:"none",immediateRender:!1,scrollTrigger:{trigger:".process-track",start:"top 80%",end:"bottom 55%",scrub:.5}}):Yt.from(t,{scaleX:0,transformOrigin:"left center",duration:1,ease:"power2.inOut",immediateRender:!1,scrollTrigger:{trigger:".process-track",start:"top 82%",toggleActions:"play none none none"}})}document.querySelectorAll(".founder").forEach(e=>{jt.create({trigger:e,start:"top 86%",once:!0,onEnter:()=>e.classList.add("is-visible")})})}function D_(){Pm()&&document.querySelectorAll(".sec-head").forEach(r=>{const t=r.closest("section");t&&Yt.to(r,{y:-24,ease:"none",scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",scrub:.4}})})}function I_(){if(Oh)return;const r=document.getElementById("hero"),t=Array.from(document.querySelectorAll(".h1-block")),e=document.getElementById("heroAmbient");if(!r||!t.length)return;let n=0,i=0,s=!1;r.addEventListener("mousemove",o=>{const a=r.getBoundingClientRect();n=((o.clientX-a.left)/a.width-.5)*2,i=((o.clientY-a.top)/a.height-.5)*2,s=!0}),r.addEventListener("mouseleave",()=>{s=!1,t.forEach(o=>{Yt.to(o,{x:0,y:0,rotateX:0,rotateY:0,duration:1.1,ease:"power3.out",overwrite:!0})}),e&&Yt.to(e,{x:0,y:0,duration:1.1,ease:"power3.out",overwrite:!0})}),Yt.ticker.add(()=>{s&&(t.forEach(o=>{const a=parseFloat(o.dataset.depth??"0"),l=6+a*4;Yt.to(o,{x:n*l,y:i*l*.45,rotateY:n*a*-3,rotateX:i*a*1.4,duration:.8,ease:"power2.out",overwrite:!0})}),e&&Yt.to(e,{x:n*-18,y:i*-12,duration:1,ease:"power2.out",overwrite:!0}))})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="169",U_=0,qf=1,N_=2,Bm=1,O_=2,Pi=3,ki=0,Mn=1,Ui=2,ar=0,Ds=1,du=2,Yf=3,$f=4,F_=5,Rr=100,B_=101,z_=102,k_=103,H_=104,V_=200,G_=201,W_=202,X_=203,pu=204,mu=205,q_=206,Y_=207,$_=208,K_=209,Z_=210,J_=211,j_=212,Q_=213,tv=214,gu=0,_u=1,vu=2,Ws=3,xu=4,yu=5,Su=6,Mu=7,zm=0,ev=1,nv=2,lr=0,iv=1,rv=2,sv=3,ov=4,av=5,lv=6,cv=7,km=300,Xs=301,qs=302,Eu=303,Tu=304,Ul=306,wu=1e3,Dr=1001,bu=1002,An=1003,uv=1004,_a=1005,ai=1006,rc=1007,Ir=1008,Hi=1009,Hm=1010,Vm=1011,Ko=1012,Bh=1013,Wr=1014,xi=1015,ta=1016,zh=1017,kh=1018,Ys=1020,Gm=35902,Wm=1021,Xm=1022,ci=1023,qm=1024,Ym=1025,Is=1026,$s=1027,Hh=1028,Vh=1029,$m=1030,Gh=1031,Wh=1033,nl=33776,il=33777,rl=33778,sl=33779,Au=35840,Ru=35841,Cu=35842,Pu=35843,Lu=36196,Du=37492,Iu=37496,Uu=37808,Nu=37809,Ou=37810,Fu=37811,Bu=37812,zu=37813,ku=37814,Hu=37815,Vu=37816,Gu=37817,Wu=37818,Xu=37819,qu=37820,Yu=37821,ol=36492,$u=36494,Ku=36495,Km=36283,Zu=36284,Ju=36285,ju=36286,hv=3200,fv=3201,Zm=0,dv=1,ji="",pi="srgb",pr="srgb-linear",Xh="display-p3",Nl="display-p3-linear",Ml="linear",Ae="srgb",El="rec709",Tl="p3",ns=7680,Kf=519,pv=512,mv=513,gv=514,Jm=515,_v=516,vv=517,xv=518,yv=519,Zf=35044,Sv=35048,Jf="300 es",Oi=2e3,wl=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=Math.PI/180,Qu=180/Math.PI;function Js(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function en(r,t,e){return Math.max(t,Math.min(e,r))}function Mv(r,t){return(r%t+t)%t}function oc(r,t,e){return(1-e)*r+e*t}function ro(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,i,s,o,a,l,c){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],v=i[4],S=i[7],R=i[2],A=i[5],E=i[8];return s[0]=o*_+a*y+l*R,s[3]=o*p+a*v+l*A,s[6]=o*g+a*S+l*E,s[1]=c*_+u*y+f*R,s[4]=c*p+u*v+f*A,s[7]=c*g+u*S+f*E,s[2]=h*_+d*y+m*R,s[5]=h*p+d*v+m*A,s[8]=h*g+d*S+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,m=e*f+n*h+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ac.makeScale(t,e)),this}rotate(t){return this.premultiply(ac.makeRotation(-t)),this}translate(t,e){return this.premultiply(ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new ne;function jm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function bl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ev(){const r=bl("canvas");return r.style.display="block",r}const jf={};function al(r){r in jf||(jf[r]=!0,console.warn(r))}function Tv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function wv(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bv(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qf=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),td=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),so={[pr]:{transfer:Ml,primaries:El,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[pi]:{transfer:Ae,primaries:El,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Nl]:{transfer:Ml,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(td),fromReference:r=>r.applyMatrix3(Qf)},[Xh]:{transfer:Ae,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(td),fromReference:r=>r.applyMatrix3(Qf).convertLinearToSRGB()}},Av=new Set([pr,Nl]),ge={enabled:!0,_workingColorSpace:pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Av.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=so[t].toReference,i=so[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return so[r].primaries},getTransfer:function(r){return r===ji?Ml:so[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(so[t].luminanceCoefficients)}};function Us(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let is;class Rv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=bl("canvas")),is.width=t.width,is.height=t.height;const n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Us(e[n]/255)*255):e[n]=Us(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cv=0;class Qm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(cc(i[o].image)):s.push(cc(i[o]))}else s=cc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function cc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pv=0;class En extends Zs{constructor(t=En.DEFAULT_IMAGE,e=En.DEFAULT_MAPPING,n=Dr,i=Dr,s=ai,o=Ir,a=ci,l=Hi,c=En.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Js(),this.name="",this.source=new Qm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==km)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wu:t.x=t.x-Math.floor(t.x);break;case Dr:t.x=t.x<0?0:1;break;case bu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wu:t.y=t.y-Math.floor(t.y);break;case Dr:t.y=t.y<0?0:1;break;case bu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=km;En.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,i=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(d+1)/2,R=(g+1)/2,A=(u+h)/4,E=(f+_)/4,L=(m+p)/4;return v>S&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=E/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=L/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=L/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-m)*(p-m)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lv extends Zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new En(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends Lv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tg extends En{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dv extends En{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==m){let p=1-a;const g=l*h+c*d+u*m+f*_,y=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,g*y);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const S=a*y;if(l=l*p+h*S,c=c*p+d*S,u=u*p+m*S,f=f*p+_*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+u*f+l*d-c*h,t[e+1]=l*m+u*h+c*f-a*d,t[e+2]=c*m+u*d+a*h-l*f,t[e+3]=u*m-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ed.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new B,ed=new js;class $r{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(t.matrixWorld),this.union(va)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),xa.subVectors(this.max,oo),rs.subVectors(t.a,oo),ss.subVectors(t.b,oo),os.subVectors(t.c,oo),Xi.subVectors(ss,rs),qi.subVectors(os,ss),_r.subVectors(rs,os);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-_r.z,_r.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,_r.z,0,-_r.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-_r.y,_r.x,0];return!hc(e,rs,ss,os,xa)||(e=[1,0,0,0,1,0,0,0,1],!hc(e,rs,ss,os,xa))?!1:(ya.crossVectors(Xi,qi),e=[ya.x,ya.y,ya.z],hc(e,rs,ss,os,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ti=[new B,new B,new B,new B,new B,new B,new B,new B],ii=new B,va=new $r,rs=new B,ss=new B,os=new B,Xi=new B,qi=new B,_r=new B,oo=new B,xa=new B,ya=new B,vr=new B;function hc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){vr.fromArray(r,s);const a=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),l=t.dot(vr),c=e.dot(vr),u=n.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Iv=new $r,ao=new B,fc=new B;class Kr{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Iv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);const e=ao.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ao,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(fc)),this.expandByPoint(ao.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new B,dc=new B,Sa=new B,Yi=new B,pc=new B,Ma=new B,mc=new B;class Ol{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){dc.copy(t).add(e).multiplyScalar(.5),Sa.copy(e).sub(t).normalize(),Yi.copy(this.origin).sub(dc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Sa),a=Yi.dot(this.direction),l=-Yi.dot(Sa),c=Yi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=s*u,f>=0)if(h>=-m)if(h<=m){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(dc).addScaledVector(Sa,h),d}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,i,s){pc.subVectors(e,t),Ma.subVectors(n,t),mc.crossVectors(pc,Ma);let o=this.direction.dot(mc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,t);const l=a*this.direction.dot(Ma.crossVectors(Yi,Ma));if(l<0)return null;const c=a*this.direction.dot(pc.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(mc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,i,s,o,a,l,c,u,f,h,d,m,_,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,f,h,d,m,_,p)}set(t,e,n,i,s,o,a,l,c,u,f,h,d,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/as.setFromMatrixColumn(t,0).length(),s=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,m=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,m=c*u,_=c*f;e[0]=h+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,m=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,m=a*u,_=a*f;e[0]=l*u,e[4]=m*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+m,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uv,t,Nv)}lookAt(t,e,n){const i=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),$i.crossVectors(n,Nn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),$i.crossVectors(n,Nn)),$i.normalize(),Ea.crossVectors(Nn,$i),i[0]=$i.x,i[4]=Ea.x,i[8]=Nn.x,i[1]=$i.y,i[5]=Ea.y,i[9]=Nn.y,i[2]=$i.z,i[6]=Ea.z,i[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],v=n[7],S=n[11],R=n[15],A=i[0],E=i[4],L=i[8],N=i[12],x=i[1],M=i[5],I=i[9],z=i[13],D=i[2],H=i[6],k=i[10],X=i[14],V=i[3],lt=i[7],b=i[11],st=i[15];return s[0]=o*A+a*x+l*D+c*V,s[4]=o*E+a*M+l*H+c*lt,s[8]=o*L+a*I+l*k+c*b,s[12]=o*N+a*z+l*X+c*st,s[1]=u*A+f*x+h*D+d*V,s[5]=u*E+f*M+h*H+d*lt,s[9]=u*L+f*I+h*k+d*b,s[13]=u*N+f*z+h*X+d*st,s[2]=m*A+_*x+p*D+g*V,s[6]=m*E+_*M+p*H+g*lt,s[10]=m*L+_*I+p*k+g*b,s[14]=m*N+_*z+p*X+g*st,s[3]=y*A+v*x+S*D+R*V,s[7]=y*E+v*M+S*H+R*lt,s[11]=y*L+v*I+S*k+R*b,s[15]=y*N+v*z+S*X+R*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],_=t[7],p=t[11],g=t[15];return m*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+_*(+e*l*d-e*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+p*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+g*(-i*a*u-e*l*f+e*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],_=t[13],p=t[14],g=t[15],y=f*p*c-_*h*c+_*l*d-a*p*d-f*l*g+a*h*g,v=m*h*c-u*p*c-m*l*d+o*p*d+u*l*g-o*h*g,S=u*_*c-m*f*c+m*a*d-o*_*d-u*a*g+o*f*g,R=m*f*l-u*_*l-m*a*h+o*_*h+u*a*p-o*f*p,A=e*y+n*v+i*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=y*E,t[1]=(_*h*s-f*p*s-_*i*d+n*p*d+f*i*g-n*h*g)*E,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*g+n*l*g)*E,t[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*E,t[4]=v*E,t[5]=(u*p*s-m*h*s+m*i*d-e*p*d-u*i*g+e*h*g)*E,t[6]=(m*l*s-o*p*s-m*i*c+e*p*c+o*i*g-e*l*g)*E,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*d+e*l*d)*E,t[8]=S*E,t[9]=(m*f*s-u*_*s-m*n*d+e*_*d+u*n*g-e*f*g)*E,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*g+e*a*g)*E,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*d-e*a*d)*E,t[12]=R*E,t[13]=(u*_*i-m*f*i+m*n*h-e*_*h-u*n*p+e*f*p)*E,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*p-e*a*p)*E,t[15]=(o*f*i-u*a*i+u*n*l-e*f*l-o*n*h+e*a*h)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,m=s*f,_=o*u,p=o*f,g=a*f,y=l*c,v=l*u,S=l*f,R=n.x,A=n.y,E=n.z;return i[0]=(1-(_+g))*R,i[1]=(d+S)*R,i[2]=(m-v)*R,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(h+g))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(m+v)*E,i[9]=(p-y)*E,i[10]=(1-(h+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=as.set(i[0],i[1],i[2]).length();const o=as.set(i[4],i[5],i[6]).length(),a=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ri.copy(this);const c=1/s,u=1/o,f=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,e.setFromRotationMatrix(ri),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Oi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let d,m;if(a===Oi)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===wl)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Oi){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(o-s),h=(e+t)*c,d=(n+i)*u;let m,_;if(a===Oi)m=(o+s)*f,_=-2*f;else if(a===wl)m=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const as=new B,ri=new de,Uv=new B(0,0,0),Nv=new B(1,1,1),$i=new B,Ea=new B,Nn=new B,nd=new de,id=new js;class Mi{constructor(t=0,e=0,n=0,i=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ov=0;const rd=new B,ls=new js,bi=new de,Ta=new B,lo=new B,Fv=new B,Bv=new js,sd=new B(1,0,0),od=new B(0,1,0),ad=new B(0,0,1),ld={type:"added"},zv={type:"removed"},cs={type:"childadded",child:null},gc={type:"childremoved",child:null};class qe extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new B,e=new Mi,n=new js,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new ne}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(ad,t)}translateOnAxis(t,e){return rd.copy(t).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ta.copy(t):Ta.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(lo,Ta,this.up):bi.lookAt(Ta,lo,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),ls.setFromRotationMatrix(bi),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ld),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zv),gc.child=t,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ld),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,t,Fv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,Bv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}qe.DEFAULT_UP=new B(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new B,Ai=new B,_c=new B,Ri=new B,us=new B,hs=new B,cd=new B,vc=new B,xc=new B,yc=new B,Sc=new ye,Mc=new ye,Ec=new ye;class li{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),si.subVectors(t,e),i.cross(si);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){si.subVectors(i,e),Ai.subVectors(n,e),_c.subVectors(t,e);const o=si.dot(si),a=si.dot(Ai),l=si.dot(_c),c=Ai.dot(Ai),u=Ai.dot(_c),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Sc.setScalar(0),Mc.setScalar(0),Ec.setScalar(0),Sc.fromBufferAttribute(t,e),Mc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Sc,s.x),o.addScaledVector(Mc,s.y),o.addScaledVector(Ec,s.z),o}static isFrontFacing(t,e,n,i){return si.subVectors(n,e),Ai.subVectors(t,e),si.cross(Ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),si.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return li.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;us.subVectors(i,n),hs.subVectors(s,n),vc.subVectors(t,n);const l=us.dot(vc),c=hs.dot(vc);if(l<=0&&c<=0)return e.copy(n);xc.subVectors(t,i);const u=us.dot(xc),f=hs.dot(xc);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(us,o);yc.subVectors(t,s);const d=us.dot(yc),m=hs.dot(yc);if(m>=0&&d<=m)return e.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(hs,a);const p=u*m-d*f;if(p<=0&&f-u>=0&&d-m>=0)return cd.subVectors(s,i),a=(f-u)/(f-u+(d-m)),e.copy(i).addScaledVector(cd,a);const g=1/(p+_+h);return o=_*g,a=h*g,e.copy(n).addScaledVector(us,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Tc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=Mv(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Tc(o,s,t+1/3),this.g=Tc(o,s,t),this.b=Tc(o,s,t-1/3)}return ge.toWorkingColorSpace(this,i),this}setStyle(t,e=pi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pi){const n=eg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=lc(t.r),this.g=lc(t.g),this.b=lc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return ge.fromWorkingColorSpace(an.copy(this),t),Math.round(en(an.r*255,0,255))*65536+Math.round(en(an.g*255,0,255))*256+Math.round(en(an.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,s=an.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=pi){ge.fromWorkingColorSpace(an.copy(this),t);const e=an.r,n=an.g,i=an.b;return t!==pi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(wa);const n=oc(Ki.h,wa.h,e),i=oc(Ki.s,wa.s,e),s=oc(Ki.l,wa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new te;te.NAMES=eg;let kv=0;class Zr extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Ds,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pu&&(n.blendSrc=this.blendSrc),this.blendDst!==mu&&(n.blendDst=this.blendDst),this.blendEquation!==Rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ns extends Zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new B,ba=new At;class hi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zf,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ba.fromBufferAttribute(this,e),ba.applyMatrix3(t),this.setXY(e,ba.x,ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ro(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ro(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ro(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ro(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ro(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),i=Tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zf&&(t.usage=this.usage),t}}class ng extends hi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ig extends hi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class sn extends hi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hv=0;const Kn=new de,wc=new qe,fs=new B,On=new $r,co=new $r,Ze=new B;class pn extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jm(t)?ig:ng)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ne().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(On.min,co.min),On.expandByPoint(Ze),Ze.addVectors(On.max,co.max),On.expandByPoint(Ze)):(On.expandByPoint(co.min),On.expandByPoint(co.max))}On.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ze.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ze.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(t,c),Ze.add(fs)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new B,l[L]=new B;const c=new B,u=new B,f=new B,h=new At,d=new At,m=new At,_=new B,p=new B;function g(L,N,x){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,N),f.fromBufferAttribute(n,x),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,N),m.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const M=1/(d.x*m.y-m.x*d.y);isFinite(M)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(M),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(M),a[L].add(_),a[N].add(_),a[x].add(_),l[L].add(p),l[N].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,N=y.length;L<N;++L){const x=y[L],M=x.start,I=x.count;for(let z=M,D=M+I;z<D;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new B,S=new B,R=new B,A=new B;function E(L){R.fromBufferAttribute(i,L),A.copy(R);const N=a[L];v.copy(N),v.sub(R.multiplyScalar(R.dot(N))).normalize(),S.crossVectors(A,N);const M=S.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,M)}for(let L=0,N=y.length;L<N;++L){const x=y[L],M=x.start,I=x.count;for(let z=M,D=M+I;z<D;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(t)for(let h=0,d=t.count;h<d;h+=3){const m=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)h[m++]=c[d++]}return new hi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new de,xr=new Ol,Aa=new Kr,hd=new B,Ra=new B,Ca=new B,Pa=new B,bc=new B,La=new B,fd=new B,Da=new B;class Xe extends qe{constructor(t=new pn,e=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(bc.fromBufferAttribute(f,t),o?La.addScaledVector(bc,u):La.addScaledVector(bc.sub(e),u))}e.add(La)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),xr.copy(t.ray).recast(t.near),!(Aa.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Aa,hd)===null||xr.origin.distanceToSquared(hd)>(t.far-t.near)**2))&&(ud.copy(s).invert(),xr.copy(t.ray).applyMatrix4(ud),!(n.boundingBox!==null&&xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const p=h[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=v;S<R;S+=3){const A=a.getX(S),E=a.getX(S+1),L=a.getX(S+2);i=Ia(this,g,t,n,c,u,f,A,E,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const y=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=Ia(this,o,t,n,c,u,f,y,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const p=h[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=v;S<R;S+=3){const A=S,E=S+1,L=S+2;i=Ia(this,g,t,n,c,u,f,A,E,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const y=p,v=p+1,S=p+2;i=Ia(this,o,t,n,c,u,f,y,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Vv(r,t,e,n,i,s,o,a){let l;if(t.side===Mn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ki,a),l===null)return null;Da.copy(a),Da.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Da);return c<e.near||c>e.far?null:{distance:c,point:Da.clone(),object:r}}function Ia(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ra),r.getVertexPosition(l,Ca),r.getVertexPosition(c,Pa);const u=Vv(r,t,e,n,Ra,Ca,Pa,fd);if(u){const f=new B;li.getBarycoord(fd,Ra,Ca,Pa,f),i&&(u.uv=li.getInterpolatedAttribute(i,a,l,c,f,new At)),s&&(u.uv1=li.getInterpolatedAttribute(s,a,l,c,f,new At)),o&&(u.normal=li.getInterpolatedAttribute(o,a,l,c,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};li.getNormal(Ra,Ca,Pa,h.normal),u.face=h,u.barycoord=f}return u}class Qs extends pn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2));function m(_,p,g,y,v,S,R,A,E,L,N){const x=S/E,M=R/L,I=S/2,z=R/2,D=A/2,H=E+1,k=L+1;let X=0,V=0;const lt=new B;for(let b=0;b<k;b++){const st=b*M-z;for(let Ut=0;Ut<H;Ut++){const Nt=Ut*x-I;lt[_]=Nt*y,lt[p]=st*v,lt[g]=D,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[p]=0,lt[g]=A>0?1:-1,u.push(lt.x,lt.y,lt.z),f.push(Ut/E),f.push(1-b/L),X+=1}}for(let b=0;b<L;b++)for(let st=0;st<E;st++){const Ut=h+st+H*b,Nt=h+st+H*(b+1),Z=h+(st+1)+H*(b+1),Q=h+(st+1)+H*b;l.push(Ut,Nt,Q),l.push(Nt,Z,Q),V+=6}a.addGroup(d,V,N),d+=V,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ks(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function _n(r){const t={};for(let e=0;e<r.length;e++){const n=Ks(r[e]);for(const i in n)t[i]=n[i]}return t}function Gv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function rg(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Wv={clone:Ks,merge:_n};var Xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xv,this.fragmentShader=qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=Gv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sg extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new B,dd=new At,pd=new At;class un extends sg{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qu*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,dd,pd),e.subVectors(pd,dd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,ps=1;class Yv extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(ds,ps,t,e);i.layers=this.layers,this.add(i);const s=new un(ds,ps,t,e);s.layers=this.layers,this.add(s);const o=new un(ds,ps,t,e);o.layers=this.layers,this.add(o);const a=new un(ds,ps,t,e);a.layers=this.layers,this.add(a);const l=new un(ds,ps,t,e);l.layers=this.layers,this.add(l);const c=new un(ds,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class og extends En{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $v extends Xr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new og(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qs(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:ar});s.uniforms.tEquirect.value=e;const o=new Xe(i,s),a=e.minFilter;return e.minFilter===Ir&&(e.minFilter=ai),new Yv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Ac=new B,Kv=new B,Zv=new ne;class br{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ac.subVectors(n,e).cross(Kv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ac),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zv.getNormalMatrix(t),i=this.coplanarPoint(Ac).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Kr,Ua=new B;class Yh{constructor(t=new br,e=new br,n=new br,i=new br,s=new br,o=new br){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],m=i[9],_=i[10],p=i[11],g=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,h-c,p-d,S-g).normalize(),n[1].setComponents(l+s,h+c,p+d,S+g).normalize(),n[2].setComponents(l+o,h+u,p+m,S+y).normalize(),n[3].setComponents(l-o,h-u,p-m,S-y).normalize(),n[4].setComponents(l-a,h-f,p-_,S-v).normalize(),e===Oi)n[5].setComponents(l+a,h+f,p+_,S+v).normalize();else if(e===wl)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ua.x=i.normal.x>0?t.max.x:t.min.x,Ua.y=i.normal.y>0?t.max.y:t.min.y,Ua.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ag(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Jv(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ea extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=t/a,h=e/l,d=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const y=g*h-o;for(let v=0;v<c;v++){const S=v*f-s;m.push(S,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const v=y+c*g,S=y+c*(g+1),R=y+1+c*(g+1),A=y+1+c*g;d.push(v,S,A),d.push(S,R,A)}this.setIndex(d),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.width,t.height,t.widthSegments,t.heightSegments)}}var jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ox=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,by=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,By=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:jv,alphahash_pars_fragment:Qv,alphamap_fragment:tx,alphamap_pars_fragment:ex,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:sx,batching_pars_vertex:ox,batching_vertex:ax,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:ux,iridescence_fragment:hx,bumpmap_pars_fragment:fx,clipping_planes_fragment:dx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:_x,color_pars_fragment:vx,color_pars_vertex:xx,color_vertex:yx,common:Sx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:Tx,displacementmap_vertex:wx,emissivemap_fragment:bx,emissivemap_pars_fragment:Ax,colorspace_fragment:Rx,colorspace_pars_fragment:Cx,envmap_fragment:Px,envmap_common_pars_fragment:Lx,envmap_pars_fragment:Dx,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Wx,envmap_vertex:Ux,fog_vertex:Nx,fog_pars_vertex:Ox,fog_fragment:Fx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:kx,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:Vx,lights_pars_begin:Gx,lights_toon_fragment:Xx,lights_toon_pars_fragment:qx,lights_phong_fragment:Yx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:jx,lights_fragment_end:Qx,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ny,logdepthbuf_vertex:iy,map_fragment:ry,map_pars_fragment:sy,map_particle_fragment:oy,map_particle_pars_fragment:ay,metalnessmap_fragment:ly,metalnessmap_pars_fragment:cy,morphinstance_vertex:uy,morphcolor_vertex:hy,morphnormal_vertex:fy,morphtarget_pars_vertex:dy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:_y,normal_pars_vertex:vy,normal_vertex:xy,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:Ty,opaque_fragment:wy,packing:by,premultiplied_alpha_fragment:Ay,project_vertex:Ry,dithering_fragment:Cy,dithering_pars_fragment:Py,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Uy,shadowmap_vertex:Ny,shadowmask_pars_fragment:Oy,skinbase_vertex:Fy,skinning_pars_vertex:By,skinning_vertex:zy,skinnormal_vertex:ky,specularmap_fragment:Hy,specularmap_pars_fragment:Vy,tonemapping_fragment:Gy,tonemapping_pars_fragment:Wy,transmission_fragment:Xy,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:$y,uv_vertex:Ky,worldpos_vertex:Zy,background_vert:Jy,background_frag:jy,backgroundCube_vert:Qy,backgroundCube_frag:tS,cube_vert:eS,cube_frag:nS,depth_vert:iS,depth_frag:rS,distanceRGBA_vert:sS,distanceRGBA_frag:oS,equirect_vert:aS,equirect_frag:lS,linedashed_vert:cS,linedashed_frag:uS,meshbasic_vert:hS,meshbasic_frag:fS,meshlambert_vert:dS,meshlambert_frag:pS,meshmatcap_vert:mS,meshmatcap_frag:gS,meshnormal_vert:_S,meshnormal_frag:vS,meshphong_vert:xS,meshphong_frag:yS,meshphysical_vert:SS,meshphysical_frag:MS,meshtoon_vert:ES,meshtoon_frag:TS,points_vert:wS,points_frag:bS,shadow_vert:AS,shadow_frag:RS,sprite_vert:CS,sprite_frag:PS},Lt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},mi={basic:{uniforms:_n([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:_n([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:_n([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:_n([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:_n([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:_n([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:_n([Lt.points,Lt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:_n([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:_n([Lt.common,Lt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:_n([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:_n([Lt.sprite,Lt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:_n([Lt.common,Lt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:_n([Lt.lights,Lt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};mi.physical={uniforms:_n([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Na={r:0,b:0,g:0},Sr=new Mi,LS=new de;function DS(r,t,e,n,i,s,o){const a=new te(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const S=m(y);S===null?g(a,l):S&&S.isColor&&(g(S,1),v=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===Ul)?(u===void 0&&(u=new Xe(new Qs(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Ks(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Sr.copy(v.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LS.makeRotationFromEuler(Sr)),u.material.toneMapped=ge.getTransfer(S.colorSpace)!==Ae,(f!==S||h!==S.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Xe(new ea(2,2),new Vi({name:"BackgroundMaterial",uniforms:Ks(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ge.getTransfer(S.colorSpace)!==Ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,v){y.getRGB(Na,rg(r)),n.buffers.color.setClear(Na.r,Na.g,Na.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:_,addToRenderList:p}}function IS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(x,M,I,z,D){let H=!1;const k=f(z,I,M);s!==k&&(s=k,c(s.object)),H=d(x,z,I,D),H&&m(x,z,I,D),D!==null&&t.update(D,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(x,M,I,z),D!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,M,I){const z=I.wireframe===!0;let D=n[x.id];D===void 0&&(D={},n[x.id]=D);let H=D[M.id];H===void 0&&(H={},D[M.id]=H);let k=H[z];return k===void 0&&(k=h(l()),H[z]=k),k}function h(x){const M=[],I=[],z=[];for(let D=0;D<e;D++)M[D]=0,I[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:I,attributeDivisors:z,object:x,attributes:{},index:null}}function d(x,M,I,z){const D=s.attributes,H=M.attributes;let k=0;const X=I.getAttributes();for(const V in X)if(X[V].location>=0){const b=D[V];let st=H[V];if(st===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),b===void 0||b.attribute!==st||st&&b.data!==st.data)return!0;k++}return s.attributesNum!==k||s.index!==z}function m(x,M,I,z){const D={},H=M.attributes;let k=0;const X=I.getAttributes();for(const V in X)if(X[V].location>=0){let b=H[V];b===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(b=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(b=x.instanceColor));const st={};st.attribute=b,b&&b.data&&(st.data=b.data),D[V]=st,k++}s.attributes=D,s.attributesNum=k,s.index=z}function _(){const x=s.newAttributes;for(let M=0,I=x.length;M<I;M++)x[M]=0}function p(x){g(x,0)}function g(x,M){const I=s.newAttributes,z=s.enabledAttributes,D=s.attributeDivisors;I[x]=1,z[x]===0&&(r.enableVertexAttribArray(x),z[x]=1),D[x]!==M&&(r.vertexAttribDivisor(x,M),D[x]=M)}function y(){const x=s.newAttributes,M=s.enabledAttributes;for(let I=0,z=M.length;I<z;I++)M[I]!==x[I]&&(r.disableVertexAttribArray(I),M[I]=0)}function v(x,M,I,z,D,H,k){k===!0?r.vertexAttribIPointer(x,M,I,D,H):r.vertexAttribPointer(x,M,I,z,D,H)}function S(x,M,I,z){_();const D=z.attributes,H=I.getAttributes(),k=M.defaultAttributeValues;for(const X in H){const V=H[X];if(V.location>=0){let lt=D[X];if(lt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),lt!==void 0){const b=lt.normalized,st=lt.itemSize,Ut=t.get(lt);if(Ut===void 0)continue;const Nt=Ut.buffer,Z=Ut.type,Q=Ut.bytesPerElement,_t=Z===r.INT||Z===r.UNSIGNED_INT||lt.gpuType===Bh;if(lt.isInterleavedBufferAttribute){const ht=lt.data,St=ht.stride,Ct=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Bt=0;Bt<V.locationSize;Bt++)g(V.location+Bt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Bt=0;Bt<V.locationSize;Bt++)p(V.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let Bt=0;Bt<V.locationSize;Bt++)v(V.location+Bt,st/V.locationSize,Z,b,St*Q,(Ct+st/V.locationSize*Bt)*Q,_t)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)g(V.location+ht,lt.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let ht=0;ht<V.locationSize;ht++)v(V.location+ht,st/V.locationSize,Z,b,st*Q,st/V.locationSize*ht*Q,_t)}}else if(k!==void 0){const b=k[X];if(b!==void 0)switch(b.length){case 2:r.vertexAttrib2fv(V.location,b);break;case 3:r.vertexAttrib3fv(V.location,b);break;case 4:r.vertexAttrib4fv(V.location,b);break;default:r.vertexAttrib1fv(V.location,b)}}}}y()}function R(){L();for(const x in n){const M=n[x];for(const I in M){const z=M[I];for(const D in z)u(z[D].object),delete z[D];delete M[I]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const M=n[x.id];for(const I in M){const z=M[I];for(const D in z)u(z[D].object),delete z[D];delete M[I]}delete n[x.id]}function E(x){for(const M in n){const I=n[M];if(I[x.id]===void 0)continue;const z=I[x.id];for(const D in z)u(z[D].object),delete z[D];delete I[x.id]}}function L(){N(),o=!0,s!==i&&(s=i,c(s.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function US(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];for(let _=0;_<h.length;_++)e.update(m,n,h[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function NS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==ci&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Hi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==xi&&!L)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function OS(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new br,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,g=r.get(f);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let S=g.clippingState||null;l.value=S,S=u(m,h,v,d);for(let R=0;R!==v;++R)S[R]=e[R];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,S=d;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function FS(r){let t=new WeakMap;function e(o,a){return a===Eu?o.mapping=Xs:a===Tu&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Eu||a===Tu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $v(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class $h extends sg{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Es=4,md=[.125,.215,.35,.446,.526,.582],Cr=20,Rc=new $h,gd=new te;let Cc=null,Pc=0,Lc=0,Dc=!1;const Ar=(1+Math.sqrt(5))/2,ms=1/Ar,_d=[new B(-Ar,ms,0),new B(Ar,ms,0),new B(-ms,0,Ar),new B(ms,0,Ar),new B(0,Ar,-ms),new B(0,Ar,ms),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class vd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cc,Pc,Lc),this._renderer.xr.enabled=Dc,t.scissorTest=!1,Oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:ta,format:ci,colorSpace:pr,depthBuffer:!1},i=xd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BS(s)),this._blurMaterial=zS(s,t,e)}return i}_compileMaterial(t){const e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,Rc)}_sceneToCubeUV(t,e,n,i){const a=new un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(gd),u.toneMapping=lr,u.autoClear=!1;const d=new Ns({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),m=new Xe(new Qs,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(gd),_=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;Oa(i,y*v,g>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Xs||t.mapping===qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Oa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_d[(i-s-1)%_d.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Xe(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Cr-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):Cr;p>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cr}`);const g=[];let y=0;for(let E=0;E<Cr;++E){const L=E/_,N=Math.exp(-L*L/2);g.push(N),E===0?y+=N:E<p&&(y+=2*N)}for(let E=0;E<g.length;E++)g[E]=g[E]/y;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-n;const S=this._sizeLods[i],R=3*S*(i>v-Es?i-v+Es:0),A=4*(this._cubeSize-S);Oa(e,R,A,3*S,2*S),l.setRenderTarget(e),l.render(f,Rc)}}function BS(r){const t=[],e=[],n=[];let i=r;const s=r-Es+1+md.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Es?l=md[o-r+Es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,_=3,p=2,g=1,y=new Float32Array(_*m*d),v=new Float32Array(p*m*d),S=new Float32Array(g*m*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,L=A>2?0:-1,N=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];y.set(N,_*m*A),v.set(h,p*m*A);const x=[A,A,A,A,A,A];S.set(x,g*m*A)}const R=new pn;R.setAttribute("position",new hi(y,_)),R.setAttribute("uv",new hi(v,p)),R.setAttribute("faceIndex",new hi(S,g)),t.push(R),i>Es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xd(r,t,e){const n=new Xr(r,t,e);return n.texture.mapping=Ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function zS(r,t,e){const n=new Float32Array(Cr),i=new B(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function yd(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Sd(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Eu||l===Tu,u=l===Xs||l===qs;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new vd(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new vd(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function HS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&al("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function VS(r,t,e,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);for(const m in h.morphAttributes){const _=h.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)t.update(h[m],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const _=d[m];for(let p=0,g=_.length;p<g;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,S=y.length;v<S;v+=3){const R=y[v+0],A=y[v+1],E=y[v+2];h.push(R,A,A,E,E,R)}}else if(m!==void 0){const y=m.array;_=m.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const R=v+0,A=v+1,E=v+2;h.push(R,A,A,E,E,R)}}else return;const p=new(jm(h)?ig:ng)(h,1);p.version=_;const g=s.get(f);g&&t.remove(g),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function GS(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),e.update(d,n,1)}function c(h,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,h*o,m),e.update(d,n,m))}function u(h,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function f(h,d,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)c(h[g]/o,d[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,m);let g=0;for(let y=0;y<m;y++)g+=d[y];for(let y=0;y<_.length;y++)e.update(g,n,_[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function WS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function XS(r,t,e){const n=new WeakMap,i=new ye;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let x=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*A*4*f),L=new tg(E,R,A,f);L.type=xi,L.needsUpdate=!0;const N=S*4;for(let M=0;M<f;M++){const I=g[M],z=y[M],D=v[M],H=R*A*4*M;for(let k=0;k<I.count;k++){const X=k*N;m===!0&&(i.fromBufferAttribute(I,k),E[H+X+0]=i.x,E[H+X+1]=i.y,E[H+X+2]=i.z,E[H+X+3]=0),_===!0&&(i.fromBufferAttribute(z,k),E[H+X+4]=i.x,E[H+X+5]=i.y,E[H+X+6]=i.z,E[H+X+7]=0),p===!0&&(i.fromBufferAttribute(D,k),E[H+X+8]=i.x,E[H+X+9]=i.y,E[H+X+10]=i.z,E[H+X+11]=D.itemSize===4?i.w:1)}}h={count:f,texture:L,size:new At(R,A)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function qS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class lg extends En{constructor(t,e,n,i,s,o,a,l,c,u=Is){if(u!==Is&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Is&&(n=Wr),n===void 0&&u===$s&&(n=Ys),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cg=new En,Md=new lg(1,1),ug=new tg,hg=new Dv,fg=new og,Ed=[],Td=[],wd=new Float32Array(16),bd=new Float32Array(9),Ad=new Float32Array(4);function to(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ed[i];if(s===void 0&&(s=new Float32Array(i),Ed[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function $e(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Fl(r,t){let e=Td[t];e===void 0&&(e=new Int32Array(t),Td[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function YS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function $S(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2fv(this.addr,t),$e(e,t)}}function KS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;r.uniform3fv(this.addr,t),$e(e,t)}}function ZS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4fv(this.addr,t),$e(e,t)}}function JS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;Ad.set(n),r.uniformMatrix2fv(this.addr,!1,Ad),$e(e,n)}}function jS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;bd.set(n),r.uniformMatrix3fv(this.addr,!1,bd),$e(e,n)}}function QS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;wd.set(n),r.uniformMatrix4fv(this.addr,!1,wd),$e(e,n)}}function tM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function eM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2iv(this.addr,t),$e(e,t)}}function nM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3iv(this.addr,t),$e(e,t)}}function iM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4iv(this.addr,t),$e(e,t)}}function rM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function sM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2uiv(this.addr,t),$e(e,t)}}function oM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3uiv(this.addr,t),$e(e,t)}}function aM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4uiv(this.addr,t),$e(e,t)}}function lM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Md.compareFunction=Jm,s=Md):s=cg,e.setTexture2D(t||s,i)}function cM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hg,i)}function uM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fg,i)}function hM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ug,i)}function fM(r){switch(r){case 5126:return YS;case 35664:return $S;case 35665:return KS;case 35666:return ZS;case 35674:return JS;case 35675:return jS;case 35676:return QS;case 5124:case 35670:return tM;case 35667:case 35671:return eM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return oM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return hM}}function dM(r,t){r.uniform1fv(this.addr,t)}function pM(r,t){const e=to(t,this.size,2);r.uniform2fv(this.addr,e)}function mM(r,t){const e=to(t,this.size,3);r.uniform3fv(this.addr,e)}function gM(r,t){const e=to(t,this.size,4);r.uniform4fv(this.addr,e)}function _M(r,t){const e=to(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function vM(r,t){const e=to(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function xM(r,t){const e=to(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function yM(r,t){r.uniform1iv(this.addr,t)}function SM(r,t){r.uniform2iv(this.addr,t)}function MM(r,t){r.uniform3iv(this.addr,t)}function EM(r,t){r.uniform4iv(this.addr,t)}function TM(r,t){r.uniform1uiv(this.addr,t)}function wM(r,t){r.uniform2uiv(this.addr,t)}function bM(r,t){r.uniform3uiv(this.addr,t)}function AM(r,t){r.uniform4uiv(this.addr,t)}function RM(r,t,e){const n=this.cache,i=t.length,s=Fl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||cg,s[o])}function CM(r,t,e){const n=this.cache,i=t.length,s=Fl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||hg,s[o])}function PM(r,t,e){const n=this.cache,i=t.length,s=Fl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||fg,s[o])}function LM(r,t,e){const n=this.cache,i=t.length,s=Fl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ug,s[o])}function DM(r){switch(r){case 5126:return dM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return _M;case 35675:return vM;case 35676:return xM;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return EM;case 5125:return TM;case 36294:return wM;case 36295:return bM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return LM}}class IM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fM(e.type)}}class UM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=DM(e.type)}}class NM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Rd(r,t){r.seq.push(t),r.map[t.id]=t}function OM(r,t,e){const n=r.name,i=n.length;for(Ic.lastIndex=0;;){const s=Ic.exec(n),o=Ic.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Rd(e,c===void 0?new IM(a,r,t):new UM(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new NM(a),Rd(e,f)),e=f}}}class ll{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);OM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Cd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const FM=37297;let BM=0;function zM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function kM(r){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(r);let n;switch(t===e?n="":t===Tl&&e===El?n="LinearDisplayP3ToLinearSRGB":t===El&&e===Tl&&(n="LinearSRGBToLinearDisplayP3"),r){case pr:case Nl:return[n,"LinearTransferOETF"];case pi:case Xh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Pd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+zM(r.getShaderSource(t),o)}else return i}function HM(r,t){const e=kM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function VM(r,t){let e;switch(t){case iv:e="Linear";break;case rv:e="Reinhard";break;case sv:e="Cineon";break;case ov:e="ACESFilmic";break;case lv:e="AgX";break;case cv:e="Neutral";break;case av:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fa=new B;function GM(){ge.getLuminanceCoefficients(Fa);const r=Fa.x.toFixed(4),t=Fa.y.toFixed(4),e=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function XM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Eo(r){return r!==""}function Ld(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(r){return r.replace(YM,KM)}const $M=new Map;function KM(r,t){let e=ee[t];if(e===void 0){const n=$M.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return th(e)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(r){return r.replace(ZM,JM)}function JM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ud(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===O_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function QM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case Ul:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function e1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zm:t="ENVMAP_BLENDING_MULTIPLY";break;case ev:t="ENVMAP_BLENDING_MIX";break;case nv:t="ENVMAP_BLENDING_ADD";break}return t}function n1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function i1(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=jM(e),c=QM(e),u=t1(e),f=e1(e),h=n1(e),d=WM(e),m=XM(s),_=i.createProgram();let p,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Eo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Eo).join(`
`),g.length>0&&(g+=`
`)):(p=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),g=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==lr?"#define TONE_MAPPING":"",e.toneMapping!==lr?ee.tonemapping_pars_fragment:"",e.toneMapping!==lr?VM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,HM("linearToOutputTexel",e.outputColorSpace),GM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),o=th(o),o=Ld(o,e),o=Dd(o,e),a=th(a),a=Ld(a,e),a=Dd(a,e),o=Id(o),a=Id(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=y+p+o,S=y+g+a,R=Cd(i,i.VERTEX_SHADER,v),A=Cd(i,i.FRAGMENT_SHADER,S);i.attachShader(_,R),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(M){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(R).trim(),D=i.getShaderInfoLog(A).trim();let H=!0,k=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,A);else{const X=Pd(i,R,"vertex"),V=Pd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+I+`
`+X+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||D==="")&&(k=!1);k&&(M.diagnostics={runnable:H,programLog:I,vertexShader:{log:z,prefix:p},fragmentShader:{log:D,prefix:g}})}i.deleteShader(R),i.deleteShader(A),L=new ll(i,_),N=qM(i,_)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let N;this.getAttributes=function(){return N===void 0&&E(this),N};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,FM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=BM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let r1=0;class s1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new o1(t),e.set(t,n)),n}}class o1{constructor(t){this.id=r1++,this.code=t,this.usedTimes=0}}function a1(r,t,e,n,i,s,o){const a=new qh,l=new s1,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,M,I,z,D){const H=z.fog,k=D.geometry,X=x.isMeshStandardMaterial?z.environment:null,V=(x.isMeshStandardMaterial?e:t).get(x.envMap||X),lt=V&&V.mapping===Ul?V.image.height:null,b=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ut=st!==void 0?st.length:0;let Nt=0;k.morphAttributes.position!==void 0&&(Nt=1),k.morphAttributes.normal!==void 0&&(Nt=2),k.morphAttributes.color!==void 0&&(Nt=3);let Z,Q,_t,ht;if(b){const Ot=mi[b];Z=Ot.vertexShader,Q=Ot.fragmentShader}else Z=x.vertexShader,Q=x.fragmentShader,l.update(x),_t=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);const St=r.getRenderTarget(),Ct=D.isInstancedMesh===!0,Bt=D.isBatchedMesh===!0,Ht=!!x.map,at=!!x.matcap,C=!!V,dt=!!x.aoMap,pt=!!x.lightMap,ut=!!x.bumpMap,O=!!x.normalMap,Pt=!!x.displacementMap,Mt=!!x.emissiveMap,P=!!x.metalnessMap,T=!!x.roughnessMap,q=x.anisotropy>0,nt=x.clearcoat>0,ct=x.dispersion>0,et=x.iridescence>0,Dt=x.sheen>0,ft=x.transmission>0,tt=q&&!!x.anisotropyMap,vt=nt&&!!x.clearcoatMap,U=nt&&!!x.clearcoatNormalMap,Y=nt&&!!x.clearcoatRoughnessMap,j=et&&!!x.iridescenceMap,xt=et&&!!x.iridescenceThicknessMap,ot=Dt&&!!x.sheenColorMap,Tt=Dt&&!!x.sheenRoughnessMap,Et=!!x.specularMap,kt=!!x.specularColorMap,F=!!x.specularIntensityMap,it=ft&&!!x.transmissionMap,J=ft&&!!x.thicknessMap,rt=!!x.gradientMap,mt=!!x.alphaMap,gt=x.alphaTest>0,qt=!!x.alphaHash,ue=!!x.extensions;let Te=lr;x.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Te=r.toneMapping);const ie={shaderID:b,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:Q,defines:x.defines,customVertexShaderID:_t,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Bt,batchingColor:Bt&&D._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&D.instanceColor!==null,instancingMorph:Ct&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:St===null?r.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:pr,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:at,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:lt,aoMap:dt,lightMap:pt,bumpMap:ut,normalMap:O,displacementMap:d&&Pt,emissiveMap:Mt,normalMapObjectSpace:O&&x.normalMapType===dv,normalMapTangentSpace:O&&x.normalMapType===Zm,metalnessMap:P,roughnessMap:T,anisotropy:q,anisotropyMap:tt,clearcoat:nt,clearcoatMap:vt,clearcoatNormalMap:U,clearcoatRoughnessMap:Y,dispersion:ct,iridescence:et,iridescenceMap:j,iridescenceThicknessMap:xt,sheen:Dt,sheenColorMap:ot,sheenRoughnessMap:Tt,specularMap:Et,specularColorMap:kt,specularIntensityMap:F,transmission:ft,transmissionMap:it,thicknessMap:J,gradientMap:rt,opaque:x.transparent===!1&&x.blending===Ds&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:gt,alphaHash:qt,combine:x.combine,mapUv:Ht&&p(x.map.channel),aoMapUv:dt&&p(x.aoMap.channel),lightMapUv:pt&&p(x.lightMap.channel),bumpMapUv:ut&&p(x.bumpMap.channel),normalMapUv:O&&p(x.normalMap.channel),displacementMapUv:Pt&&p(x.displacementMap.channel),emissiveMapUv:Mt&&p(x.emissiveMap.channel),metalnessMapUv:P&&p(x.metalnessMap.channel),roughnessMapUv:T&&p(x.roughnessMap.channel),anisotropyMapUv:tt&&p(x.anisotropyMap.channel),clearcoatMapUv:vt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:U&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&p(x.sheenRoughnessMap.channel),specularMapUv:Et&&p(x.specularMap.channel),specularColorMapUv:kt&&p(x.specularColorMap.channel),specularIntensityMapUv:F&&p(x.specularIntensityMap.channel),transmissionMapUv:it&&p(x.transmissionMap.channel),thicknessMapUv:J&&p(x.thicknessMap.channel),alphaMapUv:mt&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(O||q),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Ht||mt),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===Ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function y(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)M.push(I),M.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(v(M,x),S(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function v(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const M=_[x.type];let I;if(M){const z=mi[M];I=Wv.clone(z.uniforms)}else I=x.uniforms;return I}function A(x,M){let I;for(let z=0,D=u.length;z<D;z++){const H=u[z];if(H.cacheKey===M){I=H,++I.usedTimes;break}}return I===void 0&&(I=new i1(r,M,x,s),u.push(I)),I}function E(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function L(x){l.remove(x)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:R,acquireProgram:A,releaseProgram:E,releaseShaderCache:L,programs:u,dispose:N}}function l1(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function c1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Nd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Od(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,d,m,_,p){let g=r[t];return g===void 0?(g={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:p},r[t]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=d,g.groupOrder=m,g.renderOrder=f.renderOrder,g.z=_,g.group=p),t++,g}function a(f,h,d,m,_,p){const g=o(f,h,d,m,_,p);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):e.push(g)}function l(f,h,d,m,_,p){const g=o(f,h,d,m,_,p);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function c(f,h){e.length>1&&e.sort(f||c1),n.length>1&&n.sort(h||Nd),i.length>1&&i.sort(h||Nd)}function u(){for(let f=t,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function u1(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Od,r.set(n,[o])):i>=s.length?(o=new Od,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function h1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new te};break;case"SpotLight":e={position:new B,direction:new B,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function f1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let d1=0;function p1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function m1(r){const t=new h1,e=f1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new de,o=new de;function a(c){let u=0,f=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,y=0,v=0,S=0,R=0,A=0,E=0;c.sort(p1);for(let N=0,x=c.length;N<x;N++){const M=c[N],I=M.color,z=M.intensity,D=M.distance,H=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=I.r*z,f+=I.g*z,h+=I.b*z;else if(M.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(M.sh.coefficients[k],z);E++}else if(M.isDirectionalLight){const k=t.get(M);if(k.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const X=M.shadow,V=e.get(M);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=M.shadow.matrix,y++}n.directional[d]=k,d++}else if(M.isSpotLight){const k=t.get(M);k.position.setFromMatrixPosition(M.matrixWorld),k.color.copy(I).multiplyScalar(z),k.distance=D,k.coneCos=Math.cos(M.angle),k.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),k.decay=M.decay,n.spot[_]=k;const X=M.shadow;if(M.map&&(n.spotLightMap[R]=M.map,R++,X.updateMatrices(M),M.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,M.castShadow){const V=e.get(M);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=H,S++}_++}else if(M.isRectAreaLight){const k=t.get(M);k.color.copy(I).multiplyScalar(z),k.halfWidth.set(M.width*.5,0,0),k.halfHeight.set(0,M.height*.5,0),n.rectArea[p]=k,p++}else if(M.isPointLight){const k=t.get(M);if(k.color.copy(M.color).multiplyScalar(M.intensity),k.distance=M.distance,k.decay=M.decay,M.castShadow){const X=M.shadow,V=e.get(M);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=M.shadow.matrix,v++}n.point[m]=k,m++}else if(M.isHemisphereLight){const k=t.get(M);k.skyColor.copy(M.color).multiplyScalar(z),k.groundColor.copy(M.groundColor).multiplyScalar(z),n.hemi[g]=k,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==g||L.numDirectionalShadows!==y||L.numPointShadows!==v||L.numSpotShadows!==S||L.numSpotMaps!==R||L.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=g,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=S,L.numSpotMaps=R,L.numLightProbes=E,n.version=d1++)}function l(c,u){let f=0,h=0,d=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const v=c[g];if(v.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(v.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Fd(r){const t=new m1(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function g1(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Fd(r),t.set(i,[a])):s>=o.length?(a=new Fd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class _1 extends Zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class v1 extends Zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const x1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S1(r,t,e){let n=new Yh;const i=new At,s=new At,o=new ye,a=new _1({depthPacking:fv}),l=new v1,c={},u=e.maxTextureSize,f={[ki]:Mn,[Mn]:ki,[Ui]:Ui},h=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:x1,fragmentShader:y1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new pn;m.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xe(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bm;let g=this.type;this.render=function(A,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const N=r.getRenderTarget(),x=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),I=r.state;I.setBlending(ar),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=g!==Pi&&this.type===Pi,D=g===Pi&&this.type!==Pi;for(let H=0,k=A.length;H<k;H++){const X=A[H],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const lt=V.getFrameExtents();if(i.multiply(lt),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/lt.x),i.x=s.x*lt.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/lt.y),i.y=s.y*lt.y,V.mapSize.y=s.y)),V.map===null||z===!0||D===!0){const st=this.type!==Pi?{minFilter:An,magFilter:An}:{};V.map!==null&&V.map.dispose(),V.map=new Xr(i.x,i.y,st),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const b=V.getViewportCount();for(let st=0;st<b;st++){const Ut=V.getViewport(st);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),I.viewport(o),V.updateMatrices(X,st),n=V.getFrustum(),S(E,L,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Pi&&y(V,L),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(N,x,M)};function y(A,E){const L=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xr(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,L,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,L,d,_,null)}function v(A,E,L,N){let x=null;const M=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)x=M;else if(x=L.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=x.uuid,z=E.uuid;let D=c[I];D===void 0&&(D={},c[I]=D);let H=D[z];H===void 0&&(H=x.clone(),D[z]=H,E.addEventListener("dispose",R)),x=H}if(x.visible=E.visible,x.wireframe=E.wireframe,N===Pi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=r.properties.get(x);I.light=L}return x}function S(A,E,L,N,x){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Pi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const z=t.update(A),D=A.material;if(Array.isArray(D)){const H=z.groups;for(let k=0,X=H.length;k<X;k++){const V=H[k],lt=D[V.materialIndex];if(lt&&lt.visible){const b=v(A,lt,N,x);A.onBeforeShadow(r,A,E,L,z,b,V),r.renderBufferDirect(L,null,z,b,A,V),A.onAfterShadow(r,A,E,L,z,b,V)}}}else if(D.visible){const H=v(A,D,N,x);A.onBeforeShadow(r,A,E,L,z,H,null),r.renderBufferDirect(L,null,z,H,A,null),A.onAfterShadow(r,A,E,L,z,H,null)}}const I=A.children;for(let z=0,D=I.length;z<D;z++)S(I[z],E,L,N,x)}function R(A){A.target.removeEventListener("dispose",R);for(const L in c){const N=c[L],x=A.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}const M1={[gu]:_u,[vu]:Su,[xu]:Mu,[Ws]:yu,[_u]:gu,[Su]:vu,[Mu]:xu,[yu]:Ws};function E1(r){function t(){let F=!1;const it=new ye;let J=null;const rt=new ye(0,0,0,0);return{setMask:function(mt){J!==mt&&!F&&(r.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){F=mt},setClear:function(mt,gt,qt,ue,Te){Te===!0&&(mt*=ue,gt*=ue,qt*=ue),it.set(mt,gt,qt,ue),rt.equals(it)===!1&&(r.clearColor(mt,gt,qt,ue),rt.copy(it))},reset:function(){F=!1,J=null,rt.set(-1,0,0,0)}}}function e(){let F=!1,it=!1,J=null,rt=null,mt=null;return{setReversed:function(gt){it=gt},setTest:function(gt){gt?_t(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(gt){J!==gt&&!F&&(r.depthMask(gt),J=gt)},setFunc:function(gt){if(it&&(gt=M1[gt]),rt!==gt){switch(gt){case gu:r.depthFunc(r.NEVER);break;case _u:r.depthFunc(r.ALWAYS);break;case vu:r.depthFunc(r.LESS);break;case Ws:r.depthFunc(r.LEQUAL);break;case xu:r.depthFunc(r.EQUAL);break;case yu:r.depthFunc(r.GEQUAL);break;case Su:r.depthFunc(r.GREATER);break;case Mu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}rt=gt}},setLocked:function(gt){F=gt},setClear:function(gt){mt!==gt&&(r.clearDepth(gt),mt=gt)},reset:function(){F=!1,J=null,rt=null,mt=null}}}function n(){let F=!1,it=null,J=null,rt=null,mt=null,gt=null,qt=null,ue=null,Te=null;return{setTest:function(ie){F||(ie?_t(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(ie){it!==ie&&!F&&(r.stencilMask(ie),it=ie)},setFunc:function(ie,Ot,Ft){(J!==ie||rt!==Ot||mt!==Ft)&&(r.stencilFunc(ie,Ot,Ft),J=ie,rt=Ot,mt=Ft)},setOp:function(ie,Ot,Ft){(gt!==ie||qt!==Ot||ue!==Ft)&&(r.stencilOp(ie,Ot,Ft),gt=ie,qt=Ot,ue=Ft)},setLocked:function(ie){F=ie},setClear:function(ie){Te!==ie&&(r.clearStencil(ie),Te=ie)},reset:function(){F=!1,it=null,J=null,rt=null,mt=null,gt=null,qt=null,ue=null,Te=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,m=!1,_=null,p=null,g=null,y=null,v=null,S=null,R=null,A=new te(0,0,0),E=0,L=!1,N=null,x=null,M=null,I=null,z=null;const D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=k>=2);let V=null,lt={};const b=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),Ut=new ye().fromArray(b),Nt=new ye().fromArray(st);function Z(F,it,J,rt){const mt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(F,gt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<J;qt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(it,0,r.RGBA,1,1,rt,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(it+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return gt}const Q={};Q[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_t(r.DEPTH_TEST),s.setFunc(Ws),pt(!1),ut(qf),_t(r.CULL_FACE),C(ar);function _t(F){c[F]!==!0&&(r.enable(F),c[F]=!0)}function ht(F){c[F]!==!1&&(r.disable(F),c[F]=!1)}function St(F,it){return u[F]!==it?(r.bindFramebuffer(F,it),u[F]=it,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=it),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=it),!0):!1}function Ct(F,it){let J=h,rt=!1;if(F){J=f.get(it),J===void 0&&(J=[],f.set(it,J));const mt=F.textures;if(J.length!==mt.length||J[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,qt=mt.length;gt<qt;gt++)J[gt]=r.COLOR_ATTACHMENT0+gt;J.length=mt.length,rt=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,rt=!0);rt&&r.drawBuffers(J)}function Bt(F){return d!==F?(r.useProgram(F),d=F,!0):!1}const Ht={[Rr]:r.FUNC_ADD,[B_]:r.FUNC_SUBTRACT,[z_]:r.FUNC_REVERSE_SUBTRACT};Ht[k_]=r.MIN,Ht[H_]=r.MAX;const at={[V_]:r.ZERO,[G_]:r.ONE,[W_]:r.SRC_COLOR,[pu]:r.SRC_ALPHA,[Z_]:r.SRC_ALPHA_SATURATE,[$_]:r.DST_COLOR,[q_]:r.DST_ALPHA,[X_]:r.ONE_MINUS_SRC_COLOR,[mu]:r.ONE_MINUS_SRC_ALPHA,[K_]:r.ONE_MINUS_DST_COLOR,[Y_]:r.ONE_MINUS_DST_ALPHA,[J_]:r.CONSTANT_COLOR,[j_]:r.ONE_MINUS_CONSTANT_COLOR,[Q_]:r.CONSTANT_ALPHA,[tv]:r.ONE_MINUS_CONSTANT_ALPHA};function C(F,it,J,rt,mt,gt,qt,ue,Te,ie){if(F===ar){m===!0&&(ht(r.BLEND),m=!1);return}if(m===!1&&(_t(r.BLEND),m=!0),F!==F_){if(F!==_||ie!==L){if((p!==Rr||v!==Rr)&&(r.blendEquation(r.FUNC_ADD),p=Rr,v=Rr),ie)switch(F){case Ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case du:r.blendFunc(r.ONE,r.ONE);break;case Yf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $f:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case du:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $f:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}g=null,y=null,S=null,R=null,A.set(0,0,0),E=0,_=F,L=ie}return}mt=mt||it,gt=gt||J,qt=qt||rt,(it!==p||mt!==v)&&(r.blendEquationSeparate(Ht[it],Ht[mt]),p=it,v=mt),(J!==g||rt!==y||gt!==S||qt!==R)&&(r.blendFuncSeparate(at[J],at[rt],at[gt],at[qt]),g=J,y=rt,S=gt,R=qt),(ue.equals(A)===!1||Te!==E)&&(r.blendColor(ue.r,ue.g,ue.b,Te),A.copy(ue),E=Te),_=F,L=!1}function dt(F,it){F.side===Ui?ht(r.CULL_FACE):_t(r.CULL_FACE);let J=F.side===Mn;it&&(J=!J),pt(J),F.blending===Ds&&F.transparent===!1?C(ar):C(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),i.setMask(F.colorWrite);const rt=F.stencilWrite;o.setTest(rt),rt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Pt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(F){N!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),N=F)}function ut(F){F!==U_?(_t(r.CULL_FACE),F!==x&&(F===qf?r.cullFace(r.BACK):F===N_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),x=F}function O(F){F!==M&&(H&&r.lineWidth(F),M=F)}function Pt(F,it,J){F?(_t(r.POLYGON_OFFSET_FILL),(I!==it||z!==J)&&(r.polygonOffset(it,J),I=it,z=J)):ht(r.POLYGON_OFFSET_FILL)}function Mt(F){F?_t(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function P(F){F===void 0&&(F=r.TEXTURE0+D-1),V!==F&&(r.activeTexture(F),V=F)}function T(F,it,J){J===void 0&&(V===null?J=r.TEXTURE0+D-1:J=V);let rt=lt[J];rt===void 0&&(rt={type:void 0,texture:void 0},lt[J]=rt),(rt.type!==F||rt.texture!==it)&&(V!==J&&(r.activeTexture(J),V=J),r.bindTexture(F,it||Q[F]),rt.type=F,rt.texture=it)}function q(){const F=lt[V];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(F){Ut.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ut.copy(F))}function ot(F){Nt.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Nt.copy(F))}function Tt(F,it){let J=l.get(it);J===void 0&&(J=new WeakMap,l.set(it,J));let rt=J.get(F);rt===void 0&&(rt=r.getUniformBlockIndex(it,F.name),J.set(F,rt))}function Et(F,it){const rt=l.get(it).get(F);a.get(it)!==rt&&(r.uniformBlockBinding(it,rt,F.__bindingPointIndex),a.set(it,rt))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,lt={},u={},f=new WeakMap,h=[],d=null,m=!1,_=null,p=null,g=null,y=null,v=null,S=null,R=null,A=new te(0,0,0),E=0,L=!1,N=null,x=null,M=null,I=null,z=null,Ut.set(0,0,r.canvas.width,r.canvas.height),Nt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:_t,disable:ht,bindFramebuffer:St,drawBuffers:Ct,useProgram:Bt,setBlending:C,setMaterial:dt,setFlipSided:pt,setCullFace:ut,setLineWidth:O,setPolygonOffset:Pt,setScissorTest:Mt,activeTexture:P,bindTexture:T,unbindTexture:q,compressedTexImage2D:nt,compressedTexImage3D:ct,texImage2D:Y,texImage3D:j,updateUBOMapping:Tt,uniformBlockBinding:Et,texStorage2D:vt,texStorage3D:U,texSubImage2D:et,texSubImage3D:Dt,compressedTexSubImage2D:ft,compressedTexSubImage3D:tt,scissor:xt,viewport:ot,reset:kt}}function Bd(r,t,e,n){const i=T1(n);switch(e){case Wm:return r*t;case qm:return r*t;case Ym:return r*t*2;case Hh:return r*t/i.components*i.byteLength;case Vh:return r*t/i.components*i.byteLength;case $m:return r*t*2/i.components*i.byteLength;case Gh:return r*t*2/i.components*i.byteLength;case Xm:return r*t*3/i.components*i.byteLength;case ci:return r*t*4/i.components*i.byteLength;case Wh:return r*t*4/i.components*i.byteLength;case nl:case il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case rl:case sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ru:case Pu:return Math.max(r,16)*Math.max(t,8)/4;case Au:case Cu:return Math.max(r,8)*Math.max(t,8)/2;case Lu:case Du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ou:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Fu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case zu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ku:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Hu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Vu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Wu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Xu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case qu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Yu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ol:case $u:case Ku:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Km:case Zu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ju:case ju:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T1(r){switch(r){case Hi:case Hm:return{byteLength:1,components:1};case Ko:case Vm:case ta:return{byteLength:2,components:1};case zh:case kh:return{byteLength:2,components:4};case Wr:case Bh:case xi:return{byteLength:4,components:1};case Gm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function w1(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,T){return d?new OffscreenCanvas(P,T):bl("canvas")}function _(P,T,q){let nt=1;const ct=Mt(P);if((ct.width>q||ct.height>q)&&(nt=q/Math.max(ct.width,ct.height)),nt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(nt*ct.width),Dt=Math.floor(nt*ct.height);f===void 0&&(f=m(et,Dt));const ft=T?m(et,Dt):f;return ft.width=et,ft.height=Dt,ft.getContext("2d").drawImage(P,0,0,et,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+et+"x"+Dt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==An&&P.minFilter!==ai}function g(P){r.generateMipmap(P)}function y(P,T,q,nt,ct=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=T;if(T===r.RED&&(q===r.FLOAT&&(et=r.R32F),q===r.HALF_FLOAT&&(et=r.R16F),q===r.UNSIGNED_BYTE&&(et=r.R8)),T===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(et=r.R8UI),q===r.UNSIGNED_SHORT&&(et=r.R16UI),q===r.UNSIGNED_INT&&(et=r.R32UI),q===r.BYTE&&(et=r.R8I),q===r.SHORT&&(et=r.R16I),q===r.INT&&(et=r.R32I)),T===r.RG&&(q===r.FLOAT&&(et=r.RG32F),q===r.HALF_FLOAT&&(et=r.RG16F),q===r.UNSIGNED_BYTE&&(et=r.RG8)),T===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(et=r.RG8UI),q===r.UNSIGNED_SHORT&&(et=r.RG16UI),q===r.UNSIGNED_INT&&(et=r.RG32UI),q===r.BYTE&&(et=r.RG8I),q===r.SHORT&&(et=r.RG16I),q===r.INT&&(et=r.RG32I)),T===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(et=r.RGB8UI),q===r.UNSIGNED_SHORT&&(et=r.RGB16UI),q===r.UNSIGNED_INT&&(et=r.RGB32UI),q===r.BYTE&&(et=r.RGB8I),q===r.SHORT&&(et=r.RGB16I),q===r.INT&&(et=r.RGB32I)),T===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(et=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(et=r.RGBA16UI),q===r.UNSIGNED_INT&&(et=r.RGBA32UI),q===r.BYTE&&(et=r.RGBA8I),q===r.SHORT&&(et=r.RGBA16I),q===r.INT&&(et=r.RGBA32I)),T===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),T===r.RGBA){const Dt=ct?Ml:ge.getTransfer(nt);q===r.FLOAT&&(et=r.RGBA32F),q===r.HALF_FLOAT&&(et=r.RGBA16F),q===r.UNSIGNED_BYTE&&(et=Dt===Ae?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(P,T){let q;return P?T===null||T===Wr||T===Ys?q=r.DEPTH24_STENCIL8:T===xi?q=r.DEPTH32F_STENCIL8:T===Ko&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wr||T===Ys?q=r.DEPTH_COMPONENT24:T===xi?q=r.DEPTH_COMPONENT32F:T===Ko&&(q=r.DEPTH_COMPONENT16),q}function S(P,T){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==ai?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function R(P){const T=P.target;T.removeEventListener("dispose",R),E(T),T.isVideoTexture&&u.delete(T)}function A(P){const T=P.target;T.removeEventListener("dispose",A),N(T)}function E(P){const T=n.get(P);if(T.__webglInit===void 0)return;const q=P.source,nt=h.get(q);if(nt){const ct=nt[T.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&L(P),Object.keys(nt).length===0&&h.delete(q)}n.remove(P)}function L(P){const T=n.get(P);r.deleteTexture(T.__webglTexture);const q=P.source,nt=h.get(q);delete nt[T.__cacheKey],o.memory.textures--}function N(P){const T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let ct=0;ct<T.__webglFramebuffer[nt].length;ct++)r.deleteFramebuffer(T.__webglFramebuffer[nt][ct]);else r.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)r.deleteFramebuffer(T.__webglFramebuffer[nt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=P.textures;for(let nt=0,ct=q.length;nt<ct;nt++){const et=n.get(q[nt]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(q[nt])}n.remove(P)}let x=0;function M(){x=0}function I(){const P=x;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),x+=1,P}function z(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function D(P,T){const q=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const nt=P.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(q,P,T);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+T)}function H(P,T){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Nt(q,P,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+T)}function k(P,T){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Nt(q,P,T);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+T)}function X(P,T){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Z(q,P,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+T)}const V={[wu]:r.REPEAT,[Dr]:r.CLAMP_TO_EDGE,[bu]:r.MIRRORED_REPEAT},lt={[An]:r.NEAREST,[uv]:r.NEAREST_MIPMAP_NEAREST,[_a]:r.NEAREST_MIPMAP_LINEAR,[ai]:r.LINEAR,[rc]:r.LINEAR_MIPMAP_NEAREST,[Ir]:r.LINEAR_MIPMAP_LINEAR},b={[pv]:r.NEVER,[yv]:r.ALWAYS,[mv]:r.LESS,[Jm]:r.LEQUAL,[gv]:r.EQUAL,[xv]:r.GEQUAL,[_v]:r.GREATER,[vv]:r.NOTEQUAL};function st(P,T){if(T.type===xi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ai||T.magFilter===rc||T.magFilter===_a||T.magFilter===Ir||T.minFilter===ai||T.minFilter===rc||T.minFilter===_a||T.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,V[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,V[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,V[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,lt[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,lt[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,b[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==_a&&T.minFilter!==Ir||T.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ut(P,T){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",R));const nt=T.source;let ct=h.get(nt);ct===void 0&&(ct={},h.set(nt,ct));const et=z(T);if(et!==P.__cacheKey){ct[et]===void 0&&(ct[et]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ct[et].usedTimes++;const Dt=ct[P.__cacheKey];Dt!==void 0&&(ct[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&L(T)),P.__cacheKey=et,P.__webglTexture=ct[et].texture}return q}function Nt(P,T,q){let nt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(nt=r.TEXTURE_3D);const ct=Ut(P,T),et=T.source;e.bindTexture(nt,P.__webglTexture,r.TEXTURE0+q);const Dt=n.get(et);if(et.version!==Dt.__version||ct===!0){e.activeTexture(r.TEXTURE0+q);const ft=ge.getPrimaries(ge.workingColorSpace),tt=T.colorSpace===ji?null:ge.getPrimaries(T.colorSpace),vt=T.colorSpace===ji||ft===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let U=_(T.image,!1,i.maxTextureSize);U=Pt(T,U);const Y=s.convert(T.format,T.colorSpace),j=s.convert(T.type);let xt=y(T.internalFormat,Y,j,T.colorSpace,T.isVideoTexture);st(nt,T);let ot;const Tt=T.mipmaps,Et=T.isVideoTexture!==!0,kt=Dt.__version===void 0||ct===!0,F=et.dataReady,it=S(T,U);if(T.isDepthTexture)xt=v(T.format===$s,T.type),kt&&(Et?e.texStorage2D(r.TEXTURE_2D,1,xt,U.width,U.height):e.texImage2D(r.TEXTURE_2D,0,xt,U.width,U.height,0,Y,j,null));else if(T.isDataTexture)if(Tt.length>0){Et&&kt&&e.texStorage2D(r.TEXTURE_2D,it,xt,Tt[0].width,Tt[0].height);for(let J=0,rt=Tt.length;J<rt;J++)ot=Tt[J],Et?F&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,ot.width,ot.height,Y,j,ot.data):e.texImage2D(r.TEXTURE_2D,J,xt,ot.width,ot.height,0,Y,j,ot.data);T.generateMipmaps=!1}else Et?(kt&&e.texStorage2D(r.TEXTURE_2D,it,xt,U.width,U.height),F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,U.width,U.height,Y,j,U.data)):e.texImage2D(r.TEXTURE_2D,0,xt,U.width,U.height,0,Y,j,U.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Et&&kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,xt,Tt[0].width,Tt[0].height,U.depth);for(let J=0,rt=Tt.length;J<rt;J++)if(ot=Tt[J],T.format!==ci)if(Y!==null)if(Et){if(F)if(T.layerUpdates.size>0){const mt=Bd(ot.width,ot.height,T.format,T.type);for(const gt of T.layerUpdates){const qt=ot.data.subarray(gt*mt/ot.data.BYTES_PER_ELEMENT,(gt+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,gt,ot.width,ot.height,1,Y,qt,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,U.depth,Y,ot.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,xt,ot.width,ot.height,U.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?F&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,U.depth,Y,j,ot.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,xt,ot.width,ot.height,U.depth,0,Y,j,ot.data)}else{Et&&kt&&e.texStorage2D(r.TEXTURE_2D,it,xt,Tt[0].width,Tt[0].height);for(let J=0,rt=Tt.length;J<rt;J++)ot=Tt[J],T.format!==ci?Y!==null?Et?F&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,ot.width,ot.height,Y,ot.data):e.compressedTexImage2D(r.TEXTURE_2D,J,xt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?F&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,ot.width,ot.height,Y,j,ot.data):e.texImage2D(r.TEXTURE_2D,J,xt,ot.width,ot.height,0,Y,j,ot.data)}else if(T.isDataArrayTexture)if(Et){if(kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,xt,U.width,U.height,U.depth),F)if(T.layerUpdates.size>0){const J=Bd(U.width,U.height,T.format,T.type);for(const rt of T.layerUpdates){const mt=U.data.subarray(rt*J/U.data.BYTES_PER_ELEMENT,(rt+1)*J/U.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,rt,U.width,U.height,1,Y,j,mt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,Y,j,U.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,U.width,U.height,U.depth,0,Y,j,U.data);else if(T.isData3DTexture)Et?(kt&&e.texStorage3D(r.TEXTURE_3D,it,xt,U.width,U.height,U.depth),F&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,Y,j,U.data)):e.texImage3D(r.TEXTURE_3D,0,xt,U.width,U.height,U.depth,0,Y,j,U.data);else if(T.isFramebufferTexture){if(kt)if(Et)e.texStorage2D(r.TEXTURE_2D,it,xt,U.width,U.height);else{let J=U.width,rt=U.height;for(let mt=0;mt<it;mt++)e.texImage2D(r.TEXTURE_2D,mt,xt,J,rt,0,Y,j,null),J>>=1,rt>>=1}}else if(Tt.length>0){if(Et&&kt){const J=Mt(Tt[0]);e.texStorage2D(r.TEXTURE_2D,it,xt,J.width,J.height)}for(let J=0,rt=Tt.length;J<rt;J++)ot=Tt[J],Et?F&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,Y,j,ot):e.texImage2D(r.TEXTURE_2D,J,xt,Y,j,ot);T.generateMipmaps=!1}else if(Et){if(kt){const J=Mt(U);e.texStorage2D(r.TEXTURE_2D,it,xt,J.width,J.height)}F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Y,j,U)}else e.texImage2D(r.TEXTURE_2D,0,xt,Y,j,U);p(T)&&g(nt),Dt.__version=et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Z(P,T,q){if(T.image.length!==6)return;const nt=Ut(P,T),ct=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+q);const et=n.get(ct);if(ct.version!==et.__version||nt===!0){e.activeTexture(r.TEXTURE0+q);const Dt=ge.getPrimaries(ge.workingColorSpace),ft=T.colorSpace===ji?null:ge.getPrimaries(T.colorSpace),tt=T.colorSpace===ji||Dt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const vt=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,Y=[];for(let rt=0;rt<6;rt++)!vt&&!U?Y[rt]=_(T.image[rt],!0,i.maxCubemapSize):Y[rt]=U?T.image[rt].image:T.image[rt],Y[rt]=Pt(T,Y[rt]);const j=Y[0],xt=s.convert(T.format,T.colorSpace),ot=s.convert(T.type),Tt=y(T.internalFormat,xt,ot,T.colorSpace),Et=T.isVideoTexture!==!0,kt=et.__version===void 0||nt===!0,F=ct.dataReady;let it=S(T,j);st(r.TEXTURE_CUBE_MAP,T);let J;if(vt){Et&&kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,it,Tt,j.width,j.height);for(let rt=0;rt<6;rt++){J=Y[rt].mipmaps;for(let mt=0;mt<J.length;mt++){const gt=J[mt];T.format!==ci?xt!==null?Et?F&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,Tt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,gt.width,gt.height,xt,ot,gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,Tt,gt.width,gt.height,0,xt,ot,gt.data)}}}else{if(J=T.mipmaps,Et&&kt){J.length>0&&it++;const rt=Mt(Y[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,it,Tt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(U){Et?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Y[rt].width,Y[rt].height,xt,ot,Y[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Tt,Y[rt].width,Y[rt].height,0,xt,ot,Y[rt].data);for(let mt=0;mt<J.length;mt++){const qt=J[mt].image[rt].image;Et?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,qt.width,qt.height,xt,ot,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,Tt,qt.width,qt.height,0,xt,ot,qt.data)}}else{Et?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,xt,ot,Y[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Tt,xt,ot,Y[rt]);for(let mt=0;mt<J.length;mt++){const gt=J[mt];Et?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,xt,ot,gt.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,Tt,xt,ot,gt.image[rt])}}}p(T)&&g(r.TEXTURE_CUBE_MAP),et.__version=ct.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Q(P,T,q,nt,ct,et){const Dt=s.convert(q.format,q.colorSpace),ft=s.convert(q.type),tt=y(q.internalFormat,Dt,ft,q.colorSpace);if(!n.get(T).__hasExternalTextures){const U=Math.max(1,T.width>>et),Y=Math.max(1,T.height>>et);ct===r.TEXTURE_3D||ct===r.TEXTURE_2D_ARRAY?e.texImage3D(ct,et,tt,U,Y,T.depth,0,Dt,ft,null):e.texImage2D(ct,et,tt,U,Y,0,Dt,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),ut(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,ct,n.get(q).__webglTexture,0,pt(T)):(ct===r.TEXTURE_2D||ct>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,ct,n.get(q).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(P,T,q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const nt=T.depthTexture,ct=nt&&nt.isDepthTexture?nt.type:null,et=v(T.stencilBuffer,ct),Dt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=pt(T);ut(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,et,T.width,T.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,et,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,et,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Dt,r.RENDERBUFFER,P)}else{const nt=T.textures;for(let ct=0;ct<nt.length;ct++){const et=nt[ct],Dt=s.convert(et.format,et.colorSpace),ft=s.convert(et.type),tt=y(et.internalFormat,Dt,ft,et.colorSpace),vt=pt(T);q&&ut(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,tt,T.width,T.height):ut(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,tt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,tt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);const nt=n.get(T.depthTexture).__webglTexture,ct=pt(T);if(T.depthTexture.format===Is)ut(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(T.depthTexture.format===$s)ut(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function St(P){const T=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const nt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),nt){const ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,nt.removeEventListener("dispose",ct)};nt.addEventListener("dispose",ct),T.__depthDisposeCallback=ct}T.__boundDepthTexture=nt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ht(T.__webglFramebuffer,P)}else if(q){T.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[nt]),T.__webglDepthbuffer[nt]===void 0)T.__webglDepthbuffer[nt]=r.createRenderbuffer(),_t(T.__webglDepthbuffer[nt],P,!1);else{const ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,et)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),_t(T.__webglDepthbuffer,P,!1);else{const nt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,ct)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(P,T,q){const nt=n.get(P);T!==void 0&&Q(nt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&St(P)}function Bt(P){const T=P.texture,q=n.get(P),nt=n.get(T);P.addEventListener("dispose",A);const ct=P.textures,et=P.isWebGLCubeRenderTarget===!0,Dt=ct.length>1;if(Dt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=T.version,o.memory.textures++),et){q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[ft]=[];for(let tt=0;tt<T.mipmaps.length;tt++)q.__webglFramebuffer[ft][tt]=r.createFramebuffer()}else q.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)q.__webglFramebuffer[ft]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Dt)for(let ft=0,tt=ct.length;ft<tt;ft++){const vt=n.get(ct[ft]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&ut(P)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ft=0;ft<ct.length;ft++){const tt=ct[ft];q.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ft]);const vt=s.convert(tt.format,tt.colorSpace),U=s.convert(tt.type),Y=y(tt.internalFormat,vt,U,tt.colorSpace,P.isXRRenderTarget===!0),j=pt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,Y,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,q.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),_t(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),st(r.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)Q(q.__webglFramebuffer[ft][tt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,tt);else Q(q.__webglFramebuffer[ft],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(T)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let ft=0,tt=ct.length;ft<tt;ft++){const vt=ct[ft],U=n.get(vt);e.bindTexture(r.TEXTURE_2D,U.__webglTexture),st(r.TEXTURE_2D,vt),Q(q.__webglFramebuffer,P,vt,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,0),p(vt)&&g(r.TEXTURE_2D)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ft,nt.__webglTexture),st(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)Q(q.__webglFramebuffer[tt],P,T,r.COLOR_ATTACHMENT0,ft,tt);else Q(q.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,ft,0);p(T)&&g(ft),e.unbindTexture()}P.depthBuffer&&St(P)}function Ht(P){const T=P.textures;for(let q=0,nt=T.length;q<nt;q++){const ct=T[q];if(p(ct)){const et=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Dt=n.get(ct).__webglTexture;e.bindTexture(et,Dt),g(et),e.unbindTexture()}}}const at=[],C=[];function dt(P){if(P.samples>0){if(ut(P)===!1){const T=P.textures,q=P.width,nt=P.height;let ct=r.COLOR_BUFFER_BIT;const et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=n.get(P),ft=T.length>1;if(ft)for(let tt=0;tt<T.length;tt++)e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let tt=0;tt<T.length;tt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ct|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ct|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[tt]);const vt=n.get(T[tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,vt,0)}r.blitFramebuffer(0,0,q,nt,0,0,q,nt,ct,r.NEAREST),l===!0&&(at.length=0,C.length=0,at.push(r.COLOR_ATTACHMENT0+tt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(at.push(et),C.push(et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,C)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let tt=0;tt<T.length;tt++){e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[tt]);const vt=n.get(T[tt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,vt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function pt(P){return Math.min(i.maxSamples,P.samples)}function ut(P){const T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function O(P){const T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Pt(P,T){const q=P.colorSpace,nt=P.format,ct=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==pr&&q!==ji&&(ge.getTransfer(q)===Ae?(nt!==ci||ct!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=M,this.setTexture2D=D,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=Ct,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ut}function b1(r,t){function e(n,i=ji){let s;const o=ge.getTransfer(i);if(n===Hi)return r.UNSIGNED_BYTE;if(n===zh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===kh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Hm)return r.BYTE;if(n===Vm)return r.SHORT;if(n===Ko)return r.UNSIGNED_SHORT;if(n===Bh)return r.INT;if(n===Wr)return r.UNSIGNED_INT;if(n===xi)return r.FLOAT;if(n===ta)return r.HALF_FLOAT;if(n===Wm)return r.ALPHA;if(n===Xm)return r.RGB;if(n===ci)return r.RGBA;if(n===qm)return r.LUMINANCE;if(n===Ym)return r.LUMINANCE_ALPHA;if(n===Is)return r.DEPTH_COMPONENT;if(n===$s)return r.DEPTH_STENCIL;if(n===Hh)return r.RED;if(n===Vh)return r.RED_INTEGER;if(n===$m)return r.RG;if(n===Gh)return r.RG_INTEGER;if(n===Wh)return r.RGBA_INTEGER;if(n===nl||n===il||n===rl||n===sl)if(o===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Au||n===Ru||n===Cu||n===Pu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Au)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lu||n===Du||n===Iu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lu||n===Du)return o===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Iu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uu||n===Nu||n===Ou||n===Fu||n===Bu||n===zu||n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===qu||n===Yu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ou)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ku)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===$u||n===Ku)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ol)return o===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$u)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ku)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Km||n===Zu||n===Ju||n===ju)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ju)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ju)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class A1 extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ui extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R1={type:"move"};class Uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class L1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new En,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vi({vertexShader:C1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xe(new ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D1 extends Zs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const _=new L1,p=e.getContextAttributes();let g=null,y=null;const v=[],S=[],R=new At;let A=null;const E=new un;E.layers.enable(1),E.viewport=new ye;const L=new un;L.layers.enable(2),L.viewport=new ye;const N=[E,L],x=new A1;x.layers.enable(1),x.layers.enable(2);let M=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=v[Z];return Q===void 0&&(Q=new Uc,v[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=v[Z];return Q===void 0&&(Q=new Uc,v[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=v[Z];return Q===void 0&&(Q=new Uc,v[Z]=Q),Q.getHandSpace()};function z(Z){const Q=S.indexOf(Z.inputSource);if(Q===-1)return;const _t=v[Q];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||o),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",H);for(let Z=0;Z<v.length;Z++){const Q=S[Z];Q!==null&&(S[Z]=null,v[Z].disconnect(Q))}M=null,I=null,_.reset(),t.setRenderTarget(g),d=null,h=null,f=null,i=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",D),i.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Xr(d.framebufferWidth,d.framebufferHeight,{format:ci,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,_t=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?$s:Is,_t=p.stencil?Ys:Wr);const St={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(St),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Xr(h.textureWidth,h.textureHeight,{format:ci,type:Hi,depthTexture:new lg(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Z){for(let Q=0;Q<Z.removed.length;Q++){const _t=Z.removed[Q],ht=S.indexOf(_t);ht>=0&&(S[ht]=null,v[ht].disconnect(_t))}for(let Q=0;Q<Z.added.length;Q++){const _t=Z.added[Q];let ht=S.indexOf(_t);if(ht===-1){for(let Ct=0;Ct<v.length;Ct++)if(Ct>=S.length){S.push(_t),ht=Ct;break}else if(S[Ct]===null){S[Ct]=_t,ht=Ct;break}if(ht===-1)break}const St=v[ht];St&&St.connect(_t)}}const k=new B,X=new B;function V(Z,Q,_t){k.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(_t.matrixWorld);const ht=k.distanceTo(X),St=Q.projectionMatrix.elements,Ct=_t.projectionMatrix.elements,Bt=St[14]/(St[10]-1),Ht=St[14]/(St[10]+1),at=(St[9]+1)/St[5],C=(St[9]-1)/St[5],dt=(St[8]-1)/St[0],pt=(Ct[8]+1)/Ct[0],ut=Bt*dt,O=Bt*pt,Pt=ht/(-dt+pt),Mt=Pt*-dt;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Mt),Z.translateZ(Pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),St[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const P=Bt+Pt,T=Ht+Pt,q=ut-Mt,nt=O+(ht-Mt),ct=at*Ht/T*P,et=C*Ht/T*P;Z.projectionMatrix.makePerspective(q,nt,ct,et,P,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let Q=Z.near,_t=Z.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),x.near=L.near=E.near=Q,x.far=L.far=E.far=_t,(M!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,I=x.far);const ht=Z.parent,St=x.cameras;lt(x,ht);for(let Ct=0;Ct<St.length;Ct++)lt(St[Ct],ht);St.length===2?V(x,E,L):x.projectionMatrix.copy(E.projectionMatrix),b(Z,x,ht)};function b(Z,Q,_t){_t===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qu*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let st=null;function Ut(Z,Q){if(u=Q.getViewerPose(c||o),m=Q,u!==null){const _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ht=!1;_t.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let Ct=0;Ct<_t.length;Ct++){const Bt=_t[Ct];let Ht=null;if(d!==null)Ht=d.getViewport(Bt);else{const C=f.getViewSubImage(h,Bt);Ht=C.viewport,Ct===0&&(t.setRenderTargetTextures(y,C.colorTexture,h.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(y))}let at=N[Ct];at===void 0&&(at=new un,at.layers.enable(Ct),at.viewport=new ye,N[Ct]=at),at.matrix.fromArray(Bt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Bt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Ct===0&&(x.matrix.copy(at.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(at)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")){const Ct=f.getDepthInformation(_t[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,i.renderState)}}for(let _t=0;_t<v.length;_t++){const ht=S[_t],St=v[_t];ht!==null&&St!==void 0&&St.update(ht,Q,c||o)}st&&st(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const Nt=new ag;Nt.setAnimationLoop(Ut),this.setAnimationLoop=function(Z){st=Z},this.dispose=function(){}}}const Mr=new Mi,I1=new de;function U1(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,rg(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,v,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),f(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g)):g.isMeshStandardMaterial?(s(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,S)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Mn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Mn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=t.get(g),v=y.envMap,S=y.envMapRotation;v&&(p.envMap.value=v,Mr.copy(S),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),p.envMapRotation.value.setFromMatrix4(I1.makeRotationFromEuler(Mr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N1(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=i[y.id];S===void 0&&(m(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(y,R);const A=t.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const v=f();y.__bindingPointIndex=v;const S=r.createBuffer(),R=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=i[y.id],S=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,E=S.length;A<E;A++){const L=Array.isArray(S[A])?S[A]:[S[A]];for(let N=0,x=L.length;N<x;N++){const M=L[N];if(d(M,A,N,R)===!0){const I=M.__offset,z=Array.isArray(M.value)?M.value:[M.value];let D=0;for(let H=0;H<z.length;H++){const k=z[H],X=_(k);typeof k=="number"||typeof k=="boolean"?(M.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+D,M.__data)):k.isMatrix3?(M.__data[0]=k.elements[0],M.__data[1]=k.elements[1],M.__data[2]=k.elements[2],M.__data[3]=0,M.__data[4]=k.elements[3],M.__data[5]=k.elements[4],M.__data[6]=k.elements[5],M.__data[7]=0,M.__data[8]=k.elements[6],M.__data[9]=k.elements[7],M.__data[10]=k.elements[8],M.__data[11]=0):(k.toArray(M.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,M.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,S,R){const A=y.value,E=v+"_"+S;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const L=R[E];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[E]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function m(y){const v=y.uniforms;let S=0;const R=16;for(let E=0,L=v.length;E<L;E++){const N=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,M=N.length;x<M;x++){const I=N[x],z=Array.isArray(I.value)?I.value:[I.value];for(let D=0,H=z.length;D<H;D++){const k=z[D],X=_(k),V=S%R,lt=V%X.boundary,b=V+lt;S+=lt,b!==0&&R-b<X.storage&&(S+=R-b),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=X.storage}}}const A=S%R;return A>0&&(S+=R-A),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function g(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}class na{constructor(t={}){const{canvas:e=Ev(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=lr,this.toneMappingExposure=1;const v=this;let S=!1,R=0,A=0,E=null,L=-1,N=null;const x=new ye,M=new ye;let I=null;const z=new te(0);let D=0,H=e.width,k=e.height,X=1,V=null,lt=null;const b=new ye(0,0,H,k),st=new ye(0,0,H,k);let Ut=!1;const Nt=new Yh;let Z=!1,Q=!1;const _t=new de,ht=new de,St=new B,Ct=new ye,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function at(){return E===null?X:1}let C=n;function dt(w,W){return e.getContext(w,W)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fh}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),C===null){const W="webgl2";if(C=dt(W,w),C===null)throw dt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let pt,ut,O,Pt,Mt,P,T,q,nt,ct,et,Dt,ft,tt,vt,U,Y,j,xt,ot,Tt,Et,kt,F;function it(){pt=new HS(C),pt.init(),Et=new b1(C,pt),ut=new NS(C,pt,t,Et),O=new E1(C),ut.reverseDepthBuffer&&O.buffers.depth.setReversed(!0),Pt=new WS(C),Mt=new l1,P=new w1(C,pt,O,Mt,ut,Et,Pt),T=new FS(v),q=new kS(v),nt=new Jv(C),kt=new IS(C,nt),ct=new VS(C,nt,Pt,kt),et=new qS(C,ct,nt,Pt),xt=new XS(C,ut,P),U=new OS(Mt),Dt=new a1(v,T,q,pt,ut,kt,U),ft=new U1(v,Mt),tt=new u1,vt=new g1(pt),j=new DS(v,T,q,O,et,h,l),Y=new S1(v,et,ut),F=new N1(C,Pt,ut,O),ot=new US(C,pt,Pt),Tt=new GS(C,pt,Pt),Pt.programs=Dt.programs,v.capabilities=ut,v.extensions=pt,v.properties=Mt,v.renderLists=tt,v.shadowMap=Y,v.state=O,v.info=Pt}it();const J=new D1(v,C);this.xr=J,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(H,k,!1))},this.getSize=function(w){return w.set(H,k)},this.setSize=function(w,W,$=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,k=W,e.width=Math.floor(w*X),e.height=Math.floor(W*X),$===!0&&(e.style.width=w+"px",e.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(H*X,k*X).floor()},this.setDrawingBufferSize=function(w,W,$){H=w,k=W,X=$,e.width=Math.floor(w*$),e.height=Math.floor(W*$),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(b)},this.setViewport=function(w,W,$,K){w.isVector4?b.set(w.x,w.y,w.z,w.w):b.set(w,W,$,K),O.viewport(x.copy(b).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(st)},this.setScissor=function(w,W,$,K){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,W,$,K),O.scissor(M.copy(st).multiplyScalar(X).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(w){O.setScissorTest(Ut=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){lt=w},this.getClearColor=function(w){return w.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(w=!0,W=!0,$=!0){let K=0;if(w){let G=!1;if(E!==null){const yt=E.texture.format;G=yt===Wh||yt===Gh||yt===Vh}if(G){const yt=E.texture.type,It=yt===Hi||yt===Wr||yt===Ko||yt===Ys||yt===zh||yt===kh,Rt=j.getClearColor(),bt=j.getClearAlpha(),Wt=Rt.r,Zt=Rt.g,Vt=Rt.b;It?(d[0]=Wt,d[1]=Zt,d[2]=Vt,d[3]=bt,C.clearBufferuiv(C.COLOR,0,d)):(m[0]=Wt,m[1]=Zt,m[2]=Vt,m[3]=bt,C.clearBufferiv(C.COLOR,0,m))}else K|=C.COLOR_BUFFER_BIT}W&&(K|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(K|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),tt.dispose(),vt.dispose(),Mt.dispose(),T.dispose(),q.dispose(),et.dispose(),kt.dispose(),F.dispose(),Dt.dispose(),J.dispose(),J.removeEventListener("sessionstart",le),J.removeEventListener("sessionend",wt),Kt.stop()};function rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Pt.autoReset,W=Y.enabled,$=Y.autoUpdate,K=Y.needsUpdate,G=Y.type;it(),Pt.autoReset=w,Y.enabled=W,Y.autoUpdate=$,Y.needsUpdate=K,Y.type=G}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qt(w){const W=w.target;W.removeEventListener("dispose",qt),ue(W)}function ue(w){Te(w),Mt.remove(w)}function Te(w){const W=Mt.get(w).programs;W!==void 0&&(W.forEach(function($){Dt.releaseProgram($)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,$,K,G,yt){W===null&&(W=Bt);const It=G.isMesh&&G.matrixWorld.determinant()<0,Rt=_e(w,W,$,K,G);O.setMaterial(K,It);let bt=$.index,Wt=1;if(K.wireframe===!0){if(bt=ct.getWireframeAttribute($),bt===void 0)return;Wt=2}const Zt=$.drawRange,Vt=$.attributes.position;let he=Zt.start*Wt,ce=(Zt.start+Zt.count)*Wt;yt!==null&&(he=Math.max(he,yt.start*Wt),ce=Math.min(ce,(yt.start+yt.count)*Wt)),bt!==null?(he=Math.max(he,0),ce=Math.min(ce,bt.count)):Vt!=null&&(he=Math.max(he,0),ce=Math.min(ce,Vt.count));const xe=ce-he;if(xe<0||xe===1/0)return;kt.setup(G,K,Rt,$,bt);let Ke,re=ot;if(bt!==null&&(Ke=nt.get(bt),re=Tt,re.setIndex(Ke)),G.isMesh)K.wireframe===!0?(O.setLineWidth(K.wireframeLinewidth*at()),re.setMode(C.LINES)):re.setMode(C.TRIANGLES);else if(G.isLine){let $t=K.linewidth;$t===void 0&&($t=1),O.setLineWidth($t*at()),G.isLineSegments?re.setMode(C.LINES):G.isLineLoop?re.setMode(C.LINE_LOOP):re.setMode(C.LINE_STRIP)}else G.isPoints?re.setMode(C.POINTS):G.isSprite&&re.setMode(C.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)re.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const $t=G._multiDrawStarts,tn=G._multiDrawCounts,pe=G._multiDrawCount,ni=bt?nt.get(bt).bytesPerElement:1,Jr=Mt.get(K).currentProgram.getUniforms();for(let Un=0;Un<pe;Un++)Jr.setValue(C,"_gl_DrawID",Un),re.render($t[Un]/ni,tn[Un])}else if(G.isInstancedMesh)re.renderInstances(he,xe,G.count);else if($.isInstancedBufferGeometry){const $t=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,tn=Math.min($.instanceCount,$t);re.renderInstances(he,xe,tn)}else re.render(he,xe)};function ie(w,W,$){w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=Mn,w.needsUpdate=!0,Oe(w,W,$),w.side=ki,w.needsUpdate=!0,Oe(w,W,$),w.side=Ui):Oe(w,W,$)}this.compile=function(w,W,$=null){$===null&&($=w),p=vt.get($),p.init(W),y.push(p),$.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==$&&w.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const K=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const yt=G.material;if(yt)if(Array.isArray(yt))for(let It=0;It<yt.length;It++){const Rt=yt[It];ie(Rt,$,G),K.add(Rt)}else ie(yt,$,G),K.add(yt)}),y.pop(),p=null,K},this.compileAsync=function(w,W,$=null){const K=this.compile(w,W,$);return new Promise(G=>{function yt(){if(K.forEach(function(It){Mt.get(It).currentProgram.isReady()&&K.delete(It)}),K.size===0){G(w);return}setTimeout(yt,10)}pt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ot=null;function Ft(w){Ot&&Ot(w)}function le(){Kt.stop()}function wt(){Kt.start()}const Kt=new ag;Kt.setAnimationLoop(Ft),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(w){Ot=w,J.setAnimationLoop(w),w===null?Kt.stop():Kt.start()},J.addEventListener("sessionstart",le),J.addEventListener("sessionend",wt),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(W),W=J.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,W,E),p=vt.get(w,y.length),p.init(W),y.push(p),ht.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Nt.setFromProjectionMatrix(ht),Q=this.localClippingEnabled,Z=U.init(this.clippingPlanes,Q),_=tt.get(w,g.length),_.init(),g.push(_),J.enabled===!0&&J.isPresenting===!0){const yt=v.xr.getDepthSensingMesh();yt!==null&&Gt(yt,W,-1/0,v.sortObjects)}Gt(w,W,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,lt),Ht=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ht&&j.addToRenderList(_,w),this.info.render.frame++,Z===!0&&U.beginShadows();const $=p.state.shadowsArray;Y.render($,w,W),Z===!0&&U.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,G=_.transmissive;if(p.setupLights(),W.isArrayCamera){const yt=W.cameras;if(G.length>0)for(let It=0,Rt=yt.length;It<Rt;It++){const bt=yt[It];Pe(K,G,w,bt)}Ht&&j.render(w);for(let It=0,Rt=yt.length;It<Rt;It++){const bt=yt[It];Jt(_,w,bt,bt.viewport)}}else G.length>0&&Pe(K,G,w,W),Ht&&j.render(w),Jt(_,w,W);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,W),kt.resetDefaultState(),L=-1,N=null,y.pop(),y.length>0?(p=y[y.length-1],Z===!0&&U.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Gt(w,W,$,K){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Nt.intersectsSprite(w)){K&&Ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);const It=et.update(w),Rt=w.material;Rt.visible&&_.push(w,It,Rt,$,Ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Nt.intersectsObject(w))){const It=et.update(w),Rt=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ct.copy(w.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ct.copy(It.boundingSphere.center)),Ct.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(Rt)){const bt=It.groups;for(let Wt=0,Zt=bt.length;Wt<Zt;Wt++){const Vt=bt[Wt],he=Rt[Vt.materialIndex];he&&he.visible&&_.push(w,It,he,$,Ct.z,Vt)}}else Rt.visible&&_.push(w,It,Rt,$,Ct.z,null)}}const yt=w.children;for(let It=0,Rt=yt.length;It<Rt;It++)Gt(yt[It],W,$,K)}function Jt(w,W,$,K){const G=w.opaque,yt=w.transmissive,It=w.transparent;p.setupLightsView($),Z===!0&&U.setGlobalState(v.clippingPlanes,$),K&&O.viewport(x.copy(K)),G.length>0&&Qt(G,W,$),yt.length>0&&Qt(yt,W,$),It.length>0&&Qt(It,W,$),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Pe(w,W,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Xr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?ta:Hi,minFilter:Ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const yt=p.state.transmissionRenderTarget[K.id],It=K.viewport||x;yt.setSize(It.z,It.w);const Rt=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(z),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),Ht&&j.render($);const bt=v.toneMapping;v.toneMapping=lr;const Wt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Z===!0&&U.setGlobalState(v.clippingPlanes,K),Qt(w,$,K),P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Vt=0,he=W.length;Vt<he;Vt++){const ce=W[Vt],xe=ce.object,Ke=ce.geometry,re=ce.material,$t=ce.group;if(re.side===Ui&&xe.layers.test(K.layers)){const tn=re.side;re.side=Mn,re.needsUpdate=!0,Re(xe,$,K,Ke,re,$t),re.side=tn,re.needsUpdate=!0,Zt=!0}}Zt===!0&&(P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt))}v.setRenderTarget(Rt),v.setClearColor(z,D),Wt!==void 0&&(K.viewport=Wt),v.toneMapping=bt}function Qt(w,W,$){const K=W.isScene===!0?W.overrideMaterial:null;for(let G=0,yt=w.length;G<yt;G++){const It=w[G],Rt=It.object,bt=It.geometry,Wt=K===null?It.material:K,Zt=It.group;Rt.layers.test($.layers)&&Re(Rt,W,$,bt,Wt,Zt)}}function Re(w,W,$,K,G,yt){w.onBeforeRender(v,W,$,K,G,yt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(v,W,$,K,w,yt),G.transparent===!0&&G.side===Ui&&G.forceSinglePass===!1?(G.side=Mn,G.needsUpdate=!0,v.renderBufferDirect($,W,K,G,w,yt),G.side=ki,G.needsUpdate=!0,v.renderBufferDirect($,W,K,G,w,yt),G.side=Ui):v.renderBufferDirect($,W,K,G,w,yt),w.onAfterRender(v,W,$,K,G,yt)}function Oe(w,W,$){W.isScene!==!0&&(W=Bt);const K=Mt.get(w),G=p.state.lights,yt=p.state.shadowsArray,It=G.state.version,Rt=Dt.getParameters(w,G.state,yt,W,$),bt=Dt.getProgramCacheKey(Rt);let Wt=K.programs;K.environment=w.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(w.isMeshStandardMaterial?q:T).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",qt),Wt=new Map,K.programs=Wt);let Zt=Wt.get(bt);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===It)return Se(w,Rt),Zt}else Rt.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Rt,v),Zt=Dt.acquireProgram(Rt,bt),Wt.set(bt,Zt),K.uniforms=Rt.uniforms;const Vt=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=U.uniform),Se(w,Rt),K.needsLights=be(w),K.lightsStateVersion=It,K.needsLights&&(Vt.ambientLightColor.value=G.state.ambient,Vt.lightProbe.value=G.state.probe,Vt.directionalLights.value=G.state.directional,Vt.directionalLightShadows.value=G.state.directionalShadow,Vt.spotLights.value=G.state.spot,Vt.spotLightShadows.value=G.state.spotShadow,Vt.rectAreaLights.value=G.state.rectArea,Vt.ltc_1.value=G.state.rectAreaLTC1,Vt.ltc_2.value=G.state.rectAreaLTC2,Vt.pointLights.value=G.state.point,Vt.pointLightShadows.value=G.state.pointShadow,Vt.hemisphereLights.value=G.state.hemi,Vt.directionalShadowMap.value=G.state.directionalShadowMap,Vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Vt.spotShadowMap.value=G.state.spotShadowMap,Vt.spotLightMatrix.value=G.state.spotLightMatrix,Vt.spotLightMap.value=G.state.spotLightMap,Vt.pointShadowMap.value=G.state.pointShadowMap,Vt.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function we(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=ll.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Se(w,W){const $=Mt.get(w);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function _e(w,W,$,K,G){W.isScene!==!0&&(W=Bt),P.resetTextureUnits();const yt=W.fog,It=K.isMeshStandardMaterial?W.environment:null,Rt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:pr,bt=(K.isMeshStandardMaterial?q:T).get(K.envMap||It),Wt=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Zt=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Vt=!!$.morphAttributes.position,he=!!$.morphAttributes.normal,ce=!!$.morphAttributes.color;let xe=lr;K.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(xe=v.toneMapping);const Ke=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=Ke!==void 0?Ke.length:0,$t=Mt.get(K),tn=p.state.lights;if(Z===!0&&(Q===!0||w!==N)){const $n=w===N&&K.id===L;U.setState(K,w,$n)}let pe=!1;K.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==tn.state.version||$t.outputColorSpace!==Rt||G.isBatchedMesh&&$t.batching===!1||!G.isBatchedMesh&&$t.batching===!0||G.isBatchedMesh&&$t.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&$t.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&$t.instancing===!1||!G.isInstancedMesh&&$t.instancing===!0||G.isSkinnedMesh&&$t.skinning===!1||!G.isSkinnedMesh&&$t.skinning===!0||G.isInstancedMesh&&$t.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$t.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&$t.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&$t.instancingMorph===!1&&G.morphTexture!==null||$t.envMap!==bt||K.fog===!0&&$t.fog!==yt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==U.numPlanes||$t.numIntersection!==U.numIntersection)||$t.vertexAlphas!==Wt||$t.vertexTangents!==Zt||$t.morphTargets!==Vt||$t.morphNormals!==he||$t.morphColors!==ce||$t.toneMapping!==xe||$t.morphTargetsCount!==re)&&(pe=!0):(pe=!0,$t.__version=K.version);let ni=$t.currentProgram;pe===!0&&(ni=Oe(K,W,G));let Jr=!1,Un=!1,Hl=!1;const Fe=ni.getUniforms(),Gi=$t.uniforms;if(O.useProgram(ni.program)&&(Jr=!0,Un=!0,Hl=!0),K.id!==L&&(L=K.id,Un=!0),Jr||N!==w){ut.reverseDepthBuffer?(_t.copy(w.projectionMatrix),wv(_t),bv(_t),Fe.setValue(C,"projectionMatrix",_t)):Fe.setValue(C,"projectionMatrix",w.projectionMatrix),Fe.setValue(C,"viewMatrix",w.matrixWorldInverse);const $n=Fe.map.cameraPosition;$n!==void 0&&$n.setValue(C,St.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&Fe.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Fe.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,Un=!0,Hl=!0)}if(G.isSkinnedMesh){Fe.setOptional(C,G,"bindMatrix"),Fe.setOptional(C,G,"bindMatrixInverse");const $n=G.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Fe.setValue(C,"boneTexture",$n.boneTexture,P))}G.isBatchedMesh&&(Fe.setOptional(C,G,"batchingTexture"),Fe.setValue(C,"batchingTexture",G._matricesTexture,P),Fe.setOptional(C,G,"batchingIdTexture"),Fe.setValue(C,"batchingIdTexture",G._indirectTexture,P),Fe.setOptional(C,G,"batchingColorTexture"),G._colorsTexture!==null&&Fe.setValue(C,"batchingColorTexture",G._colorsTexture,P));const Vl=$.morphAttributes;if((Vl.position!==void 0||Vl.normal!==void 0||Vl.color!==void 0)&&xt.update(G,$,ni),(Un||$t.receiveShadow!==G.receiveShadow)&&($t.receiveShadow=G.receiveShadow,Fe.setValue(C,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Gi.envMap.value=bt,Gi.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(Gi.envMapIntensity.value=W.environmentIntensity),Un&&(Fe.setValue(C,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&In(Gi,Hl),yt&&K.fog===!0&&ft.refreshFogUniforms(Gi,yt),ft.refreshMaterialUniforms(Gi,K,X,k,p.state.transmissionRenderTarget[w.id]),ll.upload(C,we($t),Gi,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ll.upload(C,we($t),Gi,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Fe.setValue(C,"center",G.center),Fe.setValue(C,"modelViewMatrix",G.modelViewMatrix),Fe.setValue(C,"normalMatrix",G.normalMatrix),Fe.setValue(C,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const $n=K.uniformsGroups;for(let Gl=0,Eg=$n.length;Gl<Eg;Gl++){const nf=$n[Gl];F.update(nf,ni),F.bind(nf,ni)}}return ni}function In(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function be(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,W,$){Mt.get(w.texture).__webglTexture=W,Mt.get(w.depthTexture).__webglTexture=$;const K=Mt.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const $=Mt.get(w);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,$=0){E=w,R=W,A=$;let K=!0,G=null,yt=!1,It=!1;if(w){const bt=Mt.get(w);if(bt.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(C.FRAMEBUFFER,null),K=!1;else if(bt.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(bt.__hasExternalTextures)P.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Vt=w.depthTexture;if(bt.__boundDepthTexture!==Vt){if(Vt!==null&&Mt.has(Vt)&&(w.width!==Vt.image.width||w.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(It=!0);const Zt=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[W])?G=Zt[W][$]:G=Zt[W],yt=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?G=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?G=Zt[$]:G=Zt,x.copy(w.viewport),M.copy(w.scissor),I=w.scissorTest}else x.copy(b).multiplyScalar(X).floor(),M.copy(st).multiplyScalar(X).floor(),I=Ut;if(O.bindFramebuffer(C.FRAMEBUFFER,G)&&K&&O.drawBuffers(w,G),O.viewport(x),O.scissor(M),O.setScissorTest(I),yt){const bt=Mt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt.__webglTexture,$)}else if(It){const bt=Mt.get(w.texture),Wt=W||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,bt.__webglTexture,$||0,Wt)}L=-1},this.readRenderTargetPixels=function(w,W,$,K,G,yt,It){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Rt=Rt[It]),Rt){O.bindFramebuffer(C.FRAMEBUFFER,Rt);try{const bt=w.texture,Wt=bt.format,Zt=bt.type;if(!ut.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-K&&$>=0&&$<=w.height-G&&C.readPixels(W,$,K,G,Et.convert(Wt),Et.convert(Zt),yt)}finally{const bt=E!==null?Mt.get(E).__webglFramebuffer:null;O.bindFramebuffer(C.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(w,W,$,K,G,yt,It){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Rt=Rt[It]),Rt){const bt=w.texture,Wt=bt.format,Zt=bt.type;if(!ut.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=w.width-K&&$>=0&&$<=w.height-G){O.bindFramebuffer(C.FRAMEBUFFER,Rt);const Vt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.bufferData(C.PIXEL_PACK_BUFFER,yt.byteLength,C.STREAM_READ),C.readPixels(W,$,K,G,Et.convert(Wt),Et.convert(Zt),0);const he=E!==null?Mt.get(E).__webglFramebuffer:null;O.bindFramebuffer(C.FRAMEBUFFER,he);const ce=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Tv(C,ce,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,yt),C.deleteBuffer(Vt),C.deleteSync(ce),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,W=null,$=0){w.isTexture!==!0&&(al("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-$),G=Math.floor(w.image.width*K),yt=Math.floor(w.image.height*K),It=W!==null?W.x:0,Rt=W!==null?W.y:0;P.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,It,Rt,G,yt),O.unbindTexture()},this.copyTextureToTexture=function(w,W,$=null,K=null,G=0){w.isTexture!==!0&&(al("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],W=arguments[2],G=arguments[3]||0,$=null);let yt,It,Rt,bt,Wt,Zt;$!==null?(yt=$.max.x-$.min.x,It=$.max.y-$.min.y,Rt=$.min.x,bt=$.min.y):(yt=w.image.width,It=w.image.height,Rt=0,bt=0),K!==null?(Wt=K.x,Zt=K.y):(Wt=0,Zt=0);const Vt=Et.convert(W.format),he=Et.convert(W.type);P.setTexture2D(W,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,W.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,W.unpackAlignment);const ce=C.getParameter(C.UNPACK_ROW_LENGTH),xe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ke=C.getParameter(C.UNPACK_SKIP_PIXELS),re=C.getParameter(C.UNPACK_SKIP_ROWS),$t=C.getParameter(C.UNPACK_SKIP_IMAGES),tn=w.isCompressedTexture?w.mipmaps[G]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,tn.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,tn.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Rt),C.pixelStorei(C.UNPACK_SKIP_ROWS,bt),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,G,Wt,Zt,yt,It,Vt,he,tn.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,G,Wt,Zt,tn.width,tn.height,Vt,tn.data):C.texSubImage2D(C.TEXTURE_2D,G,Wt,Zt,yt,It,Vt,he,tn),C.pixelStorei(C.UNPACK_ROW_LENGTH,ce),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,re),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$t),G===0&&W.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(w,W,$=null,K=null,G=0){w.isTexture!==!0&&(al("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,w=arguments[2],W=arguments[3],G=arguments[4]||0);let yt,It,Rt,bt,Wt,Zt,Vt,he,ce;const xe=w.isCompressedTexture?w.mipmaps[G]:w.image;$!==null?(yt=$.max.x-$.min.x,It=$.max.y-$.min.y,Rt=$.max.z-$.min.z,bt=$.min.x,Wt=$.min.y,Zt=$.min.z):(yt=xe.width,It=xe.height,Rt=xe.depth,bt=0,Wt=0,Zt=0),K!==null?(Vt=K.x,he=K.y,ce=K.z):(Vt=0,he=0,ce=0);const Ke=Et.convert(W.format),re=Et.convert(W.type);let $t;if(W.isData3DTexture)P.setTexture3D(W,0),$t=C.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)P.setTexture2DArray(W,0),$t=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,W.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,W.unpackAlignment);const tn=C.getParameter(C.UNPACK_ROW_LENGTH),pe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ni=C.getParameter(C.UNPACK_SKIP_PIXELS),Jr=C.getParameter(C.UNPACK_SKIP_ROWS),Un=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,bt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zt),w.isDataTexture||w.isData3DTexture?C.texSubImage3D($t,G,Vt,he,ce,yt,It,Rt,Ke,re,xe.data):W.isCompressedArrayTexture?C.compressedTexSubImage3D($t,G,Vt,he,ce,yt,It,Rt,Ke,xe.data):C.texSubImage3D($t,G,Vt,he,ce,yt,It,Rt,Ke,re,xe),C.pixelStorei(C.UNPACK_ROW_LENGTH,tn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ni),C.pixelStorei(C.UNPACK_SKIP_ROWS,Jr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Un),G===0&&W.generateMipmaps&&C.generateMipmap($t),O.unbindTexture()},this.initRenderTarget=function(w){Mt.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),O.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,O.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Xh?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===Nl?"display-p3":"srgb"}}class ia extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class O1 extends En{constructor(t=null,e=1,n=1,i,s,o,a,l,c=An,u=An,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zd extends hi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new de,kd=new de,Ba=[],Hd=new $r,F1=new de,uo=new Xe,ho=new Kr;class B1 extends Xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,F1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $r),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),Hd.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(Hd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),ho.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(n),t.ray.intersectsSphere(ho)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gs),kd.multiplyMatrices(n,gs),uo.matrixWorld=kd,uo.raycast(t,Ba);for(let o=0,a=Ba.length;o<a;o++){const l=Ba[o];l.instanceId=s,l.object=this,e.push(l)}Ba.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new O1(new Float32Array(i*this.count),i,this.count,Hh,xi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Al extends Zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rl=new B,Cl=new B,Vd=new de,fo=new Ol,za=new Kr,Nc=new B,Gd=new B;class eh extends qe{constructor(t=new pn,e=new Al){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Rl.fromBufferAttribute(e,i-1),Cl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Rl.distanceTo(Cl);t.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),za.radius+=s,t.ray.intersectsSphere(za)===!1)return;Vd.copy(i).invert(),fo.copy(t.ray).applyMatrix4(Vd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){const g=u.getX(_),y=u.getX(_+1),v=ka(this,t,fo,l,g,y);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(m-1),p=u.getX(d),g=ka(this,t,fo,l,_,p);g&&e.push(g)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){const g=ka(this,t,fo,l,_,_+1);g&&e.push(g)}if(this.isLineLoop){const _=ka(this,t,fo,l,m-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ka(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(Rl.fromBufferAttribute(o,i),Cl.fromBufferAttribute(o,s),e.distanceSqToSegment(Rl,Cl,Nc,Gd)>n)return;Nc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Nc);if(!(l<t.near||l>t.far))return{distance:l,point:Gd.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}class dg extends Zr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wd=new de,nh=new Ol,Ha=new Kr,Va=new B;class z1 extends qe{constructor(t=new pn,e=new dg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(i),Ha.radius+=s,t.ray.intersectsSphere(Ha)===!1)return;Wd.copy(i).invert(),nh.copy(t.ray).applyMatrix4(Wd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,_=d;m<_;m++){const p=c.getX(m);Va.fromBufferAttribute(f,p),Xd(Va,p,l,i,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,_=d;m<_;m++)Va.fromBufferAttribute(f,m),Xd(Va,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xd(r,t,e,n,i,s,o){const a=nh.distanceSqToPoint(r);if(a<e){const l=new B;nh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,d=(o-u)/h;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new At:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,i=[],s=[],o=[],a=new B,l=new de;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(en(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(en(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zh extends Ei{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class k1 extends Zh{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,i(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Ga=new B,Oc=new Jh,Fc=new Jh,Bc=new Jh;class H1 extends Ei{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ga.subVectors(i[0],i[1]).add(i[0]),c=Ga);const f=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ga.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ga),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Oc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,m,_,p),Fc.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,m,_,p),Bc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,m,_,p)}else this.curveType==="catmullrom"&&(Oc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Fc.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Bc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Oc.calc(l),Fc.calc(l),Bc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qd(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function V1(r,t){const e=1-r;return e*e*t}function G1(r,t){return 2*(1-r)*r*t}function W1(r,t){return r*r*t}function Oo(r,t,e,n){return V1(r,t)+G1(r,e)+W1(r,n)}function X1(r,t){const e=1-r;return e*e*e*t}function q1(r,t){const e=1-r;return 3*e*e*r*t}function Y1(r,t){return 3*(1-r)*r*r*t}function $1(r,t){return r*r*r*t}function Fo(r,t,e,n,i){return X1(r,t)+q1(r,e)+Y1(r,n)+$1(r,i)}class pg extends Ei{constructor(t=new At,e=new At,n=new At,i=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new At){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fo(t,i.x,s.x,o.x,a.x),Fo(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class K1 extends Ei{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fo(t,i.x,s.x,o.x,a.x),Fo(t,i.y,s.y,o.y,a.y),Fo(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mg extends Ei{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z1 extends Ei{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gg extends Ei{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Oo(t,i.x,s.x,o.x),Oo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J1 extends Ei{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Oo(t,i.x,s.x,o.x),Oo(t,i.y,s.y,o.y),Oo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(qd(a,l.x,c.x,u.x,f.x),qd(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new At().fromArray(i))}return this}}var ih=Object.freeze({__proto__:null,ArcCurve:k1,CatmullRomCurve3:H1,CubicBezierCurve:pg,CubicBezierCurve3:K1,EllipseCurve:Zh,LineCurve:mg,LineCurve3:Z1,QuadraticBezierCurve:gg,QuadraticBezierCurve3:J1,SplineCurve:_g});class j1 extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ih[i.type]().fromJSON(i))}return this}}class rh extends j1{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mg(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new gg(this.currentPoint.clone(),new At(t,e),new At(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new pg(this.currentPoint.clone(),new At(t,e),new At(n,i),new At(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _g(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Zh(t,e,n,i,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class jh extends pn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(s.slice(),3)),this.setAttribute("uv",new sn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new B,S=new B,R=new B;for(let A=0;A<e.length;A+=3)d(e[A+0],v),d(e[A+1],S),d(e[A+2],R),l(v,S,R,y)}function l(y,v,S,R){const A=R+1,E=[];for(let L=0;L<=A;L++){E[L]=[];const N=y.clone().lerp(S,L/A),x=v.clone().lerp(S,L/A),M=A-L;for(let I=0;I<=M;I++)I===0&&L===A?E[L][I]=N:E[L][I]=N.clone().lerp(x,I/M)}for(let L=0;L<A;L++)for(let N=0;N<2*(A-L)-1;N++){const x=Math.floor(N/2);N%2===0?(h(E[L][x+1]),h(E[L+1][x]),h(E[L][x])):(h(E[L][x+1]),h(E[L+1][x+1]),h(E[L+1][x]))}}function c(y){const v=new B;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(y),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const y=new B;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const S=p(y)/2/Math.PI+.5,R=g(y)/Math.PI+.5;o.push(S,1-R)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){const v=o[y+0],S=o[y+2],R=o[y+4],A=Math.max(v,S,R),E=Math.min(v,S,R);A>.9&&E<.1&&(v<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function d(y,v){const S=y*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function m(){const y=new B,v=new B,S=new B,R=new B,A=new At,E=new At,L=new At;for(let N=0,x=0;N<s.length;N+=9,x+=6){y.set(s[N+0],s[N+1],s[N+2]),v.set(s[N+3],s[N+4],s[N+5]),S.set(s[N+6],s[N+7],s[N+8]),A.set(o[x+0],o[x+1]),E.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),R.copy(y).add(v).add(S).divideScalar(3);const M=p(R);_(A,x+0,y,M),_(E,x+2,v,M),_(L,x+4,S,M)}}function _(y,v,S,R){R<0&&y.x===1&&(o[v]=y.x-1),S.x===0&&S.z===0&&(o[v]=R/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jh(t.vertices,t.indices,t.radius,t.details)}}class Bo extends rh{constructor(t){super(t),this.uuid=Js(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new rh().fromJSON(i))}return this}}const Q1={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=vg(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,d;if(n&&(s=rE(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let m=e;m<i;m+=e)f=r[m],h=r[m+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Zo(s,o,e,a,l,d,0),o}};function vg(r,t,e,n,i){let s,o;if(i===mE(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Yd(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Yd(s,r[s],r[s+1],o);return o&&Bl(o,o.next)&&(jo(o),o=o.next),o}function qr(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Bl(e,e.next)||Ue(e.prev,e,e.next)===0)){if(jo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zo(r,t,e,n,i,s,o){if(!r)return;!o&&s&&cE(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?eE(r,n,i,s):tE(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),jo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=nE(qr(r),t,e),Zo(r,t,e,n,i,s,2)):o===2&&iE(r,t,e,n,i,s):Zo(qr(r),t,e,n,i,s,1);break}}}function tE(r){const t=r.prev,e=r,n=r.next;if(Ue(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&Ts(i,a,s,l,o,c,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function eE(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Ue(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,f=s.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<f?u<h?u:h:f<h?f:h,_=a>l?a>c?a:c:l>c?l:c,p=u>f?u>h?u:h:f>h?f:h,g=sh(d,m,t,e,n),y=sh(_,p,t,e,n);let v=r.prevZ,S=r.nextZ;for(;v&&v.z>=g&&S&&S.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Ts(a,u,l,f,c,h,v.x,v.y)&&Ue(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=d&&S.x<=_&&S.y>=m&&S.y<=p&&S!==i&&S!==o&&Ts(a,u,l,f,c,h,S.x,S.y)&&Ue(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Ts(a,u,l,f,c,h,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=p&&S!==i&&S!==o&&Ts(a,u,l,f,c,h,S.x,S.y)&&Ue(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function nE(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Bl(i,s)&&xg(i,n,n.next,s)&&Jo(i,s)&&Jo(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),jo(n),jo(n.next),n=r=s),n=n.next}while(n!==r);return qr(n)}function iE(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fE(o,a)){let l=yg(o,a);o=qr(o,o.next),l=qr(l,l.next),Zo(o,t,e,n,i,s,0),Zo(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function rE(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=vg(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(hE(c));for(i.sort(sE),s=0;s<i.length;s++)e=oE(i[s],e);return e}function sE(r,t){return r.x-t.x}function oE(r,t){const e=aE(r,t);if(!e)return t;const n=yg(e,r);return qr(n,n.next),qr(e,e.next)}function aE(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=s&&h>n&&(n=h,i=e.x<e.next.x?e:e.next,h===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,f;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Ts(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(s-e.x),Jo(e,r)&&(f<u||f===u&&(e.x>i.x||e.x===i.x&&lE(i,e)))&&(i=e,u=f)),e=e.next;while(e!==a);return i}function lE(r,t){return Ue(r.prev,r,t.prev)<0&&Ue(t.next,r,r.next)<0}function cE(r,t,e,n){let i=r;do i.z===0&&(i.z=sh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,uE(i)}function uE(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function sh(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function hE(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ts(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function fE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!dE(r,t)&&(Jo(r,t)&&Jo(t,r)&&pE(r,t)&&(Ue(r.prev,r,t.prev)||Ue(r,t.prev,t))||Bl(r,t)&&Ue(r.prev,r,r.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Bl(r,t){return r.x===t.x&&r.y===t.y}function xg(r,t,e,n){const i=Xa(Ue(r,t,e)),s=Xa(Ue(r,t,n)),o=Xa(Ue(e,n,r)),a=Xa(Ue(e,n,t));return!!(i!==s&&o!==a||i===0&&Wa(r,e,t)||s===0&&Wa(r,n,t)||o===0&&Wa(e,r,n)||a===0&&Wa(e,t,n))}function Wa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Xa(r){return r>0?1:r<0?-1:0}function dE(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&xg(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Jo(r,t){return Ue(r.prev,r,r.next)<0?Ue(r,t,r.next)>=0&&Ue(r,r.prev,t)>=0:Ue(r,t,r.prev)<0||Ue(r,r.next,t)<0}function pE(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function yg(r,t){const e=new oh(r.i,r.x,r.y),n=new oh(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Yd(r,t,e,n){const i=new oh(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function jo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function oh(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mE(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Os{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Os.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];$d(t),Kd(n,t);let o=t.length;e.forEach($d);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Kd(n,e[l]);const a=Q1.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function $d(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Kd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class zl extends pn{constructor(t=new Bo([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new sn(i,3)),this.setAttribute("uv",new sn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:gE;let v,S=!1,R,A,E,L;g&&(v=g.getSpacedPoints(u),S=!0,h=!1,R=g.computeFrenetFrames(u,!1),A=new B,E=new B,L=new B),h||(p=0,d=0,m=0,_=0);const N=a.extractPoints(c);let x=N.shape;const M=N.holes;if(!Os.isClockWise(x)){x=x.reverse();for(let at=0,C=M.length;at<C;at++){const dt=M[at];Os.isClockWise(dt)&&(M[at]=dt.reverse())}}const z=Os.triangulateShape(x,M),D=x;for(let at=0,C=M.length;at<C;at++){const dt=M[at];x=x.concat(dt)}function H(at,C,dt){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(C,dt)}const k=x.length,X=z.length;function V(at,C,dt){let pt,ut,O;const Pt=at.x-C.x,Mt=at.y-C.y,P=dt.x-at.x,T=dt.y-at.y,q=Pt*Pt+Mt*Mt,nt=Pt*T-Mt*P;if(Math.abs(nt)>Number.EPSILON){const ct=Math.sqrt(q),et=Math.sqrt(P*P+T*T),Dt=C.x-Mt/ct,ft=C.y+Pt/ct,tt=dt.x-T/et,vt=dt.y+P/et,U=((tt-Dt)*T-(vt-ft)*P)/(Pt*T-Mt*P);pt=Dt+Pt*U-at.x,ut=ft+Mt*U-at.y;const Y=pt*pt+ut*ut;if(Y<=2)return new At(pt,ut);O=Math.sqrt(Y/2)}else{let ct=!1;Pt>Number.EPSILON?P>Number.EPSILON&&(ct=!0):Pt<-Number.EPSILON?P<-Number.EPSILON&&(ct=!0):Math.sign(Mt)===Math.sign(T)&&(ct=!0),ct?(pt=-Mt,ut=Pt,O=Math.sqrt(q)):(pt=Pt,ut=Mt,O=Math.sqrt(q/2))}return new At(pt/O,ut/O)}const lt=[];for(let at=0,C=D.length,dt=C-1,pt=at+1;at<C;at++,dt++,pt++)dt===C&&(dt=0),pt===C&&(pt=0),lt[at]=V(D[at],D[dt],D[pt]);const b=[];let st,Ut=lt.concat();for(let at=0,C=M.length;at<C;at++){const dt=M[at];st=[];for(let pt=0,ut=dt.length,O=ut-1,Pt=pt+1;pt<ut;pt++,O++,Pt++)O===ut&&(O=0),Pt===ut&&(Pt=0),st[pt]=V(dt[pt],dt[O],dt[Pt]);b.push(st),Ut=Ut.concat(st)}for(let at=0;at<p;at++){const C=at/p,dt=d*Math.cos(C*Math.PI/2),pt=m*Math.sin(C*Math.PI/2)+_;for(let ut=0,O=D.length;ut<O;ut++){const Pt=H(D[ut],lt[ut],pt);ht(Pt.x,Pt.y,-dt)}for(let ut=0,O=M.length;ut<O;ut++){const Pt=M[ut];st=b[ut];for(let Mt=0,P=Pt.length;Mt<P;Mt++){const T=H(Pt[Mt],st[Mt],pt);ht(T.x,T.y,-dt)}}}const Nt=m+_;for(let at=0;at<k;at++){const C=h?H(x[at],Ut[at],Nt):x[at];S?(E.copy(R.normals[0]).multiplyScalar(C.x),A.copy(R.binormals[0]).multiplyScalar(C.y),L.copy(v[0]).add(E).add(A),ht(L.x,L.y,L.z)):ht(C.x,C.y,0)}for(let at=1;at<=u;at++)for(let C=0;C<k;C++){const dt=h?H(x[C],Ut[C],Nt):x[C];S?(E.copy(R.normals[at]).multiplyScalar(dt.x),A.copy(R.binormals[at]).multiplyScalar(dt.y),L.copy(v[at]).add(E).add(A),ht(L.x,L.y,L.z)):ht(dt.x,dt.y,f/u*at)}for(let at=p-1;at>=0;at--){const C=at/p,dt=d*Math.cos(C*Math.PI/2),pt=m*Math.sin(C*Math.PI/2)+_;for(let ut=0,O=D.length;ut<O;ut++){const Pt=H(D[ut],lt[ut],pt);ht(Pt.x,Pt.y,f+dt)}for(let ut=0,O=M.length;ut<O;ut++){const Pt=M[ut];st=b[ut];for(let Mt=0,P=Pt.length;Mt<P;Mt++){const T=H(Pt[Mt],st[Mt],pt);S?ht(T.x,T.y+v[u-1].y,v[u-1].x+dt):ht(T.x,T.y,f+dt)}}}Z(),Q();function Z(){const at=i.length/3;if(h){let C=0,dt=k*C;for(let pt=0;pt<X;pt++){const ut=z[pt];St(ut[2]+dt,ut[1]+dt,ut[0]+dt)}C=u+p*2,dt=k*C;for(let pt=0;pt<X;pt++){const ut=z[pt];St(ut[0]+dt,ut[1]+dt,ut[2]+dt)}}else{for(let C=0;C<X;C++){const dt=z[C];St(dt[2],dt[1],dt[0])}for(let C=0;C<X;C++){const dt=z[C];St(dt[0]+k*u,dt[1]+k*u,dt[2]+k*u)}}n.addGroup(at,i.length/3-at,0)}function Q(){const at=i.length/3;let C=0;_t(D,C),C+=D.length;for(let dt=0,pt=M.length;dt<pt;dt++){const ut=M[dt];_t(ut,C),C+=ut.length}n.addGroup(at,i.length/3-at,1)}function _t(at,C){let dt=at.length;for(;--dt>=0;){const pt=dt;let ut=dt-1;ut<0&&(ut=at.length-1);for(let O=0,Pt=u+p*2;O<Pt;O++){const Mt=k*O,P=k*(O+1),T=C+pt+Mt,q=C+ut+Mt,nt=C+ut+P,ct=C+pt+P;Ct(T,q,nt,ct)}}}function ht(at,C,dt){l.push(at),l.push(C),l.push(dt)}function St(at,C,dt){Bt(at),Bt(C),Bt(dt);const pt=i.length/3,ut=y.generateTopUV(n,i,pt-3,pt-2,pt-1);Ht(ut[0]),Ht(ut[1]),Ht(ut[2])}function Ct(at,C,dt,pt){Bt(at),Bt(C),Bt(pt),Bt(C),Bt(dt),Bt(pt);const ut=i.length/3,O=y.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);Ht(O[0]),Ht(O[1]),Ht(O[3]),Ht(O[1]),Ht(O[2]),Ht(O[3])}function Bt(at){i.push(l[at*3+0]),i.push(l[at*3+1]),i.push(l[at*3+2])}function Ht(at){s.push(at.x),s.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _E(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ih[i.type]().fromJSON(i)),new zl(n,t.options)}}const gE={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new At(s,o),new At(a,l),new At(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[i*3],d=t[i*3+1],m=t[i*3+2],_=t[s*3],p=t[s*3+1],g=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new At(o,1-l),new At(c,1-f),new At(h,1-m),new At(_,1-g)]:[new At(a,1-l),new At(u,1-f),new At(d,1-m),new At(p,1-g)]}};function _E(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qh extends jh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qh(t.radius,t.detail)}}class Fs extends pn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new B,h=new B,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const y=[],v=g/n;let S=0;g===0&&o===0?S=.5/e:g===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const A=R/e;f.x=-t*Math.cos(i+A*s)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(i+A*s)*Math.sin(o+v*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),p.push(A+S,1-v),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const v=u[g][y+1],S=u[g][y],R=u[g+1][y],A=u[g+1][y+1];(g!==0||o>0)&&d.push(v,S,A),(g!==n-1||l<Math.PI)&&d.push(S,R,A)}this.setIndex(d),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xs extends Zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zm,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vE extends xs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Zd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xE{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const yE=new xE;class tf{constructor(t){this.manager=t!==void 0?t:yE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}tf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class SE extends Error{constructor(t,e){super(t),this.response=e}}class ME extends tf{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Zd.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Ci[t]!==void 0){Ci[t].push({onLoad:e,onProgress:n,onError:i});return}Ci[t]=[],Ci[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ci[t],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let _=0;const p=new ReadableStream({start(g){y();function y(){f.read().then(({done:v,value:S})=>{if(v)g.close();else{_+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let A=0,E=u.length;A<E;A++){const L=u[A];L.onProgress&&L.onProgress(R)}g.enqueue(S),y()}},v=>{g.error(v)})}}});return new Response(p)}else throw new SE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Zd.add(t,c);const u=Ci[t];delete Ci[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ci[t];if(u===void 0)throw this.manager.itemError(t),c;delete Ci[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class kl extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class EE extends kl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zc=new de,Jd=new B,jd=new B;class Sg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jd),jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jd),e.updateMatrixWorld(),zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qd=new de,po=new B,kc=new B;class TE extends Sg{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),po.setFromMatrixPosition(t.matrixWorld),n.position.copy(po),kc.copy(n.position),kc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(kc),n.updateMatrixWorld(),i.makeTranslation(-po.x,-po.y,-po.z),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd)}}class ah extends kl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new TE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wE extends Sg{constructor(){super(new $h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bE extends kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new wE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class AE extends kl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class RE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=tp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function tp(){return performance.now()}const ep=new de;class Mg{constructor(t,e,n=0,i=1/0){this.ray=new Ol(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new qh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ep.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ep),this}intersectObject(t,e=!0,n=[]){return lh(t,this,n,e),n.sort(np),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)lh(t[i],this,n,e);return n.sort(np),n}}function np(r,t){return r.distance-t.distance}function lh(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)lh(s[o],t,e,!0)}}class CE{constructor(){this.type="ShapePath",this.color=new te,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new rh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const y=[];for(let v=0,S=g.length;v<S;v++){const R=g[v],A=new Bo;A.curves=R.curves,y.push(A)}return y}function n(g,y){const v=y.length;let S=!1;for(let R=v-1,A=0;A<v;R=A++){let E=y[R],L=y[A],N=L.x-E.x,x=L.y-E.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(E=y[A],N=-N,L=y[R],x=-x),g.y<E.y||g.y>L.y)continue;if(g.y===E.y){if(g.x===E.x)return!0}else{const M=x*(g.x-E.x)-N*(g.y-E.y);if(M===0)return!0;if(M<0)continue;S=!S}}else{if(g.y!==E.y)continue;if(L.x<=g.x&&g.x<=E.x||E.x<=g.x&&g.x<=L.x)return!0}}return S}const i=Os.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Bo,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const f=[],h=[];let d=[],m=0,_;h[m]=void 0,d[m]=[];for(let g=0,y=s.length;g<y;g++)a=s[g],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!u&&h[m]&&m++,h[m]={s:new Bo,p:_},h[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:_[0]});if(!h[0])return e(s);if(h.length>1){let g=!1,y=0;for(let v=0,S=h.length;v<S;v++)f[v]=[];for(let v=0,S=h.length;v<S;v++){const R=d[v];for(let A=0;A<R.length;A++){const E=R[A];let L=!0;for(let N=0;N<h.length;N++)n(E.p,h[N].p)&&(v!==N&&y++,L?(L=!1,f[N].push(E)):g=!0);L&&f[v].push(E)}}y>0&&g===!1&&(d=f)}let p;for(let g=0,y=h.length;g<y;g++){l=h[g].s,c.push(l),p=d[g];for(let v=0,S=p.length;v<S;v++)l.holes.push(p[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);class PE extends tf{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new ME(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new LE(t)}}class LE{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=DE(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function DE(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const f=IE(u,i,a,l,e);a+=f.offsetX,o.push(f.path)}}return o}function IE(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new CE;let a,l,c,u,f,h,d,m;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,g=_.length;p<g;)switch(_[p++]){case"m":a=_[p++]*t+e,l=_[p++]*t+n,o.moveTo(a,l);break;case"l":a=_[p++]*t+e,l=_[p++]*t+n,o.lineTo(a,l);break;case"q":c=_[p++]*t+e,u=_[p++]*t+n,f=_[p++]*t+e,h=_[p++]*t+n,o.quadraticCurveTo(f,h,c,u);break;case"b":c=_[p++]*t+e,u=_[p++]*t+n,f=_[p++]*t+e,h=_[p++]*t+n,d=_[p++]*t+e,m=_[p++]*t+n,o.bezierCurveTo(f,h,d,m,c,u);break}}return{offsetX:s.ha*t,path:o}}class UE extends zl{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}function NE(){const r=document.getElementById("heroBrand3D"),t=document.getElementById("hero");if(!r||!t)return null;const e=new na({canvas:r,alpha:!0,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),e.setClearColor(0,0);const n=new ia,i=new un(24,1,.1,100);i.position.set(0,0,16.5);const s=new EE(16777215,15657188,.68);n.add(s);const o=new bE(16777215,.78);o.position.set(4.5,5.5,7.5),n.add(o);const a=new ah(16774382,.42,30,2);a.position.set(-5.2,1.4,5.8),n.add(a);const l=new ui,c=new ui,u=new ui;l.add(c,u),n.add(l);const f={assembly:0,wordmarkOpacity:1,triangleOpacity:1,triangleSpin:0,dragY:0,dragX:0,brandScale:1},h=[new xs({color:12779538,roughness:.44,metalness:.64,envMapIntensity:.72}),new xs({color:8847375,roughness:.48,metalness:.6,envMapIntensity:.68}),new xs({color:11010064,roughness:.42,metalness:.66,envMapIntensity:.74})],d=new xs({color:1118481,roughness:.22,metalness:.92,envMapIntensity:.9,transparent:!0,opacity:0});function m(U,Y,j){const xt=new Bo;xt.moveTo(U[0][0],U[0][1]);for(let Et=1;Et<U.length;Et+=1)xt.lineTo(U[Et][0],U[Et][1]);xt.closePath();let ot=new zl(xt,{depth:j,bevelEnabled:!0,bevelSegments:4,steps:1,bevelSize:.016,bevelThickness:.022});ot.translate(0,0,-j/2),ot=ot.toNonIndexed(),ot.computeVertexNormals();const Tt=new Xe(ot,Y);return Tt.castShadow=!1,Tt.receiveShadow=!1,Tt}const _=3.8,p=_*Math.sqrt(3)/2,g=[0,p/2],y=[-_/2,-p/2],v=[_/2,-p/2],S=(U,Y,j)=>[U[0]+(Y[0]-U[0])*j,U[1]+(Y[1]-U[1])*j],R=(U,Y)=>[U[0]+Y[0],U[1]+Y[1]],A=(U,Y)=>[U[0]-Y[0],U[1]-Y[1]],E=(U,Y)=>[U[0]*Y,U[1]*Y],L=(U,Y,j)=>(Y[0]-U[0])*(j[1]-U[1])-(Y[1]-U[1])*(j[0]-U[0]),N=U=>Math.hypot(U[0],U[1])||1,x=U=>{const Y=N(U);return[U[0]/Y,U[1]/Y]};function M(U,Y,j,xt){const[ot,Tt]=U,[Et,kt]=Y,[F,it]=j,[J,rt]=xt,mt=(ot-Et)*(it-rt)-(Tt-kt)*(F-J);if(Math.abs(mt)<1e-6)return Y;const gt=((ot*kt-Tt*Et)*(F-J)-(ot-Et)*(F*rt-it*J))/mt,qt=((ot*kt-Tt*Et)*(it-rt)-(Tt-kt)*(F*rt-it*J))/mt;return[gt,qt]}function I(U,Y,j,xt){const ot=[];for(let Et=0;Et<U.length;Et+=1){const kt=U[Et],F=U[(Et+1)%U.length],it=xt?L(Y,j,kt)>=-1e-6:L(Y,j,kt)<=1e-6,J=xt?L(Y,j,F)>=-1e-6:L(Y,j,F)<=1e-6;it&&J?ot.push(F):it&&!J?ot.push(M(kt,F,Y,j)):!it&&J&&(ot.push(M(kt,F,Y,j)),ot.push(F))}return ot}function z(U,Y,j,xt){const ot=x(A(Y,U));let Tt=[-ot[1],ot[0]];return L(U,Y,xt)<0&&(Tt=E(Tt,-1)),{positiveStart:R(U,E(Tt,j/2)),positiveEnd:R(Y,E(Tt,j/2)),negativeStart:R(U,E(Tt,-j/2)),negativeEnd:R(Y,E(Tt,-j/2))}}const D=S(g,v,.4),H=y,k=D,V=[0,S(H,k,-y[0]/(D[0]-y[0]))[1]],lt=z(H,k,.16,g),b=z(V,v,.13,D),st=[y,g,v],Ut=I(st,lt.positiveStart,lt.positiveEnd,!0),Nt=I(st,lt.negativeStart,lt.negativeEnd,!1),Z=I(Nt,b.positiveStart,b.positiveEnd,!0),Q=I(Nt,b.negativeStart,b.negativeEnd,!1),_t=[m(Ut,h[0],.22),m(Q,h[1],.24),m(Z,h[2],.2)],ht=[new B(-1,.78,0),new B(-.14,-.96,0),new B(.94,.12,0)];_t.forEach((U,Y)=>{U.userData.origin=ht[Y],c.add(U)}),c.position.set(0,.42,0),r.classList.remove("is-wordmark-ready");const St=[],Ct=[],Bt=new de,Ht=new B,at=new B,C=new js;function dt(U){if(St.length||Ct.length)return;const Y="ASANI".split(""),j=.66,xt=.16,ot=.08;let Tt=0;Y.forEach((kt,F)=>{let it=new UE(kt,{font:U,size:j,height:xt,curveSegments:10,bevelEnabled:!0,bevelThickness:.012,bevelSize:.01,bevelSegments:3});it.computeBoundingBox();const J=it.boundingBox,rt=J.max.x-J.min.x;it.translate(-(J.min.x+rt/2),0,-xt/2),it=it.toNonIndexed(),it.computeVertexNormals();const mt=new B(Tt+rt/2,0,0),gt=new Xe(it.clone(),d.clone());gt.userData.basePosition=mt.clone(),gt.userData.index=F,gt.material.opacity=0,gt.material.transparent=!0,gt.renderOrder=6,gt.material.depthWrite=!0,u.add(gt),St.push(gt);const qt=it.getAttribute("position"),ue=[],Te=Math.max(1,Math.floor(qt.count/145));for(let Ft=0;Ft<qt.count;Ft+=Te)ue.push(new B(qt.getX(Ft),qt.getY(Ft),qt.getZ(Ft)));const ie=new xs({color:15722466,roughness:.2,metalness:.62,envMapIntensity:.68,transparent:!0,opacity:0}),Ot=new B1(new Fs(.028,8,8),ie,ue.length);Ot.instanceMatrix.setUsage(Sv),Ot.renderOrder=4,Ot.material.depthWrite=!1,Ot.userData.basePosition=mt.clone(),Ot.userData.index=F,Ot.userData.targets=ue,Ot.userData.starts=ue.map((Ft,le)=>{const wt=le%3,Kt=Ft.x>=0?1:-1,Gt=mt.x+Kt*(2.2+Math.random()*2.4),Jt=mt.y+(Math.random()-.5)*.9,Pe=mt.x+(Math.random()-.5)*2.6,Qt=mt.y-(1.8+Math.random()*1.9);return new B(wt===2?Pe:Gt,wt===2?Qt:Jt,Ft.z+1.2+Math.random()*1.2)}),Ot.userData.jitter=ue.map(()=>Math.random()*.24),u.add(Ot),Ct.push(Ot),Tt+=rt+ot});const Et=Tt/2-ot/2;St.forEach(kt=>{kt.userData.basePosition.x-=Et}),Ct.forEach(kt=>{kt.userData.basePosition.x-=Et,kt.userData.starts&&kt.userData.starts.forEach(F=>{F.x-=Et})}),u.position.set(0,-1.88,0),r.classList.add("is-wordmark-ready"),Dt()}const pt=window.innerWidth>1024;pt&&new PE().load("/assets/helvetiker_regular.typeface.json",Y=>dt(Y),void 0,()=>{});const ut=new Xe(new Qs(5.2,5.2,.8),new Ns({visible:!1}));ut.position.copy(c.position),n.add(ut);const O={x:0,y:0},Pt=new Mg,Mt=new At;let P=!1,T=0,q=0,nt=0,ct=0,et=!0;function Dt(){const U=f.assembly,Y=U*U*(3-2*U);_t.forEach(j=>{const xt=j.userData.origin;j.position.set(xt.x*(1-Y),xt.y*(1-Y),0),j.material.opacity=f.triangleOpacity,j.material.transparent=f.triangleOpacity<.999}),Ct.forEach(j=>{const xt=j.userData.index*.085,ot=Math.max(0,Math.min(1,(U-xt)/.62)),Tt=ot*ot*(3-2*ot);j.position.set(0,0,0),j.rotation.set(0,0,0),j.scale.setScalar(1);const Et=j.userData.targets,kt=j.userData.starts,F=j.userData.jitter;for(let J=0;J<Et.length;J+=1){const rt=xt+F[J],mt=Math.max(0,Math.min(1,(U-rt)/.5)),gt=mt*mt*(3-2*mt);Ht.copy(kt[J]).lerp(Et[J],gt);const qt=1-gt;Ht.x+=Math.sin(J*1.7+U*11)*.024*qt,Ht.y+=Math.cos(J*1.3+U*9)*.024*qt,Ht.z+=qt*.3;const ue=.3+gt*.7;at.setScalar(ue),Bt.compose(Ht,C,at),j.setMatrixAt(J,Bt)}j.instanceMatrix.needsUpdate=!0;const it=Math.max(0,1-Math.max(0,U-.82)/.18);j.material.opacity=Math.min(1,Tt*1.2)*it*f.wordmarkOpacity}),St.forEach(j=>{const xt=j.userData.index*.085,ot=Math.max(0,Math.min(1,(U-(xt+.28))/.26)),Tt=ot*ot*(3-2*ot),Et=j.userData.basePosition;j.position.set(Et.x,Et.y+(1-Tt)*.03,.06),j.rotation.set(0,0,0),j.scale.setScalar(.985+Tt*.015),j.material.opacity=Math.min(1,Tt*1.35)*f.wordmarkOpacity})}function ft(U){Object.assign(f,U),Dt()}function tt(){return window.innerWidth>768}function vt(){const U=t.clientWidth||window.innerWidth,Y=t.clientHeight||window.innerHeight;e.setSize(U,Y,!1),i.aspect=U/Y,i.updateProjectionMatrix();const j=window.innerWidth<=480,xt=window.innerWidth<=768;j?(i.position.set(0,0,16.5),l.scale.setScalar(.58),c.scale.setScalar(.54),c.position.set(0,1.6,0),u.position.set(0,-.8,0)):xt?(i.position.set(0,0,14.5),l.scale.setScalar(.68),c.scale.setScalar(.6),c.position.set(0,1.8,0),u.position.set(0,-.9,0)):window.innerWidth<=1024?(i.position.set(0,0,13.2),l.scale.setScalar(.78),c.scale.setScalar(.7),c.position.set(0,1.6,0),u.position.set(0,-.7,0)):(i.position.set(0,0,16.5),l.scale.setScalar(.7),c.scale.setScalar(.78),u.scale.setScalar(.94),c.position.set(0,.42,0),u.position.set(0,-1.88,0)),tt()||(c.rotation.x=-.05),ut.position.copy(c.position)}return r.addEventListener("mousedown",U=>{if(!tt())return;const Y=r.getBoundingClientRect();Mt.set((U.clientX-Y.left)/Y.width*2-1,-((U.clientY-Y.top)/Y.height*2-1)),Pt.setFromCamera(Mt,i),Pt.intersectObject(ut).length&&(P=!0,T=U.clientX,q=U.clientY,r.style.cursor="grabbing")}),window.addEventListener("mousemove",U=>{const Y=r.getBoundingClientRect();O.x=((U.clientX-Y.left)/Y.width-.5)*2,O.y=((U.clientY-Y.top)/Y.height-.5)*2,P&&(nt=(U.clientX-T)*.008,ct=(U.clientY-q)*.004,T=U.clientX,q=U.clientY,c.rotation.y+=nt,c.rotation.x=Math.max(-.55,Math.min(.55,c.rotation.x+ct)))}),window.addEventListener("mouseup",()=>{P=!1,r.style.cursor=tt()?"grab":"default"}),vt(),r.style.cursor=tt()?"grab":"default",window.addEventListener("resize",vt,{passive:!0}),new IntersectionObserver(U=>U.forEach(Y=>{et=Y.isIntersecting}),{threshold:.08}).observe(t),ft({assembly:0,wordmarkOpacity:pt?1:0,triangleOpacity:1}),function U(){window.requestAnimationFrame(U),!(document.hidden||!et)&&(P?(nt*=.9,ct*=.9):(tt()?(c.rotation.y+=.009+nt,c.rotation.x+=(-O.y*.08-c.rotation.x)*.035):(c.rotation.y+=.0045,c.rotation.x+=(-.05-c.rotation.x)*.08),nt*=.92,ct*=.92),l.scale.x+=(f.brandScale-l.scale.x)*.08,l.scale.y+=(f.brandScale-l.scale.y)*.08,l.scale.z+=(f.brandScale-l.scale.z)*.08,e.render(n,i))}(),r.classList.add("is-brand-ready"),{canvas:r,setAssembly(U){ft({assembly:U})},setWordmarkOpacity(U){ft({wordmarkOpacity:U})},setTriangleOpacity(U){ft({triangleOpacity:U})},setBrandScale(U){ft({brandScale:U})}}}function OE(){const r=document.getElementById("heroGlobe"),t=document.getElementById("hero");if(!r||!t)return;r.style.opacity="0";const e=new na({canvas:r,alpha:!0,antialias:!1,powerPreference:"low-power"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.setClearColor(0,0);const n=new ia,i=new un(52,1,.1,100);i.position.set(0,0,7.5);const o=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#840016",a=new te(o),l=3,c=512,u=256,f=document.createElement("canvas");f.width=c,f.height=u;const h=f.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,c,u),h.fillStyle="#fff";const d=(tt,vt)=>[(tt+180)/360*c,(90-vt)/180*u];function m(tt){h.beginPath(),h.moveTo(...d(tt[0][0],tt[0][1]));for(let vt=1;vt<tt.length;vt++)h.lineTo(...d(tt[vt][0],tt[vt][1]));h.closePath(),h.fill()}m([[-167,68],[-140,72],[-100,75],[-78,72],[-60,60],[-55,47],[-66,44],[-70,42],[-76,34],[-80,25],[-83,10],[-78,8],[-83,8],[-97,22],[-100,20],[-110,26],[-117,32],[-124,38],[-126,50],[-130,54],[-140,60],[-155,60],[-167,68]]),m([[-56,76],[-20,82],[-16,72],[-26,62],[-44,60],[-52,64],[-56,76]]),m([[-78,8],[-60,12],[-52,4],[-36,-4],[-35,-8],[-38,-15],[-42,-22],[-44,-23],[-50,-28],[-52,-33],[-58,-38],[-65,-55],[-68,-52],[-73,-48],[-70,-38],[-72,-28],[-72,-18],[-76,-12],[-78,-2],[-80,4],[-78,8]]),m([[-10,36],[-5,44],[-10,54],[-5,48],[2,50],[4,52],[8,56],[10,60],[14,56],[18,56],[20,60],[24,60],[28,56],[26,50],[22,42],[16,38],[12,36],[2,36],[-8,36],[-10,36]]),m([[14,56],[20,70],[28,72],[30,64],[26,56],[22,56],[18,56],[14,56]]),m([[-8,50],[-6,56],[-4,58],[-2,56],[-2,50],[-5,50],[-8,50]]),m([[-18,14],[-5,5],[2,6],[8,4],[12,-4],[18,-12],[22,-18],[26,-30],[32,-30],[36,-20],[40,-12],[44,-2],[50,10],[52,12],[44,12],[42,20],[38,22],[32,28],[22,36],[16,36],[8,36],[2,36],[-2,32],[-8,28],[-16,20],[-18,14]]),m([[32,28],[38,22],[42,20],[44,12],[52,12],[56,22],[60,22],[50,30],[44,30],[40,32],[36,30],[32,28]]),m([[26,42],[40,42],[50,44],[60,50],[56,60],[50,60],[40,52],[30,46],[26,42]]),m([[26,60],[30,70],[40,72],[60,74],[80,74],[100,76],[120,74],[140,72],[168,68],[180,68],[180,52],[168,52],[155,50],[148,44],[140,50],[130,50],[120,52],[110,54],[100,52],[90,52],[80,50],[72,54],[60,50],[50,44],[40,42],[28,50],[26,60]]),m([[60,22],[72,20],[76,8],[80,8],[82,14],[80,22],[76,22],[72,24],[64,24],[60,24],[56,22],[60,22]]),m([[68,24],[76,22],[80,22],[80,14],[78,8],[72,8],[68,8],[66,14],[68,20],[68,24]]),m([[96,28],[100,30],[108,28],[112,26],[116,24],[120,22],[124,22],[128,24],[130,32],[132,34],[136,36],[140,40],[142,44],[140,50],[130,50],[124,44],[118,38],[110,36],[104,36],[100,40],[96,38],[92,36],[88,26],[96,28]]),m([[100,4],[104,2],[108,-2],[110,-8],[115,-8],[120,-10],[130,-14],[140,-14],[145,-14],[148,-10],[148,-4],[140,-2],[130,-4],[120,-2],[110,2],[100,4]]),m([[130,32],[132,34],[136,36],[140,40],[142,44],[140,44],[136,38],[132,34],[130,32]]),m([[114,-22],[116,-20],[122,-14],[130,-12],[136,-12],[140,-14],[145,-18],[148,-22],[150,-28],[150,-34],[148,-38],[142,-38],[136,-34],[130,-32],[120,-30],[115,-34],[114,-30],[114,-22]]),m([[132,-2],[136,-4],[142,-4],[148,-6],[148,-8],[140,-6],[132,-4],[132,-2]]),m([[-180,-70],[-140,-74],[-100,-74],[-60,-72],[-20,-70],[20,-70],[60,-70],[100,-72],[140,-74],[180,-70],[180,-90],[-180,-90],[-180,-70]]);const _=h.getImageData(0,0,c,u),p=[],g=2;for(let tt=0;tt<u;tt+=g)for(let vt=0;vt<c;vt+=g){if(_.data[(tt*c+vt)*4]<128)continue;const U=vt/c*360-180,j=(90-(90-tt/u*180))*(Math.PI/180),xt=U*(Math.PI/180);p.push(l*Math.sin(j)*Math.sin(xt),l*Math.cos(j),l*Math.sin(j)*Math.cos(xt))}const y=new Float32Array(p),v=new Float32Array(y.length);for(let tt=0;tt<y.length;tt+=3){const vt=Math.random()*Math.PI*2,U=Math.acos(Math.max(-1,Math.min(1,Math.random()*2-1))),Y=10.5+Math.random()*5.5;v[tt]=Math.sin(U)*Math.cos(vt)*Y,v[tt+1]=Math.cos(U)*Y+(Math.random()-.5)*.8,v[tt+2]=Math.sin(U)*Math.sin(vt)*Y}const S=new pn;S.setAttribute("position",new sn(v.slice(),3));const R=new dg({size:.036,color:a,transparent:!0,opacity:0,sizeAttenuation:!0}),A=new z1(S,R),E=new ui;n.add(E);const N=document.documentElement.getAttribute("data-theme")==="light"?new te("#d6c8c8"):new te("#2a1a1e"),x=new Fs(l*.995,48,48),M=new Ns({color:N,transparent:!0,opacity:0,side:Mn});E.add(new Xe(x,M));const I=new Fs(l*.998,48,48),z=new Ns({color:N,transparent:!0,opacity:0,side:ki});E.add(new Xe(I,z)),E.add(A);const D=new Al({color:a,transparent:!0,opacity:0}),H=new Al({color:a,transparent:!0,opacity:0});function k(tt,vt,U=64){const Y=(90-tt)*Math.PI/180,j=l*Math.cos(Y),xt=l*Math.sin(Y),ot=Array.from({length:U+1},(Tt,Et)=>{const kt=Et/U*Math.PI*2;return new B(xt*Math.sin(kt),j,xt*Math.cos(kt))});return new eh(new pn().setFromPoints(ot),vt)}function X(tt,vt,U=64){const Y=tt*Math.PI/180,j=Array.from({length:U+1},(xt,ot)=>{const Tt=ot/U*Math.PI;return new B(l*Math.sin(Tt)*Math.sin(Y),l*Math.cos(Tt),l*Math.sin(Tt)*Math.cos(Y))});return new eh(new pn().setFromPoints(j),vt)}E.add(k(0,H)),[-66,-30,30,66].forEach(tt=>E.add(k(tt,D))),[0,45,90,135].forEach(tt=>E.add(X(tt,D)));function V(){return window.innerWidth<=480?.8:window.innerWidth<=768?.86:window.innerWidth<=1024?.94:1}E.scale.setScalar(V()*.72),E.rotation.set(.34,-1.28,0);const lt={progress:0};function b(){const tt=S.getAttribute("position"),vt=tt.array,U=lt.progress,Y=U*U*(3-2*U);for(let j=0;j<vt.length;j+=3)vt[j]=v[j]+(y[j]-v[j])*Y,vt[j+1]=v[j+1]+(y[j+1]-v[j+1])*Y,vt[j+2]=v[j+2]+(y[j+2]-v[j+2])*Y;tt.needsUpdate=!0}b(),Yt.to(lt,{progress:1,duration:.95,ease:"expo.out",delay:.02,onUpdate:b}),Yt.to(r,{opacity:.72,duration:.28,ease:"power2.out"}),Yt.to(R,{opacity:.65,duration:.24,ease:"power2.out"}),Yt.to(M,{opacity:.52,duration:.55,ease:"power2.out",delay:.14}),Yt.to(z,{opacity:.22,duration:.55,ease:"power2.out",delay:.18}),Yt.to(D,{opacity:.09,duration:.5,ease:"power2.out",delay:.2}),Yt.to(H,{opacity:.2,duration:.5,ease:"power2.out",delay:.22}),Yt.to(E.scale,{x:V(),y:V(),z:V(),duration:1,ease:"expo.out"}),Yt.to(E.rotation,{x:.08,y:-.26,z:0,duration:1.1,ease:"expo.out"});let st=!1,Ut=0,Nt=0,Z=0,Q=0,_t=!0,ht=0,St=0,Ct=0,Bt=null;const Ht=1.3,at=.52,C=.16,dt=.08,pt=new Float32Array(y.length/3),ut=new B;let O=!1;const Pt=new Xe(new Fs(l,32,32),new Ns({visible:!1}));E.add(Pt);const Mt=new Mg,P=new At;function T(tt,vt){const U="http://www.w3.org/2000/svg",Y=document.createElementNS(U,"svg"),j=24,xt=j*2+8;Y.setAttribute("width",String(xt)),Y.setAttribute("height",String(xt)),Y.setAttribute("aria-hidden","true"),Y.style.cssText=`position:fixed;pointer-events:none;z-index:9999;left:${tt}px;top:${vt}px;transform:translate(-50%,-50%);overflow:visible;`;const ot=document.createElementNS(U,"circle");ot.setAttribute("cx",String(xt/2)),ot.setAttribute("cy",String(xt/2)),ot.setAttribute("r",String(j)),ot.setAttribute("fill","none"),ot.setAttribute("stroke",o),ot.setAttribute("stroke-width","2.5"),ot.setAttribute("stroke-linecap","round");const Tt=2*Math.PI*j;return ot.setAttribute("stroke-dasharray",String(Tt)),ot.setAttribute("stroke-dashoffset",String(Tt)),Y.appendChild(ot),document.body.appendChild(Y),window.requestAnimationFrame(()=>{ot.style.transition="stroke-dashoffset 0.4s cubic-bezier(0.22,1,0.36,1)",ot.setAttribute("stroke-dashoffset","0")}),{update(Et,kt){Y.style.left=Et+"px",Y.style.top=kt+"px"},destroy(){Y.style.transition="opacity 0.25s ease",Y.style.opacity="0",window.setTimeout(()=>{Y.parentNode&&Y.parentNode.removeChild(Y)},280)}}}function q(){return window.innerWidth>768&&window.matchMedia("(hover: hover) and (pointer: fine)").matches}function nt(tt,vt){q()&&(st=!0,_t=!1,window.clearTimeout(ht),Ut=tt,Nt=vt,Z=0,Q=0,t.style.cursor="grabbing",Yt.to(E.scale,{x:1.1,y:1.1,z:1.1,duration:.45,ease:"power2.out",overwrite:!0}),Bt&&(Bt.destroy(),Bt=null),Bt=T(tt,vt))}function ct(tt,vt){if(!st)return;const U=tt-Ut,Y=vt-Nt;Ut=tt,Nt=vt,Q=U*.007,Z=Y*.004,E.rotation.y+=Q,E.rotation.x=Math.max(-Math.PI*.5,Math.min(Math.PI*.5,E.rotation.x+Z)),Bt&&Bt.update(tt,vt)}function et(){st&&(st=!1,t.style.cursor=q()?"grab":"",Bt&&(Bt.destroy(),Bt=null),Yt.to(E.scale,{x:1,y:1,z:1,duration:.9,ease:"elastic.out(1,0.55)",overwrite:!0}),ht=window.setTimeout(()=>{_t=!0},2500))}t.style.cursor=q()?"grab":"",t.addEventListener("mousedown",tt=>{q()&&(tt.target.closest("a, button, input, select, textarea")||(tt.preventDefault(),nt(tt.clientX,tt.clientY)))}),window.addEventListener("mousemove",tt=>{if(ct(tt.clientX,tt.clientY),!st){const vt=t.getBoundingClientRect();St=((tt.clientX-vt.left)/vt.width-.5)*2,Ct=((tt.clientY-vt.top)/vt.height-.5)*2,P.set(St,-Ct),Mt.setFromCamera(P,i);const U=Mt.intersectObject(Pt);U.length>0?(O=!0,E.worldToLocal(ut.copy(U[0].point))):O=!1}}),window.addEventListener("mouseup",()=>{st&&et()}),t.addEventListener("mouseleave",()=>{st||(St=0,Ct=0),O=!1});function Dt(){const tt=t.clientWidth||window.innerWidth,vt=t.clientHeight||window.innerHeight;e.setSize(tt,vt,!1),t.style.cursor=q()&&!st?"grab":"",i.aspect=tt/vt,window.innerWidth<=480?i.position.set(0,0,13.2):window.innerWidth<=768?i.position.set(0,0,12.1):window.innerWidth<=1024?i.position.set(0,0,10.3):i.position.set(0,0,7.5),E.scale.setScalar(V()),i.updateProjectionMatrix()}Dt(),window.addEventListener("resize",Dt,{passive:!0});let ft=!0;new IntersectionObserver(tt=>tt.forEach(vt=>{ft=vt.isIntersecting}),{threshold:.08}).observe(t),function tt(){if(window.requestAnimationFrame(tt),!(document.hidden||!ft)){if(st||(_t&&(E.rotation.y+=.0012),(Math.abs(Z)>8e-5||Math.abs(Q)>8e-5)&&(E.rotation.y+=Q,E.rotation.x=Math.max(-Math.PI*.5,Math.min(Math.PI*.5,E.rotation.x+Z)),Z*=.94,Q*=.94)),i.position.x+=(St*.9-i.position.x)*.045,i.position.y+=(-Ct*.5-i.position.y)*.045,i.lookAt(0,0,0),lt.progress>=.99&&!st){const vt=S.getAttribute("position"),U=vt.array;let Y=!1;for(let j=0;j<y.length;j+=3){const xt=j/3,ot=y[j],Tt=y[j+1],Et=y[j+2];let kt=0;if(O){const J=ot-ut.x,rt=Tt-ut.y,mt=Et-ut.z,gt=Math.sqrt(J*J+rt*rt+mt*mt);if(gt<Ht){const qt=gt/Ht;kt=at*Math.exp(-qt*qt*3.5)}}const F=kt>pt[xt]?C:dt;pt[xt]+=(kt-pt[xt])*F;const it=pt[xt];Math.abs(it)>.001?(U[j]=ot+ot/l*it,U[j+1]=Tt+Tt/l*it,U[j+2]=Et+Et/l*it,Y=!0):U[j]!==ot&&(U[j]=ot,U[j+1]=Tt,U[j+2]=Et,Y=!0)}Y&&(vt.needsUpdate=!0)}e.render(n,i)}}()}function FE(){const r=document.getElementById("heroAmbient"),t=document.getElementById("hero");if(!r||!t)return;r.style.display="block";const e=new na({canvas:r,antialias:!1,alpha:!0,powerPreference:"low-power"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.setClearColor(0,0);const n=new ia,i=new $h(-1,1,1,-1,0,1),s=new ea(2,2),o=new Vi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uVelocity:{value:0},uResolution:{value:new At}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision mediump float;
      uniform float uTime;
      uniform float uVelocity;
      uniform vec2 uResolution;
      varying vec2 vUv;

      float hash(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.52;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = p * 2.1 + vec2(0.31, 0.73);
          a *= 0.46;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv;
        uv.x *= uResolution.x / uResolution.y;

        float vel = clamp(abs(uVelocity) * 0.018, 0.0, 0.55);
        float t = uTime * (0.055 + vel * 0.045);
        vec2 q = vec2(fbm(uv + t * 0.38), fbm(uv + vec2(1.3, 0.8)));
        vec2 r = vec2(
          fbm(uv + 1.7 * q + vec2(1.7, 9.2) + t * 0.12),
          fbm(uv + 1.7 * q + vec2(8.3, 2.8) + t * 0.09)
        );
        float f = fbm(uv + r + vel * 0.18 * q);
        f = smoothstep(0.30, 0.82, f);

        vec3 col = vec3(0.61, 0.0, 0.13) * f * 1.8;
        float vx = smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.62, vUv.x);
        float vy = smoothstep(0.0, 0.28, vUv.y) * smoothstep(1.0, 0.50, vUv.y);
        gl_FragColor = vec4(col, f * vx * vy * 0.72);
      }
    `});n.add(new Xe(s,o));function a(){const f=t.clientWidth||window.innerWidth,h=t.clientHeight||window.innerHeight;e.setSize(f,h,!1),o.uniforms.uResolution.value.set(f,h)}a(),window.addEventListener("resize",a,{passive:!0});let l=!0;const c=performance.now();let u=0;new IntersectionObserver(f=>{f.forEach(h=>{l=h.isIntersecting})},{threshold:.04}).observe(t),function f(){window.requestAnimationFrame(f),!(document.hidden||!l)&&(u+=(Nm()-u)*.08,o.uniforms.uTime.value=(performance.now()-c)*.001,o.uniforms.uVelocity.value=u,e.render(n,i))}()}function BE(r,t){const e=t*.64,n=t*.16;for(const i of[-t*.36,0,t*.36])r.beginPath(),r.ellipse(0,i,e,n,0,0,Math.PI*2),r.stroke();r.beginPath(),r.moveTo(-e,-t*.36),r.lineTo(-e,t*.36),r.moveTo(e,-t*.36),r.lineTo(e,t*.36),r.stroke()}function zE(r,t){const e=t*.44,n=t*.44,i=t*.24;r.beginPath(),r.moveTo(-e+i,-n),r.lineTo(-e,-n*.5),r.lineTo(-e,n*.5),r.lineTo(-e+i,n),r.stroke(),r.beginPath(),r.moveTo(e-i,-n),r.lineTo(e,-n*.5),r.lineTo(e,n*.5),r.lineTo(e-i,n),r.stroke(),r.beginPath(),r.moveTo(t*.16,-n),r.lineTo(-t*.16,n),r.stroke()}function kE(r,t){const e=[[-t*.56,-t*.38],[-t*.56,0],[-t*.56,t*.38]],n=[[0,-t*.22],[0,t*.22]],i=[t*.56,0],s=r.lineWidth;r.lineWidth=s*.55;for(const[a,l]of e)for(const[c,u]of n)r.beginPath(),r.moveTo(a,l),r.lineTo(c,u),r.stroke();for(const[a,l]of n)r.beginPath(),r.moveTo(a,l),r.lineTo(i[0],i[1]),r.stroke();r.lineWidth=s;const o=t*.12;for(const[a,l]of[...e,...n])r.beginPath(),r.arc(a,l,o,0,Math.PI*2),r.fill();r.beginPath(),r.arc(i[0],i[1],o*1.4,0,Math.PI*2),r.fill()}function HE(r,t){const e=t*.18;r.beginPath(),r.arc(-t*.24,-e,t*.28,Math.PI,0,!1),r.arc(t*.12,-e-t*.14,t*.22,Math.PI,0,!1),r.arc(t*.42,e-t*.06,t*.18,-Math.PI/2,Math.PI/3,!1),r.lineTo(t*.5,e+t*.1),r.arc(0,e+t*.1,t*.5,0,Math.PI,!1),r.closePath(),r.stroke()}function VE(r,t){const e=t*.56,n=t*.44,i=t*.14;r.beginPath(),r.roundRect(-e/2,i-n/2,e,n,t*.1),r.stroke();const s=e*.28,o=i-n/2-t*.2;r.beginPath(),r.moveTo(-s,i-n/2),r.lineTo(-s,o),r.arc(0,o,s,Math.PI,0),r.lineTo(s,i-n/2),r.stroke(),r.beginPath(),r.arc(0,i,t*.1,0,Math.PI*2),r.fill()}function GE(r,t){const e=t*.48;r.strokeRect(-e,-e,e*2,e*2),r.strokeRect(-e*.5,-e*.5,e,e);const n=e*.38,i=e*.56;for(const s of[-i*.5,i*.5])r.beginPath(),r.moveTo(s,-e),r.lineTo(s,-e-n),r.stroke(),r.beginPath(),r.moveTo(s,e),r.lineTo(s,e+n),r.stroke(),r.beginPath(),r.moveTo(-e,s),r.lineTo(-e-n,s),r.stroke(),r.beginPath(),r.moveTo(e,s),r.lineTo(e+n,s),r.stroke()}function WE(r,t){const e=t*.46;r.beginPath(),r.arc(-e,0,t*.28,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(e,0,t*.28,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(-e+t*.28,0),r.lineTo(e-t*.28,0),r.stroke(),r.beginPath(),r.moveTo(0,-t*.1),r.lineTo(0,t*.1),r.stroke()}function XE(r,t){const e=t*.24,n=t*.08,i=t*.34;r.beginPath(),r.arc(-e,-n,i,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(e,-n,i,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(0,-n-i*.8),r.lineTo(0,n+t*.28),r.stroke()}const Hc=[{label:"DATA",color:"#204e8c",draw:BE},{label:"API",color:"#8c4020",draw:zE},{label:"AI",color:"#58208c",draw:kE},{label:"CLOUD",color:"#186878",draw:HE},{label:"SSL",color:"#1a6442",draw:VE},{label:"GPU",color:"#785418",draw:GE},{label:"INTEGR",color:"#782044",draw:WE},{label:"ML",color:"#481878",draw:XE}],Vc=160,ch=26;function qE(r,t){let e;try{e=new OffscreenCanvas(t,t+ch)}catch{e=document.createElement("canvas"),e.width=t,e.height=t+ch}const n=e.getContext("2d");if(!n)return e;const i=t/2,s=t/2,o=t*.4;return n.fillStyle=r.color,n.globalAlpha=.9,n.beginPath(),n.arc(i,s,o,0,Math.PI*2),n.fill(),n.globalAlpha=1,n.strokeStyle="rgba(255,255,255,0.20)",n.lineWidth=2,n.beginPath(),n.arc(i,s,o,0,Math.PI*2),n.stroke(),n.save(),n.translate(i,s),n.strokeStyle="rgba(255,255,255,0.90)",n.fillStyle="rgba(255,255,255,0.90)",n.lineWidth=t*.032,n.lineCap="round",n.lineJoin="round",r.draw(n,o*.5),n.restore(),n.fillStyle="rgba(255,255,255,0.62)",n.font=`700 ${t*.115}px "JetBrains Mono", monospace`,n.textAlign="center",n.textBaseline="top",n.fillText(r.label,i,t+4),e}const YE=.09,$E=.4,ip=120,rp=18,sp=12,qa=50,KE=.22,op=22;function ap(r){return r<=600?10:r<=1024?16:24}function ZE(){const r=document.getElementById("techField");if(!r)return;const t=r.getContext("2d");if(!t)return;let e=0,n=0,i=1,s=0,o=0;const a={x:.5,y:.5},l={x:.5,y:.5},c={x:.5,y:.5},u=[],f=[],h=Hc.map(D=>qE(D,Vc));function d(D,H){return D+Math.random()*(H-D)}function m(){const D=Math.random()*4|0;return D===0?{x:Math.random()*e,y:-40}:D===1?{x:e+40,y:Math.random()*n}:D===2?{x:Math.random()*e,y:n+40}:{x:-40,y:Math.random()*n}}function _(D){const H=d(.3,1),k=d(.04,.14)*H,X=Math.random()*Math.PI*2,V=D?m():{x:d(.1,.9)*e,y:d(.1,.9)*n};return{x:V.x,y:V.y,vx:0,vy:0,r:d(22,30)+H*16,opacity:D?0:d(0,.9),targetOpacity:d(.52,.88),specIndex:Math.random()*Hc.length|0,depth:H,phase:D?0:1,phaseT:D?0:Math.random(),driftVx:Math.cos(X)*k,driftVy:Math.sin(X)*k,rot:0}}function p(D){const H=d(.3,1),k=d(.04,.14)*H,X=Math.random()*Math.PI*2,V=m();D.x=V.x,D.y=V.y,D.vx=0,D.vy=0,D.r=d(22,30)+H*16,D.opacity=0,D.targetOpacity=d(.52,.88),D.specIndex=Math.random()*Hc.length|0,D.depth=H,D.phase=0,D.phaseT=0,D.driftVx=Math.cos(X)*k,D.driftVy=Math.sin(X)*k}function g(){const D=ap(e);for(let H=0;H<D;H++)u.push(_(!1))}function y(D){const H=c.x*e,k=c.y*n,X=Math.min(e,n)*$E,V=Math.min(e,n)*YE;for(const b of u){const st=H-b.x,Ut=k-b.y,Nt=Math.sqrt(st*st+Ut*Ut)||.001;switch(b.phase){case 0:{b.phaseT=Math.min(1,b.phaseT+D*.9),b.opacity=b.phaseT*b.targetOpacity*.5,b.x+=b.driftVx*D*44,b.y+=b.driftVy*D*44,b.phaseT>=1&&(b.phase=1,b.phaseT=0);break}case 1:{b.opacity+=(b.targetOpacity-b.opacity)*Math.min(1,D*2),b.vx+=(b.driftVx-b.vx)*Math.min(1,D*2.5),b.vy+=(b.driftVy-b.vy)*Math.min(1,D*2.5),b.x+=b.vx*D*60,b.y+=b.vy*D*60,Nt<X&&(b.phase=2,b.phaseT=0),(b.x<-80||b.x>e+80||b.y<-80||b.y>n+80)&&p(b);break}case 2:{const Z=Math.max(0,1-Nt/X),Q=.0018*Z*b.depth;b.vx+=st/Nt*Q*60*D,b.vy+=Ut/Nt*Q*60*D,b.vx*=.968,b.vy*=.968,b.x+=b.vx*D*60,b.y+=b.vy*D*60,b.opacity=b.targetOpacity*(.6+Z*.56),Nt<V&&(b.phase=3,b.phaseT=0);break}case 3:{b.phaseT=Math.min(1,b.phaseT+D*1.8);const Z=1-b.phaseT*b.phaseT;if(b.opacity=b.targetOpacity*Math.max(0,Z),b.x+=st/Nt*D*52,b.y+=Ut/Nt*D*52,b.phaseT>=.3&&f.length<6&&b.phaseT<.35){const Q=Math.min(e,n)*.08;f.push({x:H,y:k,r:4,maxR:Q,opacity:.5})}b.phaseT>=1&&p(b);break}}}const lt=ap(e);for(;u.length<lt;)u.push(_(!0));u.length>lt+4&&(u.length=lt+4);for(let b=f.length-1;b>=0;b--){const st=f[b];st.r+=(st.maxR-st.r)*D*5,st.opacity-=D*2.2,st.opacity<=0&&f.splice(b,1)}}function v(){t.fillStyle="#080508",t.fillRect(0,0,e,n)}function S(){const D=l.x*e,H=l.y*n,k=Math.min(e,n)*KE,X=k*k;t.save(),t.strokeStyle="rgba(140,30,50,0.10)",t.lineWidth=.6,t.lineCap="round";for(let V=0;V<=sp;V++){const lt=V/sp*n;t.beginPath();for(let b=0;b<=qa;b++){const st=b/qa*e,Ut=st-D,Nt=lt-H,Z=Ut*Ut+Nt*Nt,Q=Math.max(0,1-Z/X),_t=Nt/(Math.sqrt(Z)||1)*Q*(1-Q)*4*op,ht=lt+_t;b===0?t.moveTo(st,ht):t.lineTo(st,ht)}t.stroke()}for(let V=0;V<=rp;V++){const lt=V/rp*e;t.beginPath();for(let b=0;b<=qa;b++){const st=b/qa*n,Ut=lt-D,Nt=st-H,Z=Ut*Ut+Nt*Nt,Q=Math.max(0,1-Z/X),_t=Ut/(Math.sqrt(Z)||1)*Q*(1-Q)*4*op,ht=lt+_t;b===0?t.moveTo(ht,st):t.lineTo(ht,st)}t.stroke()}t.restore()}function R(){t.save();for(let D=0;D<u.length;D++){const H=u[D];if(!(H.phase===3||H.opacity<.08))for(let k=D+1;k<u.length;k++){const X=u[k];if(X.phase===3||X.opacity<.08)continue;const V=Math.hypot(H.x-X.x,H.y-X.y);if(V<ip){const lt=1-V/ip,b=lt*Math.min(H.opacity,X.opacity)*.28;if(b<.006)continue;t.strokeStyle=`rgba(180,48,68,${b})`,t.lineWidth=lt*.65,t.beginPath(),t.moveTo(H.x,H.y),t.lineTo(X.x,X.y),t.stroke()}}}t.restore()}function A(){t.save();for(const D of u){if(D.opacity<.01)continue;const H=D.phase===3?Math.max(.05,1-D.phaseT*.85):1,k=D.r*H,X=Vc+ch;t.globalAlpha=Math.min(1,D.opacity),t.drawImage(h[D.specIndex],D.x-k,D.y-k,k*2,k*2*(X/Vc))}t.globalAlpha=1,t.restore()}function E(){t.save();for(const D of f)t.strokeStyle=`rgba(220,50,70,${D.opacity})`,t.lineWidth=1.2,t.beginPath(),t.arc(D.x,D.y,D.r,0,Math.PI*2),t.stroke();t.restore()}function L(D){s=requestAnimationFrame(L);const H=Math.min((D-o)/1e3,.05);o=D,l.x+=(a.x-l.x)*.044,l.y+=(a.y-l.y)*.044,y(H),t.setTransform(i,0,0,i,0,0),v(),S(),R(),A(),E()}function N(){const D=r.getBoundingClientRect();e=D.width,n=D.height,i=Math.min(window.devicePixelRatio||1,2),r.width=Math.round(e*i),r.height=Math.round(n*i)}let x=0;function M(){window.clearTimeout(x),x=window.setTimeout(N,130)}function I(D){const H=r.getBoundingClientRect();a.x=(D.clientX-H.left)/H.width,a.y=(D.clientY-H.top)/H.height}N(),g(),Oh||r.addEventListener("mousemove",I,{passive:!0}),window.addEventListener("resize",M,{passive:!0}),new IntersectionObserver(D=>{for(const H of D)H.isIntersecting&&!s?s=requestAnimationFrame(k=>{o=k,L(k)}):!H.isIntersecting&&s&&(cancelAnimationFrame(s),s=0)},{threshold:.01}).observe(r),s=requestAnimationFrame(D=>{o=D,L(D)})}function JE(){const r=document.getElementById("techTriangle");if(!r)return;const t=new na({canvas:r,alpha:!0,antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setClearColor(0,0);const e=new ia,n=new un(44,1,.1,100);n.position.z=4.6;const i=1.72,s=i*Math.sqrt(3)/2,o=[new B(0,s*2/3,0),new B(-i/2,-s/3,0),new B(i/2,-s/3,0),new B(0,s*2/3,0)];function a(m,_,p){const g=new pn().setFromPoints(o),y=new Al({color:m,transparent:!0,opacity:_,blending:du,depthWrite:!1}),v=new eh(g,y);return v.scale.setScalar(p),v}const l=new ui;l.add(a("#ff2244",.06,1.16)),l.add(a("#e82040",.16,1.08)),l.add(a("#d41c38",.46,1.03)),l.add(a("#cc1830",1,1)),l.rotation.x=.26,e.add(l);let c=0;function u(){c=requestAnimationFrame(u),l.rotation.y+=.007,t.render(e,n)}function f(){const m=r.getBoundingClientRect();m.width&&(t.setSize(m.width,m.height),n.aspect=m.width/m.height,n.updateProjectionMatrix())}f();let h=0;window.addEventListener("resize",()=>{window.clearTimeout(h),h=window.setTimeout(f,130)},{passive:!0}),new IntersectionObserver(m=>{for(const _ of m)_.isIntersecting&&!c?c=requestAnimationFrame(u):!_.isIntersecting&&c&&(cancelAnimationFrame(c),c=0)},{threshold:.01}).observe(r),c=requestAnimationFrame(u)}function jE(){const r=document.getElementById("ctaCanvas"),t=document.getElementById("contato");r.style.display="block",r.style.opacity="0";const e=new na({canvas:r,alpha:!0,antialias:!0,powerPreference:"low-power"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.setClearColor(0,0);const n=new ia,i=new un(42,1,.1,100);i.position.set(0,0,14);const s=new ui;n.add(s),n.add(new AE(16777215,.85));const o=new ah(10682397,3.5,44,2);o.position.set(0,1,10),n.add(o);const a=new ah(16777215,1.2,34,2);a.position.set(-8,-2,8),n.add(a);const l=new vE({color:9376034,roughness:.22,metalness:.24,clearcoat:.9,clearcoatRoughness:.22}),c=[],u=72;for(let _=0;_<u;_+=1){const p=_/u,g=new ui,y=new Xe(new Qh(.04+_%4*.008,0),l.clone());g.add(y),s.add(g),c.push({node:g,radius:4.2+_%6*.08,speed:.8+_%5*.014,phase:p*Math.PI*2,yScale:.76,zAmp:.04+_%3*.008,spinX:.012+_%3*.001,spinY:.016+_%4*.001,spinZ:.01+_%5*8e-4})}function f(){const _=t.clientWidth||window.innerWidth,p=t.clientHeight||520;e.setSize(_,p,!1),i.aspect=_/p,i.updateProjectionMatrix()}f(),window.addEventListener("resize",f,{passive:!0}),Yt.to(r,{opacity:1,duration:.44,ease:"power2.out",immediateRender:!1,scrollTrigger:{trigger:t,start:"top 92%",once:!0}});let h=!1;const d=new RE;new IntersectionObserver(_=>{_.forEach(p=>{h=p.isIntersecting})},{threshold:.16}).observe(t),function _(){if(window.requestAnimationFrame(_),document.hidden||!h)return;const p=d.getElapsedTime(),g=Math.min(Math.abs(Nm())*.02,.32);c.forEach((y,v)=>{const S=y.phase+p*y.speed,R=1+Math.sin(p*.28+v*.09)*.003,A=Math.cos(S)*y.radius*R,E=Math.sin(S)*y.radius*y.yScale,L=Math.cos(S)*y.zAmp-4.3;y.node.position.set(A,E,L),y.node.rotation.x+=y.spinX+g*.018,y.node.rotation.y+=y.spinY+g*.022,y.node.rotation.z+=y.spinZ+g*.014}),e.render(n,i)}()}function lp(){const r=Array.from(document.querySelectorAll(".h1-block")),t=document.querySelector(".hero-sub-wrap"),e=document.querySelector(".hero-brand-id");r.length&&(r.forEach(n=>{var s;if((s=n.parentElement)!=null&&s.classList.contains("h1-clip"))return;const i=document.createElement("div");i.className="h1-clip",n.parentNode.insertBefore(i,n),i.appendChild(n),Yt.set(n,{y:"110%"})}),t&&Yt.set(t,{opacity:0,y:26}),e&&Yt.set(e,{opacity:0,y:-10}),window.setTimeout(()=>{e&&Yt.to(e,{opacity:1,y:0,duration:.44,ease:"power2.out"}),Yt.to(r,{y:"0%",stagger:.11,duration:1.02,ease:"power4.out"}),t&&Yt.to(t,{opacity:1,y:0,duration:.9,ease:"power3.out",delay:r.length*.11+.12,clearProps:"opacity,transform"})},80))}function QE(r,t){const e=document.getElementById("hero"),n=document.getElementById("heroBrand3D"),i=document.querySelector(".hero-body"),s=Array.from(document.querySelectorAll(".h1-block")),o=document.querySelector(".hero-sub-wrap"),a=document.querySelector(".hero-brand-id");if(!e||!n||!i||!s.length){document.documentElement.classList.remove("hero-booting"),r&&r.setAssembly(1),lp();return}s.forEach(p=>{var y;if((y=p.parentElement)!=null&&y.classList.contains("h1-clip"))return;const g=document.createElement("div");g.className="h1-clip",p.parentNode.insertBefore(g,p),g.appendChild(p)});const l=window.innerWidth<=1024,c=l?.52:1.02,u=l?.88:.62,f=l?"4px":"10px",h=1;Yt.set(e,{opacity:1,visibility:"visible",clearProps:"pointerEvents"}),Yt.set(n,{opacity:0,scale:u,filter:`blur(${f})`,transformOrigin:"center center",clearProps:"y,yPercent"}),Yt.set(i,{opacity:0}),Yt.set(s,{y:"110%"}),o&&Yt.set(o,{opacity:0,y:22}),a&&Yt.set(a,{opacity:0,y:-10}),r&&(r.setAssembly(0),r.setWordmarkOpacity(l?0:1),r.setTriangleOpacity(1),r.setBrandScale(1));const d=Yt.timeline({defaults:{overwrite:!0},onStart:()=>{document.documentElement.classList.remove("hero-booting")}});d.to(n,{opacity:h,scale:1,filter:"blur(0px)",duration:c,ease:"expo.out"},.02),r&&d.to(r,{dummy:1,duration:c+.06,ease:"expo.out",onUpdate(){const p=this.progress();r.setAssembly(p),r.setBrandScale(.9+p*.1)}},.02);const m=document.getElementById("hero-scroll-space");if(!m){lp();return}if(window.innerWidth<=1024){m.style.height="120vh",a&&d.to(a,{opacity:1,y:0,duration:.36,ease:"power2.out"},.06),d.to(i,{opacity:1,duration:.26,ease:"none"},.08),d.to(s,{y:"0%",stagger:.06,duration:.46,ease:"power3.out"},.1),o&&d.to(o,{opacity:1,y:0,duration:.38,ease:"power2.out"},.46),Yt.timeline({scrollTrigger:{trigger:m,start:"top top",end:"bottom top",scrub:.8,invalidateOnRefresh:!0,onLeave:()=>{e.style.visibility="hidden",e.style.pointerEvents="none"},onEnterBack:()=>{e.style.visibility="",e.style.pointerEvents=""}}}).to(e,{opacity:0,ease:"power1.in",duration:1},0);return}m.style.height="200vh";const _=Yt.timeline({scrollTrigger:{trigger:m,start:"top top",end:"bottom top",scrub:1.2,invalidateOnRefresh:!0,onLeave:()=>{e.style.visibility="hidden",e.style.pointerEvents="none"},onEnterBack:()=>{e.style.visibility="",e.style.pointerEvents=""}}});_.to({},{duration:.6},0),_.to(n,{opacity:.12,scale:1,ease:"power2.inOut",duration:.9},.6),r&&_.to(r,{dummy:1,duration:.9,ease:"power2.inOut",onUpdate(){const p=this.progress();r.setWordmarkOpacity(1-p*.78),r.setTriangleOpacity(1-p*.32),r.setBrandScale(1-p*.08)}},.6),_.to(i,{opacity:1,duration:.22,ease:"none"},1.48),_.to(s,{y:"0%",stagger:.06,duration:.62,ease:"power3.out"},1.48),o&&_.to(o,{opacity:1,y:0,duration:.42,ease:"power2.out"},1.62),_.to({},{duration:.5},2.15),_.to(e,{opacity:0,ease:"power2.in",duration:.5},2.65)}function tT(){const r=Array.from(document.querySelectorAll(".manifesto-title"));r.length&&r.forEach(t=>{const e=t.innerHTML;if(!/<br\s*\/?>/i.test(e)||t.querySelector(".ln-inner"))return;const n=e.split(/<br\s*\/?>/i).map(s=>s.trim());t.innerHTML=n.map(s=>`<span class="ln-clip"><span class="ln-inner">${s}</span></span>`).join("");const i=t.querySelectorAll(".ln-inner");Yt.set(i,{yPercent:112}),jt.create({trigger:t,start:"top 82%",once:!0,onEnter:()=>{Yt.to(i,{yPercent:0,stagger:.14,duration:1.08,ease:"power4.out"})}})})}function eT(){if(!Pm())return;const r=document.getElementById("manifesto");r&&(Yt.set(r,{y:()=>Math.round(window.innerHeight*.5),zIndex:10,scale:.985,transformOrigin:"50% 0%",willChange:"transform"}),Yt.timeline({scrollTrigger:{trigger:r,start:"top bottom",end:()=>`+=${Math.round(window.innerHeight*.85)}`,scrub:1,invalidateOnRefresh:!0}}).to(r,{y:0,scale:1,ease:"none"},0))}function nT(){const r=document.getElementById("sobre");if(!r)return;const t=Array.from(r.querySelectorAll(".stat-item"));if(!t.length)return;const e=t.length,n=.2,i=.2,s=()=>window.innerWidth<=768,o=()=>Math.round(window.innerHeight*(s()?.55:.75)),a=r.querySelector(".stats-stage"),l=()=>Math.round(e*o());function c(){a&&(a.style.height="100svh"),r.style.minHeight=`${Math.round(window.innerHeight+l())}px`}c(),window.addEventListener("resize",c,{passive:!0}),t.forEach(f=>{const h=f.querySelector(".stat-left"),d=f.querySelector(".stat-bg-word");Yt.set(f,{opacity:0}),h&&Yt.set(h,{yPercent:6,opacity:0}),d&&Yt.set(d,{xPercent:5,opacity:0})});const u=Yt.timeline({scrollTrigger:{trigger:a,pin:!0,pinSpacing:!1,start:"top top",end:()=>`+=${l()}`,scrub:1,invalidateOnRefresh:!0,anticipatePin:1,onToggle:f=>r.classList.toggle("is-stats-active",f.isActive),onRefreshInit:c}});t.forEach((f,h)=>{const d=h,m=f.querySelector(".stat-left"),_=f.querySelector(".stat-bg-word");u.to(f,{opacity:1,duration:.01},d),m&&u.fromTo(m,{yPercent:6,opacity:0},{yPercent:0,opacity:1,ease:"power3.out",duration:n},d),_&&u.fromTo(_,{xPercent:5,opacity:0},{xPercent:0,opacity:1,ease:"power2.out",duration:n*1.2},d+.04),h<e-1&&(m&&u.to(m,{yPercent:-6,opacity:0,ease:"power2.in",duration:i},d+1-i),_&&u.to(_,{xPercent:-4,opacity:0,ease:"power2.in",duration:i},d+1-i),u.to(f,{opacity:0,duration:.01},d+1))})}function iT(){const r=document.getElementById("solutionsCarousel"),t=document.getElementById("solutionsTrack"),e=r?r.querySelector(".solutions-stack-stage"):null,n=r?r.closest(".section-solutions"):null;if(!r||!t||!e||!n)return;const i=Array.from(t.querySelectorAll(".sol-card"));if(!i.length)return;let s=0,o=0;const a=n.querySelector(".solutions-name-bg");let l="";function c(M,I,z){return Math.min(z,Math.max(I,M))}function u(M,I,z){return M+(I-M)*z}function f(M){const I=c(M,0,1);return 1-Math.pow(1-I,4)}function h(M){const I=c(M,0,1);return I*I}function d(M){const I=c(M,0,1);return 1-Math.pow(1-I,3)}function m(M){!a||M===l||(l=M,Yt.to(a,{opacity:0,duration:.14,ease:"power2.in",overwrite:!0,onComplete:()=>{a.textContent=M,Yt.to(a,{opacity:1,duration:.36,ease:"power2.out"})}}))}function _(){const M=window.innerWidth;return M<=480?[{x:0,y:0,z:0,rx:0,ry:-.4,rz:-.3,scale:1,opacity:1,blur:0,saturate:1.04,brighten:1.02},{x:8,y:8,z:-16,rx:.5,ry:-1.2,rz:-1.1,scale:.972,opacity:.82,blur:.28,saturate:.9,brighten:.94},{x:-10,y:15,z:-32,rx:1,ry:1,rz:.9,scale:.946,opacity:.66,blur:.6,saturate:.78,brighten:.86},{x:14,y:22,z:-48,rx:1.4,ry:-1.5,rz:-1.5,scale:.918,opacity:.48,blur:.96,saturate:.66,brighten:.78}]:M<=900?[{x:0,y:0,z:0,rx:0,ry:-.5,rz:-.4,scale:1,opacity:1,blur:0,saturate:1.05,brighten:1.03},{x:10,y:9,z:-22,rx:.6,ry:-1.6,rz:-1.3,scale:.97,opacity:.84,blur:.32,saturate:.9,brighten:.94},{x:-13,y:18,z:-44,rx:1.2,ry:1.3,rz:1.1,scale:.942,opacity:.68,blur:.7,saturate:.78,brighten:.86},{x:18,y:27,z:-66,rx:1.8,ry:-2,rz:-1.8,scale:.912,opacity:.52,blur:1.08,saturate:.66,brighten:.78}]:[{x:0,y:0,z:0,rx:0,ry:-.7,rz:-.5,scale:1,opacity:1,blur:0,saturate:1.06,brighten:1.04},{x:12,y:10,z:-28,rx:.7,ry:-1.9,rz:-1.5,scale:.968,opacity:.85,blur:.36,saturate:.92,brighten:.95},{x:-16,y:20,z:-56,rx:1.3,ry:1.5,rz:1.2,scale:.938,opacity:.7,blur:.76,saturate:.8,brighten:.87},{x:22,y:30,z:-84,rx:2,ry:-2.3,rz:-2,scale:.906,opacity:.54,blur:1.16,saturate:.68,brighten:.79}]}function p(){const M=window.innerWidth;return M<=480?{liftY:-148,liftZ:94,liftRz:8,liftRy:-10}:M<=900?{liftY:-180,liftZ:110,liftRz:8.8,liftRy:-12}:{liftY:-224,liftZ:144,liftRz:9.6,liftRy:-13}}function g(M){return{x:0,y:M.liftY,z:M.liftZ,rx:-8,ry:M.liftRy,rz:M.liftRz,scale:1.04,opacity:.97,blur:0,saturate:1.12,brighten:1.08}}function y(M,I,z){return{x:u(M.x,I.x,z),y:u(M.y,I.y,z),z:u(M.z,I.z,z),rx:u(M.rx,I.rx,z),ry:u(M.ry,I.ry,z),rz:u(M.rz,I.rz,z),scale:u(M.scale,I.scale,z),opacity:u(M.opacity,I.opacity,z),blur:u(M.blur,I.blur,z),saturate:u(M.saturate,I.saturate,z),brighten:u(M.brighten,I.brighten,z)}}const v=.35;function S(M,I,z,D){return D<=v?y(M,I,f(D/v)):y(I,z,h((D-v)/(1-v)))}function R(M){return i.slice(M).concat(i.slice(0,M))}function A(M,I){var Nt,Z;const z=_(),D=p(),H=c(M,0,i.length-1),k=R(H),X=I>=.5?1:0,V=Sl.matches?X:I,lt=Sl.matches?X:d(I),b=V<.5?H:c(H+1,0,i.length-1),st=g(D),Ut=z[z.length-1];i.forEach(Q=>{const _t=k.indexOf(Q),ht=z[Math.min(_t,z.length-1)];let St=ht;if(H<i.length-1&&I>0){if(Q===i[H])St=S(ht,st,Ut,V);else if(_t>0){const Bt=z[Math.min(_t-1,z.length-1)];St=y(ht,Bt,lt)}}const Ct=Q===i[H]?V<.56?18:4:Math.max(3,16-_t);Q.style.transform=`translate3d(calc(-50% + ${St.x}px), calc(-50% + ${St.y}px), ${St.z}px) rotateX(${St.rx}deg) rotateY(${St.ry}deg) rotateZ(${St.rz}deg) scale(${St.scale})`,Q.style.opacity=String(St.opacity),Q.style.filter=`blur(${St.blur}px) saturate(${St.saturate}) brightness(${St.brighten})`,Q.style.zIndex=String(Ct),Q.classList.toggle("is-stack-active",Q===i[b]),Q.classList.toggle("is-stack-next",H<i.length-1&&Q===i[H+1]),Q.setAttribute("aria-hidden",Q===i[b]?"false":"true")}),m(((Z=(Nt=i[b])==null?void 0:Nt.querySelector("h3"))==null?void 0:Z.textContent)||"")}function E(M,I){s=c(M,0,i.length-1),o=c(I,0,1),A(s,o)}function L(M){const I=Math.max(1,i.length-1),z=c(M,0,1)*I,D=z>=I,H=D?i.length-1:Math.floor(z),k=D?0:z-H;E(H,k)}E(0,0);const N=()=>{const M=window.innerWidth,I=M<=480?.6:M<=900?.7:.9;return Math.round(Math.max(1,i.length-1)*window.innerHeight*I)},x=window.innerWidth<=900?.6:.9;jt.create({trigger:n,start:"top top",end:()=>`+=${N()}`,pin:!0,pinSpacing:!0,scrub:x,anticipatePin:1,invalidateOnRefresh:!0,onRefresh:M=>{L(M.progress)},onUpdate:M=>{L(M.progress)}})}const cl=document.documentElement;cl.classList.add("hero-booting");"scrollRestoration"in history&&(history.scrollRestoration="manual");function ef(){window.scrollTo({top:0,left:0,behavior:"auto"})}ef();window.addEventListener("beforeunload",ef);window.addEventListener("load",ef);M_();E_();T_();if(u_)cl.classList.remove("hero-booting"),cl.classList.add("js-ready");else{Yt.registerPlugin(jt),y_();const r=NE();OE(),FE(),QE(r),I_(),tT(),P_(),L_(),eT(),D_(),b_(),A_(),R_(),w_(Wf),jE(),iT(),nT(),ZE(),JE(),Lm(Sl,t=>{var e;t.matches&&((e=Wf())==null||e.stop())}),jt.refresh(),cl.classList.add("js-ready")}
