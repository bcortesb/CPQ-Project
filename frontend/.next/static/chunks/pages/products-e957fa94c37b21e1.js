(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{7638:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return s(3883)}])},3883:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(5893),l=s(7294),c=s(9669),n=s.n(c);function r(e){let{token:t,product:s,onSave:c}=e,[r,i]=(0,l.useState)(s?s.name:""),[o,u]=(0,l.useState)(s?s.price:""),[d,m]=(0,l.useState)(s?s.description:""),[x,p]=(0,l.useState)(s?s.subproducts:[]),h=(e,t,s)=>{p(x.map((a,l)=>l===e?{...a,[t]:s}:a))},b=async e=>{e.preventDefault();let a={name:r,price:parseFloat(o),description:d,subproducts:x};try{s?await n().put("http://localhost:8000/products/".concat(s.id),a,{headers:{Authorization:"Bearer ".concat(t)}}):await n().post("http://localhost:8000/products",a,{headers:{Authorization:"Bearer ".concat(t)}}),c()}catch(e){console.error("Error saving product:",e)}};return(0,a.jsxs)("form",{onSubmit:b,className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),(0,a.jsx)("input",{type:"text",id:"name",value:r,onChange:e=>i(e.target.value),className:"mt-1 block w-full"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"price",className:"block text-sm font-medium text-gray-700",children:"Price"}),(0,a.jsx)("input",{type:"number",id:"price",value:o,onChange:e=>u(e.target.value),className:"mt-1 block w-full"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),(0,a.jsx)("textarea",{id:"description",value:d,onChange:e=>m(e.target.value),className:"mt-1 block w-full"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:"Subproducts"}),x.map((e,t)=>(0,a.jsxs)("div",{className:"mt-4 space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Subproduct Name"}),(0,a.jsx)("input",{type:"text",value:e.name,onChange:e=>h(t,"name",e.target.value),className:"mt-1 block w-full"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Subproduct Description"}),(0,a.jsx)("textarea",{value:e.description,onChange:e=>h(t,"description",e.target.value),className:"mt-1 block w-full"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Subproduct Price"}),(0,a.jsx)("input",{type:"number",value:e.price,onChange:e=>h(t,"price",e.target.value),className:"mt-1 block w-full"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Subproduct Image URL"}),(0,a.jsx)("input",{type:"text",value:e.image_url,onChange:e=>h(t,"image_url",e.target.value),className:"mt-1 block w-full"})]})]},t)),(0,a.jsx)("button",{type:"button",onClick:()=>{p([...x,{name:"",description:"",price:"",image_url:""}])},className:"mt-4 py-2 px-4 bg-green-600 text-white",children:"Add Subproduct"})]}),(0,a.jsxs)("button",{type:"submit",className:"w-full py-2 px-4 bg-blue-600 text-white",children:[s?"Update":"Add"," Product"]})]})}function i(e){let{token:t}=e,[s,c]=(0,l.useState)([]),[i,o]=(0,l.useState)(null),[u,d]=(0,l.useState)(!1);(0,l.useEffect)(()=>{m()},[t]);let m=async()=>{c((await n().get("http://localhost:8000/products",{headers:{Authorization:"Bearer ".concat(t)}})).data)},x=async e=>{await n().delete("http://localhost:8000/products/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}),m()},p=e=>{o(e),d(!0)};return(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{onClick:()=>d(!0),className:"mb-4 py-2 px-4 bg-green-600 text-white",children:"Add Product"}),u&&(0,a.jsx)(r,{token:t,product:i,onSave:()=>{m(),d(!1),o(null)}}),(0,a.jsx)("ul",{children:s.map(e=>(0,a.jsx)("li",{className:"mb-2 p-2 border rounded",children:(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-bold",children:e.name}),(0,a.jsx)("p",{children:e.description}),(0,a.jsxs)("p",{children:["$",e.price.toFixed(2)]}),e.subproducts&&(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h4",{className:"text-md font-bold",children:"Subproducts:"}),(0,a.jsx)("ul",{className:"ml-4",children:e.subproducts.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("p",{children:[e.name," - $",e.price.toFixed(2)]})},e.id))})]})]}),(0,a.jsxs)("div",{className:"space-x-2",children:[(0,a.jsx)("button",{onClick:()=>p(e),className:"py-1 px-2 bg-yellow-600 text-white",children:"Edit"}),(0,a.jsx)("button",{onClick:()=>x(e.id),className:"py-1 px-2 bg-red-600 text-white",children:"Delete"})]})]})},e.id))})]})}function o(e){let{setToken:t}=e,[s,c]=(0,l.useState)(""),[r,i]=(0,l.useState)(""),o=async e=>{e.preventDefault();try{let e=await n().post("http://localhost:8000/auth/login",{username:s,password:r});t(e.data.access_token)}catch(e){console.error("Login error:",e)}};return(0,a.jsxs)("form",{onSubmit:o,className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"Username"}),(0,a.jsx)("input",{type:"text",id:"username",value:s,onChange:e=>c(e.target.value),className:"mt-1 block w-full"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,a.jsx)("input",{type:"password",id:"password",value:r,onChange:e=>i(e.target.value),className:"mt-1 block w-full"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full py-2 px-4 bg-blue-600 text-white",children:"Login"})]})}function u(){let[e,t]=(0,l.useState)(null);return(0,a.jsx)("div",{className:"p-4",children:e?(0,a.jsx)(i,{token:e}):(0,a.jsx)(o,{setToken:t})})}}},function(e){e.O(0,[669,888,774,179],function(){return e(e.s=7638)}),_N_E=e.O()}]);