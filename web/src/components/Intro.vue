<template>
  <div class="site-intro">
    <p>{{$static.settings.lead}}</p>
  </div>
</template>

<static-query>
query {
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    lead
  }
}
</static-query>

<style lang="scss">
.site-intro {
  margin: 0;
}
</style>
