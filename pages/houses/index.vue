<script lang="ts" setup>
const { data } = await useFetch('/api/houses')
</script>

<template>
  <div v-if="data" class="flex flex-col gap-y-4 p-4">
    <funda-object v-for="fundaObject in data" :key="fundaObject.Id._text" :funda-object="fundaObject" />
  </div>
</template>
