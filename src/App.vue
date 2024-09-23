<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { SidebarContent, CustomHeader, MainSidebar } from '../src/components/sidebar'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  if (router.currentRoute.value.path === '/') {
    router.push('/dashboard/courses')
  }
})
</script>

<template>
  <MainSidebar :sidebar-content="SidebarContent" :mobile-dashboard-header="CustomHeader">
    <div class="pt-10 pb-20">
      <RouterView />
    </div>
  </MainSidebar>
</template>
