<script setup lang="ts">
import CustomHeader from './CustomHeader.vue'
import {
  LucideGrid,
  LucideBook,
  LucideGraduationCap,
  LucideMessageCircleCode,
  LucideHeart,
  LucideBell
} from 'lucide-vue-next'
import SheetFooter from './ui/sheet/SheetFooter.vue'

const menuItems = [
  { name: 'Home', icon: LucideGrid },
  { name: 'Courses', icon: LucideBook, active: true },
  { name: 'Achievements', icon: LucideGraduationCap },
  { name: 'Messages', icon: LucideMessageCircleCode },
  { name: 'Wishlist', icon: LucideHeart },
  { name: 'Notifications', icon: LucideBell }
]
</script>

<template>
  <div class="flex flex-grow flex-col max-h-screen">
    <CustomHeader />
    <div class="flex-grow pt-10 h-[calc(92vh-40px)] flex flex-col w-full">
      <a
        v-for="(item, index) in menuItems"
        :key="index"
        href="#"
        :class="[
          'flex items-center mb-3 text-sm font-medium rounded-[2px] px-2 py-2.5 transition duration-200',
          item.active ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'
        ]"
      >
        <component
          :is="item.icon"
          :class="['w-5 h-5 mr-3', item.active ? 'text-blue-500' : 'text-gray-500']"
        />
        {{ item.name }}
      </a>
      <div class="mt-auto w-full">
        <SheetFooter>jkkdfghj</SheetFooter>
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
