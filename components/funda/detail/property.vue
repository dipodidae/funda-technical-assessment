<script setup lang="ts">
const props = defineProps<{
  icon: string
  description: string
}>()
</script>

<template>
  <UTooltip :text="props.description">
    <div class="bg-neutral-100/80 border-neutral-200 rounded flex items-center p-2 text-sm text-zinc-600">
      <UIcon :name="props.icon" class="text-zinc-600 mr-2 w-5 h-5" />
      <slot />
    </div>
  </UTooltip>
</template>
