<template>
  <Layout>
    <div class="post">
      <div class="post-header">
        <div class="post-header__text">
          <h1 class="post-title">{{ $page.post.title }}</h1>
          <blockquote class="definition" v-if="$page.post.definition">{{ $page.post.definition }}</blockquote>
          <h2>{{ $page.post.designers[0].designer.name }} om {{ $page.post.title }}</h2>
          <BlockContent
            class="post__content"
            :blocks="$page.post._rawBody"
            v-if="$page.post._rawBody"
          />
        </div>
        <img
          v-if="$page.post.mainImage"
          :src="$urlForImage($page.post.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </div>
    </div>

    <Designer v-if="$page.post.designers[0]" :designer="$page.post.designers[0].designer" />

    <div class="related">
      <PostGrid :posts="$page.posts.edges" :meta="$page.metadata" />
    </div>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'
import Designer from '~/components/Designer'
import PostGrid from '~/components/PostGrid'

export default {
  components: {
    Designer,
    BlockContent,
    PostGrid
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  post: sanityPost (id: $id) {
    title
    publishedAt (format: "D. MMMM YYYY")
    lead
    definition
    _rawBody
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

<style lang="scss">
.post {
  &-header {
    display: flex;
    img {
      width: 50%;
      flex: none;
    }

    &:empty {
      display: none;
    }
  }
  &-title {
    font-size: 4rem;
    font-weight: 900;
  }

  &__content {
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.definition {
  max-width: 40rem;
  font-size: 1.2rem;
}
</style>
