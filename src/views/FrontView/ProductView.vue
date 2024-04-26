<template>
  <div class="bg-primary mt-5">
    <div class="container text-info">
      <Loading v-model:active="isLoading" :can-cancel="false" :is-full-page="fullPage" :loader="loader"></Loading>
      <div class="row py-6">
        <div class="product-img col-md-6 d-flex justify-content-end col-sm-12">
          <div></div>
          <img :src="product.imageUrl" alt="" height="700px" width="500">
        </div>
        <div class="col-md-6 col-sm-12" style="position: relative;">
          <div class="row mb-4">
            <div class="col-md-8 my-2">
              <div class="border-bottom col-6 mb-2">
                <h2>
                  {{ product.title }}。
                </h2>
              </div>
              <p class="card-text mb-6">{{ product.unit }}</p>
              <p class="card-text mb-6">
                {{ product.content }}
              </p>
              <p>2台24小時小米攝影機全視角觀看
                每日貓管家清理貓砂2次
              </p>
              <p class="mb-6">貓管家每日回報愛貓住宿、飲食、生活、
                健康狀況，以及照片分享</p>
              <h3 class="mb-sm-4">{{ product.price }} 元 / 一貓</h3>
              <p><small class="mb-4 mb-sm-6">原價 {{ product.origin_price }} 元 / 一貓</small></p>
            </div>
            <div class="col-4">
              <h5 class="vertical-text position-absolute" style="right: 0px;">
                專屬對外窗，<br>
                徜徉陽光與森林公園美景，<br>
                最頂級的外宿享受。
              </h5>
            </div>
            <div class="d-grid" style="bottom: 0px; width: 100%;">
                <a href="" class="btn btn-info text-primary btn-lg opacity" @click.prevent="addToCart(product.id, qty)">
                  <span>預訂房間</span>
                </a>
                <hr>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'pinia'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import cartStore from '@/stores/cartStore' // @ = src

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      cart: {},
      product: {},
      fullPage: true,
      loader: 'bars'
    }
  },
  components: {
    Loading
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          console.log(res)
          this.product = res.data.product
        })
    },
    changeCartQty (item, qty = 1) {
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, { data: cart })
        .then((res) => {
          console.log(res)
          this.getCarts()
        })
    },
    getCarts () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          console.log(res)
          this.cart = res.data.data
        })
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  mounted () {
    this.getCarts()
    console.log(this.$route)
    this.getProduct()
  }
}
</script>

<style>

/* 点击按钮时的样式 */
.btn:active {
  transform: translateY(2px);
  /* 往下移动2像素 */
}
.opacity:hover {
  opacity: 0.6;
  /* 当鼠标悬停在按钮上时，设置按钮的透明度 */
  transition: opacity 0.8s ease, background 0.3s ease;
  background: linear-gradient(360deg, #7D6E4D, #fcfcfc);
  /* 添加渐变背景 */
  color: #fcfcfc;
}

@media (max-width: 430px) {
  img {
    width: 100%;
  }
  /* .recommend {
    display: flex;
    flex-direction: column;
    width: 430px;
  }
  .row {
    width: 430px;
  } */
}

@media (max-width: 768px) {
}

@media (max-width: 992px) {}

@media (max-width: 1200px) {}

@media (max-width: 1400px) {}
</style>
