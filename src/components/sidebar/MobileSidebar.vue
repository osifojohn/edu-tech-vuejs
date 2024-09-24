<script setup lang="ts">
import { ref } from 'vue'
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet'
import type { JSX } from 'vue/jsx-runtime'
import { MenuIcon } from 'lucide-vue-next'

interface MobileSidebarProps {
  sidebarContent: () => JSX.Element
  mobileDashboardHeader?: () => JSX.Element
}

const props = defineProps<MobileSidebarProps>()

const isSidebarOpen = ref(false)

const toggleSidebar = (state: boolean) => {
  isSidebarOpen.value = state
}
</script>

<template>
  <Sheet>
    <div class="mt-5 flex md:hidden">
      <div class="flex flex-1">
        <props.mobileDashboardHeader v-if="props.mobileDashboardHeader" />
      </div>

      <SheetTrigger @click="toggleSidebar(true)">
        <MenuIcon :size="24" />
      </SheetTrigger>
    </div>

    <SheetContent side="left" v-if="isSidebarOpen">
      <props.sidebarContent :toggleSidebar="toggleSidebar" />
    </SheetContent>
  </Sheet>

  <slot />
</template>
