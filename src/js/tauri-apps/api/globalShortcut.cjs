"use strict";var u=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var p=(e,r)=>{for(var n in r)u(e,n,{get:r[n],enumerable:!0})},f=(e,r,n,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of m(r))!g.call(e,t)&&t!==n&&u(e,t,{get:()=>r[t],enumerable:!(o=d(r,t))||o.enumerable});return e};var _=e=>f(u({},"__esModule",{value:!0}),e);var T={};p(T,{isRegistered:()=>h,register:()=>w,registerAll:()=>v,unregister:()=>b,unregisterAll:()=>P});module.exports=_(T);function y(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function s(e,r=!1){let n=y(),o=`_${n}`;return Object.defineProperty(window,o,{value:t=>(r&&Reflect.deleteProperty(window,o),e?.(t)),writable:!1,configurable:!0}),n}async function c(e,r={}){return new Promise((n,o)=>{let t=s(a=>{n(a),Reflect.deleteProperty(window,`_${l}`)},!0),l=s(a=>{o(a),Reflect.deleteProperty(window,`_${t}`)},!0);window.__TAURI_IPC__({cmd:e,callback:t,error:l,...r})})}async function i(e){return c("tauri",e)}async function w(e,r){return i({__tauriModule:"GlobalShortcut",message:{cmd:"register",shortcut:e,handler:s(r)}})}async function v(e,r){return i({__tauriModule:"GlobalShortcut",message:{cmd:"registerAll",shortcuts:e,handler:s(r)}})}async function h(e){return i({__tauriModule:"GlobalShortcut",message:{cmd:"isRegistered",shortcut:e}})}async function b(e){return i({__tauriModule:"GlobalShortcut",message:{cmd:"unregister",shortcut:e}})}async function P(){return i({__tauriModule:"GlobalShortcut",message:{cmd:"unregisterAll"}})}
