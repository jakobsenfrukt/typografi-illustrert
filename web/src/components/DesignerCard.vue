<template>
  <div class="designer">
    <h1 v-if="showTitle" class="designer__site-title">{{ $static.settings.title }}</h1>
    <p class="designer__intro">{{$static.settings.description}}</p>
  </div>
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

<script>
export default {
  props: {
    showTitle: Boolean
  }
}
</script>

<style lang="scss">
.designer {
  margin: 0;
  max-width: 500px;
  padding: calc(var(--space) / 2) 0;

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>
