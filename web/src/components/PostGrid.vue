<template>
  <div class="terms" :class="{ showMenu: showMenu }">
    <div v-if="!showMenu" class="terms-header">
      <h2>Andre begreper</h2>
      <g-link class="show-all" to="/">
        Se alle begreper
      </g-link>
    </div>
    <div class="posters">
      <PostItem
        v-for="post in $static.posts.edges.slice(0, limit)"
        :key="post.node.id"
        :post="post.node"
        :metadata="$static.metadata"
      />
    </div>
  </div>
</template>

<static-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        publishedAt(format: "D. MMMM YYYY")
        lead
        mainImage {
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
        designers {
          designer {
            name
            bio
            image {
              asset {
                _id
                url
              }
              hotspot {
                x
                y
                width
                height
              }
              crop {
                top
                left
                right
                bottom
              }
            }
          }
        }
      }
    }
  }
}

</static-query>

<script>
import PostItem from '~/components/PostItem'

export default {
  props: {
    limit: {
      type: Number,
      default: 100
    },
    showMenu: Boolean
  },
  components: {
    PostItem
  }
}
</script>

<style lang="scss" scoped>
.terms {
  grid-column: 1 / span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: var(--space);
  padding: var(--space) var(--space) 4rem;
  border-top: 1px solid var(--border-color);


  .posters {
    grid-column: 1 / span 12;
    display: grid;
    grid-gap: var(--space);
    grid-template-columns: repeat(12, 1fr);
  }

  &.showMenu {
    padding: 0 0 4rem;
    grid-column: 1 / span 10;
    grid-template-columns: repeat(10, 1fr);
    border: none;
    .posters {
      grid-column: 1 / span 10;
      grid-template-columns: repeat(10, 1fr);
    }
  }

  &-header {
    grid-column: span 12;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
    }
  }
}
@media (max-width: 900px) {
  .terms {
    padding: 2rem;
    &.showMenu {
      padding: 0 0 4rem;
      grid-column: 1 / span 12;
      grid-template-columns: repeat(12, 1fr);
      border: none;
      .posters {
        grid-column: 1 / span 12;
        grid-template-columns: repeat(12, 1fr);
      }
    }
  }
}
</style>
