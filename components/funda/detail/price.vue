<script lang="ts" setup>
const props = defineProps<{
  fundaObjectDetail: FundaObjectDetail
}>()

const price = computed(() => {
  const priceBuying = Number.parseFloat(String(props.fundaObjectDetail.KoopPrijs))
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(priceBuying)
})
</script>

<template>
  <span>{{ price }}</span>
</template>
