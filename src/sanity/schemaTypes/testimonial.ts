import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'statement',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
