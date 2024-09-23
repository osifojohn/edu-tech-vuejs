<script setup lang="ts">
import { defineProps } from 'vue'

interface ISVGProps {
  size?: number
  className?: string
}

const props = defineProps<ISVGProps>()
const { size = 24, className } = props
</script>

<style scoped lang="ts"></style>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="['animate-spin', className]"
        v-bind="props"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  </div>
</template>
