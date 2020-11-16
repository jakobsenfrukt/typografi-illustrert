<template>
  <div class="designer">
    <span>Designer:</span>
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
  margin: 0;
  max-width: 32rem;
  padding: 2rem;

  &-name {
    font-size: 1.5em;
  }

  &-bio {
    opacity: 0.8;
  }
}
</style>
