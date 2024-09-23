<script setup lang="ts">
import { onMounted } from 'vue'
import CourseCard from '../../components/CourseCard.vue'
import { useCourseStore } from '../../stores/courseStore'
import LoadingSpinal from '../../components/LoadingSpinal.vue'
import ErrorComponent from '../../components/ErrorComponent.vue'

const courseStore = useCourseStore()

onMounted(async () => {
  await courseStore.fetchCourses()
})
</script>

<template>
  <div class="container mx-auto px-4 py-4 md:py-10">
    <h1 class="text-3xl md:text-4xl w-full font-bold text-start text-gray-800 mb-8">Our Courses</h1>

    <!-- Loading state -->

    <LoadingSpinal v-if="courseStore.isCoursesLoading" :size="50" />

    <!-- Error state -->
    <ErrorComponent v-if="courseStore.getCoursesError" :message="courseStore.getCoursesError" />

    <!-- Course List -->
    <div
      v-if="!courseStore.isCoursesLoading && !courseStore.getCoursesError"
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
