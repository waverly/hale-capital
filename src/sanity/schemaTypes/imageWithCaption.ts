import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageWithCaption',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),

    defineField({
      name: 'alt',
      type: 'string',
    }),

    defineField({
      name: 'caption',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
