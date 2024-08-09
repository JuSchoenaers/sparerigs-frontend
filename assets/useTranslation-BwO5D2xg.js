import{r as i,R as H}from"./index-DJO9vBfz.js";const $=({children:e,visible:n,onClose:s})=>{const[o,c]=i.useState(n),t=i.useRef(null);return i.useEffect(()=>{const f=w=>{t.current&&!t.current.contains(w.target)&&(c(!1),s())};return document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}},[]),i.useEffect(()=>{c(n)},[n]),H.createElement("div",{ref:t,className:`max-h-64 overflow-scroll flex-col z-[1000] gap-2 bg-secondary-800 py-3 rounded-2xl w-96 text-text-primary  border-2 border-primary-500 absolute mt-2 ${o?"flex":"hidden"}`},e)};$.__docgenInfo={description:"",methods:[],displayName:"DropdownModal"};const P=(...e)=>{console!=null&&console.warn&&(p(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},F={},E=(...e)=>{p(e[0])&&F[e[0]]||(p(e[0])&&(F[e[0]]=new Date),P(...e))},k=(e,n)=>()=>{if(e.isInitialized)n();else{const s=()=>{setTimeout(()=>{e.off("initialized",s)},0),n()};e.on("initialized",s)}},M=(e,n,s)=>{e.loadNamespaces(n,k(e,s))},v=(e,n,s,o)=>{p(s)&&(s=[s]),s.forEach(c=>{e.options.ns.indexOf(c)<0&&e.options.ns.push(c)}),e.loadLanguages(n,k(e,o))},U=(e,n,s={})=>!n.languages||!n.languages.length?(E("i18n.languages were undefined or empty",n.languages),!0):n.hasLoadedNamespace(e,{lng:s.lng,precheck:(o,c)=>{var t;if(((t=s.bindI18n)==null?void 0:t.indexOf("languageChanging"))>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!c(o.isLanguageChangingTo,e))return!1}}),p=e=>typeof e=="string",q=e=>typeof e=="object"&&e!==null,A=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,B={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},W=e=>B[e],_=e=>e.replace(A,W);let D={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:_};const G=()=>D;let J;const K=()=>J,V=i.createContext();class Y{constructor(){this.usedNamespaces={}}addUsedNamespaces(n){n.forEach(s=>{var o;(o=this.usedNamespaces)[s]??(o[s]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Q=(e,n)=>{const s=i.useRef();return i.useEffect(()=>{s.current=e},[e,n]),s.current},O=(e,n,s,o)=>e.getFixedT(n,s,o),X=(e,n,s,o)=>i.useCallback(O(e,n,s,o),[e,n,s,o]),ee=(e,n={})=>{var R,I,z,L;const{i18n:s}=n,{i18n:o,defaultNS:c}=i.useContext(V)||{},t=s||o||K();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new Y),!t){E("You will need to pass in an i18next instance by using initReactI18next");const r=(u,d)=>p(d)?d:q(d)&&p(d.defaultValue)?d.defaultValue:Array.isArray(u)?u[u.length-1]:u,l=[r,{},!1];return l.t=r,l.i18n={},l.ready=!1,l}(R=t.options.react)!=null&&R.wait&&E("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...G(),...t.options.react,...n},{useSuspense:w,keyPrefix:b}=f;let a=c||((I=t.options)==null?void 0:I.defaultNS);a=p(a)?[a]:a||["translation"],(L=(z=t.reportNamespaces).addUsedNamespaces)==null||L.call(z,a);const g=(t.isInitialized||t.initializedStoreOnce)&&a.every(r=>U(r,t,f)),j=X(t,n.lng||null,f.nsMode==="fallback"?a:a[0],b),S=()=>j,x=()=>O(t,n.lng||null,f.nsMode==="fallback"?a:a[0],b),[C,h]=i.useState(S);let y=a.join();n.lng&&(y=`${n.lng}${y}`);const T=Q(y),m=i.useRef(!0);i.useEffect(()=>{const{bindI18n:r,bindI18nStore:l}=f;m.current=!0,!g&&!w&&(n.lng?v(t,n.lng,a,()=>{m.current&&h(x)}):M(t,a,()=>{m.current&&h(x)})),g&&T&&T!==y&&m.current&&h(x);const u=()=>{m.current&&h(x)};return r&&(t==null||t.on(r,u)),l&&(t==null||t.store.on(l,u)),()=>{m.current=!1,t&&(r==null||r.split(" ").forEach(d=>t.off(d,u))),l&&t&&l.split(" ").forEach(d=>t.store.off(d,u))}},[t,y]),i.useEffect(()=>{m.current&&g&&h(S)},[t,b,g]);const N=[C,t,g];if(N.t=C,N.i18n=t,N.ready=g,g||!g&&!w)return N;throw new Promise(r=>{n.lng?v(t,n.lng,a,()=>r()):M(t,a,()=>r())})};export{$ as D,ee as u};