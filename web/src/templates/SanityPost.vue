<template>
  <Layout>
    <div class="post" :class="{zoom: zoom}">
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
      <div class="post-image" @click="zoom = !zoom">
        <img
          v-if="$page.post.mainImage"
          :src="$urlForImage($page.post.mainImage, $page.metadata.sanityOptions).width(1200).auto('format').url()"
        />
        <div class="zoom-text">Klikk for å forstørre</div>
      </div>
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
  data() {
    return {
      zoom: false
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          key: 'description',
          content: this.$page.post.definition
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
  position: relative;

  &-image {
    grid-column: 6 / span 5;
    padding-top: 145%;
    img {
      cursor: zoom-in;
      position: absolute;
      width: calc(50% - 1rem);
      right: 0;
      top: 0;
      z-index: 1000;
      transition: all .2s ease-in-out;
      box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    }
  }

  &.zoom {
    .post-image {
      img {
        cursor: zoom-out;
        width: 100%;
      }
    }
    .post-text {
      padding-top: 310%;
    }
  }
  .zoom-text {
    text-align: right;
    opacity: .6;
    cursor: zoom-in;
    &:after {
      content: "🔍";
      display: inline-block;
      margin-left: .5rem;
    }
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
    font-size: 1.2rem;
    p {
      font-size: 1.2rem;
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }

  blockquote {
    margin: 4rem 0 5rem;
    font-size: 1.4rem;
    line-height: 1.4;
    padding-left: 2rem;
    border-left: 6px solid crimson;
  }
}
@media (max-width: 800px) {
  .post {
    grid-template-columns: 1fr;
    &-image {
      position: relative;
      grid-column: span 1;
      order: 1;
      img {
        width: 100%;
        cursor: default;
      }
    }
    &-text {
      grid-column: span 1;
      order: 2;
    }
    &.zoom {
      .post-image {
        img {
          cursor: default;
          width: 100%;
        }
      }
      .post-text {
        padding-top: 0;
      }
    }
  }
}
</style>
