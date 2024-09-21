<script setup lang="ts">
import type { JSX } from 'vue/jsx-runtime'
import DesktopSidebar from './DesktopSidebar.vue'
import MobileSidebar from './MobileSidebar.vue'

interface SidebarProps {
  sidebarContent: () => JSX.Element
  mobileDashboardHeader?: () => JSX.Element
}

const props = defineProps<SidebarProps>()
</script>

<template>
  <DesktopSidebar :sidebar-content="props.sidebarContent">
    <MobileSidebar
      :sidebar-content="props.sidebarContent"
      :mobile-dashboard-header="props.mobileDashboardHeader"
    >
      <slot />
    </MobileSidebar>
  </DesktopSidebar>
</template>
