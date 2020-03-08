<template>
  <component :is="loadSvg" />
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    loadSvg() {
      return () =>
        import(
          /* webpackChunkName: 'svgs' */
          /* webpackMode: 'lazy-once' */
          `@/assets/svg/${this.path}.svg`
        );
    }
  }
};
</script>
