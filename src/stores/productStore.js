import { defineStore } from 'pinia'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('productStore', {
  state: () => ({
    products: [],
    isLoading: false
  }),
  components: {
    Loading
  },
  actions: {
    getProducts () {
      this.isLoading = true
      const { category = '' } = this.$route.query
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${category}`)
        .then((res) => {
          this.$Swal.fire({
            title: '成功取得商品列表',
            icon: 'success',
            position: 'top-end',
            timer: 1000,
            showConfirmButton: false
          })
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(err => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    }
  },
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => a.price - b.price)
    }
  },
  formatPrice (price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
})
