import{_ as $,h as u,a as I,m as T,r as v,o as p,c as _,b as t,e as h,d as n,w as C,n as k,F as U,i as E,q as w,v as x,t as y,f as B,s as g}from"./index-rTR_PZWA.js";import{c as q}from"./cartStore-2D8HFzyE.js";/* empty css              */var N={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_PATH:c}=N,A={data(){return{cart:{},product:{},orderId:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon:""}},methods:{getCarts(){u.get(`${m}/v2/api/${c}/cart`).then(s=>{console.log(s),this.cart=s.data.data,this.totalPrice=s.data.data.total})},changeCartQty(s,e=1){const d={product_id:s.product_id,qty:s.qty};u.put(`${m}/v2/api/${c}/cart/${s.id}`,{data:d}).then(r=>{console.log(r),this.getCarts()})},updateCart(s){const e=`${c}/v2/api/${c}/cart/${s.id}`,d={product_id:s.product_id,qty:s.qty};u.put(e,{data:d}).then(r=>{alert(r.data.message),this.getCart()}).catch(r=>{alert(r.response.data.message)})},removeCartItem(s){u.delete(`${m}/v2/api/${c}/cart/${s}`).then(e=>{this.$Swal.fire({title:"成功刪除商品",icon:"success",position:"top-end",timer:1e3,showConfirmButton:!1}),this.getCarts()}).catch(e=>{this.$Swal.fire({icon:"error",title:e.response.data.message})})},deleteAllCarts(){const s=`${m}/v2/api/${c}/carts`;u.delete(s).then(e=>{this.$Swal.fire({title:"成功刪除所有商品",icon:"success",position:"top-end",timer:1e3,showConfirmButton:!1}),this.getCart()}).catch(e=>{this.$Swal.fire({icon:"error",title:e.response.data.message})})},...I(q,["addToCart","getCart"]),createOrder(s){const e=`${m}/v2/api/${c}/order`,d=this.form;u.post(e,{data:d}).then(r=>{this.$Swal.fire({icon:"success",title:"訂單成立"}),this.$refs.form.resetForm(),this.orderId=r.data.orderId,this.$router.push(`/paycheck/${r.data.orderId}`),localStorage.setItem("orderId",r.data.orderId),this.getCarts()}).catch(()=>{this.$Swal.fire({icon:"error",title:"訂單失敗"})})},useCoupon(s){const e=`${m}/v2/api/${c}/coupon`,d={data:{code:s}};u.post(e,d).then(r=>{this.getCart(),this.$Swal.fire({title:"套用成功",icon:"success",position:"top-end",timer:1e3,showConfirmButton:!1})}).catch(()=>{this.$Swal.fire({icon:"error",title:"套用失敗"})})},formatPrice(s){return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},computed:{...T(q,["carts","final_total"])},mounted(){this.getCarts()}},P={class:"bg-primary"},j={class:"container text-info"},R=B('<div class="row py-md-6"><div class="col-md-3 pt-6 col-sm-5"><div class="border-bottom mb-2"><h2>訂單確認。</h2></div></div><div class="col-8"></div></div><div class="row text-center"><div class="col-4 step state rounded-start">1.填寫資料</div><div class="col-4 step">2.確認付款</div><div class="col-4 step rounded-end">3.完成訂單</div></div>',2),D={class:"row py-4"},F={class:"col-md-8 col-sm-12"},H={key:0,class:"text-info d-flex align-items-center justify-content-center mb-2",style:{height:"200px","background-color":"rgba(99, 99, 99, 0.90)","z-index":"100"}},L=t("button",{type:"submit",class:"btn btn-info ms-2"},"去逛逛",-1),M={key:1,class:"d-flex justify-content-between mb-4"},O=t("button",{type:"submit",class:"btn btn-info"},"繼續購買",-1),z={class:"row"},Q={class:"col-md-2 col-sm-3"},G=["src"],J={class:"cart col-md-10 col-sm-9"},K={class:"row"},W={class:"col",style:{width:"200px"}},X={class:"col btn-group"},Y=["onClick","disabled"],Z=["onUpdate:modelValue","onChange","disabled"],tt=["onClick"],et={class:"col",style:{width:"200px"}},st={class:"col"},ot=["onClick"],at=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[t("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"})],-1),lt=[at],rt={class:"border bg-secondary p-4"},nt=t("h2",null,"訂單明細",-1),it=t("hr",null,null,-1),dt=t("div",{class:"d-flex justify-content-between mb-4"},null,-1),ct={class:"d-flex mb-4"},ut={class:"input-group total-coupon-input"},mt={class:"d-flex justify-content-between mb-4"},pt=t("h5",null,"酷碰券折抵",-1),_t={class:"d-flex justify-content-between"},ht=t("h5",null,"共計",-1),ft={class:"col-md-4 col-sm-12"},bt={class:"row justify-content-center border py-4"},vt={class:"mb-3"},yt=t("label",{for:"email",class:"form-label"},[h("Email"),t("span",{class:"marker"},"*")],-1),gt={class:"mb-3"},Ct=t("label",{for:"name",class:"form-label"},[h("收件人姓名"),t("span",{class:"marker"},"*")],-1),wt={class:"mb-3"},xt=t("label",{for:"tel",class:"form-label"},[h("收件人電話"),t("span",{class:"marker"},"*")],-1),Vt={class:"mb-3"},kt=t("label",{for:"address",class:"form-label"},[h("收件人地址"),t("span",{class:"marker"},"*")],-1),qt={class:"mb-3"},St=t("label",{for:"message",class:"form-label"},"留言",-1),$t=t("div",{class:"text-end"},[t("button",{type:"submit",class:"btn btn-secondary"},"送出訂單")],-1);function It(s,e,d,r,a,i){const V=v("router-link"),f=v("v-field"),b=v("error-message"),S=v("v-form");return p(),_("div",P,[t("div",j,[R,t("div",D,[t("div",F,[s.carts.length===0?(p(),_("div",H,[h(" 購物車沒有任何商品，趕快去看喜歡的房型吧! "),n(V,{to:"/products"},{default:C(()=>[L]),_:1})])):k("",!0),s.carts.length>0?(p(),_("div",M,[n(V,{to:"/products"},{default:C(()=>[O]),_:1}),t("button",{type:"submit",class:"btn btn-outline-info",onClick:e[0]||(e[0]=(...o)=>i.deleteAllCarts&&i.deleteAllCarts(...o))},"清空購物車")])):k("",!0),(p(!0),_(U,null,E(a.cart.carts,o=>(p(),_("div",{class:"border mb-3 bg-info text-primary",key:o.id},[t("div",z,[t("div",Q,[t("img",{src:o.product.imageUrl,class:"img-fluid"},null,8,G)]),t("div",J,[t("div",K,[t("div",W,[t("h5",null,y(o.product.title),1)]),t("div",X,[t("button",{type:"button",class:"btn btn-secondary",onClick:l=>{o.qty--,i.changeCartQty(o,o.qty)},disabled:o.qty===1},"-",8,Y),w(t("input",{min:"1",type:"number",class:"productNumber","onUpdate:modelValue":l=>o.qty=l,onChange:l=>i.changeCartQty(o,o.qty),disabled:o.qty===1,readonly:""},null,40,Z),[[x,o.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-secondary",onClick:l=>o.qty++},"+",8,tt)]),t("div",et,[t("h5",null,"NT$"+y(o.product.price),1)]),t("div",st,[t("button",{type:"button",class:"btn btn-outline-danger",onClick:l=>i.removeCartItem(o.id)},lt,8,ot)])])])])]))),128)),t("div",rt,[nt,it,dt,t("div",ct,[t("form",ut,[w(t("input",{type:"text",placeholder:"輸入酷碰序號",class:"form-control","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":e[1]||(e[1]=o=>a.coupon=o)},null,512),[[x,a.coupon]]),t("button",{type:"submit",class:"btn btn-primary",id:"button-addon2",onClick:e[2]||(e[2]=o=>i.useCoupon(a.coupon))},"套用")])]),t("div",mt,[pt,t("span",null,"NT$ "+y(i.formatPrice((a.cart.total-s.final_total).toFixed(0))),1)]),t("div",_t,[ht,t("span",null,"NT$ "+y(i.formatPrice(s.final_total.toFixed(0))),1)])])]),t("div",ft,[t("div",bt,[n(S,{ref:"form",onSubmit:i.createOrder},{default:C(({errors:o})=>[t("div",vt,[yt,n(f,{id:"email",name:"email",type:"email",class:g(["form-control",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.form.user.email,"onUpdate:modelValue":e[3]||(e[3]=l=>a.form.user.email=l)},null,8,["class","modelValue"]),n(b,{name:"email",class:"invalid-feedback"})]),t("div",gt,[Ct,n(f,{id:"name",name:"姓名",type:"text",class:g(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required","aria-required":"true",modelValue:a.form.user.name,"onUpdate:modelValue":e[4]||(e[4]=l=>a.form.user.name=l)},null,8,["class","modelValue"]),n(b,{name:"姓名",class:"invalid-feedback"})]),t("div",wt,[xt,n(f,{id:"tel",name:"電話",type:"text",class:g(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:a.form.user.tel,"onUpdate:modelValue":e[5]||(e[5]=l=>a.form.user.tel=l)},null,8,["class","modelValue"]),n(b,{name:"電話",class:"invalid-feedback"})]),t("div",Vt,[kt,n(f,{id:"address",name:"地址",type:"text",class:g(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":e[6]||(e[6]=l=>a.form.user.address=l)},null,8,["class","modelValue"]),n(b,{name:"地址",class:"invalid-feedback"})]),t("div",qt,[St,w(t("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[7]||(e[7]=l=>a.form.message=l)},null,512),[[x,a.form.message]])]),$t]),_:1},8,["onSubmit"])])])])])])}const Bt=$(A,[["render",It]]);export{Bt as default};