import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Site Name',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    defineField({
      name: 'shareImage',
      title: 'Default Social Share Image',
      type: 'image',
      description: '1600x900 pixels',
    }),

    defineField({
      name: 'address',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'phoneNumber',
      type: 'string',
    }),

    defineField({
      name: 'email',
      type: 'string',
    }),
  ],
})
