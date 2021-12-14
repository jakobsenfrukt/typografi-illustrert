<template>
  <ul class="post-menu">
    <li class="menu-term-heading heading" @click="openMain = !openMain" :class="{ openMain: openMain }">Begreper</li>
    <li v-for="(post, index) in $static.posts.edges" :key="`term-${index}`" class="menu-term-item" :class="{ openMain: openMain }">
      <g-link class="term-link" :to="post.node.slug.current">
        {{ post.node.title }}
      </g-link>
    </li>
    <li class="menu-spacing">&nbsp;</li>
    <li class="menu-spacing">&nbsp;</li>
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
      open: false,
      openMain: false
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
    font-family: var(--sans-serif);
    font-weight: 600;
    &.heading {
      font-family: var(--sans-serif);
      font-weight: 900;
      margin-bottom: .8rem;
    }
    a {
      font-size: .9rem;
      opacity: .5;
      text-decoration: none;
      display: block;
      position: relative;
      transition: all .3s ease;
      &:before {
        content: "- ";
        font-family: var(--sans-serif);
        font-weight: 600;
        display: block;
        position: absolute;
        left: 0;
        opacity: 0;
        transform: translateX(-100%);
        transition: all .2s ease;
      }
      &:hover {
        font-weight: 600;
        opacity: 1;
      }
      /*&:hover {
        padding-left: .8rem;
        font-weight: 700;
        &:before {
          opacity: 1;
          transform: translateX(0);
          font-weight: 300;
        }
      }*/
    }
    &.menu-designer {
      opacity: .5;

      &.open {
        opacity: .8;
      }

      &.heading {
        border-top: 1px solid #aaa;
        padding-top: 1rem;
        font-family: var(--sans-serif);
        font-weight: 900;
        cursor: pointer;
        &:after {
          content: "↓";
          font-size: .8rem;
          vertical-align: middle;
          line-height: 1.5rem;
          float: right;
        }
        &.open {
          &:after {
            content: "↑";
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
@media (max-width: 900px) {
  .post-menu {
    grid-column: 1 / span 12;
    padding: 0;
    border-bottom: 1px solid #ddd;
    li {
      padding: 0 2rem 1rem;
    }
    .menu-designer {
      display: none;
    }
    .menu-spacing {
      display: none;
    }
    .menu-term-heading {
      padding: 0 2rem;
      cursor: pointer;
      &:after {
        content: "▼";
        font-size: .5rem;
        vertical-align: middle;
        line-height: 1.5rem;
        float: right;
      }
      &.openMain {
        padding-bottom: 1rem;
        &:after {
          content: "▲";
        }
      }
    }
    .menu-term-item {
      display: none;
      &.openMain {
        display: block;
      }
    }
  }
}
</style>
