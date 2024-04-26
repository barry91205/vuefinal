import { defineStore } from 'pinia'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('productStore', {
  state: () => ({
    products: [],
    product: {
      imagesUrl: [],
      origin_price: 0,
      price: 0
    },
    currentCategory: {},
    isLoading: false
  }),
  components: {
    Loading
  },
  actions: {
    getProducts () {
      this.isLoading = true
      // const { category = '' } = this.$route.query
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
    }
  },
  getProduct (productId) {
    this.isLoading = true
    axios.get(`${VITE_URL}/V2/api/${VITE_PATH}/product/${productId}`)
      .then(res => {
        this.product = res.data.product
      })
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
