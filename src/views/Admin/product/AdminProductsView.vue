<template>
  <div class="container">
    <div class="d-flex justify-content-between py-4 py-md-5">
      <h2 class="fw-bold">商品管理</h2>
      <!-- btn 建立新產品 -->
      <div>
        <button
      @click="openModal('uploadImgModal')"
      class="btn btn-primary me-2"
    >
      上傳圖片
    </button>
        <button class="btn btn-outline-primary" @click="openModal('productModal')">
          建立新的產品
        </button>
    </div>
      </div>
    <table class="table table-hover mt-4">
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
        <!-- <loading v-if="isLoading" :active="isLoading" :can-cancel="false"/> -->
        <Loading v-model:active="isLoading" :can-cancel="false" :loader="loader"></Loading>
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
                <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('editModal', item)">
                  編輯
                </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delProductModal', item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination :pagination="pagination" @emit-pages="getData"></Pagination>
  <!-- 分頁按鈕 -->
  <!-- Modal -->
  <Product-Modal
    :current-product="currentProduct"
    :is-new="isNew"
    @product-instance="getProductModal"
    @refresh-products="refreshProducts"
  ></Product-Modal>
  <Upload-Img-Modal @upload-img-instance="getUploadImgModal"></Upload-Img-Modal>
  <Product-Del-Modal
    :current-product="currentProduct"
    @product-delete-instance="getProductDelModal"
    @refresh-products="refreshProducts"
  ></Product-Del-Modal>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Pagination from '@/components/PaginationView.vue'
import ProductModal from '../../../components/ProductModal.vue'
import ProductDelModal from '../../../components/ProductDelModal.vue'
import UploadImgModal from '../../../components/UploadimgModal.vue'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productModal: null,
      delProductModal: null,
      uploadImgModal: null,
      currentProduct: {
        imagesUrl: []
      },
      currentPage: 1,
      pages: {},
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      pagination: {},
      isLoading: true,
      loader: 'bars'
    }
  },
  components: {
    Pagination,
    Loading,
    ProductModal,
    UploadImgModal,
    ProductDelModal
  },
  methods: {
    checkAdmin () {
      const url = `${VITE_URL}/v2/api/user/check`
      axios.post(url)
        .then((res) => {
          // this.getData()
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
        this.products = res.data.products
        this.pagination = res.data.pagination
        this.isLoading = false
      }).catch(() => {
      })
    },
    openModal (modalName, item) {
      if (modalName === 'productModal') {
        this.currentProduct = { imagesUrl: [] }
        this.isNew = true
        this.productModal.show()
      } else if (modalName === 'editModal') {
        this.currentProduct = { ...item }
        this.isNew = false
        this.productModal.show()
      } else if (modalName === 'delProductModal') {
        this.currentProduct = item
        this.delProductModal.show()
      } else if (modalName === 'uploadImgModal') {
        this.uploadImgModal.show()
      }
    },
    getProductModal (productModel) {
      this.productModal = productModel
    },
    getProductDeleteModal (productDeleteModel) {
      this.delProduct = productDeleteModel
    },
    getUploadImgModal (uploadImgModel) {
      this.uploadImgModal = uploadImgModel
    },
    refreshProducts () {
      this.getData(this.currentPage)
    },
    updateProduct () {
      let url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/product`
      let http = 'post'

      if (!this.isNew) {
        url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`
        http = 'put'
      }

      axios[http](url, { data: this.tempProduct }).then((res) => {
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
            confirmButtonText: '確定刪除',
            cancelButtonText: '取消'
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
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token

    this.checkAdmin()
    this.getData()
  }
}

</script>
