<template>
  <section class="c-cta-full">
    <nuxt-link class="cta-full__link" :to="`/projects/${nextProject.slug}`">
      <div class="o-container">
        <div class="cta-full__link__label">
          <span>View next project</span>
        </div>
        <div class="cta-full__link__title">{{ nextProject.title }}</div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    nextProject: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.c-cta-full {
  text-align: center;
}

.cta-full__link {
  position: relative;
  display: block;
  padding: 10rem 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.03);
    opacity: 0;
    // transform: scaleY(0);
    // transform-origin: top left;
    transition: opacity 0.3s $ease-in-out-cubic;
    z-index: -1;
  }

  &:hover {
    &::after {
      // transform: scaleY(1);
      opacity: 1;
    }
  }
}

.cta-full__link__label {
  @include fluid-type(320px, 1800px, 16px, 30px);
  color: rgba($color-white, 0.7);
  margin-bottom: 1em;

  .c-icon {
    margin-left: 1rem;
  }
}

.cta-full__link__title {
  @include h1;
}
</style>
