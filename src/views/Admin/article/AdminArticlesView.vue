<template>
  <div class="container">
    <div class="d-flex justify-content-between py-4 py-md-5">
      <h2 class="fw-bold">文章管理</h2>
      <button class="btn btn-outline-primary" @click="openModal(true)">
        + 新增文章
      </button>
    </div>
    <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th>作者</th>
          <th>
            標題
          </th>
          <th>
            描述
          </th>
          <th width="120">
            建立時間
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
        <Loading v-if="isLoading" v-model:active="isLoading" :can-cancel="false"></Loading>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.author }}</td>
          <td>{{ article.title }}</td>
          <td>{{ article.description }}</td>
          <td>{{ new Date(article.create_at * 1000).toLocaleDateString() }}</td>
          <td>
            <span class="text-success" v-if="article.isPublic">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="getArticle(article.id)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openDelArticleModal(article)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
    <ArticleModal
      ref="articleModal"
      :article="tempArticle"
      :is-new="isNew"
      @update-article="updateArticle"
    >
    </ArticleModal>
    <ArticleDelModal
      :item="tempArticle"
      ref="delModal"
      @del-item="delArticle"
    />
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Swal from 'sweetalert2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ArticleModal from '../../../components/ArticleModal.vue'
import ArticleDelModal from '../../../components/ArticleDelModal.vue'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      articles: [],
      isLoading: true,
      isNew: false,
      tempArticle: {},
      currentPage: 1,
      editor: ClassicEditor,
      editorData: '<p>Hello world!!</p>',
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', '|', 'undo', 'redo']
      }
    }
  },
  components: {
    ArticleModal,
    ArticleDelModal,
    Loading
  },
  methods: {
    getArticles (page = 1) {
      this.isLoading = true
      this.$axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/articles?page=${page}`)
        .then(res => {
          const { articles } = res.data
          this.articles = articles
          // this.pagination = pagination
          this.isLoading = false
        })
        .catch(err => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
        // .finally(() => {
        //   this.isLoading = false
        // })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: []
        }
        this.isNew = true
      } else {
        this.tempArticle = { ...item }
        this.isNew = false
      }
      this.$refs.articleModal.openModal()
    },
    getArticle (id) {
      this.$axios
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/article/${id}`)
        .then((res) => {
          this.openModal(false, res.data.article)
          this.isNew = false
        })
        .catch((err) => {
          // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    openDelArticleModal (item) {
      this.tempArticle = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.openModal()
    },
    updateArticle (item) {
      this.tempArticle = item
      let api = `${VITE_URL}/v2/api/${VITE_PATH}/admin/article`
      let httpMethod = 'post'
      // let status = '新增貼文';
      if (!this.isNew) {
        api = `${VITE_URL}/v2/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`
        httpMethod = 'put'
        // status = '更新貼文';
      }
      const articleComponent = this.$refs.articleModal
      this.$axios[httpMethod](api, { data: this.tempArticle })
        .then((res) => {
          this.toastMessage.fire({
            icon: 'success',
            title: res.data.message
          })
          articleComponent.hideModal()
          this.getArticles(this.currentPage)
        })
        .catch((err) => {
          this.setSweetMessageError(err.response.data.message)
          Swal.fire(this.sweetMessage)
        })
    },
    delArticle () {
      this.$axios
        .delete(
          `${VITE_URL}/v2/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`
        )
        .then((res) => {
          this.toastMessage.fire({
            icon: 'success',
            title: res.data.message
          })
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getArticles(this.currentPage)
        })
        .catch((err) => {
          this.setSweetMessageError(err.response.data.message)
          Swal.fire(this.sweetMessage)
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>
