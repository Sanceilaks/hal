"use strict";var a=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var g=(e,n)=>{for(var o in n)a(e,o,{get:n[o],enumerable:!0})},f=(e,n,o,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of p(n))!m.call(e,r)&&r!==o&&a(e,r,{get:()=>n[r],enumerable:!(t=l(n,r))||t.enumerable});return e};var _=e=>f(a({},"__esModule",{value:!0}),e);var k={};g(k,{getName:()=>T,getTauriVersion:()=>v,getVersion:()=>y,hide:()=>A,show:()=>P});module.exports=_(k);function w(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function c(e,n=!1){let o=w(),t=`_${o}`;return Object.defineProperty(window,t,{value:r=>(n&&Reflect.deleteProperty(window,t),e?.(r)),writable:!1,configurable:!0}),o}async function d(e,n={}){return new Promise((o,t)=>{let r=c(s=>{o(s),Reflect.deleteProperty(window,`_${u}`)},!0),u=c(s=>{t(s),Reflect.deleteProperty(window,`_${r}`)},!0);window.__TAURI_IPC__({cmd:e,callback:r,error:u,...n})})}async function i(e){return d("tauri",e)}async function y(){return i({__tauriModule:"App",message:{cmd:"getAppVersion"}})}async function T(){return i({__tauriModule:"App",message:{cmd:"getAppName"}})}async function v(){return i({__tauriModule:"App",message:{cmd:"getTauriVersion"}})}async function P(){return i({__tauriModule:"App",message:{cmd:"show"}})}async function A(){return i({__tauriModule:"App",message:{cmd:"hide"}})}