<script setup lang="ts">
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import CourseVideo from './CourseVideo.vue'
</script>

<template>
  <Card>
    <CardContent class="mt-6">
      <CourseVideo />
      <div class="rounded-lg">
        <div class="text-3xl font-bold text-gray-900">$549.00</div>
        <div class="text-gray-500 line-through">$3,499.00</div>
        <div class="text-green-500 font-bold">85% off</div>
        <button class="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Buy Now</button>
        <div class="mt-4">
          <ul class="text-sm space-y-2">
            <li>🎥 65 hours on-demand video</li>
            <li>📁 49 downloadable resources</li>
            <li>📱 Access on mobile and TV</li>
            <li>📄 86 articles</li>
            <li>💻 8 coding exercises</li>
            <li>📜 Certificate of completion</li>
          </ul>
        </div>
      </div></CardContent
    >
    <CardFooter></CardFooter>
  </Card>
</template>
