<template>
    <div id="OrderEditModal" ref="OrderEditModal" class="modal fade" tabindex="-1" aria-labelledby="OrderEditModal"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 id="OrderEditModal" class="modal-title">
                        <span>編輯訂單 {{ tempOrder.id }}</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-start">
                    <div class="h5 fw-bold">訂單編號：{{ tempOrder.id }}</div>
                    <div class="h5 fw-bold">訂單日期：
                        {{ new Date(order.create_at * 1000).toLocaleDateString() }}
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="row mb-2">
                                <div class="row" v-if="order.user">
                                    <div class="col-md-6 mb-4">
                                        <label for="people" class="form-label">訂購人姓名</label>
                                        <input id="people" type="text" class="form-control" v-model="order.user.name"
                                            disabled>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <label for="people" class="form-label">訂單電話</label>
                                        <input id="people" type="text" class="form-control" v-model="order.user.tel"
                                            disabled>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <label for="people" class="form-label">訂單電子郵件</label>
                                        <input id="people" type="text" class="form-control" v-model="order.user.email"
                                            disabled>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <label for="people" class="form-label">訂單電子郵件</label>
                                        <input id="people" type="text" class="form-control" v-model="order.user.address"
                                            disabled>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label for="people" class="form-label">訂單留言</label>
                                        <textarea id="people" type="text" class="form-control" v-model="order.message"
                                            disabled>
                               </textarea>
                                    </div>
                                    <div class="col-md-12 mb-1">
                                        <label for="people" class="form-label mb-2">付款狀態</label>
                                        <div>
                                            <span class="text-success" v-if="order.is_paid">已付款</span>
                                            <span v-else class="text-danger fw-bold">未付款</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="row mt-2">
                                <div class="col-lg-12">
                                    <div v-if="tempOrder && tempOrder.products" class="mb-2">
                                        訂單內容 ({{ Object.keys(tempOrder.products).length }})
                                    </div>

                                    <table class="table table-hover border rounded rounded-3">
                                        <thead>
                                            <tr class="text-center">
                                                <th scope="col"> 編號</th>
                                                <th colspan="1" scope="col">房型圖</th>
                                                <th colspan="1" scope="col">房名/單位</th>
                                                <th colspan="1" scope="col" class="text-end">小計</th>
                                            </tr>
                                        </thead>
                                        <tbody class="ps-3 py-2 text-center">
                                            <tr v-for="(item) in order.products" :key="item.id" class="align-middle">
                                                <th scope="row">{{ item.product.num }}</th>
                                                <td class="d-flex justify-content-center">
                                                    <div style="width: 180px;">
                                                        <div class="rounded" style="height: 100px;
                                       background-size: cover; background-position:center;"
                                                            :style="{ backgroundImage: `url(${item.product.imageUrl})` }">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {{ item.product.title }} x {{ item.qty }} /
                                                    {{ item.product.unit }}
                                                </td>
                                                <td class="text-end">
                                                    {{ item.total }} 元
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p class="text-end fw-bold me-2">總金額：{{ order.total }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        取消
                    </button>
                    <button type="button" class="btn btn-primary" @click="updateOrder">
                        確認
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import axios from 'axios'

import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  props: ['tempOrder', 'getOrder'],
  data () {
    return {
      orderEdittModal: null,
      order: {}
    }
  },
  methods: {
    showModal () {
      this.orderEdittModal.show()
    },
    hideModal () {
      this.orderEdittModal.hide()
    },
    updateOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`
      const http = 'put' // 傳入資料
      axios[http](url, { data: this.tempOrder })
        .then((res) => {
          this.$emit('update')
          Swal.fire({
            icon: 'success',
            title: '成功取得產品資訊',
            showConfirmButton: false,
            timer: 1500
          })
          this.hideModal()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }

  },
  watch: {
    tempOrder () {
      // 監聽
      this.order = this.tempOrder
    }
  },
  mounted () {
    this.orderEdittModal = new Modal(this.$refs.OrderEditModal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>
