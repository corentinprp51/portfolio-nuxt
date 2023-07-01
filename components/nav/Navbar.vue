<template>
  <nav
    class="dark:text-white text-gray-900 lg:text-[18px] md:text-base flex items-center text-sm flex justify-center w-full absolute top-[27px] animate__fadeInUp animate__animated"
  >
    <ul
      class="flex justify-end items-center md:gap-[54px] space-x-12 font-normal flex-1 md:mr-[81px] mr-10"
    >
      <li>
        <NuxtLink
          href="/"
          :class="isActiveRoute('') && 'after:w-full'"
          class="after:content-[''] after:block after:w-0 after:h-[1px] dark:after:bg-white after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="#skills"
          :class="isActiveRoute('skills') && 'border-b py-0.5 border-white'"
          class="after:content-[''] after:block after:w-0 after:h-[1px] dark:after:bg-white after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
        >
          Skills
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="#projects"
          :class="isActiveRoute('projects') && 'border-b py-0.5 border-white'"
          class="after:content-[''] after:block after:w-0 after:h-[1px] dark:after:bg-white after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
        >
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="#contact"
          :class="isActiveRoute('contact') && 'after:w-full'"
          class="after:content-[''] after:block after:w-0 after:h-[1px] dark:after:bg-white after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </NuxtLink>
      </li>
      <li>
        <ThemeToggle />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import ThemeToggle from '~/components/form/ThemeToggle.vue'

const route = useRoute()
const isActiveRoute = (hash: string) => {
  return route.hash === `#${hash}` || route.hash === hash
}
</script>

<style scoped>
.animate__animated.animate__fadeInUp {
  --animate-duration: 0.5s;
}
</style>
