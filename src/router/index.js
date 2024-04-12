import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/FrontView.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/FrontView/HomeView.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/FrontView/AboutView.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('@/views/FrontView/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('@/views/FrontView/ProductView.vue')
      },
      {
        path: '/q&a',
        component: () => import('@/views/FrontView/Q&AView.vue')
      },
      {
        path: '/checkout',
        component: () => import('@/views/FrontView/CheckoutView.vue')
      },
      {
        path: 'paycheck/:id',
        component: () => import('@/views/FrontView/PayCheckView.vue')
      },
      {
        path: '/orderfinish',
        component: () => import('@/views/FrontView/OrderFinishView.vue')
      },
      {
        path: 'articles',
        name: '文章列表',
        component: () => import('@/views/FrontView/ArticlesView.vue')
      },
      {
        path: 'article/:id',
        name: '文章詳細頁面',
        component: () => import('@/views/FrontView/ArticleView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin/AdminView.vue'),
    children: [
      {
        path: 'home',
        name: '後臺首頁',
        component: () => import('@/views/Admin/AdminHomeView.vue')
      },
      {
        path: 'products',
        name: '後台產品列表',
        component: () => import('@/views/Admin/product/AdminProductsView.vue')
      },
      {
        path: 'addproduct',
        name: '後臺新增商品',
        component: () => import('@/views/Admin/product/AdminAddProductView.vue')
      },
      {
        path: 'products',
        name: '後臺編輯商品',
        component: () => import('@/views/Admin/product/AdminEditProductView.vue')
      },
      {
        path: 'orders',
        name: '後臺訂單列表',
        component: () => import('@/views/Admin/order/AdminOrdersView.vue')
      },
      {
        path: 'coupons',
        name: '後臺酷碰卷列表',
        component: () => import('@/views/Admin/coupon/AdminCouponsView.vue')
      },
      {
        path: 'articles',
        name: '後臺文章列表',
        component: () => import('@/views/Admin/article/AdminArticlesView.vue')
      }
    ]
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('@/views/NotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
