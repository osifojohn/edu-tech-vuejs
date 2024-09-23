<script setup lang="ts">
import AboutCourse from './AboutCourse.vue'
import CourseWeekSection from './CourseWeekSection.vue'
import PurchaseSidebar from './PurchaseSidebar.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row h-full">
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
      <button
        class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Buy Now
      </button>
    </div>
  </div>
</template>

<style scoped>
.icon-home {
  content: url('https://via.placeholder.com/16x16?text=🏠');
}
.icon-courses {
  content: url('https://via.placeholder.com/16x16?text=📚');
}
.icon-achievements {
  content: url('https://via.placeholder.com/16x16?text=🏆');
}
.icon-messages {
  content: url('https://via.placeholder.com/16x16?text=💬');
}
.icon-wishlist {
  content: url('https://via.placeholder.com/16x16?text=❤️');
}
.icon-notifications {
  content: url('https://via.placeholder.com/16x16?text=🔔');
}
</style>
