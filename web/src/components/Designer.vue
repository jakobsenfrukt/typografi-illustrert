<template>
  <div class="designer">
    <h1 class="designer-name">{{ designer.name }}</h1>
    <p class="designer-bio">{{ designer.bio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    designer: Object
  }
}
</script>

<style lang="scss">
.designer {
  grid-column: 1 / span 10;
  padding: 2rem 0;
  opacity: .8;

  &-name {
    font-size: 1.5em;
  }

  &-bio {
    opacity: 0.8;
    max-width: 36em;
  }
}
</style>
