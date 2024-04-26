import{_ as p,L as v,h as c,r as f,o as l,c as i,b as t,d as m,n as g,t as r,F as b,i as y,f as w,e as a}from"./index-JkFsX9xh.js";var x={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:u,VITE_PATH:h}=x,L={data(){return{order:{},orderId:{},user:{},productsData:[],total:0,isLoading:!0,fullPage:!0,loader:"bars"}},components:{Loading:v},methods:{getOrder(){this.isLoading=!0;const d=`${u}/v2/api/${h}/order/${this.orderId}`;c.get(d).then(s=>{this.order=s.data.order,this.productsData=s.data.order.products,this.isLoading=!1}).catch(()=>{})},payOrder(){const d=`${u}/v2/api/${h}/pay/${this.orderId}`;c.post(d).then(()=>{this.getOrder(),this.$Swal.fire({title:"成功付款",icon:"success",timer:2e3,showConfirmButton:!1}),this.$router.push("/orderfinish")}).catch(s=>{this.$Swal.fire({icon:"error",title:s.response.data.message})})},formatPrice(d){return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},created(){this.orderId=this.$route.params.id,this.getOrder()},mounted(){this.getOrder()}},O={class:"bg-primary"},V={class:"container text-info py-6"},E=w('<div class="row"><div class="col-md-3 col-sm-5 py-6"><div class="border-bottom mb-2"><h2>訂單確認。</h2></div></div><div class="col-8"></div></div><div class="row text-center"><div class="col-4 step rounded-start">1.填寫資料</div><div class="col-4 step state">2.確認付款</div><div class="col-4 step rounded-end">3.訂單完成</div></div>',2),S={class:"row py-4"},T={class:"col-md-6 col-sm-12 border-top bg-secondary p-4",style:{height:"100%"}},I=t("h2",null,"訂單人資訊",-1),D=t("hr",null,null,-1),P={class:"table"},k=t("thead",null,null,-1),B=t("th",{scope:"row"},"姓名",-1),N=t("th",{scope:"row"},"電話",-1),R=t("th",{scope:"row"},"Email",-1),j={colspan:"2"},C=t("th",{scope:"row"},"地址",-1),U=t("tr",null,[t("th",{scope:"row"},"匯款方式"),t("td",null,"信用卡")],-1),A=t("tr",null,[t("th",{scope:"row"},"匯款狀態"),t("td",{class:"text-danger"},"尚未付款")],-1),F={class:"col-md-6 col-sm-12 border-top bg-secondary p-4",style:{height:"100%"}},H=t("h2",null,"訂單明細",-1),M=t("hr",null,null,-1),q={class:"d-flex justify-content-between mb-4"},z=t("h5",null,"訂單編號",-1),G={class:"d-flex justify-content-between mb-4"},J=t("h5",null,"訂購日期",-1),K={class:"d-flex justify-content-between mb-4"},Q={class:"d-flex justify-content-between"},W=t("h5",null,"共計",-1);function X(d,s,Y,Z,e,n){const _=f("Loading");return l(),i("div",O,[t("div",V,[m(_,{active:e.isLoading,"onUpdate:active":s[0]||(s[0]=o=>e.isLoading=o),"can-cancel":!1,"is-full-page":e.fullPage,loader:e.loader},null,8,["active","is-full-page","loader"]),E,t("div",S,[t("div",T,[I,D,t("form",{action:"",onSubmit:s[1]||(s[1]=g((...o)=>n.payOrder&&n.payOrder(...o),["prevent"]))},[t("table",P,[k,t("tbody",null,[t("tr",null,[B,t("td",null,r(e.order.user.name),1)]),t("tr",null,[N,t("td",null,r(e.order.user.tel),1)]),t("tr",null,[R,t("td",j,r(e.order.user.email),1)]),t("tr",null,[C,t("td",null,r(e.order.user.address),1)]),U,A])])],32)]),t("div",F,[H,M,t("div",q,[z,t("span",null,r(e.order.id),1)]),t("div",G,[J,t("span",null,r(e.order.create_at),1)]),(l(!0),i(b,null,y(e.productsData,o=>(l(),i("div",{class:"mb-4",key:o.id},[t("div",K,[t("p",null,[a(r(o.product.title),1),t("span",null," x "+r(o.qty),1)]),a("NT$ "+r(o.product.price),1)])]))),128)),t("div",Q,[W,t("span",null,"NT$ "+r(e.order.total),1)]),t("button",{type:"submit",class:"btn btn-info rounded-0 w-100 mt-4",onClick:s[2]||(s[2]=(...o)=>n.payOrder&&n.payOrder(...o))},"確認送出")])])])])}const tt=p(L,[["render",X]]);export{tt as default};