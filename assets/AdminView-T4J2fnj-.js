import{_,h as d,r as i,o as u,c as p,b as t,d as s,w as n,p as m,g as l}from"./index-YcKa0FCS.js";import{_ as b}from"./logo-w9H3WdxH.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f}=h,y={methods:{checkAdmin(){const a=`${f}/v2/api/user/check`;d.post(a).then(c=>{console.log(c.data.success)}).catch(c=>{console.log(c),this.$router.push("/adminLogin")})},created(){this.checkAdmin()},mounted(){this.$router.push("/admin/home")}}},o=a=>(m("data-v-9784e11a"),a=a(),l(),a),w={class:"container"},v={class:"row"},V={class:"col-3 bg-primary p-4 sidebarMenu"},k=o(()=>t("img",{src:b,alt:"",width:"200px"},null,-1)),x=o(()=>t("button",{type:"button",class:"btn btn-primary w-100 mb-2"},"後臺首頁",-1)),g=o(()=>t("button",{type:"button",class:"btn btn-primary w-100 mb-2"},"商品管理",-1)),E=o(()=>t("button",{type:"button",class:"btn btn-primary w-100 mb-2"},"訂單管理",-1)),I=o(()=>t("button",{type:"button",class:"btn btn-primary w-100 mb-2"},"酷碰管理",-1)),R=o(()=>t("button",{type:"button",class:"btn btn-primary w-100 mb-2"},"文章管理",-1)),$=o(()=>t("hr",null,null,-1)),S=o(()=>t("button",{type:"button",class:"btn btn-primary w-100 mb-2"},"回前台",-1)),A=o(()=>t("button",{type:"button",class:"btn btn-primary w-100 mb-2"},"登出",-1)),B={class:"col-9 ms-sm-auto col-lg-10 p-md-4 my-6 border text-primary"};function L(a,c,T,D,U,C){const e=i("router-link"),r=i("RouterView");return u(),p("div",w,[t("div",v,[t("div",V,[s(e,{to:"/home"},{default:n(()=>[k]),_:1}),s(e,{to:"/admin/home"},{default:n(()=>[x]),_:1}),s(e,{to:"/admin/products"},{default:n(()=>[g]),_:1}),s(e,{to:"/admin/orders"},{default:n(()=>[E]),_:1}),s(e,{to:"/admin/coupons"},{default:n(()=>[I]),_:1}),s(e,{to:"/admin/articles"},{default:n(()=>[R]),_:1}),$,s(e,{to:"/home"},{default:n(()=>[S]),_:1}),A]),t("div",B,[s(r)])])])}const O=_(y,[["render",L],["__scopeId","data-v-9784e11a"]]);export{O as default};
