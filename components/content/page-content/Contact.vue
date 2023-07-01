<template>
  <div
    id="contact"
    class="min-h-screen dark:text-white text-gray-900 pt-4 flex flex-col items-center"
  >
    <HeadingTitle>Contact</HeadingTitle>
    <ContactForm class="mt-10 py-16 px-4 w-full sm:w-[80%] lg:w-[50%]" />
  </div>
</template>

<script lang="ts" setup>
import HeadingTitle from '~/components/text/HeadingTitle.vue'
import ContactForm from '~/components/form/ContactForm.vue'
</script>
