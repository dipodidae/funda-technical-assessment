<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main>
    <h1>Page not found</h1>
    <button @click="router.back()">
      Back
    </button>
  </main>
</template>
