<template>
  <div class="terms">
    <ul class="menu">
      <li><strong>Begreper</strong></li>
      <li v-for="(post, index) in posts" :key="index">
        <g-link class="term-link" :to="post.node.slug.current">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>
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

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
