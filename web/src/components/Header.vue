<template>
  <header class="site-header">
    <div>
      <h1 class="site-title">
        <g-link to="/">
          <!--{{ $static.settings.title }}-->
          Typografiske begreper <span>Illustrert</span>
          <!--Typografiske<br/>begreper <span>Illustrert</span>-->
        </g-link>
      </h1>
    </div>
    <div class="about">
      <p>{{ $static.settings.lead }}</p>
      <g-link to="/om">
        Mer om prosjektet
      </g-link>
    </div>
    <div class="about-mobile">
      <g-link to="/om">
        Om
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
    position: relative;

    font-weight: 800;
    font-size: 1.6rem;
    span {
      font-family: var(--serif);
      text-transform: none;
      font-weight: 500;
      font-style: italic;
      font-size: 2.6rem;
      line-height: 1;
      display: block;
      color: rgb(254, 24, 4);
      //transform: translate(7.4rem, -1.8rem);
      transform: translate(8rem, -.8rem);
      position: relative;
      z-index: -1;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  p {
    max-width: 30rem;
  }
  .about {
    text-align: right;
    font-family: var(--sans-serif);
    line-height: 1.3;
    padding-left: 2rem;
    a {
      font-weight: bold;
      font-style: normal;
      font-size: 1rem;
      color: rgb(254, 24, 4);
    }
  }
  .about-mobile {
    text-align: right;
    font-family: var(--sans-serif);
    line-height: 1.3;
    padding-left: 2rem;
    a {
      font-weight: bold;
      font-style: normal;
      font-size: 1rem;
      color: rgb(254, 24, 4);
    }
    display: none;
  }
}
@media (max-width: 900px) {
  .site-header {
    align-items: flex-start;
    padding-bottom: 1rem;
    .about {
      display: none;
    }
    .about-mobile {
      display: block;
    }
  }
}
</style>
