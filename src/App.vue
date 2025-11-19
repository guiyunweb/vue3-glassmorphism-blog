<template>
  <div class="min-h-screen flex flex-col">
    <!-- 导航栏 -->
    <HeaderComponent :is-dark-mode="isDarkMode" @toggle-theme="toggleTheme" />

    <!-- 主要内容区域 - 添加过渡动画 -->
    <main class="flex-grow">
      <transition name="page-transition">
        <router-view />
      </transition>
    </main>

    <!-- 页脚 -->
    <FooterComponent />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

// 深色/浅色模式切换
const isDarkMode = ref(false)
const route = useRoute()

// 检查本地存储中的主题偏好
onMounted(() => {
  // 检查主题偏好
  if (localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark-mode')
  }

  // 初始化AOS动画库
  import('aos').then(aos => {
    aos.default.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  })
})

// 切换主题
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark-mode')
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

// 暴露给子组件
defineExpose({
  isDarkMode,
  toggleTheme
})
</script>

<style scoped>
/* 基础样式 */
body {
  background-color: #f8fafc;
  background-image:
      radial-gradient(at 80% 10%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
      radial-gradient(at 20% 90%, rgba(139, 92, 246, 0.1) 0px, transparent 50%);
  background-attachment: fixed;
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: 'Inter', system-ui, sans-serif;
}

/* 英文使用JetBrains Mono字体 */
:lang(en), .english-text {
  font-family: 'JetBrains Mono', monospace;
}

/* 页面过渡动画 */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.5s ease;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>