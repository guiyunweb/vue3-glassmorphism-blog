<template>
  <router-link
      v-bind="$props"
      class="nav-link"
      :class="{ 'active': active }"
      @click="handleClick"
  >
    <slot />
  </router-link>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 定义属性
const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})

// 定义事件
const emit = defineEmits(['click'])

// 处理点击事件
const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
.nav-link {
  position: relative;
  padding: 0.5rem 0.75rem;
  color: #e5e7eb;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffffff;
}

/* 移除下划线效果 */
.nav-link::after {
  display: none;
}

/* 可以添加其他活跃状态样式替代下划线 */
.nav-link.active {
  color: #8b5cf6;
  font-weight: 500;
}
</style>