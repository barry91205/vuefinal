<template>
    <div class="container">
        <div class="row">
            <div class="col-3 bg-primary p-4 sidebarMenu">
                <router-link to="/home">
                    <img src="../../../images/logo.jpg" alt="" width="200px">
                </router-link>
                <router-link to="/admin/home">
                    <button type="button" class="btn btn-primary w-100 mb-2">後臺首頁</button>
                </router-link>
                <router-link to="/admin/products">
                    <button type="button" class="btn btn-primary w-100 mb-2">商品管理</button>
                </router-link>
                <router-link to="/admin/orders">
                  <button type="button" class="btn btn-primary w-100 mb-2">訂單管理</button>
                </router-link>
                <router-link to="/admin/coupon">
                  <button type="button" class="btn btn-primary w-100 mb-2">酷碰管理</button>
                </router-link>
                <hr>
                <router-link to="/home">
                    <button type="button" class="btn btn-primary w-100 mb-2">回前台</button>
                </router-link>
                <button type="button" class="btn btn-primary w-100 mb-2">登出</button>
            </div>
            <div class="col-9 ms-sm-auto col-lg-10 p-md-4 my-6 border text-primary">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL } = import.meta.env

export default {
  methods: {
    checkAdmin () {
      // const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      // '$1')
      // this.$axios.defaults.headers.common.Authorization = `${token}`
      const url = `${VITE_URL}/v2/api/user/check`
      axios.post(url)
        .then((res) => {
          console.log(res.data.success)
        })
        .catch((err) => {
          // alert(err.response.data.message)
          console.log(err)
          //   window.location = 'LoginView.vue'
          this.$router.push('/adminLogin')
        })
    },
    created () {
      this.checkAdmin()
    },
    mounted () {
      this.$router.push('/admin/home')
    }
  }
}
</script>

<style scoped>
.sidebarMenu {
    position: fixed;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    width: 250px;
    z-index: 1000;
    min-height: 100vh;
}
</style>
