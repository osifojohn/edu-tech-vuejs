<script setup lang="ts">
import { useCourseStore } from '@/stores/courseStore'
import { Users } from 'lucide-vue-next'
import { onMounted } from 'vue'

const courseStore = useCourseStore()

onMounted(async () => {
  await courseStore.fetchAboutCourse('1')
})

const { isCourseDetailLoading, getCourseDetailError } = useCourseStore()
</script>

<template>
  <div class="text-sm text-gray-500 mb-4">
    Top courses /
    <span class="text-black font-medium" v-if="!isCourseDetailLoading && !getCourseDetailError">{{
      courseStore.aboutCourse?.category
    }}</span>
  </div>

  <div v-if="isCourseDetailLoading" class="flex justify-center items-center">
    <p>Loading course details...</p>
  </div>

  <div v-else-if="getCourseDetailError" class="text-red-500">
    <p>{{ getCourseDetailError }}</p>
  </div>

  <div v-else class="flex justify-between items-start">
    <div>
      <h1 class="text-2xl font-bold">{{ courseStore.aboutCourse?.title }}</h1>
      <div class="mt-2 flex items-center space-x-3">
        <div class="font-bold text-[14px]">
          <span class="text-yellow-500">★</span> {{ courseStore.aboutCourse?.ratings.average }} ({{
            courseStore.aboutCourse?.ratings.totalRatings
          }}
          ratings)
        </div>
        <div class="flex items-center space-x-[2px] text-[14px]">
          <Users :size="13" /><span>{{ courseStore.aboutCourse?.studentsEnrolled }} students</span>
        </div>
        <div>•</div>
        <div class="text-[14px]">👨‍🏫 {{ courseStore.aboutCourse?.instructor.name }}</div>
      </div>
      <p class="mt-4 text-gray-600">
        {{ courseStore.aboutCourse?.description }}
      </p>
    </div>
  </div>
</template>
