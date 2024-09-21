<script setup lang="ts">
import PurchaseSidebar from './PurchaseSidebar.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row h-full">
    <main class="flex-1 md:pr-5 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-sm text-gray-500 mb-4">Top courses / UI/UX Designing</div>

        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-2xl font-bold">The complete advanced 6-week UI/UX design bootcamp</h1>
            <div class="mt-2 text-gray-600 flex items-center space-x-3">
              <div class="text-yellow-500 font-bold">★ 4.9 (264,250 ratings)</div>
              <div>1,936,922 students</div>
              <div>•</div>
              <div>👨‍🏫 Dr. Marley Bator</div>
            </div>
            <p class="mt-4 text-gray-600">
              Our 6-week UI/UX bootcamp equips students with the essential skills to become
              successful designers. Our experienced instructors provide hands-on learning
              opportunities to design and prototype digital products, conduct user research, and
              create user flows and wireframes.
            </p>
          </div>
        </div>

        <!-- Course Content -->
        <div class="mt-8">
          <div class="font-semibold text-lg">Course content</div>
          <div class="text-sm text-gray-500">41 sections • 490 lectures • 65h 33m total length</div>
          <div class="flex justify-between mt-2">
            <div class="font-bold text-gray-700">Expand all sections</div>
          </div>

          <!-- Week Section -->
          <div class="bg-gray-50 p-4 rounded-lg mt-4">
            <div class="flex justify-between items-center">
              <div class="font-semibold">Week 1 - Beginner - Introduction to UX designing</div>
              <span class="text-sm text-gray-400">02:53</span>
            </div>
            <ul class="mt-2">
              <li class="flex justify-between items-center py-1">
                <div>Read before you start</div>
                <span class="text-green-500">✔</span>
              </li>
              <li class="flex justify-between items-center py-1">
                <div>Introduction to Figma essentials training course</div>
                <span class="text-green-500">✔</span>
              </li>
              <li class="flex justify-between items-center py-1">
                <div>What is the difference between UI & UX in Figma</div>
                <span class="text-gray-500">05:22</span>
              </li>
              <li class="flex justify-between items-center py-1">
                <div>What we are making in this Figma course</div>
                <span class="text-gray-500">09:18</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>

    <section class="mt-5 md:mt-0 p-0 md:p-6 md:sticky md:top-0">
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
