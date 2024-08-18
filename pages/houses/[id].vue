<script setup lang="ts">
/**
 * When a house is not found, we should redirect to a 404 page. This should be done upon writing better error handling.
 */

const route = useRoute('houses-id')

const { data: fundaObjectDetail } = await useFetch<FundaObjectDetail>(`/api/houses/${route.params.id}`)

useHead({
  title: fundaObjectDetail.value?.Adres,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: fundaObjectDetail.value?.Adres,
    },
  ],
})
</script>

<template>
  <article v-if="fundaObjectDetail">
    <FundaDetailHeader :funda-object-detail="fundaObjectDetail" />
    <FundaDetailPhotoCarousel :funda-object-detail="fundaObjectDetail" />
    <main class="max-w-[100ch] px-4 lg:px-0 mx-auto">
      <FundaDetailInformation :funda-object-detail="fundaObjectDetail" />
    </main>
  </article>
</template>
