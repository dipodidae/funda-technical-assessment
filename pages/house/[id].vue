<script setup lang="ts">
const id = useRouter().currentRoute.value.params.id

const { data } = await useFetch(`/api/houses/${id}`)
</script>

<template>
  <article>
    <header>
      <h1>Huis {{ id }}</h1>
    </header>
    <main>
      <pre>
        {{ JSON.stringify(data, null, 2) }}
      </pre>
    </main>
  </article>
</template>
