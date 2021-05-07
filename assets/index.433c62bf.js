var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,n=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a;import{r,d as c,C as i,a as o,b as s,c as m,I as d,e as u}from"./vendor.49c04776.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,r)=>{const c=new URL(e,a);if(self[t].moduleMap[c])return l(self[t].moduleMap[c]);const i=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),n(o)},onload(){l(self[t].moduleMap[c]),n(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/react-material-os/assets/");function v(){const[e,t]=r.useState(!1),[l,a]=r.useState(c().format("HH:mm")),[n,m]=r.useState(null);r.useEffect((()=>(d(),()=>u())),[]);const d=()=>{n&&u(),m(setInterval((()=>{a(c().format("HH:mm"))}),1e3))},u=()=>{n&&(clearInterval(n),m(null))};return r.createElement("div",{className:"bg-white bg-opacity-90 text-gray-700 h-9 shadow flex items-center justify-center relative z-50"},r.createElement(i,{onClickAway:()=>{t(!1)}},r.createElement("div",{className:"relative h-full flex justify-center items-center"},r.createElement(o,{variant:"outlined",color:"default",size:"small",label:l,onClick:()=>{t((e=>!e))}}),e?r.createElement("div",{className:"bg-white bg-opacity-90 shadow p-3 absolute top-9 rounded rounded-t-none w-96"},r.createElement(s,{value:new Date,className:"reset-calendar"})):null)))}function w(e){var t;const[l,a]=r.useState(!1),[n,c]=r.useState({x:100,y:100});return r.createElement(m,{handle:".handle",bounds:"parent",defaultPosition:{x:100,y:100},position:{x:l?0:n.x,y:l?0:n.y},defaultClassName:`window-draggable ${null!=(t=e.className)?t:""}`,onDrag:(e,t)=>((e,t)=>{c({x:t.x,y:t.y})})(0,t),key:e.key,disabled:l},r.createElement("div",{className:`shadow rounded flex flex-col bg-white ${l?"w-full h-full":""} transition-all window-draggable__tool`,onClick:()=>e.activeItem(e.id)},r.createElement("div",{className:"flex p-1 items-center justify-between box-border px-1 border-b border-gray-300 handle"},r.createElement("div",{className:"flex-1 text-gray-700 text-sm"},e.label||"无标题"),r.createElement("div",{className:"flex items-center h-full w-1/2 justify-end"},r.createElement(d,{size:"small",onClick:()=>e.hideItem(e.id)},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 12H4"}))),r.createElement(d,{size:"small",onClick:()=>a((e=>!e))},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}))),r.createElement(d,{size:"small",onClick:()=>e.deactiveItem(e.id)},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-red-500",viewBox:"0 0 20 20",fill:"currentColor"},r.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))))),r.createElement("div",{className:"flex-1 overflow-auto"},e.children)))}function f(e){return r.createElement("div",{className:"relative flex-1"},e.icons.map((t=>{if(e.activeIds.includes(t.id))return r.createElement(w,{key:t.id,id:t.id,label:t.name,className:`${e.activeId===t.id?"window-draggable--active":""} ${e.hideIds.includes(t.id)?"hidden":""}`,activeItem:e.activeItem,deactiveItem:e.deactiveItem,hideItem:e.hideItem},r.createElement("p",null,t.name))})))}const h=e=>{var{children:c,className:i}=e,o=((e,n)=>{var r={};for(var c in e)t.call(e,c)&&n.indexOf(c)<0&&(r[c]=e[c]);if(null!=e&&l)for(var c of l(e))n.indexOf(c)<0&&a.call(e,c)&&(r[c]=e[c]);return r})(e,["children","className"]);return r.createElement("div",((e,r)=>{for(var c in r||(r={}))t.call(r,c)&&n(e,c,r[c]);if(l)for(var c of l(r))a.call(r,c)&&n(e,c,r[c]);return e})({className:`round-icon ${i}`},o),c)};function p(e){return r.createElement("div",{className:"h-20 w-full box-border px-8 py-2 flex items-center justify-center"},r.createElement("div",{className:"bg-white bg-opacity-60 rounded-3xl min-w-min h-16 box-border p-4 shadow flex items-center justify-center"},e.icons&&e.icons.map((t=>r.createElement(h,{title:t.name,key:t.id,onClick:()=>e.activeItem&&e.activeItem(t.id),className:e.activeIds.includes(t.id)?"round-icon--active":""},t.icon)))))}function x(){const e=[{id:1,icon:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-blue-500",viewBox:"0 0 20 20",fill:"currentColor"},r.createElement("path",{d:"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"})),name:"文件夹"},{id:2,icon:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-blue-500",viewBox:"0 0 20 20",fill:"currentColor"},r.createElement("path",{fillRule:"evenodd",d:"M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",clipRule:"evenodd"})),name:"浏览器"},{id:3,icon:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-gray-600",viewBox:"0 0 20 20",fill:"currentColor"},r.createElement("path",{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",clipRule:"evenodd"})),name:"终端"},{id:4,icon:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-green-500",viewBox:"0 0 20 20",fill:"currentColor"},r.createElement("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",clipRule:"evenodd"})),name:"文本"}],[t,l]=r.useState(null),[a,n]=r.useState([]),[c,i]=r.useState([]),o=e=>{l(e)},s=e=>{c.includes(e)&&i((t=>t.filter((t=>t!==e))))};return r.createElement("div",{className:"w-full h-screen overflow-hidden bg-wallpaper bg-center bg-cover flex flex-col"},r.createElement(v,null),r.createElement(f,{activeIds:a,activeId:t,activeItem:o,deactiveItem:e=>{n((t=>t.filter((t=>t!==e)))),s(e)},hideItem:e=>{c.includes(e)||i((t=>[...t,e]))},icons:e,hideIds:c}),r.createElement(p,{activeItem:e=>{o(e),a.includes(e)?c.includes(e)?i((t=>t.filter((t=>t!==e)))):i((t=>[...t,e])):n((t=>[...t,e]))},icons:e,activeIds:a}))}u.render(r.createElement(x,null),document.getElementById("root"));
