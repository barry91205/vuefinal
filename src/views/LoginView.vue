<template>
    <div class="full-screen-bg">
        <div class="container middle">
            <div class="row" style="width: 720px;">
                <div class="col-md-6 col-sm-12 bg-primary middle">
                    <img src="../../public/images/logo.jpg" alt="">
                </div>
                <div class="col-md-6 col-sm-12 bg-info p-4 py-6">
                    <div class="border-bottom mb-4">
                        <h2 class="text-primary">
                            管理者登入
                        </h2>
                    </div>
                    <form id="form" class="form-signin" @submit.prevent="login">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder=" " autocomplete="off" required autofocus v-model="user.username">
                        <label for="floatingInput">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                <path
                                    d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                <path
                                    d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                            </svg>
                        </label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder=" " autocomplete="off" required v-model="user.password">
                        <label for="floatingPassword">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                            </svg>
                        </label>
                    </div>
                    <div class="btns">
                            <button class="btn btn-primary w-100 mb-2" type="submit" @click="login">登入</button>
                        <router-link to="/home">
                            <button type="button" class="btn btn-outline-primary w-100">返回</button>
                        </router-link>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import { useRouter } from 'vue-router'
const { VITE_URL } = import.meta.env
// const router = useRouter()
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = `${VITE_URL}/v2/admin/signin`
      axios.post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data
          this.$Swal.fire({
            title: '成功登入',
            icon: 'success',
            position: 'top-end',
            timer: 1000,
            showConfirmButton: false
          })
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`
          this.$router.push('/admin/home')
        }).catch((err) => {
          this.$Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
          this.$router.push('/login')
        })
    }
  }
}

</script>

<style scoped>
.full-screen-bg {
  background-image: url('public/images/roomforest.jpg'); /* 设置背景图片的URL */
  /* height: 919px; */
  min-height: 100vh; /* 设置最小高度为视窗的高度 */
  background-position: center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 430px) {
  img {
    height: 300px;
  }
 }

@media (max-width: 768px) {  }

@media (max-width: 992px) {  }

@media (max-width: 1200px) {  }

@media (max-width: 1400px) {  }
</style>
