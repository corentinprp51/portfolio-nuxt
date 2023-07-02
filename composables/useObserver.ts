import { Ref } from 'vue'

export const useObserver = (element: Ref<HTMLElement | null>) => {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up')
        }
        // else {
        //   className.value = 'opacity-0 translate-y-[50%]'
        // }
      })
    })
    if (element.value?.children && element.value.children.length > 0) {
      for (let i = 0; i < element.value.children.length; i++) {
        observer.observe(element.value.children.item(i) as Element)
      }
    }
  })
}
