<template>
  <div class="bg-primary">
    <div class="container">
      <NavbarComponent></NavbarComponent>
    </div>
  </div>
  <RouterView></RouterView>
  <!-- Footer -->
  <footer class="footer">
    <div class="bg-primary text-center p-4 text-info">
      <img src="../../images/logo.jpg" alt="">
      <p>106 台北市大安區信義路三段100號10號5樓</p>
      <p>02-2785-8877</p>
      <p>&copy; 2024 喵星球_貓咪旅館. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent
  },
  created () {
    // this.$router.push('/home')
  }
}
</script>
