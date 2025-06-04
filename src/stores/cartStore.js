import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    carts: [], // 購物車列表
    final_total: 0, // 購物車總計
    order_total: 0,
    total: 0,
    cartList: {},
    cartListTotalQty: '',
    status: {
      addCartLoading: ''
    },
    Swal
  }),
  components: {
    Loading,
    toast
  },
  actions: {
    addToCart (id, qty = 1) {
      const cart = {
        product_id: id,
        qty
      }
      axios
        .post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data: cart })
        .then((res) => {
          this.isLoading = true
          Swal.fire({
            title: '已加入購物車',
            icon: 'success',
            position: 'top-end',
            timer: 1000,
            showConfirmButton: false
          })
          this.getCart()
          this.isLoading = false
        })
        .catch((err) => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    getCarts () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`).then((res) => {
        this.carts = res.data.data.carts
        this.final_total = res.data.data.final_total
        this.total = res.data.data.total
        this.cartList = res.data.data.carts
        this.order_total = res.data.data.total
        this.cartListTotalQty = res.data.data.carts.reduce(
          (total, carts) => total + carts.qty,
          0
        )
        console.log('pinia cart', this.carts)
      })
    },
    updateCart (data) {
      const url = `${VITE_PATH}/v2/api/${VITE_PATH}/cart/${data.id}`
      const cart = {
        product_id: data.product_id,
        qty: data.qty
      }
      axios
        .put(url, { data: cart })
        .then((response) => {
          this.getCarts()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
})
