<template>
  <div class="container">
    <h2 class="fw-bold py-4">訂單管理</h2>
    <table class="table-hover table mt-4">
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
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ new Date(item.create_at * 1000).toLocaleDateString() }}</td>
          <td>{{ item.user.name }}</td>
          <td>
            <template v-for="product in item.products" :key="product.id">
              {{ product.product.title }} x{{ product.qty }}<br>
            </template>
          </td>
          <td>{{ item.total }}</td>
          <td> <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else class="text-danger">未付款</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-secondary btn-sm" @click="openModal('edit', item)">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="item.num === 0">
                </span>
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                  v-if="item.num === 0"></span>
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pagination="pagination" @emit-pages="getOrder"></Pagination>
  </div>
  <!-- 編輯訂單-->
  <OrderEditModal ref="orderEditModal" :temp-order="tempOrder" @update="getOrder"></OrderEditModal>
  <!-- 刪除訂單 -->
  <OrdelDelModal ref="delOrderModal" :temp-order="tempOrder" @update="getOrder"></OrdelDelModal>
</template>

<script>
import OrderEditModal from '@/components/OrderEditModal.vue'
import OrdelDelModal from '@/components/OrderDelModal.vue'
import axios from 'axios'
import Pagination from '@/components/PaginationView.vue'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      productsData: [],
      // orders: { user: {} },
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: true,
      page: {}
    }
  },
  components: {
    OrderEditModal,
    OrdelDelModal,
    Pagination
  },
  methods: {
    getOrder (page = 1) {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders
          this.productsData = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    openModal (status, item) {
      if (status === 'edit') {
        this.tempOrder = { ...item } // 將值帶入input
        this.status = false
        console.log(this.tempOrder)
        this.$refs.orderEditModal.showModal()
      } else if (status === 'delete') {
        this.tempOrder = { ...item }
        console.log(this.tempOrder)
        this.$refs.delOrderModal.showModal()
      }
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
