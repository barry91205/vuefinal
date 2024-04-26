import{_ as m,h as p,o as c,c as d,b as t,k as l,v as r,F as _,i as h,P as f}from"./index-JkFsX9xh.js";var b={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"kun123",BASE_URL:"/vuefinal/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:v,VITE_PATH:P}=b,g={data(){return{drag:!1,isNew:!1,pages:{},products:[],tempProduct:{imagesUrl:[]},isLoading:!0}},methods:{addProduct(){const a=`${v}/api/${P}/admin/product`;p.post(a,{data:this.tempProduct}).then(o=>{this.$Swal.fire({position:"top-end",title:"新增商品成功",icon:"success",showConfirmButton:!1,timer:1e3}),this.$router.push("/admin/products")}).catch(o=>{alert(o.response.data.message),this.$router.push("/admin/products")})},returnPage(){this.$router.go(-1)}}},U={class:"container"},V=t("h2",{class:"mb-4"},"增加房型",-1),x=t("hr",null,null,-1),y={class:"row"},w={class:"col-6"},k={class:"mb-4"},E=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),T=["src"],A={class:"mb-4"},B=t("label",{for:"imagesUrl",class:"form-label"},"新增多圖",-1),L=["onUpdate:modelValue"],R=["src"],C=t("hr",null,null,-1),D={class:"row"},I={class:"mb-4"},S=t("label",{for:"title",class:"form-label"}," 標題",-1),M={class:"row"},F={class:"col-6"},H={class:"mb-4"},N=t("label",{for:"category",class:"form-label"},"分類",-1),O={class:"mb-4"},j=t("label",{for:"origin_price",class:"form-label"},"原價",-1),q={class:"col-6"},z={class:"mb-4"},G=t("label",{for:"nuit",class:"form-label"},"單位",-1),J={class:"mb-4"},K=t("label",{for:"price",class:"form-label"},"售價",-1),Q=t("hr",null,null,-1),W={class:"row"},X={class:"mb-4"},Y=t("label",{for:"description",class:"form-label"},"商品描述",-1),Z={class:"row"},$={class:"mb-4"},tt=t("label",{for:"content",class:"form-label"},"說明內容",-1),ot=t("hr",null,null,-1),et={class:"row"},st={class:"col-6"},lt={class:"form-check"},rt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),it={class:"col-6"},nt={class:"modal-footer"};function ct(a,o,dt,at,s,i){return c(),d("div",U,[V,x,t("div",y,[t("div",w,[t("div",k,[E,l(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=e=>s.tempProduct.imageUrl=e)},null,512),[[r,s.tempProduct.imageUrl]])]),t("img",{src:s.tempProduct.imageUrl,class:"img-fluid"},null,8,T)]),(c(!0),d(_,null,h(s.tempProduct.imagesUrl,(e,n)=>(c(),d("div",{class:"col-6",key:n},[t("div",A,[B,l(t("input",{type:"text",class:"form-control",placeholder:"請輸入多圖連結","onUpdate:modelValue":u=>s.tempProduct.imagesUrl[n]=u},null,8,L),[[r,s.tempProduct.imagesUrl[n]]])]),t("img",{src:e,class:"img-fluid"},null,8,R)]))),128))]),C,t("div",D,[t("div",I,[S,l(t("input",{type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[1]||(o[1]=e=>s.tempProduct.title=e)},null,512),[[r,s.tempProduct.title]])])]),t("div",M,[t("div",F,[t("div",H,[N,l(t("input",{type:"text",id:"category",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[2]||(o[2]=e=>s.tempProduct.category=e)},null,512),[[r,s.tempProduct.category]])]),t("div",O,[j,l(t("input",{id:"origin_price","onUpdate:modelValue":o[3]||(o[3]=e=>s.tempProduct.origin_price=e),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[r,s.tempProduct.origin_price,void 0,{number:!0}]])])]),t("div",q,[t("div",z,[G,l(t("input",{id:"unit","onUpdate:modelValue":o[4]||(o[4]=e=>s.tempProduct.unit=e),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[r,s.tempProduct.unit]])]),t("div",J,[K,l(t("input",{id:"price","onUpdate:modelValue":o[5]||(o[5]=e=>s.tempProduct.price=e),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[r,s.tempProduct.price,void 0,{number:!0}]])])])]),Q,t("div",W,[t("div",X,[Y,l(t("textarea",{id:"description","onUpdate:modelValue":o[6]||(o[6]=e=>s.tempProduct.description=e),type:"text",class:"form-control",placeholder:"請輸入商品描述"},null,512),[[r,s.tempProduct.description]])])]),t("div",Z,[t("div",$,[tt,l(t("textarea",{id:"description","onUpdate:modelValue":o[7]||(o[7]=e=>s.tempProduct.content=e),type:"text",class:"form-control",placeholder:"請輸入說明內容"},null,512),[[r,s.tempProduct.content]])])]),ot,t("div",et,[t("div",st,[t("div",lt,[l(t("input",{id:"is_enabled","onUpdate:modelValue":o[8]||(o[8]=e=>s.tempProduct.is_enabled=e),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[f,s.tempProduct.is_enabled]]),rt])]),t("div",it,[t("div",nt,[t("button",{type:"button",class:"btn btn-outline-primary me-2","data-bs-dismiss":"modal",onClick:o[9]||(o[9]=(...e)=>i.returnPage&&i.returnPage(...e))}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:o[10]||(o[10]=(...e)=>i.addProduct&&i.addProduct(...e))}," 確認 ")])])])])}const mt=m(g,[["render",ct]]);export{mt as default};