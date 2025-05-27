import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsEntry',
  type: 'document',
  preview: {
    select: {
      title: 'metadata.title',
      subtitle: 'date',
      media: 'metadata.image',
    },
  },

  fields: [
    defineField({
      name: 'metadata',
      type: 'metadata',
    }),

    defineField({
      name: 'date',
      type: 'date',
    }),

    defineField({
      name: 'excerpt',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'link',
      type: 'link',
    }),

    defineField({
      name: 'pressRelease',
      type: 'file',
    }),
  ],
})
