<template>
    <div
        id="couponModal"
        ref="couponModal"
        class="modal fade"
        tabindex="-1"
        aria-labelledby="couponLabel"
        aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                  <h5 id="couponLabel" class="modal-title" >
                    <span v-if="isNew">新增優惠卷</span>
                    <span v-else>編輯優惠卷</span>
                  </h5>
                  <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="mb-3 text-start">
                        <label for="title" class="form-label">優惠券標題</label>
                        <input id="title"
                        type="text"
                        class="form-control" placeholder="請輸入標題"
                        v-model="localTempCoupons.title">
                      </div>

                      <div class="row text-start">
                        <div class="mb-3 col-md-6">
                          <label for="category" class="form-label">優惠卷代碼</label>
                          <input id="category" type="text" class="form-control"
                            placeholder="請輸入代碼"
                            v-model="localTempCoupons.code"
                            >
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="unit" class="form-label">折扣百分比</label>
                          <input id="unit" type="text" class="form-control"
                          placeholder="請輸入數字"
                          v-model.number="localTempCoupons.percent">
                        </div>
                      </div>

                      <div class="row text-start">
                        <div class="mb-3 col-md-6">
                          <label for="dueDate" class="form-label">到期日</label>
                          <input id="dueDate"
                          type="number" min="0"
                          class="form-control"
                          v-model="due_date"
                          >
                        </div>

                      </div>

                      <div class="mb-3 text-start">
                        <div class="form-check">
                          <input id="is_enabled" class="form-check-input" type="checkbox"
                          v-model="localTempCoupons.is_enabled" :true-value="1" :false-value="0"
                           >
                           <!-- v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" -->
                          <label class="form-check-label" for="is_enabled">是否啟用</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" >
                    取消
                  </button>
                  <button type="button" class="btn btn-primary"
                  @click="updateCoupon(localTempCoupons)">
                    {{ isNew ? '新增優惠卷' :'更新優惠券' }}
                  </button>
                </div>
              </div>
            </div>
        </div>
    </template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Modal from 'bootstrap/js/dist/modal'
// import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  props: ['tempCoupons', 'isNew', 'clearInput'],
  emits: ['update-coupon'],
  data () {
    return {
      couponModal: null,
      localTempCoupons: {
      },
      due_date: '', // 保存日期
      Swal
    }
  },
  components: {
    // toast
  },
  methods: {
    showModal () {
      this.couponModal.show()
    },
    hideModal () {
      this.couponModal.hide()
    },
    setDueDate () {
      if (this.isNew === true) {
        this.due_date = this.localTempCoupons.getCurrentDate()
        console.log('這個你', this.due_date)
      } else {
        // 轉為時間戳轉成物件
        const dueDate = new Date(this.tempCoupons.due_date * 1000)
        // 將 dueDate 轉化成年日月
        const year = dueDate.getFullYear() // 年份
        const month = String(dueDate.getMonth() + 1).padStart(2, '0') // 月份
        const date = String(dueDate.getDate()).padStart(2, '0') // 日期
        // 設定到期日
        this.due_date = `${year}/${month}/${date}` // 回傳日期字串到 due_date
        console.log(this.due_date, this.year, this.month, this.date)
      }
    },
    getCurrentDate () {
      const today = new Date() // 紀錄當下時間戳
      const year = today.getFullYear() // 年份
      const month = String(today.getMonth() + 1).padStart(2, '0') // 月份
      const date = String(today.getDate()).padStart(2, '0') // 日期
      return `${year}/${month}/${date}` // 回傳日期字串
    },
    // getCurrentDate() {
    //   const today = new Date(); // 紀錄當下時間戳
    //   const year = today.getFullYear(); // 年份
    //   const month = String(today.getMonth() + 1).padStart(2, '0'); // 月份
    //   const date = String(today.getDate()).padStart(2, '0'); // 日期
    //   console.log(this.year, this.month, this.date);
    //   return `${year}/${month}/${date}`; // 回傳日期字串
    // },
    // 更新優惠卷
    updateCoupon (item) {
      this.isLoading = true
      this.fullpage = true
      // 更新與新增使用同一個 method，新增時的寫法
      let url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon`
      let http = 'post' // 傳入資料
      let data = item

      if (!this.isNew) {
        // 當確認為新增時，更新資料。這個是編輯的不是新增
        url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${this.tempCoupons.id}`
        http = 'put'// 更新資料
        data = this.tempCoupons
      }
      axios[http](url, { data })
        .then((res) => {
          this.isLoading = false
          this.fullpage = false
          this.$emit('update')
          Swal.fire({
            title: '已更新',
            icon: 'success',
            position: 'top-end',
            timer: 1000,
            showConfirmButton: false
          })
          // alert(res.data.message)
          this.hideModal()
          // this.getCoupon()
          // this.$refs.couponModal.hideModal()
        })
        .catch(err => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    }
    // updateDateModal() {
    //   this.$emit('update');
    // },
  },
  watch: {
    // 處理父元件資料 參考同學寫法
    tempCoupons: {
      handler () {
        this.localTempCoupons = this.tempCoupons
        // const getTime = new Date(this.localTempCoupons.due_date * 1000).toISOString().split('T');
        // [this.due_date] = getTime;
        // ESLint 的慣例中括號,這是一種陣列解構賦值的方法,表示將 getTime 陣列的第一個元素賦值給 this.due_date
      },
      deep: true
      // 表示對tempCoupon物件進行深度監聽，即使是物件內部的巢狀屬性發生變化，也會觸發handler函數
    },
    due_date () {
      this.localTempCoupons.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  mounted () {
    this.couponModal = new Modal(this.$refs.couponModal, {
      keyboard: false,
      backdrop: 'static'
    })
    this.localTempCoupons = this.tempCoupons // 本地-props 進來資料
    this.setDueDate()
  }
}
</script>
