<template>
  <div class="term">
    <div class="term-header">
      <g-image
        v-if="post.mainImage"
        class="term-image"
        :src="$urlForImage(post.mainImage, $page.metadata.sanityOptions).height(560).width(400).auto('format').url()"
      />
    </div>
    <div class="term-content">
      <p v-if="post.designers[0]" class="term-designer">{{ post.designers[0].designer.name }} om</p>
      <h2 class="term-title" v-html="post.title" />

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

<style lang="scss" scoped>
.term {
  position: relative;
  grid-column: span 3;

  &-header {

    &:empty {
      display: none;
    }
  }

  &-image {
    min-width: 100%;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  }

  &-title {
    margin-top: 0;
    font-size: 2rem;
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

  transition: transform .2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
}
@media (max-width: 1300px) {
  .term {
    grid-column: span 4;
  }
}
@media (max-width: 900px) {
  .term {
    grid-column: span 6;
    &-title {
      font-size: 1.4rem;
    }
    &-designer {
      line-height: 1.2;
      margin-bottom: .4rem;
    }
  }
}
</style>
