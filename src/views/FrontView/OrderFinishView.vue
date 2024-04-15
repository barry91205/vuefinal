<template>
  <div class="bg-primary pb-6">
    <div class="container text-info py-6">
      <Loading v-model:active="isLoading" :can-cancel="false" :is-full-page="fullPage" :loader="loader"></Loading>
      <div class="row">
        <div class="col-md-3 col-sm-5 py-6">
          <div class="border-bottom mb-2">
            <h2>訂單確認。</h2>
          </div>
        </div>
        <div class="col-8">
        </div>
      </div>
      <div class="row text-center mb-6">
        <div class="col-4 step rounded-start">1.填寫資料</div>
        <div class="col-4 step">2.確認付款</div>
        <div class="col-4 step rounded-end state">3.訂單完成</div>
      </div>
      <div class="column middle">
        <div class="col-md-6 col-sm-10 border bg-secondary text-center p-6">
          <h2 class="mb-4"><i class="bi bi-check-circle"></i><span> 成功付款</span></h2>
          <h5>感謝各位對喵星球的支持!</h5>
          <p>{{ order.id }}</p>
        </div>
        <div class="col-md-6 col-sm-10 d-flex justify-content-between mt-2">
          <router-link to="/home">
            <button type="submit" class="btn btn-info">回首頁</button>
          </router-link>
          <router-link to="/products">
            <button type="submit" class="btn btn-outline-info">去逛逛</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
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
  components: {
    Loading
  },
  methods: {
    // 訂單資訊
    getOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/order/${this.orderId}`
      axios.get(url).then((res) => {
        this.order = res.data.order
      }).catch(() => {
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
.column {
  display: flex;
  flex-direction: column
}
</style>
