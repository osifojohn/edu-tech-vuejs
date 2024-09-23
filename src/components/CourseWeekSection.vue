<script setup lang="ts">
import { Check, FileTextIcon, PlayCircleIcon } from 'lucide-vue-next'

import { computed, onMounted } from 'vue'
import type { Lesson } from '../types'
import { useCourseStore } from '@/stores/courseStore'
import CardContent from './ui/card/CardContent.vue'
import Accordion from './ui/accordion/Accordion.vue'
import AccordionItem from './ui/accordion/AccordionItem.vue'
import AccordionTrigger from './ui/accordion/AccordionTrigger.vue'
import CircleProgress from './ui/progress/CircleProgress.vue'
import AccordionContent from './ui/accordion/AccordionContent.vue'
import Card from './ui/card/Card.vue'
import { useRoute } from 'vue-router'
import ErrorComponent from './ErrorComponent.vue'
import LoadingSpinal from './LoadingSpinal.vue'

const route = useRoute()

const courseStore = useCourseStore()

onMounted(async () => {
  const courseId = route.params.id
  await courseStore.fetchCourseSections(courseId as string)
})

const isLoading = computed(() => courseStore.courseSectionsData.loading)
const error = computed(() => courseStore.courseSectionsData.error)
const courseSections = computed(() => courseStore.courseSectionsData.item)

const calculateProgress = (lessons: Lesson[]) => {
  if (!lessons || lessons.length === 0) return 0
  const completedCount = lessons.filter((lesson) => lesson.completed).length
  return (completedCount / lessons.length) * 100
}

const sectionsWithProgress = computed(() => {
  return courseSections.value
    ? courseSections.value.sections.map((section) => ({
        ...section,
        progress: calculateProgress(section.lessons)
      }))
    : courseSections.value
})
</script>

<template>
  <div class="mt-8">
    <div class="font-semibold text-lg">Course content</div>

    <div v-if="isLoading" class="w-full"><LoadingSpinal /></div>

    <ErrorComponent v-if="error" :message="error" />

    <div v-else>
      <div class="flex items-center justify-between mt-2 mb-3">
        <div class="text-[12px] md:text-sm text-gray-500">
          {{ courseSections?.totalSectionNumber }} sections •
          {{ courseSections?.numbersOfLecture }} lectures •
          {{ courseSections?.totalLengthDuration }} total length
        </div>
        <div class="text-[11px] md:text-sm text-blue-500 underline">Expand all sections</div>
      </div>

      <Card class="px-0">
        <CardContent class="px-0">
          <Accordion type="single" collapsible>
            <AccordionItem
              v-for="(section, index) in sectionsWithProgress"
              :key="index"
              :value="'item-' + index"
              class="px-3"
            >
              <AccordionTrigger :isCourseContent="true">
                <div class="w-full flex justify-between items-center mb-1 py-2">
                  <div class="font-semibold flex items-center justify-start">
                    <data class="md:ml-1 text-[12px] lg:text-base">{{
                      `Week ${section.week} - ${section.title}`
                    }}</data>
                  </div>
                </div>
                <CircleProgress :value="section.progress" />
              </AccordionTrigger>
              <AccordionContent class="w-full">
                <div class="w-full">
                  <div class="rounded-lg">
                    <ul>
                      <li
                        v-for="(lesson, lessonIndex) in section.lessons"
                        :key="lessonIndex"
                        class="flex justify-between pl-6 items-center py-1"
                      >
                        <div class="flex items-center">
                          <template v-if="lesson.type === 'video'">
                            <PlayCircleIcon class="mr-2" :size="15" />
                          </template>
                          <template v-else-if="lesson.type === 'document'">
                            <FileTextIcon class="mr-2" :size="15" />
                          </template>
                          <div>{{ lesson.title }}</div>
                          <Check v-if="lesson.completed" class="text-green-500 ml-2" :size="18" />
                        </div>
                        <div class="text-gray-500">{{ lesson.duration }}</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
