(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{295:function(n,e,t){"use strict";var o=t(0),c=t.n(o),a=t(355),i=t.n(a);i.a.initialize({startOnLoad:!0});e.a=function(n){var e=n.chart;return Object(o.useEffect)((function(){i.a.contentLoaded()}),[]),c.a.createElement("div",{className:"mermaid"},e)}},359:function(n,e,t){var o={"./locale":289,"./locale.js":289};function c(n){var e=a(n);return t(e)}function a(n){if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return o[n]}c.keys=function(){return Object.keys(o)},c.resolve=a,n.exports=c,c.id=359},96:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return r})),t.d(e,"metadata",(function(){return d})),t.d(e,"toc",(function(){return s})),t.d(e,"default",(function(){return l}));var o=t(3),c=t(7),a=(t(0),t(211)),i=t(295),r={title:"Connection"},d={unversionedId:"advanced/flows/connection",id:"advanced/flows/connection",isDocsHomePage:!1,title:"Connection",description:"<Mermaid",source:"@site/docs/advanced/flows/connection.mdx",slug:"/advanced/flows/connection",permalink:"/advanced/flows/connection",editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/advanced/flows/connection.mdx",version:"current",sidebar:"docs",previous:{title:"Client Info",permalink:"/advanced/sdk-info"},next:{title:"Extension Communication",permalink:"/advanced/flows/extension-communication"}},s=[],u={toc:s};function l(n){var e=n.components,t=Object(c.a)(n,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(i.a,{chart:"\ngraph LR\n    Z[dApp] --\x3e Y{Extension installed?}\n    subgraph Beacon SDK\n      Y -- No --\x3e B[Wallet/P2P]\n    end\n    subgraph Extension\n      X -- Yes --\x3e E[Wallet/P2P]\n      X -- No --\x3e D[Ledger / Mnemonic]\n      Y -- Yes --\x3e X{Wallet Paired?}\n    end\n",mdxType:"Mermaid"}))}l.isMDXComponent=!0}}]);