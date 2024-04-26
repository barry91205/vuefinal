<template>
  <div class="bg-primary">
    <div class="container text-info py-6">
      <Loading v-model:active="isLoading" :can-cancel="false" :is-full-page="fullPage" :loader="loader"></Loading>
      <div class="row pb-6 pb-sm-0">
        <div class="col-md-6">
          <div class="col-md-4 my-6 me-2">
            <div class="border-bottom">
              <h2>喵星球<br>
                最新消息。
              </h2>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-4 my-6 me-2 my-sm-0"></div>
          <h5 class="vertical-text">
            喵星球最新消息<br>
            獨家新聞。
          </h5>
        </div>
      </div>
      <div class="news">
        <ul class="list-group list-group-flush my-lg-4 border-secondary" data-aos="fade-up">
          <template v-for="article in articles" :key="article.id">
            <RouterLink class="text-decoration-none" :to="`/article/${article.id}`" exact>
              <li class="list-group-item py-2 article-hover border-left">
                <span class="me-2 text-secondary">
                  {{ new Date(article.create_at * 1000).toLocaleDateString() }}
                </span>
                <span class="text-light opacity-50 px-2">
                  {{ article.tag }}
                </span>
                <h5>
                  {{ article.title }}
                </h5>
              </li>
            </RouterLink>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      articles: [],
      pagination: {},
      isLoading: true,
      fullPage: true,
      loader: 'bars'
    }
  },
  components: {
    Loading
  },
  methods: {
    getArticles (page = 1) {
      this.isLoading = true
      this.$axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/articles?page=${page}`)
        .then(res => {
          const { articles, pagination } = res.data
          this.articles = articles
          this.pagination = pagination
        })
        .catch(err => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  mounted () {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100, // 到哪個位置會觸發
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // 指觸發一次
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
    })
    this.getArticles()
  }
}
</script>

<style>
.article-hover {
  transition: transform 0.3s ease;

  &:hover {
    background: #C6BBA2;
    transform: translateX(-10px);
  }
}
</style>
