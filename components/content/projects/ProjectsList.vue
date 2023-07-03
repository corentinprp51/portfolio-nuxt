<template>
  <div
    ref="hidden"
    class="projects-list transition-all duration-1000 px-4 py-16 sm:px-32 flex flex-col md:flex md:flex-row md:flex-wrap md:justify-center md:space-x-10"
  >
    <ProjectCard
      title="Shopping List App"
      class="md:flex-grow md:flex-shrink md:basis-[0px]"
    >
      <div class="mb-12">
        <span class="dark:text-blue-100 text-gray-900 text-base md:text-lg">
          <span class="font-semibold">PWA Web application</span>
          for community
          <span class="font-semibold">shopping lists.</span>
          The application enables connected users to create/join shopping lists
          (friends, family), edit them and add/edit/delete products.
        </span>
      </div>
      <div
        class="absolute bottom-0 p-4 left-0 flex w-full justify-between items-center"
      >
        <div class="flex items-center space-x-2">
          <VueJSIcon class="w-7" />
          <TypeScriptIcon class="w-7" />
          <TailwindCSS class="w-7" />
          <GoogleCloudIcon class="w-7" />
        </div>
        <div>
          <NuxtLink
            to="https://github.com/corentinprp51/shopping-list"
            target="_blank"
          >
            <img
              src="~/assets/github.svg"
              class="hover:scale-125 transition-transform duration-300"
              alt="GITHUB"
              width="28"
              height="28"
            />
          </NuxtLink>
        </div>
      </div>
    </ProjectCard>
    <ProjectCard
      title="Police Tournament App"
      class="sm:mt-0 mt-8 md:flex-grow md:flex-shrink md:basis-[0px]"
    >
      <div class="mb-12">
        <span class="dark:text-blue-100 text-gray-900 text-base md:text-lg">
          Fun
          <span class="font-semibold">PWA Web application</span>
          created as part of
          <span class="font-semibold">a football tournament</span>
          organised by the Reims police force. The application enabled users to
          consult tournament statistics (matches, results, standings) and place
          bets between players.
        </span>
      </div>
      <div
        class="absolute bottom-0 p-4 left-0 flex w-full justify-between items-center"
      >
        <div class="flex items-center space-x-2">
          <VueJSIcon class="w-7" />
          <TypeScriptIcon class="w-7" />
          <TailwindCSS class="w-7" />
          <GoogleCloudIcon class="w-7" />
        </div>
        <div>
          <NuxtLink
            to="https://github.com/corentinprp51/tournoi-police"
            target="_blank"
          >
            <img
              src="~/assets/github.svg"
              class="hover:scale-125 transition-transform duration-300"
              alt="GITHUB"
              width="28"
              height="28"
            />
          </NuxtLink>
        </div>
      </div>
    </ProjectCard>
    <ProjectCard
      title="Football District App "
      class="sm:mt-0 mt-8 md:flex-grow md:flex-shrink md:basis-[0px]"
    >
      <div class="mb-12">
        <span class="dark:text-blue-100 text-gray-900 text-base md:text-lg">
          <span class="font-semibold">PWA Web application</span>
          enabling users to obtain real-time statistics on amateur matches in
          the Grand-Est region of France. The application allows users to
          consult statistics on the various amateur leagues (matches, results,
          rankings).
        </span>
      </div>
      <div
        class="absolute bottom-0 p-4 left-0 flex w-full justify-between items-center"
      >
        <div class="flex items-center space-x-2">
          <VueJSIcon class="w-7" />
          <TypeScriptIcon class="w-7" />
          <TailwindCSS class="w-7" />
          <GoogleCloudIcon class="w-7" />
        </div>
      </div>
    </ProjectCard>
  </div>
</template>

<script lang="ts" setup>
import ProjectCard from '~/components/cards/ProjectCard.vue'
import TailwindCSS from '~/components/icons/TailwindCSSIcon.vue'
import TypeScriptIcon from '~/components/icons/TypeScriptIcon.vue'
import GoogleCloudIcon from '~/components/icons/GoogleCloudIcon.vue'
import { useObserver } from '~/composables/useObserver'
import VueJSIcon from '~/components/icons/VueJSIcon.vue'

const hidden = ref(null)
useObserver(hidden)
</script>
