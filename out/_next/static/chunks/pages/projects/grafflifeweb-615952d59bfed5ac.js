(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{9548:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/grafflifeweb",function(){return n(2904)}])},8598:function(e,r,n){"use strict";n.d(r,{Et:function(){return u},Pg:function(){return d}});var t=n(5893),i=n(1664),s=n.n(i),a=n(5675),l=n.n(a),c=n(8641),o=n(917);let u=e=>{let{children:r,id:n,title:i,thumbnail:a}=e;return(0,t.jsx)(c.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(s(),{href:"/projects/".concat(n),passHref:!0,scroll:!1,children:(0,t.jsxs)(c.fG,{cursor:"pointer",children:[(0,t.jsx)(l(),{src:a,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(c.AB,{href:"/projects/".concat(n),children:(0,t.jsx)(c.xv,{mt:2,fontSize:20,children:i})}),(0,t.jsx)(c.xv,{fontSize:14,children:r})]})})})},d=()=>(0,t.jsx)(o.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})},951:function(e,r,n){"use strict";var t=n(5893),i=n(3014),s=n(9008),a=n.n(s),l=n(8598);let c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},o=e=>{let{children:r,title:n}=e,s="".concat(n," - Amir Rasouli");return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:s}),(0,t.jsx)("meta",{name:"twitter:title",content:s}),(0,t.jsx)("meta",{property:"og:title",content:s})]}),r,(0,t.jsx)(l.Pg,{})]})})};r.Z=o},5930:function(e,r,n){"use strict";var t=n(7297),i=n(6829);function s(){let e=(0,t.Z)(["\n  text-align: justify;\n  text-indent: 1em;\n  hyphens: auto;\n"]);return s=function(){return e},e}let a=i.Z.p(s());r.Z=a},1805:function(e,r,n){"use strict";n.d(r,{h_:function(){return p},Dx:function(){return m},WZ:function(){return j}});var t=n(5893),i=n(1664),s=n.n(i),a=n(8641),l=n(7294),c=n(3904),o=n(2446),u=n(9653),d=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r,f=(0,c.Gp)(function(e,r){let{htmlWidth:n,htmlHeight:t,alt:i,...s}=e;return l.createElement("img",{width:n,height:t,ref:r,alt:i,...s})});o.Ts&&(f.displayName="NativeImage");var h=(0,c.Gp)(function(e,r){let{fallbackSrc:n,fallback:t,src:i,srcSet:s,align:a,fit:h,loading:x,ignoreFallback:m,crossOrigin:j,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:g,...b}=e,y=null!=x||m||!(void 0!==n||void 0!==t),E=function(e){let{loading:r,src:n,srcSet:t,onLoad:i,onError:s,crossOrigin:a,sizes:c,ignoreFallback:o}=e,[d,f]=(0,l.useState)("pending");(0,l.useEffect)(()=>{f(n?"loading":"pending")},[n]);let h=(0,l.useRef)(),x=(0,l.useCallback)(()=>{if(!n)return;m();let e=new Image;e.src=n,a&&(e.crossOrigin=a),t&&(e.srcset=t),c&&(e.sizes=c),r&&(e.loading=r),e.onload=e=>{m(),f("loaded"),null==i||i(e)},e.onerror=e=>{m(),f("failed"),null==s||s(e)},h.current=e},[n,a,t,c,i,s,r]),m=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,u.Gw)(()=>{if(!o)return"loading"===d&&x(),()=>{m()}},[d,x,o]),o?"loaded":d}({...e,ignoreFallback:y}),w=d(E,p),_={ref:r,objectFit:h,objectPosition:a,...y?b:(0,o.CE)(b,["onError","onLoad"])};return w?t||l.createElement(c.m$.img,{as:f,className:"chakra-image__placeholder",src:n,..._}):l.createElement(c.m$.img,{as:f,src:i,srcSet:s,crossOrigin:j,loading:x,referrerPolicy:g,className:"chakra-image",..._})});(0,c.Gp)((e,r)=>l.createElement(c.m$.img,{ref:r,as:f,className:"chakra-image",...e})),o.Ts&&(h.displayName="Image");var x=n(3382);let m=e=>{let{children:r}=e;return(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(s(),{href:"/projects",passHref:!0,children:(0,t.jsx)(a.rU,{children:"Projects"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(x.XC,{})," "]}),(0,t.jsx)(a.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},j=e=>{let{src:r,alt:n}=e;return(0,t.jsx)(h,{borderRadius:"lg",w:"full",src:r,alt:n,mb:4})},p=e=>{let{children:r}=e;return(0,t.jsx)(a.Ct,{colorScheme:"green",mr:2,children:r})}},2904:function(e,r,n){"use strict";n.r(r);var t=n(5893),i=n(8641),s=n(3382),a=n(1805),l=n(5930),c=n(951);let o=()=>(0,t.jsx)(c.Z,{title:"GraffLife Web App",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(a.Dx,{children:["GraffLife Web App ",(0,t.jsx)(i.Ct,{children:"2021"})]}),(0,t.jsx)(l.Z,{children:"A web app for the GraffLife game. Uses Entity framework and Identity for user auth. Gives user's a UI for managing information related to the game."}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(a.h_,{children:"Platform"}),(0,t.jsx)("span",{children:"Web, Responsive Mobile"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(a.h_,{children:"Stack"}),(0,t.jsx)("span",{children:"C#/.NET, Blazor, Razor, Entity framework, MySQL"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(a.h_,{children:"Source"}),(0,t.jsxs)(i.rU,{href:"https://github.com/arasouli91/graffLifeWeb2",children:["GraffLifeWeb GitHub",(0,t.jsx)(s.h0,{mx:"2px"})]})]})]}),(0,t.jsx)(a.WZ,{src:"/images/works/gfwebapp.png",alt:"graff life"})]})});r.default=o}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=9548)}),_N_E=e.O()}]);