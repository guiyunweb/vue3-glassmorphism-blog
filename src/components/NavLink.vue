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

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ffffff;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
</style>
