(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{7133:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/yabla",function(){return n(3093)}])},8598:function(e,r,n){"use strict";n.d(r,{Et:function(){return u},Pg:function(){return d}});var t=n(5893),i=n(1664),s=n.n(i),l=n(5675),a=n.n(l),c=n(8641),o=n(917);let u=e=>{let{children:r,id:n,title:i,thumbnail:l}=e;return(0,t.jsx)(c.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(s(),{href:"/projects/".concat(n),passHref:!0,scroll:!1,children:(0,t.jsxs)(c.fG,{cursor:"pointer",children:[(0,t.jsx)(a(),{src:l,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(c.AB,{href:"/projects/".concat(n),children:(0,t.jsx)(c.xv,{mt:2,fontSize:20,children:i})}),(0,t.jsx)(c.xv,{fontSize:14,children:r})]})})})},d=()=>(0,t.jsx)(o.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})},951:function(e,r,n){"use strict";var t=n(5893),i=n(3014),s=n(9008),l=n.n(s),a=n(8598);let c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},o=e=>{let{children:r,title:n}=e,s="".concat(n," - Amir Rasouli");return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:s}),(0,t.jsx)("meta",{name:"twitter:title",content:s}),(0,t.jsx)("meta",{property:"og:title",content:s})]}),r,(0,t.jsx)(a.Pg,{})]})})};r.Z=o},5930:function(e,r,n){"use strict";var t=n(7297),i=n(6829);function s(){let e=(0,t.Z)(["\n  text-align: justify;\n  text-indent: 1em;\n  hyphens: auto;\n"]);return s=function(){return e},e}let l=i.Z.p(s());r.Z=l},1805:function(e,r,n){"use strict";n.d(r,{h_:function(){return p},Dx:function(){return f},WZ:function(){return j}});var t=n(5893),i=n(1664),s=n.n(i),l=n(8641),a=n(7294),c=n(3904),o=n(2446),u=n(9653),d=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r,h=(0,c.Gp)(function(e,r){let{htmlWidth:n,htmlHeight:t,alt:i,...s}=e;return a.createElement("img",{width:n,height:t,ref:r,alt:i,...s})});o.Ts&&(h.displayName="NativeImage");var x=(0,c.Gp)(function(e,r){let{fallbackSrc:n,fallback:t,src:i,srcSet:s,align:l,fit:x,loading:m,ignoreFallback:f,crossOrigin:j,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:g,...b}=e,y=null!=m||f||!(void 0!==n||void 0!==t),v=function(e){let{loading:r,src:n,srcSet:t,onLoad:i,onError:s,crossOrigin:l,sizes:c,ignoreFallback:o}=e,[d,h]=(0,a.useState)("pending");(0,a.useEffect)(()=>{h(n?"loading":"pending")},[n]);let x=(0,a.useRef)(),m=(0,a.useCallback)(()=>{if(!n)return;f();let e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),c&&(e.sizes=c),r&&(e.loading=r),e.onload=e=>{f(),h("loaded"),null==i||i(e)},e.onerror=e=>{f(),h("failed"),null==s||s(e)},x.current=e},[n,l,t,c,i,s,r]),f=()=>{x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,u.Gw)(()=>{if(!o)return"loading"===d&&m(),()=>{f()}},[d,m,o]),o?"loaded":d}({...e,ignoreFallback:y}),_=d(v,p),E={ref:r,objectFit:x,objectPosition:l,...y?b:(0,o.CE)(b,["onError","onLoad"])};return _?t||a.createElement(c.m$.img,{as:h,className:"chakra-image__placeholder",src:n,...E}):a.createElement(c.m$.img,{as:h,src:i,srcSet:s,crossOrigin:j,loading:m,referrerPolicy:g,className:"chakra-image",...E})});(0,c.Gp)((e,r)=>a.createElement(c.m$.img,{ref:r,as:h,className:"chakra-image",...e})),o.Ts&&(x.displayName="Image");var m=n(3382);let f=e=>{let{children:r}=e;return(0,t.jsxs)(l.xu,{children:[(0,t.jsx)(s(),{href:"/projects",passHref:!0,children:(0,t.jsx)(l.rU,{children:"Projects"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(m.XC,{})," "]}),(0,t.jsx)(l.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},j=e=>{let{src:r,alt:n}=e;return(0,t.jsx)(x,{borderRadius:"lg",w:"full",src:r,alt:n,mb:4})},p=e=>{let{children:r}=e;return(0,t.jsx)(l.Ct,{colorScheme:"green",mr:2,children:r})}},3093:function(e,r,n){"use strict";n.r(r);var t=n(5893),i=n(8641),s=n(3382),l=n(1805),a=n(5930),c=n(951);let o=()=>(0,t.jsx)(c.Z,{title:"Yabla Userscript",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(l.Dx,{children:["Yabla Userscript ",(0,t.jsx)(i.Ct,{children:"2022"})]}),(0,t.jsx)(a.Z,{children:"Added some features to a Chinese learning app by injecting JS/HTML/CSS into Yabla.com via a userscript. I previously used this app daily for learning Chinese, but there was so much room for improvement and new features. So, I decided to add them myself."}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(l.h_,{children:"Platform"}),(0,t.jsx)("span",{children:"Web/Mobile"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(l.h_,{children:"Stack"}),(0,t.jsx)("span",{children:"JavaScript, PostgreSQL"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(l.h_,{children:"Source"}),(0,t.jsxs)(i.rU,{href:"https://github.com/arasouli91/yabla-userscript",children:["Yabla Userscript GitHub",(0,t.jsx)(s.h0,{mx:"2px"})]})]})]})]})});r.default=o}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=7133)}),_N_E=e.O()}]);