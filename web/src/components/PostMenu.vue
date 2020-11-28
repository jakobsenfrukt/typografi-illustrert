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
    <li class="menu-designer"><strong>Bidragsytere</strong></li>
    <li v-for="(post, index) in $static.posts.edges" :key="`designer-${index}`" class="menu-designer">
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

<style lang="scss" scoped>
.post-menu {
  list-style: none;
  margin: 0;
  padding: 0;
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
        content: "-";
        font-family: var(--sans-serif);
        display: block;
        position: absolute;
        left: 0;
        opacity: 0;
        transform: translateX(-100%);
        transition: all .2s ease;
      }
      &:hover {
        padding-left: .6rem;
        font-weight: 700;
        &:before {
          opacity: 1;
          transform: translateX(0);
          font-weight: 300;
        }
      }
    }

    &.menu-designer {
      opacity: .4;
    }
  }
}
</style>
