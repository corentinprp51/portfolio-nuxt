<template>
  <div class="flex justify-center w-full">
    <form
      class="flex flex-col w-full"
      @submit.prevent="handleSubmitForm"
    >
      <div class="flex flex-col sm:flex-row gap-4 w-full">
        <InputGeneric
          v-model="contactForm.firstName"
          type="text"
          class="flex-1"
          placeholder="First Name"
        />
        <InputGeneric
          v-model="contactForm.lastName"
          type="text"
          class="flex-1"
          placeholder="Last Name"
        />
      </div>
      <InputGeneric
        v-model="contactForm.email"
        type="email"
        class="mt-4"
        placeholder="Email address"
      />
      <TextAreaGeneric
        v-model="contactForm.message"
        class="mt-4"
      />
      <ButtonGeneric class="mt-4">Submit</ButtonGeneric>
    </form>
  </div>
</template>

<script lang="ts" setup>
import InputGeneric from '~/components/form/inputs/InputGeneric.vue'
import ButtonGeneric from '~/components/buttons/ButtonGeneric.vue'
import TextAreaGeneric from '~/components/form/inputs/TextAreaGeneric.vue'
import { useLoadingStore } from '~/store/loadingStore'
import ToastesService from '~/services/ToastesService'

type ContactForm = {
  firstName: string
  lastName: string
  message: string
  email: string
}

const contactForm: ContactForm = reactive({
  firstName: '',
  lastName: '',
  message: '',
  email: ''
})
const { setLoaderApp } = useLoadingStore()

const postSendMail = async () => {
  await fetch('/api/send-mail', {
    method: 'POST',
    body: JSON.stringify(contactForm)
  })
}

const handleSubmitForm = async () => {
  setLoaderApp(true)
  try {
    await postSendMail()
    contactForm.firstName = ''
    contactForm.lastName = ''
    contactForm.email = ''
    contactForm.message = ''
    ToastesService.getInstance().success('E-mail envoyé avec succès')
  } catch (err) {
    ToastesService.getInstance().error('Une erreur est survenue')
  } finally {
    setLoaderApp(false)
  }
}
</script>
