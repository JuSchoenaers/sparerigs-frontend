import{r as t,R as n}from"./index-DJO9vBfz.js";import{F as h,a as x}from"./index.es-uxvYyTTx.js";import{b as T,c as p}from"./index-XApWtzZP.js";import{u as _,D as U}from"./useTranslation-BwO5D2xg.js";import"./v4-CQkTLCs1.js";import"./index-xAjyIiMH.js";import"./index-C1dzxQ9A.js";const u=({category:e,handleSelect:a})=>{const{t:i}=_(),[d,r]=t.useState(!1),c=()=>{e.children&&e.children.length>0?r(!d):a(e)};return n.createElement("li",{className:"mx-4 py-2"},n.createElement("div",{className:"flex flex-row gap-2 items-center",onClick:c,style:{cursor:"pointer"}},e.children&&e.children.length>0&&n.createElement(h,{className:"w-4 h-4",icon:d?T:p}),i(e.name)),d&&e.children&&e.children.length>0&&n.createElement("ul",null,e.children.map(m=>n.createElement(u,{key:m.id,handleSelect:a,category:m}))))},g=({categories:e,handleSelect:a})=>n.createElement("ul",{className:"px-4 py-2"},e.map(i=>n.createElement(u,{key:i.id,handleSelect:a,category:i}))),N=({initialValue:e={name:"",id:null},placeholder:a="Placeholder",onChange:i,className:d,initialTree:r=[],name:c})=>{const[m,o]=t.useState(!1),[E,I]=t.useState(r),[C,M]=t.useState(e),{t:D}=_();t.useEffect(()=>{I(r)},[r]);const f=s=>{o(s)},L=s=>{M(s),i(s)},P=()=>o(!1);return n.createElement("div",null,n.createElement("div",{className:`${d} group flex flex-row gap-6 px-5 items-center min-w-96 content-center h-12 bg-secondary-800 rounded-2xl  border-2 border-primary-500 hover:border-primary-300 hover:drop-shadow-glow focus-within:border-primary-300 focus-within:drop-shadow-glow shadow-primary-300`},n.createElement("input",{readOnly:!0,type:"text",id:c,name:c,value:D(C.name),onFocus:()=>f(!0),placeholder:a,className:"bg-secondary-800 pb-[3px] w-full bg-opacity-0 outline-none placeholder:text-text-primary placeholder:text-opacity-25 text-text-primary"}),n.createElement(h,{className:"w-4 h-4",icon:m?T:p})),E.length>0&&n.createElement(U,{visible:m,onClose:P},n.createElement(g,{handleSelect:L,categories:E})))},O=N;N.__docgenInfo={description:"",methods:[],displayName:"TreeSelect",props:{initialValue:{defaultValue:{value:"{name:'',id:null}",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Placeholder'",computed:!1},required:!1},initialTree:{defaultValue:{value:"[]",computed:!1},required:!1}}};const G=[{name:"COMPONENTS",id:1,children:[{name:"STORAGE",id:1,children:[{name:"HDD",id:1},{name:"SSD",id:2},{name:"M2",id:3},{name:"EXTERNAL",id:4},{name:"NAS",id:5}]},{name:"CPU",id:29,children:[{name:"DESKTOP_CPU",id:6},{name:"SERVER_CPU",id:8},{name:"LAPTOP_CPU",id:7}]},{name:"MOBO",id:30,children:[{name:"MICRO_ATX",id:11},{name:"ATX",id:9},{name:"MINI_ATX",id:10},{name:"SERVER_MOBO",id:12}]},{name:"RAM",id:31,children:[{name:"DESKTOP_RAM",id:13},{name:"LAPTOP_RAM",id:14},{name:"SERVER_RAM",id:15}]},{name:"POWER",id:32,children:[{name:"ATX_PWS",id:16},{name:"SFX_PWS",id:17},{name:"MODULAR_PWS",id:18},{name:"NON_MODULAR_PWS",id:19}]},{name:"GPU",id:33,children:[{name:"GAMING_GPU",id:20},{name:"WORKSTATION_GPU",id:21}]},{name:"SOUND",id:34,children:[{name:"INTERNAL_SOUND_CARD",id:22},{name:"EXTERNAL_SOUND_CARD",id:23}]},{name:"NET",id:35,children:[{name:"ETHERNET",id:24},{name:"WIFI",id:25},{name:"BT_ADAPTER",id:26}]},{name:"COOLING",id:36,children:[{name:"AIR_COOLER",id:27},{name:"LIQUID_COOLER",id:28},{name:"FANS",id:29}]},{name:"CASES",id:37,children:[{name:"FULL",id:30},{name:"MID",id:31},{name:"MINI",id:32},{name:"EXTERNAL_DD",id:33}]}]},{name:"PERIPHERALS",id:2,children:[{name:"MONITORS",id:38,children:[{name:"LED_MONITORS",id:34},{name:"GAMING_MONITORS",id:35},{name:"4K_MONITORS",id:36},{name:"ULTRAWIDE_MONITORS",id:37},{name:"MEMBRANE",id:39}]},{name:"KEYBOARD",id:39,children:[{name:"MECHANICAL",id:38},{name:"WIRELESS",id:40},{name:"GAMING_KEYBOARDS",id:41}]},{name:"MICE",id:40,children:[{name:"WIRED",id:42},{name:"WIRELESS",id:43},{name:"GAMING_MICE",id:44},{name:"TRACKBALLS",id:45}]},{name:"PRINTERS",id:41,children:[]},{name:"WEBCAM",id:42,children:[{name:"STANDARD_WEBCAMS",id:46},{name:"HD_WEBCAMS",id:47},{name:"STREAMING",id:48}]},{name:"HEADSET_MIC",id:43,children:[{name:"GAMING_HEADSETS",id:49},{name:"USB_MIC",id:50},{name:"PODCAST_MIC",id:51}]},{name:"EXTERNAL_STORAGE",id:44,children:[{name:"EXTERNAL_HDD",id:52},{name:"EXTERNAL_SSD",id:53},{name:"USB_FLASH_DRIVE",id:54},{name:"MEMORY_CARDS",id:55}]},{name:"HUBS_ADAPTERS",id:45,children:[]}]},{name:"NETWORK",id:3,children:[{name:"ROUTERS",id:46,children:[]},{name:"MODEMS",id:47,children:[]},{name:"SWITCHES",id:48,children:[]},{name:"ACCESS_POINTS",id:49,children:[]},{name:"NET_CABLES",id:50,children:[]}]},{name:"ACCESSORIES",id:4,children:[{name:"CABLES_CONNECTORS",id:51,children:[]},{name:"MOUNTS_STANDS",id:52,children:[]},{name:"BATTERIES_CHARGERS",id:53,children:[]},{name:"BAGS_CASES",id:54,children:[]}]}],F={title:"Form elements/Input/TreeSelect",component:O,tags:["autodocs"],argTypes:{}},B=e=>n.createElement(O,{...e}),l=B.bind({});l.args={placeholder:"Test",onChange:x("onChange"),initialTree:G};var S,A,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:"args => <TreeSelect {...args} />",...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const V=["Default"];export{l as Default,V as __namedExportsOrder,F as default};
