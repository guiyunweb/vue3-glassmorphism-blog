<template>
  <div class="min-h-screen py-16">
    <!-- 页面标题 -->
    <div class="container mx-auto px-4 mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2" data-aos="fade-up">归档</h1>
      <p class="text-gray-600 text-center max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">按时间顺序浏览所有文章</p>
    </div>
    
    <!-- 主要内容 -->
    <div class="container mx-auto px-4 w-full" style="width: 85%;">
      <div class="mx-auto glass-effect p-6 md:p-8 rounded-xl">
        <!-- 年份分组 -->
        <div v-for="(yearPosts, year) in groupedPosts" :key="year" class="year-section" data-aos="fade-up">
          <h2 class="year-header">{{ year }}</h2>
          
          <!-- 月份分组 -->
          <div v-for="(monthPosts, month) in yearPosts" :key="month" class="mb-6">
            <h3 class="text-lg font-semibold text-gray-700 mb-3">{{ monthNames[month - 1] }}</h3>
            
            <!-- 文章列表 -->
            <div class="space-y-3">
              <div v-for="post in monthPosts" :key="post.id" class="archive-item">
                <span class="archive-date">{{ post.date }}</span>
                <router-link :to="{ name: 'post', params: { id: post.id } }" class="archive-title">{{ post.title }}</router-link>
                <span v-for="tag in post.tags" :key="tag" class="archive-tag bg-primary/10 text-primary text-xs">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'

// 月份名称
const monthNames = [
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月'
]

// 模拟文章数据
const posts = ref([
  {
    id: 1,
    title: '樱花季的回忆',
    date: '2023-04-15',
    tags: ['生活', '摄影']
  },
  {
    id: 2,
    title: '现代前端开发指南',
    date: '2023-06-22',
    tags: ['技术', '前端', '指南']
  },
  {
    id: 3,
    title: '寻找内心的平静',
    date: '2023-08-05',
    tags: ['思考', '生活']
  },
  {
    id: 4,
    title: '京都的四季之美',
    date: '2023-10-18',
    tags: ['旅行', '日本']
  },
  {
    id: 5,
    title: 'Markdown完全指南',
    date: '2023-12-03',
    tags: ['教程', '写作']
  },
  {
    id: 6,
    title: '2023年读书笔记',
    date: '2023-12-30',
    tags: ['阅读', '总结']
  },
  {
    id: 7,
    title: 'CSS Grid布局实战',
    date: '2024-01-15',
    tags: ['技术', '前端']
  },
  {
    id: 8,
    title: '城市摄影指南',
    date: '2024-02-20',
    tags: ['旅行', '摄影']
  }
])

// 按年份和月份分组文章
const groupedPosts = computed(() => {
  const groups = {}
  
  posts.value.forEach(post => {
    const [year, month] = post.date.split('-').map(Number)
    
    if (!groups[year]) {
      groups[year] = {}
    }
    
    if (!groups[year][month]) {
      groups[year][month] = []
    }
    
    groups[year][month].push(post)
  })
  
  // 按年份降序排序
  return Object.keys(groups)
    .sort((a, b) => b - a)
    .reduce((acc, year) => {
      acc[year] = groups[year]
      return acc
    }, {})
})

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

/* 年份标题样式 */
.year-header {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.year-header::before {
  content: '';
  width: 2rem;
  height: 0.25rem;
  background-color: #6366f1;
  margin-right: 0.5rem;
}

/* 归档项样式 */
.archive-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.archive-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* 归档日期样式 */
.archive-date {
  flex-shrink: 0;
  width: 6rem;
  color: #6b7280;
  font-weight: 500;
}

/* 归档标题样式 */
.archive-title {
  flex-grow: 1;
  font-weight: 500;
  color: #1f2937;
  transition: color 0.3s ease;
}

.archive-title:hover {
  color: #6366f1;
}

/* 归档标签样式 */
.archive-tag {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  margin-left: 0.5rem;
}

/* 深色模式样式统一使用CSS变量 */
.dark-mode .glass-effect {
  background: var(--color-bg-secondary);
  border-color: var(--color-border);
}

.dark-mode .text-gray-800 {
  color: var(--color-text-primary);
}

.dark-mode .text-gray-700 {
  color: var(--color-text-primary);
}

.dark-mode .text-gray-600 {
  color: var(--color-text-secondary);
}

.dark-mode .text-gray-500 {
  color: var(--color-text-secondary);
}

.dark-mode .border-gray-200,
.dark-mode .border-gray-300 {
  border-color: var(--color-border) !important;
}

.dark-mode .archive-item {
  border-color: var(--color-border) !important;
  background-color: var(--color-bg-secondary) !important;
}

.dark-mode .archive-item:hover {
  background-color: var(--color-bg-tertiary) !important;
}

.dark-mode .archive-date {
  color: var(--color-text-secondary) !important;
}

.dark-mode .archive-title {
  color: var(--color-text-primary) !important;
}

.dark-mode .archive-tag {
  background-color: rgba(139, 92, 246, 0.3);
  color: var(--color-text-secondary);
}
</style>
