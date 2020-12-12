<template>
  <IndexLayout>
    <PostGrid :posts="$page.posts.edges" :meta="$page.metadata" showMenu />
  </IndexLayout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost(sortBy: "title", order: ASC) {
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
        designers {
          designer {
            name
            bio
            image {
              asset {
                _id
                url
              }
              hotspot {
                x
                y
                width
                height
              }
              crop {
                top
                left
                right
                bottom
              }
            }
          }
        }
      }
    }
  }
}

</page-query>

<script>
import IndexLayout from '~/layouts/Index'
import PostGrid from '~/components/PostGrid'
import Intro from '~/components/Intro'

export default {
  components: {
    IndexLayout,
    PostGrid,
    Intro
  }
}
</script>
