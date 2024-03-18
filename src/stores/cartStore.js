import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    carts: [], // 購物車列表
    final_total: 0, // 購物車總計
    order_total: 0,
    total: 0,
    status: {
      addCartLoading: ''
    }
  }),
  actions: {
    addToCart (id, qty = 1) {
      const cart = {
        product_id: id,
        qty
      }
      // this.status.addCartLoading = id
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data: cart })
        .then((res) => {
          console.log(res)
          this.getCart()
          this.$Swal.fire({
            title: '成功取得商品',
            icon: 'success',
            position: 'top-end',
            timer: 2000,
            showConfirmButton: false
          }).catch((err) => {
            this.$Swal.fire({
              icon: 'error',
              title: err.response.data.message
            })
          })
        })
    },
    getCart () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
          this.order_total = res.data.data.total
          console.log('pinia cart', this.carts)
        })
    }
  }
})
