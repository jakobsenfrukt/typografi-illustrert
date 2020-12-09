<template>
  <IndexLayout>
    <div class="about-content">
      <BlockContent
        :blocks="$page.settings._rawDescription"
        v-if="$page.settings._rawDescription"
      />
    </div>
    <VueMasonryWall :items="$page.settings.content" :options="options" class="gallery">
      <template v-slot:default="{item}">
        <img
          v-if="item.asset.url"
          :src="$urlForImage(item, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </template>
    </VueMasonryWall>
    <div class="bio">
      <div class="bio-text">
        <BlockContent
          :blocks="$page.settings._rawBio"
          v-if="$page.settings._rawBio"
        />
      </div>
      <figure class="bio-image">
        <img
          v-if="$page.settings.portrait"
          :src="$urlForImage($page.settings.portrait, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
        <figcaption>Foto: {{$page.settings.portrait.credit}}</figcaption>
      </figure>
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
      credit
    }
    _rawBio
  }
}

</page-query>

<script>
import IndexLayout from '~/layouts/Index'
import PostGrid from '~/components/PostGrid'
import BlockContent from '~/components/BlockContent'
import VueMasonryWall from 'vue-masonry-wall';

export default {
  components: {
    IndexLayout,
    PostGrid,
    BlockContent,
    VueMasonryWall
  },
  metaInfo: {
    title: 'Om: Typografiske begreper illustrert'
  },
  data() {
    return {
      options: {
        width: 540,
        padding: {
          default: 12,
          1: 6,
          2: 8
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';
.about-content {
  grid-column: 1 / span 10;
  font-size: 1.4rem;
  margin: 0 0 var(--space) 0;
}
.gallery {
  grid-column: 1 / span 10;
  margin: var(--space) 0;

}
.bio {
  grid-column: 1 / span 10;
  margin: var(--space) 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: var(--space);
  align-items: center;
  p {
    opacity: .8;
    font-size: 1.2rem;

    &:first-of-type {
      &:first-letter {
        color: rgb(254, 24, 4);
        float: left;
        font-size: 7rem;
        line-height: 4rem;
        padding-top: .7rem;
        padding-right: .5rem;
        padding-left: 0;
      }
    }
  }
  &-text {
    grid-column: 1 / span 1;
  }
  &-image {
    grid-column: 2 / span 1;
    margin: 0;

    figcaption {
      opacity: .6;
      font-style: italic;
    }
  }
}
</style>
