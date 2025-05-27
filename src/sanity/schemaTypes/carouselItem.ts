import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carouselItem',
  type: 'object',
  initialValue: {
    type: 'image',
  },
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['image', 'video'],
      },
    }),

    defineField({
      name: 'image',
      type: 'image',
      hidden: ({parent}) => parent.type !== 'image',
    }),

    defineField({
      name: 'video',
      type: 'file',
      hidden: ({parent}) => parent.type !== 'video',
    }),

    defineField({
      name: 'caption',
      type: 'string',
    }),
  ],
})
