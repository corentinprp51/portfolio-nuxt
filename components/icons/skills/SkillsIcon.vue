<template>
  <div class="flex flex-col items-center justify-center space-y-1">
    <div class="sm:min-h-[112px] min-h-[40px] flex items-center">
      <slot />
    </div>
    <span
      class="dark:text-blue-200 text-gray-900 text-sm"
      :class="bold ? 'font-bold' : 'font-light'"
    >
      {{ label }}
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ label: string; bold?: boolean }>()
</script>
