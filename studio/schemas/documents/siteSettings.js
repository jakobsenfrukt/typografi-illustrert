export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Om prosjektet',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
      description: 'Brukes også i Google søkeresultat og når nettsiden deles på sosiale medier.'
    }
  ]
}
