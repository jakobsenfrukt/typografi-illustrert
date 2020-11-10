import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Term',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Typografisk begrep'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slug er obligatorisk og blir endelsen på URLen som går direkte til denne begrepssiden.',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publisert'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Hovedbilde'
    },
    {
      name: 'lead',
      type: 'text',
      title: 'Ingress',
      description:
        'Brukes på oversiktssiden, når siden vises i Google-søk, og når den deles i sosiale medier.'
    },
    {
      name: 'definition',
      type: 'text',
      title: 'Definisjon'
    },
    {
      name: 'designers',
      title: 'Designere',
      type: 'array',
      of: [
        {
          type: 'designerReference'
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Designer om begrepet'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
