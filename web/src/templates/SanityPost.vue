<template>
  <Layout>
    <div class="post">
      <div class="post-header">
        <div class="post-header__text">
          <h1 class="post-title">{{ $page.post.title }}</h1>
          <blockquote class="definition" v-if="$page.post.definition">{{ $page.post.definition }}</blockquote>
        </div>
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

    <Designer v-if="$page.post.designers[0]" :designer="$page.post.designers[0].designer" />

    <div class="related">
      <h2>Andre begreper</h2>
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
.post {
  &-header {
    display: flex;
    img {
      width: 100%;
      max-width: 600px;
    }

    &:empty {
      display: none;
    }
  }
  &-title {
    font-size: 4rem;
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

.definition {
  max-width: 40rem;
  font-size: 1.2rem;
}
</style>
