<template>
  <footer class="site-footer">
    <div>
      Kontaktinfo? Instagram-konto?
    </div>
    <div class="totop" @click="toTop()">
      Til toppen &uarr;
    </div>
  </footer>
</template>

<script>
export default {
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
