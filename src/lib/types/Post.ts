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
}>

/** Describes the JSON representation of a post. */
export type PostJson = Readonly<{
  /** The post's title. */
  title: string
  /** The post's tags. */
  tags: string[]
  /** The post's absolute href. */
  href: string
  /** The post's published date. */
  published?: string
  /** The post's updated date. */
  updated?: string
  /** Any metadata associated to the post. */
  metadata?: PostMetadata
}>

/** Describes the import of a post's content. */
export type PostContentImport = {
  /** The post's metadata */
  metadata?: PostMetadata
  /** The post's Svelte component */
  default: Component
}

/** Describes the page load for a given post. */
export type PostPageLoad = Readonly<{
  post: Post
  pageMetaTags: MetaTagsProps
  postComponent: Component
}>
