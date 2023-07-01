<template>
  <div class="flex">
    <div
      class="flex flex-col space-y-2 absolute right-4 top-4 z-20"
      :class="isActive && 'active'"
      @click="isActive = !isActive"
    >
      <div
        class="w-7 h-0.5 transition-all ease-in-out duration-300 dark:bg-white bg-gray-900"
      ></div>
      <div
        class="w-7 h-0.5 transition-all ease-in-out duration-300 dark:bg-white bg-gray-900"
      ></div>
      <div
        class="w-7 h-0.5 transition-all ease-in-out duration-300 dark:bg-white bg-gray-900"
      ></div>
    </div>
    <div class="absolute top-2 right-16">
      <ThemeToggle />
    </div>
    <transition
      enter-active-class="duration-300 ease-in-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <nav
        v-if="isActive"
        class="absolute top-0 bottom-0 h-screen dark:bg-gradient-to-b dark:from-slate-900 dark:via-gray-900 dark:to-zinc-900 bg-[#F5F6F8] z-10 flex flex-col items-center justify-center w-full px-5 overflow-y-hidden"
      >
        <ul
          class="flex flex-col w-full items-center justify-center dark:text-white text-gray-900 text-4xl space-y-12"
        >
          <li>
            <NuxtLink
              href="/"
              :class="
                isActiveRoute('') &&
                'border-b py-0.5 dark:border-white border-gray-900'
              "
              @click="isActive = !isActive"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="#skills"
              :class="
                isActiveRoute('skills') &&
                'border-b py-0.5 dark:border-white border-gray-900'
              "
              @click="isActive = !isActive"
            >
              Skills
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="#projects"
              :class="
                isActiveRoute('projects') &&
                'border-b py-0.5 dark:border-white border-gray-900'
              "
              @click="isActive = !isActive"
            >
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/#contact"
              href="#contact"
              :class="
                isActiveRoute('contact') &&
                'border-b py-0.5 dark:border-white border-gray-900'
              "
              @click="isActive = !isActive"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import ThemeToggle from '~/components/form/ThemeToggle.vue'

const isActive = ref(false)
const route = useRoute()
const isActiveRoute = (hash: string) => {
  return route.hash === `#${hash}` || route.hash === hash
}
</script>

<style scoped>
.active div:nth-child(2) {
  @apply opacity-0;
}
.active div:nth-child(1) {
  @apply translate-y-2.5 rotate-45;
}
.active div:nth-child(3) {
  @apply -translate-y-2.5 -rotate-45;
}
</style>
