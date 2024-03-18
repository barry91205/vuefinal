<template>
    <div class="container">
        <h2 class="fw-bold">商品管理</h2>
        <table class="table-hover table">
            <thead class="bg-dark">
                <tr class="align-middle">
                    <th width="120">訂單編號</th>
                    <th width="120">訂單時間</th>
                    <th width="120">訂房者</th>
                    <th width="120">訂購房型</th>
                    <th width="120">應付金額</th>
                    <th width="120">狀態</th>
                    <th width="120">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>0722564</th>
                    <th>貓尼</th>
                    <th>星空房</th>
                    <th>2000</th>
                    <th>未付款</th>
                    <th>2024/3/12</th>
                    <th>編輯</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      allOrders: [],
      orders: [],
      searchInput: '',
      pagination: {},
      isLoading: true,
      pages: {}
    }
  },
  methods: {
    getOrder (page = 1) {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          // const { orders } = res.data
          // this.allOrders = orders
          // this.orders = orders
          this.orders = res.data.orders
          console.log(res)
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
