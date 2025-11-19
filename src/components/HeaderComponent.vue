<template>
  <header ref="navbar" class="navbar sticky top-0 z-50 transition-all duration-300">
    <nav class="glass-effect-dark px-6 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <router-link to="/" class="text-2xl font-bold text-white">Sakura</router-link>
      </div>

      <!-- 导航链接 - 增加间距 -->
      <div class="hidden md:flex space-x-8 ml-auto">
        <NavLink :to="{ name: 'home' }" :active="route.name === 'home'" class="text-white hover:text-gray-200 transition-colors duration-300">首页</NavLink>
        <NavLink :to="{ name: 'archive' }" :active="route.name === 'archive'" class="text-white hover:text-gray-200 transition-colors duration-300">归档</NavLink>
        <NavLink :to="{ name: 'friends' }" :active="route.name === 'friends'" class="text-white hover:text-gray-200 transition-colors duration-300">友链</NavLink>
        <NavLink :to="{ name: 'about' }" :active="route.name === 'about'" class="text-white hover:text-gray-200 transition-colors duration-300">关于</NavLink>
      </div>

      <!-- 移除搜索按钮，增加与导航链接的间距 -->
      <div class="flex items-center space-x-6 ml-4">
        <button @click="toggleTheme" class="text-gray-200 hover:text-white transition-colors duration-300 p-2">
          <i :class="isDarkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'" class="text-lg"></i>
        </button>
        <button class="md:hidden text-gray-200 hover:text-white transition-colors duration-300 p-2" @click="toggleMobileMenu">
          <i class="fa fa-bars text-lg"></i>
        </button>
      </div>
    </nav>

    <!-- 移动端菜单 -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="glass-effect-dark md:hidden px-6 py-4">
        <div class="flex flex-col space-y-4">
          <NavLink :to="{ name: 'home' }" :active="route.name === 'home'" class="text-white hover:text-gray-200" @click="toggleMobileMenu">首页</NavLink>
          <NavLink :to="{ name: 'archive' }" :active="route.name === 'archive'" class="text-white hover:text-gray-200" @click="toggleMobileMenu">归档</NavLink>
          <NavLink :to="{ name: 'friends' }" :active="route.name === 'friends'" class="text-white hover:text-gray-200" @click="toggleMobileMenu">友链</NavLink>
          <NavLink :to="{ name: 'about' }" :active="route.name === 'about'" class="text-white hover:text-gray-200" @click="toggleMobileMenu">关于</NavLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import NavLink from './NavLink.vue'

const route = useRoute()
const isDarkMode = ref(false)
const emit = defineEmits(['toggleTheme'])

const isMobileMenuOpen = ref(false)
const navbar = ref(null)

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 切换主题
const toggleTheme = () => {
  emit('toggleTheme')
}

// 滚动监听
const handleScroll = () => {
  if (navbar.value) {
    if (window.scrollY > 10) {
      navbar.value.classList.add('scrolled')
    } else {
      navbar.value.classList.remove('scrolled')
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  transition: all 0.3s ease;
}

.glass-effect-dark {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.navbar.scrolled {
  background: rgba(15, 23, 42, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* 导航链接样式增强 */
.nav-link {
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #8b5cf6;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* 移动端菜单动画 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>