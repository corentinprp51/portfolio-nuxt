<template>
  <input
    v-bind="$attrs"
    v-model="modelValue"
    class="bg-black p-4 bg-transparent outline-none focus:outline-none shadow-lg rounded-lg border border-transparent focus:border-black dark:focus:border-[#6893FF]"
  />
</template>

<script lang="ts" setup>
import { useVModel } from '~/composables/useVModel'

const props = defineProps<{ modelValue: string }>()
const modelValue = useVModel<string>(props, 'modelValue')
</script>
