<script setup lang="ts">
import AboutCourse from './AboutCourse.vue'
import CourseWeekSection from './CourseWeekSection.vue'
import PurchaseSidebar from './PurchaseSidebar.vue'
import Button from './ui/button/Button.vue'
</script>

<template>
  <div class="flex flex-col xl:flex-row h-full">
    <main class="flex-1 lg:pr-5 bg-white">
      <div class="max-w-7xl mx-auto">
        <AboutCourse />
        <CourseWeekSection />
      </div>
    </main>

    <section class="mt-10 md:mt-5 lg:mt-0 p-0 lg:p-6 lg:sticky md:top-0">
      <PurchaseSidebar />
    </section>

    <div class="fixed bottom-0 left-0 w-full md:hidden border-t">
      <Button
        class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Buy Now
      </Button>
    </div>
  </div>
</template>

<style scoped></style>
