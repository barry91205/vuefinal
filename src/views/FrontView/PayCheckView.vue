<template>
  <div class="bg-primary">
    <div class="container text-info py-6">
      <div class="row">
        <div class="col-md-3 col-sm-5 py-6">
          <div class="border-bottom mb-2">
            <h2>訂單確認。</h2>
          </div>
        </div>
        <div class="col-8">
        </div>
      </div>
      <div class="row text-center">
        <div class="col-4 step rounded-start">1.填寫資料</div>
        <div class="col-4 step state">2.確認付款</div>
        <div class="col-4 step rounded-end">3.訂單完成</div>
      </div>
      <div class="row py-4">
        <div class="col-md-6 col-sm-12 border-top bg-secondary p-4 " style="height: 100%;">
          <h2>訂單人資訊</h2>
          <hr>
          <form action="" @submit.prevent="payOrder">
          <table class="table">
            <thead>
            </thead>
            <tbody>
              <tr>
                <th scope="row">姓名</th>
                <td>{{ order.user.name }}</td>
                <!-- <td>{{ user.name }}</td> -->
              </tr>
              <tr>
                <th scope="row">電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td colspan="2">{{ order.user.email }}</td>
              </tr>
              <tr>
                <th scope="row">地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th scope="row">匯款方式</th>
                <td>信用卡</td>
              </tr>
              <tr>
                <th scope="row">匯款狀態</th>
                <td class="text-danger">尚未付款</td>
              </tr>
            </tbody>
          </table>
        </form>
        </div>
        <div class="col-md-6 col-sm-12 border-top bg-secondary p-4" style="height: 100%;">
          <!-- v-for="item in order" :key="item" -->
          <h2>訂單明細</h2>
          <hr>
          <div class="d-flex justify-content-between mb-4">
                    <h5>訂單編號</h5><span>{{ order.id }}</span>
                  </div>
          <div class="d-flex justify-content-between mb-4">
            <h5>小計</h5><span>NT$ {{ order.total }}</span>
          </div>
          <div class="d-flex justify-content-between mb-4">
            <h5>訂購日期</h5><span>{{ order.create_at }}</span>
          </div>
          <div class="mb-4" v-for="item in productsData" :key="item.id">
            <div class="d-flex justify-content-between mb-4">
              <p>{{ item.product.title }}<span> x {{ item.qty }}</span></p>NT$ {{ item.product.price }}
            </div>

          </div>
          <div class="d-flex justify-content-between">
            <h5>共計</h5><span>NT$ {{ order.total }}</span>
          </div>
          <button type="submit" class="btn btn-info rounded-0 w-100 mt-4" @click="payOrder">確認送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      order: {},
      orderId: {},
      user: {},
      productsData: [],
      total: 0,
      isLoading: true
    }
  },
  methods: {
    // 訂單資訊
    getOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/order/${this.orderId}`
      axios.get(url).then((res) => {
        this.order = res.data.order
        this.productsData = res.data.order.products
      }).catch(() => {
      })
    },
    payOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/pay/${this.orderId}`
      axios.post(url).then(() => {
        this.getOrder()
        this.$Swal.fire({
          title: '成功付款',
          icon: 'success',
          // position: 'top-end',
          timer: 2000,
          showConfirmButton: false
        })
        this.$router.push('/orderfinish')
      }).catch((err) => {
        this.$Swal.fire({
          icon: 'error',
          title: err.response.data.message
        })
      })
    }
  },
  created () {
    this.orderId = this.$route.params.id
    this.getOrder()
  },
  mounted () {
    this.getOrder()
  }
}
</script>

<style>

</style>
