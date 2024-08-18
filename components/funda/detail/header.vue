<script lang="ts" setup>
const props = defineProps<{
  fundaObjectDetail: FundaObjectDetail
}>()

const backgroundImage = computed(() => {
  return `url(${props.fundaObjectDetail.HoofdFoto})`
})
</script>

<template>
  <header class="max-w-[100ch] mx-auto min-h-[40ch] flex flex-col p-4">
    <FundaDetailPrice :funda-object-detail="props.fundaObjectDetail" class="text-xl text-blue-900 font-bold ml-auto bg-blue-50/50 backdrop-blur-sm shadow rounded p-4" />
    <div class="mt-auto bg-gradient-to-t from-neutral-200/80 to-neutral-300/70 p-4 w-full rounded backdrop-blur-sm shadow">
      <h1 class="text-xl">
        {{ props.fundaObjectDetail.Adres }}
      </h1>
      <h2>
        {{ props.fundaObjectDetail.Postcode }} {{ props.fundaObjectDetail.Plaats }}
      </h2>
      <FundaDetailProperties :funda-object-detail="props.fundaObjectDetail" class="mt-2" />
    </div>
  </header>
</template>

<style scoped>
header {
  background-size: cover;
  background-position: center;
  background-image: v-bind(backgroundImage);
  background-repeat: no-repeat;
}
</style>
