export default {
  name: 'designerReference',
  type: 'object',
  title: 'Designer reference',
  fields: [
    {
      name: 'designer',
      type: 'reference',
      to: [
        {
          type: 'designer'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'designer.name',
      media: 'designer.image.asset'
    }
  }
}
