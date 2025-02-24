import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  preview: {
    select: {
      title: 'metadata.title',
      subtitle: 'publishDate',
      media: 'metadata.image',
    },
  },

  fields: [
    defineField({
      name: 'metadata',
      type: 'metadata',
    }),

    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({parent}) => parent.metadata?.slug?.current === 'home',
    }),

    defineField({
      name: 'sidebar',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({parent}) => parent.metadata?.slug?.current === 'home',
    }),

    defineField({
      name: 'banner',
      type: 'imageWithCaption',
      hidden: ({parent}) => parent.metadata?.slug?.current === 'home',
    }),

    defineField({
      name: 'carousel',
      type: 'array',
      of: [{type: 'carouselItem'}],
      hidden: ({parent}) => parent.metadata?.slug?.current !== 'home',
    }),

    defineField({
      name: 'teamTagline',
      title: 'Team Header',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({parent}) => parent.metadata?.slug?.current !== 'about-us',
    }),

    defineField({
      name: 'team',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'teamMember'}]}],
      hidden: ({parent}) => parent.metadata?.slug?.current !== 'about-us',
    }),

    defineField({
      name: 'strategyFeatures',
      type: 'array',
      of: [{type: 'strategyFeature'}],
      hidden: ({parent}) =>
        ['home', 'contact-us', 'about-us', 'portfolio', 'news'].includes(
          parent.metadata?.slug?.current
        ),
    }),

    defineField({
      name: 'transactionTypes',
      type: 'array',
      of: [{type: 'transactionType'}],
      hidden: ({parent}) =>
        ['home', 'contact-us', 'about-us', 'portfolio', 'news'].includes(
          parent.metadata?.slug?.current
        ),
    }),
  ],
})
