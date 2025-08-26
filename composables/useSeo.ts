import { useHead } from '#app'

interface SeoOptions {
  title?: string
  description?: string
  image?: string
  url?: string
}

export const useSeo = (options: SeoOptions = {}) => {
  const defaultTitle = 'veo 3 image to video Generator AI with Realistic Sound'
  const defaultDescription = 'Veo 3 - AI Video Generator with perfect audio synchronization. Create stunning videos with automated sound effects, dialogue, and ambient noise generation.'
   const baseUrl = 'https://www.vidveo3.com'
  // const defaultImage = baseUrl + '/Veo_3_Video_Generator.webp'
  const defaultImage = 'https://resp.vidveo3.com/vidveo/video/Veo_3_Video_Generator.webp'



  const title = options.title || defaultTitle
  const description = options.description || defaultDescription
  const image = options.image || defaultImage
  const url = options.url ? `${baseUrl}${options.url}` : baseUrl

  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: description
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:image',
        content: image
      },
      {
        property: 'og:url',
        content: url
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content: image
      },
      // Keywords
      {
        name: 'keywords',
        content: 'Veo 3, AI video generation, video creator, realistic sound, audio sync, sound effects'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: url
      }
    ]
  })
} 