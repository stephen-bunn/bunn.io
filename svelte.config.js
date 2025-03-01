import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import remarkFootnotes from 'remark-footnotes'
import remarkSectionize from 'remark-sectionize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svelte.md', '.md', '.svx'],
      smartypants: {
        quotes: true,
        ellipses: true,
        backticks: true,
        dashes: 'oldschool'
      },
      remarkPlugins: [remarkSectionize, remarkFootnotes],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            content: {
              // https://lucide.dev/icons/section
              type: 'element',
              tagName: 'svg',
              properties: {
                focusable: 'false',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                fill: 'none',
                'stroke-width': '2',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                class: 'icon icon-section'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    d: 'M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0'
                  }
                },
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    d: 'M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0'
                  }
                }
              ]
            }
          }
        ],
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            content: {
              // https://lucide.dev/icons/external-link
              type: 'element',
              tagName: 'svg',
              properties: {
                'aria-hidden': 'true',
                focusable: 'false',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                fill: 'none',
                'stroke-width': '2',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                class: 'icon icon-external-link'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'path',
                  properties: { d: 'M15 3h6v6' }
                },
                {
                  type: 'element',
                  tagName: 'path',
                  properties: { d: 'M10 14 21 3' }
                },
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
                  }
                }
              ]
            }
          }
        ]
      ]
    })
  ],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    })
  },
  extensions: ['.svelte', '.svx']
}

export default config
