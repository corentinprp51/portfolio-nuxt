import { Ref } from 'vue'

export const useObserver = (element: Ref<HTMLElement | null>) => {
  const className = ref('opacity-0 translate-y-[50%]')
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          className.value = 'opacity-100 translate-y-0'
        }
        // else {
        //   className.value = 'opacity-0 translate-y-[50%]'
        // }
      })
    })
    if (element.value) observer.observe(element.value)
  })
  return {
    className
  }
}
