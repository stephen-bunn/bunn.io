/** Describes metadata for a given post. */
export interface PostMetadata {
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
  imageUrl?: string
  /** The post's default display image alternate text. */
  imageAlt?: string
  /** The post's stage. */
  stage?: string
}

/** Describes the plot for a given post. */
export interface PostPlot {
  /** The display name of the plot. */
  name: string
  /** The absolute href of the plot. */
  href: string
}

/** A post within a plot. */
export interface Post {
  /** The post's plot. */
  plot: PostPlot
  /** The post's display title. */
  title: string
  /** The post's published date. */
  published: Date
  /** The post's updated date. */
  updated: Date
  /** The post's tags. */
  tags: string[]
  /** The absolute href of the post. */
  href: string
  /** Any metadata associated to the post. */
  metadata?: PostMetadata
  /** The rendered and sanitized HTML of the post. */
  content?: string
}
