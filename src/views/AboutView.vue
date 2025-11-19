<template>
  <div class="min-h-screen py-16">
    <!-- 页面标题 -->
    <div class="container mx-auto px-4 mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2" data-aos="fade-up">关于我</h1>
      <p class="text-gray-600 text-center max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">了解更多关于我的信息</p>
    </div>
    
    <!-- 主要内容 -->
    <div class="container mx-auto px-4 w-full" style="width: 80%;">
      <div class="mx-auto">
        <!-- 个人信息 -->
        <div class="glass-effect p-6 md:p-8 rounded-xl mb-8" data-aos="fade-up">
          <div class="flex flex-col md:flex-row items-center md:items-start">
            <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 md:mb-0 md:mr-8">
              <img src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/905e70cacd784d399614f9360b83d117~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=wrpel0AQtf4mcN9KoUhO%2FuZ0KeY%3D" 
                   alt="个人头像" 
                   class="w-full h-full object-cover">
            </div>
            <div class="text-center md:text-left">
              <h2 class="text-2xl font-bold text-gray-800 mb-2">Sakura</h2>
              <p class="text-gray-600 mb-4">前端开发者 | 摄影师 | 旅行爱好者</p>
              <p class="text-gray-700 mb-6">
                热爱技术，热爱生活，喜欢用镜头记录美好瞬间，用代码创造有趣的事物。
                致力于分享前端开发经验和生活中的点滴思考。
              </p>
              <div class="flex justify-center md:justify-start space-x-4">
                <a href="#" class="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <i class="fa fa-github"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <i class="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 技能 -->
        <div class="glass-effect p-6 md:p-8 rounded-xl mb-8" data-aos="fade-up" data-aos-delay="100">
          <h2 class="text-xl font-bold text-gray-800 mb-6">技能</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 技术技能 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-700 mb-4">技术技能</h3>
              <div class="space-y-4">
                <div v-for="skill in techSkills" :key="skill.name" class="skill-item">
                  <div class="flex justify-between mb-1">
                    <span class="font-medium text-gray-700">{{ skill.name }}</span>
                    <span class="text-gray-600">{{ skill.level }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-primary h-2.5 rounded-full" :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 软技能 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-700 mb-4">软技能</h3>
              <div class="space-y-4">
                <div v-for="skill in softSkills" :key="skill.name" class="skill-item">
                  <div class="flex justify-between mb-1">
                    <span class="font-medium text-gray-700">{{ skill.name }}</span>
                    <span class="text-gray-600">{{ skill.level }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-secondary h-2.5 rounded-full" :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 经历 -->
        <div class="glass-effect p-6 md:p-8 rounded-xl mb-8" data-aos="fade-up" data-aos-delay="200">
          <h2 class="text-xl font-bold text-gray-800 mb-6">经历</h2>
          <div class="relative">
            <!-- 时间线 -->
            <div class="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>
            
            <!-- 经历项 -->
            <div v-for="(experience, index) in experiences" :key="index" class="experience-item">
              <div class="flex flex-col md:flex-row">
                <!-- 左侧内容 -->
                <div class="md:w-1/2 md:pr-8 md:text-right mb-6 md:mb-0 md:order-1" :class="{ 'md:order-2': index % 2 === 1 }">
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ experience.title }}</h3>
                  <p class="text-primary font-medium mb-1">{{ experience.company }}</p>
                  <p class="text-gray-600 mb-2">{{ experience.period }}</p>
                  <p class="text-gray-700">{{ experience.description }}</p>
                </div>
                
                <!-- 中间点 -->
                <div class="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2 md:mt-0"></div>
                
                <!-- 右侧内容（空） -->
                <div class="md:w-1/2 md:pl-8"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 教育 -->
        <div class="glass-effect p-6 md:p-8 rounded-xl" data-aos="fade-up" data-aos-delay="300">
          <h2 class="text-xl font-bold text-gray-800 mb-6">教育</h2>
          <div class="space-y-6">
            <div v-for="education in educations" :key="education.id" class="education-item flex">
              <div class="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 mr-6">
                <img :src="education.image" :alt="education.institution" class="w-full h-full object-cover">
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ education.degree }}</h3>
                <p class="text-primary font-medium mb-1">{{ education.institution }}</p>
                <p class="text-gray-600 mb-2">{{ education.period }}</p>
                <p class="text-gray-700">{{ education.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// 技术技能
const techSkills = ref([
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Vue.js', level: 85 },
  { name: 'React', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 70 }
])

// 软技能
const softSkills = ref([
  { name: '沟通能力', level: 85 },
  { name: '团队协作', level: 90 },
  { name: '问题解决', level: 88 },
  { name: '时间管理', level: 80 },
  { name: '学习能力', level: 92 }
])

// 经历
const experiences = ref([
  {
    title: '高级前端开发工程师',
    company: '科技有限公司',
    period: '2020 - 至今',
    description: '负责公司核心产品的前端架构设计和开发，优化前端性能，提升用户体验。'
  },
  {
    title: '前端开发工程师',
    company: '互联网科技公司',
    period: '2017 - 2020',
    description: '参与多个Web应用的前端开发，负责组件设计和实现，与后端团队紧密合作。'
  },
  {
    title: 'UI/UX设计师',
    company: '设计工作室',
    period: '2015 - 2017',
    description: '负责客户项目的界面设计和用户体验优化，使用设计工具创建原型和视觉设计。'
  }
])

// 教育
const educations = ref([
  {
    id: 1,
    degree: '计算机科学硕士',
    institution: '知名大学',
    period: '2013 - 2015',
    description: '专注于人机交互和前端技术研究，发表多篇相关论文。',
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/905e70cacd784d399614f9360b83d117~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=wrpel0AQtf4mcN9KoUhO%2FuZ0KeY%3D'
  },
  {
    id: 2,
    degree: '计算机科学学士',
    institution: '综合大学',
    period: '2009 - 2013',
    description: '学习计算机基础理论和应用技术，参与多个校园项目开发。',
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/905e70cacd784d399614f9360b83d117~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=wrpel0AQtf4mcN9KoUhO%2FuZ0KeY%3D'
  }
])

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

/* 经历项样式 */
.experience-item {
  position: relative;
  margin-bottom: 3rem;
}

/* 教育项样式 */
.education-item {
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.education-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
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

.dark-mode .bg-gray-200 {
  background-color: #475569 !important;
}

.dark-mode .education-item {
  background-color: #1e293b !important;
}

.dark-mode .education-item:hover {
  background-color: #334155 !important;
}
</style>
