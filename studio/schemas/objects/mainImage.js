export default {
  name: 'mainImage',
  type: 'image',
  title: 'Bilde',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Bildetekst',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativ tekst',
      description: 'Beskriv hva bildet viser. Viktig for universell utforming og SEO.',
      validation: Rule => Rule.error('Du må fylle ut alternativ tekst.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
