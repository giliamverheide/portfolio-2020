<template>
  <div class="c-content " :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.c-content {
  margin-bottom: 4rem;

  @include screen-mobile-plus-and-bigger {
    margin-bottom: 6rem;
  }

  @include screen-laptop-and-bigger {
    margin-bottom: 8rem;
  }

  @include screen-desktop-and-bigger {
    margin-bottom: 10rem;
  }

  h3 {
    margin-bottom: 0.5em;
  }
}
</style>
