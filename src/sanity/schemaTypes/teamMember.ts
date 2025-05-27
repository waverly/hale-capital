import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'jobTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'headShot',
      type: 'image',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'bio',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'role',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['team', 'operations'],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
