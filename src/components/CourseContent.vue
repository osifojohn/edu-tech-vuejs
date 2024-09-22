<script setup lang="ts">
import {
  Check,
  CheckCircleIcon,
  ChevronDownIcon,
  FileTextIcon,
  PlayCircleIcon
} from 'lucide-vue-next'
import PurchaseSidebar from './PurchaseSidebar.vue'
import Accordion from './ui/accordion/Accordion.vue'
import AccordionContent from './ui/accordion/AccordionContent.vue'
import AccordionItem from './ui/accordion/AccordionItem.vue'
import AccordionTrigger from './ui/accordion/AccordionTrigger.vue'
import Card from './ui/card/Card.vue'
import CardContent from './ui/card/CardContent.vue'
import CardFooter from './ui/card/CardFooter.vue'
import CircleProgress from './ui/progress/CircleProgress.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row h-full">
    <main class="flex-1 lg:pr-5 bg-white">
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

          <div class="flex items-center justify-between mt-2 mb-3">
            <div class="text-sm text-gray-500">
              41 sections • 490 lectures • 65h 33m total length
            </div>
            <div class="text-sm text-blue-500 underline">Expand all sections</div>
          </div>

          <!-- Week Section -->
          <Card class="px-0">
            <CardContent class="px-0">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1 " class="px-3">
                  <AccordionTrigger :showIcon="false"
                    ><div class="w-full flex justify-between items-center mb-1 py-2">
                      <div class="font-semibold flex items-center">
                        <slot name="icon">
                          <ChevronDownIcon
                            class="h-4 w-4 mr-2 shrink-0 text-muted-foreground transition-transform duration-200"
                          />
                        </slot>
                        <data> Week 1 - Beginner - Introduction to UX designing</data>
                      </div>
                    </div>
                    <CircleProgress :value="30" />
                  </AccordionTrigger>
                  <AccordionContent class="w-full">
                    <div class="w-full">
                      <div class="rounded-lg">
                        <ul>
                          <!-- First item -->
                          <li class="flex justify-between pl-6 items-center py-1">
                            <div class="flex items-center">
                              <FileTextIcon class="mr-2" :size="15" />
                              <div>Read before you start</div>
                              <Check class="text-green-500 ml-2" :size="18" />
                            </div>
                            <div class="text-gray-500">02:53</div>
                          </li>

                          <!-- Second item -->
                          <li class="flex justify-between items-center pl-6 py-1">
                            <div class="flex items-center">
                              <PlayCircleIcon class="mr-2" :size="15" />
                              <div>Introduction to Figma essentials training course</div>
                              <Check class="text-green-500 ml-2" :size="18" />
                            </div>
                            <div class="text-gray-500">02:45</div>
                          </li>

                          <!-- Third item -->
                          <li class="flex justify-between items-center pl-6 py-1">
                            <div class="flex items-center">
                              <PlayCircleIcon class="mr-2 text-gray-400" :size="15" />
                              <div>What is the difference between UI & UX in Figma</div>
                              <Check class="text-green-500 ml-2" :size="18" />
                            </div>
                            <div class="text-gray-500">05:22</div>
                          </li>

                          <!-- Fourth item -->
                          <li class="flex justify-between items-center pl-6 py-1">
                            <div class="flex items-center">
                              <PlayCircleIcon class="mr-2" :size="15" />
                              <div>What we are making in this Figma course</div>
                            </div>
                            <div class="text-gray-500">09:18</div>
                          </li>

                          <!-- Fifth item -->
                          <li class="flex justify-between items-center pl-6 py-1">
                            <div class="flex items-center">
                              <FileTextIcon class="mr-2" :size="15" />
                              <div>Class project 02 - Create your own brief</div>
                            </div>
                            <div class="text-gray-500">1 Question</div>
                          </li>

                          <!-- Sixth item -->
                          <li class="flex justify-between pl-6 items-center py-1">
                            <div class="flex items-center">
                              <FileTextIcon class="mr-2" :size="15" />
                              <div>Class project 02 - Create your own brief</div>
                            </div>
                            <div class="text-gray-500">1 Question</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
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
