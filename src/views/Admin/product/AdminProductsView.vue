<template>
  <div class="container">
      <div class="d-flex justify-content-between py-4 py-md-5">
        <h2 class="fw-bold">商品管理</h2>
        <!-- btn 建立新產品 -->
        <router-link to="/admin/addproduct">
          <button class="btn btn-outline-primary">
          建立新的產品
        </button>
        </router-link>
      </div>
      <!-- <div class="text-end mt-4">
            <button class="btn btn-primary">
                建立新的產品
            </button>
        </div> -->
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">
              分類
            </th>
            <th>房型名稱</th>
            <th width="120">
              原價
            </th>
            <th width="120">
              售價
            </th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <loading v-if="isLoading" :active="isLoading" :can-cancel="false"/>
          <tr v-for="(item) in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>
              {{ item.origin_price }}
            </td>
            <td>
              {{ item.price }}
            </td>
            <td>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <router-link :to="'product/edit/'+ item.id">
                  <button type="button" class="btn btn-outline-primary btn-sm">
                  編輯
                </button>
                </router-link>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="delProduct(item.id)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 分頁按鈕 -->
      <!-- <pagination :pages="pages" :get-data="getData"></pagination>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{disabled: !pages.has_pre}">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="getData(pages.current_page -1)">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" :class="{active: page === pages.current_page}" v-for="page in pages.total_pages" :key="page + 123">
            <a class="page-link" href="#" @click.prevent="getData(page)"> {{page}} </a>
          </li>
          <li class="page-item" :class="{disabled: !pages.has_next}">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav> -->
    </div>
  <!-- Modal -->

  <!-- <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
           aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <button type="button" class="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="delProduct(item.id)">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div> -->
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      pages: {},
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      // 判斷：是否為新增產品
      //   isNew: false,
      pagination: {},
      isLoading: true
    }
  },
  components: {
    Loading
  },
  methods: {
    checkAdmin () {
      const url = `${VITE_URL}/v2/api/user/check`
      axios.post(url)
        .then((res) => {
          this.getData()
          //   console.log(res.data.success)
        })
        .catch((err) => {
          // alert(err.response.data.message)
          console.log(err)
          window.location = 'LoginView.vue'
        })
    },
    getData (page = 1) {
      this.isLoading = true
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=${page}`
      axios.get(url).then((res) => {
        console.log(res)
        this.products = res.data.products
        this.allProducts = res.data.products
        this.isLoading = false
      }).catch(() => {
        // alert(err.response.data.message);
      })
    },
    updateProduct () {
      let url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/product`
      let http = 'post'

      if (!this.isNew) {
        url = `${VITE_URL}/api/${VITE_PATH}/v2/admin/product/${this.tempProduct.id}`
        http = 'put'
      }

      axios[http](url, { data: this.tempProduct }).then((response) => {
        alert(response.data.message)
        // productModal.hide();
        this.$refs.pModal.closeModal()
        this.getData()
        this.tempProduct = {}
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    delProduct (id) {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${id}`
      console.log(this.tempProduct)
      axios.delete(url)
        .then((res) => {
          this.$Swal.fire({
            title: '確定刪除商品?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#eb5a68',
            cancelButtonColor: '#8bafd7',
            confirmButtonText: '確定刪除',
            cancelButtonText: '取消'
          })
          this.$Swal.fire({
            position: 'top-end',
            title: '已刪除',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000
          })
          this.getData()
        }).catch((err) => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    }
  },
  mounted () {
    // delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
    //   keyboard: false
    // })
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token

    this.checkAdmin()
    this.getData()
  }
}

</script>
