import{_ as m,L as u,r as l,o as i,c as d,b as t,d as g,F as h,i as f,f as v,K as L,w as y,t as n}from"./index-5WjZ_xmk.js";import{A as b}from"./aos-ZOct6DkL.js";var x={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:V,VITE_PATH:A}=x,E={data(){return{articles:[],pagination:{},isLoading:!0}},components:{Loading:u},methods:{getArticles(a=1){this.isLoading=!0,this.$axios.get(`${V}/v2/api/${A}/articles?page=${a}`).then(s=>{const{articles:r,pagination:c}=s.data;this.articles=r,this.pagination=c}).catch(s=>{this.$Swal.fire({icon:"error",title:s.response.data.message})}).finally(()=>{this.isLoading=!1})}},mounted(){b.init({offset:100,delay:0,duration:400,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"}),this.getArticles()}},S={class:"bg-primary"},k={class:"container text-info py-6"},w=v('<div class="row pb-6 pb-sm-0"><div class="col-md-6"><div class="col-md-4 my-6 me-2"><div class="border-bottom"><h2>喵星球<br> 最新消息。 </h2></div></div></div><div class="col-md-6"><div class="col-md-4 my-6 me-2 my-sm-0"></div><h5 class="vertical-text"> 喵星球最新消息<br> 獨家新聞。 </h5></div></div>',1),R={class:"news"},$={class:"list-group list-group-flush my-lg-4 border-secondary","data-aos":"fade-up"},D={class:"list-group-item py-2 article-hover border-left"},T={class:"me-2 text-secondary"},B={class:"text-light opacity-50 px-2"};function P(a,s,r,c,o,I){const p=l("Loading"),_=l("RouterLink");return i(),d("div",S,[t("div",k,[g(p,{active:o.isLoading,"onUpdate:active":s[0]||(s[0]=e=>o.isLoading=e),"can-cancel":!1,"is-full-page":a.fullPage,loader:a.loader},null,8,["active","is-full-page","loader"]),w,t("div",R,[t("ul",$,[(i(!0),d(h,null,f(o.articles,e=>(i(),L(_,{key:e.id,class:"text-decoration-none",to:`/article/${e.id}`,exact:""},{default:y(()=>[t("li",D,[t("span",T,n(new Date(e.create_at*1e3).toLocaleDateString()),1),t("span",B,n(e.tag),1),t("h5",null,n(e.title),1)])]),_:2},1032,["to"]))),128))])])])])}const O=m(E,[["render",P]]);export{O as default};