<template>
  <header class="site-header">
    <h1 class="site-title">
      <g-link to="/">{{ $static.settings.title }}</g-link>
    </h1>
    <p class="site-intro">{{$static.settings.description}}</p>
    <g-link to="/om">
      Om prosjektet
    </g-link>
  </header>
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
    title
    description
  }
}
</static-query>

<style lang="scss">
.site-header {
  width: 100%;
  padding: 2rem;

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
