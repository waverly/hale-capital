import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'transactionType',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
