<template>
  <div class="min-h-screen dark:text-white text-gray-900">
    <div
      id="skills"
      class="pt-4"
    >
      <HeadingTitle>Skills</HeadingTitle>
      <SkillsList />
    </div>
    <div
      id="projects"
      class="pt-4"
    >
      <HeadingTitle>Projects</HeadingTitle>
      <ProjectsList />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeadingTitle from '~/components/text/HeadingTitle.vue'
import SkillsList from '~/components/content/skills/SkillsList.vue'
import ProjectsList from '~/components/content/projects/ProjectsList.vue'
</script>
