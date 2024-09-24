<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import CustomHeader from './CustomHeader.vue'
import {
  LucideGrid,
  LucideBook,
  LucideGraduationCap,
  LucideMessageCircleCode,
  LucideHeart,
  LucideBell,
  Code
} from 'lucide-vue-next'
import SheetFooter from '../ui/sheet/SheetFooter.vue'

interface SidebarProps {
  toggleSidebar: (state: boolean) => void
}

const route = useRoute()
const router = useRouter()

const props = defineProps<SidebarProps>()

const menuItems = [
  { labelName: 'Home', icon: LucideGrid, route: 'home' },
  { labelName: 'Courses', icon: LucideBook, route: 'courses' },
  { labelName: 'Achievements', icon: LucideGraduationCap, route: 'achievements' },
  { labelName: 'Messages', icon: LucideMessageCircleCode, route: 'messages' },
  { labelName: 'Wishlist', icon: LucideHeart, route: 'wishlist' },
  { labelName: 'Notifications', icon: LucideBell, route: 'notifications' }
]

const isActive = (itemRoute: string) => computed(() => route.name === itemRoute)

const handleNavigateToPage = (itemRoute: string) => {
  router.push(`/dashboard/${itemRoute}`)
  props.toggleSidebar(false)
}
</script>

<template>
  <div class="flex fixed flex-grow flex-col max-h-screen">
    <CustomHeader />
    <div class="flex-grow pt-10 h-[calc(92vh-40px)] flex flex-col w-full">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        @click="handleNavigateToPage(item.route)"
        :class="[
          'flex items-center mb-3 text-sm font-medium rounded-[2px] px-2 pr-[110px] py-2.5 transition duration-200 cursor-pointer',
          isActive(item.route).value ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'
        ]"
      >
        <component
          :is="item.icon"
          :class="['w-5 h-5 mr-3', isActive(item.route).value ? 'text-blue-500' : 'text-gray-500']"
        />
        {{ item.labelName }}
      </div>
      <div class="mt-auto flex justify-start w-full">
        <SheetFooter
          ><div class="flex items-center space-x-2 cursor-pointer">
            <img
              src="../../assets/images/profile_img.jpg"
              alt="User Avatar"
              class="w-10 h-10 rounded-full object-cover"
            />
            <span class="font-medium text-[14px] text-gray-900">William Smith</span>
            <Code class="w-4 h-4 text-gray-600 rotate-90" /></div
        ></SheetFooter>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
