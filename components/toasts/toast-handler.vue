<template>
  <transition-group
    name="fade"
    tag="div"
    class="fixed top-0 left-1/2 w-full -translate-x-1/2 z-50"
  >
    <component
      :is="toastMessage.component"
      v-for="(toastMessage, index) in toastsMessages"
      :key="index"
      :message="toastMessage.message"
      :style="index === 0 ? `top: 15px` : `top: ${index * 80}px`"
      class="overflow-hidden w-[80%]"
      @close-toast="closeToast(index)"
    />
  </transition-group>
</template>

<script lang="ts" setup>
import ToastesService from '~/services/ToastesService'

const toastsMessages = ToastesService.getInstance().components
const closeToast = (index: number) => {
  toastsMessages.value.splice(index, 1)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-500;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
