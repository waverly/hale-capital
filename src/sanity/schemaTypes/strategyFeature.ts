import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'strategyFeature',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),

    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
