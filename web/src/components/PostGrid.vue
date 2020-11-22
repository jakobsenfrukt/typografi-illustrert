<template>
  <div class="terms">
    <ul v-if="showMenu" class="menu">
      <li><strong>Begreper</strong></li>
      <li v-for="(post, index) in posts" :key="index">
        <g-link class="term-link" :to="post.node.slug.current">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>
    <div v-else class="terms-header">
      <h2>Andre begreper</h2>
      <g-link class="show-all" to="/">
        Se alle begreper
      </g-link>
    </div>
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
    meta: Object,
    showMenu: Boolean
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
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem;
  padding-bottom: 4rem;

  &-header {
    grid-column: span 12;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    grid-column: span 2;

    li {
      margin: 0 0 .24rem;
      a {
        text-decoration: none;
        display: block;
        position: relative;
        transition: all .3s ease;
        &:before {
          content: "-";
          display: block;
          position: absolute;
          left: 0;
          opacity: 0;
          transform: translateX(-100%);
          transition: all .3s ease;
        }
        &:hover {
          padding-left: .6rem;
          &:before {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    }
  }
}
</style>
