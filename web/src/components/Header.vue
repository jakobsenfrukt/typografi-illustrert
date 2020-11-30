<template>
  <header class="site-header">
    <div>
      <h1 class="site-title">
        <g-link to="/">
          <!--{{ $static.settings.title }}-->
          Typografiske Begreper <span>Illustrert</span>
        </g-link>
      </h1>
    </div>
    <div class="about">
      <p>{{ $static.settings.lead }}</p>
      <g-link to="/om">
        Mer om prosjektet
      </g-link>
    </div>
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

    font-weight: 800;
    font-size: 1.6rem;
    span {
      font-family: var(--serif);
      text-transform: none;
      font-weight: 500;
      font-style: italic;
      vertical-align: middle;
      font-size: 2rem;
      margin-bottom: .5rem;
      display: inline-block;
      color: crimson;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  p {
    max-width: none;
  }
  .about {
    text-align: right;
  }
}
</style>
