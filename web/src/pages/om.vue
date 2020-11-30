<template>
  <IndexLayout>
    <div class="about-content">
      <BlockContent
        :blocks="$page.settings._rawDescription"
        v-if="$page.settings._rawDescription"
      />
    </div>
    <div class="gallery">
      <div v-for="(image, index) in $page.settings.content" :key="index" class="gallery-image">
        <img
          v-if="image.asset.url"
          :src="$urlForImage(image, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </div>
    </div>
    <div class="bio">
      <div class="bio-text">
        <BlockContent
          :blocks="$page.settings._rawBio"
          v-if="$page.settings._rawBio"
        />
      </div>
      <img
        v-if="$page.settings.portrait"
        :src="$urlForImage($page.settings.portrait, $page.metadata.sanityOptions).width(600).auto('format').url()"
        class="bio-image"
      />
    </div>
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
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    lead
    _rawDescription
    content {
      asset {
        url
      }
    }
    portrait {
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
    _rawBio
  }
}

</page-query>

<script>
import IndexLayout from '~/layouts/Index'
import PostGrid from '~/components/PostGrid'
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    IndexLayout,
    PostGrid,
    BlockContent
  },
  metaInfo: {
    title: 'Om: Typografi Illustrert'
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';
.about-content {
  grid-column: 1 / span 10;
}
.gallery {
  grid-column: 1 / span 10;
  margin: var(--space) 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: var(--space);
}
@media (max-width: $media-m) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
.bio {
  grid-column: 1 / span 10;
  margin: var(--space) 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: var(--space);
  p {
    opacity: .6;
  }
  &-text {
    grid-column: 1 / span 1;
  }
  &-image {
    grid-column: 2 / span 1;
  }
}
</style>
