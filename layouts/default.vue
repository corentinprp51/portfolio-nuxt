<template>
  <div
    class="min-h-screen dark:bg-gradient-to-b dark:from-slate-900 dark:via-gray-900 dark:to-zinc-900 relative bg-sky-100/40"
  >
    <transition
      enter-active-class="duration-300 ease-in-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <LoadingPage v-if="loadingStore.isLoading" />
    </transition>
    <toast-handler />
    <header class="w-full">
      <Navbar class="hidden sm:flex" />
      <ResponsiveMenu class="sm:hidden flex" />
    </header>
    <slot />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import Navbar from '~/components/nav/Navbar.vue'
import ResponsiveMenu from '~/components/nav/ResponsiveMenu.vue'
import { useLoadingStore } from '~/store/loadingStore'
import LoadingPage from '~/components/loader/LoadingPage.vue'
import ToastHandler from '~/components/toasts/toast-handler.vue'
import Footer from '~/components/content/page-content/Footer.vue'

const loadingStore = useLoadingStore()

// Edit body style with Nuxt composable
useHead({
  bodyAttrs: {
    class: computed(() => {
      if (loadingStore.isLoading) return 'overflow-hidden'

      return ''
    })
  }
})
</script>
