<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SidebarContent, CustomHeader, MainSidebar } from '../src/components/sidebar'
</script>

<template>
  <MainSidebar :sidebar-content="SidebarContent" :mobile-dashboard-header="CustomHeader">
    <div class="pt-10 pb-20">
      <RouterView />
    </div>
  </MainSidebar>
</template>
