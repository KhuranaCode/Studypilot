const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LandingPage-u1W_u7AZ.js","./router-vendor-o0rIDjm7.js","./Tilt3DCard-iBcfyltj.js","./ThreeDButton-BNAxBJ5W.js","./lucide-icons-9T7qvXEP.js","./firebase-vendor-DT3aLt6r.js","./zod-vendor-lT-ZipNl.js","./LoginPage-D2p_t1IH.js","./SignupPage-B6Jxnsm5.js","./DashboardPage-cha3OMvz.js","./StatCard-DvwmOfjo.js","./WeeklyActivityChart-CzfH9pXS.js","./StudyPlanPage-D6zGwIz4.js","./ConfirmationModal-BlFEIx-7.js","./EmptyState-gdfsICJI.js","./TasksPage-BoH80dqP.js","./FocusTimerPage-BfoLOBAh.js","./ProgressPage-NqWqyx_7.js","./SettingsPage-B00Rkjap.js","./AdminPage-C_1j7o7I.js","./PrivacyPage-C6ezQ7hQ.js","./TermsPage-CqgtNEBR.js"])))=>i.map(i=>d[i]);
var Zc=Object.defineProperty;var Jc=(i,e,t)=>e in i?Zc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ei=(i,e,t)=>Jc(i,typeof e!="symbol"?e+"":e,t);import{a as Qc,b as ed,r as ie,u as Ua,N as Zi,R as Fa,L as yi,c as td,d as Fl,O as nd,B as id,e as sd,f as Mt}from"./router-vendor-o0rIDjm7.js";import{G as rd,g as po,i as ad,a as od,b as ld,c as _n,q as Ws,o as Xs,d as qs,e as St,f as cd,s as Ti,u as Ys,h as Oa,T as dd,j as yt,k as ud,l as hd,m as fd,n as pd,p as md,r as gd,t as xd}from"./firebase-vendor-DT3aLt6r.js";import{B as Ii,L as $s,S as Ol,A as _d,a as kl,C as vd,b as Wr,T as ka,c as Bl,d as Ba,e as za,f as Ui,g as zl,h as yd,i as Sd,V as ar,j as Gl,W as bd,k as Hl,l as Vl,P as Md,m as Ed,n as wd,o as Td,M as Ad,p as Cd,q as Rd,r as jl,s as Wl,U as Pd,t as Nd,X as Ks,u as Xl,v as ql,R as Dd,w as Ld,x as Yl,y as Id,z as Ud,D as Fd,I as Od,E as kd}from"./lucide-icons-9T7qvXEP.js";import{o as $l,s as zt,n as Bd,a as os}from"./zod-vendor-lT-ZipNl.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var or={exports:{}},zi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo;function zd(){if(mo)return zi;mo=1;var i=Qc(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function a(o,l,c){var d,m={},u=null,p=null;c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),l.ref!==void 0&&(p=l.ref);for(d in l)n.call(l,d)&&!r.hasOwnProperty(d)&&(m[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)m[d]===void 0&&(m[d]=l[d]);return{$$typeof:e,type:o,key:u,ref:p,props:m,_owner:s.current}}return zi.Fragment=t,zi.jsx=a,zi.jsxs=a,zi}var go;function Gd(){return go||(go=1,or.exports=zd()),or.exports}var g=Gd(),ls={},xo;function Hd(){if(xo)return ls;xo=1;var i=ed();return ls.createRoot=i.createRoot,ls.hydrateRoot=i.hydrateRoot,ls}var Vd=Hd();const jd="modulepreload",Wd=function(i,e){return new URL(i,e).href},_o={},Vt=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(d=>{if(d=Wd(d,n),d in _o)return;_o[d]=!0;const m=d.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(!!n)for(let y=o.length-1;y>=0;y--){const f=o[y];if(f.href===d&&(!m||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${u}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":jd,m||(_.as="script"),_.crossOrigin="",_.href=d,c&&_.setAttribute("nonce",c),document.head.appendChild(_),m)return new Promise((y,f)=>{_.addEventListener("load",y),_.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},vo={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1};var yo={};const kn=i=>{try{if(typeof import.meta<"u"&&vo)return vo[i]||""}catch{}return typeof process<"u"&&yo&&yo[i]||""},Kl={apiKey:kn("VITE_FIREBASE_API_KEY"),authDomain:kn("VITE_FIREBASE_AUTH_DOMAIN"),projectId:kn("VITE_FIREBASE_PROJECT_ID"),storageBucket:kn("VITE_FIREBASE_STORAGE_BUCKET"),messagingSenderId:kn("VITE_FIREBASE_MESSAGING_SENDER_ID"),appId:kn("VITE_FIREBASE_APP_ID"),measurementId:kn("VITE_FIREBASE_MEASUREMENT_ID")},Xd=()=>{const e=["apiKey","authDomain","projectId","appId"].filter(t=>{const n=(Kl[t]||"").trim();return!n||n==="your_api_key_here"||n.startsWith("your_")||n.includes("placeholder")||n.includes("your_project_id")||n.includes("your_firebase")});return{isConfigured:e.length===0,missingKeys:e}},fn=Xd();let lr=null,pt=null,Be=null;const Zl=new rd;Zl.setCustomParameters({prompt:"select_account"});if(fn.isConfigured)try{lr=po().length===0?ad(Kl):po()[0],pt=od(lr),Be=ld(lr)}catch{}function Le(i,e=1e3){if(typeof i!="string")return"";let t=i.replace(/\0/g,"").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/<(?:iframe|object|embed|style|svg)\b[^<]*(?:(?!<\/(?:iframe|object|embed|style|svg)>)<[^<]*)*<\/(?:iframe|object|embed|style|svg)>/gi,"").replace(/on\w+\s*=\s*(?:["'][^"']*["']|[^\s>]+)/gi,"").replace(/(?:javascript|data|vbscript):[^\s"'>]+/gi,"").replace(/<[^>]*>/g,"").trim();return t.length>e&&(t=t.substring(0,e)),t}function ti(i){if(typeof i!="string")return"";const e=i.trim().toLowerCase();return!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(e)||e.length>254?"":e}async function So(i,e="studypilot_secure_salt_v1"){var o;const n=new TextEncoder().encode(`${e}:${i}`),s=(o=globalThis.crypto)==null?void 0:o.subtle;if(s){const l=await s.digest("SHA-256",n);return Array.from(new Uint8Array(l)).map(d=>d.toString(16).padStart(2,"0")).join("")}let r=0;const a=`${e}:${i}`;for(let l=0;l<a.length;l++)r=(r<<5)-r+a.charCodeAt(l),r|=0;return Math.abs(r).toString(16).padStart(64,"0")}const Pt=i=>i?i instanceof dd||typeof i=="object"&&"toDate"in i?i.toDate().toISOString():String(i):new Date().toISOString(),bo=async i=>{if(!Be)return null;const e=St(Be,"users",i),t=await cd(e);if(!t.exists())return null;const n=t.data();return{id:t.id,displayName:Le(n.displayName||"Student",60),email:n.email||"",role:n.role||"student",timezone:n.timezone||"America/New_York (EST, UTC-5)",studyGoal:Le(n.studyGoal||"Dean's List (3.8+ GPA)",120),dailyStudyLimitMinutes:n.dailyStudyLimitMinutes||240,preferredSessionMinutes:n.preferredSessionMinutes||45,breakDurationMinutes:n.breakDurationMinutes||5,longBreakMinutes:n.longBreakMinutes||15,theme:n.theme||"light",soundEnabled:n.soundEnabled!==!1,emailNotifications:n.emailNotifications!==!1,onboardingCompleted:n.onboardingCompleted??!0,createdAt:Pt(n.createdAt),updatedAt:Pt(n.updatedAt)}},cr=async(i,e)=>{if(!Be)throw new Error("Firestore is not initialized");const t=St(Be,"users",i),n={displayName:Le(e.displayName||"Student",60),email:e.email||"",role:e.role||"student",timezone:e.timezone||Intl.DateTimeFormat().resolvedOptions().timeZone||"America/New_York (EST, UTC-5)",studyGoal:Le(e.studyGoal||"Dean's List / Academic Excellence",120),dailyStudyLimitMinutes:e.dailyStudyLimitMinutes||240,preferredSessionMinutes:e.preferredSessionMinutes||45,breakDurationMinutes:e.breakDurationMinutes||5,longBreakMinutes:e.longBreakMinutes||15,theme:e.theme||"light",soundEnabled:e.soundEnabled!==!1,emailNotifications:e.emailNotifications!==!1,onboardingCompleted:e.onboardingCompleted??!1,createdAt:yt(),updatedAt:yt()};return await Ti(t,n,{merge:!0}),{id:i,...n,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}},Mo=async(i,e)=>{if(!Be)return;const t=St(Be,"users",i),n={...e};e.displayName!==void 0&&(n.displayName=Le(e.displayName,60)),e.studyGoal!==void 0&&(n.studyGoal=Le(e.studyGoal,120)),await Ys(t,{...n,updatedAt:yt()})},qd=(i,e,t)=>{if(!Be)return e([]),()=>{};const n=_n(Be,"users",i,"subjects"),s=Ws(n,Xs("createdAt","desc"));return qs(s,r=>{const a=r.docs.map(o=>{const l=o.data();return{id:o.id,name:Le(l.name||"",100),code:Le(l.code||"CRS",20),color:l.color||"#3D52A0",bgLight:l.bgLight||"bg-slate-50",textLight:l.textLight||"text-slate-700",borderColor:l.borderColor||"border-slate-200",difficulty:l.difficulty||"medium",targetHours:Number(l.targetHours)||15,totalHoursStudied:Number(l.totalHoursStudied)||0,createdAt:Pt(l.createdAt),updatedAt:Pt(l.updatedAt)}});e(a)},r=>{})},Eo=async(i,e)=>{if(!Be)throw new Error("Firestore not initialized");const t=_n(Be,"users",i,"subjects"),n=St(t),s={...e,name:Le(e.name,100),code:Le(e.code,20),createdAt:yt(),updatedAt:yt()};return await Ti(n,s),n.id},Yd=async(i,e)=>{if(!Be)return;const t=St(Be,"users",i,"subjects",e.id),n={...e,name:Le(e.name,100),code:Le(e.code,20),updatedAt:yt()};await Ys(t,n)},$d=async(i,e)=>{if(!Be)return;const t=St(Be,"users",i,"subjects",e);await Oa(t)},Kd=(i,e,t)=>{if(!Be)return e([]),()=>{};const n=_n(Be,"users",i,"tasks"),s=Ws(n,Xs("dueDate","asc"));return qs(s,r=>{const a=r.docs.map(o=>{const l=o.data();return{id:o.id,title:Le(l.title||"",150),description:Le(l.description||"",500),subjectId:l.subjectId||"",dueDate:l.dueDate||"",priority:l.priority||"medium",estimatedMinutes:Number(l.estimatedMinutes)||45,completed:!!l.completed,completedAt:l.completedAt?Pt(l.completedAt):void 0,isExam:!!l.isExam,createdAt:Pt(l.createdAt),updatedAt:Pt(l.updatedAt)}});e(a)},r=>{})},Zd=async(i,e)=>{if(!Be)throw new Error("Firestore not initialized");const t=_n(Be,"users",i,"tasks"),n=St(t),s={...e,title:Le(e.title,150),description:e.description?Le(e.description,500):"",createdAt:yt(),updatedAt:yt()};return await Ti(n,s),n.id},wo=async(i,e)=>{if(!Be)return;const t=St(Be,"users",i,"tasks",e.id),n={...e,title:Le(e.title,150),description:e.description?Le(e.description,500):"",updatedAt:yt()};await Ys(t,n)},Jd=async(i,e)=>{if(!Be)return;const t=St(Be,"users",i,"tasks",e);await Oa(t)},Qd=(i,e,t)=>{if(!Be)return e([]),()=>{};const n=_n(Be,"users",i,"studySessions"),s=Ws(n,Xs("date","asc"));return qs(s,r=>{const a=r.docs.map(o=>{const l=o.data();return{id:o.id,title:Le(l.title||"",150),subjectId:l.subjectId||"",taskId:l.taskId||void 0,date:l.date||"",startTime:l.startTime||"10:00",endTime:l.endTime||"11:30",durationMinutes:Number(l.durationMinutes)||60,completed:!!l.completed,notes:l.notes?Le(l.notes,500):void 0,isAiGenerated:!!l.isAiGenerated,planId:l.planId||void 0,startedAt:l.startedAt?Pt(l.startedAt):void 0,endedAt:l.endedAt?Pt(l.endedAt):void 0,createdAt:Pt(l.createdAt),updatedAt:Pt(l.updatedAt)}});e(a)},r=>{t&&t(r)})},To=async(i,e,t)=>{if(!Be)throw new Error("Firestore not initialized");const n=_n(Be,"users",i,"studySessions"),s=t?St(n,t):St(n),r={...e,title:Le(e.title,150),notes:e.notes?Le(e.notes,500):void 0,createdAt:yt(),updatedAt:yt()};return await Ti(s,r),s.id},dr=async(i,e)=>{if(!Be)return;const t=St(Be,"users",i,"studySessions",e.id),n={...e,title:Le(e.title,150),notes:e.notes?Le(e.notes,500):void 0,updatedAt:yt()};await Ys(t,n)},eu=async(i,e)=>{if(!Be)return;const t=St(Be,"users",i,"studySessions",e);await Oa(t)},tu=(i,e,t)=>{if(!Be)return e([]),()=>{};const n=_n(Be,"users",i,"studyPlans"),s=Ws(n,Xs("weekStart","desc"));return qs(s,r=>{const a=r.docs.map(o=>{const l=o.data();return{id:o.id,title:Le(l.title||"Weekly Study Plan",100),weekStart:l.weekStart||"",weekEnd:l.weekEnd||"",status:l.status||"active",summary:Le(l.summary||"",300),assumptions:Array.isArray(l.assumptions)?l.assumptions.map(c=>Le(c,150)):[],warnings:Array.isArray(l.warnings)?l.warnings.map(c=>Le(c,150)):[],dailyTotals:l.dailyTotals||{},sessions:l.sessions||[],unscheduledTasks:l.unscheduledTasks||[],suggestions:Array.isArray(l.suggestions)?l.suggestions.map(c=>Le(c,150)):[],source:l.source||"ai",generatedAt:Pt(l.generatedAt),createdAt:Pt(l.createdAt),updatedAt:Pt(l.updatedAt)}});e(a)},r=>{})},nu=async(i,e,t)=>{if(!Be)throw new Error("Firestore not initialized");const n=_n(Be,"users",i,"studyPlans"),s=t?St(n,t):St(n),r={...e,title:Le(e.title,100),summary:Le(e.summary,300),createdAt:yt(),updatedAt:yt()};if(await Ti(s,r),e.sessions&&e.sessions.length>0){const a=_n(Be,"users",i,"studySessions");for(const o of e.sessions){const l=St(a,o.id);await Ti(l,{...o,title:Le(o.title,150),notes:o.notes?Le(o.notes,500):void 0,planId:s.id,createdAt:yt(),updatedAt:yt()},{merge:!0})}}return s.id},Jl=ie.createContext(void 0),Ao="admin@studypilot.edu",iu=({children:i})=>{const[e,t]=ie.useState(null),[n,s]=ie.useState(null),[r,a]=ie.useState(!0),[o,l]=ie.useState(!1),c=b=>{if(!b)return"An unexpected error occurred.";switch(b.code||""){case"auth/invalid-email":return"Please enter a valid university or personal email address.";case"auth/user-disabled":return"This student account has been disabled. Please contact support.";case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":return"Invalid email or password. Please verify your credentials.";case"auth/email-already-in-use":return"An account already exists with this email address. Please sign in instead.";case"auth/weak-password":return"Password is too weak. Please use at least 8 characters.";case"auth/popup-closed-by-user":return"Google sign-in popup was closed before completing verification.";case"auth/popup-blocked":return"Popups were blocked by your browser. Please allow popups for this site.";case"auth/too-many-requests":return"Too many attempts. Access is temporarily restricted. Please try again later.";case"auth/network-request-failed":return"Network connection issue. Please check your internet connection.";case"auth/api-key-not-valid":case"auth/invalid-api-key":return"Firebase API key in .env is a placeholder or invalid. Please configure your live Firebase credentials in .env, or use Local Sandbox Mode.";default:return b.message||"Authentication error. Please try again."}};ie.useEffect(()=>{if(!pt||!fn.isConfigured){a(!1);return}const b=ud(pt,async P=>{if(t(P),P)try{let A=await bo(P.uid);A||(A=await cr(P.uid,{displayName:Le(P.displayName||"Student"),email:ti(P.email||""),onboardingCompleted:!1})),s(A)}catch{}else s(null);a(!1)});return()=>b()},[]);const d=(b,P,A,T="student",R="Dean's List / Academic Mastery")=>({id:b,displayName:Le(P,60),email:ti(A),role:T,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC",studyGoal:Le(R,120),dailyStudyLimitMinutes:240,preferredSessionMinutes:45,breakDurationMinutes:10,longBreakMinutes:20,theme:"light",soundEnabled:!0,emailNotifications:!1,onboardingCompleted:!0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),m=async(b,P)=>{const A=ti(b);if(!A)throw new Error("Please enter a valid email address.");if(!pt||!fn.isConfigured){await So(P);const T=A.toLowerCase()===Ao.toLowerCase(),R=A.toLowerCase().includes("alex"),W=d(T?"admin-sandbox":"student-sandbox",T?"System Administrator":R?"Alex Chen":A.split("@")[0],A,T?"admin":"student");s(W);return}await xd(pt,A,P)},u=async(b,P,A,T)=>{const R=ti(b),W=Le(A,60),x=Le(T||"Dean's List / High Academic Mastery",120);if(!R)throw new Error("Please enter a valid email address.");if(!W)throw new Error("Please enter your full name.");if(P.length<8)throw new Error("Password must be at least 8 characters long.");if(!pt||!fn.isConfigured){await So(P);const j=d(`student-${Date.now()}`,W,R,"student",x);s(j);return}const E=await md(pt,R,P);await gd(E.user,{displayName:W});const k=await cr(E.user.uid,{displayName:W,email:E.user.email||R,studyGoal:x,onboardingCompleted:!1});s(k)},p=async()=>{if(!pt||!fn.isConfigured){const A=d("student-sandbox-google","Google Student","student.google@university.edu","student");s(A);return}const b=await pd(pt,Zl);let P=await bo(b.user.uid);P||(P=await cr(b.user.uid,{displayName:Le(b.user.displayName||"Student",60),email:ti(b.user.email||""),onboardingCompleted:!0})),s(P)},_=async b=>{const P=ti(b);if(!pt)throw new Error("Firebase Auth not configured");await fd(pt,P)},y=async()=>{pt&&fn.isConfigured&&await hd(pt),t(null),s(null),l(!1)},f=async b=>{if(!e)return;const P={...b,displayName:b.displayName?Le(b.displayName,60):void 0,studyGoal:b.studyGoal?Le(b.studyGoal,120):void 0};await Mo(e.uid,P),s(A=>A?{...A,...P}:null)},h=async b=>{if(!e)return;const P={...b,studyGoal:b.studyGoal?Le(b.studyGoal,120):void 0,onboardingCompleted:!0};await Mo(e.uid,P),s(A=>A?{...A,...P,onboardingCompleted:!0}:null)},w=b=>{},v=!!((n==null?void 0:n.role)==="admin"||e!=null&&e.email&&e.email.toLowerCase()===Ao.toLowerCase());return g.jsx(Jl.Provider,{value:{user:e,userProfile:n,authLoading:r,isAdmin:v,isFirebaseReady:fn.isConfigured,missingConfigKeys:fn.missingKeys,signIn:m,signUp:u,signInWithGoogle:p,sendPasswordReset:_,logout:y,updateProfileDetails:f,completeOnboarding:h,setDemoAdminMode:w,getFriendlyErrorMessage:c},children:i})},yn=()=>{const i=ie.useContext(Jl);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},Co=[{id:"sub-cs",name:"Data Structures & Algorithms",code:"CS 250",color:"#3b82f6",bgLight:"bg-blue-50",textLight:"text-blue-700",borderColor:"border-blue-200",totalHoursStudied:14.5,targetHours:20},{id:"sub-math",name:"Multivariable Calculus",code:"MATH 201",color:"#6366f1",bgLight:"bg-indigo-50",textLight:"text-indigo-700",borderColor:"border-indigo-200",totalHoursStudied:12,targetHours:18},{id:"sub-chem",name:"Organic Chemistry II",code:"CHEM 102",color:"#0d9488",bgLight:"bg-teal-50",textLight:"text-teal-700",borderColor:"border-teal-200",totalHoursStudied:9.5,targetHours:15},{id:"sub-hist",name:"Modern European History",code:"HIST 110",color:"#475569",bgLight:"bg-slate-100",textLight:"text-slate-700",borderColor:"border-slate-300",totalHoursStudied:6,targetHours:10},{id:"sub-psyc",name:"Cognitive Psychology",code:"PSYC 101",color:"#f59e0b",bgLight:"bg-amber-50",textLight:"text-amber-700",borderColor:"border-amber-200",totalHoursStudied:4.5,targetHours:8}],vt=i=>{const e=new Date;return e.setDate(e.getDate()+i),e.toISOString().split("T")[0]},su=[{id:"task-1",title:"Implement Dijkstra & Bellman-Ford Shortest Path",description:"Complete programming assignment #3 in Python, including edge case unit tests and runtime analysis write-up.",subjectId:"sub-cs",dueDate:vt(1),priority:"high",estimatedMinutes:90,completed:!1},{id:"task-2",title:"Green's & Stokes' Theorem Problem Set",description:"Work through textbook problems 14.7 #1-18 odd, focusing on surface integrals over oriented manifolds.",subjectId:"sub-math",dueDate:vt(0),priority:"high",estimatedMinutes:60,completed:!1},{id:"task-3",title:"Organic Synthesis Reaction Mechanisms Flashcards",description:"Review Aldol condensations, Claisen reactions, and Grignard reagents for upcoming lab practical.",subjectId:"sub-chem",dueDate:vt(0),priority:"medium",estimatedMinutes:45,completed:!0,completedAt:new Date().toISOString()},{id:"task-4",title:"Midterm Exam: Industrial Revolution & Statecraft",description:"Cumulative closed-book exam covering Chapters 6-11 and primary source essays on 19th-century geopolitics.",subjectId:"sub-hist",dueDate:vt(3),priority:"high",estimatedMinutes:120,completed:!1,isExam:!0},{id:"task-5",title:"Memory Consolidation Literature Review Draft",description:"Submit 4-page research abstract comparing synaptic vs systems consolidation in long-term potentiation.",subjectId:"sub-psyc",dueDate:vt(4),priority:"medium",estimatedMinutes:75,completed:!1},{id:"task-6",title:"Red-Black Tree Insertion & Rotation Quiz Prep",description:"Self-test on tree rebalancing cases after node insertion.",subjectId:"sub-cs",dueDate:vt(2),priority:"medium",estimatedMinutes:50,completed:!1},{id:"task-7",title:"Spectroscopy Lab Pre-Lab Questions",description:"Complete NMR spectrum interpretation worksheets before Tuesday 8 AM lab.",subjectId:"sub-chem",dueDate:vt(-1),priority:"high",estimatedMinutes:30,completed:!1},{id:"task-8",title:"Calculus Quiz 4: Vector Fields & Divergence",description:"Reviewed practice test solutions and formulas.",subjectId:"sub-math",dueDate:vt(-2),priority:"medium",estimatedMinutes:60,completed:!0,completedAt:new Date(Date.now()-864e5).toISOString()}],ru=[{id:"sess-1",title:"Green's Theorem Drills & Vectors",subjectId:"sub-math",date:vt(0),startTime:"09:00",endTime:"10:30",durationMinutes:90,completed:!0,notes:"Covered parameterizations and double integrals cleanly.",isAiGenerated:!0},{id:"sess-2",title:"Graph Algorithms & Shortest Path Coding",subjectId:"sub-cs",date:vt(0),startTime:"13:00",endTime:"14:30",durationMinutes:90,completed:!1,notes:"Focus on min-heap priority queue implementation.",isAiGenerated:!0},{id:"sess-3",title:"Organic Reaction Mechanism Drills",subjectId:"sub-chem",date:vt(0),startTime:"16:00",endTime:"17:00",durationMinutes:60,completed:!1,notes:"Enolate chemistry and alpha-substitution.",isAiGenerated:!1},{id:"sess-4",title:"Calculus Surface Integrals Review",subjectId:"sub-math",date:vt(1),startTime:"10:00",endTime:"11:30",durationMinutes:90,completed:!1,isAiGenerated:!0},{id:"sess-5",title:"Industrial Revolution Primary Sources",subjectId:"sub-hist",date:vt(1),startTime:"14:00",endTime:"15:30",durationMinutes:90,completed:!1,notes:"Annotate British parliamentary committee testimonies.",isAiGenerated:!0},{id:"sess-6",title:"Dynamic Programming & Memoization",subjectId:"sub-cs",date:vt(2),startTime:"09:30",endTime:"11:00",durationMinutes:90,completed:!1,isAiGenerated:!0},{id:"sess-7",title:"Cognitive Biases & Heuristics Study",subjectId:"sub-psyc",date:vt(2),startTime:"15:00",endTime:"16:15",durationMinutes:75,completed:!1,isAiGenerated:!1},{id:"sess-8",title:"History Midterm Practice Essay",subjectId:"sub-hist",date:vt(3),startTime:"10:00",endTime:"12:00",durationMinutes:120,completed:!1,isAiGenerated:!0}],Qt={name:"Alex Chen",email:"alex.chen@university.edu",targetExamOrGoal:"Fall Semester Dean's List (3.9+ GPA)",dailyGoalHours:4,weeklyGoalHours:25,preferredFocusMinutes:45,breakDurationMinutes:5,longBreakMinutes:15,timezone:"America/New_York (EST, UTC-5)",theme:"light"},au=[{day:"Mon",fullDate:"Oct 05",hours:4.5,tasksCompleted:5,focusSessions:4},{day:"Tue",fullDate:"Oct 06",hours:3.8,tasksCompleted:4,focusSessions:3},{day:"Wed",fullDate:"Oct 07",hours:5.2,tasksCompleted:6,focusSessions:5},{day:"Thu",fullDate:"Oct 08",hours:4,tasksCompleted:4,focusSessions:4},{day:"Fri",fullDate:"Oct 09",hours:3.5,tasksCompleted:3,focusSessions:3},{day:"Sat",fullDate:"Oct 10",hours:2.5,tasksCompleted:2,focusSessions:2},{day:"Sun",fullDate:"Oct 11",hours:4,tasksCompleted:4,focusSessions:4}],ou=[{id:"notif-1",title:"Upcoming Deadline Today",message:"Green's & Stokes' Theorem Problem Set is due tonight at 11:59 PM.",time:"20 min ago",read:!1,type:"deadline"},{id:"notif-2",title:"AI Study Plan Synced",message:"Your weekly schedule was optimized based on your upcoming History midterm.",time:"2 hours ago",read:!1,type:"ai"},{id:"notif-3",title:"Study Streak Milestone",message:"Congratulations! You achieved a 7-day consistent study streak.",time:"Yesterday",read:!0,type:"achievement"},{id:"notif-4",title:"Next Focus Session",message:"Data Structures & Algorithms coding block starts at 1:00 PM.",time:"Yesterday",read:!0,type:"session"}],Ql=ie.createContext(void 0),lu=({children:i})=>{const{user:e,userProfile:t,isFirebaseReady:n,updateProfileDetails:s}=yn(),[r,a]=ie.useState(Co),[o,l]=ie.useState(su),[c,d]=ie.useState(ru),[m,u]=ie.useState([]),[p,_]=ie.useState(!1),[y,f]=ie.useState([]),[h,w]=ie.useState(null),v=ie.useRef(!1),b={name:(t==null?void 0:t.displayName)||(e==null?void 0:e.displayName)||Qt.name,email:(t==null?void 0:t.email)||(e==null?void 0:e.email)||Qt.email,targetExamOrGoal:(t==null?void 0:t.studyGoal)||Qt.targetExamOrGoal,dailyGoalHours:t!=null&&t.dailyStudyLimitMinutes?t.dailyStudyLimitMinutes/60:Qt.dailyGoalHours,weeklyGoalHours:Qt.weeklyGoalHours,preferredFocusMinutes:(t==null?void 0:t.preferredSessionMinutes)||Qt.preferredFocusMinutes,breakDurationMinutes:(t==null?void 0:t.breakDurationMinutes)||Qt.breakDurationMinutes,longBreakMinutes:(t==null?void 0:t.longBreakMinutes)||Qt.longBreakMinutes,timezone:(t==null?void 0:t.timezone)||Qt.timezone,theme:(t==null?void 0:t.theme)||Qt.theme,soundEnabled:(t==null?void 0:t.soundEnabled)!==!1,emailNotifications:(t==null?void 0:t.emailNotifications)!==!1},[P,A]=ie.useState(ou),[T]=ie.useState(au);ie.useEffect(()=>{const L=new Date().toISOString().split("T")[0],Y=[];o.filter(de=>!de.completed&&de.dueDate<L).slice(0,3).forEach(de=>{Y.push({id:`notif-overdue-${de.id}`,title:`Overdue: ${de.title}`,message:`Deadline was ${de.dueDate}. Prioritize this milestone today.`,type:"deadline",time:"Urgent",read:!1})}),o.filter(de=>!de.completed&&de.dueDate===L).slice(0,2).forEach(de=>{Y.push({id:`notif-today-${de.id}`,title:`Due Today: ${de.title}`,message:`Estimated focus: ${de.estimatedMinutes} mins needed.`,type:"deadline",time:"Today",read:!1})}),o.filter(de=>!de.completed&&de.isExam).slice(0,2).forEach(de=>{Y.push({id:`notif-exam-${de.id}`,title:`Exam Milestone: ${de.title}`,message:`Scheduled on ${de.dueDate}. Keep spaced revision active.`,type:"achievement",time:de.dueDate,read:!1})}),Y.length>0&&A(Y)},[o,c]),ie.useEffect(()=>{if(!n||!e)return;_(!0);const L=qd(e.uid,async Se=>{if(Se.length===0)for(const de of Co)await Eo(e.uid,{name:de.name,code:de.code,color:de.color,bgLight:de.bgLight,textLight:de.textLight,borderColor:de.borderColor,difficulty:"medium",targetHours:de.targetHours,totalHoursStudied:0});else a(Se)}),Y=Kd(e.uid,Se=>{l(Se)}),te=Qd(e.uid,Se=>{d(Se),_(!1)},Se=>{_(!1)}),ge=tu(e.uid,Se=>{u(Se)});return()=>{L(),Y(),te(),ge()}},[e,n]);const R=(L,Y,te="info")=>{const ge=`toast-${Date.now()}-${Math.random().toString(36).substring(2,7)}`;f(Se=>[...Se,{id:ge,title:L,description:Y,type:te}]),setTimeout(()=>{f(Se=>Se.filter(de=>de.id!==ge))},4500)},W=L=>{f(Y=>Y.filter(te=>te.id!==L))},x=async L=>{if(n&&e)await Eo(e.uid,{...L,totalHoursStudied:0});else{const Y={...L,id:`sub-${Date.now()}`,totalHoursStudied:0};a(te=>[...te,Y])}R("Course Added",`${L.code} · ${L.name} was added.`,"success")},E=async L=>{n&&e?await Yd(e.uid,L):a(Y=>Y.map(te=>te.id===L.id?L:te)),R("Course Updated",`${L.code} updated.`,"info")},k=async L=>{n&&e?await $d(e.uid,L):a(Y=>Y.filter(te=>te.id!==L)),R("Course Removed","The course subject was removed.","info")},j=async L=>{if(n&&e)await Zd(e.uid,L);else{const Y={...L,id:`task-${Date.now()}`};l(te=>[Y,...te])}R("Task added successfully",`"${L.title}" was scheduled.`,"success")},X=async L=>{n&&e?await wo(e.uid,L):l(Y=>Y.map(te=>te.id===L.id?L:te)),R("Task updated",`"${L.title}" has been saved.`,"info")},K=async L=>{const Y=o.find(te=>te.id===L);n&&e?await Jd(e.uid,L):l(te=>te.filter(ge=>ge.id!==L)),R("Task deleted",Y?`"${Y.title}" was removed.`:void 0,"info")},V=async L=>{const Y=o.find(Se=>Se.id===L);if(!Y)return;const te=!Y.completed,ge={...Y,completed:te,completedAt:te?new Date().toISOString():void 0};n&&e?await wo(e.uid,ge):l(Se=>Se.map(de=>de.id===L?ge:de))},ee=async L=>{if(n&&e)await To(e.uid,L);else{const Y={...L,id:`sess-${Date.now()}`};d(te=>[...te,Y])}R("Study session scheduled",`${L.title} on ${L.date}`,"success")},B=async L=>{n&&e?await dr(e.uid,L):d(Y=>Y.map(te=>te.id===L.id?L:te)),R("Session updated",`${L.title} saved.`,"info")},se=async L=>{n&&e?await eu(e.uid,L):d(Y=>Y.filter(te=>te.id!==L)),R("Session removed","The session has been deleted from your plan.","info")},oe=async L=>{const Y=c.find(ge=>ge.id===L);if(!Y)return;const te={...Y,completed:!Y.completed};n&&e?await dr(e.uid,te):d(ge=>ge.map(Se=>Se.id===L?te:Se))},ce=async L=>{if(!v.current){v.current=!0;try{const Y=new Date().toISOString().split("T")[0],te=r.find(de=>de.id===L.subjectId),ge=te?`${te.code} Focus Session`:"Deep Work Session";if(L.sessionId){const de=c.find(Ue=>Ue.id===L.sessionId);if(de){const Ue={...de,completed:!0,durationMinutes:L.durationMinutes,notes:L.notes||de.notes};n&&e?await dr(e.uid,Ue):d(N=>N.map(gt=>gt.id===L.sessionId?Ue:gt)),R("Scheduled Block Completed!",`Marked "${de.title}" complete (+${L.durationMinutes}m).`,"success");return}}const Se={title:ge,subjectId:L.subjectId,taskId:L.taskId,date:Y,startTime:L.startedAt.substring(11,16)||"14:00",endTime:L.endedAt.substring(11,16)||"14:45",durationMinutes:L.durationMinutes,completed:!0,startedAt:L.startedAt,endedAt:L.endedAt,notes:L.notes||"Timer focus session completed successfully.",isAiGenerated:!1};if(n&&e)await To(e.uid,Se);else{const de={...Se,id:`sess-focus-${Date.now()}`};d(Ue=>[...Ue,de])}R("Focus Session Recorded!",`Logged ${L.durationMinutes} mins towards ${(te==null?void 0:te.code)||"course"}.`,"success")}catch{R("Error saving session","Please try again.","error")}finally{setTimeout(()=>{v.current=!1},1e3)}}},ke=async L=>{if(n&&e){const Y=await nu(e.uid,{...L,status:"active"});return R("Study Plan Saved","Your weekly plan is active in Firestore.","success"),Y}else{const Y=`plan-${Date.now()}`;return u(te=>[{...L,id:Y,status:"active"},...te]),d(te=>[...te.filter(Se=>Se.completed),...L.sessions]),R("Plan Activated","The generated plan is active in your study calendar.","success"),Y}},ze=async L=>{n&&e&&await s({displayName:L.name,studyGoal:L.targetExamOrGoal,dailyStudyLimitMinutes:L.dailyGoalHours?L.dailyGoalHours*60:void 0,preferredSessionMinutes:L.preferredFocusMinutes,timezone:L.timezone,theme:L.theme,soundEnabled:L.soundEnabled,emailNotifications:L.emailNotifications}),R("Preferences updated","Your settings have been saved.","success")},$=L=>{A(Y=>Y.map(te=>te.id===L?{...te,read:!0}:te))},O=()=>{A(L=>L.map(Y=>({...Y,read:!0}))),R("Notifications cleared","All notifications marked as read.","info")};return g.jsx(Ql.Provider,{value:{subjects:r,tasks:o,sessions:c,savedPlans:m,preferences:b,activityData:T,notifications:P,toasts:y,dataLoading:p,showToast:R,dismissToast:W,addSubject:x,updateSubject:E,deleteSubject:k,addTask:j,updateTask:X,deleteTask:K,toggleTask:V,addSession:ee,updateSession:B,deleteSession:se,toggleSession:oe,recordCompletedTimerSession:ce,saveGeneratedPlan:ke,updatePreferences:ze,markNotificationRead:$,markAllNotificationsRead:O,activeFocusSession:h,setActiveFocusSession:w},children:i})},Un=()=>{const i=ie.useContext(Ql);if(!i)throw new Error("useApp must be used within an AppProvider");return i},ec=ie.createContext(void 0),Ro="studypilot_theme_preference",cu=({children:i})=>{const[e,t]=ie.useState(()=>{try{const r=localStorage.getItem(Ro);if(r==="dark"||r==="light")return r}catch{}return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,"dark"});ie.useEffect(()=>{const r=document.documentElement;e==="dark"?(r.classList.add("dark"),r.classList.remove("light")):(r.classList.remove("dark"),r.classList.add("light"));try{localStorage.setItem(Ro,e)}catch{}},[e]);const n=()=>{t(r=>r==="dark"?"light":"dark")},s=r=>{t(r)};return g.jsx(ec.Provider,{value:{theme:e,isDark:e==="dark",toggleTheme:n,setTheme:s},children:i})},du=()=>{const i=ie.useContext(ec);if(!i)throw new Error("useTheme must be used within a ThemeProvider");return i},uu=({children:i})=>{const{user:e,userProfile:t,authLoading:n}=yn(),s=Ua();return n?g.jsxs("div",{className:"min-h-screen w-screen flex flex-col items-center justify-center bg-pilot-pale text-slate-800",children:[g.jsx("div",{className:"w-12 h-12 rounded-xl bg-pilot-deep flex items-center justify-center text-white shadow-md mb-4 animate-pulse",children:g.jsx(Ii,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-600",children:[g.jsx($s,{className:"w-4 h-4 animate-spin text-pilot-deep"}),g.jsx("span",{children:"Verifying StudyPilot session..."})]})]}):!(e||t)?g.jsx(Zi,{to:"/login",state:{from:s},replace:!0}):g.jsx(g.Fragment,{children:i})},Po=({children:i})=>{const{user:e,userProfile:t,authLoading:n}=yn();return n?g.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50",children:g.jsx("div",{className:"w-8 h-8 rounded-lg border-2 border-pilot-deep border-t-transparent animate-spin"})}):e||t?g.jsx(Zi,{to:"/dashboard",replace:!0}):g.jsx(g.Fragment,{children:i})};function tc(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var s=i.length;for(e=0;e<s;e++)i[e]&&(t=tc(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function hu(){for(var i,e,t=0,n="",s=arguments.length;t<s;t++)(i=arguments[t])&&(e=tc(i))&&(n&&(n+=" "),n+=e);return n}const Ga="-",fu=i=>{const e=mu(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=i;return{getClassGroupId:a=>{const o=a.split(Ga);return o[0]===""&&o.length!==1&&o.shift(),nc(o,e)||pu(a)},getConflictingClassGroupIds:(a,o)=>{const l=t[a]||[];return o&&n[a]?[...l,...n[a]]:l}}},nc=(i,e)=>{var a;if(i.length===0)return e.classGroupId;const t=i[0],n=e.nextPart.get(t),s=n?nc(i.slice(1),n):void 0;if(s)return s;if(e.validators.length===0)return;const r=i.join(Ga);return(a=e.validators.find(({validator:o})=>o(r)))==null?void 0:a.classGroupId},No=/^\[(.+)\]$/,pu=i=>{if(No.test(i)){const e=No.exec(i)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},mu=i=>{const{theme:e,prefix:t}=i,n={nextPart:new Map,validators:[]};return xu(Object.entries(i.classGroups),t).forEach(([r,a])=>{Xr(a,n,r,e)}),n},Xr=(i,e,t,n)=>{i.forEach(s=>{if(typeof s=="string"){const r=s===""?e:Do(e,s);r.classGroupId=t;return}if(typeof s=="function"){if(gu(s)){Xr(s(n),e,t,n);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([r,a])=>{Xr(a,Do(e,r),t,n)})})},Do=(i,e)=>{let t=i;return e.split(Ga).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t},gu=i=>i.isThemeGetter,xu=(i,e)=>e?i.map(([t,n])=>{const s=n.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([a,o])=>[e+a,o])):r);return[t,s]}):i,_u=i=>{if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;const s=(r,a)=>{t.set(r,a),e++,e>i&&(e=0,n=t,t=new Map)};return{get(r){let a=t.get(r);if(a!==void 0)return a;if((a=n.get(r))!==void 0)return s(r,a),a},set(r,a){t.has(r)?t.set(r,a):s(r,a)}}},ic="!",vu=i=>{const{separator:e,experimentalParseClassName:t}=i,n=e.length===1,s=e[0],r=e.length,a=o=>{const l=[];let c=0,d=0,m;for(let f=0;f<o.length;f++){let h=o[f];if(c===0){if(h===s&&(n||o.slice(f,f+r)===e)){l.push(o.slice(d,f)),d=f+r;continue}if(h==="/"){m=f;continue}}h==="["?c++:h==="]"&&c--}const u=l.length===0?o:o.substring(d),p=u.startsWith(ic),_=p?u.substring(1):u,y=m&&m>d?m-d:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:_,maybePostfixModifierPosition:y}};return t?o=>t({className:o,parseClassName:a}):a},yu=i=>{if(i.length<=1)return i;const e=[];let t=[];return i.forEach(n=>{n[0]==="["?(e.push(...t.sort(),n),t=[]):t.push(n)}),e.push(...t.sort()),e},Su=i=>({cache:_u(i.cacheSize),parseClassName:vu(i),...fu(i)}),bu=/\s+/,Mu=(i,e)=>{const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:s}=e,r=[],a=i.trim().split(bu);let o="";for(let l=a.length-1;l>=0;l-=1){const c=a[l],{modifiers:d,hasImportantModifier:m,baseClassName:u,maybePostfixModifierPosition:p}=t(c);let _=!!p,y=n(_?u.substring(0,p):u);if(!y){if(!_){o=c+(o.length>0?" "+o:o);continue}if(y=n(u),!y){o=c+(o.length>0?" "+o:o);continue}_=!1}const f=yu(d).join(":"),h=m?f+ic:f,w=h+y;if(r.includes(w))continue;r.push(w);const v=s(y,_);for(let b=0;b<v.length;++b){const P=v[b];r.push(h+P)}o=c+(o.length>0?" "+o:o)}return o};function Eu(){let i=0,e,t,n="";for(;i<arguments.length;)(e=arguments[i++])&&(t=sc(e))&&(n&&(n+=" "),n+=t);return n}const sc=i=>{if(typeof i=="string")return i;let e,t="";for(let n=0;n<i.length;n++)i[n]&&(e=sc(i[n]))&&(t&&(t+=" "),t+=e);return t};function wu(i,...e){let t,n,s,r=a;function a(l){const c=e.reduce((d,m)=>m(d),i());return t=Su(c),n=t.cache.get,s=t.cache.set,r=o,o(l)}function o(l){const c=n(l);if(c)return c;const d=Mu(l,t);return s(l,d),d}return function(){return r(Eu.apply(null,arguments))}}const it=i=>{const e=t=>t[i]||[];return e.isThemeGetter=!0,e},rc=/^\[(?:([a-z-]+):)?(.+)\]$/i,Tu=/^\d+\/\d+$/,Au=new Set(["px","full","screen"]),Cu=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ru=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Pu=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Nu=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Du=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,an=i=>Si(i)||Au.has(i)||Tu.test(i),bn=i=>Fi(i,"length",zu),Si=i=>!!i&&!Number.isNaN(Number(i)),ur=i=>Fi(i,"number",Si),Gi=i=>!!i&&Number.isInteger(Number(i)),Lu=i=>i.endsWith("%")&&Si(i.slice(0,-1)),Ie=i=>rc.test(i),Mn=i=>Cu.test(i),Iu=new Set(["length","size","percentage"]),Uu=i=>Fi(i,Iu,ac),Fu=i=>Fi(i,"position",ac),Ou=new Set(["image","url"]),ku=i=>Fi(i,Ou,Hu),Bu=i=>Fi(i,"",Gu),Hi=()=>!0,Fi=(i,e,t)=>{const n=rc.exec(i);return n?n[1]?typeof e=="string"?n[1]===e:e.has(n[1]):t(n[2]):!1},zu=i=>Ru.test(i)&&!Pu.test(i),ac=()=>!1,Gu=i=>Nu.test(i),Hu=i=>Du.test(i),Vu=()=>{const i=it("colors"),e=it("spacing"),t=it("blur"),n=it("brightness"),s=it("borderColor"),r=it("borderRadius"),a=it("borderSpacing"),o=it("borderWidth"),l=it("contrast"),c=it("grayscale"),d=it("hueRotate"),m=it("invert"),u=it("gap"),p=it("gradientColorStops"),_=it("gradientColorStopPositions"),y=it("inset"),f=it("margin"),h=it("opacity"),w=it("padding"),v=it("saturate"),b=it("scale"),P=it("sepia"),A=it("skew"),T=it("space"),R=it("translate"),W=()=>["auto","contain","none"],x=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto",Ie,e],k=()=>[Ie,e],j=()=>["",an,bn],X=()=>["auto",Si,Ie],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],se=()=>["","0",Ie],oe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ce=()=>[Si,Ie];return{cacheSize:500,separator:":",theme:{colors:[Hi],spacing:[an,bn],blur:["none","",Mn,Ie],brightness:ce(),borderColor:[i],borderRadius:["none","","full",Mn,Ie],borderSpacing:k(),borderWidth:j(),contrast:ce(),grayscale:se(),hueRotate:ce(),invert:se(),gap:k(),gradientColorStops:[i],gradientColorStopPositions:[Lu,bn],inset:E(),margin:E(),opacity:ce(),padding:k(),saturate:ce(),scale:ce(),sepia:se(),skew:ce(),space:k(),translate:k()},classGroups:{aspect:[{aspect:["auto","square","video",Ie]}],container:["container"],columns:[{columns:[Mn]}],"break-after":[{"break-after":oe()}],"break-before":[{"break-before":oe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),Ie]}],overflow:[{overflow:x()}],"overflow-x":[{"overflow-x":x()}],"overflow-y":[{"overflow-y":x()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Gi,Ie]}],basis:[{basis:E()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ie]}],grow:[{grow:se()}],shrink:[{shrink:se()}],order:[{order:["first","last","none",Gi,Ie]}],"grid-cols":[{"grid-cols":[Hi]}],"col-start-end":[{col:["auto",{span:["full",Gi,Ie]},Ie]}],"col-start":[{"col-start":X()}],"col-end":[{"col-end":X()}],"grid-rows":[{"grid-rows":[Hi]}],"row-start-end":[{row:["auto",{span:[Gi,Ie]},Ie]}],"row-start":[{"row-start":X()}],"row-end":[{"row-end":X()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ie]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ie]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ie,e]}],"min-w":[{"min-w":[Ie,e,"min","max","fit"]}],"max-w":[{"max-w":[Ie,e,"none","full","min","max","fit","prose",{screen:[Mn]},Mn]}],h:[{h:[Ie,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ie,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ie,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ie,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Mn,bn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ur]}],"font-family":[{font:[Hi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ie]}],"line-clamp":[{"line-clamp":["none",Si,ur]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",an,Ie]}],"list-image":[{"list-image":["none",Ie]}],"list-style-type":[{list:["none","disc","decimal",Ie]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",an,bn]}],"underline-offset":[{"underline-offset":["auto",an,Ie]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ie]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ie]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),Fu]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Uu]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ku]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:V()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[an,Ie]}],"outline-w":[{outline:[an,bn]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:j()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[an,bn]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",Mn,Bu]}],"shadow-color":[{shadow:[Hi]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...ee(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Mn,Ie]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[m]}],saturate:[{saturate:[v]}],sepia:[{sepia:[P]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ie]}],duration:[{duration:ce()}],ease:[{ease:["linear","in","out","in-out",Ie]}],delay:[{delay:ce()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ie]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[Gi,Ie]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ie]}],accent:[{accent:["auto",i]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ie]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ie]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[an,bn,ur]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ju=wu(Vu);function Ht(...i){return ju(hu(i))}const wt=Fa.forwardRef(({className:i,variant:e="primary",size:t="md",isLoading:n=!1,leftIcon:s,rightIcon:r,children:a,disabled:o,...l},c)=>{const d="inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-xl active:scale-[0.98]",m={primary:"bg-pilot-deep hover:bg-[#34468B] text-white shadow-3d-btn active:shadow-3d-btn-active active:translate-y-[2px] focus-visible:ring-[#7091E6]",electric:"bg-pilot-periwinkle hover:bg-[#5D80DE] text-white shadow-3d-electric active:translate-y-[2px] focus-visible:ring-[#3D52A0]",secondary:"bg-pilot-pale hover:bg-[#E3DCF2] text-pilot-deep border border-pilot-soft/70 shadow-3d-secondary active:translate-y-[1.5px] focus-visible:ring-[#7091E6] dark:bg-[#202226] dark:text-pilot-soft dark:border-slate-700 dark:hover:bg-[#2C3038]",outline:"border border-pilot-soft bg-white hover:bg-pilot-pale/60 text-pilot-deep shadow-3d-secondary active:translate-y-[1.5px] focus-visible:ring-[#7091E6] dark:bg-[#1A1D24] dark:border-slate-700 dark:text-pilot-soft dark:hover:bg-[#252830]",ghost:"bg-transparent hover:bg-pilot-pale/80 active:bg-pilot-soft/30 text-pilot-deep focus-visible:ring-[#7091E6] dark:text-slate-300 dark:hover:bg-slate-800/60",danger:"bg-rose-600 hover:bg-rose-700 text-white shadow-[0_3px_0_0_#9F1239] active:translate-y-[2px] active:shadow-[0_1px_0_0_#9F1239] focus-visible:ring-rose-500"},u={sm:"text-xs px-3 py-1.5 gap-1.5",md:"text-sm px-4 py-2 gap-2",lg:"text-base px-6 py-2.5 gap-2.5"};return g.jsxs("button",{ref:c,disabled:o||n,className:Ht(d,m[e],u[t],i),...l,children:[n&&g.jsx($s,{className:"w-4 h-4 animate-spin"}),!n&&s,g.jsx("span",{children:a}),!n&&r]})});wt.displayName="Button";const Wu=({children:i})=>{const{user:e,userProfile:t,isAdmin:n,authLoading:s}=yn(),r=Ua();return s?g.jsxs("div",{className:"min-h-screen w-screen flex flex-col items-center justify-center bg-pilot-pale text-pilot-dark",children:[g.jsx("div",{className:"w-12 h-12 rounded-xl bg-pilot-deep flex items-center justify-center text-white shadow-md mb-4 animate-pulse",children:g.jsx(Ii,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-600",children:[g.jsx($s,{className:"w-4 h-4 animate-spin text-pilot-deep"}),g.jsx("span",{children:"Verifying administrator privileges..."})]})]}):!(e||t)?g.jsx(Zi,{to:"/login",state:{from:r},replace:!0}):n?g.jsx(g.Fragment,{children:i}):g.jsx("div",{className:"min-h-screen w-screen flex flex-col items-center justify-center bg-pilot-pale p-4 text-center",children:g.jsxs("div",{className:"max-w-md w-full bg-white rounded-2xl p-8 border border-pilot-soft shadow-elevated space-y-4",children:[g.jsx("div",{className:"w-14 h-14 mx-auto rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600",children:g.jsx(Ol,{className:"w-7 h-7"})}),g.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"Restricted Administrator Area"}),g.jsx("p",{className:"text-xs text-slate-600 leading-relaxed",children:"Your current account does not have administrator privileges. Only provisioned system administrators can access this portal."}),g.jsxs("div",{className:"p-3 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1 text-slate-600",children:[g.jsx("p",{className:"font-semibold text-slate-800",children:"Admin Setup Requirement:"}),g.jsx("p",{children:"To provision the first admin account, run:"}),g.jsx("code",{className:"block bg-slate-100 p-1.5 rounded-sm font-mono text-[11px] text-slate-800 overflow-x-auto",children:"ADMIN_BOOTSTRAP_SECRET=<secret> npx tsx scripts/bootstrapAdmin.ts"})]}),g.jsx("div",{className:"pt-2",children:g.jsx(yi,{to:"/dashboard",children:g.jsx(wt,{variant:"primary",size:"md",className:"w-full",leftIcon:g.jsx(_d,{className:"w-4 h-4"}),children:"Return to Student Dashboard"})})})]})})},Ai=i=>{const e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`},Ha=(i=new Date)=>Ai(i),oc=(i=new Date)=>{const e=new Date(i),t=e.getDay(),n=e.getDate()-t+(t===0?-6:1);return e.setDate(n),e.setHours(0,0,0,0),e},V0=(i,e=Ha())=>i.filter(t=>t.completed&&t.date===e).reduce((t,n)=>t+(Number(n.durationMinutes)||0)/60,0),Xu=(i,e=new Date)=>{const t=oc(e),n=Ai(t),s=new Date(t);s.setDate(t.getDate()+6);const r=Ai(s);return i.filter(a=>a.completed&&a.date>=n&&a.date<=r).reduce((a,o)=>a+(Number(o.durationMinutes)||0)/60,0)},j0=(i,e=Ha())=>{const t=new Set(i.filter(l=>l.completed).map(l=>l.date));if(t.size===0)return 0;let n=0;const[s,r,a]=e.split("-").map(Number),o=new Date(s,r-1,a,12,0,0);for(t.has(e)||o.setDate(o.getDate()-1);;){const l=Ai(o);if(t.has(l))n+=1,o.setDate(o.getDate()-1);else break}return n},W0=(i,e=new Date)=>{const t=e.toISOString().split("T")[0],n=`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`;return i.filter(r=>!r.completed).filter(r=>r.date>t||r.date===t&&r.endTime>=n).sort((r,a)=>r.date!==a.date?r.date.localeCompare(a.date):r.startTime.localeCompare(a.startTime))[0]||null},X0=(i,e=[],t=new Date)=>{const n=oc(t),s=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],r=[];for(let a=0;a<7;a++){const o=new Date(n);o.setDate(n.getDate()+a);const l=Ai(o),c=i.filter(u=>u.completed&&u.date===l).reduce((u,p)=>u+(Number(p.durationMinutes)||0)/60,0),d=i.filter(u=>u.completed&&u.date===l).length,m=e.filter(u=>u.completed?(u.completedAt?u.completedAt.split("T")[0]:u.dueDate)===l:!1).length;r.push({day:s[a],fullDate:l,hours:Number(c.toFixed(1)),tasksCompleted:m,focusSessions:d})}return r},q0=(i,e)=>{const t={};for(const n of e)n.completed&&n.subjectId&&(t[n.subjectId]=(t[n.subjectId]||0)+(Number(n.durationMinutes)||0)/60);return i.map(n=>{const s=Number((t[n.id]||n.totalHoursStudied||0).toFixed(1)),r=n.targetHours||15,a=Math.min(100,Math.round(s/r*100));return{...n,actualHoursStudied:s,progressPercent:a}})},Y0=(i,e=Ha())=>{const t=i.filter(p=>!p.completed),n=i.filter(p=>p.completed),s=t.filter(p=>p.dueDate===e),r=t.filter(p=>p.dueDate<e),[a,o,l]=e.split("-").map(Number),c=new Date(a,o-1,l+2,12,0,0),d=Ai(c),m=t.filter(p=>p.dueDate>=e&&p.dueDate<=d),u=t.filter(p=>p.priority==="high");return{total:i.length,pendingCount:t.length,completedCount:n.length,dueTodayCount:s.length,overdueCount:r.length,dueWithin48hCount:m.length,highPriorityCount:u.length}},lc=({onNavigate:i})=>{const{preferences:e,tasks:t,sessions:n}=Un(),{isAdmin:s}=yn(),r=t.filter(d=>!d.completed).length,a=e.weeklyGoalHours||25,o=Xu(n),l=Math.min(100,Math.round(o/a*100)),c=[{label:"Dashboard",path:"/dashboard",icon:kl},{label:"Study Plan",path:"/study-plan",icon:vd},{label:"Tasks",path:"/tasks",icon:Wr,badge:r>0?r:void 0},{label:"Focus Timer",path:"/focus",icon:ka},{label:"Progress",path:"/progress",icon:Bl},{label:"Settings",path:"/settings",icon:Ba},...s?[{label:"Admin Console",path:"/admin",icon:za}]:[]];return g.jsxs("aside",{className:"w-64 h-full bg-white dark:bg-[#18191D] border-r border-pilot-soft/50 dark:border-[#202226] flex flex-col justify-between shrink-0 select-none transition-colors",children:[g.jsxs("div",{className:"flex flex-col",children:[g.jsx("div",{className:"p-6 border-b border-pilot-pale dark:border-[#202226] flex items-center justify-between",children:g.jsxs(yi,{to:"/dashboard",onClick:i,className:"flex items-center gap-2.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pilot-periwinkle rounded-lg",children:[g.jsx("div",{className:"w-9 h-9 rounded-xl bg-pilot-deep flex items-center justify-center text-white shadow-3d-btn border-t border-white/20",children:g.jsx(Ii,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("span",{className:"text-base font-bold tracking-tight text-slate-900 dark:text-[#F2F3F5] block leading-tight",children:"StudyPilot"}),g.jsx("span",{className:"text-[10px] font-semibold text-pilot-periwinkle block leading-none",children:"AI Study Companion"})]})]})}),g.jsx("nav",{className:"p-4 space-y-1.5","aria-label":"Main navigation",children:c.map(d=>{const m=d.icon;return g.jsx(td,{to:d.path,onClick:i,className:({isActive:u})=>Ht("flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group",u?"bg-pilot-pale dark:bg-[#202226] text-pilot-deep dark:text-[#7AA7FF] shadow-[0_2px_0_0_#ADBBDA] dark:shadow-[0_2px_0_0_#101114] border border-pilot-soft/70 dark:border-[#545B66]/60 font-semibold":"text-slate-600 dark:text-[#BFC3C9] hover:text-pilot-deep dark:hover:text-[#F2F3F5] hover:bg-pilot-pale/60 dark:hover:bg-[#202226]/60 hover:-translate-y-0.5"),children:({isActive:u})=>g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx(m,{className:Ht("w-4 h-4 transition-colors",u?"text-pilot-deep dark:text-[#7AA7FF]":"text-pilot-muted dark:text-[#858B95] group-hover:text-pilot-deep dark:group-hover:text-[#F2F3F5]")}),g.jsx("span",{children:d.label})]}),d.badge!==void 0&&g.jsx("span",{className:Ht("text-xs font-semibold px-2 py-0.5 rounded-full",u?"bg-pilot-soft/50 text-pilot-deep":"bg-slate-100 text-slate-600 group-hover:bg-pilot-soft/30"),children:d.badge})]})},d.path)})})]}),g.jsxs("div",{className:"p-4 border-t border-pilot-pale dark:border-[#202226] space-y-3",children:[g.jsxs("div",{className:"p-3 bg-pilot-pale/50 dark:bg-[#202226] rounded-xl border border-pilot-soft/40 dark:border-[#545B66]/40",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs mb-1.5",children:[g.jsxs("span",{className:"font-semibold text-slate-700 dark:text-[#BFC3C9] flex items-center gap-1",children:[g.jsx(Ui,{className:"w-3.5 h-3.5 text-pilot-periwinkle"}),"Weekly Goal"]}),g.jsxs("span",{className:"font-bold text-pilot-deep dark:text-[#7AA7FF]",children:[l,"%"]})]}),g.jsx("div",{className:"w-full bg-slate-200 dark:bg-[#101114] h-1.5 rounded-full overflow-hidden",children:g.jsx("div",{className:"bg-linear-to-r from-pilot-deep to-pilot-periwinkle h-full rounded-full transition-all duration-500",style:{width:`${l}%`}})}),g.jsxs("p",{className:"text-[11px] text-slate-500 dark:text-[#858B95] mt-1.5",children:[o.toFixed(1)," / ",a," hrs completed"]})]}),g.jsxs(yi,{to:"/settings",onClick:i,className:"flex items-center gap-3 p-2 rounded-xl hover:bg-pilot-pale/60 dark:hover:bg-[#202226]/60 transition-colors group",children:[g.jsx("div",{className:"w-8 h-8 rounded-lg bg-pilot-deep text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs",children:(e.name||"Student").split(" ").map(d=>d[0]).join("")}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsxs("div",{className:"flex items-center gap-1",children:[g.jsx("p",{className:"text-xs font-semibold text-slate-800 dark:text-[#F2F3F5] truncate group-hover:text-pilot-deep dark:group-hover:text-[#7AA7FF] transition-colors",children:e.name}),s&&g.jsx("span",{className:"text-[9px] font-bold uppercase bg-pilot-deep text-white px-1 py-0.2 rounded-sm shrink-0",children:"Admin"})]}),g.jsx("p",{className:"text-[11px] text-slate-500 dark:text-[#858B95] truncate",children:e.email})]})]})]})]})},qu=({isOpen:i,onClose:e})=>{const{notifications:t,markNotificationRead:n,markAllNotificationsRead:s}=Un(),r=ie.useRef(null);if(ie.useEffect(()=>{const l=c=>{r.current&&!r.current.contains(c.target)&&e()};return i&&document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[i,e]),!i)return null;const a=t.filter(l=>!l.read).length,o=l=>{switch(l){case"deadline":return g.jsx(Sd,{className:"w-4 h-4 text-rose-500"});case"ai":return g.jsx(Ui,{className:"w-4 h-4 text-indigo-500"});case"achievement":return g.jsx(yd,{className:"w-4 h-4 text-amber-500"});default:return g.jsx(Ii,{className:"w-4 h-4 text-blue-500"})}};return g.jsxs("div",{ref:r,className:"absolute right-0 top-12 z-50 w-80 sm:w-96 rounded-2xl border border-slate-200 bg-white shadow-elevated overflow-hidden animate-in fade-in duration-150",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 px-4 py-3 bg-slate-50/70",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(zl,{className:"w-4 h-4 text-slate-700"}),g.jsx("span",{className:"text-sm font-semibold text-slate-800",children:"Notifications"}),a>0&&g.jsxs("span",{className:"rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-semibold text-indigo-700",children:[a," new"]})]}),a>0&&g.jsx(wt,{variant:"ghost",size:"sm",onClick:s,className:"text-xs text-indigo-600 hover:text-indigo-800 px-2 py-1 h-auto",children:"Mark all read"})]}),g.jsx("div",{className:"max-h-80 overflow-y-auto divide-y divide-slate-100",children:t.length===0?g.jsx("div",{className:"p-6 text-center text-xs text-slate-400",children:"No notifications yet"}):t.map(l=>g.jsxs("div",{onClick:()=>n(l.id),className:`p-3.5 hover:bg-slate-50 cursor-pointer transition-colors flex items-start gap-3 ${l.read?"":"bg-indigo-50/30"}`,children:[g.jsx("div",{className:"mt-0.5 p-1.5 rounded-lg bg-white border border-slate-100 shadow-xs shrink-0",children:o(l.type)}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsxs("div",{className:"flex items-center justify-between gap-1",children:[g.jsx("h4",{className:`text-xs font-semibold ${l.read?"text-slate-700":"text-slate-900"}`,children:l.title}),g.jsx("span",{className:"text-[10px] text-slate-400 shrink-0",children:l.time})]}),g.jsx("p",{className:"text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed",children:l.message})]}),!l.read&&g.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-600 mt-1 shrink-0"})]},l.id))})]})};class Yu{constructor(){ei(this,"audioCtx",null);ei(this,"currentSound","none");ei(this,"gainNode",null);ei(this,"isPlaying",!1);ei(this,"activeNodes",[])}initContext(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;this.audioCtx=new e}this.audioCtx.state==="suspended"&&this.audioCtx.resume()}getSound(){return this.currentSound}getIsPlaying(){return this.isPlaying}setVolume(e){if(this.gainNode&&this.audioCtx){const t=Math.max(0,Math.min(1,e));this.gainNode.gain.setValueAtTime(t,this.audioCtx.currentTime)}}stop(){this.audioCtx&&(this.activeNodes.forEach(e=>{if(typeof e=="number")window.clearInterval(e);else try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}}),this.activeNodes=[],this.isPlaying=!1,this.currentSound="none")}play(e,t=.4){if(this.initContext(),!!this.audioCtx&&(this.isPlaying&&this.stop(),e!=="none")){switch(this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.setValueAtTime(t,this.audioCtx.currentTime),this.gainNode.connect(this.audioCtx.destination),e){case"rain":this.startRainSynthesis();break;case"waves":this.startOceanWaves();break;case"lofi-noise":this.startWarmPinkNoise();break;case"alpha-wave":this.startAlphaBinaural();break}this.isPlaying=!0,this.currentSound=e}}startRainSynthesis(){if(!this.audioCtx||!this.gainNode)return;const e=2*this.audioCtx.sampleRate,t=this.audioCtx.createBuffer(1,e,this.audioCtx.sampleRate),n=t.getChannelData(0);let s=0,r=0,a=0;for(let c=0;c<e;c++){const d=Math.random()*2-1;s=.99886*s+d*.0555179,r=.99332*r+d*.0750759,a=.969*a+d*.153852,n[c]=(s+r+a)*.11}const o=this.audioCtx.createBufferSource();o.buffer=t,o.loop=!0;const l=this.audioCtx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1e3,this.audioCtx.currentTime),o.connect(l),l.connect(this.gainNode),o.start(),this.activeNodes.push(o,l)}startOceanWaves(){if(!this.audioCtx||!this.gainNode)return;const e=2*this.audioCtx.sampleRate,t=this.audioCtx.createBuffer(1,e,this.audioCtx.sampleRate),n=t.getChannelData(0);for(let c=0;c<e;c++)n[c]=Math.random()*2-1;const s=this.audioCtx.createBufferSource();s.buffer=t,s.loop=!0;const r=this.audioCtx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(400,this.audioCtx.currentTime);const a=this.audioCtx.createGain(),o=this.audioCtx.createOscillator();o.frequency.setValueAtTime(.12,this.audioCtx.currentTime);const l=this.audioCtx.createGain();l.gain.setValueAtTime(.4,this.audioCtx.currentTime),o.connect(l),l.connect(a.gain),s.connect(r),r.connect(a),a.connect(this.gainNode),s.start(),o.start(),this.activeNodes.push(s,r,a,o,l)}startWarmPinkNoise(){if(!this.audioCtx||!this.gainNode)return;const e=2*this.audioCtx.sampleRate,t=this.audioCtx.createBuffer(1,e,this.audioCtx.sampleRate),n=t.getChannelData(0);let s=0,r=0,a=0;for(let c=0;c<e;c++){const d=Math.random()*2-1;s=.99886*s+d*.0555179,r=.99332*r+d*.0750759,a=.969*a+d*.153852,n[c]=(s+r+a)*.08}const o=this.audioCtx.createBufferSource();o.buffer=t,o.loop=!0;const l=this.audioCtx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(650,this.audioCtx.currentTime),o.connect(l),l.connect(this.gainNode),o.start(),this.activeNodes.push(o,l)}startAlphaBinaural(){if(!this.audioCtx||!this.gainNode)return;const e=this.audioCtx.createOscillator();e.type="sine",e.frequency.setValueAtTime(216,this.audioCtx.currentTime);const t=this.audioCtx.createOscillator();t.type="sine",t.frequency.setValueAtTime(224,this.audioCtx.currentTime);const n=this.audioCtx.createGain();n.gain.setValueAtTime(.25,this.audioCtx.currentTime),e.connect(n),t.connect(n),n.connect(this.gainNode),e.start(),t.start(),this.activeNodes.push(e,t,n)}}const gi=new Yu,$u=()=>{var u;const[i,e]=ie.useState(!1),[t,n]=ie.useState(!1),[s,r]=ie.useState("rain"),[a,o]=ie.useState(.4),l=[{id:"rain",label:"Gentle Rain",icon:Gl},{id:"waves",label:"Ocean Waves",icon:bd},{id:"lofi-noise",label:"Warm Lo-Fi",icon:Hl},{id:"alpha-wave",label:"Alpha 432Hz",icon:Vl}],c=()=>{t?(gi.stop(),n(!1)):(gi.play(s,a),n(!0))},d=p=>{r(p),t&&gi.play(p,a)},m=p=>{o(p),gi.setVolume(p)};return ie.useEffect(()=>()=>{},[]),g.jsxs("div",{className:"relative",children:[g.jsxs("button",{type:"button",onClick:()=>e(!i),className:`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 border ${t?"bg-pilot-deep text-white border-pilot-deep shadow-3d-btn active:translate-y-px":"bg-white hover:bg-pilot-pale/80 text-pilot-deep border-pilot-soft/70 shadow-3d-secondary active:translate-y-px"}`,title:"Ambient Focus Sounds",children:[t?g.jsxs("div",{className:"flex items-center gap-1",children:[g.jsx("span",{className:"w-1.5 h-3 bg-white rounded-xs animate-pulse"}),g.jsx("span",{className:"w-1.5 h-4 bg-white rounded-xs animate-pulse delay-75"}),g.jsx("span",{className:"w-1.5 h-2 bg-white rounded-xs animate-pulse delay-150"})]}):g.jsx(ar,{className:"w-3.5 h-3.5 text-pilot-muted"}),g.jsx("span",{className:"hidden sm:inline",children:t?(u=l.find(p=>p.id===s))==null?void 0:u.label:"Ambient Audio"})]}),i&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>e(!1)}),g.jsxs("div",{className:"absolute right-0 mt-2 w-72 bg-white rounded-2xl border border-pilot-soft/80 shadow-[0_4px_0_0_#ADBBDA,0_16px_32px_-6px_rgba(61,82,160,0.18)] p-4 z-50 animate-in fade-in zoom-in-95 duration-150 text-left",children:[g.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-pilot-soft/40",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(ar,{className:"w-4 h-4 text-pilot-deep"}),g.jsx("span",{className:"text-xs font-bold text-pilot-dark uppercase tracking-wider",children:"Lo-Fi Ambient Sounds"})]}),g.jsx("button",{type:"button",onClick:c,className:`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${t?"bg-pilot-deep text-white shadow-3d-btn":"bg-pilot-pale text-pilot-deep hover:bg-pilot-soft/50 shadow-3d-secondary"}`,children:t?g.jsx(Md,{className:"w-3.5 h-3.5"}):g.jsx(Ed,{className:"w-3.5 h-3.5 ml-0.5"})})]}),g.jsx("div",{className:"grid grid-cols-2 gap-2 my-3",children:l.map(p=>{const _=p.icon,y=s===p.id;return g.jsxs("button",{type:"button",onClick:()=>d(p.id),className:`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${y?"bg-pilot-pale border-pilot-periwinkle text-pilot-deep font-semibold shadow-3d-secondary":"bg-white border-pilot-soft/40 hover:border-pilot-soft text-slate-600 hover:bg-pilot-pale/40"}`,children:[g.jsx(_,{className:`w-3.5 h-3.5 ${y?"text-pilot-periwinkle":"text-pilot-muted"}`}),g.jsx("span",{className:"truncate",children:p.label})]},p.id)})}),g.jsxs("div",{className:"pt-2 border-t border-pilot-soft/40",children:[g.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-500 mb-1.5 font-medium",children:[g.jsx("span",{children:"Volume"}),g.jsxs("span",{children:[Math.round(a*100),"%"]})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(wd,{className:"w-3.5 h-3.5 text-pilot-muted"}),g.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:a,onChange:p=>m(parseFloat(p.target.value)),className:"w-full accent-pilot-deep h-1.5 bg-pilot-pale rounded-lg cursor-pointer"}),g.jsx(ar,{className:"w-3.5 h-3.5 text-pilot-deep"})]})]})]})]})]})},Ku=({className:i,showLabel:e=!1})=>{const{isDark:t,toggleTheme:n}=du();return g.jsxs("button",{type:"button",onClick:n,"aria-label":t?"Switch to Light Mode":"Switch to Dark Mode",title:t?"Switch to Light Mode":"Switch to Dark Mode",className:Ht("relative inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold select-none transition-all duration-200 cursor-pointer active:translate-y-px",t?"bg-[#202226] text-[#F2F3F5] border border-[#545B66]/60 shadow-[0_2px_0_0_#101114,0_4px_10px_rgba(0,0,0,0.3)] hover:border-[#7AA7FF]/60 hover:text-[#7AA7FF]":"bg-white text-slate-800 border border-pilot-soft/70 shadow-[0_2px_0_0_#ADBBDA,0_4px_10px_rgba(61,82,160,0.08)] hover:border-pilot-deep hover:text-pilot-deep",i),children:[g.jsx("div",{className:"relative w-4 h-4 flex items-center justify-center",children:t?g.jsx(Td,{className:"w-4 h-4 text-amber-300 animate-in spin-in-180 duration-300"}):g.jsx(Ad,{className:"w-4 h-4 text-pilot-deep animate-in spin-in-180 duration-300"})}),e&&g.jsx("span",{className:"font-mono text-[11px] uppercase tracking-wider",children:t?"Light":"Dark"})]})},Zu=({onOpenMobileNav:i,onOpenTaskModal:e,onOpenPlanModal:t,onOpenCommandPalette:n})=>{const s=Ua(),r=Fl(),{preferences:a,notifications:o}=Un(),{logout:l,isAdmin:c}=yn(),[d,m]=ie.useState(!1),[u,p]=ie.useState(!1),_=h=>{switch(h){case"/dashboard":return"Overview Dashboard";case"/study-plan":return"Personalized Study Plan";case"/tasks":return"Task & Assignment Tracker";case"/focus":case"/focus-timer":return"Deep Focus Session";case"/progress":return"Learning Analytics & Progress";case"/settings":return"Account & Study Preferences";case"/admin":return"Admin Telemetry & Directory";default:return"StudyPilot"}},y=new Intl.DateTimeFormat("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}).format(new Date),f=o.filter(h=>!h.read).length;return g.jsxs("header",{className:"h-16 bg-white/95 dark:bg-[#18191D]/95 backdrop-blur-md border-b border-pilot-soft/60 dark:border-[#202226] px-4 sm:px-8 flex items-center justify-between shrink-0 sticky top-0 z-30 shadow-[0_2px_12px_rgba(61,82,160,0.04)] transition-colors",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("button",{onClick:i,className:"lg:hidden p-2 rounded-xl text-slate-500 hover:bg-pilot-pale dark:hover:bg-[#202226] focus:outline-hidden focus:ring-2 focus:ring-pilot-periwinkle","aria-label":"Open mobile menu",children:g.jsx(Cd,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("h1",{className:"text-base sm:text-lg font-bold text-pilot-dark dark:text-[#F2F3F5] tracking-tight leading-tight",children:_(s.pathname)}),g.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#858B95] mt-0.5",children:[g.jsx(Rd,{className:"w-3.5 h-3.5 text-pilot-muted"}),g.jsx("span",{children:y})]})]})]}),g.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[n&&g.jsxs("button",{type:"button",onClick:n,className:"hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pilot-pale/80 hover:bg-pilot-pale border border-pilot-soft/70 text-slate-600 hover:text-pilot-dark text-xs font-medium shadow-3d-secondary active:translate-y-px transition-all",title:"Open Command Palette (Ctrl+K)",children:[g.jsx(jl,{className:"w-3.5 h-3.5 text-pilot-muted"}),g.jsx("span",{className:"hidden md:inline",children:"Spotlight"}),g.jsx("kbd",{className:"px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-white border border-pilot-soft/70 rounded-md shadow-2xs",children:"⌘K"})]}),g.jsx($u,{}),t&&g.jsx(wt,{variant:"outline",size:"sm",onClick:t,className:"hidden sm:inline-flex text-pilot-deep border-pilot-soft hover:bg-pilot-pale",leftIcon:g.jsx(Ui,{className:"w-3.5 h-3.5 text-pilot-periwinkle"}),children:"AI Plan"}),e&&g.jsx(wt,{variant:"primary",size:"sm",onClick:e,className:"hidden sm:inline-flex",leftIcon:g.jsx(Wl,{className:"w-3.5 h-3.5"}),children:"New Task"}),g.jsx(wt,{variant:"secondary",size:"sm",onClick:()=>r("/focus-timer"),className:"hidden md:inline-flex text-pilot-dark hover:text-pilot-deep",leftIcon:g.jsx(ka,{className:"w-3.5 h-3.5 text-pilot-periwinkle"}),children:"Timer"}),g.jsx(Ku,{}),g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>m(!d),className:"relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-indigo-500","aria-label":"Notifications",children:[g.jsx(zl,{className:"w-5 h-5"}),f>0&&g.jsxs("span",{className:"absolute top-1.5 right-1.5 flex h-2 w-2",children:[g.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"}),g.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-rose-500"})]})]}),g.jsx(qu,{isOpen:d,onClose:()=>m(!1)})]}),g.jsxs("div",{className:"relative",children:[g.jsx("button",{onClick:()=>p(!u),className:"flex items-center gap-2 p-1 rounded-xl hover:ring-2 hover:ring-pilot-soft transition-all focus:outline-hidden","aria-label":"User profile menu",children:g.jsx("div",{className:"w-8 h-8 rounded-lg bg-pilot-deep text-white font-semibold text-xs flex items-center justify-center shadow-2xs",children:(a.name||"Student").split(" ").map(h=>h[0]).join("")})}),u&&g.jsxs("div",{className:"absolute right-0 top-12 z-50 w-52 rounded-xl border border-slate-200 bg-white shadow-elevated p-1.5 text-xs animate-in fade-in duration-100",onMouseLeave:()=>p(!1),children:[g.jsxs("div",{className:"px-3 py-2 border-b border-slate-100 mb-1",children:[g.jsx("p",{className:"font-semibold text-slate-900 truncate",children:a.name}),g.jsx("p",{className:"text-slate-400 truncate",children:a.email})]}),g.jsxs(yi,{to:"/settings",onClick:()=>p(!1),className:"flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors",children:[g.jsx(Ba,{className:"w-3.5 h-3.5 text-slate-500"}),g.jsx("span",{children:"Account Settings"})]}),g.jsxs(yi,{to:"/progress",onClick:()=>p(!1),className:"flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors",children:[g.jsx(Pd,{className:"w-3.5 h-3.5 text-slate-500"}),g.jsx("span",{children:"Study Profile"})]}),c&&g.jsxs(yi,{to:"/admin",onClick:()=>p(!1),className:"flex items-center gap-2 px-3 py-2 rounded-lg text-pilot-deep font-semibold hover:bg-pilot-pale transition-colors",children:[g.jsx(za,{className:"w-3.5 h-3.5 text-pilot-deep"}),g.jsx("span",{children:"Admin Console"})]}),g.jsx("div",{className:"border-t border-slate-100 my-1"}),g.jsxs("button",{type:"button",onClick:async()=>{p(!1),await l(),r("/login")},className:"w-full flex items-center gap-2 px-3 py-2 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors text-left",children:[g.jsx(Nd,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Sign Out"})]})]})]})]})]})},Ju=({isOpen:i,onClose:e})=>i?g.jsxs("div",{className:"fixed inset-0 z-50 lg:hidden",children:[g.jsx("div",{className:"fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity",onClick:e,"aria-hidden":"true"}),g.jsxs("div",{className:"fixed inset-y-0 left-0 w-72 bg-white shadow-elevated z-10 flex flex-col animate-in slide-in-from-left duration-200",children:[g.jsx("div",{className:"absolute top-4 right-3",children:g.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600","aria-label":"Close menu",children:g.jsx(Ks,{className:"w-5 h-5"})})}),g.jsx(lc,{onNavigate:e})]})]}):null,Va=({isOpen:i,onClose:e,title:t,description:n,children:s,maxWidth:r="md"})=>{if(ie.useEffect(()=>{const o=l=>{l.key==="Escape"&&e()};return i&&(document.body.style.overflow="hidden",window.addEventListener("keydown",o)),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",o)}},[i,e]),!i)return null;const a={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl"};return g.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto",children:[g.jsx("div",{className:"fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity",onClick:e,"aria-hidden":"true"}),g.jsxs("div",{role:"dialog","aria-modal":"true",className:Ht("relative w-full rounded-2xl bg-white shadow-elevated border border-slate-200/90 z-10 transition-all transform",a[r]),children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 px-6 py-4",children:[g.jsxs("div",{children:[t&&g.jsx("h3",{className:"text-lg font-semibold text-slate-900",children:t}),n&&g.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:n})]}),g.jsx("button",{onClick:e,className:"rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors focus:outline-hidden focus:ring-2 focus:ring-indigo-500","aria-label":"Close dialog",children:g.jsx(Ks,{className:"h-5 w-5"})})]}),g.jsx("div",{className:"p-6",children:s})]})]})},bi=Fa.forwardRef(({className:i,label:e,error:t,helperText:n,leftIcon:s,rightIcon:r,id:a,...o},l)=>{const c=a||(e?e.toLowerCase().replace(/\s+/g,"-"):void 0);return g.jsxs("div",{className:"w-full space-y-1.5 text-left",children:[e&&g.jsx("label",{htmlFor:c,className:"block text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide uppercase",children:e}),g.jsxs("div",{className:"relative rounded-xl shadow-2xs",children:[s&&g.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-pilot-muted dark:text-slate-400",children:s}),g.jsx("input",{ref:l,id:c,className:Ht("block w-full rounded-xl border bg-white dark:bg-[#15171C] px-3.5 py-2.5 text-sm text-slate-900 dark:text-[#F2F3F5] placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors","focus:outline-hidden focus:ring-2 focus:ring-pilot-periwinkle focus:border-pilot-deep dark:focus:ring-pilot-periwinkle/50",s&&"pl-10",r&&"pr-10",t?"border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-300 focus:border-rose-500 focus:ring-rose-500":"border-pilot-soft/70 dark:border-slate-800 hover:border-pilot-muted dark:hover:border-slate-700",i),...o}),r&&g.jsx("div",{className:"absolute inset-y-0 right-0 pr-3.5 flex items-center text-pilot-muted dark:text-slate-400",children:r})]}),t&&g.jsx("p",{className:"text-xs text-rose-600 dark:text-rose-400 font-medium",children:t}),n&&!t&&g.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:n})]})});bi.displayName="Input";const mn=Fa.forwardRef(({className:i,label:e,error:t,options:n,children:s,id:r,...a},o)=>{const l=r||(e?e.toLowerCase().replace(/\s+/g,"-"):void 0);return g.jsxs("div",{className:"w-full space-y-1.5 text-left",children:[e&&g.jsx("label",{htmlFor:l,className:"block text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide uppercase",children:e}),g.jsxs("div",{className:"relative rounded-xl shadow-2xs",children:[g.jsx("select",{ref:o,id:l,className:Ht("block w-full appearance-none rounded-xl border bg-white dark:bg-[#15171C] px-3.5 py-2.5 pr-10 text-sm text-slate-900 dark:text-[#F2F3F5] transition-colors","focus:outline-hidden focus:ring-2 focus:ring-pilot-periwinkle focus:border-pilot-deep dark:focus:ring-pilot-periwinkle/50",t?"border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-300 focus:border-rose-500 focus:ring-rose-500":"border-pilot-soft/70 dark:border-slate-800 hover:border-pilot-muted dark:hover:border-slate-700",i),...a,children:n?n.map(c=>g.jsx("option",{value:c.value,className:"bg-white dark:bg-[#1A1D24] text-slate-900 dark:text-[#F2F3F5]",children:c.label},c.value)):s}),g.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-pilot-muted dark:text-slate-400",children:g.jsx(Xl,{className:"h-4 w-4"})})]}),t&&g.jsx("p",{className:"text-xs text-rose-600 dark:text-rose-400 font-medium",children:t})]})});mn.displayName="Select";const Qu=({isOpen:i,onClose:e,taskToEdit:t})=>{const{subjects:n,addTask:s,updateTask:r}=Un(),[a,o]=ie.useState(""),[l,c]=ie.useState(""),[d,m]=ie.useState(""),[u,p]=ie.useState(""),[_,y]=ie.useState("medium"),[f,h]=ie.useState(45),[w,v]=ie.useState(!1),[b,P]=ie.useState({});ie.useEffect(()=>{var T;t?(o(t.title),c(t.description),m(t.subjectId),p(t.dueDate),y(t.priority),h(t.estimatedMinutes),v(!!t.isExam)):(o(""),c(""),m(((T=n[0])==null?void 0:T.id)||""),p(new Date().toISOString().split("T")[0]),y("medium"),h(45),v(!1)),P({})},[t,i,n]);const A=T=>{T.preventDefault();const R={};if(a.trim()||(R.title="Title is required"),d||(R.subjectId="Please select a subject"),u||(R.dueDate="Due date is required"),Object.keys(R).length>0){P(R);return}t?r({...t,title:a.trim(),description:l.trim(),subjectId:d,dueDate:u,priority:_,estimatedMinutes:Number(f),isExam:w}):s({title:a.trim(),description:l.trim(),subjectId:d,dueDate:u,priority:_,estimatedMinutes:Number(f),completed:!1,isExam:w}),e()};return g.jsx(Va,{isOpen:i,onClose:e,title:t?"Edit Task or Assignment":"Create New Task",description:"Track deadlines, assign estimated focus time, and set priority.",maxWidth:"lg",children:g.jsxs("form",{onSubmit:A,className:"space-y-4",children:[g.jsx(bi,{label:"Task / Exam Title",placeholder:"e.g. Problem Set #4, Chem Lab Pre-Lab, History Reading",value:a,onChange:T=>o(T.target.value),error:b.title,autoFocus:!0}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsx(mn,{label:"Subject",value:d,onChange:T=>m(T.target.value),error:b.subjectId,children:n.map(T=>g.jsxs("option",{value:T.id,children:[T.code," · ",T.name]},T.id))}),g.jsx(bi,{type:"date",label:"Due Date",value:u,onChange:T=>p(T.target.value),error:b.dueDate})]}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs(mn,{label:"Priority Level",value:_,onChange:T=>y(T.target.value),children:[g.jsx("option",{value:"low",children:"Low Priority"}),g.jsx("option",{value:"medium",children:"Medium Priority"}),g.jsx("option",{value:"high",children:"High Priority"})]}),g.jsx(bi,{type:"number",label:"Estimated Time (Minutes)",min:"10",max:"480",step:"5",value:f,onChange:T=>h(Number(T.target.value))})]}),g.jsxs("div",{className:"space-y-1.5 text-left",children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-700 tracking-wide uppercase",children:"Description & Notes (Optional)"}),g.jsx("textarea",{rows:3,placeholder:"Add relevant instructions, page numbers, or submission guidelines...",value:l,onChange:T=>c(T.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-slate-400 transition-colors"})]}),g.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[g.jsx("input",{type:"checkbox",id:"isExamCheck",checked:w,onChange:T=>v(T.target.checked),className:"h-4 w-4 rounded-sm border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"}),g.jsx("label",{htmlFor:"isExamCheck",className:"text-xs font-medium text-slate-700 cursor-pointer",children:"This is an Exam, Midterm, or Final (highlights in study planner)"})]}),g.jsxs("div",{className:"flex items-center justify-end gap-3 pt-4 border-t border-slate-100",children:[g.jsx(wt,{type:"button",variant:"outline",onClick:e,children:"Cancel"}),g.jsx(wt,{type:"submit",variant:"primary",children:t?"Save Changes":"Create Task"})]})]})})},qn=i=>{const[e,t]=i.split(":").map(Number);return(e||0)*60+(t||0)},xi=i=>{const e=Math.floor(i/60)%24,t=i%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`},Lo=i=>{const e=new Date(i+"T00:00:00");return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()]},cc=(i,e,t,n,s)=>{const r=[],a=[],o=[],l={},c=new Map(s.map(p=>[p.id,p])),d=new Map(n.map(p=>[p.id,p])),m={};if(e.preserveCompletedWork)for(const p of t)m[p.date]||(m[p.date]=[]),m[p.date].push({...p,completed:!0});for(const p of i){if(!c.has(p.subjectId)){r.push(`Session "${p.title}" dropped: unknown subject.`);continue}if(p.taskId){const f=d.get(p.taskId);if(f&&f.completed&&!e.preserveCompletedWork)continue}const _=Lo(p.date),y=e.availableDays[_];if(y&&!y.enabled){r.push(`Shifted session on ${p.date} (${_}) due to user-declared rest day.`);continue}m[p.date]||(m[p.date]=[]),m[p.date].push(p)}const u=[];for(const[p,_]of Object.entries(m)){const y=Lo(p),f=e.availableDays[y]||{start:"08:00",end:"22:00"},h=qn(f.start),w=qn(f.end);let v=0;_.sort((P,A)=>qn(P.startTime)-qn(A.startTime));let b=h;for(let P=0;P<_.length;P++){const A=_[P];let T=Math.max(qn(A.startTime),b),R=Number(A.durationMinutes)||e.preferredSessionMinutes||45;R>180&&(R=180),R<15&&(R=15);let W=T+R;if(v+R>e.dailyLimitMinutes){const x=e.dailyLimitMinutes-v;if(x>=25)R=x,W=T+R,r.push(`Trimmed session on ${p} to respect your ${e.dailyLimitMinutes} min daily limit.`);else{if(r.push(`Exceeded daily capacity limit on ${p} (${v} mins logged).`),A.taskId){const E=d.get(A.taskId);o.push({taskId:A.taskId,taskTitle:(E==null?void 0:E.title)||A.title,estimatedMinutes:R,reason:`Exceeded daily study limit of ${e.dailyLimitMinutes/60}h on ${p}.`})}continue}}if(W>w){if(r.push(`Session on ${p} ended outside declared time window (${f.end}).`),A.taskId){const x=d.get(A.taskId);o.push({taskId:A.taskId,taskTitle:(x==null?void 0:x.title)||A.title,estimatedMinutes:R,reason:`Exceeded available study hours before window close on ${p}.`})}continue}b=W+(e.breakDurationMinutes||5),v+=R,u.push({...A,id:A.id||`sess-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,date:p,startTime:xi(T),endTime:xi(W),durationMinutes:R})}l[p]=v}for(const p of e.taskIds){const _=d.get(p);if(!_||_.completed)continue;u.some(f=>f.taskId===p)||o.some(h=>h.taskId===p)||o.push({taskId:p,taskTitle:_.title,estimatedMinutes:_.estimatedMinutes,reason:"Time capacity was exhausted by earlier deadlines or daily limits."})}return{isValid:u.length>0,validatedSessions:u,unscheduledTasks:o,dailyTotals:l,warnings:r,conflicts:a}},eh=$l({title:zt().min(1).max(200),subjectId:zt().min(1),taskId:zt().optional(),date:zt().regex(/^\d{4}-\d{2}-\d{2}$/),startTime:zt().regex(/^\d{2}:\d{2}$/),endTime:zt().regex(/^\d{2}:\d{2}$/),durationMinutes:Bd().int().min(15).max(360),notes:zt().optional()}),th=$l({title:zt().min(1),summary:zt().min(1),assumptions:os(zt()).default([]),warnings:os(zt()).default([]),suggestions:os(zt()).default([]),sessions:os(eh)}),Io=(i,e,t,n)=>{const s=e.filter(y=>i.subjectIds.includes(y.id)),r=t.filter(y=>i.taskIds.includes(y.id)&&!y.completed),a=new Date,o=a.toISOString().split("T")[0],l=new Date(a);l.setDate(l.getDate()+6);const c=l.toISOString().split("T")[0],d=[],m=[...r].sort((y,f)=>{const h={high:3,medium:2,low:1},w=h[f.priority]-h[y.priority];return w!==0?w:y.dueDate.localeCompare(f.dueDate)});let u=0,p=0;for(let y=0;y<7;y++){const f=new Date(a);f.setDate(f.getDate()+y);const h=f.toISOString().split("T")[0],v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][f.getDay()],b=i.availableDays[v];if(!b||!b.enabled)continue;let P=qn(b.start);const A=qn(b.end);let T=0;if(u<m.length&&P+i.preferredSessionMinutes<=A){const R=m[u],W=Math.min(R.estimatedMinutes,i.preferredSessionMinutes,i.dailyLimitMinutes-T);W>=20&&(d.push({id:`sess-det-${y}-1`,title:`${R.title} (Deep Focus)`,subjectId:R.subjectId,taskId:R.id,date:h,startTime:xi(P),endTime:xi(P+W),durationMinutes:W,completed:!1,notes:`Targeted milestone for due date: ${R.dueDate}. Priority: ${R.priority.toUpperCase()}.`,isAiGenerated:!0}),P+=W+i.breakDurationMinutes,T+=W,u++)}if(s.length>0&&T+i.preferredSessionMinutes<=i.dailyLimitMinutes&&P+i.preferredSessionMinutes<=A){const R=s[p%s.length],W=Math.min(i.preferredSessionMinutes,i.dailyLimitMinutes-T);W>=25&&(d.push({id:`sess-det-${y}-2`,title:`${R.code} Active Retrieval & Practice Problems`,subjectId:R.id,date:h,startTime:xi(P),endTime:xi(P+W),durationMinutes:W,completed:!1,notes:`Cognitive interleaving review block for ${R.name}.`,isAiGenerated:!0}),p++)}}const _=cc(d,i,n.filter(y=>y.completed),t,e);return{id:`plan-${Date.now()}`,title:`StudyPlan: ${o} to ${c}`,weekStart:o,weekEnd:c,status:"draft",summary:`Optimized 7-day schedule with ${_.validatedSessions.length} focus sessions balancing cognitive load and upcoming deadlines.`,assumptions:[`Daily study target configured to ${i.dailyLimitMinutes/60}h max.`,`Session duration set to ${i.preferredSessionMinutes}m with ${i.breakDurationMinutes}m cognitive recovery intervals.`,"Exam deadlines within 7 days given priority allocation."],warnings:_.warnings,dailyTotals:_.dailyTotals,sessions:_.validatedSessions,unscheduledTasks:_.unscheduledTasks,suggestions:["Maintain steady sleep routines to reinforce memory consolidation.","If an assignment takes longer than estimated, reschedule remaining blocks rather than working past midnight."],source:"algorithm",generatedAt:new Date().toISOString()}},nh=async(i,e,t,n)=>{if(!fn.isConfigured){const a=Io(i,e,t,n);return a.warnings.unshift("Notice: Generated entirely in your browser. No backend is configured, so no study data left your device."),a}const s=pt!=null&&pt.currentUser?await pt.currentUser.getIdToken():null;try{const a=await fetch("/api/ai/generate-plan",{method:"POST",headers:{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}},body:JSON.stringify({config:i,subjects:e.filter(o=>i.subjectIds.includes(o.id)),tasks:t.filter(o=>i.taskIds.includes(o.id))})});if(a.ok){const o=await a.json(),l=th.safeParse(o.plan);if(l.success){const c=cc(l.data.sessions.map((d,m)=>({...d,id:`ai-sess-${Date.now()}-${m}`,completed:!1,isAiGenerated:!0})),i,n.filter(d=>d.completed),t,e);return{id:`plan-${Date.now()}`,title:l.data.title,weekStart:new Date().toISOString().split("T")[0],weekEnd:new Date(Date.now()+6*864e5).toISOString().split("T")[0],status:"draft",summary:l.data.summary,assumptions:l.data.assumptions,warnings:[...l.data.warnings,...c.warnings],dailyTotals:c.dailyTotals,sessions:c.validatedSessions,unscheduledTasks:c.unscheduledTasks,suggestions:l.data.suggestions,source:"ai",generatedAt:new Date().toISOString()}}}else{const o=await a.json().catch(()=>({}))}}catch{}const r=Io(i,e,t,n);return r.warnings.unshift("Notice: Synthesized via StudyPilot Smart Constraint Scheduler (GEMINI_API_KEY server key unconfigured or endpoint unreachable)."),r},ih=({className:i,variant:e="neutral",size:t="md",children:n,...s})=>{const r={primary:"bg-pilot-pale text-pilot-deep border-pilot-soft font-semibold",info:"bg-pilot-pale text-pilot-periwinkle border-pilot-soft font-semibold",success:"bg-emerald-50 text-emerald-700 border-emerald-200/80",warning:"bg-amber-50 text-amber-700 border-amber-200/80",danger:"bg-rose-50 text-rose-700 border-rose-200/80",neutral:"bg-slate-100 text-slate-700 border-slate-200",outline:"bg-transparent text-pilot-deep border-pilot-soft"},a={sm:"text-[11px] px-2 py-0.5 font-medium rounded-md",md:"text-xs px-2.5 py-1 font-medium rounded-lg"};return g.jsx("span",{className:Ht("inline-flex items-center gap-1 border tracking-wide transition-colors",r[e],a[t],i),...s,children:n})},Uo=({subjectId:i,className:e,showCodeOnly:t=!1})=>{const{subjects:n}=Un(),s=n.find(r=>r.id===i);return s?g.jsxs("span",{className:Ht("inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-md border",s.bgLight,s.textLight,s.borderColor,e),children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full shrink-0",style:{backgroundColor:s.color}}),g.jsx("span",{children:t?s.code:`${s.code} · ${s.name}`})]}):g.jsx("span",{className:Ht("inline-flex items-center text-xs px-2 py-0.5 rounded-sm font-medium bg-slate-100 text-slate-600",e),children:"General"})},sh={Mon:{enabled:!0,start:"09:00",end:"21:00"},Tue:{enabled:!0,start:"09:00",end:"21:00"},Wed:{enabled:!0,start:"09:00",end:"21:00"},Thu:{enabled:!0,start:"09:00",end:"21:00"},Fri:{enabled:!0,start:"09:00",end:"19:00"},Sat:{enabled:!0,start:"10:00",end:"18:00"},Sun:{enabled:!1,start:"10:00",end:"18:00"}},rh=({isOpen:i,onClose:e})=>{const{subjects:t,tasks:n,sessions:s,saveGeneratedPlan:r,showToast:a}=Un(),[o,l]=ie.useState("balanced"),[c,d]=ie.useState("balanced"),[m,u]=ie.useState(t.map(O=>O.id)),[p,_]=ie.useState(n.filter(O=>!O.completed).map(O=>O.id)),[y,f]=ie.useState(sh),[h,w]=ie.useState(240),[v,b]=ie.useState(45),[P,A]=ie.useState(5),[T,R]=ie.useState(""),[W,x]=ie.useState(!1),[E,k]=ie.useState(!1),[j,X]=ie.useState(""),[K,V]=ie.useState(null),[ee,B]=ie.useState(!1),se=O=>{u(L=>L.includes(O)?L.filter(Y=>Y!==O):[...L,O])},oe=O=>{_(L=>L.includes(O)?L.filter(Y=>Y!==O):[...L,O])},ce=O=>{f(L=>({...L,[O]:{...L[O],enabled:!L[O].enabled}}))},ke=async()=>{if(m.length===0){a("Validation Error","Please select at least one course subject.","warning");return}k(!0),X("Analyzing syllabus deadlines, exam dates, and priority weighting...");const O={goal:o,planningStrategy:c,subjectIds:m,taskIds:p,availableDays:y,dailyLimitMinutes:h,preferredSessionMinutes:v,breakDurationMinutes:P,preserveCompletedWork:!0,bufferHoursBeforeExam:24,notesOrFocusTopics:T.trim()||void 0};try{setTimeout(()=>{X("Allocating cognitive intervals across available study windows...")},700),setTimeout(()=>{X("Enforcing non-overlap constraints and daily capacity limits...")},1400);const L=await nh(O,t,n,s);setTimeout(()=>{V(L),k(!1)},1900)}catch{k(!1),a("Generation Failed","An error occurred while compiling your study plan.","error")}},ze=async()=>{if(K){B(!0);try{await r(K),e(),V(null)}catch{a("Error","Could not save study plan to database.","error")}finally{B(!1)}}},$=()=>{V(null)};return g.jsxs(Va,{isOpen:i,onClose:()=>{!E&&!ee&&e()},title:K?"Review Generated Study Plan":"AI Study Planner & Optimizer",description:K?"Inspect the validated schedule, daily load distribution, and recommendations before activating.":"Define your priorities, weekly availability, and study rhythm to synthesize an optimal schedule.",maxWidth:"2xl",children:[E&&g.jsxs("div",{className:"py-12 px-4 text-center space-y-6",children:[g.jsxs("div",{className:"relative w-16 h-16 mx-auto flex items-center justify-center",children:[g.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin"}),g.jsx(Vl,{className:"w-8 h-8 text-indigo-600 animate-pulse"})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("h4",{className:"text-base font-bold text-slate-900",children:"Synthesizing Your Academic Schedule"}),g.jsx("p",{className:"text-xs text-indigo-600 font-medium animate-pulse",children:j})]}),g.jsx("p",{className:"text-[11px] text-slate-400 max-w-sm mx-auto",children:"Applying spaced retrieval pacing, interleaving subjects, and verifying no conflicting time blocks."})]}),!E&&K&&g.jsxs("div",{className:"space-y-5 max-h-[70vh] overflow-y-auto pr-1",children:[g.jsxs("div",{className:"p-4 rounded-xl bg-pilot-pale border border-pilot-soft/80 space-y-2",children:[g.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-pilot-deep",children:K.title}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(ih,{variant:"primary",size:"sm",className:K.source==="ai"?"bg-pilot-deep text-white border-transparent":"bg-pilot-soft/40 text-pilot-deep border-pilot-soft",children:K.source==="ai"?"Google Gemini 1.5 Flash":"Deterministic Planning Engine"}),g.jsxs("span",{className:"text-[11px] font-semibold text-slate-500",children:[K.sessions.length," sessions"]})]})]}),g.jsx("p",{className:"text-xs text-pilot-dark leading-relaxed",children:K.summary})]}),K.unscheduledTasks.length>0&&g.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(ql,{className:"w-4 h-4 text-amber-600 shrink-0"}),g.jsx("h5",{className:"text-xs font-bold",children:"Unscheduled Work Notice"})]}),g.jsx("ul",{className:"text-xs space-y-1 list-disc list-inside text-amber-800",children:K.unscheduledTasks.map(O=>g.jsxs("li",{children:[g.jsxs("strong",{children:[O.taskTitle,":"]})," ",O.reason]},O.taskId))})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("h5",{className:"text-xs font-bold text-slate-800 uppercase tracking-wide",children:"Scheduled Study Blocks"}),g.jsx("div",{className:"divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white max-h-64 overflow-y-auto",children:K.sessions.map(O=>g.jsxs("div",{className:"p-3 flex items-center justify-between text-xs gap-3",children:[g.jsxs("div",{className:"space-y-0.5 min-w-0",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"font-bold text-slate-900 truncate",children:O.title}),g.jsx(Uo,{subjectId:O.subjectId,showCodeOnly:!0})]}),g.jsxs("div",{className:"text-[11px] text-slate-500 flex items-center gap-2",children:[g.jsx("span",{children:O.date}),g.jsx("span",{children:"·"}),g.jsxs("span",{children:[O.startTime," - ",O.endTime," (",O.durationMinutes,"m)"]})]})]}),g.jsx("span",{className:"text-[10px] text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-sm shrink-0",children:"Validated"})]},O.id))})]}),g.jsxs("div",{className:"p-3 bg-slate-50 rounded-xl border border-slate-200/80",children:[g.jsx("h6",{className:"text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-2",children:"Daily Study Load"}),g.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:Object.entries(K.dailyTotals).map(([O,L])=>g.jsxs("div",{className:"bg-white px-2.5 py-1 rounded-lg border border-slate-200",children:[g.jsxs("span",{className:"text-slate-500 font-medium",children:[O,":"]})," ",g.jsxs("strong",{className:"text-slate-900",children:[(L/60).toFixed(1),"h"]})]},O))})]}),g.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[g.jsx(wt,{variant:"ghost",size:"sm",onClick:$,leftIcon:g.jsx(Dd,{className:"w-4 h-4"}),children:"Adjust Inputs"}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(wt,{variant:"outline",size:"sm",onClick:e,children:"Cancel"}),g.jsx(wt,{variant:"primary",size:"md",onClick:ze,isLoading:ee,leftIcon:g.jsx(Ld,{className:"w-4 h-4"}),children:"Save & Activate Plan"})]})]})]}),!E&&!K&&g.jsxs("div",{className:"space-y-5 max-h-[72vh] overflow-y-auto pr-1",children:[g.jsxs("div",{className:"space-y-1.5",children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-700 uppercase tracking-wide",children:"Primary Planning Objective"}),g.jsxs(mn,{value:o,onChange:O=>l(O.target.value),children:[g.jsx("option",{value:"balanced",children:"Balanced Weekly Routine (Recommended)"}),g.jsx("option",{value:"exams",children:"Exam Preparation & High-Stakes Tests"}),g.jsx("option",{value:"assignments",children:"Clear Assignment Backlog & Deadlines"}),g.jsx("option",{value:"weak_subjects",children:"Reinforce Difficult / Low-Confidence Subjects"}),g.jsx("option",{value:"routine",children:"Build Consistent Daily Study Habits"})]})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("div",{className:"flex items-center justify-between",children:g.jsxs("label",{className:"text-xs font-semibold text-slate-700 uppercase tracking-wide",children:["Include Courses (",m.length," / ",t.length,")"]})}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:t.map(O=>{const L=m.includes(O.id);return g.jsxs("button",{type:"button",onClick:()=>se(O.id),className:`flex items-center justify-between p-2.5 rounded-xl border text-left text-xs transition-all ${L?"border-indigo-400 bg-indigo-50/50 text-slate-900 font-medium":"border-slate-200 bg-white text-slate-500 hover:border-slate-300"}`,children:[g.jsxs("div",{className:"flex items-center gap-2 truncate",children:[g.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:O.color}}),g.jsxs("span",{className:"truncate",children:[O.code," · ",O.name]})]}),L&&g.jsx(Yl,{className:"w-4 h-4 text-indigo-600 shrink-0"})]},O.id)})})]}),n.filter(O=>!O.completed).length>0&&g.jsxs("div",{className:"space-y-2",children:[g.jsxs("label",{className:"text-xs font-semibold text-slate-700 uppercase tracking-wide",children:["Prioritize Deadlines & Assignments (",p.length," selected)"]}),g.jsx("div",{className:"max-h-36 overflow-y-auto space-y-1.5 border border-slate-200 rounded-xl p-2 bg-slate-50/50",children:n.filter(O=>!O.completed).map(O=>{const L=p.includes(O.id);return g.jsxs("div",{onClick:()=>oe(O.id),className:`p-2 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-colors ${L?"bg-white border-indigo-300":"bg-transparent border-slate-200"}`,children:[g.jsxs("div",{className:"flex items-center gap-2 truncate",children:[g.jsx("input",{type:"checkbox",checked:L,onChange:()=>{},className:"rounded-sm text-indigo-600 h-3.5 w-3.5"}),g.jsx("span",{className:"font-medium text-slate-800 truncate",children:O.title}),g.jsx(Uo,{subjectId:O.subjectId,showCodeOnly:!0})]}),g.jsxs("span",{className:"text-[11px] text-slate-500 shrink-0",children:["Due ",O.dueDate]})]},O.id)})})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"text-xs font-semibold text-slate-700 uppercase tracking-wide",children:"Weekly Study Availability"}),g.jsx("div",{className:"grid grid-cols-7 gap-1.5",children:Object.entries(y).map(([O,L])=>g.jsxs("button",{type:"button",onClick:()=>ce(O),className:`p-2 rounded-xl text-center text-xs font-bold border transition-all ${L.enabled?"bg-indigo-600 text-white border-indigo-600 shadow-2xs":"bg-white text-slate-400 border-slate-200 hover:bg-slate-50"}`,children:[g.jsx("div",{children:O}),g.jsx("div",{className:"text-[10px] font-normal",children:L.enabled?"Active":"Off"})]},O))})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-100",children:[g.jsxs("button",{type:"button",onClick:()=>x(!W),className:"flex items-center justify-between w-full text-xs font-semibold text-slate-600 hover:text-slate-900 py-1",children:[g.jsx("span",{children:"Capacity, Strategy & Break Settings"}),W?g.jsx(Id,{className:"w-4 h-4"}):g.jsx(Xl,{className:"w-4 h-4"})]}),W&&g.jsxs("div",{className:"pt-3 space-y-4 animate-in fade-in duration-150",children:[g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:[g.jsxs(mn,{label:"Pacing Strategy",value:c,onChange:O=>d(O.target.value),children:[g.jsx("option",{value:"balanced",children:"Balanced Interleaving"}),g.jsx("option",{value:"deadline_focused",children:"Deadline Driven"}),g.jsx("option",{value:"revision_heavy",children:"Revision & Retention"})]}),g.jsx(bi,{type:"number",label:"Daily Limit (Mins)",min:"60",max:"600",step:"30",value:h,onChange:O=>w(Number(O.target.value))}),g.jsxs(mn,{label:"Block Length",value:v,onChange:O=>b(Number(O.target.value)),children:[g.jsx("option",{value:"25",children:"25 mins (Pomodoro)"}),g.jsx("option",{value:"45",children:"45 mins (Deep Work)"}),g.jsx("option",{value:"60",children:"60 mins (Intensive)"})]}),g.jsxs(mn,{label:"Break Length",value:P,onChange:O=>A(Number(O.target.value)),children:[g.jsx("option",{value:"5",children:"5 mins"}),g.jsx("option",{value:"10",children:"10 mins"}),g.jsx("option",{value:"15",children:"15 mins"})]})]}),g.jsxs("div",{className:"space-y-1 text-left",children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-700 tracking-wide uppercase",children:"Specific Focus Topics or Instructions (Optional)"}),g.jsx("textarea",{rows:2,value:T,onChange:O=>R(O.target.value),placeholder:"e.g. Prioritize midterm review for History on Wednesday and Friday...",className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"})]})]})]}),g.jsxs("div",{className:"flex items-center justify-end gap-3 pt-4 border-t border-slate-100",children:[g.jsx(wt,{type:"button",variant:"outline",onClick:e,children:"Cancel"}),g.jsx(wt,{type:"button",variant:"primary",onClick:ke,leftIcon:g.jsx(Ui,{className:"w-4 h-4"}),children:"Generate AI Schedule"})]})]})]})},ah=({isOpen:i,onClose:e,onOpenTaskModal:t})=>{const n=Fl(),{tasks:s,subjects:r,showToast:a}=Un(),{isAdmin:o}=yn(),[l,c]=ie.useState(""),[d,m]=ie.useState(0),u=ie.useRef(null);ie.useEffect(()=>{i&&(c(""),m(0),setTimeout(()=>{var v;return(v=u.current)==null?void 0:v.focus()},50))},[i]);const p=[{id:"nav-dash",label:"Go to Dashboard",icon:kl,category:"Navigation",action:()=>n("/dashboard")},{id:"nav-ai",label:"AI Study Planner",icon:Ui,category:"Navigation",action:()=>n("/study-plan")},{id:"nav-timer",label:"Focus Pomodoro Timer",icon:ka,category:"Navigation",action:()=>n("/focus-timer")},{id:"nav-tasks",label:"Tasks & Deadlines",icon:Wr,category:"Navigation",action:()=>n("/tasks")},{id:"nav-progress",label:"Progress & Analytics",icon:Bl,category:"Navigation",action:()=>n("/progress")},{id:"nav-settings",label:"Preferences & Settings",icon:Ba,category:"Navigation",action:()=>n("/settings")}];o&&p.push({id:"nav-admin",label:"Admin Console & Telemetry",icon:za,category:"Navigation",action:()=>n("/admin")});const _=[{id:"act-new-task",label:"Create New Task",icon:Wl,category:"Quick Actions",action:()=>{t?t():n("/tasks")}},{id:"act-rain",label:"Play Gentle Rain Focus Sound",icon:Gl,category:"Quick Actions",action:()=>{gi.play("rain",.4),a("Ambient Rain Playing","Audio will play until stopped in the header pill.","info")}},{id:"act-lofi",label:"Play Warm Lo-Fi Focus Static",icon:Hl,category:"Quick Actions",action:()=>{gi.play("lofi-noise",.4),a("Lo-Fi Ambient Playing","Relaxed concentration active.","info")}}],y=s.filter(v=>v.title.toLowerCase().includes(l.toLowerCase())).slice(0,4).map(v=>({id:`task-${v.id}`,label:`Task: ${v.title}`,icon:Wr,category:"Your Tasks",action:()=>n("/tasks")})),f=r.filter(v=>v.name.toLowerCase().includes(l.toLowerCase())||v.code.toLowerCase().includes(l.toLowerCase())).slice(0,3).map(v=>({id:`sub-${v.id}`,label:`Subject: ${v.name} (${v.code})`,icon:Ii,category:"Your Subjects",action:()=>n("/tasks")})),h=[..._.filter(v=>v.label.toLowerCase().includes(l.toLowerCase())),...y,...f,...p.filter(v=>v.label.toLowerCase().includes(l.toLowerCase()))],w=v=>{if(v.key==="ArrowDown")v.preventDefault(),m(b=>(b+1)%Math.max(1,h.length));else if(v.key==="ArrowUp")v.preventDefault(),m(b=>(b-1+h.length)%Math.max(1,h.length));else if(v.key==="Enter"){v.preventDefault();const b=h[d];b&&(b.action(),e())}else v.key==="Escape"&&e()};return i?g.jsxs("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150",children:[g.jsx("div",{className:"fixed inset-0",onClick:e}),g.jsxs("div",{className:"relative w-full max-w-xl bg-white rounded-2xl border border-pilot-soft/80 shadow-[0_6px_0_0_#ADBBDA,0_20px_40px_-8px_rgba(61,82,160,0.22)] overflow-hidden z-10 animate-in zoom-in-95 duration-150 text-left",children:[g.jsxs("div",{className:"flex items-center gap-3 px-4 py-3.5 border-b border-pilot-soft/50 bg-pilot-pale/40",children:[g.jsx(jl,{className:"w-5 h-5 text-pilot-deep shrink-0"}),g.jsx("input",{ref:u,type:"text",value:l,onChange:v=>{c(v.target.value),m(0)},onKeyDown:w,placeholder:"Type a command, search tasks, or jump to a page...",className:"w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"}),g.jsx("kbd",{className:"hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-semibold text-slate-500 bg-white border border-pilot-soft/70 rounded-md shadow-2xs",children:"ESC"})]}),g.jsx("div",{className:"max-h-80 overflow-y-auto p-2 divide-y divide-pilot-soft/20",children:h.length===0?g.jsxs("div",{className:"py-8 text-center text-xs text-slate-500",children:['No matching commands or tasks found for "',l,'".']}):h.map((v,b)=>{const P=v.icon,A=b===d;return g.jsxs("button",{type:"button",onClick:()=>{v.action(),e()},onMouseEnter:()=>m(b),className:`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all ${A?"bg-pilot-pale border border-pilot-periwinkle/50 text-pilot-deep font-semibold shadow-3d-secondary":"text-slate-700 hover:bg-pilot-pale/50 border border-transparent"}`,children:[g.jsxs("div",{className:"flex items-center gap-2.5 truncate",children:[g.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${A?"bg-pilot-deep text-white shadow-3d-btn":"bg-pilot-soft/30 text-pilot-deep"}`,children:g.jsx(P,{className:"w-3.5 h-3.5"})}),g.jsx("span",{className:"truncate",children:v.label})]}),g.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[g.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:v.category}),A&&g.jsx(Ud,{className:"w-3 h-3 text-pilot-periwinkle"})]})]},v.id)})}),g.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-t border-pilot-soft/40 bg-pilot-pale/20 text-[11px] text-slate-500",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("span",{children:"↑↓ to navigate"}),g.jsx("span",{children:"↵ to select"})]}),g.jsx("span",{children:"StudyPilot Spotlight"})]})]})]}):null},oh=()=>{const{toasts:i,dismissToast:e}=Un();return i.length===0?null:g.jsx("div",{className:"fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none",children:i.map(t=>{const n={success:g.jsx(Yl,{className:"w-5 h-5 text-emerald-600 shrink-0"}),info:g.jsx(Od,{className:"w-5 h-5 text-blue-600 shrink-0"}),warning:g.jsx(ql,{className:"w-5 h-5 text-amber-600 shrink-0"}),error:g.jsx(Fd,{className:"w-5 h-5 text-rose-600 shrink-0"})},s={success:"border-emerald-200 bg-white",info:"border-blue-200 bg-white",warning:"border-amber-200 bg-white",error:"border-rose-200 bg-white"};return g.jsxs("div",{className:Ht("pointer-events-auto flex items-start gap-3 rounded-xl border p-4 shadow-elevated transition-all animate-in fade-in slide-in-from-bottom-2 duration-200",s[t.type]),children:[g.jsx("div",{className:"mt-0.5",children:n[t.type]}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsx("h4",{className:"text-sm font-semibold text-slate-900",children:t.title}),t.description&&g.jsx("p",{className:"text-xs text-slate-600 mt-0.5 leading-relaxed",children:t.description})]}),g.jsx("button",{onClick:()=>e(t.id),className:"text-slate-400 hover:text-slate-600 rounded-sm p-0.5 transition-colors","aria-label":"Dismiss notification",children:g.jsx(Ks,{className:"w-4 h-4"})})]},t.id)})})},lh=()=>{const{isFirebaseReady:i,missingConfigKeys:e}=yn(),[t,n]=ie.useState(!1);return i||t?null:g.jsx("div",{className:"bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs",children:g.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-3",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Ol,{className:"w-4 h-4 text-amber-600 shrink-0"}),g.jsxs("span",{children:[g.jsx("strong",{children:"Firebase Setup Mode:"})," Cloud database requires credentials in ",g.jsx("code",{className:"bg-amber-100 px-1 py-0.5 rounded-sm font-mono",children:".env"})," (missing: ",e.join(", "),"). The application is currently running in local storage preview mode with full interactive capability."]})]}),g.jsx("button",{onClick:()=>n(!0),className:"text-amber-500 hover:text-amber-700 p-0.5 rounded-sm","aria-label":"Dismiss banner",children:g.jsx(Ks,{className:"w-3.5 h-3.5"})})]})})},ch=()=>{const{userProfile:i,completeOnboarding:e}=yn(),[t,n]=ie.useState(!0),[s,r]=ie.useState("Dean's List (3.8+ GPA)"),[a,o]=ie.useState(240),[l,c]=ie.useState(45),[d,m]=ie.useState(!1);if(!i||i.onboardingCompleted||!t)return null;const u=async(p=!1)=>{m(!0);try{p?await e({}):await e({studyGoal:s.trim(),dailyStudyLimitMinutes:Number(a),preferredSessionMinutes:Number(l)}),n(!1)}catch{}finally{m(!1)}};return g.jsx(Va,{isOpen:t,onClose:()=>u(!0),title:"Welcome to StudyPilot",description:"Let's configure your study rhythm so the AI planner can tailor your schedule.",maxWidth:"md",children:g.jsxs("div",{className:"space-y-5",children:[g.jsxs("div",{className:"p-3.5 rounded-xl bg-indigo-50 border border-indigo-100 flex items-start gap-3",children:[g.jsx("div",{className:"p-2 rounded-lg bg-indigo-600 text-white shrink-0",children:g.jsx(Ui,{className:"w-4 h-4"})}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-xs font-semibold text-indigo-950",children:"Personalized Cognitive Baseline"}),g.jsx("p",{className:"text-xs text-indigo-800/80 mt-0.5 leading-relaxed",children:"These initial targets help prevent cognitive overload and balance study distribution. You can adjust them anytime in Settings."})]})]}),g.jsx(bi,{label:"Primary Academic Goal",value:s,onChange:p=>r(p.target.value),placeholder:"e.g. Ace Fall Semester Finals, MCAT Prep, 3.9 GPA",leftIcon:g.jsx(kd,{className:"w-4 h-4"}),helperText:"We prioritize study sessions towards this milestone."}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs(mn,{label:"Daily Study Target",value:a,onChange:p=>o(Number(p.target.value)),children:[g.jsx("option",{value:"120",children:"2.0 Hours / day (Light)"}),g.jsx("option",{value:"180",children:"3.0 Hours / day (Moderate)"}),g.jsx("option",{value:"240",children:"4.0 Hours / day (Balanced)"}),g.jsx("option",{value:"300",children:"5.0 Hours / day (Intensive)"}),g.jsx("option",{value:"360",children:"6.0 Hours / day (Rigorous)"})]}),g.jsxs(mn,{label:"Default Focus Session",value:l,onChange:p=>c(Number(p.target.value)),children:[g.jsx("option",{value:"25",children:"25 mins (Pomodoro)"}),g.jsx("option",{value:"45",children:"45 mins (Deep Work)"}),g.jsx("option",{value:"60",children:"60 mins (Intensive)"})]})]}),g.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[g.jsx(wt,{type:"button",variant:"ghost",size:"sm",onClick:()=>u(!0),disabled:d,className:"text-xs text-slate-500",children:"Skip for now"}),g.jsx(wt,{type:"button",variant:"primary",size:"md",onClick:()=>u(!1),isLoading:d,children:"Save & Continue to Dashboard"})]})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="169",dh=0,Fo=1,uh=2,dc=1,hh=2,hn=3,Ln=0,Nt=1,pn=2,Nn=0,Mi=1,Oo=2,ko=3,Bo=4,fh=5,Yn=100,ph=101,mh=102,gh=103,xh=104,_h=200,vh=201,yh=202,Sh=203,qr=204,Yr=205,bh=206,Mh=207,Eh=208,wh=209,Th=210,Ah=211,Ch=212,Rh=213,Ph=214,$r=0,Kr=1,Zr=2,Ci=3,Jr=4,Qr=5,ea=6,ta=7,uc=0,Nh=1,Dh=2,Dn=0,Lh=1,Ih=2,Uh=3,Fh=4,Oh=5,kh=6,Bh=7,hc=300,Ri=301,Pi=302,na=303,ia=304,Zs=306,sa=1e3,$n=1001,ra=1002,Gt=1003,zh=1004,cs=1005,$t=1006,hr=1007,Kn=1008,vn=1009,fc=1010,pc=1011,Ji=1012,Wa=1013,Zn=1014,gn=1015,Qi=1016,Xa=1017,qa=1018,Ni=1020,mc=35902,gc=1021,xc=1022,Zt=1023,_c=1024,vc=1025,Ei=1026,Di=1027,yc=1028,Ya=1029,Sc=1030,$a=1031,Ka=1033,Ls=33776,Is=33777,Us=33778,Fs=33779,aa=35840,oa=35841,la=35842,ca=35843,da=36196,ua=37492,ha=37496,fa=37808,pa=37809,ma=37810,ga=37811,xa=37812,_a=37813,va=37814,ya=37815,Sa=37816,ba=37817,Ma=37818,Ea=37819,wa=37820,Ta=37821,Os=36492,Aa=36494,Ca=36495,bc=36283,Ra=36284,Pa=36285,Na=36286,Gh=3200,Hh=3201,Mc=0,Vh=1,Pn="",en="srgb",Fn="srgb-linear",Za="display-p3",Js="display-p3-linear",zs="linear",st="srgb",Gs="rec709",Hs="p3",ni=7680,zo=519,jh=512,Wh=513,Xh=514,Ec=515,qh=516,Yh=517,$h=518,Kh=519,Go=35044,Ho="300 es",xn=2e3,Vs=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,Da=180/Math.PI;function es(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function pr(i,e,t){return(1-t)*i+t*e}function Vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,s,r,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],m=n[7],u=n[2],p=n[5],_=n[8],y=s[0],f=s[3],h=s[6],w=s[1],v=s[4],b=s[7],P=s[2],A=s[5],T=s[8];return r[0]=a*y+o*w+l*P,r[3]=a*f+o*v+l*A,r[6]=a*h+o*b+l*T,r[1]=c*y+d*w+m*P,r[4]=c*f+d*v+m*A,r[7]=c*h+d*b+m*T,r[2]=u*y+p*w+_*P,r[5]=u*f+p*v+_*A,r[8]=u*h+p*b+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=d*a-o*c,u=o*l-d*r,p=c*r-a*l,_=t*m+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=m*y,e[1]=(s*c-d*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mr.makeScale(e,t)),this}rotate(e){return this.premultiply(mr.makeRotation(-e)),this}translate(e,t){return this.premultiply(mr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new Oe;function wc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){const i=js("canvas");return i.style.display="block",i}const Vo={};function ks(i){i in Vo||(Vo[i]=!0)}function Qh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ef(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jo=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wo=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ji={[Fn]:{transfer:zs,primaries:Gs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[en]:{transfer:st,primaries:Gs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Js]:{transfer:zs,primaries:Hs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Wo),fromReference:i=>i.applyMatrix3(jo)},[Za]:{transfer:st,primaries:Hs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wo),fromReference:i=>i.applyMatrix3(jo).convertLinearToSRGB()}},nf=new Set([Fn,Js]),Ze={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ji[e].toReference,s=ji[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ji[i].primaries},getTransfer:function(i){return i===Pn?zs:ji[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ji[e].luminanceCoefficients)}};function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ii;class sf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=js("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return e}}let rf=0;class Tc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xr(s[a].image)):r.push(xr(s[a]))}else r=xr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:{}}let af=0;class Dt extends Oi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=$n,s=$n,r=$t,a=Kn,o=Zt,l=vn,c=Dt.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=es(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=hc;Dt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],m=l[8],u=l[1],p=l[5],_=l[9],y=l[2],f=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(m-y)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(m+y)<.1&&Math.abs(_+f)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(p+1)/2,P=(h+1)/2,A=(d+u)/4,T=(m+y)/4,R=(_+f)/4;return v>b&&v>P?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=T/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=R/r),this.set(n,s,r,t),this}let w=Math.sqrt((f-_)*(f-_)+(m-y)*(m-y)+(u-d)*(u-d));return Math.abs(w)<.001&&(w=1),this.x=(f-_)/w,this.y=(m-y)/w,this.z=(u-d)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends of{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ac extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lf extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],m=n[s+3];const u=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=m;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(m!==y||l!==u||c!==p||d!==_){let f=1-o;const h=l*u+c*p+d*_+m*y,w=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,h*w);f=Math.sin(f*A)/P,o=Math.sin(o*A)/P}const b=o*w;if(l=l*f+u*b,c=c*f+p*b,d=d*f+_*b,m=m*f+y*b,f===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+m*m);l*=P,c*=P,d*=P,m*=P}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],m=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+d*m+l*p-c*u,e[t+1]=l*_+d*u+c*m-o*p,e[t+2]=c*_+d*p+o*u-l*m,e[t+3]=d*_-o*m-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),m=o(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*d*m+c*p*_,this._y=c*p*m-u*d*_,this._z=c*d*_+u*p*m,this._w=c*d*m-u*p*_;break;case"YXZ":this._x=u*d*m+c*p*_,this._y=c*p*m-u*d*_,this._z=c*d*_-u*p*m,this._w=c*d*m+u*p*_;break;case"ZXY":this._x=u*d*m-c*p*_,this._y=c*p*m+u*d*_,this._z=c*d*_+u*p*m,this._w=c*d*m-u*p*_;break;case"ZYX":this._x=u*d*m-c*p*_,this._y=c*p*m+u*d*_,this._z=c*d*_-u*p*m,this._w=c*d*m+u*p*_;break;case"YZX":this._x=u*d*m+c*p*_,this._y=c*p*m+u*d*_,this._z=c*d*_-u*p*m,this._w=c*d*m-u*p*_;break;case"XZY":this._x=u*d*m-c*p*_,this._y=c*p*m-u*d*_,this._z=c*d*_+u*p*m,this._w=c*d*m+u*p*_;break;default:}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],m=t[10],u=n+o+m;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>m){const p=2*Math.sqrt(1+n-o-m);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>m){const p=2*Math.sqrt(1+o-n-m);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),m=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*m+this._w*u,this._x=n*m+this._x*u,this._y=s*m+this._y*u,this._z=r*m+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*d,this.y=n+l*d+o*c-r*m,this.z=s+l*m+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new F,Xo=new ts;class ns{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),us.subVectors(this.max,Wi),si.subVectors(e.a,Wi),ri.subVectors(e.b,Wi),ai.subVectors(e.c,Wi),En.subVectors(ri,si),wn.subVectors(ai,ri),Bn.subVectors(si,ai);let t=[0,-En.z,En.y,0,-wn.z,wn.y,0,-Bn.z,Bn.y,En.z,0,-En.x,wn.z,0,-wn.x,Bn.z,0,-Bn.x,-En.y,En.x,0,-wn.y,wn.x,0,-Bn.y,Bn.x,0];return!vr(t,si,ri,ai,us)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,si,ri,ai,us))?!1:(hs.crossVectors(En,wn),t=[hs.x,hs.y,hs.z],vr(t,si,ri,ai,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new F,new F,new F,new F,new F,new F,new F,new F],Xt=new F,ds=new ns,si=new F,ri=new F,ai=new F,En=new F,wn=new F,Bn=new F,Wi=new F,us=new F,hs=new F,zn=new F;function vr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zn.fromArray(i,r);const o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const cf=new ns,Xi=new F,yr=new F;class Qs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(yr)),this.expandByPoint(Xi.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new F,Sr=new F,fs=new F,Tn=new F,br=new F,ps=new F,Mr=new F;class Cc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sr.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Sr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(fs),o=Tn.dot(this.direction),l=-Tn.dot(fs),c=Tn.lengthSq(),d=Math.abs(1-a*a);let m,u,p,_;if(d>0)if(m=a*l-o,u=a*o-l,_=r*d,m>=0)if(u>=-_)if(u<=_){const y=1/d;m*=y,u*=y,p=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u<=-_?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c):u<=_?(m=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Sr).addScaledVector(fs,u),p}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-u.z)*m,l=(e.max.z-u.z)*m):(o=(e.max.z-u.z)*m,l=(e.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,s,r){br.subVectors(t,e),ps.subVectors(n,e),Mr.crossVectors(br,ps);let a=this.direction.dot(Mr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const l=o*this.direction.dot(ps.crossVectors(Tn,ps));if(l<0)return null;const c=o*this.direction.dot(br.cross(Tn));if(c<0||l+c>a)return null;const d=-o*Tn.dot(Mr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,s,r,a,o,l,c,d,m,u,p,_,y,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,m,u,p,_,y,f)}set(e,t,n,s,r,a,o,l,c,d,m,u,p,_,y,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=m,h[14]=u,h[3]=p,h[7]=_,h[11]=y,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),a=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const u=a*d,p=a*m,_=o*d,y=o*m;t[0]=l*d,t[4]=-l*m,t[8]=c,t[1]=p+_*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*m,_=c*d,y=c*m;t[0]=u+y*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*m,t[5]=a*d,t[9]=-o,t[2]=p*o-_,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*m,_=c*d,y=c*m;t[0]=u-y*o,t[4]=-a*m,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*d,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*m,_=o*d,y=o*m;t[0]=l*d,t[4]=_*c-p,t[8]=u*c+y,t[1]=l*m,t[5]=y*c+u,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*d,t[4]=y-u*m,t[8]=_*m+p,t[1]=m,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*m+_,t[10]=u-y*m}else if(e.order==="XZY"){const u=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*d,t[4]=-m,t[8]=c*d,t[1]=u*m+y,t[5]=a*d,t[9]=p*m-_,t[2]=_*m-p,t[6]=o*d,t[10]=y*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,uf)}lookAt(e,t,n){const s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),An.crossVectors(n,Ut),An.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),An.crossVectors(n,Ut)),An.normalize(),ms.crossVectors(Ut,An),s[0]=An.x,s[4]=ms.x,s[8]=Ut.x,s[1]=An.y,s[5]=ms.y,s[9]=Ut.y,s[2]=An.z,s[6]=ms.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],m=n[5],u=n[9],p=n[13],_=n[2],y=n[6],f=n[10],h=n[14],w=n[3],v=n[7],b=n[11],P=n[15],A=s[0],T=s[4],R=s[8],W=s[12],x=s[1],E=s[5],k=s[9],j=s[13],X=s[2],K=s[6],V=s[10],ee=s[14],B=s[3],se=s[7],oe=s[11],ce=s[15];return r[0]=a*A+o*x+l*X+c*B,r[4]=a*T+o*E+l*K+c*se,r[8]=a*R+o*k+l*V+c*oe,r[12]=a*W+o*j+l*ee+c*ce,r[1]=d*A+m*x+u*X+p*B,r[5]=d*T+m*E+u*K+p*se,r[9]=d*R+m*k+u*V+p*oe,r[13]=d*W+m*j+u*ee+p*ce,r[2]=_*A+y*x+f*X+h*B,r[6]=_*T+y*E+f*K+h*se,r[10]=_*R+y*k+f*V+h*oe,r[14]=_*W+y*j+f*ee+h*ce,r[3]=w*A+v*x+b*X+P*B,r[7]=w*T+v*E+b*K+P*se,r[11]=w*R+v*k+b*V+P*oe,r[15]=w*W+v*j+b*ee+P*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],m=e[6],u=e[10],p=e[14],_=e[3],y=e[7],f=e[11],h=e[15];return _*(+r*l*m-s*c*m-r*o*u+n*c*u+s*o*p-n*l*p)+y*(+t*l*p-t*c*u+r*a*u-s*a*p+s*c*d-r*l*d)+f*(+t*c*m-t*o*p-r*a*m+n*a*p+r*o*d-n*c*d)+h*(-s*o*d-t*l*m+t*o*u+s*a*m-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=e[9],u=e[10],p=e[11],_=e[12],y=e[13],f=e[14],h=e[15],w=m*f*c-y*u*c+y*l*p-o*f*p-m*l*h+o*u*h,v=_*u*c-d*f*c-_*l*p+a*f*p+d*l*h-a*u*h,b=d*y*c-_*m*c+_*o*p-a*y*p-d*o*h+a*m*h,P=_*m*l-d*y*l-_*o*u+a*y*u+d*o*f-a*m*f,A=t*w+n*v+s*b+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=w*T,e[1]=(y*u*r-m*f*r-y*s*p+n*f*p+m*s*h-n*u*h)*T,e[2]=(o*f*r-y*l*r+y*s*c-n*f*c-o*s*h+n*l*h)*T,e[3]=(m*l*r-o*u*r-m*s*c+n*u*c+o*s*p-n*l*p)*T,e[4]=v*T,e[5]=(d*f*r-_*u*r+_*s*p-t*f*p-d*s*h+t*u*h)*T,e[6]=(_*l*r-a*f*r-_*s*c+t*f*c+a*s*h-t*l*h)*T,e[7]=(a*u*r-d*l*r+d*s*c-t*u*c-a*s*p+t*l*p)*T,e[8]=b*T,e[9]=(_*m*r-d*y*r-_*n*p+t*y*p+d*n*h-t*m*h)*T,e[10]=(a*y*r-_*o*r+_*n*c-t*y*c-a*n*h+t*o*h)*T,e[11]=(d*o*r-a*m*r-d*n*c+t*m*c+a*n*p-t*o*p)*T,e[12]=P*T,e[13]=(d*y*s-_*m*s+_*n*u-t*y*u-d*n*f+t*m*f)*T,e[14]=(_*o*s-a*y*s-_*n*l+t*y*l+a*n*f-t*o*f)*T,e[15]=(a*m*s-d*o*s+d*n*l-t*m*l-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,m=o+o,u=r*c,p=r*d,_=r*m,y=a*d,f=a*m,h=o*m,w=l*c,v=l*d,b=l*m,P=n.x,A=n.y,T=n.z;return s[0]=(1-(y+h))*P,s[1]=(p+b)*P,s[2]=(_-v)*P,s[3]=0,s[4]=(p-b)*A,s[5]=(1-(u+h))*A,s[6]=(f+w)*A,s[7]=0,s[8]=(_+v)*T,s[9]=(f-w)*T,s[10]=(1-(u+y))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const a=oi.set(s[4],s[5],s[6]).length(),o=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qt.copy(this);const c=1/r,d=1/a,m=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=m,qt.elements[9]*=m,qt.elements[10]*=m,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=xn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),m=(t+e)/(t-e),u=(n+s)/(n-s);let p,_;if(o===xn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Vs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=xn){const l=this.elements,c=1/(t-e),d=1/(n-s),m=1/(a-r),u=(t+e)*c,p=(n+s)*d;let _,y;if(o===xn)_=(a+r)*m,y=-2*m;else if(o===Vs)_=r*m,y=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oi=new F,qt=new rt,df=new F(0,0,0),uf=new F(1,1,1),An=new F,ms=new F,Ut=new F,qo=new rt,Yo=new ts;class sn{constructor(e=0,t=0,n=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],m=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yo.setFromEuler(this),this.setFromQuaternion(Yo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hf=0;const $o=new F,li=new ts,cn=new rt,gs=new F,qi=new F,ff=new F,pf=new ts,Ko=new F(1,0,0),Zo=new F(0,1,0),Jo=new F(0,0,1),Qo={type:"added"},mf={type:"removed"},ci={type:"childadded",child:null},Er={type:"childremoved",child:null};class mt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new F,t=new sn,n=new ts,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Oe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Ko,e)}rotateY(e){return this.rotateOnAxis(Zo,e)}rotateZ(e){return this.rotateOnAxis(Jo,e)}translateOnAxis(e,t){return $o.copy(e).applyQuaternion(this.quaternion),this.position.add($o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ko,e)}translateY(e){return this.translateOnAxis(Zo,e)}translateZ(e){return this.translateOnAxis(Jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(qi,gs,this.up):cn.lookAt(gs,qi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(cn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qo),ci.child=e,this.dispatchEvent(ci),ci.child=null),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mf),Er.child=e,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qo),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),m=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new F(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new F,dn=new F,wr=new F,un=new F,di=new F,ui=new F,el=new F,Tr=new F,Ar=new F,Cr=new F,Rr=new Qe,Pr=new Qe,Nr=new Qe;class Kt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yt.subVectors(e,t),s.cross(Yt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yt.subVectors(s,t),dn.subVectors(n,t),wr.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(dn),l=Yt.dot(wr),c=dn.dot(dn),d=dn.dot(wr),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;const u=1/m,p=(c*l-o*d)*u,_=(a*d-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Rr.setScalar(0),Pr.setScalar(0),Nr.setScalar(0),Rr.fromBufferAttribute(e,t),Pr.fromBufferAttribute(e,n),Nr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rr,r.x),a.addScaledVector(Pr,r.y),a.addScaledVector(Nr,r.z),a}static isFrontFacing(e,t,n,s){return Yt.subVectors(n,t),dn.subVectors(e,t),Yt.cross(dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Yt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;di.subVectors(s,n),ui.subVectors(r,n),Tr.subVectors(e,n);const l=di.dot(Tr),c=ui.dot(Tr);if(l<=0&&c<=0)return t.copy(n);Ar.subVectors(e,s);const d=di.dot(Ar),m=ui.dot(Ar);if(d>=0&&m<=d)return t.copy(s);const u=l*m-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(di,a);Cr.subVectors(e,r);const p=di.dot(Cr),_=ui.dot(Cr);if(_>=0&&p<=_)return t.copy(r);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ui,o);const f=d*_-p*m;if(f<=0&&m-d>=0&&p-_>=0)return el.subVectors(r,s),o=(m-d)/(m-d+(p-_)),t.copy(s).addScaledVector(el,o);const h=1/(f+y+u);return a=y*h,o=u*h,t.copy(n).addScaledVector(di,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Dr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Zh(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Dr(a,r,e+1/3),this.g=Dr(a,r,e),this.b=Dr(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=Pc[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Ze.fromWorkingColorSpace(_t.copy(this),e),Math.round(Rt(_t.r*255,0,255))*65536+Math.round(Rt(_t.g*255,0,255))*256+Math.round(Rt(_t.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,s=_t.g,r=_t.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=d<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=en){Ze.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,s=_t.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(xs);const n=pr(Cn.h,xs.h,t),s=pr(Cn.s,xs.s,t),r=pr(Cn.l,xs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new qe;qe.NAMES=Pc;let gf=0;class ki extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Mi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0)continue;const s=this[t];s!==void 0&&(s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){}}class Nc extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new F,_s=new Ve;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}}class Dc extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lc extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xf=0;const Bt=new rt,Lr=new mt,hi=new F,Ft=new ns,Yi=new ns,ht=new F;class jt extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wc(e)?Lc:Dc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Lr.lookAt(e),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Ft.min,Yi.min),Ft.expandByPoint(ht),ht.addVectors(Ft.max,Yi.max),Ft.expandByPoint(ht)):(Ft.expandByPoint(Yi.min),Ft.expandByPoint(Yi.max))}Ft.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ht.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),ht.add(hi)),s=Math.max(s,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new F,l[R]=new F;const c=new F,d=new F,m=new F,u=new Ve,p=new Ve,_=new Ve,y=new F,f=new F;function h(R,W,x){c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,W),m.fromBufferAttribute(n,x),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,W),_.fromBufferAttribute(r,x),d.sub(c),m.sub(c),p.sub(u),_.sub(u);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(m,-p.y).multiplyScalar(E),f.copy(m).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(E),o[R].add(y),o[W].add(y),o[x].add(y),l[R].add(f),l[W].add(f),l[x].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,W=w.length;R<W;++R){const x=w[R],E=x.start,k=x.count;for(let j=E,X=E+k;j<X;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new F,b=new F,P=new F,A=new F;function T(R){P.fromBufferAttribute(s,R),A.copy(P);const W=o[R];v.copy(W),v.sub(P.multiplyScalar(P.dot(W))).normalize(),b.crossVectors(A,W);const E=b.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,E)}for(let R=0,W=w.length;R<W;++R){const x=w[R],E=x.start,k=x.count;for(let j=E,X=E+k;j<X;j+=3)T(e.getX(j+0)),T(e.getX(j+1)),T(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,d=new F,m=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),y=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,m=o.normalized,u=new c.constructor(l.length*d);let p=0,_=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let h=0;h<d;h++)u[_++]=c[p++]}return new Jt(u,d,m)}if(this.index===null)return this;const t=new jt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,m=c.length;d<m;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let m=0,u=c.length;m<u;m++){const p=c[m];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],m=r[c];for(let u=0,p=m.length;u<p;u++)d.push(m[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tl=new rt,Gn=new Cc,vs=new Qs,nl=new F,ys=new F,Ss=new F,bs=new F,Ir=new F,Ms=new F,il=new F,Es=new F;class nn extends mt{constructor(e=new jt,t=new Nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],m=r[l];d!==0&&(Ir.fromBufferAttribute(m,e),a?Ms.addScaledVector(Ir,d):Ms.addScaledVector(Ir.sub(t),d))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),Gn.copy(e.ray).recast(e.near),!(vs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(vs,nl)===null||Gn.origin.distanceToSquared(nl)>(e.far-e.near)**2))&&(tl.copy(r).invert(),Gn.copy(e.ray).applyMatrix4(tl),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const f=u[_],h=a[f.materialIndex],w=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let b=w,P=v;b<P;b+=3){const A=o.getX(b),T=o.getX(b+1),R=o.getX(b+2);s=ws(this,h,e,n,c,d,m,A,T,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let f=_,h=y;f<h;f+=3){const w=o.getX(f),v=o.getX(f+1),b=o.getX(f+2);s=ws(this,a,e,n,c,d,m,w,v,b),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const f=u[_],h=a[f.materialIndex],w=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let b=w,P=v;b<P;b+=3){const A=b,T=b+1,R=b+2;s=ws(this,h,e,n,c,d,m,A,T,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let f=_,h=y;f<h;f+=3){const w=f,v=f+1,b=f+2;s=ws(this,a,e,n,c,d,m,w,v,b),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function _f(i,e,t,n,s,r,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ln,o),l===null)return null;Es.copy(o),Es.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Es);return c<t.near||c>t.far?null:{distance:c,point:Es.clone(),object:i}}function ws(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ys),i.getVertexPosition(l,Ss),i.getVertexPosition(c,bs);const d=_f(i,e,t,n,ys,Ss,bs,il);if(d){const m=new F;Kt.getBarycoord(il,ys,Ss,bs,m),s&&(d.uv=Kt.getInterpolatedAttribute(s,o,l,c,m,new Ve)),r&&(d.uv1=Kt.getInterpolatedAttribute(r,o,l,c,m,new Ve)),a&&(d.normal=Kt.getInterpolatedAttribute(a,o,l,c,m,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};Kt.getNormal(ys,Ss,bs,u.normal),d.face=u,d.barycoord=m}return d}class is extends jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],m=[];let u=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(m,2));function _(y,f,h,w,v,b,P,A,T,R,W){const x=b/T,E=P/R,k=b/2,j=P/2,X=A/2,K=T+1,V=R+1;let ee=0,B=0;const se=new F;for(let oe=0;oe<V;oe++){const ce=oe*E-j;for(let ke=0;ke<K;ke++){const ze=ke*x-k;se[y]=ze*w,se[f]=ce*v,se[h]=X,c.push(se.x,se.y,se.z),se[y]=0,se[f]=0,se[h]=A>0?1:-1,d.push(se.x,se.y,se.z),m.push(ke/T),m.push(1-oe/R),ee+=1}}for(let oe=0;oe<R;oe++)for(let ce=0;ce<T;ce++){const ke=u+ce+K*oe,ze=u+ce+K*(oe+1),$=u+(ce+1)+K*(oe+1),O=u+(ce+1)+K*oe;l.push(ke,ze,O),l.push(ze,$,O),B+=6}o.addGroup(p,B,W),p+=B,u+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?e[t][n]=null:e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const s in n)e[s]=n[s]}return e}function vf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ic(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const yf={clone:Li,merge:Et};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uc extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new F,sl=new Ve,rl=new Ve;class Ot extends Uc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,sl,rl),t.subVectors(rl,sl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Mf extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ot(fi,pi,e,t);s.layers=this.layers,this.add(s);const r=new Ot(fi,pi,e,t);r.layers=this.layers,this.add(r);const a=new Ot(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new Ot(fi,pi,e,t);o.layers=this.layers,this.add(o);const l=new Ot(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new Ot(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(m,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Fc extends Dt{constructor(e,t,n,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ef extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new is(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Nn});r.uniforms.tEquirect.value=t;const a=new nn(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=$t),new Mf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Ur=new F,wf=new F,Tf=new Oe;class Wn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ur.subVectors(n,t).cross(wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ur),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tf.getNormalMatrix(e),s=this.coplanarPoint(Ur).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Qs,Ts=new F;class Ja{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],m=s[6],u=s[7],p=s[8],_=s[9],y=s[10],f=s[11],h=s[12],w=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,f-p,b-h).normalize(),n[1].setComponents(l+r,u+c,f+p,b+h).normalize(),n[2].setComponents(l+a,u+d,f+_,b+w).normalize(),n[3].setComponents(l-a,u-d,f-_,b-w).normalize(),n[4].setComponents(l-o,u-m,f-y,b-v).normalize(),t===xn)n[5].setComponents(l+o,u+m,f+y,b+v).normalize();else if(t===Vs)n[5].setComponents(o,m,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ts.x=s.normal.x>0?e.max.x:e.min.x,Ts.y=s.normal.y>0?e.max.y:e.min.y,Ts.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Af(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){const d=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,d);else{m.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<m.length;p++){const _=m[u],y=m[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,m[u]=y)}m.length=u+1;for(let p=0,_=m.length;p<_;p++){const y=m[p];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class er extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,m=e/o,u=t/l,p=[],_=[],y=[],f=[];for(let h=0;h<d;h++){const w=h*u-a;for(let v=0;v<c;v++){const b=v*m-r;_.push(b,-w,0),y.push(0,0,1),f.push(v/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){const v=w+c*h,b=w+c*(h+1),P=w+1+c*(h+1),A=w+1+c*h;p.push(v,b,A),p.push(b,P,A)}this.setIndex(p),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qf=`vec3 transformedNormal = objectNormal;
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
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",rp=`
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
}`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
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
}`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
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
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
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
#endif`,Tp=`struct PhysicalMaterial {
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
}`,Ap=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
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
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
}`,Um=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,$m=`#define PHONG
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
}`,Km=`#define PHONG
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
}`,Zm=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,Qm=`#define TOON
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
}`,eg=`#define TOON
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
}`,tg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Cf,alphahash_pars_fragment:Rf,alphamap_fragment:Pf,alphamap_pars_fragment:Nf,alphatest_fragment:Df,alphatest_pars_fragment:Lf,aomap_fragment:If,aomap_pars_fragment:Uf,batching_pars_vertex:Ff,batching_vertex:Of,begin_vertex:kf,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:Gf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:$f,color_vertex:Kf,common:Zf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:ep,displacementmap_vertex:tp,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:sp,colorspace_pars_fragment:rp,envmap_fragment:ap,envmap_common_pars_fragment:op,envmap_pars_fragment:lp,envmap_pars_vertex:cp,envmap_physical_pars_fragment:yp,envmap_vertex:dp,fog_vertex:up,fog_pars_vertex:hp,fog_fragment:fp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_pars_fragment:gp,lights_lambert_fragment:xp,lights_lambert_pars_fragment:_p,lights_pars_begin:vp,lights_toon_fragment:Sp,lights_toon_pars_fragment:bp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Ep,lights_physical_fragment:wp,lights_physical_pars_fragment:Tp,lights_fragment_begin:Ap,lights_fragment_maps:Cp,lights_fragment_end:Rp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Lp,map_fragment:Ip,map_pars_fragment:Up,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Bp,morphinstance_vertex:zp,morphcolor_vertex:Gp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Vp,morphtarget_vertex:jp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:$p,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:am,roughnessmap_fragment:om,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:dm,shadowmap_vertex:um,shadowmask_pars_fragment:hm,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:xm,specularmap_pars_fragment:_m,tonemapping_fragment:vm,tonemapping_pars_fragment:ym,transmission_fragment:Sm,transmission_pars_fragment:bm,uv_pars_fragment:Mm,uv_pars_vertex:Em,uv_vertex:wm,worldpos_vertex:Tm,background_vert:Am,background_frag:Cm,backgroundCube_vert:Rm,backgroundCube_frag:Pm,cube_vert:Nm,cube_frag:Dm,depth_vert:Lm,depth_frag:Im,distanceRGBA_vert:Um,distanceRGBA_frag:Fm,equirect_vert:Om,equirect_frag:km,linedashed_vert:Bm,linedashed_frag:zm,meshbasic_vert:Gm,meshbasic_frag:Hm,meshlambert_vert:Vm,meshlambert_frag:jm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:$m,meshphong_frag:Km,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:Qm,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:ag},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},tn={basic:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Et([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Et([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Et([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Et([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Et([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Et([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Et([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Et([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};tn.physical={uniforms:Et([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const As={r:0,b:0,g:0},Vn=new sn,og=new rt;function lg(i,e,t,n,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,d,m=null,u=0,p=null;function _(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function y(w){let v=!1;const b=_(w);b===null?h(o,l):b&&b.isColor&&(h(b,1),v=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(w,v){const b=_(v);b&&(b.isCubeTexture||b.mapping===Zs)?(d===void 0&&(d=new nn(new is(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Li(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Vn.copy(v.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(Vn)),d.material.toneMapped=Ze.getTransfer(b.colorSpace)!==st,(m!==b||u!==b.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,m=b,u=b.version,p=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new nn(new er(2,2),new In({name:"BackgroundMaterial",uniforms:Li(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==st,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(m!==b||u!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,m=b,u=b.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function h(w,v){w.getRGB(As,Ic(i)),n.buffers.color.setClear(As.r,As.g,As.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(w,v=1){o.set(w),l=v,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,h(o,l)},render:y,addToRenderList:f}}function cg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(x,E,k,j,X){let K=!1;const V=m(j,k,E);r!==V&&(r=V,c(r.object)),K=p(x,j,k,X),K&&_(x,j,k,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(x,E,k,j),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function m(x,E,k){const j=k.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let K=X[E.id];K===void 0&&(K={},X[E.id]=K);let V=K[j];return V===void 0&&(V=u(l()),K[j]=V),V}function u(x){const E=[],k=[],j=[];for(let X=0;X<t;X++)E[X]=0,k[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:j,object:x,attributes:{},index:null}}function p(x,E,k,j){const X=r.attributes,K=E.attributes;let V=0;const ee=k.getAttributes();for(const B in ee)if(ee[B].location>=0){const oe=X[B];let ce=K[B];if(ce===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),oe===void 0||oe.attribute!==ce||ce&&oe.data!==ce.data)return!0;V++}return r.attributesNum!==V||r.index!==j}function _(x,E,k,j){const X={},K=E.attributes;let V=0;const ee=k.getAttributes();for(const B in ee)if(ee[B].location>=0){let oe=K[B];oe===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor));const ce={};ce.attribute=oe,oe&&oe.data&&(ce.data=oe.data),X[B]=ce,V++}r.attributes=X,r.attributesNum=V,r.index=j}function y(){const x=r.newAttributes;for(let E=0,k=x.length;E<k;E++)x[E]=0}function f(x){h(x,0)}function h(x,E){const k=r.newAttributes,j=r.enabledAttributes,X=r.attributeDivisors;k[x]=1,j[x]===0&&(i.enableVertexAttribArray(x),j[x]=1),X[x]!==E&&(i.vertexAttribDivisor(x,E),X[x]=E)}function w(){const x=r.newAttributes,E=r.enabledAttributes;for(let k=0,j=E.length;k<j;k++)E[k]!==x[k]&&(i.disableVertexAttribArray(k),E[k]=0)}function v(x,E,k,j,X,K,V){V===!0?i.vertexAttribIPointer(x,E,k,X,K):i.vertexAttribPointer(x,E,k,j,X,K)}function b(x,E,k,j){y();const X=j.attributes,K=k.getAttributes(),V=E.defaultAttributeValues;for(const ee in K){const B=K[ee];if(B.location>=0){let se=X[ee];if(se===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){const oe=se.normalized,ce=se.itemSize,ke=e.get(se);if(ke===void 0)continue;const ze=ke.buffer,$=ke.type,O=ke.bytesPerElement,L=$===i.INT||$===i.UNSIGNED_INT||se.gpuType===Wa;if(se.isInterleavedBufferAttribute){const Y=se.data,te=Y.stride,ge=se.offset;if(Y.isInstancedInterleavedBuffer){for(let Se=0;Se<B.locationSize;Se++)h(B.location+Se,Y.meshPerAttribute);x.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Se=0;Se<B.locationSize;Se++)f(B.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Se=0;Se<B.locationSize;Se++)v(B.location+Se,ce/B.locationSize,$,oe,te*O,(ge+ce/B.locationSize*Se)*O,L)}else{if(se.isInstancedBufferAttribute){for(let Y=0;Y<B.locationSize;Y++)h(B.location+Y,se.meshPerAttribute);x.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Y=0;Y<B.locationSize;Y++)f(B.location+Y);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Y=0;Y<B.locationSize;Y++)v(B.location+Y,ce/B.locationSize,$,oe,ce*O,ce/B.locationSize*Y*O,L)}}else if(V!==void 0){const oe=V[ee];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(B.location,oe);break;case 3:i.vertexAttrib3fv(B.location,oe);break;case 4:i.vertexAttrib4fv(B.location,oe);break;default:i.vertexAttrib1fv(B.location,oe)}}}}w()}function P(){R();for(const x in n){const E=n[x];for(const k in E){const j=E[k];for(const X in j)d(j[X].object),delete j[X];delete E[k]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const E=n[x.id];for(const k in E){const j=E[k];for(const X in j)d(j[X].object),delete j[X];delete E[k]}delete n[x.id]}function T(x){for(const E in n){const k=n[E];if(k[x.id]===void 0)continue;const j=k[x.id];for(const X in j)d(j[X].object),delete j[X];delete k[x.id]}}function R(){W(),a=!0,r!==s&&(r=s,c(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:W,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:f,disableUnusedAttributes:w}}function dg(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,m){m!==0&&(i.drawArraysInstanced(n,c,d,m),t.update(d,n,m))}function o(c,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,m);let p=0;for(let _=0;_<m;_++)p+=d[_];t.update(p,n,1)}function l(c,d,m,u){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],d[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,m);let _=0;for(let y=0;y<m;y++)_+=d[y];for(let y=0;y<u.length;y++)t.update(_,n,u[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ug(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Zt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==gn&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(c=d);const m=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:P,maxSamples:A}}function hg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Wn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){const p=m.length!==0||u||n!==0||s;return s=u,n=m.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){t=d(m,u,0)},this.setState=function(m,u,p){const _=m.clippingPlanes,y=m.clipIntersection,f=m.clipShadows,h=i.get(m);if(!s||_===null||_.length===0||r&&!f)r?d(null):c();else{const w=r?0:n,v=w*4;let b=h.clippingState||null;l.value=b,b=d(_,u,v,p);for(let P=0;P!==v;++P)b[P]=t[P];h.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,u,p,_){const y=m!==null?m.length:0;let f=null;if(y!==0){if(f=l.value,_!==!0||f===null){const h=p+y*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(f===null||f.length<h)&&(f=new Float32Array(h));for(let v=0,b=p;v!==y;++v,b+=4)a.copy(m[v]).applyMatrix4(w,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function fg(i){let e=new WeakMap;function t(a,o){return o===na?a.mapping=Ri:o===ia&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===na||o===ia)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ef(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class kc extends Uc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,al=[.125,.215,.35,.446,.526,.582],vi=20,Fr=new kc,ol=new qe;let Or=null,kr=0,Br=0,zr=!1;const Xn=(1+Math.sqrt(5))/2,mi=1/Xn,ll=[new F(-Xn,mi,0),new F(Xn,mi,0),new F(-mi,0,Xn),new F(mi,0,Xn),new F(0,Xn,-mi),new F(0,Xn,mi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Or=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Or,kr,Br),this._renderer.xr.enabled=zr,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Or=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Qi,format:Zt,colorSpace:Fn,depthBuffer:!1},s=dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pg(r)),this._blurMaterial=mg(r,e,t)}return s}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,n,s){const o=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,u=d.toneMapping;d.getClearColor(ol),d.toneMapping=Dn,d.autoClear=!1;const p=new Nc({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),_=new nn(new is,p);let y=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,y=!0):(p.color.copy(ol),y=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):w===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const v=this._cubeSize;Cs(s,w*v,h>2?v:0,v,v),d.setRenderTarget(s),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=u,d.autoClear=m,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ri||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new nn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ll[(s-r-1)%ll.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial,d=3,m=new nn(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),y=r/_,f=isFinite(r)?1+Math.floor(d*y):vi;f>vi;const h=[];let w=0;for(let T=0;T<vi;++T){const R=T/y,W=Math.exp(-R*R/2);h.push(W),T===0?w+=W:T<f&&(w+=2*W)}for(let T=0;T<h.length;T++)h[T]=h[T]/w;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=_,u.mipInt.value=v-n;const b=this._sizeLods[s],P=3*b*(s>v-_i?s-v+_i:0),A=4*(this._cubeSize-b);Cs(t,P,A,3*b,2*b),l.setRenderTarget(t),l.render(m,Fr)}}function pg(i){const e=[],t=[],n=[];let s=i;const r=i-_i+1+al.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-_i?l=al[a-i+_i-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,m=1+c,u=[d,d,m,d,m,m,d,d,m,m,d,m],p=6,_=6,y=3,f=2,h=1,w=new Float32Array(y*_*p),v=new Float32Array(f*_*p),b=new Float32Array(h*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,W=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];w.set(W,y*_*A),v.set(u,f*_*A);const x=[A,A,A,A,A,A];b.set(x,h*_*A)}const P=new jt;P.setAttribute("position",new Jt(w,y)),P.setAttribute("uv",new Jt(v,f)),P.setAttribute("faceIndex",new Jt(b,h)),e.push(P),s>_i&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dl(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mg(i,e,t){const n=new Float32Array(vi),s=new F(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ul(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function hl(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function gg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===na||l===ia,d=l===Ri||l===Pi;if(c||d){let m=e.get(o);const u=m!==void 0?m.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new cl(i)),m=c?t.fromEquirectangular(o,m):t.fromCubemap(o,m),m.texture.pmremVersion=o.pmremVersion,e.set(o,m),m.texture;if(m!==void 0)return m.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new cl(i)),m=c?t.fromEquirectangular(o):t.fromCubemap(o),m.texture.pmremVersion=o.pmremVersion,e.set(o,m),o.addEventListener("dispose",r),m.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _g(i,e,t,n){const s={},r=new WeakMap;function a(m){const u=m.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const y=u.morphAttributes[_];for(let f=0,h=y.length;f<h;f++)e.remove(y[f])}u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(m,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(m){const u=m.attributes;for(const _ in u)e.update(u[_],i.ARRAY_BUFFER);const p=m.morphAttributes;for(const _ in p){const y=p[_];for(let f=0,h=y.length;f<h;f++)e.update(y[f],i.ARRAY_BUFFER)}}function c(m){const u=[],p=m.index,_=m.attributes.position;let y=0;if(p!==null){const w=p.array;y=p.version;for(let v=0,b=w.length;v<b;v+=3){const P=w[v+0],A=w[v+1],T=w[v+2];u.push(P,A,A,T,T,P)}}else if(_!==void 0){const w=_.array;y=_.version;for(let v=0,b=w.length/3-1;v<b;v+=3){const P=v+0,A=v+1,T=v+2;u.push(P,A,A,T,T,P)}}else return;const f=new(wc(u)?Lc:Dc)(u,1);f.version=y;const h=r.get(m);h&&e.remove(h),r.set(m,f)}function d(m){const u=r.get(m);if(u){const p=m.index;p!==null&&u.version<p.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:d}}function vg(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*a),t.update(p,n,1)}function c(u,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,u*a,_),t.update(p,n,_))}function d(u,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,_);let f=0;for(let h=0;h<_;h++)f+=p[h];t.update(f,n,1)}function m(u,p,_,y){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u.length;h++)c(u[h]/a,p[h],y[h]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,y,0,_);let h=0;for(let w=0;w<_;w++)h+=p[w];for(let w=0;w<y.length;w++)t.update(h,n,y[w])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function yg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sg(i,e,t){const n=new WeakMap,s=new Qe;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==m){let W=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",W)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),y===!0&&(v=3);let b=o.attributes.position.count*v,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*P*4*m),T=new Ac(A,b,P,m);T.type=gn,T.needsUpdate=!0;const R=v*4;for(let x=0;x<m;x++){const E=f[x],k=h[x],j=w[x],X=b*P*4*x;for(let K=0;K<E.count;K++){const V=K*R;p===!0&&(s.fromBufferAttribute(E,K),A[X+V+0]=s.x,A[X+V+1]=s.y,A[X+V+2]=s.z,A[X+V+3]=0),_===!0&&(s.fromBufferAttribute(k,K),A[X+V+4]=s.x,A[X+V+5]=s.y,A[X+V+6]=s.z,A[X+V+7]=0),y===!0&&(s.fromBufferAttribute(j,K),A[X+V+8]=s.x,A[X+V+9]=s.y,A[X+V+10]=s.z,A[X+V+11]=j.itemSize===4?s.w:1)}}u={count:m,texture:T,size:new Ve(b,P)},n.set(o,u),o.addEventListener("dispose",W)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function bg(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,m=e.get(l,d);if(s.get(m)!==c&&(e.update(m),s.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return m}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Bc extends Dt{constructor(e,t,n,s,r,a,o,l,c,d=Ei){if(d!==Ei&&d!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ei&&(n=Zn),n===void 0&&d===Di&&(n=Ni),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zc=new Dt,fl=new Bc(1,1),Gc=new Ac,Hc=new lf,Vc=new Fc,pl=[],ml=[],gl=new Float32Array(16),xl=new Float32Array(9),_l=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=pl[s];if(r===void 0&&(r=new Float32Array(s),pl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tr(i,e){let t=ml[e];t===void 0&&(t=new Int32Array(e),ml[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ut(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ut(t,e)}}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ut(t,e)}}function Ag(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(dt(t,n))return;_l.set(n),i.uniformMatrix2fv(this.addr,!1,_l),ut(t,n)}}function Cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(dt(t,n))return;xl.set(n),i.uniformMatrix3fv(this.addr,!1,xl),ut(t,n)}}function Rg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(dt(t,n))return;gl.set(n),i.uniformMatrix4fv(this.addr,!1,gl),ut(t,n)}}function Pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ut(t,e)}}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ut(t,e)}}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ut(t,e)}}function Ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ut(t,e)}}function Fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ut(t,e)}}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ut(t,e)}}function kg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fl.compareFunction=Ec,r=fl):r=zc,t.setTexture2D(e||r,s)}function Bg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hc,s)}function zg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vc,s)}function Gg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gc,s)}function Hg(i){switch(i){case 5126:return Mg;case 35664:return Eg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Cg;case 35676:return Rg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ng;case 35668:case 35672:return Dg;case 35669:case 35673:return Lg;case 5125:return Ig;case 36294:return Ug;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Vg(i,e){i.uniform1fv(this.addr,e)}function jg(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function Wg(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function Xg(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function qg(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yg(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $g(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kg(i,e){i.uniform1iv(this.addr,e)}function Zg(i,e){i.uniform2iv(this.addr,e)}function Jg(i,e){i.uniform3iv(this.addr,e)}function Qg(i,e){i.uniform4iv(this.addr,e)}function ex(i,e){i.uniform1uiv(this.addr,e)}function tx(i,e){i.uniform2uiv(this.addr,e)}function nx(i,e){i.uniform3uiv(this.addr,e)}function ix(i,e){i.uniform4uiv(this.addr,e)}function sx(i,e,t){const n=this.cache,s=e.length,r=tr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||zc,r[a])}function rx(i,e,t){const n=this.cache,s=e.length,r=tr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hc,r[a])}function ax(i,e,t){const n=this.cache,s=e.length,r=tr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vc,r[a])}function ox(i,e,t){const n=this.cache,s=e.length,r=tr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Gc,r[a])}function lx(i){switch(i){case 5126:return Vg;case 35664:return jg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return $g;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return ox}}class cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hg(t.type)}}class dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lx(t.type)}}class ux{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function vl(i,e){i.seq.push(e),i.map[e.id]=e}function hx(i,e,t){const n=i.name,s=n.length;for(Gr.lastIndex=0;;){const r=Gr.exec(n),a=Gr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vl(t,c===void 0?new cx(o,i,e):new dx(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new ux(o),vl(t,m)),t=m}}}class Bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);hx(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function yl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const fx=37297;let px=0;function mx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function gx(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===Hs&&t===Gs?n="LinearDisplayP3ToLinearSRGB":e===Gs&&t===Hs&&(n="LinearSRGBToLinearDisplayP3"),i){case Fn:case Js:return[n,"LinearTransferOETF"];case en:case Za:return[n,"sRGBTransferOETF"];default:return[n,"LinearTransferOETF"]}}function Sl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+mx(i.getShaderSource(e),a)}else return s}function xx(i,e){const t=gx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _x(i,e){let t;switch(e){case Lh:t="Linear";break;case Ih:t="Reinhard";break;case Uh:t="Cineon";break;case Fh:t="ACESFilmic";break;case kh:t="AgX";break;case Bh:t="Neutral";break;case Oh:t="Custom";break;default:t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new F;function vx(){Ze.getLuminanceCoefficients(Rs);const i=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Sx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ki(i){return i!==""}function bl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(Mx,wx)}const Ex=new Map;function wx(i,e){let t=Fe[e];if(t===void 0){const n=Ex.get(e);if(n!==void 0)t=Fe[n];else throw new Error("Can not resolve #include <"+e+">")}return La(t)}const Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(Tx,Ax)}function Ax(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Pi:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Px(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Nx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uc:e="ENVMAP_BLENDING_MULTIPLY";break;case Nh:e="ENVMAP_BLENDING_MIX";break;case Dh:e="ENVMAP_BLENDING_ADD";break}return e}function Dx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Cx(t),c=Rx(t),d=Px(t),m=Nx(t),u=Dx(t),p=yx(t),_=Sx(r),y=s.createProgram();let f,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ki).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ki).join(`
`),h.length>0&&(h+=`
`)):(f=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),h=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Dn?_x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,xx("linearToOutputTexel",t.outputColorSpace),vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=La(a),a=bl(a,t),a=Ml(a,t),o=La(o),o=bl(o,t),o=Ml(o,t),a=El(a),o=El(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=w+f+a,b=w+h+o,P=yl(s,s.VERTEX_SHADER,v),A=yl(s,s.FRAGMENT_SHADER,b);s.attachShader(y,P),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(E){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(y).trim(),j=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(A).trim();let K=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,P,A);else{const ee=Sl(s,P,"vertex"),B=Sl(s,A,"fragment")}else k!==""||(j===""||X==="")&&(V=!1);V&&(E.diagnostics={runnable:K,programLog:k,vertexShader:{log:j,prefix:f},fragmentShader:{log:X,prefix:h}})}s.deleteShader(P),s.deleteShader(A),R=new Bs(s,y),W=bx(s,y)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,fx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=px++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=A,this}let Ix=0;class Ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fx(e),t.set(e,n)),n}}class Fx{constructor(e){this.id=Ix++,this.code=e,this.usedTimes=0}}function Ox(i,e,t,n,s,r,a){const o=new Rc,l=new Ux,c=new Set,d=[],m=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,p=s.vertexTextures;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function h(x,E,k,j,X){const K=j.fog,V=X.geometry,ee=x.isMeshStandardMaterial?j.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||ee),se=B&&B.mapping===Zs?B.image.height:null,oe=y[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),x.precision);const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ke=ce!==void 0?ce.length:0;let ze=0;V.morphAttributes.position!==void 0&&(ze=1),V.morphAttributes.normal!==void 0&&(ze=2),V.morphAttributes.color!==void 0&&(ze=3);let $,O,L,Y;if(oe){const At=tn[oe];$=At.vertexShader,O=At.fragmentShader}else $=x.vertexShader,O=x.fragmentShader,l.update(x),L=l.getVertexShaderID(x),Y=l.getFragmentShaderID(x);const te=i.getRenderTarget(),ge=X.isInstancedMesh===!0,Se=X.isBatchedMesh===!0,de=!!x.map,Ue=!!x.matcap,N=!!B,gt=!!x.aoMap,Ge=!!x.lightMap,We=!!x.bumpMap,Ce=!!x.normalMap,tt=!!x.displacementMap,Ne=!!x.emissiveMap,C=!!x.metalnessMap,S=!!x.roughnessMap,z=x.anisotropy>0,Z=x.clearcoat>0,ne=x.dispersion>0,J=x.iridescence>0,Ee=x.sheen>0,ue=x.transmission>0,xe=z&&!!x.anisotropyMap,Xe=Z&&!!x.clearcoatMap,re=Z&&!!x.clearcoatNormalMap,_e=Z&&!!x.clearcoatRoughnessMap,Re=J&&!!x.iridescenceMap,Pe=J&&!!x.iridescenceThicknessMap,ve=Ee&&!!x.sheenColorMap,He=Ee&&!!x.sheenRoughnessMap,De=!!x.specularMap,et=!!x.specularColorMap,U=!!x.specularIntensityMap,pe=ue&&!!x.transmissionMap,q=ue&&!!x.thicknessMap,Q=!!x.gradientMap,he=!!x.alphaMap,me=x.alphaTest>0,je=!!x.alphaHash,lt=!!x.extensions;let Tt=Dn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const Ye={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:$,fragmentShader:O,defines:x.defines,customVertexShaderID:L,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Se,batchingColor:Se&&X._colorsTexture!==null,instancing:ge,instancingColor:ge&&X.instanceColor!==null,instancingMorph:ge&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Fn,alphaToCoverage:!!x.alphaToCoverage,map:de,matcap:Ue,envMap:N,envMapMode:N&&B.mapping,envMapCubeUVHeight:se,aoMap:gt,lightMap:Ge,bumpMap:We,normalMap:Ce,displacementMap:p&&tt,emissiveMap:Ne,normalMapObjectSpace:Ce&&x.normalMapType===Vh,normalMapTangentSpace:Ce&&x.normalMapType===Mc,metalnessMap:C,roughnessMap:S,anisotropy:z,anisotropyMap:xe,clearcoat:Z,clearcoatMap:Xe,clearcoatNormalMap:re,clearcoatRoughnessMap:_e,dispersion:ne,iridescence:J,iridescenceMap:Re,iridescenceThicknessMap:Pe,sheen:Ee,sheenColorMap:ve,sheenRoughnessMap:He,specularMap:De,specularColorMap:et,specularIntensityMap:U,transmission:ue,transmissionMap:pe,thicknessMap:q,gradientMap:Q,opaque:x.transparent===!1&&x.blending===Mi&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:me,alphaHash:je,combine:x.combine,mapUv:de&&f(x.map.channel),aoMapUv:gt&&f(x.aoMap.channel),lightMapUv:Ge&&f(x.lightMap.channel),bumpMapUv:We&&f(x.bumpMap.channel),normalMapUv:Ce&&f(x.normalMap.channel),displacementMapUv:tt&&f(x.displacementMap.channel),emissiveMapUv:Ne&&f(x.emissiveMap.channel),metalnessMapUv:C&&f(x.metalnessMap.channel),roughnessMapUv:S&&f(x.roughnessMap.channel),anisotropyMapUv:xe&&f(x.anisotropyMap.channel),clearcoatMapUv:Xe&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&f(x.sheenRoughnessMap.channel),specularMapUv:De&&f(x.specularMap.channel),specularColorMapUv:et&&f(x.specularColorMap.channel),specularIntensityMapUv:U&&f(x.specularIntensityMap.channel),transmissionMapUv:pe&&f(x.transmissionMap.channel),thicknessMapUv:q&&f(x.thicknessMap.channel),alphaMapUv:he&&f(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ce||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(de||he),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:de&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pn,flipSided:x.side===Nt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:lt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&x.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function w(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)E.push(k),E.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(v(E,x),b(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),x.push(o.mask)}function P(x){const E=y[x.type];let k;if(E){const j=tn[E];k=yf.clone(j.uniforms)}else k=x.uniforms;return k}function A(x,E){let k;for(let j=0,X=d.length;j<X;j++){const K=d[j];if(K.cacheKey===E){k=K,++k.usedTimes;break}}return k===void 0&&(k=new Lx(i,E,x,r),d.push(k)),k}function T(x){if(--x.usedTimes===0){const E=d.indexOf(x);d[E]=d[d.length-1],d.pop(),x.destroy()}}function R(x){l.remove(x)}function W(){l.dispose()}return{getParameters:h,getProgramCacheKey:w,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:d,dispose:W}}function kx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Bx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Tl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Al(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(m,u,p,_,y,f){let h=i[e];return h===void 0?(h={id:m.id,object:m,geometry:u,material:p,groupOrder:_,renderOrder:m.renderOrder,z:y,group:f},i[e]=h):(h.id=m.id,h.object=m,h.geometry=u,h.material=p,h.groupOrder=_,h.renderOrder=m.renderOrder,h.z=y,h.group=f),e++,h}function o(m,u,p,_,y,f){const h=a(m,u,p,_,y,f);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(m,u,p,_,y,f){const h=a(m,u,p,_,y,f);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(m,u){t.length>1&&t.sort(m||Bx),n.length>1&&n.sort(u||Tl),s.length>1&&s.sort(u||Tl)}function d(){for(let m=e,u=i.length;m<u;m++){const p=i[m];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function zx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Al,i.set(n,[a])):s>=r.length?(a=new Al,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new qe};break;case"SpotLight":t={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Hx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vx=0;function jx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Wx(i){const e=new Gx,t=Hx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new rt,a=new rt;function o(c){let d=0,m=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let p=0,_=0,y=0,f=0,h=0,w=0,v=0,b=0,P=0,A=0,T=0;c.sort(jx);for(let W=0,x=c.length;W<x;W++){const E=c[W],k=E.color,j=E.intensity,X=E.distance,K=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=k.r*j,m+=k.g*j,u+=k.b*j;else if(E.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(E.sh.coefficients[V],j);T++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ee=E.shadow,B=t.get(E);B.shadowIntensity=ee.intensity,B.shadowBias=ee.bias,B.shadowNormalBias=ee.normalBias,B.shadowRadius=ee.radius,B.shadowMapSize=ee.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=E.shadow.matrix,w++}n.directional[p]=V,p++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(k).multiplyScalar(j),V.distance=X,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,n.spot[y]=V;const ee=E.shadow;if(E.map&&(n.spotLightMap[P]=E.map,P++,ee.updateMatrices(E),E.castShadow&&A++),n.spotLightMatrix[y]=ee.matrix,E.castShadow){const B=t.get(E);B.shadowIntensity=ee.intensity,B.shadowBias=ee.bias,B.shadowNormalBias=ee.normalBias,B.shadowRadius=ee.radius,B.shadowMapSize=ee.mapSize,n.spotShadow[y]=B,n.spotShadowMap[y]=K,b++}y++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(k).multiplyScalar(j),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),n.rectArea[f]=V,f++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const ee=E.shadow,B=t.get(E);B.shadowIntensity=ee.intensity,B.shadowBias=ee.bias,B.shadowNormalBias=ee.normalBias,B.shadowRadius=ee.radius,B.shadowMapSize=ee.mapSize,B.shadowCameraNear=ee.camera.near,B.shadowCameraFar=ee.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=E.shadow.matrix,v++}n.point[_]=V,_++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(j),V.groundColor.copy(E.groundColor).multiplyScalar(j),n.hemi[h]=V,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==f||R.hemiLength!==h||R.numDirectionalShadows!==w||R.numPointShadows!==v||R.numSpotShadows!==b||R.numSpotMaps!==P||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=f,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=f,R.hemiLength=h,R.numDirectionalShadows=w,R.numPointShadows=v,R.numSpotShadows=b,R.numSpotMaps=P,R.numLightProbes=T,n.version=Vx++)}function l(c,d){let m=0,u=0,p=0,_=0,y=0;const f=d.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const v=c[h];if(v.isDirectionalLight){const b=n.directional[m];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(v.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),p++}else if(v.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),u++}else if(v.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),y++}}}return{setup:o,setupView:l,state:n}}function Cl(i){const e=new Wx(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Xx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Cl(i),e.set(s,[o])):r>=a.length?(o=new Cl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class qx extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yx extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
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
}`;function Zx(i,e,t){let n=new Ja;const s=new Ve,r=new Ve,a=new Qe,o=new qx({depthPacking:Hh}),l=new Yx,c={},d=t.maxTextureSize,m={[Ln]:Nt,[Nt]:Ln,[pn]:pn},u=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:$x,fragmentShader:Kx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new jt;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new nn(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let h=this.type;this.render=function(A,T,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const W=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Nn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const j=h!==hn&&this.type===hn,X=h===hn&&this.type!==hn;for(let K=0,V=A.length;K<V;K++){const ee=A[K],B=ee.shadow;if(B===void 0||B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const se=B.getFrameExtents();if(s.multiply(se),r.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/se.x),s.x=r.x*se.x,B.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/se.y),s.y=r.y*se.y,B.mapSize.y=r.y)),B.map===null||j===!0||X===!0){const ce=this.type!==hn?{minFilter:Gt,magFilter:Gt}:{};B.map!==null&&B.map.dispose(),B.map=new Jn(s.x,s.y,ce),B.map.texture.name=ee.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const oe=B.getViewportCount();for(let ce=0;ce<oe;ce++){const ke=B.getViewport(ce);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),k.viewport(a),B.updateMatrices(ee,ce),n=B.getFrustum(),b(T,R,B.camera,ee,this.type)}B.isPointLightShadow!==!0&&this.type===hn&&w(B,R),B.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(W,x,E)};function w(A,T){const R=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,R,u,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,R,p,y,null)}function v(A,T,R,W){let x=null;const E=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=R.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=x.uuid,j=T.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let K=X[j];K===void 0&&(K=x.clone(),X[j]=K,T.addEventListener("dispose",P)),x=K}if(x.visible=T.visible,x.wireframe=T.wireframe,W===hn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:m[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=R}return x}function b(A,T,R,W,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===hn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const j=e.update(A),X=A.material;if(Array.isArray(X)){const K=j.groups;for(let V=0,ee=K.length;V<ee;V++){const B=K[V],se=X[B.materialIndex];if(se&&se.visible){const oe=v(A,se,W,x);A.onBeforeShadow(i,A,T,R,j,oe,B),i.renderBufferDirect(R,null,j,oe,A,B),A.onAfterShadow(i,A,T,R,j,oe,B)}}}else if(X.visible){const K=v(A,X,W,x);A.onBeforeShadow(i,A,T,R,j,K,null),i.renderBufferDirect(R,null,j,K,A,null),A.onAfterShadow(i,A,T,R,j,K,null)}}const k=A.children;for(let j=0,X=k.length;j<X;j++)b(k[j],T,R,W,x)}function P(A){A.target.removeEventListener("dispose",P);for(const R in c){const W=c[R],x=A.target.uuid;x in W&&(W[x].dispose(),delete W[x])}}}const Jx={[$r]:Kr,[Zr]:ea,[Jr]:ta,[Ci]:Qr,[Kr]:$r,[ea]:Zr,[ta]:Jr,[Qr]:Ci};function Qx(i){function e(){let U=!1;const pe=new Qe;let q=null;const Q=new Qe(0,0,0,0);return{setMask:function(he){q!==he&&!U&&(i.colorMask(he,he,he,he),q=he)},setLocked:function(he){U=he},setClear:function(he,me,je,lt,Tt){Tt===!0&&(he*=lt,me*=lt,je*=lt),pe.set(he,me,je,lt),Q.equals(pe)===!1&&(i.clearColor(he,me,je,lt),Q.copy(pe))},reset:function(){U=!1,q=null,Q.set(-1,0,0,0)}}}function t(){let U=!1,pe=!1,q=null,Q=null,he=null;return{setReversed:function(me){pe=me},setTest:function(me){me?L(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(me){q!==me&&!U&&(i.depthMask(me),q=me)},setFunc:function(me){if(pe&&(me=Jx[me]),Q!==me){switch(me){case $r:i.depthFunc(i.NEVER);break;case Kr:i.depthFunc(i.ALWAYS);break;case Zr:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=me}},setLocked:function(me){U=me},setClear:function(me){he!==me&&(i.clearDepth(me),he=me)},reset:function(){U=!1,q=null,Q=null,he=null}}}function n(){let U=!1,pe=null,q=null,Q=null,he=null,me=null,je=null,lt=null,Tt=null;return{setTest:function(Ye){U||(Ye?L(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(Ye){pe!==Ye&&!U&&(i.stencilMask(Ye),pe=Ye)},setFunc:function(Ye,At,rn){(q!==Ye||Q!==At||he!==rn)&&(i.stencilFunc(Ye,At,rn),q=Ye,Q=At,he=rn)},setOp:function(Ye,At,rn){(me!==Ye||je!==At||lt!==rn)&&(i.stencilOp(Ye,At,rn),me=Ye,je=At,lt=rn)},setLocked:function(Ye){U=Ye},setClear:function(Ye){Tt!==Ye&&(i.clearStencil(Ye),Tt=Ye)},reset:function(){U=!1,pe=null,q=null,Q=null,he=null,me=null,je=null,lt=null,Tt=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},d={},m=new WeakMap,u=[],p=null,_=!1,y=null,f=null,h=null,w=null,v=null,b=null,P=null,A=new qe(0,0,0),T=0,R=!1,W=null,x=null,E=null,k=null,j=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=V>=2);let B=null,se={};const oe=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),ke=new Qe().fromArray(oe),ze=new Qe().fromArray(ce);function $(U,pe,q,Q){const he=new Uint8Array(4),me=i.createTexture();i.bindTexture(U,me),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<q;je++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(pe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return me}const O={};O[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),L(i.DEPTH_TEST),r.setFunc(Ci),Ge(!1),We(Fo),L(i.CULL_FACE),N(Nn);function L(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function Y(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function te(U,pe){return d[U]!==pe?(i.bindFramebuffer(U,pe),d[U]=pe,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function ge(U,pe){let q=u,Q=!1;if(U){q=m.get(pe),q===void 0&&(q=[],m.set(pe,q));const he=U.textures;if(q.length!==he.length||q[0]!==i.COLOR_ATTACHMENT0){for(let me=0,je=he.length;me<je;me++)q[me]=i.COLOR_ATTACHMENT0+me;q.length=he.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function Se(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const de={[Yn]:i.FUNC_ADD,[ph]:i.FUNC_SUBTRACT,[mh]:i.FUNC_REVERSE_SUBTRACT};de[gh]=i.MIN,de[xh]=i.MAX;const Ue={[_h]:i.ZERO,[vh]:i.ONE,[yh]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[Th]:i.SRC_ALPHA_SATURATE,[Eh]:i.DST_COLOR,[bh]:i.DST_ALPHA,[Sh]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[wh]:i.ONE_MINUS_DST_COLOR,[Mh]:i.ONE_MINUS_DST_ALPHA,[Ah]:i.CONSTANT_COLOR,[Ch]:i.ONE_MINUS_CONSTANT_COLOR,[Rh]:i.CONSTANT_ALPHA,[Ph]:i.ONE_MINUS_CONSTANT_ALPHA};function N(U,pe,q,Q,he,me,je,lt,Tt,Ye){if(U===Nn){_===!0&&(Y(i.BLEND),_=!1);return}if(_===!1&&(L(i.BLEND),_=!0),U!==fh){if(U!==y||Ye!==R){if((f!==Yn||v!==Yn)&&(i.blendEquation(i.FUNC_ADD),f=Yn,v=Yn),Ye)switch(U){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oo:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:break}else switch(U){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:break}h=null,w=null,b=null,P=null,A.set(0,0,0),T=0,y=U,R=Ye}return}he=he||pe,me=me||q,je=je||Q,(pe!==f||he!==v)&&(i.blendEquationSeparate(de[pe],de[he]),f=pe,v=he),(q!==h||Q!==w||me!==b||je!==P)&&(i.blendFuncSeparate(Ue[q],Ue[Q],Ue[me],Ue[je]),h=q,w=Q,b=me,P=je),(lt.equals(A)===!1||Tt!==T)&&(i.blendColor(lt.r,lt.g,lt.b,Tt),A.copy(lt),T=Tt),y=U,R=!1}function gt(U,pe){U.side===pn?Y(i.CULL_FACE):L(i.CULL_FACE);let q=U.side===Nt;pe&&(q=!q),Ge(q),U.blending===Mi&&U.transparent===!1?N(Nn):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){W!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),W=U)}function We(U){U!==dh?(L(i.CULL_FACE),U!==x&&(U===Fo?i.cullFace(i.BACK):U===uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),x=U}function Ce(U){U!==E&&(K&&i.lineWidth(U),E=U)}function tt(U,pe,q){U?(L(i.POLYGON_OFFSET_FILL),(k!==pe||j!==q)&&(i.polygonOffset(pe,q),k=pe,j=q)):Y(i.POLYGON_OFFSET_FILL)}function Ne(U){U?L(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function C(U){U===void 0&&(U=i.TEXTURE0+X-1),B!==U&&(i.activeTexture(U),B=U)}function S(U,pe,q){q===void 0&&(B===null?q=i.TEXTURE0+X-1:q=B);let Q=se[q];Q===void 0&&(Q={type:void 0,texture:void 0},se[q]=Q),(Q.type!==U||Q.texture!==pe)&&(B!==q&&(i.activeTexture(q),B=q),i.bindTexture(U,pe||O[U]),Q.type=U,Q.texture=pe)}function z(){const U=se[B];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch{}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch{}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch{}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch{}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch{}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch{}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch{}}function re(){try{i.texStorage3D.apply(i,arguments)}catch{}}function _e(){try{i.texImage2D.apply(i,arguments)}catch{}}function Re(){try{i.texImage3D.apply(i,arguments)}catch{}}function Pe(U){ke.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ke.copy(U))}function ve(U){ze.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function He(U,pe){let q=l.get(pe);q===void 0&&(q=new WeakMap,l.set(pe,q));let Q=q.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(pe,U.name),q.set(U,Q))}function De(U,pe){const Q=l.get(pe).get(U);o.get(pe)!==Q&&(i.uniformBlockBinding(pe,Q,U.__bindingPointIndex),o.set(pe,Q))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},B=null,se={},d={},m=new WeakMap,u=[],p=null,_=!1,y=null,f=null,h=null,w=null,v=null,b=null,P=null,A=new qe(0,0,0),T=0,R=!1,W=null,x=null,E=null,k=null,j=null,ke.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:L,disable:Y,bindFramebuffer:te,drawBuffers:ge,useProgram:Se,setBlending:N,setMaterial:gt,setFlipSided:Ge,setCullFace:We,setLineWidth:Ce,setPolygonOffset:tt,setScissorTest:Ne,activeTexture:C,bindTexture:S,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:ne,texImage2D:_e,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:De,texStorage2D:Xe,texStorage3D:re,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:xe,scissor:Pe,viewport:ve,reset:et}}function Rl(i,e,t,n){const s=e0(n);switch(t){case gc:return i*e;case _c:return i*e;case vc:return i*e*2;case yc:return i*e/s.components*s.byteLength;case Ya:return i*e/s.components*s.byteLength;case Sc:return i*e*2/s.components*s.byteLength;case $a:return i*e*2/s.components*s.byteLength;case xc:return i*e*3/s.components*s.byteLength;case Zt:return i*e*4/s.components*s.byteLength;case Ka:return i*e*4/s.components*s.byteLength;case Ls:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Us:case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:case ca:return Math.max(i,16)*Math.max(e,8)/4;case aa:case la:return Math.max(i,8)*Math.max(e,8)/2;case da:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Os:case Aa:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bc:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pa:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(i){switch(i){case vn:case fc:return{byteLength:1,components:1};case Ji:case pc:case Qi:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case Zn:case Wa:case gn:return{byteLength:4,components:1};case mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function t0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,d=new WeakMap;let m;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):js("canvas")}function y(C,S,z){let Z=1;const ne=Ne(C);if((ne.width>z||ne.height>z)&&(Z=z/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Z*ne.width),Ee=Math.floor(Z*ne.height);m===void 0&&(m=_(J,Ee));const ue=S?_(J,Ee):m;return ue.width=J,ue.height=Ee,ue.getContext("2d").drawImage(C,0,0,J,Ee),ue}else return"data"in C,C;return C}function f(C){return C.generateMipmaps&&C.minFilter!==Gt&&C.minFilter!==$t}function h(C){i.generateMipmap(C)}function w(C,S,z,Z,ne=!1){if(C!==null&&i[C]!==void 0)return i[C];let J=S;if(S===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),S===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){const Ee=ne?zs:Ze.getTransfer(Z);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Ee===st?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(C,S){let z;return C?S===null||S===Zn||S===Ni?z=i.DEPTH24_STENCIL8:S===gn?z=i.DEPTH32F_STENCIL8:S===Ji&&(z=i.DEPTH24_STENCIL8):S===null||S===Zn||S===Ni?z=i.DEPTH_COMPONENT24:S===gn?z=i.DEPTH_COMPONENT32F:S===Ji&&(z=i.DEPTH_COMPONENT16),z}function b(C,S){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==$t?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),T(S),S.isVideoTexture&&d.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),W(S)}function T(C){const S=n.get(C);if(S.__webglInit===void 0)return;const z=C.source,Z=u.get(z);if(Z){const ne=Z[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(C),Object.keys(Z).length===0&&u.delete(z)}n.remove(C)}function R(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const z=C.source,Z=u.get(z);delete Z[S.__cacheKey],a.memory.textures--}function W(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ne=0;ne<S.__webglFramebuffer[Z].length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[Z][ne]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let Z=0,ne=z.length;Z<ne;Z++){const J=n.get(z[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(C)}let x=0;function E(){x=0}function k(){const C=x;return C>=s.maxTextures,x+=1,C}function j(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const z=n.get(C);if(C.isVideoTexture&&Ce(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Z=C.image;if(Z!==null){if(Z.complete!==!1){ze(z,C,S);return}}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function K(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){ze(z,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function V(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){ze(z,C,S);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function ee(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){$(z,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const B={[sa]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},se={[Gt]:i.NEAREST,[zh]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},oe={[jh]:i.NEVER,[Kh]:i.ALWAYS,[Wh]:i.LESS,[Ec]:i.LEQUAL,[Xh]:i.EQUAL,[$h]:i.GEQUAL,[qh]:i.GREATER,[Yh]:i.NOTEQUAL};function ce(C,S){if(S.type===gn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===$t||S.magFilter===hr||S.magFilter===cs||S.magFilter===Kn||S.minFilter===$t||S.minFilter===hr||S.minFilter===cs||S.minFilter),i.texParameteri(C,i.TEXTURE_WRAP_S,B[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,B[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,B[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,se[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,se[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gt||S.minFilter!==cs&&S.minFilter!==Kn||S.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ke(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const Z=S.source;let ne=u.get(Z);ne===void 0&&(ne={},u.set(Z,ne));const J=j(S);if(J!==C.__cacheKey){ne[J]===void 0&&(ne[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[J].usedTimes++;const Ee=ne[C.__cacheKey];Ee!==void 0&&(ne[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&R(S)),C.__cacheKey=J,C.__webglTexture=ne[J].texture}return z}function ze(C,S,z){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const ne=ke(C,S),J=S.source;t.bindTexture(Z,C.__webglTexture,i.TEXTURE0+z);const Ee=n.get(J);if(J.version!==Ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);const ue=Ze.getPrimaries(Ze.workingColorSpace),xe=S.colorSpace===Pn?null:Ze.getPrimaries(S.colorSpace),Xe=S.colorSpace===Pn||ue===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let re=y(S.image,!1,s.maxTextureSize);re=tt(S,re);const _e=r.convert(S.format,S.colorSpace),Re=r.convert(S.type);let Pe=w(S.internalFormat,_e,Re,S.colorSpace,S.isVideoTexture);ce(Z,S);let ve;const He=S.mipmaps,De=S.isVideoTexture!==!0,et=Ee.__version===void 0||ne===!0,U=J.dataReady,pe=b(S,re);if(S.isDepthTexture)Pe=v(S.format===Di,S.type),et&&(De?t.texStorage2D(i.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Pe,re.width,re.height,0,_e,Re,null));else if(S.isDataTexture)if(He.length>0){De&&et&&t.texStorage2D(i.TEXTURE_2D,pe,Pe,He[0].width,He[0].height);for(let q=0,Q=He.length;q<Q;q++)ve=He[q],De?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ve.width,ve.height,_e,Re,ve.data):t.texImage2D(i.TEXTURE_2D,q,Pe,ve.width,ve.height,0,_e,Re,ve.data);S.generateMipmaps=!1}else De?(et&&t.texStorage2D(i.TEXTURE_2D,pe,Pe,re.width,re.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,_e,Re,re.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,re.width,re.height,0,_e,Re,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Pe,He[0].width,He[0].height,re.depth);for(let q=0,Q=He.length;q<Q;q++)if(ve=He[q],S.format!==Zt){if(_e!==null)if(De){if(U)if(S.layerUpdates.size>0){const he=Rl(ve.width,ve.height,S.format,S.type);for(const me of S.layerUpdates){const je=ve.data.subarray(me*he/ve.data.BYTES_PER_ELEMENT,(me+1)*he/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,me,ve.width,ve.height,1,_e,je,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,re.depth,_e,ve.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Pe,ve.width,ve.height,re.depth,0,ve.data,0,0)}else De?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,re.depth,_e,Re,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Pe,ve.width,ve.height,re.depth,0,_e,Re,ve.data)}else{De&&et&&t.texStorage2D(i.TEXTURE_2D,pe,Pe,He[0].width,He[0].height);for(let q=0,Q=He.length;q<Q;q++)ve=He[q],S.format!==Zt?_e!==null&&(De?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Pe,ve.width,ve.height,0,ve.data)):De?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ve.width,ve.height,_e,Re,ve.data):t.texImage2D(i.TEXTURE_2D,q,Pe,ve.width,ve.height,0,_e,Re,ve.data)}else if(S.isDataArrayTexture)if(De){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Pe,re.width,re.height,re.depth),U)if(S.layerUpdates.size>0){const q=Rl(re.width,re.height,S.format,S.type);for(const Q of S.layerUpdates){const he=re.data.subarray(Q*q/re.data.BYTES_PER_ELEMENT,(Q+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,_e,Re,he)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Re,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,_e,Re,re.data);else if(S.isData3DTexture)De?(et&&t.texStorage3D(i.TEXTURE_3D,pe,Pe,re.width,re.height,re.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Re,re.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,_e,Re,re.data);else if(S.isFramebufferTexture){if(et)if(De)t.texStorage2D(i.TEXTURE_2D,pe,Pe,re.width,re.height);else{let q=re.width,Q=re.height;for(let he=0;he<pe;he++)t.texImage2D(i.TEXTURE_2D,he,Pe,q,Q,0,_e,Re,null),q>>=1,Q>>=1}}else if(He.length>0){if(De&&et){const q=Ne(He[0]);t.texStorage2D(i.TEXTURE_2D,pe,Pe,q.width,q.height)}for(let q=0,Q=He.length;q<Q;q++)ve=He[q],De?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,_e,Re,ve):t.texImage2D(i.TEXTURE_2D,q,Pe,_e,Re,ve);S.generateMipmaps=!1}else if(De){if(et){const q=Ne(re);t.texStorage2D(i.TEXTURE_2D,pe,Pe,q.width,q.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Re,re)}else t.texImage2D(i.TEXTURE_2D,0,Pe,_e,Re,re);f(S)&&h(Z),Ee.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $(C,S,z){if(S.image.length!==6)return;const Z=ke(C,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const J=n.get(ne);if(ne.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const Ee=Ze.getPrimaries(Ze.workingColorSpace),ue=S.colorSpace===Pn?null:Ze.getPrimaries(S.colorSpace),xe=S.colorSpace===Pn||Ee===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!Xe&&!re?_e[Q]=y(S.image[Q],!0,s.maxCubemapSize):_e[Q]=re?S.image[Q].image:S.image[Q],_e[Q]=tt(S,_e[Q]);const Re=_e[0],Pe=r.convert(S.format,S.colorSpace),ve=r.convert(S.type),He=w(S.internalFormat,Pe,ve,S.colorSpace),De=S.isVideoTexture!==!0,et=J.__version===void 0||Z===!0,U=ne.dataReady;let pe=b(S,Re);ce(i.TEXTURE_CUBE_MAP,S);let q;if(Xe){De&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,He,Re.width,Re.height);for(let Q=0;Q<6;Q++){q=_e[Q].mipmaps;for(let he=0;he<q.length;he++){const me=q[he];S.format!==Zt?Pe!==null&&(De?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,me.width,me.height,Pe,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,He,me.width,me.height,0,me.data)):De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,me.width,me.height,Pe,ve,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,He,me.width,me.height,0,Pe,ve,me.data)}}}else{if(q=S.mipmaps,De&&et){q.length>0&&pe++;const Q=Ne(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,He,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Pe,ve,_e[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,_e[Q].width,_e[Q].height,0,Pe,ve,_e[Q].data);for(let he=0;he<q.length;he++){const je=q[he].image[Q].image;De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,je.width,je.height,Pe,ve,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,He,je.width,je.height,0,Pe,ve,je.data)}}else{De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,ve,_e[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,Pe,ve,_e[Q]);for(let he=0;he<q.length;he++){const me=q[he];De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Pe,ve,me.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,He,Pe,ve,me.image[Q])}}}f(S)&&h(i.TEXTURE_CUBE_MAP),J.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function O(C,S,z,Z,ne,J){const Ee=r.convert(z.format,z.colorSpace),ue=r.convert(z.type),xe=w(z.internalFormat,Ee,ue,z.colorSpace);if(!n.get(S).__hasExternalTextures){const re=Math.max(1,S.width>>J),_e=Math.max(1,S.height>>J);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,xe,re,_e,S.depth,0,Ee,ue,null):t.texImage2D(ne,J,xe,re,_e,0,Ee,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),We(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ne,n.get(z).__webglTexture,0,Ge(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ne,n.get(z).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function L(C,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const Z=S.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,J=v(S.stencilBuffer,ne),Ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=Ge(S);We(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,J,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,C)}else{const Z=S.textures;for(let ne=0;ne<Z.length;ne++){const J=Z[ne],Ee=r.convert(J.format,J.colorSpace),ue=r.convert(J.type),xe=w(J.internalFormat,Ee,ue,J.colorSpace),Xe=Ge(S);z&&We(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,xe,S.width,S.height):We(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,ne=Ge(S);if(S.depthTexture.format===Ei)We(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Di)We(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function te(C){const S=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Y(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),L(S.__webglDepthbuffer[Z],C,!1);else{const ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),L(S.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(C,S,z){const Z=n.get(C);S!==void 0&&O(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&te(C)}function Se(C){const S=C.texture,z=n.get(C),Z=n.get(S);C.addEventListener("dispose",A);const ne=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let xe=0;xe<S.mipmaps.length;xe++)z.__webglFramebuffer[ue][xe]=i.createFramebuffer()}else z.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)z.__webglFramebuffer[ue]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ue=0,xe=ne.length;ue<xe;ue++){const Xe=n.get(ne[ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&We(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const xe=ne[ue];z.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);const Xe=r.convert(xe.format,xe.colorSpace),re=r.convert(xe.type),_e=w(xe.internalFormat,Xe,re,xe.colorSpace,C.isXRRenderTarget===!0),Re=Ge(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,_e,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),L(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(i.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)O(z.__webglFramebuffer[ue][xe],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else O(z.__webglFramebuffer[ue],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);f(S)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ue=0,xe=ne.length;ue<xe;ue++){const Xe=ne[ue],re=n.get(Xe);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),ce(i.TEXTURE_2D,Xe),O(z.__webglFramebuffer,C,Xe,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),f(Xe)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),ce(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)O(z.__webglFramebuffer[xe],C,S,i.COLOR_ATTACHMENT0,ue,xe);else O(z.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ue,0);f(S)&&h(ue),t.unbindTexture()}C.depthBuffer&&te(C)}function de(C){const S=C.textures;for(let z=0,Z=S.length;z<Z;z++){const ne=S[z];if(f(ne)){const J=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(ne).__webglTexture;t.bindTexture(J,Ee),h(J),t.unbindTexture()}}}const Ue=[],N=[];function gt(C){if(C.samples>0){if(We(C)===!1){const S=C.textures,z=C.width,Z=C.height;let ne=i.COLOR_BUFFER_BIT;const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(C),ue=S.length>1;if(ue)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Xe=n.get(S[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,ne,i.NEAREST),l===!0&&(Ue.length=0,N.length=0,Ue.push(i.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ue.push(J),N.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Xe=n.get(S[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ge(C){return Math.min(s.maxSamples,C.samples)}function We(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(C){const S=a.render.frame;d.get(C)!==S&&(d.set(C,S),C.update())}function tt(C,S){const z=C.colorSpace,Z=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Fn&&z!==Pn&&Ze.getTransfer(z),S}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=ge,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=O,this.useMultisampledRTT=We}function n0(i,e){function t(n,s=Pn){let r;const a=Ze.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.BYTE;if(n===pc)return i.SHORT;if(n===Ji)return i.UNSIGNED_SHORT;if(n===Wa)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===gc)return i.ALPHA;if(n===xc)return i.RGB;if(n===Zt)return i.RGBA;if(n===_c)return i.LUMINANCE;if(n===vc)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===yc)return i.RED;if(n===Ya)return i.RED_INTEGER;if(n===Sc)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===Ls||n===Is||n===Us||n===Fs)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===ua||n===ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===da||n===ua)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fa||n===pa||n===ma||n===ga||n===xa||n===_a||n===va||n===ya||n===Sa||n===ba||n===Ma||n===Ea||n===wa||n===Ta)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ga)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ba)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ta)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Os||n===Aa||n===Ca)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Os)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===Ra||n===Pa||n===Na)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Os)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class i0 extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ps extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s0={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,n),h=this._getHandJoint(c,y);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=d.position.distanceTo(m.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ps;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const r0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a0=`
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

}`;class o0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:r0,fragmentShader:a0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l0 extends Oi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,m=null,u=null,p=null,_=null;const y=new o0,f=t.getContextAttributes();let h=null,w=null;const v=[],b=[],P=new Ve;let A=null;const T=new Ot;T.layers.enable(1),T.viewport=new Qe;const R=new Ot;R.layers.enable(2),R.viewport=new Qe;const W=[T,R],x=new i0;x.layers.enable(1),x.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let O=v[$];return O===void 0&&(O=new Hr,v[$]=O),O.getTargetRaySpace()},this.getControllerGrip=function($){let O=v[$];return O===void 0&&(O=new Hr,v[$]=O),O.getGripSpace()},this.getHand=function($){let O=v[$];return O===void 0&&(O=new Hr,v[$]=O),O.getHandSpace()};function j($){const O=b.indexOf($.inputSource);if(O===-1)return;const L=v[O];L!==void 0&&(L.update($.inputSource,$.frame,c||a),L.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let $=0;$<v.length;$++){const O=b[$];O!==null&&(b[$]=null,v[$].disconnect(O))}E=null,k=null,y.reset(),e.setRenderTarget(h),p=null,u=null,m=null,s=null,w=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting},this.setReferenceSpaceType=function($){o=$,n.isPresenting},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const O={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,O),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Jn(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let O=null,L=null,Y=null;f.depth&&(Y=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=f.stencil?Di:Ei,L=f.stencil?Ni:Zn);const te={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};m=new XRWebGLBinding(s,t),u=m.createProjectionLayer(te),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new Jn(u.textureWidth,u.textureHeight,{format:Zt,type:vn,depthTexture:new Bc(u.textureWidth,u.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K($){for(let O=0;O<$.removed.length;O++){const L=$.removed[O],Y=b.indexOf(L);Y>=0&&(b[Y]=null,v[Y].disconnect(L))}for(let O=0;O<$.added.length;O++){const L=$.added[O];let Y=b.indexOf(L);if(Y===-1){for(let ge=0;ge<v.length;ge++)if(ge>=b.length){b.push(L),Y=ge;break}else if(b[ge]===null){b[ge]=L,Y=ge;break}if(Y===-1)break}const te=v[Y];te&&te.connect(L)}}const V=new F,ee=new F;function B($,O,L){V.setFromMatrixPosition(O.matrixWorld),ee.setFromMatrixPosition(L.matrixWorld);const Y=V.distanceTo(ee),te=O.projectionMatrix.elements,ge=L.projectionMatrix.elements,Se=te[14]/(te[10]-1),de=te[14]/(te[10]+1),Ue=(te[9]+1)/te[5],N=(te[9]-1)/te[5],gt=(te[8]-1)/te[0],Ge=(ge[8]+1)/ge[0],We=Se*gt,Ce=Se*Ge,tt=Y/(-gt+Ge),Ne=tt*-gt;if(O.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),te[10]===-1)$.projectionMatrix.copy(O.projectionMatrix),$.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const C=Se+tt,S=de+tt,z=We-Ne,Z=Ce+(Y-Ne),ne=Ue*de/S*C,J=N*de/S*C;$.projectionMatrix.makePerspective(z,Z,ne,J,C,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function se($,O){O===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(O.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let O=$.near,L=$.far;y.texture!==null&&(y.depthNear>0&&(O=y.depthNear),y.depthFar>0&&(L=y.depthFar)),x.near=R.near=T.near=O,x.far=R.far=T.far=L,(E!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,k=x.far);const Y=$.parent,te=x.cameras;se(x,Y);for(let ge=0;ge<te.length;ge++)se(te[ge],Y);te.length===2?B(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),oe($,x,Y)};function oe($,O,L){L===null?$.matrix.copy(O.matrixWorld):($.matrix.copy(L.matrixWorld),$.matrix.invert(),$.matrix.multiply(O.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(O.projectionMatrix),$.projectionMatrixInverse.copy(O.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Da*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ce=null;function ke($,O){if(d=O.getViewerPose(c||a),_=O,d!==null){const L=d.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Y=!1;L.length!==x.cameras.length&&(x.cameras.length=0,Y=!0);for(let ge=0;ge<L.length;ge++){const Se=L[ge];let de=null;if(p!==null)de=p.getViewport(Se);else{const N=m.getViewSubImage(u,Se);de=N.viewport,ge===0&&(e.setRenderTargetTextures(w,N.colorTexture,u.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(w))}let Ue=W[ge];Ue===void 0&&(Ue=new Ot,Ue.layers.enable(ge),Ue.viewport=new Qe,W[ge]=Ue),Ue.matrix.fromArray(Se.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Se.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(de.x,de.y,de.width,de.height),ge===0&&(x.matrix.copy(Ue.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Y===!0&&x.cameras.push(Ue)}const te=s.enabledFeatures;if(te&&te.includes("depth-sensing")){const ge=m.getDepthInformation(L[0]);ge&&ge.isValid&&ge.texture&&y.init(e,ge,s.renderState)}}for(let L=0;L<v.length;L++){const Y=b[L],te=v[L];Y!==null&&te!==void 0&&te.update(Y,O,c||a)}ce&&ce($,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),_=null}const ze=new Oc;ze.setAnimationLoop(ke),this.setAnimationLoop=function($){ce=$},this.dispose=function(){}}}const jn=new sn,c0=new rt;function d0(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Ic(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,w,v,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),m(f,h)):h.isMeshPhongMaterial?(r(f,h),d(f,h)):h.isMeshStandardMaterial?(r(f,h),u(f,h),h.isMeshPhysicalMaterial&&p(f,h,b)):h.isMeshMatcapMaterial?(r(f,h),_(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),y(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,w,v):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Nt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Nt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const w=e.get(h),v=w.envMap,b=w.envMapRotation;v&&(f.envMap.value=v,jn.copy(b),jn.x*=-1,jn.y*=-1,jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),f.envMapRotation.value.setFromMatrix4(c0.makeRotationFromEuler(jn)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,w,v){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*w,f.scale.value=v*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function m(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function u(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function p(f,h,w){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,h){h.matcap&&(f.matcap.value=h.matcap)}function y(f,h){const w=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,v){const b=v.program;n.uniformBlockBinding(w,b)}function c(w,v){let b=s[w.id];b===void 0&&(_(w),b=d(w),s[w.id]=b,w.addEventListener("dispose",f));const P=v.program;n.updateUBOMapping(w,P);const A=e.render.frame;r[w.id]!==A&&(u(w),r[w.id]=A)}function d(w){const v=m();w.__bindingPointIndex=v;const b=i.createBuffer(),P=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function m(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return 0}function u(w){const v=s[w.id],b=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,T=b.length;A<T;A++){const R=Array.isArray(b[A])?b[A]:[b[A]];for(let W=0,x=R.length;W<x;W++){const E=R[W];if(p(E,A,W,P)===!0){const k=E.__offset,j=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let K=0;K<j.length;K++){const V=j[K],ee=y(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+X,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,v,b,P){const A=w.value,T=v+"_"+b;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const R=P[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(w){const v=w.uniforms;let b=0;const P=16;for(let T=0,R=v.length;T<R;T++){const W=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,E=W.length;x<E;x++){const k=W[x],j=Array.isArray(k.value)?k.value:[k.value];for(let X=0,K=j.length;X<K;X++){const V=j[X],ee=y(V),B=b%P,se=B%ee.boundary,oe=B+se;b+=se,oe!==0&&P-oe<ee.storage&&(b+=P-oe),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=ee.storage}}}const A=b%P;return A>0&&(b+=P-A),w.__size=b,w.__cache={},this}function y(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture,v}function f(w){const v=w.target;v.removeEventListener("dispose",f);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function h(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class h0{constructor(e={}){const{canvas:t=Jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,f=null;const h=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Dn,this.toneMappingExposure=1;const v=this;let b=!1,P=0,A=0,T=null,R=-1,W=null;const x=new Qe,E=new Qe;let k=null;const j=new qe(0);let X=0,K=t.width,V=t.height,ee=1,B=null,se=null;const oe=new Qe(0,0,K,V),ce=new Qe(0,0,K,V);let ke=!1;const ze=new Ja;let $=!1,O=!1;const L=new rt,Y=new rt,te=new F,ge=new Qe,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Ue(){return T===null?ee:1}let N=n;function gt(M,D){return t.getContext(M,D)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",me,!1),N===null){const D="webgl2";if(N=gt(D,M),N===null)throw gt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M}let Ge,We,Ce,tt,Ne,C,S,z,Z,ne,J,Ee,ue,xe,Xe,re,_e,Re,Pe,ve,He,De,et,U;function pe(){Ge=new xg(N),Ge.init(),De=new n0(N,Ge),We=new ug(N,Ge,e,De),Ce=new Qx(N),We.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),tt=new yg(N),Ne=new kx,C=new t0(N,Ge,Ce,Ne,We,De,tt),S=new fg(v),z=new gg(v),Z=new Af(N),et=new cg(N,Z),ne=new _g(N,Z,tt,et),J=new bg(N,ne,Z,tt),Pe=new Sg(N,We,C),re=new hg(Ne),Ee=new Ox(v,S,z,Ge,We,et,re),ue=new d0(v,Ne),xe=new zx,Xe=new Xx(Ge),Re=new lg(v,S,z,Ce,J,u,l),_e=new Zx(v,J,We),U=new u0(N,tt,We,Ce),ve=new dg(N,Ge,tt),He=new vg(N,Ge,tt),tt.programs=Ee.programs,v.capabilities=We,v.extensions=Ge,v.properties=Ne,v.renderLists=xe,v.shadowMap=_e,v.state=Ce,v.info=tt}pe();const q=new l0(v,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Ge.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ge.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(K,V,!1))},this.getSize=function(M){return M.set(K,V)},this.setSize=function(M,D,G=!0){q.isPresenting||(K=M,V=D,t.width=Math.floor(M*ee),t.height=Math.floor(D*ee),G===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D))},this.getDrawingBufferSize=function(M){return M.set(K*ee,V*ee).floor()},this.setDrawingBufferSize=function(M,D,G){K=M,V=D,ee=G,t.width=Math.floor(M*G),t.height=Math.floor(D*G),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(oe)},this.setViewport=function(M,D,G,H){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,D,G,H),Ce.viewport(x.copy(oe).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,D,G,H){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,D,G,H),Ce.scissor(E.copy(ce).multiplyScalar(ee).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(M){Ce.setScissorTest(ke=M)},this.setOpaqueSort=function(M){B=M},this.setTransparentSort=function(M){se=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(M=!0,D=!0,G=!0){let H=0;if(M){let I=!1;if(T!==null){const ae=T.texture.format;I=ae===Ka||ae===$a||ae===Ya}if(I){const ae=T.texture.type,fe=ae===vn||ae===Zn||ae===Ji||ae===Ni||ae===Xa||ae===qa,ye=Re.getClearColor(),be=Re.getClearAlpha(),Te=ye.r,Ae=ye.g,Me=ye.b;fe?(p[0]=Te,p[1]=Ae,p[2]=Me,p[3]=be,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Te,_[1]=Ae,_[2]=Me,_[3]=be,N.clearBufferiv(N.COLOR,0,_))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",me,!1),xe.dispose(),Xe.dispose(),Ne.dispose(),S.dispose(),z.dispose(),J.dispose(),et.dispose(),U.dispose(),Ee.dispose(),q.dispose(),q.removeEventListener("sessionstart",ro),q.removeEventListener("sessionend",ao),On.stop()};function Q(M){M.preventDefault(),b=!0}function he(){b=!1;const M=tt.autoReset,D=_e.enabled,G=_e.autoUpdate,H=_e.needsUpdate,I=_e.type;pe(),tt.autoReset=M,_e.enabled=D,_e.autoUpdate=G,_e.needsUpdate=H,_e.type=I}function me(M){}function je(M){const D=M.target;D.removeEventListener("dispose",je),lt(D)}function lt(M){Tt(M),Ne.remove(M)}function Tt(M){const D=Ne.get(M).programs;D!==void 0&&(D.forEach(function(G){Ee.releaseProgram(G)}),M.isShaderMaterial&&Ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,G,H,I,ae){D===null&&(D=Se);const fe=I.isMesh&&I.matrixWorld.determinant()<0,ye=qc(M,D,G,H,I);Ce.setMaterial(H,fe);let be=G.index,Te=1;if(H.wireframe===!0){if(be=ne.getWireframeAttribute(G),be===void 0)return;Te=2}const Ae=G.drawRange,Me=G.attributes.position;let Je=Ae.start*Te,nt=(Ae.start+Ae.count)*Te;ae!==null&&(Je=Math.max(Je,ae.start*Te),nt=Math.min(nt,(ae.start+ae.count)*Te)),be!==null?(Je=Math.max(Je,0),nt=Math.min(nt,be.count)):Me!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,Me.count));const at=nt-Je;if(at<0||at===1/0)return;et.setup(I,H,ye,G,be);let Lt,$e=ve;if(be!==null&&(Lt=Z.get(be),$e=He,$e.setIndex(Lt)),I.isMesh)H.wireframe===!0?(Ce.setLineWidth(H.wireframeLinewidth*Ue()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(I.isLine){let we=H.linewidth;we===void 0&&(we=1),Ce.setLineWidth(we*Ue()),I.isLineSegments?$e.setMode(N.LINES):I.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else I.isPoints?$e.setMode(N.POINTS):I.isSprite&&$e.setMode(N.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)$e.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))$e.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const we=I._multiDrawStarts,ft=I._multiDrawCounts,Ke=I._multiDrawCount,Wt=be?Z.get(be).bytesPerElement:1,Qn=Ne.get(H).currentProgram.getUniforms();for(let It=0;It<Ke;It++)Qn.setValue(N,"_gl_DrawID",It),$e.render(we[It]/Wt,ft[It])}else if(I.isInstancedMesh)$e.renderInstances(Je,at,I.count);else if(G.isInstancedBufferGeometry){const we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ft=Math.min(G.instanceCount,we);$e.renderInstances(Je,at,ft)}else $e.render(Je,at)};function Ye(M,D,G){M.transparent===!0&&M.side===pn&&M.forceSinglePass===!1?(M.side=Nt,M.needsUpdate=!0,as(M,D,G),M.side=Ln,M.needsUpdate=!0,as(M,D,G),M.side=pn):as(M,D,G)}this.compile=function(M,D,G=null){G===null&&(G=M),f=Xe.get(G),f.init(D),w.push(f),G.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),M!==G&&M.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const H=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ae=I.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){const ye=ae[fe];Ye(ye,G,I),H.add(ye)}else Ye(ae,G,I),H.add(ae)}),w.pop(),f=null,H},this.compileAsync=function(M,D,G=null){const H=this.compile(M,D,G);return new Promise(I=>{function ae(){if(H.forEach(function(fe){Ne.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){I(M);return}setTimeout(ae,10)}Ge.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let At=null;function rn(M){At&&At(M)}function ro(){On.stop()}function ao(){On.start()}const On=new Oc;On.setAnimationLoop(rn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(M){At=M,q.setAnimationLoop(M),M===null?On.stop():On.start()},q.addEventListener("sessionstart",ro),q.addEventListener("sessionend",ao),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0||b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,D,T),f=Xe.get(M,w.length),f.init(D),w.push(f),Y.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ze.setFromProjectionMatrix(Y),O=this.localClippingEnabled,$=re.init(this.clippingPlanes,O),y=xe.get(M,h.length),y.init(),h.push(y),q.enabled===!0&&q.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&nr(ae,D,-1/0,v.sortObjects)}nr(M,D,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(B,se),de=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,de&&Re.addToRenderList(y,M),this.info.render.frame++,$===!0&&re.beginShadows();const G=f.state.shadowsArray;_e.render(G,M,D),$===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=y.opaque,I=y.transmissive;if(f.setupLights(),D.isArrayCamera){const ae=D.cameras;if(I.length>0)for(let fe=0,ye=ae.length;fe<ye;fe++){const be=ae[fe];lo(H,I,M,be)}de&&Re.render(M);for(let fe=0,ye=ae.length;fe<ye;fe++){const be=ae[fe];oo(y,M,be,be.viewport)}}else I.length>0&&lo(H,I,M,D),de&&Re.render(M),oo(y,M,D);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(v,M,D),et.resetDefaultState(),R=-1,W=null,w.pop(),w.length>0?(f=w[w.length-1],$===!0&&re.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function nr(M,D,G,H){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ze.intersectsSprite(M)){H&&ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Y);const fe=J.update(M),ye=M.material;ye.visible&&y.push(M,fe,ye,G,ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ze.intersectsObject(M))){const fe=J.update(M),ye=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ge.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ge.copy(fe.boundingSphere.center)),ge.applyMatrix4(M.matrixWorld).applyMatrix4(Y)),Array.isArray(ye)){const be=fe.groups;for(let Te=0,Ae=be.length;Te<Ae;Te++){const Me=be[Te],Je=ye[Me.materialIndex];Je&&Je.visible&&y.push(M,fe,Je,G,ge.z,Me)}}else ye.visible&&y.push(M,fe,ye,G,ge.z,null)}}const ae=M.children;for(let fe=0,ye=ae.length;fe<ye;fe++)nr(ae[fe],D,G,H)}function oo(M,D,G,H){const I=M.opaque,ae=M.transmissive,fe=M.transparent;f.setupLightsView(G),$===!0&&re.setGlobalState(v.clippingPlanes,G),H&&Ce.viewport(x.copy(H)),I.length>0&&rs(I,D,G),ae.length>0&&rs(ae,D,G),fe.length>0&&rs(fe,D,G),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function lo(M,D,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Jn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Qi:vn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ae=f.state.transmissionRenderTarget[H.id],fe=H.viewport||x;ae.setSize(fe.z,fe.w);const ye=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(j),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),de&&Re.render(G);const be=v.toneMapping;v.toneMapping=Dn;const Te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),$===!0&&re.setGlobalState(v.clippingPlanes,H),rs(M,G,H),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Me=0,Je=D.length;Me<Je;Me++){const nt=D[Me],at=nt.object,Lt=nt.geometry,$e=nt.material,we=nt.group;if($e.side===pn&&at.layers.test(H.layers)){const ft=$e.side;$e.side=Nt,$e.needsUpdate=!0,co(at,G,H,Lt,$e,we),$e.side=ft,$e.needsUpdate=!0,Ae=!0}}Ae===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}v.setRenderTarget(ye),v.setClearColor(j,X),Te!==void 0&&(H.viewport=Te),v.toneMapping=be}function rs(M,D,G){const H=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ae=M.length;I<ae;I++){const fe=M[I],ye=fe.object,be=fe.geometry,Te=H===null?fe.material:H,Ae=fe.group;ye.layers.test(G.layers)&&co(ye,D,G,be,Te,Ae)}}function co(M,D,G,H,I,ae){M.onBeforeRender(v,D,G,H,I,ae),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(v,D,G,H,M,ae),I.transparent===!0&&I.side===pn&&I.forceSinglePass===!1?(I.side=Nt,I.needsUpdate=!0,v.renderBufferDirect(G,D,H,I,M,ae),I.side=Ln,I.needsUpdate=!0,v.renderBufferDirect(G,D,H,I,M,ae),I.side=pn):v.renderBufferDirect(G,D,H,I,M,ae),M.onAfterRender(v,D,G,H,I,ae)}function as(M,D,G){D.isScene!==!0&&(D=Se);const H=Ne.get(M),I=f.state.lights,ae=f.state.shadowsArray,fe=I.state.version,ye=Ee.getParameters(M,I.state,ae,D,G),be=Ee.getProgramCacheKey(ye);let Te=H.programs;H.environment=M.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(M.isMeshStandardMaterial?z:S).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Te===void 0&&(M.addEventListener("dispose",je),Te=new Map,H.programs=Te);let Ae=Te.get(be);if(Ae!==void 0){if(H.currentProgram===Ae&&H.lightsStateVersion===fe)return ho(M,ye),Ae}else ye.uniforms=Ee.getUniforms(M),M.onBeforeCompile(ye,v),Ae=Ee.acquireProgram(ye,be),Te.set(be,Ae),H.uniforms=ye.uniforms;const Me=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=re.uniform),ho(M,ye),H.needsLights=$c(M),H.lightsStateVersion=fe,H.needsLights&&(Me.ambientLightColor.value=I.state.ambient,Me.lightProbe.value=I.state.probe,Me.directionalLights.value=I.state.directional,Me.directionalLightShadows.value=I.state.directionalShadow,Me.spotLights.value=I.state.spot,Me.spotLightShadows.value=I.state.spotShadow,Me.rectAreaLights.value=I.state.rectArea,Me.ltc_1.value=I.state.rectAreaLTC1,Me.ltc_2.value=I.state.rectAreaLTC2,Me.pointLights.value=I.state.point,Me.pointLightShadows.value=I.state.pointShadow,Me.hemisphereLights.value=I.state.hemi,Me.directionalShadowMap.value=I.state.directionalShadowMap,Me.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Me.spotShadowMap.value=I.state.spotShadowMap,Me.spotLightMatrix.value=I.state.spotLightMatrix,Me.spotLightMap.value=I.state.spotLightMap,Me.pointShadowMap.value=I.state.pointShadowMap,Me.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=Ae,H.uniformsList=null,Ae}function uo(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Bs.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function ho(M,D){const G=Ne.get(M);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function qc(M,D,G,H,I){D.isScene!==!0&&(D=Se),C.resetTextureUnits();const ae=D.fog,fe=H.isMeshStandardMaterial?D.environment:null,ye=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Fn,be=(H.isMeshStandardMaterial?z:S).get(H.envMap||fe),Te=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ae=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,nt=!!G.morphAttributes.color;let at=Dn;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=v.toneMapping);const Lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$e=Lt!==void 0?Lt.length:0,we=Ne.get(H),ft=f.state.lights;if($===!0&&(O===!0||M!==W)){const kt=M===W&&H.id===R;re.setState(H,M,kt)}let Ke=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ft.state.version||we.outputColorSpace!==ye||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==be||H.fog===!0&&we.fog!==ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==Te||we.vertexTangents!==Ae||we.morphTargets!==Me||we.morphNormals!==Je||we.morphColors!==nt||we.toneMapping!==at||we.morphTargetsCount!==$e)&&(Ke=!0):(Ke=!0,we.__version=H.version);let Wt=we.currentProgram;Ke===!0&&(Wt=as(H,D,I));let Qn=!1,It=!1,ir=!1;const ot=Wt.getUniforms(),Sn=we.uniforms;if(Ce.useProgram(Wt.program)&&(Qn=!0,It=!0,ir=!0),H.id!==R&&(R=H.id,It=!0),Qn||W!==M){We.reverseDepthBuffer?(L.copy(M.projectionMatrix),ef(L),tf(L),ot.setValue(N,"projectionMatrix",L)):ot.setValue(N,"projectionMatrix",M.projectionMatrix),ot.setValue(N,"viewMatrix",M.matrixWorldInverse);const kt=ot.map.cameraPosition;kt!==void 0&&kt.setValue(N,te.setFromMatrixPosition(M.matrixWorld)),We.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,It=!0,ir=!0)}if(I.isSkinnedMesh){ot.setOptional(N,I,"bindMatrix"),ot.setOptional(N,I,"bindMatrixInverse");const kt=I.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ot.setValue(N,"boneTexture",kt.boneTexture,C))}I.isBatchedMesh&&(ot.setOptional(N,I,"batchingTexture"),ot.setValue(N,"batchingTexture",I._matricesTexture,C),ot.setOptional(N,I,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",I._indirectTexture,C),ot.setOptional(N,I,"batchingColorTexture"),I._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",I._colorsTexture,C));const sr=G.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Pe.update(I,G,Wt),(It||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,ot.setValue(N,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Sn.envMap.value=be,Sn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Sn.envMapIntensity.value=D.environmentIntensity),It&&(ot.setValue(N,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Yc(Sn,ir),ae&&H.fog===!0&&ue.refreshFogUniforms(Sn,ae),ue.refreshMaterialUniforms(Sn,H,ee,V,f.state.transmissionRenderTarget[M.id]),Bs.upload(N,uo(we),Sn,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Bs.upload(N,uo(we),Sn,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(N,"center",I.center),ot.setValue(N,"modelViewMatrix",I.modelViewMatrix),ot.setValue(N,"normalMatrix",I.normalMatrix),ot.setValue(N,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const kt=H.uniformsGroups;for(let rr=0,Kc=kt.length;rr<Kc;rr++){const fo=kt[rr];U.update(fo,Wt),U.bind(fo,Wt)}}return Wt}function Yc(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function $c(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,D,G){Ne.get(M.texture).__webglTexture=D,Ne.get(M.depthTexture).__webglTexture=G;const H=Ne.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const G=Ne.get(M);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,G=0){T=M,P=D,A=G;let H=!0,I=null,ae=!1,fe=!1;if(M){const be=Ne.get(M);if(be.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(be.__webglFramebuffer===void 0)C.setupRenderTarget(M);else if(be.__hasExternalTextures)C.rebindTextures(M,Ne.get(M.texture).__webglTexture,Ne.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Me=M.depthTexture;if(be.__boundDepthTexture!==Me){if(Me!==null&&Ne.has(Me)&&(M.width!==Me.image.width||M.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);const Ae=Ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?I=Ae[D][G]:I=Ae[D],ae=!0):M.samples>0&&C.useMultisampledRTT(M)===!1?I=Ne.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?I=Ae[G]:I=Ae,x.copy(M.viewport),E.copy(M.scissor),k=M.scissorTest}else x.copy(oe).multiplyScalar(ee).floor(),E.copy(ce).multiplyScalar(ee).floor(),k=ke;if(Ce.bindFramebuffer(N.FRAMEBUFFER,I)&&H&&Ce.drawBuffers(M,I),Ce.viewport(x),Ce.scissor(E),Ce.setScissorTest(k),ae){const be=Ne.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,G)}else if(fe){const be=Ne.get(M.texture),Te=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Te)}R=-1},this.readRenderTargetPixels=function(M,D,G,H,I,ae,fe){if(!(M&&M.isWebGLRenderTarget))return;let ye=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){Ce.bindFramebuffer(N.FRAMEBUFFER,ye);try{const be=M.texture,Te=be.format,Ae=be.type;if(!We.textureFormatReadable(Te)||!We.textureTypeReadable(Ae))return;D>=0&&D<=M.width-H&&G>=0&&G<=M.height-I&&N.readPixels(D,G,H,I,De.convert(Te),De.convert(Ae),ae)}finally{const be=T!==null?Ne.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(M,D,G,H,I,ae,fe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){const be=M.texture,Te=be.format,Ae=be.type;if(!We.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-H&&G>=0&&G<=M.height-I){Ce.bindFramebuffer(N.FRAMEBUFFER,ye);const Me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.bufferData(N.PIXEL_PACK_BUFFER,ae.byteLength,N.STREAM_READ),N.readPixels(D,G,H,I,De.convert(Te),De.convert(Ae),0);const Je=T!==null?Ne.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Je);const nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Qh(N,nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ae),N.deleteBuffer(Me),N.deleteSync(nt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,G=0){M.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-G),I=Math.floor(M.image.width*H),ae=Math.floor(M.image.height*H),fe=D!==null?D.x:0,ye=D!==null?D.y:0;C.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,fe,ye,I,ae),Ce.unbindTexture()},this.copyTextureToTexture=function(M,D,G=null,H=null,I=0){M.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],D=arguments[2],I=arguments[3]||0,G=null);let ae,fe,ye,be,Te,Ae;G!==null?(ae=G.max.x-G.min.x,fe=G.max.y-G.min.y,ye=G.min.x,be=G.min.y):(ae=M.image.width,fe=M.image.height,ye=0,be=0),H!==null?(Te=H.x,Ae=H.y):(Te=0,Ae=0);const Me=De.convert(D.format),Je=De.convert(D.type);C.setTexture2D(D,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const nt=N.getParameter(N.UNPACK_ROW_LENGTH),at=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Lt=N.getParameter(N.UNPACK_SKIP_PIXELS),$e=N.getParameter(N.UNPACK_SKIP_ROWS),we=N.getParameter(N.UNPACK_SKIP_IMAGES),ft=M.isCompressedTexture?M.mipmaps[I]:M.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,be),M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,I,Te,Ae,ae,fe,Me,Je,ft.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,I,Te,Ae,ft.width,ft.height,Me,ft.data):N.texSubImage2D(N.TEXTURE_2D,I,Te,Ae,ae,fe,Me,Je,ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,nt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Lt),N.pixelStorei(N.UNPACK_SKIP_ROWS,$e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,we),I===0&&D.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(M,D,G=null,H=null,I=0){M.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,M=arguments[2],D=arguments[3],I=arguments[4]||0);let ae,fe,ye,be,Te,Ae,Me,Je,nt;const at=M.isCompressedTexture?M.mipmaps[I]:M.image;G!==null?(ae=G.max.x-G.min.x,fe=G.max.y-G.min.y,ye=G.max.z-G.min.z,be=G.min.x,Te=G.min.y,Ae=G.min.z):(ae=at.width,fe=at.height,ye=at.depth,be=0,Te=0,Ae=0),H!==null?(Me=H.x,Je=H.y,nt=H.z):(Me=0,Je=0,nt=0);const Lt=De.convert(D.format),$e=De.convert(D.type);let we;if(D.isData3DTexture)C.setTexture3D(D,0),we=N.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)C.setTexture2DArray(D,0),we=N.TEXTURE_2D_ARRAY;else return;N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const ft=N.getParameter(N.UNPACK_ROW_LENGTH),Ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Wt=N.getParameter(N.UNPACK_SKIP_PIXELS),Qn=N.getParameter(N.UNPACK_SKIP_ROWS),It=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,be),N.pixelStorei(N.UNPACK_SKIP_ROWS,Te),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ae),M.isDataTexture||M.isData3DTexture?N.texSubImage3D(we,I,Me,Je,nt,ae,fe,ye,Lt,$e,at.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(we,I,Me,Je,nt,ae,fe,ye,Lt,at.data):N.texSubImage3D(we,I,Me,Je,nt,ae,fe,ye,Lt,$e,at),N.pixelStorei(N.UNPACK_ROW_LENGTH,ft),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,It),I===0&&D.generateMipmaps&&N.generateMipmap(we),Ce.unbindTexture()},this.initRenderTarget=function(M){Ne.get(M).__webglFramebuffer===void 0&&C.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?C.setTextureCube(M,0):M.isData3DTexture?C.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?C.setTexture2DArray(M,0):C.setTexture2D(M,0),Ce.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,Ce.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Za?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Js?"display-p3":"srgb"}}class f0 extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jc extends ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pl=new rt,Ia=new Cc,Ns=new Qs,Ds=new F;class p0 extends mt{constructor(e=new jt,t=new jc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),Ns.radius+=r,e.ray.intersectsSphere(Ns)===!1)return;Pl.copy(s).invert(),Ia.copy(e.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,y=p;_<y;_++){const f=c.getX(_);Ds.fromBufferAttribute(m,f),Nl(Ds,f,l,s,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let _=u,y=p;_<y;_++)Ds.fromBufferAttribute(m,_),Nl(Ds,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nl(i,e,t,n,s,r,a){const o=Ia.distanceSqToPoint(i);if(o<t){const l=new F;Ia.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ss extends jt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const v=new F,b=new F,P=new F;for(let A=0;A<t.length;A+=3)p(t[A+0],v),p(t[A+1],b),p(t[A+2],P),l(v,b,P,w)}function l(w,v,b,P){const A=P+1,T=[];for(let R=0;R<=A;R++){T[R]=[];const W=w.clone().lerp(b,R/A),x=v.clone().lerp(b,R/A),E=A-R;for(let k=0;k<=E;k++)k===0&&R===A?T[R][k]=W:T[R][k]=W.clone().lerp(x,k/E)}for(let R=0;R<A;R++)for(let W=0;W<2*(A-R)-1;W++){const x=Math.floor(W/2);W%2===0?(u(T[R][x+1]),u(T[R+1][x]),u(T[R][x])):(u(T[R][x+1]),u(T[R+1][x+1]),u(T[R+1][x]))}}function c(w){const v=new F;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(w),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function d(){const w=new F;for(let v=0;v<r.length;v+=3){w.x=r[v+0],w.y=r[v+1],w.z=r[v+2];const b=f(w)/2/Math.PI+.5,P=h(w)/Math.PI+.5;a.push(b,1-P)}_(),m()}function m(){for(let w=0;w<a.length;w+=6){const v=a[w+0],b=a[w+2],P=a[w+4],A=Math.max(v,b,P),T=Math.min(v,b,P);A>.9&&T<.1&&(v<.2&&(a[w+0]+=1),b<.2&&(a[w+2]+=1),P<.2&&(a[w+4]+=1))}}function u(w){r.push(w.x,w.y,w.z)}function p(w,v){const b=w*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function _(){const w=new F,v=new F,b=new F,P=new F,A=new Ve,T=new Ve,R=new Ve;for(let W=0,x=0;W<r.length;W+=9,x+=6){w.set(r[W+0],r[W+1],r[W+2]),v.set(r[W+3],r[W+4],r[W+5]),b.set(r[W+6],r[W+7],r[W+8]),A.set(a[x+0],a[x+1]),T.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),P.copy(w).add(v).add(b).divideScalar(3);const E=f(P);y(A,x+0,w,E),y(T,x+2,v,E),y(R,x+4,b,E)}}function y(w,v,b,P){P<0&&w.x===1&&(a[v]=w.x-1),b.x===0&&b.z===0&&(a[v]=P/2/Math.PI+.5)}function f(w){return Math.atan2(w.z,-w.x)}function h(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.vertices,e.indices,e.radius,e.details)}}class eo extends ss{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eo(e.radius,e.detail)}}class to extends ss{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new to(e.radius,e.detail)}}class no extends ss{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new no(e.radius,e.detail)}}class Wc extends jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],m=new F,u=new F,p=[],_=[],y=[],f=[];for(let h=0;h<=n;h++){const w=[],v=h/n;let b=0;h===0&&a===0?b=.5/t:h===n&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const A=P/t;m.x=-e*Math.cos(s+A*r)*Math.sin(a+v*o),m.y=e*Math.cos(a+v*o),m.z=e*Math.sin(s+A*r)*Math.sin(a+v*o),_.push(m.x,m.y,m.z),u.copy(m).normalize(),y.push(u.x,u.y,u.z),f.push(A+b,1-v),w.push(c++)}d.push(w)}for(let h=0;h<n;h++)for(let w=0;w<t;w++){const v=d[h][w+1],b=d[h][w],P=d[h+1][w],A=d[h+1][w+1];(h!==0||a>0)&&p.push(v,b,A),(h!==n-1||l<Math.PI)&&p.push(b,P,A)}this.setIndex(p),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class io extends jt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],d=new F,m=new F,u=new F;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const y=_/s*r,f=p/n*Math.PI*2;m.x=(e+t*Math.cos(f))*Math.cos(y),m.y=(e+t*Math.cos(f))*Math.sin(y),m.z=t*Math.sin(f),o.push(m.x,m.y,m.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),u.subVectors(m,d).normalize(),l.push(u.x,u.y,u.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const y=(s+1)*p+_-1,f=(s+1)*(p-1)+_-1,h=(s+1)*(p-1)+_,w=(s+1)*p+_;a.push(y,f,w),a.push(f,h,w)}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class m0 extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class so extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Vr=new rt,Dl=new F,Ll=new F;class Xc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dl),Ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ll),t.updateMatrixWorld(),Vr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Il=new rt,$i=new F,jr=new F;class g0 extends Xc{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),n.position.copy($i),jr.copy(n.position),jr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jr),n.updateMatrixWorld(),s.makeTranslation(-$i.x,-$i.y,-$i.z),Il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il)}}class x0 extends so{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new g0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _0 extends Xc{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v0 extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new _0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class y0 extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class S0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ul();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ul(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=ja));const b0=({className:i="",intensity:e="subtle",particleCount:t=180})=>{const n=ie.useRef(null);return ie.useEffect(()=>{const s=n.current;if(!s||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=document.createElement("canvas");if(!(a.getContext("webgl")||a.getContext("experimental-webgl")))return;const l=s.clientWidth||window.innerWidth,c=s.clientHeight||window.innerHeight,d=new f0,m=new Ot(50,l/c,.1,100);m.position.z=10;const u=new h0({antialias:!0,alpha:!0});u.setSize(l,c),u.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.appendChild(u.domElement);const p=new y0(11385818,e==="vibrant"?1:.6);d.add(p);const _=new v0(15922165,e==="vibrant"?1.8:1.2);_.position.set(5,10,7),d.add(_);const y=new x0(8038399,2,20);y.position.set(-8,-5,5),d.add(y);const f=[],h=[new to(.5,0),new eo(.4,0),new no(.45,0),new io(.5,.08,12,32)],w=new m0({color:8820676,metalness:.85,roughness:.25,transparent:!0,opacity:e==="vibrant"?.75:.45}),v=e==="vibrant"?10:6;for(let B=0;B<v;B++){const se=h[B%h.length],oe=new nn(se,w),ce=(Math.random()-.5)*16,ke=(Math.random()-.5)*12,ze=(Math.random()-.5)*8-2;oe.position.set(ce,ke,ze),d.add(oe),f.push({mesh:oe,rotSpeed:{x:(Math.random()-.5)*.015,y:(Math.random()-.5)*.02,z:(Math.random()-.5)*.01},initialY:ke})}const b=new Float32Array(t*3);for(let B=0;B<t*3;B+=3)b[B]=(Math.random()-.5)*22,b[B+1]=(Math.random()-.5)*18,b[B+2]=(Math.random()-.5)*12;const P=new jt;P.setAttribute("position",new Jt(b,3));const A=new jc({color:7377382,size:.05,transparent:!0,opacity:e==="vibrant"?.6:.35}),T=new p0(P,A);d.add(T);let R=0,W=0,x=0,E=0;const k=B=>{R=(B.clientX/window.innerWidth-.5)*1.5,W=(B.clientY/window.innerHeight-.5)*1.5};window.addEventListener("mousemove",k,{passive:!0});const j=()=>{if(!s)return;const B=s.clientWidth||window.innerWidth,se=s.clientHeight||window.innerHeight;m.aspect=B/se,m.updateProjectionMatrix(),u.setSize(B,se)},X=new ResizeObserver(j);X.observe(s);let K,V=new S0;const ee=()=>{K=requestAnimationFrame(ee);const B=V.getElapsedTime();x+=(R-x)*.04,E+=(W-E)*.04,m.position.x=x,m.position.y=-E,m.lookAt(0,0,0),f.forEach((se,oe)=>{se.mesh.rotation.x+=se.rotSpeed.x,se.mesh.rotation.y+=se.rotSpeed.y,se.mesh.rotation.z+=se.rotSpeed.z,se.mesh.position.y=se.initialY+Math.sin(B*.8+oe)*.35}),T.rotation.y=B*.02,u.render(d,m)};return ee(),()=>{cancelAnimationFrame(K),window.removeEventListener("mousemove",k),X.disconnect(),s&&u.domElement&&s.contains(u.domElement)&&s.removeChild(u.domElement),h.forEach(B=>B.dispose()),w.dispose(),P.dispose(),A.dispose(),u.dispose()}},[e,t]),g.jsx("div",{ref:n,"aria-hidden":"true",className:`pointer-events-none fixed inset-0 z-0 overflow-hidden ${i}`})},M0=()=>{const[i,e]=ie.useState(!1),[t,n]=ie.useState(!1),[s,r]=ie.useState(!1),[a,o]=ie.useState(!1);return ie.useEffect(()=>{const l=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="k"&&(c.preventDefault(),o(d=>!d))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),g.jsxs("div",{className:"flex h-screen w-screen overflow-hidden bg-pilot-pale dark:bg-[#101114] text-slate-900 dark:text-[#F2F3F5] font-sans relative transition-colors",children:[g.jsx(b0,{className:"fixed inset-0 pointer-events-none z-0 opacity-25",intensity:"subtle",particleCount:110}),g.jsx("div",{className:"hidden lg:flex h-full relative z-10",children:g.jsx(lc,{})}),g.jsx(Ju,{isOpen:i,onClose:()=>e(!1)}),g.jsxs("div",{className:"flex flex-col flex-1 h-full min-w-0 overflow-hidden relative z-10",children:[g.jsx(lh,{}),g.jsx(Zu,{onOpenMobileNav:()=>e(!0),onOpenTaskModal:()=>n(!0),onOpenPlanModal:()=>r(!0),onOpenCommandPalette:()=>o(!0)}),g.jsx("main",{className:"flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 relative",children:g.jsx(nd,{})})]}),g.jsx(ch,{}),g.jsx(Qu,{isOpen:t,onClose:()=>n(!1)}),g.jsx(rh,{isOpen:s,onClose:()=>r(!1)}),g.jsx(ah,{isOpen:a,onClose:()=>o(!1),onOpenTaskModal:()=>n(!0)}),g.jsx(oh,{})]})},E0=ie.lazy(()=>Vt(()=>import("./LandingPage-u1W_u7AZ.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(i=>({default:i.LandingPage}))),w0=ie.lazy(()=>Vt(()=>import("./LoginPage-D2p_t1IH.js"),__vite__mapDeps([7,1,2,3,4,5,6]),import.meta.url).then(i=>({default:i.LoginPage}))),T0=ie.lazy(()=>Vt(()=>import("./SignupPage-B6Jxnsm5.js"),__vite__mapDeps([8,1,2,3,4,5,6]),import.meta.url).then(i=>({default:i.SignupPage}))),A0=ie.lazy(()=>Vt(()=>import("./DashboardPage-cha3OMvz.js"),__vite__mapDeps([9,1,10,11,2,3,4,5,6]),import.meta.url).then(i=>({default:i.DashboardPage}))),C0=ie.lazy(()=>Vt(()=>import("./StudyPlanPage-D6zGwIz4.js"),__vite__mapDeps([12,1,13,4,14,2,3,5,6]),import.meta.url).then(i=>({default:i.StudyPlanPage}))),R0=ie.lazy(()=>Vt(()=>import("./TasksPage-BoH80dqP.js"),__vite__mapDeps([15,1,4,13,14,2,3,5,6]),import.meta.url).then(i=>({default:i.TasksPage}))),P0=ie.lazy(()=>Vt(()=>import("./FocusTimerPage-BfoLOBAh.js"),__vite__mapDeps([16,1,13,4,2,3,5,6]),import.meta.url).then(i=>({default:i.FocusTimerPage}))),N0=ie.lazy(()=>Vt(()=>import("./ProgressPage-NqWqyx_7.js"),__vite__mapDeps([17,1,10,11,2,4,5,6]),import.meta.url).then(i=>({default:i.ProgressPage}))),D0=ie.lazy(()=>Vt(()=>import("./SettingsPage-B00Rkjap.js"),__vite__mapDeps([18,1,13,4,2,3,5,6]),import.meta.url).then(i=>({default:i.SettingsPage}))),L0=ie.lazy(()=>Vt(()=>import("./AdminPage-C_1j7o7I.js"),__vite__mapDeps([19,1,2,3,4,10,5,6]),import.meta.url).then(i=>({default:i.AdminPage}))),I0=ie.lazy(()=>Vt(()=>import("./PrivacyPage-C6ezQ7hQ.js"),__vite__mapDeps([20,1,4,5,6]),import.meta.url).then(i=>({default:i.PrivacyPage}))),U0=ie.lazy(()=>Vt(()=>import("./TermsPage-CqgtNEBR.js"),__vite__mapDeps([21,1,4,5,6]),import.meta.url).then(i=>({default:i.TermsPage}))),F0=()=>g.jsxs("div",{className:"min-h-screen w-full flex flex-col items-center justify-center bg-pilot-pale text-pilot-dark",children:[g.jsx("div",{className:"w-12 h-12 rounded-xl bg-pilot-deep flex items-center justify-center text-white shadow-md shadow-pilot-deep/20 mb-3 animate-pulse",children:g.jsx(Ii,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-pilot-deep",children:[g.jsx($s,{className:"w-4 h-4 animate-spin text-pilot-deep"}),g.jsx("span",{children:"Loading StudyPilot workspace..."})]})]});function O0(){return g.jsx(cu,{children:g.jsx(iu,{children:g.jsx(lu,{children:g.jsx(id,{children:g.jsx(ie.Suspense,{fallback:g.jsx(F0,{}),children:g.jsxs(sd,{children:[g.jsx(Mt,{path:"/",element:g.jsx(E0,{})}),g.jsx(Mt,{path:"/privacy",element:g.jsx(I0,{})}),g.jsx(Mt,{path:"/terms",element:g.jsx(U0,{})}),g.jsx(Mt,{path:"/login",element:g.jsx(Po,{children:g.jsx(w0,{})})}),g.jsx(Mt,{path:"/signup",element:g.jsx(Po,{children:g.jsx(T0,{})})}),g.jsx(Mt,{path:"/admin",element:g.jsx(Wu,{children:g.jsx(L0,{})})}),g.jsxs(Mt,{element:g.jsx(uu,{children:g.jsx(M0,{})}),children:[g.jsx(Mt,{path:"/dashboard",element:g.jsx(A0,{})}),g.jsx(Mt,{path:"/study-plan",element:g.jsx(C0,{})}),g.jsx(Mt,{path:"/tasks",element:g.jsx(R0,{})}),g.jsx(Mt,{path:"/focus",element:g.jsx(P0,{})}),g.jsx(Mt,{path:"/focus-timer",element:g.jsx(Zi,{to:"/focus",replace:!0})}),g.jsx(Mt,{path:"/progress",element:g.jsx(N0,{})}),g.jsx(Mt,{path:"/settings",element:g.jsx(D0,{})})]}),g.jsx(Mt,{path:"*",element:g.jsx(Zi,{to:"/",replace:!0})})]})})})})})})}Vd.createRoot(document.getElementById("root")).render(g.jsx(ie.StrictMode,{children:g.jsx(O0,{})}));export{y0 as A,wt as B,S0 as C,v0 as D,gi as E,fn as F,rh as G,bi as I,Va as M,Ot as P,Uo as S,b0 as T,h0 as W,Ku as a,ih as b,Un as c,yn as d,V0 as e,Xu as f,Ha as g,j0 as h,W0 as i,g as j,X0 as k,q0 as l,Y0 as m,Qu as n,mn as o,Ht as p,f0 as q,x0 as r,Ps as s,Wc as t,du as u,m0 as v,nn as w,to as x,Nc as y,io as z};
