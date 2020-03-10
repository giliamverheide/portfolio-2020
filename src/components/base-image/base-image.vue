<template>
  <figure class="c-image o-image">
    <div class="image__inner">
      <picture>
        <source
          v-if="webp"
          :data-srcset="require(`@/assets/images/${image}?webp`)"
          type="image/webp"
        />
        <img
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          :data-src="require(`@/assets/images/${image}`)"
          :width="imageWidth"
          :height="imageHeight"
          :class="lazyload && 'lazyload'"
        />
      </picture>
    </div>
  </figure>
</template>

<script>
/* eslint-disable import/no-dynamic-require, global-require */
export default {
  components: {},
  props: {
    image: {
      type: String,
      default: null,
      required: true
    },
    imageWidth: {
      type: String,
      default: '1600'
    },
    imageHeight: {
      type: String,
      default: '1000'
    },
    lazyload: {
      type: Boolean,
      default: true
    },
    webp: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
