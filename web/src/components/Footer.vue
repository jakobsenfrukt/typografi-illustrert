<template>
  <footer class="site-footer">
    <h1 class="site-title">
      <g-link to="/">{{ $static.settings.title }}</g-link>
    </h1>
    <p class="site-intro">{{$static.settings.description}}</p>
    <g-link to="/om">
      Mer om prosjektet
    </g-link>
  </footer>
</template>

<static-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    description
  }
}
</static-query>

<style lang="scss">
.site-footer {
  width: 100%;
  padding: 2rem;
  border-top: 1px solid var(--body-color);

  p {
    max-width: 40rem;
  }

  .site-title {
    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
