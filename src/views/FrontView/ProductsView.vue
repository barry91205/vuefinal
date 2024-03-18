<template>
    <!-- banner -->
    <div class="aboutbanner mt-5" style="background-image: url('images/roombanner.jpg'); height: 200px;">
        <h1 class="text-white">貓咪旅館。</h1>
    </div>
    <div class="bg-primary py-4">
        <div class="container text-info py-6 vl-parent">
            <Loading v-model:active="isLoading"
                      :can-cancel="false"
                      :is-full-page="fullPage"
                      :loader="loader"></Loading>
            <div class="row py-6">
                <div class="col-md-3 fixed">
                    <div class="card text-center bg-secondary" style="width: 18rem;">
                        <div class="card-header py-3">
                            房型類別
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <RouterLink class="py-2 nav-link btn-active" :to="`/products`">全部房型</RouterLink>
                            </li>
                            <li class="list-group-item" v-for="item in categories" :key="item">
                                <RouterLink class="py-2 nav-link" :to="`/products?category=${item}`">{{ item }}</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-9">
                    <div class="card mb-3" style="max-width: 990px; height: 302px;" v-for="product in products" :key="product.id">
                        <div class="row">
                            <div class="col-3">
                                <img :src="product.imageUrl" class="rounded-start object-fit-cover" alt="..."
                                    width="200" height="300">
                            </div>
                            <div class="col-9">
                                <div class="row mb-5">
                                    <div class="col-8">
                                        <div class="py-4">
                                            <h5 class="card-title border-bottom mb-2">{{product.title}}</h5>
                                            <p class="card-text mb-4">{{product.unit}}</p>
                                            <span class="badge bg-secondary">{{product.category}}</span>
                                            <!-- <p class="card-text mb-7"><small class="text-muted">4貓房</small></p> -->
                                        </div>
                                    </div>
                                    <div class="col-4 p-4 text-end position-relative">
                                        <h3 v-if="product.origin_price === product.price">NT$ {{product.price}}/ 貓</h3>
                                        <div v-else>
                                            <h3 class="text-secondary">NT$ {{product.price}}/ 貓</h3>
                                        <del class="card-text mb-7"><small class="text-muted">{{product.origin_price}}/一貓</small></del>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8 m">
                                        {{product.content}}
                                        </div>
                                    <div class="col-4" style="position: relative;">
                                        <div class="btn-group position-absolute" role="group" aria-label="Basic outlined example"
                                         style="bottom: 10px; right: 25px;">
                                            <button type="button" class="btn btn-outline-primary">
                                                <RouterLink :to=" `/product/${product.id}`" class="nav-link">查看更多</RouterLink>
                                            </button>
                                            <button type="button" class="btn btn-primary" @click.prevent="addToCart(product.id)">
                                                <!-- <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                                                v-if="product.id === status.addCartLoading"></span> -->
                                                加入購物車
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { mapActions } from 'pinia'

import cartStore from '@/stores/cartStore' // @ = src
// console.log(import.meta.env.VITE_URL, import.meta.env.VITE_PATH)
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      cart: [],
      products: [],
      categories: ['1貓房', '2貓房', '4貓房', '5貓房'],
      isLoading: true,
      fullPage: true,
      loader: 'bars'
    }
  },
  components: {
    Loading
  },
  watch: {
    '$route.query': {
      handler () {
        this.getProducts()
      },
      deep: true
    }
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const { category = '' } = this.$route.query
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${category}`)
        .then((res) => {
          this.$Swal.fire({
            title: '成功取得商品列表',
            icon: 'success',
            position: 'top-end',
            timer: 2000,
            showConfirmButton: false
          })
          this.products = res.data.products
          this.isLoading = false
        })
        .catch(err => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
        .finally(() => {
          // this.isLoading = false
        })
    },
    getCarts () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
        //   console.log(res)
          this.cart = res.data.data
        })
        .catch((err) => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    ...mapActions(cartStore, ['addToCart', 'getCart'])
  },
  mounted () {
    this.getProducts()
    this.getCarts()
  }
}
</script>
