<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  videoUrl: string
  videoTitle: string
}>()
</script>

<template>
  <div class="w-full h-56 mb-4">
    <iframe
      class="w-full h-full rounded-lg"
      :src="`https://www.youtube.com/embed/${props.videoUrl.split('v=')[1]}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      :title="props.videoTitle"
    ></iframe>
  </div>
</template>
