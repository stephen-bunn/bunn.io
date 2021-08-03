import anime from "animejs"

declare module 'vue/types/vue' {
  interface Vue {
    $anime: typeof anime
  }
}
