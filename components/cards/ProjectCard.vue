<template>
  <div class="rounded-lg shadow-lg relative">
    <div
      class="text-3xl text-gray-900 bg-blue-500/10 font-normal text-center dark:bg-blue-900/30 rounded-t-lg py-6"
    >
      <span class="title-gradient">
        {{ title }}
      </span>
    </div>
    <div class="px-6 py-8">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<style scoped>
.title-gradient {
  @apply dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-pink-400  dark:to-cyan-300;
}
</style>
