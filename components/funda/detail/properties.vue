<script setup lang="ts">
const props = defineProps<{
  fundaObjectDetail: FundaObjectDetail
}>()
</script>

<template>
  <div class="flex gap-2">
    <FundaDetailProperty icon="material-symbols:other-houses" description="Woonoppervlakte">
      {{ props.fundaObjectDetail.WoonOppervlakte }} m²
    </FundaDetailProperty>
    <FundaDetailProperty icon="material-symbols:background-dot-small" description="Perceeloppervlakte">
      {{ props.fundaObjectDetail.PerceelOppervlakte }} m²
    </FundaDetailProperty>
    <FundaDetailProperty icon="material-symbols:bedroom-child" description="Aantal kamers">
      {{ props.fundaObjectDetail.AantalKamers }}
    </FundaDetailProperty>
  </div>
</template>
