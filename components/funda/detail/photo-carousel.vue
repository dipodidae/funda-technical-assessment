<script setup lang="ts">
const props = defineProps<{
  fundaObjectDetail: FundaObjectDetail
}>()

const slides = computed(() => {
  return props.fundaObjectDetail.Media.map((category) => {
    return category.MediaItems.map((mediaItem) => {
      return {
        key: `${category.Id}-${mediaItem.Url}`,
        src: mediaItem.Url,
      }
    })
  }).flat().filter((mediaItem) => {
    return mediaItem.src.endsWith('groot.jpg')
  })
})
</script>

<template>
  <div class="bg-zinc-100 border-t-zinc-200 border-t border-b-zinc-200 border-b p-4">
    <Swiper
      :modules="[SwiperAutoplay]"
      slides-per-view="auto"
      :loop="true"
      :soace-between="16"
      class="gap-4 "
      :autoplay="{
        delay: 2_000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.key">
        <NuxtImg :src="slide.src" class="lg:h-[35ch] h-[15ch] border-zinc-400 rounded-md" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-slide {
  width: unset !important;
  height: unset !important;
  margin-right: 4px;
}
</style>
