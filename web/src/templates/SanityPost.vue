<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.post.title }}</h1>
    </div>

    <blockquote v-if="$page.post.definition">{{ $page.post.definition }}</blockquote>

    <Designer v-if="$page.post.designers[0]" :designer="$page.post.designers[0].designer" />

    <div class="post">
      <div class="post__header">
        <img
          alt="Cover image"
          v-if="$page.post.mainImage"
          :src="$urlForImage($page.post.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </div>

      <block-content
        class="post__content"
        :blocks="$page.post._rawBody"
        v-if="$page.post._rawBody"
      />
    </div>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'
import Designer from '~/components/Designer'

export default {
  components: {
    Designer,
    BlockContent
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
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  &__header {

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
</style>
