export interface PostMetadata {
  title?: string
  published?: string
  description?: string
}

export interface Post {
  slug: string
  metadata?: PostMetadata
}
