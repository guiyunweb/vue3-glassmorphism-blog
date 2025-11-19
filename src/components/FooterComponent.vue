<template>
  <footer class="glass-effect-dark text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <h2 class="text-2xl font-bold mb-2">Sakura</h2>
          <p class="text-gray-400">© 2025 版权所有</p>
        </div>
        
        <div class="text-gray-400">
          <p>备案号：京ICP备12345678号</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 页脚组件逻辑
</script>

<style scoped>
/* 毛玻璃效果类 */
.glass-effect-dark {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
</style>
