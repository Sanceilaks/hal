import{a as o}from"./chunk-RKMHWDGH.js";import{a as l}from"./chunk-5UWJICAP.js";import{a as d}from"./chunk-FEIY7W7S.js";var W={};d(W,{TauriEvent:()=>c,emit:()=>D,listen:()=>E,once:()=>_});async function s(n,t){return o({__tauriModule:"Event",message:{cmd:"unlisten",event:n,eventId:t}})}async function m(n,t,r){await o({__tauriModule:"Event",message:{cmd:"emit",event:n,windowLabel:t,payload:r}})}async function a(n,t,r){return o({__tauriModule:"Event",message:{cmd:"listen",event:n,windowLabel:t,handler:l(r)}}).then(i=>async()=>s(n,i))}async function u(n,t,r){return a(n,t,i=>{r(i),s(n,i.id).catch(()=>{})})}var c=(e=>(e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_CREATED="tauri://window-created",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_FILE_DROP="tauri://file-drop",e.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",e.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",e.MENU="tauri://menu",e.CHECK_UPDATE="tauri://update",e.UPDATE_AVAILABLE="tauri://update-available",e.INSTALL_UPDATE="tauri://update-install",e.STATUS_UPDATE="tauri://update-status",e.DOWNLOAD_PROGRESS="tauri://update-download-progress",e))(c||{});async function E(n,t){return a(n,null,t)}async function _(n,t){return u(n,null,t)}async function D(n,t){return m(n,void 0,t)}export{m as a,a as b,u as c,c as d,E as e,_ as f,D as g,W as h};