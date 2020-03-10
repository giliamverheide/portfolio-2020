<template>
  <figure :class="lazyload && 'lazyload'" class="c-image o-image">
    <div class="image__inner">
      <picture>
        <source
          v-if="webp"
          :srcset="!lazyload && require(`@/assets/images/${image}?webp`)"
          :data-srcset="lazyload && require(`@/assets/images/${image}?webp`)"
          type="image/webp"
        />
        <img
          :src="
            lazyload
              ? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
              : require(`@/assets/images/${image}`)
          "
          :data-src="lazyload && require(`@/assets/images/${image}`)"
          :width="imageWidth"
          :height="imageHeight"
          :class="lazyload && 'lazyload'"
          :alt="imageAlt"
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
    imageAlt: {
      type: String,
      default: null
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
