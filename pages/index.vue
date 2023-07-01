<template>
  <div>
    <MainPage />
    <SkillsProjects />
    <Contact />
  </div>
</template>

<script lang="ts" setup>
import MainPage from '~/components/content/page-content/MainPage.vue'
import SkillsProjects from '~/components/content/page-content/SkillsProjects.vue'
import Contact from '~/components/content/page-content/Contact.vue'

useHead({
  title: 'Corentin Parpette • Software Engineer'
})
</script>
