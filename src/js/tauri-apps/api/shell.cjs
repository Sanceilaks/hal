"use strict";var p=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var f=(s,e)=>{for(var t in e)p(s,t,{get:e[t],enumerable:!0})},v=(s,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of m(e))!y.call(s,n)&&n!==t&&p(s,n,{get:()=>e[n],enumerable:!(r=g(e,n))||r.enumerable});return s};var w=s=>v(p({},"__esModule",{value:!0}),s);var T={};f(T,{Child:()=>c,Command:()=>l,EventEmitter:()=>a,open:()=>P});module.exports=w(T);function b(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function u(s,e=!1){let t=b(),r=`_${t}`;return Object.defineProperty(window,r,{value:n=>(e&&Reflect.deleteProperty(window,r),s?.(n)),writable:!1,configurable:!0}),t}async function h(s,e={}){return new Promise((t,r)=>{let n=u(i=>{t(i),Reflect.deleteProperty(window,`_${o}`)},!0),o=u(i=>{r(i),Reflect.deleteProperty(window,`_${n}`)},!0);window.__TAURI_IPC__({cmd:s,callback:n,error:o,...e})})}async function d(s){return h("tauri",s)}async function L(s,e,t=[],r){return typeof t=="object"&&Object.freeze(t),d({__tauriModule:"Shell",message:{cmd:"execute",program:e,args:t,options:r,onEventFn:u(s)}})}var a=class{constructor(){this.eventListeners=Object.create(null)}addListener(e,t){return this.on(e,t)}removeListener(e,t){return this.off(e,t)}on(e,t){return e in this.eventListeners?this.eventListeners[e].push(t):this.eventListeners[e]=[t],this}once(e,t){let r=(...n)=>{this.removeListener(e,r),t(...n)};return this.addListener(e,r)}off(e,t){return e in this.eventListeners&&(this.eventListeners[e]=this.eventListeners[e].filter(r=>r!==t)),this}removeAllListeners(e){return e?delete this.eventListeners[e]:this.eventListeners=Object.create(null),this}emit(e,...t){if(e in this.eventListeners){let r=this.eventListeners[e];for(let n of r)n(...t);return!0}return!1}listenerCount(e){return e in this.eventListeners?this.eventListeners[e].length:0}prependListener(e,t){return e in this.eventListeners?this.eventListeners[e].unshift(t):this.eventListeners[e]=[t],this}prependOnceListener(e,t){let r=(...n)=>{this.removeListener(e,r),t(...n)};return this.prependListener(e,r)}},c=class{constructor(e){this.pid=e}async write(e){return d({__tauriModule:"Shell",message:{cmd:"stdinWrite",pid:this.pid,buffer:typeof e=="string"?e:Array.from(e)}})}async kill(){return d({__tauriModule:"Shell",message:{cmd:"killChild",pid:this.pid}})}},l=class extends a{constructor(t,r=[],n){super();this.stdout=new a;this.stderr=new a;this.program=t,this.args=typeof r=="string"?[r]:r,this.options=n??{}}static sidecar(t,r=[],n){let o=new l(t,r,n);return o.options.sidecar=!0,o}async spawn(){return L(t=>{switch(t.event){case"Error":this.emit("error",t.payload);break;case"Terminated":this.emit("close",t.payload);break;case"Stdout":this.stdout.emit("data",t.payload);break;case"Stderr":this.stderr.emit("data",t.payload);break}},this.program,this.args,this.options).then(t=>new c(t))}async execute(){return new Promise((t,r)=>{this.on("error",r);let n=[],o=[];this.stdout.on("data",i=>{n.push(i)}),this.stderr.on("data",i=>{o.push(i)}),this.on("close",i=>{t({code:i.code,signal:i.signal,stdout:n.join(`
`),stderr:o.join(`
`)})}),this.spawn().catch(r)})}};async function P(s,e){return d({__tauriModule:"Shell",message:{cmd:"open",path:s,with:e}})}
