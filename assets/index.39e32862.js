var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,n=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,s=(e,s)=>{for(var c in s||(s={}))t.call(s,c)&&n(e,c,s[c]);if(l)for(var c of l(s))a.call(s,c)&&n(e,c,s[c]);return e};import{r as c,C as r,d as o,V as i,a as m,S as d,W as u,b as f,A as h,I as p,X as b,M as w,c as E,e as v,f as x,R as g,g as y,h as N,i as I,x as C,D as k,j,k as S,l as $,m as D,n as z,F as M,o as O,G as R,T as W,p as _}from"./vendor.ee6a79c3.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,s)=>{const c=new URL(e,a);if(self[t].moduleMap[c])return l(self[t].moduleMap[c]);const r=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){s(new Error(`Failed to import: ${e}`)),n(o)},onload(){l(self[t].moduleMap[c]),n(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/react-material-os/assets/");function H(e){return c.createElement("div",{className:`relative h-full px-2 flex justify-center items-center hover:bg-gray-800 hover:bg-opacity-5 select-none cursor-pointer ${e.className||""}`,onClick:e.onClick,title:e.title},e.children)}function L(e){const[t,l]=c.useState(!1),a=()=>{l(!1)};return c.createElement(r,{onClickAway:a},c.createElement("div",{className:"relative h-full flex justify-center items-center"},c.createElement(H,{className:"text-xs",onClick:()=>{t?a():l(!0)}},e.children),t?e.showComponent:null))}function U(){const[e,t]=c.useState(o().format("HH:mm")),[l,a]=c.useState(null),[n,s]=c.useState(!1),r=[{icon:c.createElement(i,{className:"w-4 h-4"}),showComponent:P()},{icon:c.createElement(u,{className:"w-4 h-4"}),showComponent:F()},{icon:c.createElement(h,{className:"w-4 h-4"}),showComponent:T()}];c.useEffect((()=>(f(),m(),()=>d())),[]);const m=()=>{l&&d(),a(setInterval((()=>{f()}),1e3))},d=()=>{l&&(clearInterval(l),a(null))},f=()=>{const e=o().format("YYYY/MM/DD"),l=o().format("HH:mm"),a=(new Date).getTime(),c=new Date(`${e} 07:00`).getTime(),r=new Date(`${e} 17:30`).getTime(),i=a>=c&&a<=r;t(l),i===n&&s(!i)};return c.createElement("div",{className:"bg-gray-100 bg-opacity-90 text-gray-700 h-6 shadow flex items-center justify-between box-border px-3 relative z-50"},c.createElement("div",{className:"h-full flex"},c.createElement(H,{className:"h-full",title:n?"现在是夜晚":"现在是白天"},n?c.createElement(w,{className:"w-4 h-4"}):c.createElement(E,{className:"w-4 h-4"}))),c.createElement(L,{showComponent:A()},c.createElement(x,{className:"w-3 h-3 mr-1"}),c.createElement("span",null,e)),c.createElement("div",{className:"h-full flex"},r.map(((e,t)=>c.createElement(L,{key:t,showComponent:e.showComponent},e.icon)))))}const A=()=>c.createElement("div",{className:"toolbar-popover top-9 w-96"},c.createElement(v,{value:new Date,className:"reset-calendar"})),P=()=>{const[e,t]=c.useState(50);return c.createElement("div",{className:"w-64 flex items-center justify-between toolbar-fixover"},c.createElement(m,{className:"w-4 h-4 mr-2"}),c.createElement("div",{className:"flex-1"},c.createElement(d,{value:e,onChange:(e,l)=>{t(l)},"aria-labelledby":"continuous-slider"})),c.createElement(i,{className:"w-4 h-4 ml-2"}))},F=()=>{const[e,t]=c.useState(0);return c.createElement("div",{className:"toolbar-fixover w-72 flex flex-col"},["MrLeiDeSen's Wifi","Show Me Your Code","Wifi-UWNFIAU","Wifi-ANSKFJBA","Wifi-ADGIWQOQ"].map(((l,a)=>c.createElement("div",{key:a,className:"h-9 w-full flex justify-between items-center text-sm text-gray-700 border-b hover:bg-gray-700 hover:bg-opacity-10 box-border px-2 select-none",onClick:()=>t(a)},c.createElement("span",null,l),e===a?c.createElement(f,{className:"w-4 h-4"}):null))))},T=()=>{const[e,t]=c.useState([{id:1,title:"版本更新",content:"为了您的安全，请及时更新您的系统"},{id:2,title:"QQ消息通知",content:"您收到99条未读消息，请及时查收"},{id:3,title:"安全威胁",content:"系统发现威胁，点击查看详情"}]);return c.createElement("div",{className:"toolbar-fixover w-80 h-96 flex flex-col overflow-y-auto select-none"},e.length>0?e.map((e=>c.createElement("div",{key:e.id,className:"w-full h-16 box-border p-2 rounded flex flex-col bg-gray-700 bg-opacity-5 mb-2 hover:bg-opacity-10"},c.createElement("div",{className:"flex items-center justify-between mb-1"},c.createElement("span",{className:"text-base font-semibold"},e.title),c.createElement(p,{size:"small",onClick:()=>{return l=e.id,void t((e=>e.filter((e=>e.id!==l))));var l}},c.createElement(b,{className:"w-4 h-4"}))),c.createElement("span",{className:"text-sm text-gray-600"},e.content)))):c.createElement("div",{className:"w-full h-full flex justify-center items-center"},"当前无通知"))};function Y(e){var t;const[l,a]=c.useState(!1),[n,r]=c.useState({x:100,y:100}),[o,i]=c.useState({width:500,height:400});return c.createElement(g,{dragHandleClassName:"handle",bounds:"parent",position:{x:l?0:n.x,y:l?0:n.y},size:{width:l?"100%":o.width,height:l?"100%":o.height},className:`window-draggable ${null!=(t=e.className)?t:""}`,minHeight:"300px",minWidth:"300px",onDrag:(e,t)=>{r({x:t.x,y:t.y})},onDragStop:(e,t)=>{0===t.y&&(a(!0),r((e=>s(s({},e),{y:10}))))},onResize:(e,t,l,a,n)=>{i({width:l.offsetWidth,height:l.offsetHeight}),r(n)},disableDragging:l,style:e.style},c.createElement("div",{className:"rounded flex flex-col bg-gray-100 w-full h-full window-draggable__tool",onClick:()=>e.activeItem(e.id)},c.createElement("div",{className:"flex p-1 items-center justify-between box-border px-2 border-b border-gray-300"},c.createElement("div",{className:"flex-1 flex items-center text-gray-700 text-sm select-none handle",onDoubleClick:()=>a((e=>!e))},c.createElement("div",{className:"h-5 w-5"},e.icon),c.createElement("span",{className:"ml-2 font-semibold"},e.label||"无标题")),c.createElement("div",{className:"flex items-center h-full justify-end"},c.createElement(p,{size:"small",onClick:t=>{t.stopPropagation(),e.hideItem(e.id)}},c.createElement(y,{className:"w-4 h-4"})),c.createElement(p,{size:"small",onClick:()=>a((e=>!e))},c.createElement(N,{className:"w-4 h-4"})),c.createElement(p,{size:"small",onClick:t=>{t.stopPropagation(),e.deactiveItem(e.id)}},c.createElement(I,{className:"w-4 h-4 text-red-500"})))),c.createElement("div",{className:"flex-1 flex overflow-auto"},e.children)))}function B(){return c.createElement("div",{className:"w-full h-full vscode"},c.createElement("iframe",{src:"https://github1s.com/mrleidesen/react-material-os/blob/main/README.md",className:"w-full h-full"}))}function Q(){const e=c.useRef(null),t=new C.Terminal,l={ls:['"Code"  "Download"  "Music"  "Video"'],help:["ls --- Check folder list","help --- Show command help"]};let a="";c.useEffect((()=>(n(),()=>{o()})),[]);const n=()=>{e.current&&(t.open(e.current),t.write("Welcome to [1;3;31mReact Material OS[0m\n\r$root: "),t.onKey((e=>{const t=e.domEvent.key;s(e.key,t)})))},s=(e,n)=>{if("Enter"===n){const e=a.trim().split(" ")[0].toLowerCase();t.write("\n\r"),Object.keys(l).includes(e)?r(e):t.write(`Can not found command '[1;3;31m${e}[0m', please type 'help'\n\r$root: `),a=""}else"Backspace"===n?a.length>0&&(t.write("\b \b"),a=a.slice(0,a.length-1)):(t.write(e),a+=e)},r=e=>{const a=l[e];for(const l of a)t.writeln(l);t.write("$root: ")},o=()=>{t.dispose()};return c.createElement("div",{className:"w-full h-full bg-black box-border p-1",ref:e})}function V(){const[e,t]=c.useState("https://bing.com"),[l,a]=c.useState("https://bing.com");return c.createElement("div",{className:"w-full h-full flex flex-col"},c.createElement("div",{className:"w-full h-7 flex items-center justify-center border-b border-gray-200 bg-gray-100"},c.createElement("input",{type:"text",className:"text-xs text-gray-500 px-2 h-full w-1/2",value:l,onChange:e=>{a(e.target.value)},onKeyPress:e=>{var n;if("Enter"!==e.key)return;let s="";var c;if(c=l,!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(c)){const e=l.split("://");s=`https://${null!=(n=e[1])?n:e[0]}`}else s=`https://bing.com/search?q=${l}`;t(s),a(s)},autoComplete:"off",placeholder:"请输入网址"})),c.createElement("iframe",{src:e,className:"w-full flex-1"}))}function K(){const e=[{name:"Desktop",icon:c.createElement(k,{className:"h-full w-full text-blue-400"})},{name:"Music",icon:c.createElement(j,{className:"h-full w-full text-red-500"})},{name:"Video",icon:c.createElement(S,{className:"h-full w-full text-green-500"})},{name:"Download",icon:c.createElement($,{className:"h-full w-full"})},{name:"Settings",icon:c.createElement(D,{className:"h-full w-full text-yellow-700"})}],t={file:c.createElement(z,{className:"h-full w-full text-gray-300"}),folder:c.createElement(M,{className:"h-full w-full text-blue-500"})};return c.createElement("div",{className:"w-full h-full flex"},c.createElement("div",{className:"w-36 h-full border-r flex flex-col"},e.map((e=>c.createElement("div",{key:e.name,className:"w-full h-10 flex items-center box-border px-3 border-b text-sm text-gray-600 select-none cursor-pointer hover:bg-gray-100 truncate"},c.createElement("div",{className:"w-5 h-5"},e.icon),c.createElement("span",{className:"ml-2"},e.name))))),c.createElement("div",{className:"flex-1 h-auto flex box-border p-3"},[{name:"Readme.md",type:"file"},{name:"Hello Folder",type:"folder"}].map((e=>c.createElement("div",{key:e.name,className:"h-24 w-24 rounded-lg flex flex-col justify-center items-center select-none hover:bg-gray-800 hover:bg-opacity-5 cursor-pointer mr-2 mb-2"},c.createElement("div",{className:"h-16 w-16"},t[e.type]),c.createElement("span",{className:"text-gray-600 font-semibold text-xs"},e.name))))))}function G(e){const t={1:c.createElement(K,null),2:c.createElement(V,null),3:c.createElement(Q,null),4:c.createElement(B,null)},l=t=>{const l=e.activeIds.findIndex((e=>e===t))+1;return(e.activeId===t?20:10)+l};return c.createElement("div",{className:"relative flex-1"},e.icons.map((a=>e.activeIds.includes(a.id)?c.createElement(Y,{key:a.id,id:a.id,label:a.name,className:`${e.activeId===a.id?"window-draggable--active":""} ${e.hideIds.includes(a.id)?"hidden-important":""}`,activeItem:e.activeItem,deactiveItem:e.deactiveItem,hideItem:e.hideItem,icon:a.icon,style:{zIndex:l(a.id)}},t[a.id]||c.createElement("p",null,a.name)):null)))}const q=e=>{var{children:n,className:r}=e,o=((e,n)=>{var s={};for(var c in e)t.call(e,c)&&n.indexOf(c)<0&&(s[c]=e[c]);if(null!=e&&l)for(var c of l(e))n.indexOf(c)<0&&a.call(e,c)&&(s[c]=e[c]);return s})(e,["children","className"]);return c.createElement("div",s({className:`round-icon ${r}`},o),c.createElement("div",{className:"h-10 w-10 flex items-center justify-center"},n))};function J(e){return c.createElement("div",{className:"h-20 w-full box-border px-8 py-2 flex items-center justify-center relative z-50"},c.createElement("div",{className:"bg-white bg-opacity-60 rounded-3xl min-w-min h-16 box-border p-4 shadow flex items-center justify-center"},e.icons&&e.icons.map((t=>c.createElement(q,{title:t.name,key:t.id,onClick:()=>e.activeItem&&e.activeItem(t.id),className:e.activeIds.includes(t.id)?"round-icon--active":""},t.icon))),c.createElement("a",{target:"_blank",href:"https://github.com/mrleidesen/react-material-os"},c.createElement(q,null,c.createElement("img",{src:"/react-material-os/assets/github.a57fdcb1.svg",className:"w-11/12 h-11/12 object-contain object-center"})))))}function X(){const e=[{id:1,icon:c.createElement(O,{className:"h-full w-full text-blue-500"}),name:"文件夹"},{id:2,icon:c.createElement(R,{className:"h-full w-full text-blue-500"}),name:"浏览器"},{id:3,icon:c.createElement(W,{className:"h-full w-full text-gray-600"}),name:"终端"},{id:4,icon:c.createElement("img",{className:"w-11/12 h-11/12 object-contain object-center",src:"/react-material-os/assets/vscode.7ac29e00.png"}),name:"VSCode"}],[t,l]=c.useState(null),[a,n]=c.useState([]),[s,r]=c.useState([]),o=e=>{e?(l(e),n((t=>[...t.filter((t=>t!==e)),e]))):l(null)},i=e=>{s.includes(e)||(o(null),r((t=>[...t,e])))},m=e=>{s.includes(e)&&r((t=>t.filter((t=>t!==e))))};return c.createElement("div",{className:"w-full h-screen overflow-hidden bg-wallpaper bg-center bg-cover flex flex-col"},c.createElement(U,null),c.createElement(G,{activeIds:a,activeId:t,activeItem:o,deactiveItem:e=>{o(null),n((t=>t.filter((t=>t!==e)))),m(e)},hideItem:i,icons:e,hideIds:s}),c.createElement(J,{activeItem:e=>{a.includes(e)?t===e?(i(e),o(null)):(o(e),m(e)):o(e)},icons:e,activeIds:a}))}_.render(c.createElement(X,null),document.getElementById("root"));
