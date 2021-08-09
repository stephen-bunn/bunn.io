export interface NavigationItem {
  to: string
  icon: string
  label?: string
  target?: string
  disabled?: boolean
}

export interface Navigation {
  internal: NavigationItem[]
  external: NavigationItem[]
}
