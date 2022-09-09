export const useScrollDepth = () => {
  const scrollDepth = ref(0)
  const isBelowFold = ref(false)

  const updateScrollDepth = (_: Event) => {
    scrollDepth.value =
      (document.documentElement.scrollTop || document.body.scrollTop) /
      ((document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight)

    isBelowFold.value =
      (document.documentElement.scrollTop || document.body.scrollTop) >
      document.documentElement.clientHeight
  }

  onMounted(() => window.addEventListener('scroll', updateScrollDepth))
  onUnmounted(() => window.removeEventListener('scroll', updateScrollDepth))

  return { scrollDepth, isBelowFold }
}
