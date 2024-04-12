<template>
  <!-- banner -->
  <div class="aboutbanner mt-5" style="background-image: url('images/roomforest.jpg'); height: 200px;">
    <h2 class="text-info">貓咪旅館。</h2>
  </div>
  <div class="bg-primary py-4">
    <div class="container text-info py-6 vl-parent">
      <Loading v-model:active="isLoading" :can-cancel="false" :is-full-page="fullPage" :loader="loader"></Loading>
      <div class="row py-md-6 py-sm-0">
        <div class="col-md-3 mb-6">
          <!-- 固定選單且不會離開畫面 -->
          <div class="position-sticky" style="top: 5rem;">
            <div class="card text-center bg-secondary mb-2">
            <div class="card-header py-3 text-info">
              房型類別
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item list">
                <RouterLink class="py-2 nav-link" :to="`/products`">全部房型</RouterLink>
              </li>
              <li class="list-group-item list" v-for="item in categories" :key="item">
                <RouterLink class="py-2 nav-link" :to="`/products?category=${item}`">{{ item }}</RouterLink>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="card mb-3" v-for="product in products" :key="product.id">
            <div class="row">
              <div class="col-3">
                <div class="image-container">
                  <RouterLink :to="`/product/${product.id}`">
                    <img :src="product.imageUrl" class="rounded-start object-fit-cover " alt="..." width="223"
                      height="300" style="z-index: 1;">
                  </RouterLink>
                </div>
              </div>
              <div class="col-9 position-relative">
                <div class="row mb-4">
                  <div class="col-md-8 col-sm-5 title">
                    <div class="py-4">
                      <h5 class="card-title border-bottom mb-2">{{ product.title }}</h5>
                      <p class="card-text mb-4">{{ product.unit }}</p>
                      <span class="badge bg-secondary">{{ product.category }}</span>
                    </div>
                  </div>
                  <div class="price col-md-4 p-md-3 text-end position-relative col-sm-6 p-sm-2">
                    <h3 v-if="product.origin_price === product.price">NT$ {{ product.price }}/貓</h3>
                    <div v-else>
                      <h3 class="text-secondary">NT$ {{ product.price }}/貓</h3>
                      <del class="card-text mb-7"><small class="text-muted">{{ product.origin_price }}/一貓</small></del>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <div class="col-md-7 content">{{ product.content }}</div>

                  </div>
                  <div class="col-4">
                    <div class="btn-group position-absolute" role="group" aria-label="Basic outlined example"
                      style="bottom: 10px; right: 25px;">
                      <button type="button" class="btn btn-outline-primary btn-sm">
                        <RouterLink :to="`/product/${product.id}`" class="nav-link">查看更多</RouterLink>
                      </button>
                      <button type="button" class="btn btn-primary" @click.prevent="addToCart(product.id)">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pagination :pagination="pagination" @emit-pages="getData"></Pagination>
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
import Swal from 'sweetalert2'
import Pagination from '@/components/PaginationView.vue'
import cartStore from '@/stores/cartStore' // @ = src
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      cart: [],
      products: [],
      categories: ['1貓房', '2貓房', '4貓房', '5貓房'],
      isLoading: true,
      fullPage: true,
      loader: 'bars',
      Swal,
      pagination: {},
      currentCategory: {}
    }
  },
  components: {
    Loading,
    Pagination
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
        .finally(() => {
          // this.isLoading = false
        })
    },
    getCarts () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
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

<style>
.list:hover {
  color: #fff;
  background-color: #535F43;
}

.list:active {
  color: #fff;
  background-color: #535F43;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.image-container img {
  transition: transform 1s ease;
}

.image-container:hover img {
  transform: scale(1.3);
}
@media (max-width: 360px) {
  .title {
    width: 100px;
  }
  .price {
    width: 150px;
    padding: 12px;
  }
}
@media (max-width: 430px) {
  .card {
    width: 100%;
    /* height: 200px; */
  }
  .content , .card-text {
    display: none;
  }
  img {
    width: 100%;
    height: 129px;
    background-position: center;
  background-size: cover;
  overflow: hidden;
  }
  h3 {
    font-size: 1.3rem;
  }
 }

@media (max-width: 768px) { .content , .card-text {
    display: none;
  } }

@media (max-width: 992px) {  }

@media (max-width: 1200px) {  }

@media (max-width: 1400px) {  }

</style>
