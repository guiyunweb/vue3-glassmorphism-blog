<template>
  <div class="min-h-screen">
    <!-- 文章头部 -->
    <div class="relative h-64 md:h-80 overflow-hidden">
      <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-b from-dark/40 to-dark/70"></div>
      <div class="container mx-auto px-4 h-full flex flex-col justify-end relative z-10 pb-10">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in post.tags" :key="tag" class="px-3 py-1 bg-primary/80 text-white text-sm rounded-md">{{ tag }}</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">{{ post.title }}</h1>
          <div class="flex items-center text-gray-200 text-sm">
            <span class="flex items-center mr-4">
              <i class="fa fa-calendar-o mr-1"></i> {{ post.date }}
            </span>
            <span class="flex items-center">
              <i class="fa fa-eye mr-1"></i> {{ post.views }} 阅读
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 文章内容 -->
    <div class="container mx-auto px-4 py-10 w-full" style="width: 85%;">
      <div class="mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- 文章内容 -->
          <div class="lg:col-span-3">
            <article class="glass-effect p-6 md:p-8 rounded-xl">
              <div class="post-content" v-html="post.content"></div>
              
              <!-- 文章标签 -->
              <div class="mt-8 pt-6 border-t border-gray-200">
                <div class="flex flex-wrap gap-2">
                  <span class="text-gray-700 font-medium">标签：</span>
                  <span v-for="tag in post.tags" :key="tag" class="tag bg-gray-100 text-gray-700">
                    {{ tag }}
                  </span>
                </div>
              </div>
              
              <!-- 分享按钮 -->
              <div class="mt-6 flex items-center">
                <span class="text-gray-700 font-medium mr-4">分享：</span>
                <div class="flex space-x-3">
                  <button class="w-10 h-10 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-colors duration-300">
                    <i class="fa fa-twitter"></i>
                  </button>
                  <button class="w-10 h-10 rounded-full bg-[#4267B2]/10 text-[#4267B2] flex items-center justify-center hover:bg-[#4267B2]/20 transition-colors duration-300">
                    <i class="fa fa-facebook"></i>
                  </button>
                  <button class="w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center hover:bg-[#0A66C2]/20 transition-colors duration-300">
                    <i class="fa fa-linkedin"></i>
                  </button>
                  <button class="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366]/20 transition-colors duration-300">
                    <i class="fa fa-whatsapp"></i>
                  </button>
                </div>
              </div>
            </article>
            
            <!-- 评论区 -->
            <div class="mt-8 glass-effect p-6 md:p-8 rounded-xl">
              <h3 class="text-2xl font-bold mb-6">评论 ({{ comments.length }})</h3>
              
              <!-- 评论表单 -->
              <div class="mb-8">
                <textarea 
                  class="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="写下你的评论..."></textarea>
                <button class="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300">
                  提交评论
                </button>
              </div>
              
              <!-- 评论列表 -->
              <div class="space-y-6">
                <div v-for="comment in comments" :key="comment.id" class="border-b border-gray-200 pb-6">
                  <div class="flex items-start">
                    <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-4 flex-shrink-0">
                      <i class="fa fa-user"></i>
                    </div>
                    <div class="flex-grow">
                      <div class="flex items-center mb-1">
                        <h4 class="font-bold text-gray-800 mr-2">{{ comment.author }}</h4>
                        <span class="text-gray-500 text-sm">{{ comment.date }}</span>
                      </div>
                      <p class="text-gray-700">{{ comment.content }}</p>
                      <div class="mt-2 flex items-center text-sm">
                        <button class="text-gray-500 hover:text-primary transition-colors duration-300 flex items-center">
                          <i class="fa fa-thumbs-up mr-1"></i> {{ comment.likes }}
                        </button>
                        <button class="text-gray-500 hover:text-primary transition-colors duration-300 ml-4 flex items-center">
                          <i class="fa fa-reply mr-1"></i> 回复
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 加载更多评论 -->
              <div class="mt-6 text-center">
                <button class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  加载更多评论
                </button>
              </div>
            </div>
          </div>
          
          <!-- 侧边栏 -->
          <div class="lg:col-span-1">
            <!-- 作者信息 -->
            <div class="glass-effect p-6 rounded-xl mb-6">
              <div class="flex flex-col items-center text-center">
                <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                  <img src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/905e70cacd784d399614f9360b83d117~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=wrpel0AQtf4mcN9KoUhO%2FuZ0KeY%3D" 
                       alt="作者头像" 
                       class="w-full h-full object-cover">
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-1">Sakura</h3>
                <p class="text-gray-600 mb-4">前端开发者 | 摄影师 | 旅行爱好者</p>
                <p class="text-gray-700 text-sm">记录生活，分享思考，探索未知</p>
                <div class="mt-4 flex space-x-3">
                  <a href="#" class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <i class="fa fa-github"></i>
                  </a>
                  <a href="#" class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- 文章目录 -->
            <div class="glass-effect p-6 rounded-xl mb-6">
              <h3 class="text-lg font-bold text-gray-800 mb-4">文章目录</h3>
              <ul class="space-y-2">
                <li v-for="(toc, index) in post.toc" :key="index">
                  <a :href="'#' + toc.id" class="toc-link">{{ toc.title }}</a>
                </li>
              </ul>
            </div>
            
            <!-- 相关文章 -->
            <div class="glass-effect p-6 rounded-xl">
              <h3 class="text-lg font-bold text-gray-800 mb-4">相关文章</h3>
              <div class="space-y-4">
                <div v-for="relatedPost in relatedPosts" :key="relatedPost.id" class="related-post">
                  <div class="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <img :src="relatedPost.image" :alt="relatedPost.title" class="w-full h-full object-cover">
                  </div>
                  <div class="ml-3">
                    <h4 class="font-medium text-gray-800 hover:text-primary transition-colors duration-300">
                      <router-link :to="{ name: 'post', params: { id: relatedPost.id } }">{{ relatedPost.title }}</router-link>
                    </h4>
                    <p class="text-gray-500 text-xs mt-1">{{ relatedPost.date }}</p>
                  </div>
                </div>
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
import { useRoute } from 'vue-router'

// 路由
const route = useRoute()

// 模拟文章数据
const post = ref({
  id: 1,
  title: '现代前端开发指南',
  date: '2023-06-22',
  tags: ['技术', '前端', '指南'],
  views: 1245,
  image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D',
  toc: [
    { id: 'section-1', title: '前端开发概述' },
    { id: 'section-2', title: '现代前端技术栈' },
    { id: 'section-3', title: '前端开发工具' },
    { id: 'section-4', title: '前端性能优化' },
    { id: 'section-5', title: '前端安全' },
    { id: 'section-6', title: '总结与展望' }
  ],
  content: `
    <h2 id="section-1">前端开发概述</h2>
    <p>前端开发是创建Web界面的过程，负责将设计转化为用户可以交互的网页。随着Web技术的发展，前端开发已经从简单的HTML和CSS编写演变为一个复杂的领域，涉及多种技术和工具。</p>
    
    <h2 id="section-2">现代前端技术栈</h2>
    <h3>HTML5</h3>
    <p>HTML5是最新的HTML标准，引入了许多新的语义化标签和API，使开发者能够创建更丰富的Web应用。</p>
    
    <h3>CSS3</h3>
    <p>CSS3带来了许多新的样式特性，如动画、过渡、阴影、渐变等，使开发者能够创建更美观的界面。</p>
    
    <h3>JavaScript</h3>
    <p>JavaScript是前端开发的核心语言，随着ES6+标准的推出，JavaScript引入了许多新特性，如箭头函数、类、模块等。</p>
    
    <pre><code class="language-javascript">// ES6箭头函数示例
const sum = (a, b) => a + b;
console.log(sum(1, 2)); // 输出: 3</code></pre>
    
    <h3>前端框架</h3>
    <p>现代前端开发中，框架已经成为必需品。目前流行的前端框架包括React、Vue和Angular。</p>
    
    <h2 id="section-3">前端开发工具</h2>
    <h3>包管理器</h3>
    <p>npm和yarn是目前最流行的JavaScript包管理器，用于管理项目依赖。</p>
    
    <h3>构建工具</h3>
    <p>Webpack、Vite、Rollup等构建工具用于打包和优化前端资源。</p>
    
    <h3>代码编辑器</h3>
    <p>VS Code、WebStorm等代码编辑器提供了丰富的功能，如语法高亮、代码补全、调试等。</p>
    
    <h2 id="section-4">前端性能优化</h2>
    <h3>加载性能</h3>
    <p>优化加载性能的方法包括：</p>
    <ul>
      <li>减少HTTP请求</li>
      <li>压缩资源</li>
      <li>使用CDN</li>
      <li>懒加载</li>
    </ul>
    
    <h3>运行性能</h3>
    <p>优化运行性能的方法包括：</p>
    <ul>
      <li>减少DOM操作</li>
      <li>使用虚拟DOM</li>
      <li>避免重排和重绘</li>
      <li>优化JavaScript执行</li>
    </ul>
    
    <h2 id="section-5">前端安全</h2>
    <p>前端安全是Web应用安全的重要组成部分，常见的安全问题包括：</p>
    <ul>
      <li>XSS攻击</li>
      <li>CSRF攻击</li>
      <li>点击劫持</li>
      <li>SQL注入</li>
    </ul>
    
    <h2 id="section-6">总结与展望</h2>
    <p>前端开发领域正在快速发展，新的技术和工具不断涌现。作为前端开发者，我们需要不断学习和适应这些变化，才能创建出更好的Web应用。</p>
    
    <p>未来前端开发的趋势可能包括：</p>
    <ul>
      <li>WebAssembly的普及</li>
      <li>AI在前端开发中的应用</li>
      <li>更好的跨平台解决方案</li>
      <li>更先进的Web API</li>
    </ul>
  `
})

// 模拟评论数据
const comments = ref([
  {
    id: 1,
    author: '张三',
    date: '2023-06-23',
    content: '这篇文章写得非常详细，对我学习前端开发很有帮助，谢谢分享！',
    likes: 15
  },
  {
    id: 2,
    author: '李四',
    date: '2023-06-24',
    content: '请问作者对于前端框架的选择有什么建议？React、Vue和Angular各有什么优缺点？',
    likes: 8
  },
  {
    id: 3,
    author: '王五',
    date: '2023-06-25',
    content: '文章中的性能优化部分非常实用，我已经在我的项目中应用了这些方法，效果很明显。',
    likes: 12
  }
])

// 模拟相关文章数据
const relatedPosts = ref([
  {
    id: 2,
    title: 'CSS Grid布局实战',
    date: '2024-01-15',
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D'
  },
  {
    id: 5,
    title: 'Markdown完全指南',
    date: '2023-12-03',
    image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/2f0eb2f6b0a34fa48ca3d54bc0fe7159~tplv-a9rns2rl98-image.image?rcl=202511191001432FDB426A7F2164EABA08&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1766109744&x-signature=ikOS7qcsaVsrYSrLExBg%2BR6nSro%3D'
  }
])

// 初始化代码高亮
onMounted(() => {
  // 获取文章ID
  const postId = route.params.id
  
  // 这里可以根据postId从API获取文章数据
  // 目前使用模拟数据
  
  // 初始化highlight.js
  import('highlight.js').then(hljs => {
    hljs.default.highlightAll()
  })
  
  // 初始化AOS动画库
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

/* 标签样式 */
.tag {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
}

/* 相关文章样式 */
.related-post {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.related-post:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

/* 目录链接样式 */
.toc-link {
  display: block;
  padding: 0.25rem 0;
  color: #4b5563;
  transition: color 0.3s ease;
}

.toc-link:hover,
.toc-link.active {
  color: #6366f1;
  font-weight: 500;
}

/* 文章内容样式 */
.post-content h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.post-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.post-content p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.75;
  color: #4b5563;
}

.post-content ul,
.post-content ol {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  color: #4b5563;
}

.post-content ul {
  list-style-type: disc;
}

.post-content ol {
  list-style-type: decimal;
}

.post-content li {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.post-content a {
  color: #6366f1;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.post-content a:hover {
  color: #8b5cf6;
}

.post-content blockquote {
  border-left: 4px solid #6366f1;
  padding-left: 1rem;
  font-style: italic;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: #6b7280;
}

.post-content pre {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

.post-content code {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.post-content pre code {
  background-color: transparent;
  padding: 0;
}

.post-content img {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
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

.dark-mode .bg-gray-50 {
  background-color: #1e293b !important;
}

.dark-mode .bg-gray-100 {
  background-color: #1e293b !important;
}

.dark-mode .tag {
  background-color: rgba(139, 92, 246, 0.3);
  color: #cbd5e1;
}

.dark-mode .related-post {
  background-color: #1e293b !important;
}

.dark-mode .related-post:hover {
  background-color: #334155 !important;
}

.dark-mode .toc-link {
  color: #f1f5f9 !important;
}

.dark-mode .post-content h2,
.dark-mode .post-content h3,
.dark-mode .post-content h4,
.dark-mode .post-content h5,
.dark-mode .post-content h6 {
  color: #ffffff !important;
}

.dark-mode .post-content p,
.dark-mode .post-content ul,
.dark-mode .post-content ol,
.dark-mode .post-content li {
  color: #ffffff !important;
}

.dark-mode .post-content blockquote {
  color: #cbd5e1 !important;
  border-color: #8b5cf6 !important;
}

.dark-mode .post-content code {
  background-color: #334155 !important;
  color: #e2e8f0 !important;
}
</style>
