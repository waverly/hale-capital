import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioCompany',
  type: 'document',
  preview: {
    select: {
      title: 'metadata.title',
      subtitle: 'publishDate',
      media: 'metadata.image',
    },
  },
  initialValue: {
    current: 'current',
  },
  fields: [
    defineField({
      name: 'metadata',
      type: 'metadata',
    }),

    defineField({
      name: 'current',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['current', 'past'],
      },
    }),

    defineField({
      name: 'type',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          {value: 'federalMarkets', title: 'Federal Markets'},
          {value: 'directLending', title: 'Direct Lending'},
          {value: 'growthEquity', title: 'Growth Equity'},
          {value: 'privateEquity', title: 'Private Equity'},
          {value: 'all', title: 'All'},
        ],
      },
    }),

    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'logo',
      type: 'image',
    }),

    defineField({
      name: 'blackLogo',
      type: 'image',
    }),

    defineField({
      name: 'image',
      title: 'background image',
      type: 'image',
    }),
  ],
})
