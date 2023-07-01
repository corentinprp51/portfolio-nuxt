<template>
  <div
    ref="hidden"
    :class="className"
    class="skills-list px-4 py-16 transition-all duration-1000 sm:px-32 flex flex-col md:flex md:flex-row md:flex-wrap md:justify-center md:space-x-10"
  >
    <SkillCard
      title="Front-End"
      class="md:flex-grow md:flex-shrink md:basis-[0px]"
    >
      <SkillsIcon
        label="Vue.js"
        bold
      >
        <VueJSIcon class="w-10" />
      </SkillsIcon>
      <SkillsIcon
        label="TypeScript"
        bold
      >
        <TypeScriptIcon class="w-10" />
      </SkillsIcon>
      <SkillsIcon
        label="TailwindCSS"
        bold
      >
        <TailwindCSS class="w-10" />
      </SkillsIcon>
      <SkillsIcon label="React.js"><React class="w-10" /></SkillsIcon>
      <SkillsIcon
        label="Next.js"
        bold
      >
        <NextJS class="w-24" />
      </SkillsIcon>
      <SkillsIcon label="Nuxt.js"><NuxtJS class="w-24" /></SkillsIcon>
    </SkillCard>
    <SkillCard
      title="Back-End"
      class="mt-8 md:mt-0 md:flex-grow md:flex-shrink md:basis-[0px]"
    >
      <SkillsIcon
        label="Adonis.js"
        bold
      >
        <AdonisJS class="w-16 min-h-[65px] sm:min-h-[112px]" />
      </SkillsIcon>
      <SkillsIcon
        label="Algolia"
        bold
      >
        <Algolia class="w-28 sm:min-h-[112px] min-h-[65px]" />
      </SkillsIcon>
      <SkillsIcon label="Laravel">
        <Laravel class="w-16 sm:min-h-[112px] min-h-[65px]" />
      </SkillsIcon>
      <SkillsIcon
        label="Commerce Tools"
        bold
      >
        <CommerceTools class="w-28 sm:min-h-[112px] min-h-[65px]" />
      </SkillsIcon>
    </SkillCard>
    <SkillCard
      title="Others"
      class="mt-8 md:mt-0 md:flex-grow md:flex-shrink md:basis-[0px]"
    >
      <GoogleCloud class="w-32" />
      <GitLogo class="w-20" />
      <Docker class="w-20" />
      <FigmaIcon class="w-32" />
      <VercelIcon class="w-28" />
    </SkillCard>
  </div>
</template>

<script lang="ts" setup>
import SkillCard from '~/components/cards/SkillCard.vue'
import SkillsIcon from '~/components/icons/skills/SkillsIcon.vue'
import TailwindCSS from '~/components/icons/TailwindCSSIcon.vue'
import React from '~/components/icons/ReactIcon.vue'
import NextJS from '~/components/icons/NextJSIcon.vue'
import NuxtJS from '~/components/icons/NuxtJSIcon.vue'
import TypeScriptIcon from '~/components/icons/TypeScriptIcon.vue'
import AdonisJS from '~/components/icons/AdonisJSIcon.vue'
import CommerceTools from '~/components/icons/CommerceToolsIcon.vue'
import Algolia from '~/components/icons/AlgoliaIcon.vue'
import Laravel from '~/components/icons/LaravelIcon.vue'
import GoogleCloud from '~/components/icons/GoogleCloud.vue'
import GitLogo from '~/components/icons/GitIcon.vue'
import Docker from '~/components/icons/DockerIcon.vue'
import FigmaIcon from '~/components/icons/FigmaIcon.vue'
import VercelIcon from '~/components/icons/VercelIcon.vue'
import { useObserver } from '~/composables/useObserver'
import VueJSIcon from '~/components/icons/VueJSIcon.vue'

const hidden = ref<HTMLElement | null>(null)
const { className } = useObserver(hidden)
</script>
