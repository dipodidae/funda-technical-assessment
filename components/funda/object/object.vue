<script setup lang="ts">
const props = defineProps<{
  fundaObject: FundaObject
}>()
</script>

<template>
  <article class="border border-teal-300 rounded-sm">
    <header class="border-b border-b-teal-300 p-2">
      <h1 class="flex text-teal-100">
        <span class="mr-1">{{ props.fundaObject.Adres._text }}</span>
        <span class="text-teal-400">{{ props.fundaObject.Postcode._text }}</span>
        <span class="ml-auto">{{ props.fundaObject.Woonplaats._text }}</span>
      </h1>
    </header>
    <main>
      <NuxtImg :src="props.fundaObject.FotoLarge._text" class="w-full" />
    </main>
    <footer class="flex p-2 border-t border-t-teal-300">
      <FundaObjectPrice :funda-object="props.fundaObject" />
      <UButton :to="`/houses/${props.fundaObject.Id._text}`" class="ml-auto">
        Details
      </UButton>
    </footer>
  </article>
</template>
