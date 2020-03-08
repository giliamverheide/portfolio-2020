<template>
  <!-- eslint-disable vue/no-v-html -->
  <section class="c-work-hero">
    <div class="o-container">
      <div class="o-grid">
        <div class="o-col-12 o-col-8--lg u-pre-1--lg">
          <h1 class="work-hero__title js-animate u-animate">{{ project.title }}</h1>
          <p
            class="work-hero__subtitle js-animate u-animate u-animate-delay--100"
            v-html="project.intro"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.c-work-hero {
  position: relative;
  padding: calc(12rem + 5%) 0 7% 0;
  z-index: 1;
  overflow: hidden;
  margin-top: -12rem;
  margin-bottom: 2rem;
  // margin-bottom: 6rem;

  @include screen-tablet-portrait-and-bigger {
    // margin-bottom: 8rem;
  }

  @include screen-tablet-landscape-and-bigger {
    // margin-bottom: 10rem;
  }

  @include screen-laptop-and-bigger {
    // margin-bottom: 12rem;
  }

  .o-container {
    position: relative;
  }
}

.work-hero__subtitle {
  @include fluid-type(320px, 1800px, 18px, 24px);
  color: $color-white;
  width: 38em;
  max-width: 100%;
  margin-top: 1.5em;
  margin-bottom: 0;
}
</style>
