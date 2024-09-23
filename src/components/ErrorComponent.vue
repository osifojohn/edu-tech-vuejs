<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  message?: string
}>()
</script>

<style scoped></style>

<template>
  <div class="w-full h-full flex items-center justify-center" v-if="message">
    <p class="text-red-600 font-bold">{{ message }}</p>
  </div>
</template>
