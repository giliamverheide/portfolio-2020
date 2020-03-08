<template>
  <span class="c-icon" :data-icon="icon">
    <component :is="dynamicIcon" :class="`icon-${icon}`" />
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    dynamicIcon() {
      return () =>
        import(
          /* webpackChunkName: 'icons' */
          /* webpackMode: 'lazy-once' */
          `@/assets/svg/icons/${this.icon}.svg`
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.c-icon {
  display: flex;
  align-items: center;
  margin-top: 0.1em;
  transition: transform 0.3s ease, margin 0.3s ease;

  svg {
    fill: currentColor;
    width: 24px;
    height: auto;
  }
}
</style>
