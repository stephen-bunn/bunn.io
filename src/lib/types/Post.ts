import type { Component } from 'svelte'
import type { MetaTagsProps } from 'svelte-meta-tags'

export type PostMetadata = Readonly<{
  /** The post's title. */
  title?: string
  /** The post's published date. */
  published?: string
  /** The post's updated date. */
  updated?: string
  /** The post's description. */
  description?: string
  /** The post's tags. */
  tags?: string[]
  /** The post's default display image URL. */
  imageSrc?: string
  /** The post's default display image alternate text. */
  imageAlt?: string
}>

export type Post = Readonly<{
  /** The post's display title. */
  title: string
  /** The post's tags. */
  tags: string[]
  /** The absolute href of the post. */
  href: string
  /** The post's published date. */
  published?: Date
  /** The post's updated date. */
  updated?: Date
  /** Any metadata associated to the post. */
  metadata?: PostMetadata
  /** The Svelte component of the post. */
  component: Component
}>

export type PostContentImport = {
  metadata?: PostMetadata
  default: Component
}

/** Describes the page load for a given post. */
export type PostPageLoad = Readonly<{
  post: Post
  pageMetaTags: MetaTagsProps
  postComponent: Component
}>
