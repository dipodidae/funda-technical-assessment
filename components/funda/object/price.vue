<script lang="ts" setup>
const props = defineProps<{
  fundaObject: FundaObject
}>()

const price = computed(() => {
  const priceBuying = Number.parseFloat(props.fundaObject.Prijs.Koopprijs._text)
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(priceBuying)
})
</script>

<template>
  <span>{{ price }}</span>
</template>
