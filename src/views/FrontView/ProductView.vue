<template>
    <div class="bg-primary mt-5">
        <div class="container text-info">
            <div class="row py-6">
                <div class="col-6 d-flex justify-content-end">
                    <div></div>
                    <img :src="product.imageUrl" alt="" height="700px" width="500">
                </div>
                <div class="col-6" style="position: relative;">
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
                            <h3>{{ product.price }} / 一貓</h3>
                            <p><small class="mb-4">原價 {{ product.origin_price }} 元 / 一貓</small></p>
                            <!-- <input type="number" class="form-control" min="1" v-model="qty"> -->
                            <!-- <select name="" id="" class="form-select" v-model.number="item.qty">
                                <option :value="i" v-for="i in 10" :key="i" min="1" >
                                    {{ i }}
                                </option>
                            </select> -->
                            <!-- <div class="btn-group">
                                <button type="button" class="btn btn-secondary" @click="item.qty++;changeCartQty(item,item.qty)">+</button>
                                <input type="number" min="1" class="productNumber" v-model.number="item.qty" @change="changeCartQty(item, item.qty)" :disabled="item.qty === 1">
                                <button type="button" class="btn btn-secondary" @click="item.qty--;changeCartQty(item,item.qty)" :disabled="item.qty === 1">-</button>
                            </div> -->
                        </div>
                        <div class="col-4">
                            <h5 class="vertical-text position-absolute" style="right: 0px;">
                                專屬對外窗，<br>
                                徜徉陽光與森林公園美景，<br>
                                最頂級的外宿享受。
                                <!-- {{ product.description }} -->
                            </h5>
                        </div>
                    </div>
                    <div class="d-grid gap-2 position-absolute" style="bottom: 0px; width: 100%;">
                        <a href="" class="btn btn-info text-primary btn-lg opacity"
                            @click.prevent="addToCart(product.id, qty)">
                            預訂房間
                        </a>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'pinia'

import cartStore from '@/stores/cartStore' // @ = src

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      cart: {},
      product: {}
    }
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
    // addToCart (id) {
    //   const order = {
    //     product_id: id,
    //     qty: 1
    //   }
    //   axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data: order })
    //     .then((res) => {
    //       console.log(res)
    //     //   this.product = res.data.product
    //     })
    // }
  },
  mounted () {
    this.getCarts()
    console.log(this.$route)
    this.getProduct()
  }
}
</script>
