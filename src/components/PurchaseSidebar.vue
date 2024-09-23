<script setup lang="ts">
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import CourseVideo from './CourseVideo.vue'
import { useCourseStore } from '@/stores/courseStore'
import { onMounted, computed } from 'vue'
import { formatCurrency } from '@/lib/utils'
import { Code, Heart } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
import { useRoute } from 'vue-router'
import LoadingSpinal from './LoadingSpinal.vue'
import ErrorComponent from './ErrorComponent.vue'

const courseStore = useCourseStore()
const route = useRoute()

onMounted(async () => {
  const courseId = route.params.id
  await courseStore.fetchBuyCourseNow(courseId as string)
})

const isLoading = computed(() => courseStore.buyCourseNowData.loading)
const error = computed(() => courseStore.buyCourseNowData.error)
const buyCourseNow = computed(() => courseStore.buyCourseNow)
</script>

<template>
  <Card>
    <CardContent class="mt-6">
      <CourseVideo
        v-if="!isLoading && !error && buyCourseNow"
        :videoUrl="buyCourseNow.videoUrl"
        :videoTitle="buyCourseNow.courseTitle"
      />

      <div v-if="isLoading" class="text-center mt-4">
        <LoadingSpinal />
      </div>

      <ErrorComponent
        v-if="courseStore.getBuyCourseNowError"
        :message="courseStore.getBuyCourseNowError"
      />

      <div v-else-if="buyCourseNow" class="rounded-lg">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-1 justify-between">
            <div class="text-2xl font-bold text-gray-900">
              {{ formatCurrency(buyCourseNow.price.currentPrice) }}
            </div>
            <div class="text-gray-500 text-sm line-through">
              {{ formatCurrency(buyCourseNow.price.originalPrice) }}
            </div>
          </div>
          <div class="text-red-500 font-bold">{{ buyCourseNow.price.discount }} off</div>
        </div>
        <div class="flex mt-4 items-center justify-between">
          <Button class="bg-blue-500 min-w-[290px] md:min-w-[220px] text-white py-2 rounded-lg"
            >Buy Now</Button
          >

          <Button
            class="flex rounded-lg text-black hover:bg-gray-100 bg-transparent items-start justify-center"
            ><Heart :size="20"
          /></Button>
        </div>
        <div class="mt-4">
          <ul class="text-sm space-y-2">
            <li>🎥 {{ buyCourseNow.onDemandVideo }}</li>
            <li>📁 {{ buyCourseNow.downloadableResources }} downloadable resources</li>
            <li>📱 Access on {{ buyCourseNow.access.join(', ') }}</li>
            <li>📄 {{ buyCourseNow.articles }} articles</li>
            <li class="flex justify-start items-center">
              <Code :size="12" class="mx-1" /> {{ buyCourseNow.codingExercises }} coding exercises
            </li>
            <li>
              📜 Certificate of completion:
              {{ buyCourseNow.certificateOfCompletion ? 'Yes' : 'No' }}
            </li>
          </ul>
        </div>
      </div>
    </CardContent>
    <CardFooter></CardFooter>
  </Card>
</template>
