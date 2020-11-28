export default {
  name: 'designer',
  type: 'document',
  title: 'Designer',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slugen fungerer som en unik ID til denne designeren. Den bør være kort og kan ikke inneholde spesialtegn eller mellomrom.',
      validation: Rule => Rule.error('Slug er obligatorisk.').required(),
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio'
    },
    {
      name: 'website',
      type: 'string',
      title: 'Nettside URL'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
