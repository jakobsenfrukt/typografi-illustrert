<template>
  <div id="app">
    <Header />
    <div class="page">
      <PostMenu />
      <main class="main">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import PostMenu from '~/components/PostMenu'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    PostMenu,
    Footer
  }
}
</script>

<style lang="scss">
.page {
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-gap: var(--space);
  grid-template-columns: repeat(12, 1fr);

  main {
    grid-column: span 10;
    display: grid;
    grid-gap: var(--space);
    grid-template-columns: repeat(10, 1fr);
  }
}
@media (max-width: 900px) {
  .page {
    padding: 0;
    main {
      padding: 2rem;
      grid-column: span 12;
    }
  }
}
</style>
