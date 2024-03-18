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
        <div class="col-4 step rounded-start">填寫資料</div>
        <div class="col-4 step state">確認付款</div>
        <div class="col-4 step rounded-end">訂單完成</div>
      </div>
      <div class="row py-4">
        <div class="col-6 border bg-secondary p-4" style="height: 100%;">
          <h2>訂單人資訊</h2>
          <hr>
          <form action="" @submit.prevent="payOrder">
          <table class="table">
            {{ order }}
            <thead>
            </thead>
            <tbody>
              <tr>
                <th scope="row">姓名</th>
                <td>王小草</td>
                <!-- <td>{{ user.name }}</td> -->
              </tr>
              <tr>
                <th scope="row">電話</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td colspan="2">Larry the Bird</td>
              </tr>
              <tr>
                <th scope="row">地址</th>
                <td>毛毛區貓貓路50號</td>
              </tr>
              <tr>
                <th scope="row">匯款方式</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">匯款狀態</th>
                <td class="text-danger">尚未付款</td>
              </tr>
            </tbody>
          </table>
        </form>
        </div>
        <div class="col-6 border bg-secondary p-4" style="height: 100%;">
          <h2>訂單明細</h2>
          <hr>
          <div class="d-flex justify-content-between mb-4">
                    <h5>訂單編號</h5><span>{{ orderId }}</span>
                  </div>
          <div class="d-flex justify-content-between mb-4">
            <h5>小計</h5><span>NT$ 14000</span>
          </div>
          <div class="d-flex justify-content-between mb-4">
            <h5>訂購日期</h5><span>{{ order.paid_date }}</span>
          </div>
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-4">
              <p>星空房</p><span>x3</span>nt$1500
            </div>

          </div>
          <div class="d-flex justify-content-between">
            <h5>共計</h5><span>NT$ 14000</span>
          </div>
          <button type="submit" class="btn btn-info rounded-0 w-100 mt-4">確認送出</button>
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
        console.log(res)
      }).catch(() => {
      })
    },
    payOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/pay/${this.orderId}`
      axios.post(url).then(() => {
        this.getOrder()
      }).catch(() => {
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  },
  mounted () {
    this.getOrder()
  }
}
</script>
