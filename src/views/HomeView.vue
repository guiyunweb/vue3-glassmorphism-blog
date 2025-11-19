<template>
  <div>
    <!-- 英雄区域 -->
    <section class="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://p9-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/593eca4a4ccd48f8994385fd3f16d402~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109736&x-signature=pFSwQmtCwwZvTSXLM4BqDHQ%2B84Y%3D" 
             alt="背景" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/50 to-dark/70"></div>
      </div>
      
      <div class="relative z-10 text-center text-white px-4" data-aos="fade-up" data-aos-duration="1000">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Sakura</h1>
        <p class="text-xl md:text-2xl max-w-2xl mx-auto text-gray-100">记录生活，分享思考，探索未知</p>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <main class="container mx-auto px-4 py-12 w-full max-w-6xl" style="width: 80%;">
      <!-- 文章卡片网格 - 动态布局 -->
      <div class="space-y-6 md:space-y-8">
        <!-- 第一行：3个卡片 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <BlogCard v-for="(post, index) in posts.slice(0, 3)" :key="post.id" :post="post" :delay="(index + 1) * 100" />
        </div>
        
        <!-- 第二行：1个卡片 -->
        <div class="grid grid-cols-1 gap-6 md:gap-8">
          <BlogCard :post="posts[3]" :delay="100" />
        </div>
        
        <!-- 第三行：4个卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <BlogCard v-for="(post, index) in posts.slice(4, 8)" :key="post.id" :post="post" :delay="(index + 1) * 100" />
        </div>
      </div>
      
      <!-- 分页 -->
      <div class="flex justify-center mt-12" data-aos="fade-up">
        <div class="flex space-x-2">
          <button class="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <i class="fa fa-angle-left"></i>
          </button>
          <button class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all duration-300">1</button>
          <button class="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-all duration-300">2</button>
          <button class="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-all duration-300">3</button>
          <button class="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <i class="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import BlogCard from '../components/BlogCard.vue'

// 模拟文章数据
const posts = [
  {
    id: 1,
    title: '樱花季的回忆',
    date: '2023-04-15',
    tags: ['生活', '摄影'],
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/905e70cacd784d399614f9360b83d117~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=wrpel0AQtf4mcN9KoUhO%2FuZ0KeY%3D'
  },
  {
    id: 2,
    title: '现代前端开发指南',
    date: '2023-06-22',
    tags: ['技术', '前端', '指南'],
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D'
  },
  {
    id: 3,
    title: '寻找内心的平静',
    date: '2023-08-05',
    tags: ['思考', '生活'],
    image: 'https://p9-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/593eca4a4ccd48f8994385fd3f16d402~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109736&x-signature=pFSwQmtCwwZvTSXLM4BqDHQ%2B84Y%3D'
  },
  {
    id: 4,
    title: '京都的四季之美',
    date: '2023-10-18',
    tags: ['旅行', '日本'],
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/905e70cacd784d399614f9360b83d117~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=wrpel0AQtf4mcN9KoUhO%2FuZ0KeY%3D'
  },
  {
    id: 5,
    title: 'Markdown完全指南',
    date: '2023-12-03',
    tags: ['教程', '写作'],
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D'
  },
  {
    id: 6,
    title: '2023年读书笔记',
    date: '2023-12-30',
    tags: ['阅读', '总结'],
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/548acbc45dd3441e8ec5df9216295a0c~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109752&x-signature=YChbUvyY1OxrgSUqkGFkpUh70bE%3D'
  },
  {
    id: 7,
    title: 'CSS Grid布局实战',
    date: '2024-01-15',
    tags: ['技术', '前端'],
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D'
  },
  {
    id: 8,
    title: '城市摄影指南',
    date: '2024-02-20',
    tags: ['旅行', '摄影'],
    image: 'https://p9-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/593eca4a4ccd48f8994385fd3f16d402~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109736&x-signature=pFSwQmtCwwZvTSXLM4BqDHQ%2B84Y%3D'
  }
]

// 初始化AOS动画库
onMounted(() => {
  import('aos').then(aos => {
    aos.default.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  })
})
</script>

<style scoped>
/* 毛玻璃效果类 */
.glass-effect {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* 深色模式样式 */
.dark-mode .glass-effect {
  background: rgba(15, 23, 42, 0.95);
  border-color: rgba(255, 255, 255, 0.1);
}

/* 按钮样式 */
.btn-primary {
  background-color: #6366f1;
  color: white;
}

.btn-primary:hover {
  background-color: #8b5cf6;
}
</style>
