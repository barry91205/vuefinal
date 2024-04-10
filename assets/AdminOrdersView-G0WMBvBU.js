import{M as E}from"./modal-ifx9lW83.js";import{_ as v,h as y,S as k,o as r,c as l,b as e,t as d,q as h,v as u,n as b,F as p,i as g,O as $,e as m,r as f,d as O}from"./index-rTR_PZWA.js";import{P as V}from"./PaginationView-0x-PMZ2G.js";var T={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:U,VITE_PATH:D}=T,P={props:["tempOrder","getOrder"],data(){return{orderEdittModal:null,order:{}}},methods:{showModal(){this.orderEdittModal.show()},hideModal(){this.orderEdittModal.hide()},updateOrder(){const n=`${U}/v2/api/${D}/admin/order/${this.tempOrder.id}`;y["put"](n,{data:this.tempOrder}).then(a=>{this.$emit("update"),k.fire({icon:"success",title:"成功取得產品資訊",showConfirmButton:!1,timer:1500}),this.hideModal()}).catch(a=>{alert(a.response.data.message)})}},watch:{tempOrder(){this.order=this.tempOrder}},mounted(){this.orderEdittModal=new E(this.$refs.OrderEditModal,{keyboard:!1,backdrop:"static"})}},I={id:"OrderEditModal",ref:"OrderEditModal",class:"modal fade",tabindex:"-1","aria-labelledby":"OrderEditModal","aria-hidden":"true"},L={class:"modal-dialog modal-xl"},R={class:"modal-content border-0"},S={class:"modal-header bg-dark text-white"},A={id:"OrderEditModal",class:"modal-title"},C=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),B={class:"modal-body text-start"},H={class:"h5 fw-bold"},N={class:"h5 fw-bold"},q=e("hr",null,null,-1),j={class:"row"},z={class:"col-sm-12"},F={class:"row mb-2"},G={key:0,class:"row"},J={class:"col-md-6 mb-4"},K=e("label",{for:"people",class:"form-label"},"訂購人姓名",-1),Q={class:"col-md-6 mb-4"},W=e("label",{for:"people",class:"form-label"},"訂單電話",-1),X={class:"col-md-6 mb-4"},Y=e("label",{for:"people",class:"form-label"},"訂單電子郵件",-1),Z={class:"col-md-6 mb-4"},ee=e("label",{for:"people",class:"form-label"},"訂單電子郵件",-1),te={class:"col-md-12 mb-4"},se=e("label",{for:"people",class:"form-label"},"訂單留言",-1),oe={class:"col-md-12 mb-1"},de=e("label",{for:"people",class:"form-label mb-2"},"付款狀態",-1),re={key:0,class:"text-success"},le={key:1,class:"text-danger fw-bold"},ae=e("hr",null,null,-1),ne={class:"row mt-2"},ie={class:"col-lg-12"},ce={key:0,class:"mb-2"},_e={class:"table table-hover border rounded rounded-3"},he=e("thead",null,[e("tr",{class:"text-center"},[e("th",{scope:"col"}," 編號"),e("th",{colspan:"1",scope:"col"},"房型圖"),e("th",{colspan:"1",scope:"col"},"房名/單位"),e("th",{colspan:"1",scope:"col",class:"text-end"},"小計")])],-1),ue={class:"ps-3 py-2 text-center"},pe={scope:"row"},me={class:"d-flex justify-content-center"},be={style:{width:"180px"}},fe={class:"text-end"},Oe={class:"text-end fw-bold me-2"},ge={class:"modal-footer"},ve=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ye(n,t,a,M,o,i){return r(),l("div",I,[e("div",L,[e("div",R,[e("div",S,[e("h5",A,[e("span",null,"編輯訂單 "+d(a.tempOrder.id),1)]),C]),e("div",B,[e("div",H,"訂單編號："+d(a.tempOrder.id),1),e("div",N,"訂單日期： "+d(new Date(o.order.create_at*1e3).toLocaleDateString()),1),q,e("div",j,[e("div",z,[e("div",F,[o.order.user?(r(),l("div",G,[e("div",J,[K,h(e("input",{id:"people",type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>o.order.user.name=s),disabled:""},null,512),[[u,o.order.user.name]])]),e("div",Q,[W,h(e("input",{id:"people",type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>o.order.user.tel=s),disabled:""},null,512),[[u,o.order.user.tel]])]),e("div",X,[Y,h(e("input",{id:"people",type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=s=>o.order.user.email=s),disabled:""},null,512),[[u,o.order.user.email]])]),e("div",Z,[ee,h(e("input",{id:"people",type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=s=>o.order.user.address=s),disabled:""},null,512),[[u,o.order.user.address]])]),e("div",te,[se,h(e("textarea",{id:"people",type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=s=>o.order.message=s),disabled:""},`\r
                               `,512),[[u,o.order.message]])]),e("div",oe,[de,e("div",null,[o.order.is_paid?(r(),l("span",re,"已付款")):(r(),l("span",le,"未付款"))])])])):b("",!0)]),ae,e("div",ne,[e("div",ie,[a.tempOrder&&a.tempOrder.products?(r(),l("div",ce," 訂單內容 ("+d(Object.keys(a.tempOrder.products).length)+") ",1)):b("",!0),e("table",_e,[he,e("tbody",ue,[(r(!0),l(p,null,g(o.order.products,s=>(r(),l("tr",{key:s.id,class:"align-middle"},[e("th",pe,d(s.product.num),1),e("td",me,[e("div",be,[e("div",{class:"rounded",style:$([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${s.product.imageUrl})`}])},null,4)])]),e("td",null,d(s.product.title)+" x "+d(s.qty)+" / "+d(s.product.unit),1),e("td",fe,d(s.total)+" 元 ",1)]))),128))])]),e("p",Oe,"總金額："+d(o.order.total),1)])])])])]),e("div",ge,[ve,e("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(...s)=>i.updateOrder&&i.updateOrder(...s))}," 確認 ")])])])],512)}const Me=v(P,[["render",ye]]);var Ee={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:we,VITE_PATH:xe}=Ee,ke={props:["tempOrder","getOrder"],data(){return{delOrderModal:null}},methods:{showModal(){this.delOrderModal.show()},hideModal(){this.delOrderModal.hide()},deleteOrder(){const n=`${we}/v2/api/${xe}/admin/order/${this.tempOrder.id}`;y.delete(n,{data:this.tempOrder}).then(t=>{this.$Swal.fire({icon:"success",title:"成功刪除產品",showConfirmButton:!1,timer:1500}),this.$emit("update"),this.hideModal()}).catch(t=>{alert(t.response.data.message)})}},mounted(){this.delOrderModal=new E(this.$refs.delOrderModal,{keyboard:!1,backdrop:"static"}),console.log(this.orders)}},$e={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ve={class:"modal-dialog"},Te={class:"modal-content border-0"},Ue={class:"modal-header bg-danger text-white"},De={id:"delProductModalLabel",class:"modal-title"},Pe=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ie={class:"modal-body text-start"},Le={class:"text-danger"},Re={class:"fw-bold"},Se=e("div",{class:"mt-2"}," (刪除後將無法恢復)。 ",-1),Ae={class:"modal-footer"},Ce=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Be(n,t,a,M,o,i){return r(),l("div",$e,[e("div",Ve,[e("div",Te,[e("div",Ue,[e("h5",De,[e("span",null,"訂單編號"+d(a.tempOrder.id),1)]),Pe]),e("div",Ie,[m(" 是否刪除訂單編號為 "),e("strong",Le,[e("span",Re,d(a.tempOrder.id),1)]),m(" 訂單？ "),Se]),e("div",Ae,[Ce,e("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...s)=>i.deleteOrder&&i.deleteOrder(...s))}," 確認刪除 ")])])])],512)}const He=v(ke,[["render",Be]]);var Ne={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:qe,VITE_PATH:je}=Ne,ze={data(){return{productsData:[],orders:[],tempOrder:{},pagination:{},isLoading:!0,page:{}}},components:{OrderEditModal:Me,OrdelDelModal:He,Pagination:V},methods:{getOrder(n=1){y.get(`${qe}/v2/api/${je}/admin/orders?page=${n}`).then(t=>{this.orders=t.data.orders,this.productsData=t.data.orders,this.pagination=t.data.pagination}).catch(t=>{this.$Swal.fire({icon:"error",title:t.response.data.message})})},openModal(n,t){n==="edit"?(this.tempOrder={...t},this.status=!1,console.log(this.tempOrder),this.$refs.orderEditModal.showModal()):n==="delete"&&(this.tempOrder={...t},console.log(this.tempOrder),this.$refs.delOrderModal.showModal())}},mounted(){this.getOrder()}},Fe={class:"container"},Ge=e("h2",{class:"fw-bold py-4"},"訂單管理",-1),Je={class:"table-hover table mt-4"},Ke=e("thead",{class:"bg-dark"},[e("tr",{class:"align-middle"},[e("th",{width:"120"},"訂單編號"),e("th",{width:"120"},"訂單時間"),e("th",{width:"120"},"訂房者"),e("th",{width:"120"},"訂購房型"),e("th",{width:"120"},"應付金額"),e("th",{width:"120"},"狀態"),e("th",{width:"120"},"編輯")])],-1),Qe=e("br",null,null,-1),We={key:0,class:"text-success"},Xe={key:1,class:"text-danger"},Ye={class:"btn-group"},Ze=["onClick"],et={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},tt=["onClick"],st={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function ot(n,t,a,M,o,i){const s=f("Pagination"),w=f("OrderEditModal"),x=f("OrdelDelModal");return r(),l(p,null,[e("div",Fe,[Ge,e("table",Je,[Ke,e("tbody",null,[(r(!0),l(p,null,g(o.orders,c=>(r(),l("tr",{key:c.id},[e("td",null,d(c.id),1),e("td",null,d(new Date(c.create_at*1e3).toLocaleDateString()),1),e("td",null,d(c.user.name),1),e("td",null,[(r(!0),l(p,null,g(c.products,_=>(r(),l(p,{key:_.id},[m(d(_.product.title)+" x"+d(_.qty),1),Qe],64))),128))]),e("td",null,d(c.total),1),e("td",null,[c.is_paid?(r(),l("span",We,"已付款")):(r(),l("span",Xe,"未付款"))]),e("td",null,[e("div",Ye,[e("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:_=>i.openModal("edit",c)},[c.num===0?(r(),l("span",et)):b("",!0),m(" 編輯 ")],8,Ze),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:_=>i.openModal("delete",c)},[c.num===0?(r(),l("span",st)):b("",!0),m(" 刪除 ")],8,tt)])])]))),128))])]),O(s,{pagination:o.pagination,onEmitPages:i.getOrder},null,8,["pagination","onEmitPages"])]),O(w,{ref:"orderEditModal","temp-order":o.tempOrder,onUpdate:i.getOrder},null,8,["temp-order","onUpdate"]),O(x,{ref:"delOrderModal","temp-order":o.tempOrder,onUpdate:i.getOrder},null,8,["temp-order","onUpdate"])],64)}const at=v(ze,[["render",ot]]);export{at as default};
