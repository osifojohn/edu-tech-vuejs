<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'radix-vue'
import { ChevronDownIcon } from '@radix-icons/vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<
    AccordionTriggerProps & { class?: HTMLAttributes['class']; isCourseContent?: boolean }
  >(),
  {
    isCourseContent: false
  }
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          `flex flex-1 items-center justify-between  text-sm font-medium transition-all  [&[data-state=open]>svg]:rotate-180`,
          !props.isCourseContent ? 'hover:underline py-4' : '',
          props.class
        )
      "
    >
      <slot name="icon">
        <ChevronDownIcon
          v-if="props.isCourseContent"
          class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
        />
      </slot>
      <slot />
    </AccordionTrigger>
  </AccordionHeader>
</template>
