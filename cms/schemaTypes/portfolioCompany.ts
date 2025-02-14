import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioCompany',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
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
        layout: 'radio',
        list: ['privateequity', 'directlending', 'both'],
      },
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
