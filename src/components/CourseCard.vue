<script setup lang="ts">
import type { Course } from '@/types'
import { defineProps } from 'vue'

const { course } = defineProps<{ course: Course }>()
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <img :src="course.image" alt="Course Image" class="w-full h-40 object-cover" />

    <div class="p-4">
      <h3 class="text-lg font-bold mb-2">{{ course.title }}</h3>
      <!-- <p class="text-gray-600 mb-4">{{ course.description }}</p> -->

      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-500">By: {{ course.instructor.name }}</span>
        <span class="text-sm text-yellow-500">⭐ {{ course.rating?.average }}</span>
      </div>

      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-500">{{ course.studentsEnrolled }} students enrolled</span>
        <span class="text-sm text-gray-500">{{ course.duration }}</span>
      </div>

      <div class="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
        <div class="bg-blue-500 h-2 rounded-full" :style="{ width: course.progress + '%' }"></div>
      </div>

      <p class="text-sm text-gray-600">{{ course.progress }}% completed</p>
    </div>
  </div>
</template>

<style scoped></style>
