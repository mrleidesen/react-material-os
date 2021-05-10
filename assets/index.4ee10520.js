var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,n=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&n(e,s,r[s]);if(l)for(var s of l(r))a.call(r,s)&&n(e,s,r[s]);return e};import{r as s,d as c,M as o,S as m,C as i,a as d,b as u,W as f,V as h,U as w,c as p,e as v,I as E,x,D as b,f as g,g as N,h as y,i as k,j as I,F as C,k as j,G as S,T as $,l as L,m as M}from"./vendor.554078f8.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,r)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return l(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),n(o)},onload(){l(self[t].moduleMap[s]),n(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/react-material-os/assets/");function O(e){return s.createElement("div",{className:`relative h-full px-2 flex justify-center items-center hover:bg-gray-800 hover:bg-opacity-5 select-none cursor-pointer ${e.className||""}`,onClick:e.onClick,title:e.title},e.children)}function D(){const[e,t]=s.useState(!1),[l,a]=s.useState(c().format("HH:mm")),[n,r]=s.useState(null),[v,E]=s.useState(!1),x=[s.createElement(f,{className:"w-4 h-4"}),s.createElement(h,{className:"w-4 h-4"}),s.createElement(w,{className:"w-4 h-4"}),s.createElement(p,{className:"w-4 h-4"})];s.useEffect((()=>(N(),b(),()=>g())),[]);const b=()=>{n&&g(),r(setInterval((()=>{N()}),1e3))},g=()=>{n&&(clearInterval(n),r(null))},N=()=>{const e=c().format("YYYY/MM/DD"),t=c().format("HH:mm"),l=(new Date).getTime(),n=new Date(`${e} 07:00`).getTime(),r=new Date(`${e} 17:30`).getTime(),s=l>=n&&l<=r;a(t),s===v&&E(!s)};return s.createElement("div",{className:"bg-white bg-opacity-90 text-gray-700 h-6 shadow flex items-center justify-between box-border px-3 relative z-50"},s.createElement("div",{className:"h-full flex"},s.createElement(O,{className:"h-full",title:v?"现在是夜晚":"现在是白天"},v?s.createElement(o,{className:"w-4 h-4"}):s.createElement(m,{className:"w-4 h-4"}))),s.createElement(i,{onClickAway:()=>{t(!1)}},s.createElement("div",{className:"relative h-full flex justify-center items-center"},s.createElement(O,{className:"text-xs",onClick:()=>{t((e=>!e))}},s.createElement(d,{className:"w-3 h-3 mr-1"}),s.createElement("span",null,l)),e?s.createElement("div",{className:"bg-white bg-opacity-90 shadow p-3 absolute top-9 rounded w-96"},s.createElement(u,{value:new Date,className:"reset-calendar"})):null)),s.createElement("div",{className:"h-full flex"},x.map(((e,t)=>s.createElement(O,{className:"h-full",key:t},e)))))}function R(e){var t;const[l,a]=s.useState(!1),[n,c]=s.useState({x:100,y:100});return s.createElement(v,{handle:".handle",bounds:"parent",defaultPosition:{x:100,y:100},position:{x:l?0:n.x,y:l?0:n.y},defaultClassName:`window-draggable ${null!=(t=e.className)?t:""}`,onDrag:(e,t)=>{c({x:t.x,y:t.y})},onStop:(e,t)=>{0===t.y&&(a(!0),c((e=>r(r({},e),{y:10}))))},disabled:l},s.createElement("div",{className:`shadow rounded flex flex-col bg-white ${l?"w-full h-full":""} window-draggable__tool`,onClick:()=>e.activeItem(e.id)},s.createElement("div",{className:"flex p-1 items-center justify-between box-border px-2 border-b border-gray-300 handle"},s.createElement("div",{className:"flex-1 flex items-center text-gray-700 text-sm select-none",onDoubleClick:()=>a((e=>!e))},s.createElement("div",{className:"h-5 w-5"},e.icon),s.createElement("span",{className:"ml-2"},e.label||"无标题")),s.createElement("div",{className:"flex items-center h-full justify-end"},s.createElement(E,{size:"small",onClick:()=>e.hideItem(e.id)},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 12H4"}))),s.createElement(E,{size:"small",onClick:()=>a((e=>!e))},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}))),s.createElement(E,{size:"small",onClick:()=>e.deactiveItem(e.id)},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-red-500",viewBox:"0 0 20 20",fill:"currentColor"},s.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))))),s.createElement("div",{className:"flex-1 flex overflow-auto"},e.children)))}function H(){const[e,t]=s.useState("\n    # Hello \n\n    ## This is Note pad  \n    this is Notepad\n\n    ### HEllo Hello\n    * Yes\n  ");return s.createElement("div",{className:"w-full h-auto box-border p-2 bg-white text-gray-800 text-sm leading-normal whitespace-pre-line"},s.createElement("textarea",{value:e,className:"w-full h-64",onChange:e=>{t(e.target.value)}}))}function U(){const e=s.useRef(null),t=new x.Terminal,l={ls:['"Code"  "Download"  "Music"  "Video"'],help:["ls --- Check folder list","help --- Show command help"]};let a="";s.useEffect((()=>(n(),()=>{o()})),[]);const n=()=>{e.current&&(t.open(e.current),t.write("Welcome to [1;3;31mReact Material OS[0m\n\r$root: "),t.onKey((e=>{const t=e.domEvent.key;r(e.key,t)})))},r=(e,n)=>{"Enter"===n?(t.write("\n\r"),Object.keys(l).includes(a.toLowerCase())?c(a.toLowerCase()):t.write(`Can not found command '[1;3;31m${a}[0m', please type 'help'\n\r$root: `),a=""):"Backspace"===n?a.length>0&&(t.write("\b \b"),a=a.slice(0,a.length-1)):(t.write(e),a+=e)},c=e=>{const a=l[e];for(const l of a)t.writeln(l);t.write("$root: ")},o=()=>{t.dispose()};return s.createElement("div",{className:"w-full h-auto bg-black box-border p-1",ref:e})}function z(){const[e,t]=s.useState("https://bing.com"),[l,a]=s.useState("https://bing.com");return s.createElement("div",{className:"w-full h-auto flex flex-col browser"},s.createElement("div",{className:"w-full h-7 flex items-center justify-center border-b border-gray-200 bg-gray-100"},s.createElement("input",{type:"text",className:"text-xs text-gray-500 px-2 h-full w-1/2",value:l,onChange:e=>{a(e.target.value)},onKeyPress:e=>{if("Enter"===e.key){const e=l.split("//"),n=`https://${1===e.length?e[0]:e[1]}`;t(n),a(n)}},autoComplete:"off"})),s.createElement("iframe",{src:e,className:"w-full flex-1"}))}function B(){const e=[{name:"Desktop",icon:s.createElement(b,{className:"h-full w-full text-blue-400"})},{name:"Music",icon:s.createElement(g,{className:"h-full w-full text-red-500"})},{name:"Video",icon:s.createElement(N,{className:"h-full w-full text-green-500"})},{name:"Download",icon:s.createElement(y,{className:"h-full w-full"})},{name:"Settings",icon:s.createElement(k,{className:"h-full w-full text-yellow-700"})}],t={file:s.createElement(I,{className:"h-full w-full text-gray-300"}),folder:s.createElement(C,{className:"h-full w-full text-blue-500"})};return s.createElement("div",{className:"w-full h-auto flex folder"},s.createElement("div",{className:"w-36 h-full border-r flex flex-col"},e.map((e=>s.createElement("div",{key:e.name,className:"w-full h-10 flex items-center box-border px-3 border-b text-sm text-gray-600 select-none cursor-pointer hover:bg-gray-100 truncate"},s.createElement("div",{className:"w-5 h-5"},e.icon),s.createElement("span",{className:"ml-2"},e.name))))),s.createElement("div",{className:"flex-1 h-auto flex box-border p-3"},[{name:"Readme.md",type:"file"},{name:"Hello Folder",type:"folder"}].map((e=>s.createElement("div",{key:e.name,className:"h-24 w-24 rounded-lg flex flex-col justify-center items-center select-none hover:bg-gray-800 hover:bg-opacity-5 cursor-pointer mr-2 mb-2"},s.createElement("div",{className:"h-16 w-16"},t[e.type]),s.createElement("span",{className:"text-gray-600 font-semibold text-xs"},e.name))))))}function P(e){const t={1:s.createElement(B,null),2:s.createElement(z,null),3:s.createElement(U,null),4:s.createElement(H,null)};return s.createElement("div",{className:"relative flex-1"},e.icons.map((l=>{if(e.activeIds.includes(l.id))return s.createElement(R,{key:l.id,id:l.id,label:l.name,className:`${e.activeId===l.id?"window-draggable--active":""} ${e.hideIds.includes(l.id)?"hidden":""}`,activeItem:e.activeItem,deactiveItem:e.deactiveItem,hideItem:e.hideItem,icon:l.icon},t[l.id]||s.createElement("p",null,l.name))})))}const T=e=>{var{children:n,className:c}=e,o=((e,n)=>{var r={};for(var s in e)t.call(e,s)&&n.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&l)for(var s of l(e))n.indexOf(s)<0&&a.call(e,s)&&(r[s]=e[s]);return r})(e,["children","className"]);return s.createElement("div",r({className:`round-icon ${c}`},o),s.createElement("div",{className:"h-10 w-10"},n))};function _(e){return s.createElement("div",{className:"h-20 w-full box-border px-8 py-2 flex items-center justify-center relative z-50"},s.createElement("div",{className:"bg-white bg-opacity-60 rounded-3xl min-w-min h-16 box-border p-4 shadow flex items-center justify-center"},e.icons&&e.icons.map((t=>s.createElement(T,{title:t.name,key:t.id,onClick:()=>e.activeItem&&e.activeItem(t.id),className:e.activeIds.includes(t.id)?"round-icon--active":""},t.icon)))))}function V(){const e=[{id:1,icon:s.createElement(j,{className:"h-full w-full text-blue-500"}),name:"文件夹"},{id:2,icon:s.createElement(S,{className:"h-full w-full text-blue-500"}),name:"浏览器"},{id:3,icon:s.createElement($,{className:"h-full w-full text-gray-600"}),name:"终端"},{id:4,icon:s.createElement(L,{className:"h-full w-full text-green-500"}),name:"编辑器"}],[t,l]=s.useState(null),[a,n]=s.useState([]),[r,c]=s.useState([]),o=e=>{l(e)},m=e=>{r.includes(e)&&c((t=>t.filter((t=>t!==e))))};return s.createElement("div",{className:"w-full h-screen overflow-hidden bg-wallpaper bg-center bg-cover flex flex-col"},s.createElement(D,null),s.createElement(P,{activeIds:a,activeId:t,activeItem:o,deactiveItem:e=>{n((t=>t.filter((t=>t!==e)))),m(e)},hideItem:e=>{r.includes(e)||c((t=>[...t,e]))},icons:e,hideIds:r}),s.createElement(_,{activeItem:e=>{o(e),a.includes(e)?r.includes(e)?c((t=>t.filter((t=>t!==e)))):c((t=>[...t,e])):n((t=>[...t,e]))},icons:e,activeIds:a}))}M.render(s.createElement(V,null),document.getElementById("root"));
