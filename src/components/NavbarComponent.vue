<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-primary fixed-top shadow-sm opacity-80">
    <div class="container">
      <RouterLink class="navbar-brand text-info" to="/home">喵星球</RouterLink>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <RouterLink to="/about" class="nav-link text-info">關於喵星球</RouterLink>
          <RouterLink to="/products" class="nav-link text-info">房型列表</RouterLink>
          <RouterLink to="/q&a" class="nav-link text-info">Q&A</RouterLink>
        </ul>
        <div class="navbar-nav ms-auto">
          <router-link to="/login" class="btn nav-link text-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person"
              viewBox="0 0 16 16">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </router-link>
          <RouterLink to="/checkout" class="btn position-relative text-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-basket2"
              viewBox="0 0 16 16">
              <path
                d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z" />
              <path
                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z" />
            </svg>
            <span class="position-absolute top-50 start-90 translate-middle badge rounded-pill bg-danger">
              {{ this.carts?.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </RouterLink>
          <!-- <RouterLink to="/cart" class="nav-link">購物車</RouterLink>
        <RouterLink to="/admin" class="nav-link">回後台</RouterLink> -->
          <!-- <RouterLink to="/login" class="nav-link">登入</RouterLink> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import axios from 'axios'

import { mapActions, mapState } from 'pinia'

import cartStore from '../stores/cartStore'

export default {
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style>
@media (min-width: 375px) {
  .nav-link {
    text-align: center;
  }
 }

@media (min-width: 768px) {  }

@media (min-width: 992px) {  }

@media (min-width: 1200px) {  }

@media (min-width: 1400px) {  }
</style>
