import{_,h as i,a as p,o as h,c as u,b as t,t as e,j as m,e as r}from"./index-rTR_PZWA.js";import{c as g}from"./cartStore-2D8HFzyE.js";/* empty css              */var v={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:n,VITE_PATH:d}=v,b={data(){return{cart:{},product:{}}},methods:{getProduct(){const{id:o}=this.$route.params;i.get(`${n}/v2/api/${d}/product/${o}`).then(c=>{console.log(c),this.product=c.data.product})},changeCartQty(o,c=1){const a={product_id:o.product_id,qty:o.qty};i.put(`${n}/v2/api/${d}/cart/${o.id}`,{data:a}).then(l=>{console.log(l),this.getCarts()})},getCarts(){i.get(`${n}/v2/api/${d}/cart`).then(o=>{console.log(o),this.cart=o.data.data})},...p(g,["addToCart"])},mounted(){this.getCarts(),console.log(this.$route),this.getProduct()}},f={class:"bg-primary mt-5"},y={class:"container text-info"},x={class:"row py-6"},T={class:"product-img col-md-6 d-flex justify-content-end col-sm-12"},E=t("div",null,null,-1),V=["src"],$={class:"col-md-6 col-sm-12",style:{position:"relative"}},C={class:"row mb-4"},w={class:"col-md-8 my-2"},P={class:"border-bottom col-6 mb-2"},R={class:"card-text mb-6"},S={class:"card-text mb-6"},k=t("p",null,"2台24小時小米攝影機全視角觀看 每日貓管家清理貓砂2次 ",-1),q=t("p",{class:"mb-6"},"貓管家每日回報愛貓住宿、飲食、生活、 健康狀況，以及照片分享",-1),A={class:"mb-sm-4"},B={class:"mb-4 mb-sm-6"},D=t("div",{class:"col-4"},[t("h5",{class:"vertical-text position-absolute",style:{right:"0px"}},[r(" 專屬對外窗，"),t("br"),r(" 徜徉陽光與森林公園美景，"),t("br"),r(" 最頂級的外宿享受。 ")])],-1),I={class:"d-grid",style:{bottom:"0px",width:"100%"}},U=t("span",null,"預訂房間",-1),L=[U],j=t("hr",null,null,-1);function H(o,c,a,l,s,M){return h(),u("div",f,[t("div",y,[t("div",x,[t("div",T,[E,t("img",{src:s.product.imageUrl,alt:"",height:"700px",width:"500"},null,8,V)]),t("div",$,[t("div",C,[t("div",w,[t("div",P,[t("h2",null,e(s.product.title)+"。 ",1)]),t("p",R,e(s.product.unit),1),t("p",S,e(s.product.content),1),k,q,t("h3",A,e(s.product.price)+" 元 / 一貓",1),t("p",null,[t("small",B,"原價 "+e(s.product.origin_price)+" 元 / 一貓",1)])]),D,t("div",I,[t("a",{href:"",class:"btn btn-info text-primary btn-lg opacity",onClick:c[0]||(c[0]=m(N=>o.addToCart(s.product.id,o.qty),["prevent"]))},L),j])])])])])])}const F=_(b,[["render",H]]);export{F as default};