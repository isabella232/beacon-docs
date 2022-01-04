(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return l}));var a=t(3),o=t(7),r=(t(0),t(211)),i=t(295),c={title:"P2P Extension"},s={unversionedId:"advanced/flows/p2p-extension",id:"advanced/flows/p2p-extension",isDocsHomePage:!1,title:"P2P Extension",description:"Init",source:"@site/docs/advanced/flows/p2p-extension.mdx",slug:"/advanced/flows/p2p-extension",permalink:"/advanced/flows/p2p-extension",editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/advanced/flows/p2p-extension.mdx",version:"current",sidebar:"docs",previous:{title:"P2P Direct",permalink:"/advanced/flows/p2p-direct"},next:{title:"Changelog",permalink:"/CHANGELOG"}},d=[{value:"Init",id:"init",children:[]},{value:"Permission Request",id:"permission-request",children:[]},{value:"Operation Request",id:"operation-request",children:[]},{value:"Signing Request",id:"signing-request",children:[]},{value:"Broadcast Request",id:"broadcast-request",children:[]}],u={toc:d};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"init"},"Init"),Object(r.b)(i.a,{chart:"\nsequenceDiagram\n    Popup->>Background: Get QR Data\n    Background->>Background: Start listening for new connections\n    Background->>Popup: Return QR Data\n    Popup->>Wallet: Show QR Code (publicKey exchange)\n    Wallet->>Wallet: User scans QR code\n    Wallet->>Background: Send own publicKey to dApp, connection established\n    Background->>Popup: Successful connection\n",mdxType:"Mermaid"}),Object(r.b)(i.a,{chart:"\nsequenceDiagram\n    Popup->>Background: Get QR Data\n    Background->>Background: Start listening for new connections\n    Background->>Popup: Return QR Data\n    Popup->>Wallet: Show QR Code (publicKey exchange)\n    Wallet->>Wallet: User scans QR code\n    Wallet->>Background: Send own publicKey to dApp, connection established\n    Background->>Popup: Successful connection\n",mdxType:"Mermaid"}),Object(r.b)("h2",{id:"permission-request"},"Permission Request"),Object(r.b)(i.a,{chart:"\nsequenceDiagram\n    dApp->>Background: Request\n    Background->>Wallet: Permission Prompt\n    Wallet->>Wallet: User Confirmation\n    Wallet->>Background: Permission Response\n    Background->>dApp: Response\n",mdxType:"Mermaid"}),Object(r.b)("h2",{id:"operation-request"},"Operation Request"),Object(r.b)(i.a,{chart:"\nsequenceDiagram\n    dApp->>Background: Request\n    Background->>Wallet: Operation Request\n    opt no threshold\n        Wallet->>Wallet: User confirmation\n    end\n    Wallet->>Wallet: Forge Operation\n    Wallet->>Wallet: Sign\n    Wallet->>Wallet: Broadcast\n    Wallet->>Background: Operation Response\n    Background->>dApp: Response\n",mdxType:"Mermaid"}),Object(r.b)("h2",{id:"signing-request"},"Signing Request"),Object(r.b)(i.a,{chart:"\nsequenceDiagram\n    dApp->>Background: Request\n    Background->>Wallet: Sign Request\n    opt no threshold\n        Wallet->>Wallet: User confirmation\n    end\n    Wallet->>Wallet: Sign\n    Wallet->>Background: Sign Response\n    Background->>dApp: Response\n",mdxType:"Mermaid"}),Object(r.b)("h2",{id:"broadcast-request"},"Broadcast Request"),Object(r.b)(i.a,{chart:"\nsequenceDiagram\n    dApp->>Background: Request\n    Background->>Wallet: Signing Request\n    Wallet->>Wallet: User confirmation\n    Wallet->>Background: Signing Response\n    Background->>Background: Broadcast\n    Background->>dApp: Response\n",mdxType:"Mermaid"}))}l.isMDXComponent=!0},295:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(355),i=t.n(r);i.a.initialize({startOnLoad:!0});n.a=function(e){var n=e.chart;return Object(a.useEffect)((function(){i.a.contentLoaded()}),[]),o.a.createElement("div",{className:"mermaid"},n)}},359:function(e,n,t){var a={"./locale":289,"./locale.js":289};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=359}}]);