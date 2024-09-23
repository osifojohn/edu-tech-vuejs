<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  className: {
    type: String,
    default: ''
  }
})

const progressStyle = computed(() => ({
  background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(blue ${props.value}%, gray 0)`
}))
</script>

<template>
  <div
    class="relative h-5 w-5 overflow-hidden bg-primary/20 rounded-full flex justify-center items-center"
    :class="className"
    :style="progressStyle"
  >
    <!-- <div>{{ value }}%</div> -->
  </div>
</template>
