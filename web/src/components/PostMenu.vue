<template>
  <ul class="post-menu">
    <li><strong>Begreper</strong></li>
    <li v-for="(post, index) in $static.posts.edges" :key="`term-${index}`">
      <g-link class="term-link" :to="post.node.slug.current">
        {{ post.node.title }}
      </g-link>
    </li>
    <li>&nbsp;</li>
    <li>&nbsp;</li>
    <li class="menu-designer heading" @click="open = !open" :class="{ open: open }"><strong>Bidragsytere</strong></li>
    <li v-for="(post, index) in $static.posts.edges" :key="`designer-${index}`" class="menu-designer menu-designer-item" :class="{ open: open }">
      <g-link class="term-link" :to="post.node.slug.current">
        {{ post.node.designers[0].designer.name }}
      </g-link>
    </li>
  </ul>
</template>

<static-query>
query {
  posts: allSanityPost(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        designers {
          designer {
            name
          }
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
.post-menu {
  list-style: none;
  margin: 0;
  padding: 0 2rem 0 0;
  grid-column: 1 / span 2;

  li {
    margin: 0 0 .6rem;
    line-height: 1.2;
    a {
      text-decoration: none;
      display: block;
      position: relative;
      transition: all .3s ease;
      &:before {
        content: "- ";
        font-family: var(--sans-serif);
        display: block;
        position: absolute;
        left: 0;
        opacity: 0;
        transform: translateX(-100%);
        transition: all .2s ease;
      }
      &:hover {
        padding-left: .8rem;
        font-weight: 700;
        &:before {
          opacity: 1;
          transform: translateX(0);
          font-weight: 300;
        }
      }
    }

    &.menu-designer {
      opacity: .6;

      &.open {
        opacity: .8;
      }

      &.heading {
        border-top: 1px solid #aaa;
        padding-top: 1rem;
        cursor: pointer;
        &:after {
          content: "▼";
          font-size: .5rem;
          vertical-align: middle;
          line-height: 1.5rem;
          float: right;
        }
        &.open {
          &:after {
            content: "▲";
          }
        }
      }

      &-item {
        display: none;

        &.open {
          display: block;
        }
      }
    }
  }
}
</style>
