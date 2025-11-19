import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/tailwind.css'

// 导入页面组件
import HomeView from './views/HomeView.vue'
import PostView from './views/PostView.vue'
import ArchiveView from './views/ArchiveView.vue'
import AboutView from './views/AboutView.vue'
import FriendsView from './views/FriendsView.vue'

// 导入AOS动画库
import AOS from 'aos'
import 'aos/dist/aos.css'

// 导入highlight.js
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.min.css'

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/friends',
      name: 'friends',
      component: FriendsView
    }
  ]
})

// 创建Vue应用
const app = createApp(App)

// 使用路由
app.use(router)

// 全局注册AOS
app.config.globalProperties.$aos = AOS

// 全局注册highlight.js
app.config.globalProperties.$hljs = hljs

// 挂载应用
app.mount('#app')
