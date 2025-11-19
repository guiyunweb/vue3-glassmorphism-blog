<template>
  <article class="blog-card glass-effect" data-aos="fade-up" :data-aos-delay="delay">
    <div class="relative h-48 overflow-hidden flex-shrink-0">
      <img :src="post.image" :alt="post.title" class="card-image w-full h-full object-cover">
      <div class="absolute top-3 left-3 flex flex-wrap gap-2">
        <span v-for="tag in post.tags" :key="tag" class="px-2 py-1 bg-primary/80 text-white text-xs rounded-md">{{ tag }}</span>
      </div>
    </div>
    <div class="p-5 flex-grow flex flex-col">
      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ post.title }}</h3>
      <div class="flex items-center text-gray-500 text-sm mb-3">
        <span class="flex items-center">
          <i class="fa fa-calendar-o mr-1"></i> {{ post.date }}
        </span>
      </div>
      <div class="mt-auto">
        <router-link :to="{ name: 'post', params: { id: post.id } }" class="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium">
          阅读更多 <i class="fa fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
        </router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

// 定义属性
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
/* 文章卡片样式 */
.blog-card {
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(99, 102, 241, 0.9) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.blog-card:hover .card-overlay {
  opacity: 1;
}

.card-image {
  transition: transform 0.7s ease;
}

.blog-card:hover .card-image {
  transform: scale(1.1);
}

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

.dark-mode .text-gray-800 {
  color: #ffffff;
}

.dark-mode .text-gray-600 {
  color: #ffffff;
}

.dark-mode .text-gray-500 {
  color: #e2e8f0;
}
</style>
