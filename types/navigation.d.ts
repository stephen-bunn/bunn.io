import { NavigationPlugin } from '@/plugins/navigation'

declare module 'vue/types/vue' {
  interface Vue {
    $navigation: NavigationPlugin
  }
}
