<template>
  <Layout>
    <p class="site-intro">{{$page.settings.description}}</p>
    <div class="gallery">
      <div v-for="(image, index) in $page.settings.content" :key="index" class="gallery-image">
        <img
          v-if="image.asset.url"
          :src="$urlForImage(image, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    description
    content {
      asset {
        url
      }
    }
  }
  posts: allSanityPost(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        slug {
          current
        }
        publishedAt(format: "D. MMMM YYYY")
        lead
        mainImage {
          asset {
            _id
            url
          }
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    }
  }
}

</page-query>

<script>
import PostGrid from '~/components/PostGrid'

export default {
  components: {
    PostGrid
  },
  metaInfo: {
    title: 'Om: Typografi Illustrert'
  }
}
</script>
