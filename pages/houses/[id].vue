<script setup lang="ts">
const route = useRoute()

const { data } = await useFetch(`/api/houses/${route.params.id}`)
</script>

<template>
  <article>
    <header>
      <h1>Huis</h1>
    </header>
    <main>
      <pre>
        {{ JSON.stringify(route, null, 2) }}
      </pre>
      <pre>
        {{ JSON.stringify(data, null, 2) }}
      </pre>
    </main>
  </article>
</template>
