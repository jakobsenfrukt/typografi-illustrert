<template>
  <footer class="site-footer">
    <div>
      {{ $static.settings }}
      <BlockContent
        :blocks="$static.settings._rawFooter"
        v-if="$static.settings._rawFooter"
      />
    </div>
    <div class="totop" @click="toTop()">
      Til toppen &uarr;
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    _rawFooter
  }
}
</static-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
.site-footer {
  width: 100%;
  padding: 2rem;
  border-top: 1px solid var(--border-color);

  p {
    max-width: 40rem;
  }

  .site-title {
    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .totop {
    text-align: right;
  }
}
</style>
