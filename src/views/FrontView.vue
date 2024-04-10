<template>
  <div class="bg-primary">
    <div class="container">
      <NavbarComponent></NavbarComponent>
    </div>
  </div>
  <RouterView></RouterView>
  <!-- Footer -->
  <footer class="footer Newsletter">
    <div class="container p-6">
      <div class="row">
        <div class="col-md-6 col-sm-12 text-start">
          <h2 class="text-info mb-4">歡迎訂閱電子報</h2>
          <form class="input-group total-coupon-input">
            <input type="text" placeholder="請輸入信箱" class="form-control">
            <button type="submit" class="btn btn-primary">訂閱</button>
          </form>
        </div>
      </div>
    </div>
    <div class="bg-primary text-center p-4 text-info">
      <img src="../../public/images/logo.jpg" alt="">
      <p>106 台北市大安區信義路三段100號10號5樓</p>
      <p>02-2785-8877</p>
      <p>&copy; 2024 喵星球_貓咪旅館. All Rights Reserved.</p>
      <h6>此網站為個人作品展示，非商業使用。</h6>
    </div>
  </footer>
  <button class="cat-button"  @click="scrollToTop">
    <span class="cat-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eject-fill" viewBox="0 0 16 16">
  <path d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H1.656C.78 9.5.326 8.455.926 7.816zM.5 11.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1z"/>
</svg></span>
</button>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 50) {
        this.showButton = true
      } else {
        this.showButton = false
      }
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted () {
    // this.$router.push('/home')
  }
}
</script>

<style>
.Newsletter {
  background-image: url('public/images/roomforest.jpg');
  background-size: cover;
  background-position: center;
  /* height: 300px; */
  text-align: center;
}
.cat-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999;
            background-color: #535F43;
            border: none;
            color: #fff;
            padding: 15px 25px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .cat-button:hover {
            background-color: #a1b08f;
        }

        .cat-icon {
            width: 30px;
            height: 30px;
            background-size: cover;
        }
</style>
