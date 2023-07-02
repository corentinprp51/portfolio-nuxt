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

useSeoMeta({
  title: 'Corentin Parpette • Software Engineer',
  description:
    'Portfolio of Corentin Parpette, 22-year-old working software engineer',
  author: 'Corentin Parpette'
})
</script>
