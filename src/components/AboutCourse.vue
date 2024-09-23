<script setup lang="ts">
import { useCourseStore } from '@/stores/courseStore'
import { Users } from 'lucide-vue-next'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import LoadingSpinal from './LoadingSpinal.vue'
import ErrorComponent from './ErrorComponent.vue'

const courseStore = useCourseStore()
const route = useRoute()

onMounted(async () => {
  const courseId = route.params.id
  await courseStore.fetchAboutCourse(courseId as string)
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

  <div v-if="isCourseDetailLoading" class="w-full">
    <LoadingSpinal />
  </div>

  <ErrorComponent v-if="getCourseDetailError" :message="getCourseDetailError" />

  <div v-else class="flex justify-between items-start">
    <div>
      <h1 class="text-xl md:text-2xl font-bold">{{ courseStore.aboutCourse?.title }}</h1>
      <div class="mt-2 flex items-center space-x-3">
        <div class="font-bold text-[12px] md:text-[14px]">
          <span class="text-yellow-500 text-[9px] md:text-[14px]">★</span>
          {{ courseStore.aboutCourse?.ratings.average }} ({{
            courseStore.aboutCourse?.ratings.totalRatings
          }}
          ratings)
        </div>
        <div class="flex items-center space-x-[1px] md:space-x-[2px] text-[12px] md:text-[14px]">
          <Users :size="13" />
          <span class="text-[12px] md:text-[14px]"
            >{{ courseStore.aboutCourse?.studentsEnrolled }} students</span
          >
        </div>
        <div class="text-[12px] md:text-[14px]">
          👨‍🏫 {{ courseStore.aboutCourse?.instructor.name }}
        </div>
      </div>
      <p class="mt-4 text-[14px] md:text-[15px] text-gray-600">
        {{ courseStore.aboutCourse?.description }}
      </p>
    </div>
  </div>
</template>
