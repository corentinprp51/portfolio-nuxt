<template>
  <select
    v-model="locale"
    class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
  >
    <option value="fr">Français</option>
    <option value="en">English</option>
  </select>
</template>

<script lang="ts" setup>
const { locale } = useI18n()

onMounted(() => {
  if (localStorage.getItem('locale') !== null) {
    locale.value = localStorage.getItem('locale') || ''
  }
})

watch(
  () => locale.value,
  () => {
    localStorage.setItem('locale', locale.value)
  }
)
</script>
