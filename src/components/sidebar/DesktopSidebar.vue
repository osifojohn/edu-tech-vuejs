<script setup lang="ts">
import type { JSX } from 'vue/jsx-runtime'

interface DesktopSidebarProps {
  sidebarContent: () => JSX.Element
}

const props = defineProps<DesktopSidebarProps>()
</script>

<template>
  <div
    class="container h-screen flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
  >
    <aside
      class="fixed top-14 z-30 -ml-2 hidden h-screen w-full shrink-0 border-r md:sticky md:block"
    >
      <div class="h-full py-6 lg:py-8">
        <props.sidebarContent />
      </div>
    </aside>

    <slot />
  </div>
</template>
