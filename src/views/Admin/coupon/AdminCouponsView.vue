<template>
    <div class="container">
        <div class="d-flex justify-content-between py-4 py-md-5">
          <h2 class="fw-bold">商品管理</h2>
          <!-- btn 建立新產品 -->
          <router-link to="/admin/addproduct">
            <button class="btn btn-outline-primary">
           + 新增酷碰卷
          </button>
          </router-link>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                名稱
              </th>
              <th>酷碰代碼</th>
              <th width="120">
                折扣
              </th>
              <th width="120">
                期限
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
            <tr v-for="(item) in products" :key="item.id">
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td>
                {{ item.origin_price }}
              </td>
              <td>
                {{ item.price }}
              </td>
              <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <router-link :to="'product/edit/'+ tempProduct.id">
                    <button type="button" class="btn btn-outline-primary btn-sm">
                    編輯
                  </button>
                  </router-link>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="delProduct">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 分頁按鈕 -->
        <!-- <pagination :pages="pages" :get-data="getData"></pagination>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" :class="{disabled: !pages.has_pre}">
              <a class="page-link" href="#" aria-label="Previous" @click.prevent="getData(pages.current_page -1)">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item" :class="{active: page === pages.current_page}" v-for="page in pages.total_pages" :key="page + 123">
              <a class="page-link" href="#" @click.prevent="getData(page)"> {{page}} </a>
            </li>
            <li class="page-item" :class="{disabled: !pages.has_next}">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav> -->
      </div>
      </template>
