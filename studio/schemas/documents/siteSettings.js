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
      name: 'lead',
      type: 'text',
      title: 'Ingress',
      description: 'Brukes også i Google søkeresultat og når nettsiden deles på sosiale medier.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Brødtekst'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Prosessgalleri',
      of: [
        {
          type: 'mainImage',
          title: 'Bilde'
        }
      ]
    },
    {
      name: 'portrait',
      type: 'mainImage',
      title: 'Portrett'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Bio'
    },
    {
      name: 'footer',
      type: 'bioPortableText',
      title: 'Bunntekst (footer)'
    }
  ]
}
