<template>
  <Layout>
    <div class="post">
      <div class="post-text">
        <h1 class="post-title">{{ $page.post.title }}</h1>
        <blockquote class="definition" v-if="$page.post.definition">{{ $page.post.definition }}</blockquote>
        <h2>{{ $page.post.designers[0].designer.name }} om {{ $page.post.title }}</h2>
        <BlockContent
          class="post-content"
          :blocks="$page.post._rawBody"
          v-if="$page.post._rawBody"
        />
      </div>
      <img
        v-if="$page.post.mainImage"
        :src="$urlForImage($page.post.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        class="post-image"
      />
    </div>

    <Designer v-if="$page.post.designers[0]" :designer="$page.post.designers[0].designer" />

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
  margin: 0;
  grid-column: 1 / span 10;
  display: grid;
  grid-gap: var(--space);
  grid-template-columns: repeat(10, 1fr);

  &-image {
    grid-column: 6 / span 5;
  }

  &-text {
    grid-column: 1 / span 5;
  }

  &:empty {
    display: none;
  }
  &-title {
    font-size: 4rem;
    font-weight: 900;
  }

  &-content {
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }

  blockquote {
    margin: 3rem 0 6rem;
    font-size: 1.6rem;
    line-height: 1.4;
  }
}

.definition {
  max-width: 40rem;
  font-size: 1.2rem;
}
</style>
