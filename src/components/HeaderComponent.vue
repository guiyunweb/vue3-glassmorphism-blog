<template>
  <header ref="navbar" class="navbar sticky top-0 z-50">
    <nav class="glass-effect-dark px-6 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <router-link to="/" class="text-2xl font-bold text-white">Sakura</router-link>
      </div>
      
      <div class="hidden md:flex space-x-6 ml-auto">
        <NavLink :to="{ name: 'home' }" :active="route.name === 'home'" class="text-white hover:text-gray-200">首页</NavLink>
        <NavLink :to="{ name: 'archive' }" :active="route.name === 'archive'" class="text-white hover:text-gray-200">归档</NavLink>
        <NavLink :to="{ name: 'friends' }" :active="route.name === 'friends'" class="text-white hover:text-gray-200">友链</NavLink>
        <NavLink :to="{ name: 'about' }" :active="route.name === 'about'" class="text-white hover:text-gray-200">关于</NavLink>
      </div>
      
      <div class="flex items-center space-x-4">
        <button class="text-gray-200 hover:text-white transition-colors duration-300">
          <i class="fa fa-search"></i>
        </button>
        <button @click="toggleTheme" class="text-gray-200 hover:text-white transition-colors duration-300">
          <i :class="isDarkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'"></i>
        </button>
        <button class="md:hidden text-gray-200 hover:text-white transition-colors duration-300" @click="toggleMobileMenu">
          <i class="fa fa-bars"></i>
        </button>
      </div>
    </nav>
    
    <!-- 移动端菜单 -->
    <transition 
      enter-active-class="mobile-menu-enter-active"
      leave-active-class="mobile-menu-leave-active"
      enter-from-class="mobile-menu-enter-from"
      leave-to-class="mobile-menu-leave-to"
    >
      <div v-if="isMobileMenuOpen" class="glass-effect-dark px-6 py-4 md:hidden absolute w-full">
        <div class="flex flex-col space-y-4">
          <NavLink :to="{ name: 'home' }" :active="route.name === 'home'" @click="toggleMobileMenu" class="text-white hover:text-gray-200 py-2">首页</NavLink>
          <NavLink :to="{ name: 'archive' }" :active="route.name === 'archive'" @click="toggleMobileMenu" class="text-white hover:text-gray-200 py-2">归档</NavLink>
          <NavLink :to="{ name: 'friends' }" :active="route.name === 'friends'" @click="toggleMobileMenu" class="text-white hover:text-gray-200 py-2">友链</NavLink>
          <NavLink :to="{ name: 'about' }" :active="route.name === 'about'" @click="toggleMobileMenu" class="text-white hover:text-gray-200 py-2">关于</NavLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { defineProps, defineEmits, ref, inject, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// 定义属性
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
})

// 定义事件
const emit = defineEmits(['toggleTheme'])

// 路由
const route = useRoute()

// 移动端菜单状态
const isMobileMenuOpen = ref(false)

// 导航栏元素
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

// 挂载时添加滚动监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始检查
  handleScroll()
})

// 卸载时移除滚动监听
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 导航栏样式 */
.navbar {
  transition: all 0.3s ease;
}

/* 毛玻璃效果类 */
.glass-effect-dark {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* 滚动时导航栏效果 */
.navbar.scrolled {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
