<template>
  <div id="app">
    <Header />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
.main {
  margin: 0 auto;
  padding: 2rem;
}
</style>
