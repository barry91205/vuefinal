<!-- eslint-disable indent -->
<template>
    <div id="delOrderModal" ref="delOrderModal" class="modal fade" tabindex="-1"
        aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
            <h5 id="delProductModalLabel" class="modal-title">
                <span>訂單編號{{ tempOrder.id }}</span>
            </h5>
            <button type="button"
            class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-start">
            是否刪除訂單編號為
              <strong class="text-danger ">
                <span class="fw-bold">{{ tempOrder.id }}</span>
              </strong> 訂單？
              <div class="mt-2">
                (刪除後將無法恢復)。
              </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteOrder">
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
  props: ['tempOrder', 'getOrder'],
  data () {
    return {
      delOrderModal: null
    }
  },
  methods: {
    showModal () {
      this.delOrderModal.show()
    },
    hideModal () {
      this.delOrderModal.hide()
    },
    deleteOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`
      axios.delete(url, { data: this.tempOrder })
        .then((res) => {
          this.$Swal.fire({
            icon: 'success',
            title: '成功刪除產品',
            showConfirmButton: false,
            timer: 1500
          })
          this.$emit('update')
          this.hideModal()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.delOrderModal = new Modal(this.$refs.delOrderModal, {
      keyboard: false,
      backdrop: 'static'
    })
    console.log(this.orders)
  }
}
</script>
