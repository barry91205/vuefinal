<template>
    <div id="delCouponModal" ref="delCouponModal" class="modal fade" tabindex="-1"
        aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
            <h5 id="delCouponModalLabel" class="modal-title">
                <span>刪除優惠卷</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-start">
            是否刪除
              <strong class="text-danger ">
                <span class="fw-bold"></span>
              </strong> {{ tempCoupons.title }} 優惠券
              <div class="mt-2">
                (刪除後將無法恢復)。
              </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteCoupon">
                確認刪除
            </button>
            </div>
        </div>
        </div>
    </div>
    </template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import axios from 'axios'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  props: ['coupons', 'tempCoupons', 'getCoupon'],
  data () {
    return {
      delCouponModal: null,
      data: ''
    }
  },
  methods: {
    showModal () {
      this.delCouponModal.show()
    },
    hideModal () {
      this.delCouponModal.hide()
    },
    deleteCoupon () {
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupons.id}`
      axios.delete(url, { data: this.tempCoupons })
        .then((res) => {
          this.$Swal.fire({
            icon: 'success',
            title: '成功刪除產品',
            showConfirmButton: false,
            timer: 1500
          })
          this.hideModal()
          this.$emit('update')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.delCouponModal = new Modal(this.$refs.delCouponModal, {
      keyboard: false,
      backdrop: 'static'
    })
    console.log(this.tempCoupons)
  }
}
</script>
