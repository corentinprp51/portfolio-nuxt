<template>
  <footer
    class="p-4 bg-transparent absolute bottom-0 w-full shadow-lg dark:text-blue-50 text-sky-950 flex flex-col items-center border-t dark:border-blue-500/40 border-gray-900 space-y-2"
  >
    <div class="flex justify-center flex-wrap">
      Made by
      <HeartIcon class="w-5 mx-1" />
      with Nuxt.js, TypeScript and TailwindCSS
    </div>
    <div>
      <span class="font-semibold">Corentin Parpette</span>
      © 2023
    </div>
  </footer>
</template>

<script lang="ts" setup>
import HeartIcon from '~/components/icons/HeartIcon.vue'
</script>
