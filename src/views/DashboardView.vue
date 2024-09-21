<script setup lang="ts">
import MainSidebar from '@/components/MainSidebar.vue'
import CustomHeader from '@/components/CustomHeader.vue'
import SidebarContent from '@/components/SidebarContent.vue'
import CourseContent from '@/components/CourseContent.vue'
</script>

<template>
  <MainSidebar :sidebar-content="SidebarContent" :mobile-dashboard-header="CustomHeader">
    <div class="py-10">
      <CourseContent />
    </div>
  </MainSidebar>
</template>
