<template>
  <header class="site-header">
    <div>
      <h1 class="site-title">
        <g-link to="/">
          <!--{{ $static.settings.title }}-->
          Typografi <span>Illustrert</span>
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
    margin: 0 0 1rem;

    font-weight: 800;
    font-size: 1.9rem;
    span {
      font-family: var(--serif);
      text-transform: none;
      font-weight: 500;
      font-style: italic;
      vertical-align: middle;
      font-size: 2.7rem;
      margin-bottom: .5rem;
      display: inline-block;
      color: rgb(254, 24, 4);
      transform: translate(-8rem, 1.46rem);
      position: relative;
      z-index: -1;
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
    font-family: var(--sans-serif);
    font-weight: 300;
    line-height: 1.3;
    padding-left: 2rem;
    a {
      font-weight: bold;
      font-style: normal;
      font-size: 1rem;
      color: rgb(254, 24, 4);
    }
  }
}
</style>
