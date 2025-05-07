import{c as b,a as x,j as e,r as u}from"./index-JDuAbdxX.js";import{B as l,R as m,E as h}from"./RenderCount-e9P-iGVG.js";import{s}from"./store-Bdmtnt4j.js";/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var d=b("outline","external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]]),i={exports:{}},o={};/**
 * @license React
 * use-subscription.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a;function S(){if(a)return o;a=1;var t=x();return o.useSubscription=function(r){return t.useSyncExternalStore(r.subscribe,r.getCurrentValue)},o}var p;function j(){return p||(p=1,i.exports=S()),i.exports}var c=j();const g=()=>{const t=c.useSubscription(u.useMemo(()=>({getCurrentValue:()=>s.getState().count,subscribe:s.subscribe}),[])),r=()=>s.setState(n=>({...n,count:n.count+1}));return e.jsxs("div",{children:[t," ",e.jsx(l,{onClick:r,children:"+1"})]})},v=()=>{const t=c.useSubscription(u.useMemo(()=>({getCurrentValue:()=>s.getState().count,subscribe:s.subscribe}),[])),r=()=>s.setState(n=>({...n,count:n.count+2}));return e.jsxs("div",{children:[t," ",e.jsx(l,{onClick:r,children:"+2"})]})},C=()=>{const t=c.useSubscription(u.useMemo(()=>({getCurrentValue:()=>s.getState().name,subscribe:s.subscribe}),[]));return e.jsxs("div",{children:["STORE NAME: ",t," ",e.jsx(m,{})]})};function k(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx(v,{}),e.jsx(C,{}),e.jsx("img",{src:"https://i.imgur.com/CkpDm2U.png",alt:"useSubscription을 사용한 예제"}),e.jsxs("p",{children:["React Team에서 공식적으로 제공하는"," ",e.jsxs("a",{href:"https://www.npmjs.com/package/use-subscription",target:"_blank",className:"text-blue-500 underline",children:[e.jsx(d,{width:16,height:16,className:"inline-block"}),e.jsx("code",{children:"useSubscription"})," 훅"]}),"을 사용합니다.",e.jsx("br",{}),"이 경우 ",e.jsx("code",{children:"useStoreSelector"})," 훅을 사용하지 않고도 직접 ",e.jsx("code",{children:"store"}),"에서 원하는 값을 구독할 수 있습니다."]})]})}const M=function(){return e.jsx(h,{title:"Working with useSubscription",children:e.jsx(k,{})})};export{M as component};
