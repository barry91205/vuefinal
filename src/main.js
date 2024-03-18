import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import './assets/all.scss'
import App from './App.vue'
import router from './router'
// bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// sweetalert套件
import Swal from 'sweetalert2'
// 引入 VeeValidate 元件跟功能
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
  // 引入 VeeValidate 的驗證規則
// import AllRules from '@vee-validate/rules'
import * as AllRules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

//   import App from './App.vue'

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$Swal = Swal
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)
app.use(LoadingPlugin)
app.use(createPinia())
app.use(router)
app.mount('#app')
