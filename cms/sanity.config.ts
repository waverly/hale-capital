import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {linkField} from 'sanity-plugin-link-field'

export default defineConfig({
  name: 'default',
  title: 'Hale Capital',

  projectId: 'jmaxb3yn',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), linkField()],

  schema: {
    types: schemaTypes,
  },
})
