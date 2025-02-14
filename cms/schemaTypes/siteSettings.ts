import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Site Name',
      type: 'string',
      group: 'overview',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      group: 'overview',
    }),

    defineField({
      name: 'shareImage',
      title: 'Default Social Share Image',
      type: 'image',
      group: 'overview',
      description: '1600x900 pixels',
    }),

    defineField({
      name: 'address',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({parent}) => parent.metadata?.slug?.current !== 'contact',
    }),

    defineField({
      name: 'phoneNumber',
      type: 'string',
      hidden: ({parent}) => parent.metadata?.slug?.current !== 'contact',
    }),

    defineField({
      name: 'email',
      type: 'string',
      hidden: ({parent}) => parent.metadata?.slug?.current !== 'contact',
    }),
  ],
})
