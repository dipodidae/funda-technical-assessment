<script lang="ts" setup>
const props = defineProps<{
  fundaObject: FundaObject
}>()

const googleMapsRef = ref()

onMounted(async () => {
  const api = googleMapsRef.value

  const query = await api.resolveQueryToLatLang(`${props.fundaObject.Adres._text}, ${props.fundaObject.Postcode._text} ${props.fundaObject.Woonplaats._text}`)

  googleMapsRef.value.addMarker(query)

  googleMapsRef.value.setCenter(query)
})
</script>

<template>
  <ScriptGoogleMaps ref="googleMapsRef" />
</template>
