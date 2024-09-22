<script setup lang="ts">
import { onMounted } from 'vue'
import CourseCard from '../components/CourseCard.vue'
import { useCourseStore } from '@/stores/courseStore'

const courseStore = useCourseStore()

onMounted(async () => {
  document.title = 'Courses List'

  await courseStore.fetchCourses()
})
</script>

<template>
  <div class="container mx-auto px-4 py-4 md:py-10">
    <h1 class="text-3xl md:text-4xl w-full font-bold text-start text-gray-800 mb-8">Our Courses</h1>

    <!-- Loading state -->
    <div v-if="courseStore.isCoursesLoading" class="text-center">
      <p>Loading courses...</p>
    </div>

    <!-- Error state -->
    <div v-if="courseStore.getCoursesError" class="text-center text-red-500">
      <p>{{ courseStore.getCoursesError }}</p>
    </div>

    <!-- Course List -->
    <div
      v-if="!courseStore.isCoursesLoading && !courseStore.isCoursesLoading"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <CourseCard
        v-for="course in courseStore.coursesData.items"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<style scoped></style>
