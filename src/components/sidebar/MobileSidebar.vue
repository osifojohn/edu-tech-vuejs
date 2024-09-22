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
const isOpen = ref(false)
</script>

<template>
  <Sheet v-model="isOpen">
    <div class="mt-5 flex md:hidden">
      <div class="flex flex-1">
        <props.mobileDashboardHeader v-if="props.mobileDashboardHeader" />
      </div>
      <SheetTrigger>
        <MenuIcon :size="24" />
      </SheetTrigger>
    </div>
    <SheetContent side="left">
      <props.sidebarContent />
    </SheetContent>
  </Sheet>
  <slot />
</template>
