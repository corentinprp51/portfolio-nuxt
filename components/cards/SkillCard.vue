<template>
  <div class="rounded-lg shadow-lg">
    <div
      class="title text-2xl dark:text-blue-200 text-gray-900 bg-blue-500/10 font-normal text-center dark:bg-blue-900/30 rounded-t-lg py-2"
    >
      {{ title }}
    </div>
    <div
      class="flex mt-8 flex-wrap items-center justify-center gap-x-8 gap-y-8 pb-8"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>()
</script>
