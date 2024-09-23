<script setup lang="ts">
// import SheetFooter from '../ui/sheet/SheetFooter.vue'
import { useRoute, RouterLink } from 'vue-router'
import CustomHeader from './CustomHeader.vue'
import {
  LucideGrid,
  LucideBook,
  LucideGraduationCap,
  LucideMessageCircleCode,
  LucideHeart,
  LucideBell
} from 'lucide-vue-next'
import { computed } from 'vue'

const route = useRoute()

const menuItems = [
  { labelName: 'Home', icon: LucideGrid, route: 'home' },
  { labelName: 'Courses', icon: LucideBook, route: 'courses' },
  { labelName: 'Achievements', icon: LucideGraduationCap, route: 'achievements' },
  { labelName: 'Messages', icon: LucideMessageCircleCode, route: 'messages' },
  { labelName: 'Wishlist', icon: LucideHeart, route: 'wishlist' },
  { labelName: 'Notifications', icon: LucideBell, route: 'notifications' }
]

const isActive = (itemRoute: string) => {
  return computed(() => route.name === itemRoute).value
}
</script>

<template>
  <div class="flex flex-grow flex-col max-h-screen">
    <CustomHeader />
    <div class="flex-grow pt-10 h-[calc(92vh-40px)] flex flex-col w-full">
      <RouterLink
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.route"
        :class="[
          'flex items-center mb-3 text-sm font-medium rounded-[2px] px-2 py-2.5 transition duration-200',
          isActive(item?.route as string) ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100',
          isActive(item?.route as string) ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'
        ]"
      >
        <component
          :is="item.icon"
          :class="[
            'w-5 h-5 mr-3',
            isActive(item?.route as string) ? 'text-blue-500' : 'text-gray-500'
          ]"
        />
        {{ item.labelName }}
      </RouterLink>
      <div class="mt-auto w-full">
        <!-- <SheetFooter></SheetFooter> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
a.active {
  background-color: #e2e8f0;
  font-weight: bold;
}

a:hover {
  background-color: #f3f4f6;
}
</style>
