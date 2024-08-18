<template>
  <main>
    <nav class="border-b border-b-teal-300 bg-teal-950 p-4">
      <ul class="flex gap-4">
        <li>
          <ULink to="/">
            Home
          </ULink>
        </li>
        <li>
          <ULink to="/houses">
            Houses
          </ULink>
        </li>
      </ul>
    </nav>
    <div>
      <slot />
    </div>
  </main>
</template>
