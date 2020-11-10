<template>
  <div class="terms">
    <PostItem
      v-for="post in posts"
      :key="post.node.id"
      :post="post.node"
      :metadata="meta"
    />
  </div>
</template>

<script>
import PostItem from '~/components/PostItem'

export default {
  props: {
    posts: Array,
    meta: Object
  },
  components: {
    PostItem
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss" scoped>
.terms {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
}
</style>
