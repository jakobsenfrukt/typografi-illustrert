<template>
  <Layout :show-logo="false">
    <!-- Designer intro -->
    <designer-card :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <post-card
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
        :metadata="$page.metadata"
      />
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
          caption
          alt
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
import DesignerCard from '~/components/DesignerCard'
import PostCard from '~/components/PostCard'

export default {
  components: {
    DesignerCard,
    PostCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
