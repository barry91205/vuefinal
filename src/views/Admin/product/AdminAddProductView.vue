<template>
    <div class="container">
        <h2 class="mb-4">增加房型</h2>
        <hr>
        <div class="row">
            <div class="col-6">
                <div class="mb-4">
                    <label for="imageUrl" class="form-label">主要圖片</label>
                    <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                </div>
                <img :src="tempProduct.imageUrl" class="img-fluid">
            </div>
            <div class="col-6" v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                <div class="mb-4">
                    <label for="imagesUrl" class="form-label">新增多圖</label>
                    <input type="text" class="form-control" placeholder="請輸入多圖連結" v-model="tempProduct.imagesUrl[key]">
                </div>
                <img :src="image" class="img-fluid">
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="mb-4">
                <label for="title" class="form-label">
                    標題</label>
                <input type="text" class="form-control" placeholder="請輸入標題" v-model="tempProduct.title">
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="mb-4">
                    <label for="category" class="form-label">分類</label>
                    <input type="text" id="category" class="form-control" placeholder="請輸入分類" v-model="tempProduct.category">
                </div>
                <div class="mb-4">
                    <label for="origin_price" class="form-label">原價</label>
                    <input id="origin_price" v-model.number="tempProduct.origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價">
                </div>
            </div>
            <div class="col-6">
                <div class="mb-4">
                    <label for="nuit" class="form-label">單位</label>
                    <input id="unit" v-model="tempProduct.unit" type="text" class="form-control" placeholder="請輸入單位">
                </div>
                <div class="mb-4">
                    <label for="price" class="form-label">售價</label>
                    <input id="price" v-model.number="tempProduct.price" type="number" min="0" class="form-control" placeholder="請輸入售價">
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="mb-4">
                <label for="description" class="form-label">商品描述</label>
                <textarea id="description" v-model="tempProduct.description" type="text" class="form-control" placeholder="請輸入商品描述"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="mb-4">
                <label for="content" class="form-label">說明內容</label>
                <textarea id="description" v-model="tempProduct.content" type="text" class="form-control" placeholder="請輸入說明內容"></textarea>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-6">
                <div class="form-check">
                    <input id="is_enabled" v-model="tempProduct.is_enabled" class="form-check-input" type="checkbox"
                      :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
            </div>
            <div class="col-6">
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary me-2" data-bs-dismiss="modal" @click="returnPage">
                        取消
                    </button>
                    <button type="button" class="btn btn-primary" @click="addProduct">
                        確認
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

// import draggable from 'vuedraggable'

const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      drag: false,
      isNew: false,
      pages: {},
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isLoading: true // Loading效果
    }
  },
  methods: {
    addProduct () {
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/product`

      axios.post(url, { data: this.tempProduct }).then((response) => {
        this.$Swal.fire({
          position: 'top-end',
          title: '新增商品成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        })
        this.$router.push('/admin/products')
      }).catch((err) => {
        alert(err.response.data.message)
        this.$router.push('/admin/products')
      })
    },
    returnPage () {
      this.$router.go(-1)
    }
  }
}
</script>
