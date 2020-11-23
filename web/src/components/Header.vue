<template>
  <header class="site-header">
    <h1 class="site-title">
      <g-link to="/">{{ $static.settings.title }}</g-link>
    </h1>
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
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .site-title {
    line-height: 1;
    margin: 0;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
