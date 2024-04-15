import{_ as b,S as x,L as k,h as g,a as L,r as _,o as n,c,b as t,d as l,w as d,F as p,i as u,e as h,t as e,j as P}from"./index-5WjZ_xmk.js";import{P as w}from"./PaginationView-OZjm4PxW.js";import{c as $}from"./cartStore-y2xD4eZL.js";/* empty css              */var T={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_PATH:v}=T,C={data(){return{cart:[],products:[],categories:["1貓房","2貓房","4貓房","5貓房"],isLoading:!0,fullPage:!0,loader:"bars",Swal:x,pagination:{},currentCategory:{}}},components:{Loading:k,Pagination:w},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},methods:{getProducts(){this.isLoading=!0;const{category:o=""}=this.$route.query;g.get(`${m}/v2/api/${v}/products?category=${o}`).then(i=>{this.products=i.data.products,this.pagination=i.data.pagination,this.isLoading=!1}).catch(i=>{this.$Swal.fire({icon:"error",title:i.response.data.message})}).finally(()=>{})},getCarts(){g.get(`${m}/v2/api/${v}/cart`).then(o=>{this.cart=o.data.data}).catch(o=>{this.$Swal.fire({icon:"error",title:o.response.data.message})}).finally(()=>{this.isLoading=!1})},...L($,["addToCart","getCart"])},mounted(){this.getProducts(),this.getCarts()}},E=t("div",{class:"aboutbanner mt-5",style:{"background-image":"url('images/roomforest.jpg')",height:"200px"}},[t("h2",{class:"text-info"},"貓咪旅館。")],-1),S={class:"bg-primary py-4"},V={class:"container text-info py-6 vl-parent"},R={class:"row py-md-6 py-sm-0"},B={class:"col-md-3 mb-6"},D={class:"position-sticky",style:{top:"5rem"}},N={class:"card text-center bg-secondary mb-2"},U=t("div",{class:"card-header py-3 text-info"}," 房型類別 ",-1),A={class:"list-group list-group-flush"},I={class:"list-group-item list"},j={class:"col-md-9 col-sm-12"},q={class:"row"},F={class:"col-3"},H={class:"image-container"},M=["src"],O={class:"col-9 position-relative"},z={class:"row mb-4"},G={class:"col-md-8 col-sm-5 title"},J={class:"py-4"},K={class:"card-title border-bottom mb-2"},Q={class:"card-text mb-4"},W={class:"badge bg-secondary"},X={class:"price col-md-4 p-md-3 text-end position-relative col-sm-6 p-sm-2"},Y={key:0},Z={key:1},tt={class:"text-secondary"},st={class:"card-text mb-7"},ot={class:"text-muted"},et={class:"row"},it={class:"col-8"},at={class:"col-md-7 content"},nt={class:"col-4"},ct={class:"btn-group position-absolute",role:"group","aria-label":"Basic outlined example",style:{bottom:"10px",right:"25px"}},lt={type:"button",class:"btn btn-outline-primary btn-sm"},rt=["onClick"];function dt(o,i,_t,pt,a,ht){const f=_("Loading"),r=_("RouterLink"),y=_("Pagination");return n(),c(p,null,[E,t("div",S,[t("div",V,[l(f,{active:a.isLoading,"onUpdate:active":i[0]||(i[0]=s=>a.isLoading=s),"can-cancel":!1,"is-full-page":a.fullPage,loader:a.loader},null,8,["active","is-full-page","loader"]),t("div",R,[t("div",B,[t("div",D,[t("div",N,[U,t("ul",A,[t("li",I,[l(r,{class:"py-2 nav-link",to:"/products"},{default:d(()=>[h("全部房型")]),_:1})]),(n(!0),c(p,null,u(a.categories,s=>(n(),c("li",{class:"list-group-item list",key:s},[l(r,{class:"py-2 nav-link",to:`/products?category=${s}`},{default:d(()=>[h(e(s),1)]),_:2},1032,["to"])]))),128))])])])]),t("div",j,[(n(!0),c(p,null,u(a.products,s=>(n(),c("div",{class:"card mb-3",key:s.id},[t("div",q,[t("div",F,[t("div",H,[l(r,{to:`/product/${s.id}`},{default:d(()=>[t("img",{src:s.imageUrl,class:"rounded-start object-fit-cover",alt:"...",width:"223",height:"300",style:{"z-index":"1"}},null,8,M)]),_:2},1032,["to"])])]),t("div",O,[t("div",z,[t("div",G,[t("div",J,[t("h5",K,e(s.title),1),t("p",Q,e(s.unit),1),t("span",W,e(s.category),1)])]),t("div",X,[s.origin_price===s.price?(n(),c("h3",Y,"NT$ "+e(s.price)+"/貓",1)):(n(),c("div",Z,[t("h3",tt,"NT$ "+e(s.price)+"/貓",1),t("del",st,[t("small",ot,e(s.origin_price)+"/一貓",1)])]))])]),t("div",et,[t("div",it,[t("div",at,e(s.content),1)]),t("div",nt,[t("div",ct,[t("button",lt,[l(r,{to:`/product/${s.id}`,class:"nav-link"},{default:d(()=>[h("查看更多")]),_:2},1032,["to"])]),t("button",{type:"button",class:"btn btn-primary",onClick:P(gt=>o.addToCart(s.id),["prevent"])}," 加入購物車 ",8,rt)])])])])])]))),128)),l(y,{pagination:a.pagination,onEmitPages:o.getData},null,8,["pagination","onEmitPages"])])])])])],64)}const yt=b(C,[["render",dt]]);export{yt as default};
