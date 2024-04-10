<template>
  <div class="bg-primary">
    <div class="container text-info">
      <div class="row py-md-6">
        <div class="col-md-3 pt-6 col-sm-5">
          <div class="border-bottom mb-2">
            <h2>訂單確認。</h2>
          </div>
        </div>
        <div class="col-8">
        </div>
      </div>
      <div class="row text-center">
        <div class="col-4 step state rounded-start">1.填寫資料</div>
        <div class="col-4 step">2.確認付款</div>
        <div class="col-4 step rounded-end">3.完成訂單</div>
      </div>
      <div class="row py-4">
        <div class="col-md-8 col-sm-12">
          <!-- {{ cart }} -->
          <div v-if="carts.length === 0" class="text-info d-flex align-items-center justify-content-center mb-2"
            style="height:200px; background-color: rgba(99, 99, 99, 0.90); z-index: 100;">
            購物車沒有任何商品，趕快去看喜歡的房型吧!
            <router-link to="/products">
              <button type="submit" class="btn btn-info ms-2">去逛逛</button>
            </router-link>
          </div>
          <div class="d-flex justify-content-between mb-4" v-if="carts.length > 0">
            <router-link to="/products">
              <button type="submit" class="btn btn-info">繼續購買</button>
            </router-link>
            <button type="submit" class="btn btn-outline-info" @click="deleteAllCarts">清空購物車</button>
          </div>
          <div class="border mb-3 bg-info text-primary" v-for="item in cart.carts" :key="item.id">
            <div class="row">
              <div class="col-md-2 col-sm-3">
                <img :src="item.product.imageUrl" class="img-fluid">
              </div>
              <div class="cart col-md-10 col-sm-9">
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
              <!-- <h5>小計</h5><span>NT$ {{ formatPrice((cart.total).toFixed(0)) }}</span> -->
            </div>
            <div class="d-flex mb-4">
              <form class="input-group total-coupon-input">
                <input type="text" placeholder="輸入酷碰序號" class="form-control" aria-label="Recipient's username"
                  aria-describedby="button-addon2" v-model="coupon">
                <button type="submit" class="btn btn-primary" id="button-addon2" @click="useCoupon(coupon)">套用</button>
              </form>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <h5>酷碰券折抵</h5><span>NT$ {{ formatPrice((cart.total - final_total ).toFixed(0)) }}</span>
            </div>
            <div class="d-flex justify-content-between">
              <h5>共計</h5><span>NT$ {{ formatPrice((final_total).toFixed(0)) }}</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
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
      },
      coupon: ''
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
      const url = `${VITE_PATH}/v2/api/${VITE_PATH}/cart/${data.id}`
      const cart = {
        product_id: data.product_id,
        qty: data.qty
      }
      axios.put(url, { data: cart }).then((response) => {
        alert(response.data.message)
        this.getCart()
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    removeCartItem (id) {
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          this.$Swal.fire({
            title: '成功刪除商品',
            icon: 'success',
            position: 'top-end',
            timer: 1000,
            showConfirmButton: false
          })
          this.getCarts()
        })
        .catch(err => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    deleteAllCarts () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/carts`
      axios.delete(url).then((res) => {
        this.$Swal.fire({
          title: '成功刪除所有商品',
          icon: 'success',
          position: 'top-end',
          timer: 1000,
          showConfirmButton: false
        })
        this.getCart()
      }).catch(err => {
        this.$Swal.fire({
          icon: 'error',
          title: err.response.data.message
        })
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
    },
    useCoupon (coupon) {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/coupon`
      const item = {
        data: {
          code: coupon
        }
      }
      axios.post(url, item).then(res => {
        this.getCart()
        this.$Swal.fire({
          title: '套用成功',
          icon: 'success',
          position: 'top-end',
          timer: 1000,
          showConfirmButton: false
        })
      }).catch(() => {
        this.$Swal.fire({
          icon: 'error',
          title: '套用失敗'
        })
      })
    },
    formatPrice (price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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

<style>
.cart {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 430px) {
  .row {
    display: flex;
    /* flex-direction: column; */
    border: none;
  }

}

@media (max-width: 768px) {}

@media (max-width: 992px) {}

@media (max-width: 1200px) {}

@media (max-width: 1400px) {}
</style>
