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
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
