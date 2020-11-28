<template>
  <header class="site-header">
    <div>
      <h1 class="site-title">
        <g-link to="/">{{ $static.settings.title }}</g-link>
      </h1>
      <p>{{ $static.settings.lead }}</p>
    </div>
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
    lead
  }
}
</static-query>

<style lang="scss">
.site-header {
  width: 100%;
  padding: 2rem;
  margin-bottom: var(--space);
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
  p {
    max-width: none;
  }
}
</style>
