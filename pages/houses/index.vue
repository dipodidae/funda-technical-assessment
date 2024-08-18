<script lang="ts" setup>
/**
 * Here I'd also like to write better error handling
 */
const { data } = await useFetch('/api/houses')
</script>

<template>
  <div v-if="data" class="flex flex-col gap-y-4 py-4 mx-auto max-w-[100ch] px-4 lg:px-0">
    <funda-object v-for="fundaObject in data" :key="fundaObject.Id._text" :funda-object="fundaObject" />
  </div>
</template>
