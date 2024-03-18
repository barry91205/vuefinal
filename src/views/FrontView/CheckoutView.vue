<template>
  <div class="bg-primary">
    <div class="container text-info">
      <div class="row py-6">
        <div class="col-3 pt-6">
          <div class="border-bottom mb-2">
            <h2>訂單確認。</h2>
          </div>
        </div>
        <div class="col-8">
        </div>
      </div>
      <div class="row text-center">
        <div class="col-4 step state rounded-start">填寫資料</div>
        <div class="col-4 step">確認付款</div>
        <div class="col-4 step rounded-end">完成訂單</div>
      </div>
      <div class="row py-4">
        <div class="col-8">
          <!-- {{ cart }} -->
          <div class="d-flex justify-content-between mb-4">
            <router-link to="/products">
              <button type="submit" class="btn btn-info">繼續購買</button>
            </router-link>
            <button type="submit" class="btn btn-outline-info" @click="deleteAllCarts">清空購物車</button>
          </div>
          <div class="border mb-3 bg-info text-primary" style="max-width: 850px;" v-for="item in cart.carts"
            :key="item.id">
            <div class="row g-0">
              <div class="col-md-2">
                <img :src="item.product.imageUrl" class="img-fluid rounded-start" alt="..." width="150">
              </div>
              <div class="cart col-md-10">
                <div class="row">
                  <div class="col" style="width: 200px;">
                    <h5>{{ item.product.title }}</h5>
                  </div>
                  <!-- <div class="input-group-sm"> -->
                  <div class="col btn-group">
                    <button type="button" class="btn btn-secondary" @click="item.qty--; changeCartQty(item, item.qty)"
                      :disabled="item.qty === 1">-</button>
                    <input min="1" type="number" class="productNumber" v-model.number="item.qty"
                      @change="changeCartQty(item, item.qty)" :disabled="item.qty === 1" readonly>
                    <button type="button" class="btn btn-secondary" @click="item.qty++">+</button>
                  </div>
                  <!-- </div> -->
                  <div class="col" style="width: 200px;">
                    <h5>NT${{ item.product.price }}</h5>
                  </div>
                  <div class="col">
                    <button type="button" class="btn btn-outline-danger" @click="removeCartItem(item.id)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path
                          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border bg-secondary p-4">
                  <h2>訂單明細</h2>
                  <hr>
                  <div class="d-flex justify-content-between mb-4">
                    <h5>小計</h5><span>NT$ {{ cart.final_total }}</span>
                  </div>
                  <div class="d-flex mb-4">
                    <form class="input-group total-coupon-input">
                      <input type="text" placeholder="輸入酷碰序號" class="form-control">
                      <button type="submit" class="btn btn-primary">套用</button>
                    </form>
                  </div>
                  <div class="d-flex justify-content-between mb-4">
                    <h5>酷碰券折抵</h5><span>NT$ 0</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5>共計</h5><span>NT$ {{ cart.final_total }}</span>
                  </div>
                </div>
        </div>
        <div class="col-4">
          <div class="row justify-content-center border py-4">
            <v-form ref="form" v-slot="{ errors }" @submit="createOrder">
              <div class="mb-3">
                <label for="email" class="form-label">Email<span class="marker">*</span></label>
                <v-field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
                  v-model="form.user.email"></v-field>
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名<span class="marker">*</span></label>
                <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名" rules="required" aria-required="true" v-model="form.user.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="tel" class="form-label">收件人電話<span class="marker">*</span></label>
                <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話" rules="required|min:8|max:10" v-model="form.user.tel"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">收件人地址<span class="marker">*</span></label>
                <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址" rules="required" v-model="form.user.address"></v-field>
                <error-message name="地址" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea name="" id="message" class="form-control" cols="30" rows="10"
                  v-model="form.message"></textarea>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-secondary">送出訂單</button>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { mapState, mapActions } from 'pinia'

import cartStore from '@/stores/cartStore'

const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      cart: {},
      product: {},
      orderId: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCarts () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          console.log(res)
          this.cart = res.data.data
          this.totalPrice = res.data.data.total
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
    updateCart (data) {
      //   this.loadingStatus.loadingItem = data.id;
      const url = `${VITE_PATH}/v2/api/${VITE_PATH}/cart/${data.id}`
      const cart = {
        product_id: data.product_id,
        qty: data.qty
      }
      axios.put(url, { data: cart }).then((response) => {
        alert(response.data.message)
        // this.loadingStatus.loadingItem = ''
        this.getCart()
      }).catch((err) => {
        alert(err.response.data.message)
        // this.loadingStatus.loadingItem = ''
      })
    },
    removeCartItem (id) {
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          alert(res.data.message)
          //   this.loadingStatus.cartQtyLoading = ''
          this.getCarts()
        })
    },
    deleteAllCarts () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/carts`
      axios.delete(url).then((res) => {
        alert(res.data.message)
        this.getCart()
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    ...mapActions(cartStore, ['addToCart', 'getCart']),
    createOrder (orderId) {
      // 檢查購物車是否為空
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/order`
      const order = this.form

      axios.post(url, { data: order }).then((res) => {
        this.$Swal.fire({
          icon: 'success',
          title: '訂單成立'
        })
        this.$refs.form.resetForm()
        this.orderId = res.data.orderId
        this.$router.push(`/paycheck/${res.data.orderId}`)
        localStorage.setItem('orderId', res.data.orderId)
        this.getCarts()
      }).catch(() => {
        this.$Swal.fire({
          icon: 'error',
          title: '訂單失敗'
        })
      })
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'final_total'])
  },
  mounted () {
    this.getCarts()
  }
}
</script>
