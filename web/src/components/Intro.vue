<template>
  <div class="site-intro">
    <p>{{$static.settings.description}}</p>
  </div>
</template>

<static-query>
query {
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    description
  }
}
</static-query>

<style lang="scss">
.site-intro {
  margin-bottom: 4rem;
}
</style>
