<script setup lang="ts">
const props = defineProps<{
  label: string
  content: string | number
}>()
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <h3 class="text-lg font-semibold lg:min-w-[30ch] lg:mr-2">
      {{ props.label }}
    </h3>
    <p class="mt-2 lg:mt-0">
      {{ props.content }}
    </p>
  </div>
</template>
