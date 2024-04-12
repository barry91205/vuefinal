<template>
    <div class="bg-primary">
        <loading v-if="isLoading" :active="isLoading" :can-cancel="false"></loading>
        <div class="container text-info py-6">
            <div class="row pb-6 pb-sm-0">
                <div class="col-md-5 my-6">
                    <div class="border-bottom">
                        <h2>{{ article.title }}<span class="opacity-50 px-2 fs-6">
                                {{ article.tag }}
                            </span></h2>
                    </div>
                    <span class="mt-2">
                        {{ new Date(article.create_at * 1000).toLocaleDateString() }}
                    </span>
                </div>
                <h5 class="mt-4" v-html="article.content"></h5>
            </div>
            <RouterLink class="text-decoration-none" to="/articles">
          <p class="text-dark my-3 link-hover">
            回上頁
            <i class="bi bi-arrow-left-short"></i>
          </p>
        </RouterLink>
        </div>
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      article: [],
      pagination: {},
      isLoading: true
    }
  },
  components: {
    Loading
  },
  methods: {
    getArticle () {
      const { id } = this.$route.params
      this.isLoading = true
      this.$axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/article/${id}`)
        .then(res => {
          this.article = res.data.article
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
    this.getArticle()
  }
}
</script>
