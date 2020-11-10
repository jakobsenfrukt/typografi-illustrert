<template>
  <div class="term">
    <div class="term-header">
      <g-image
        v-if="post.mainImage"
        class="term-image"
        :alt="post.mainImage.alt"
        :src="$urlForImage(post.mainImage, $page.metadata.sanityOptions).height(440).width(800).auto('format').url()"
      />
    </div>
    <div class="term-content">
      <h2 class="term-title" v-html="post.title" />
      <p class="lead">{{ post.lead }}</p>

      <g-link class="term-link" :to="post.slug.current">Link</g-link>
    </div>
  </div>
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  props: {
    post: Object
  }
}
</script>

<style lang="scss">
.term {
  position: relative;

  &-header {
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &-image {
    min-width: 100%;
  }

  &-title {
    margin-top: 0;
  }

  &-tags {
    z-index: 1;
    position: relative;
  }

  &-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
