<template>
  <button
    type="button"
    class="p-2 dark:hover:bg-blue-900/50 hover:bg-gray-300/40 rounded-lg transition-colors duration-200 dark:text-white text-gray-900"
    @click="handleSwitchTheme"
  >
    <Moon v-if="colorMode.value === 'light'" />
    <Sun v-else />
  </button>
</template>

<script lang="ts" setup>
import Moon from '~/components/icons/MoonIcon.vue'
import Sun from '~/components/icons/SunIcon.vue'

const colorMode = useColorMode()
const handleSwitchTheme = () => {
  if (colorMode.value === 'light') {
    // colorMode.value = 'dark'
    colorMode.preference = 'dark'
  } else {
    // colorMode.value = 'light'
    colorMode.preference = 'light'
  }
}
</script>
