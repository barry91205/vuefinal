<template>
  <div class="container">
    <div class="d-flex justify-content-between py-4 py-md-5">
      <h2 class="fw-bold">酷碰管理</h2>
        <button class="btn btn-outline-primary" @click="openCouponModal('createNew')">
          + 新增酷碰卷
        </button>
    </div>
    <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th width="120">
            名稱
          </th>
          <th>酷碰代碼</th>
          <th width="120">
            折扣
          </th>
          <th width="120">
            期限
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in coupons" :key="coupon.id">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.code }}</td>
          <td>{{ coupon.percent }}%</td>
          <td>{{ formatDate(coupon.due_date) }}</td>
          <td>
            <span class="text-success" v-if="coupon.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openCouponModal('edit', coupon)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openCouponModal('delete', coupon)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁按鈕 -->
  </div>
  <!-- 編輯新增優惠券 -->
  <CouponModal ref="couponModal"
  :temp-Coupons="tempCoupons"
  :is-new="isNew"
  :clear-input="clearInput"
  @update="getCoupon"
  ></CouponModal>
  <!-- 刪除優惠券 -->
 <CouponDelModal ref="couponDelModal" :is-new="isNew"
  :temp-Coupons="tempCoupons" @update="getCoupon">
 </CouponDelModal>
</template>

<script>
import axios from 'axios'
import CouponModal from '../../../components/CouponModal.vue'
import CouponDelModal from '../../../components/CouponDelModal.vue'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      coupons: [],
      tempCoupons: {},
      pagination: {},
      isNew: false,
      isLoading: true
    }
  },
  components: {
    CouponModal,
    CouponDelModal
  },
  methods: {
    getCoupon (page = 1) {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupons?page=${page}`
      axios.get(url).then(res => {
        const { coupons, pagination } = res.data
        this.allCoupons = coupons
        this.coupons = coupons
        this.pagination = pagination
      }).catch(err => {
        this.$Swal.fire({
          icon: 'error',
          title: err.response.data.message
        })
      })
    },
    formatDate (timestamp) {
      const getTime = new Date(timestamp * 1000)
      return getTime.toLocaleDateString()
    },
    openCouponModal (isNew, item) {
      if (isNew === 'createNew') {
        this.tempCoupon = {
          // 預設取得當天日期、預設不啟用
          due_date: Math.floor(new Date().getTime() / 1000),
          is_enabled: 0
        }
        this.isNew = true
        this.$refs.couponModal.showModal()
      } else if (isNew === 'edit') {
        this.tempCoupons = { ...item } // 帶入資料
        this.isNew = false
        this.$refs.couponModal.showModal()
      } else if (isNew === 'delete') {
        this.tempCoupons = { ...item }
        this.$refs.couponDelModal.showModal()
      }
    },
    clearInput () {
      this.tempCoupons = { // 清除
      }
    }
  },
  mounted () {
    this.getCoupon()
  }
}
</script>
