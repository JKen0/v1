if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B1nUMlHK.css",revision:null},{url:"assets/index-Cl9g72f5.js",revision:null},{url:"index.html",revision:"24c1cd5cdacf3ddae908fdeeafc6bb94"},{url:"registerSW.js",revision:"8e40c4ba5df1a89335e747f802ca420a"},{url:"manifest.webmanifest",revision:"a13d41b07abc891b6df6406ed7729fcd"}],{}),e.cleanupOutdatedCaches()}));
