<template>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <!-- 回前頁 -->
    <li class="page-item" :class="{disabled:!pagination.has_pre}">
      <a class="page-link" href="#" aria-label="Previous"
      @click.prevent="updatePage(pagination.current_page-1)">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <!-- 當前頁面 -->
    <li class="page-item"
         v-for="page in pagination.total_pages" :key="page"
        :class="{active:page === pagination.current_page}">
      <a class="page-link bg-secondary" href="#" @click.prevent="updatePage(page)">{{page}}</a>
   </li>
   <!-- 下一頁 -->
    <li class="page-item"
        :class="{disabled: !pagination.has_next}">
      <a class="page-link" href="#" aria-label="Next"
      @click.prevent="updatePage(pagination.current_page+1)">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    updatePage (item) {
      this.$emit('emitPages', item)
    }
  }
}
</script>
