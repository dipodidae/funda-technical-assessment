<script setup lang="ts">
const props = defineProps<{
  fundaObject: FundaObject
}>()
</script>

<template>
  <article class="border border-zinc-300 rounded-sm">
    <header class="border-b border-b-zinc-300 p-2">
      <h1 class="flex text-zinc-800">
        <span class="mr-1">{{ props.fundaObject.Adres._text }}</span>
        <span class="text-zinc-400">{{ props.fundaObject.Postcode._text }}</span>
        <span class="ml-auto">{{ props.fundaObject.Woonplaats._text }}</span>
      </h1>
    </header>
    <main>
      <NuxtImg :src="props.fundaObject.FotoLarge._text" class="w-full" />
    </main>
    <footer class="flex p-2 border-t border-t-zinc-300">
      <FundaObjectPrice :funda-object="props.fundaObject" />
      <UButton :to="`/houses/${props.fundaObject.Id._text}`" class="ml-auto">
        Details
      </UButton>
    </footer>
  </article>
</template>
