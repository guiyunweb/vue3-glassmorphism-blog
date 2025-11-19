<template>
  <div class="min-h-screen py-16">
    <!-- 页面标题 -->
    <div class="container mx-auto px-4 mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2" data-aos="fade-up">友情链接</h1>
      <p class="text-gray-600 text-center max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">与志同道合的朋友一起成长</p>
    </div>
    
    <!-- 主要内容 -->
    <div class="container mx-auto px-4 w-full" style="width: 80%;">
      <div class="mx-auto">
        <!-- 友链列表 -->
        <div class="glass-effect p-6 md:p-8 rounded-xl mb-8" data-aos="fade-up">
          <h2 class="text-xl font-bold text-gray-800 mb-6">我的朋友们</h2>
          
          <!-- 友链分类标签 -->
          <div class="flex flex-wrap gap-2 mb-6">
            <button 
              v-for="category in categories" 
              :key="category" 
              @click="filterFriends(category)"
              :class="{ 'bg-primary text-white': activeCategory === category, 'bg-gray-100 text-gray-700': activeCategory !== category }"
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            >
              {{ category }}
            </button>
          </div>
          
          <!-- 友链网格 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div 
              v-for="friend in filteredFriends" 
              :key="friend.id" 
              class="friend-card p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mr-4">
                  <img :src="friend.avatar" :alt="friend.name" class="w-full h-full object-cover">
                </div>
                <div class="flex-grow">
                  <h3 class="font-medium text-gray-800">{{ friend.name }}</h3>
                  <p class="text-gray-600 text-sm">{{ friend.description }}</p>
                </div>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <a 
                  :href="friend.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-primary hover:text-secondary transition-colors duration-300 text-sm"
                >
                  访问网站
                </a>
                <span class="text-gray-500 text-xs">
                  <i class="fa fa-link mr-1"></i> {{ friend.linkDate }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 申请友链 -->
        <div class="glass-effect p-6 md:p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
          <h2 class="text-xl font-bold text-gray-800 mb-6">申请友链</h2>
          
          <form @submit.prevent="submitFriendRequest" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2">网站名称</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="请输入您的网站名称"
                  required
                >
              </div>
              
              <div>
                <label for="url" class="block text-gray-700 font-medium mb-2">网站URL</label>
                <input 
                  type="url" 
                  id="url" 
                  v-model="formData.url" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="请输入您的网站URL"
                  required
                >
              </div>
            </div>
            
            <div>
              <label for="description" class="block text-gray-700 font-medium mb-2">网站描述</label>
              <input 
                type="text" 
                id="description" 
                v-model="formData.description" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="请输入您的网站描述（不超过50字）"
                maxlength="50"
                required
              >
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="avatar" class="block text-gray-700 font-medium mb-2">网站头像URL</label>
                <input 
                  type="url" 
                  id="avatar" 
                  v-model="formData.avatar" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="请输入您的网站头像URL"
                >
              </div>
              
              <div>
                <label for="category" class="block text-gray-700 font-medium mb-2">网站分类</label>
                <select 
                  id="category" 
                  v-model="formData.category" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">请选择分类</option>
                  <option value="技术">技术</option>
                  <option value="设计">设计</option>
                  <option value="生活">生活</option>
                  <option value="旅行">旅行</option>
                  <option value="摄影">摄影</option>
                  <option value="其他">其他</option>
                </select>
              </div>
            </div>
            
            <div>
              <label for="message" class="block text-gray-700 font-medium mb-2">留言（可选）</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                rows="3"
                placeholder="请输入您的留言（不超过200字）"
                maxlength="200"
              ></textarea>
            </div>
            
            <div class="text-center">
              <button 
                type="submit" 
                class="px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 font-medium"
              >
                提交申请
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'

// 友链数据
const friends = ref([
  {
    id: 1,
    name: '技术博客',
    url: 'https://example.com',
    description: '分享前端开发技术和经验',
    avatar: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D',
    category: '技术',
    linkDate: '2023-01-15'
  },
  {
    id: 2,
    name: '设计工坊',
    url: 'https://example.com',
    description: 'UI/UX设计资源和教程分享',
    avatar: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D',
    category: '设计',
    linkDate: '2023-02-20'
  },
  {
    id: 3,
    name: '旅行日记',
    url: 'https://example.com',
    description: '记录旅途中的美好瞬间',
    avatar: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D',
    category: '旅行',
    linkDate: '2023-03-10'
  },
  {
    id: 4,
    name: '摄影部落',
    url: 'https://example.com',
    description: '分享摄影技巧和作品',
    avatar: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D',
    category: '摄影',
    linkDate: '2023-04-05'
  },
  {
    id: 5,
    name: '生活随笔',
    url: 'https://example.com',
    description: '记录生活中的点滴思考',
    avatar: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D',
    category: '生活',
    linkDate: '2023-05-18'
  },
  {
    id: 6,
    name: '编程乐园',
    url: 'https://example.com',
    description: '编程学习资源和项目分享',
    avatar: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D',
    category: '技术',
    linkDate: '2023-06-22'
  }
])

// 分类
const categories = ref(['全部', '技术', '设计', '生活', '旅行', '摄影', '其他'])

// 活跃分类
const activeCategory = ref('全部')

// 筛选后的友链
const filteredFriends = computed(() => {
  if (activeCategory.value === '全部') {
    return friends.value
  }
  
  return friends.value.filter(friend => friend.category === activeCategory.value)
})

// 表单数据
const formData = ref({
  name: '',
  url: '',
  description: '',
  avatar: '',
  category: '',
  message: ''
})

// 筛选友链
const filterFriends = (category) => {
  activeCategory.value = category
}

// 提交友链申请
const submitFriendRequest = () => {
  // 这里可以添加表单验证和提交逻辑
  console.log('友链申请提交:', formData.value)
  
  // 显示成功消息
  alert('友链申请已提交，我们会尽快处理！')
  
  // 重置表单
  formData.value = {
    name: '',
    url: '',
    description: '',
    avatar: '',
    category: '',
    message: ''
  }
}

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

/* 友链卡片样式 */
.friend-card {
  transition: all 0.3s ease;
}

.friend-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

/* 深色模式样式 */
.dark-mode .glass-effect {
  background: rgba(15, 23, 42, 0.95);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .text-gray-800 {
  color: #ffffff;
}

.dark-mode .text-gray-700 {
  color: #ffffff;
}

.dark-mode .text-gray-600 {
  color: #ffffff;
}

.dark-mode .text-gray-500 {
  color: #e2e8f0;
}

.dark-mode .border-gray-200,
.dark-mode .border-gray-300 {
  border-color: #475569 !important;
}

.dark-mode .bg-gray-100 {
  background-color: #1e293b !important;
}

.dark-mode .friend-card {
  background-color: #1e293b !important;
  border-color: #475569 !important;
}

.dark-mode .friend-card:hover {
  background-color: #334155 !important;
}
</style>
