<script setup lang="ts">
const props = defineProps<{
  content: string
}>()

const maxLength = 400

const summary = computed(() => {
  return props.content.length > maxLength
    ? `${props.content.slice(0, maxLength)}...`
    : props.content
})

const isFolded = ref(true)

const contentExceedsMaxLength = computed(() => props.content.length > maxLength)
</script>

<template>
  <div>
    <div v-if="isFolded">
      {{ summary }}
    </div>
    <div v-if="!isFolded">
      {{ props.content }}
    </div>
    <div v-if="contentExceedsMaxLength" class="flex mt-2">
      <UButton class="ml-auto" @click="isFolded = !isFolded">
        {{ isFolded ? 'Lees meer' : 'Lees minder' }}
      </UButton>
    </div>
  </div>
</template>
