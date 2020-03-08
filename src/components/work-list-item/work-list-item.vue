<template>
  <div class="work__item">
    <nuxt-link :to="`/projects/${project.slug}`" class="work__item-link">
      <div class="work__item-content">
        <h2 class="item__title">
          <span>{{ project.title }}</span>
        </h2>
        <div class="item__subtitle">
          <span>{{ project.subtitle }}</span>
        </div>
      </div>
      <div class="work__item-cta">
        <span class="cta__label">View project</span>
        <span class="cta__icon">
          <base-icon icon="arrow-right" />
        </span>
      </div>
      <div class="work__item-image">
        <picture>
          <source :data-srcset="projectThumbnail('webp')" type="image/webp" />
          <source :data-srcset="projectThumbnail()" type="image/png" />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            :data-src="projectThumbnail()"
            width="1100"
            height="550"
            class="lazyload"
            :alt="project.title"
          />
        </picture>
        <!-- <img :src="`/images/projects/${project.image}`" :alt="project.title" /> -->
      </div>
    </nuxt-link>
  </div>
</template>

<script>
/* eslint-disable import/no-dynamic-require, global-require, prefer-template */
import BaseIcon from '@/components/base-icon';

export default {
  components: {
    BaseIcon
  },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {
    projectImage() {
      return this.$store.getters.projectImage();
    }
  },
  methods: {
    projectThumbnail(fileType) {
      const fileName = this.project.image;
      if (fileType === 'webp') {
        return require(`@/assets/images/projects/${fileName}?webp`);
      }
      return require(`@/assets/images/projects/${fileName}`);
    }
  }
};
</script>

<style lang="scss" scoped>
// Fade
$transition-time: cubic-bezier(0.63, 0.27, 0.38, 0.85);

.work__item {
  position: relative;
  width: 100%;
  max-width: 110rem;
  margin: 10vw auto;

  @include screen-tablet-landscape-and-bigger {
    width: 60%;
  }

  @include screen-desktop-and-bigger {
    margin: 16rem auto;
  }

  &.active {
    opacity: 1;
    z-index: 1;
  }
}

.work__item-link {
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @include screen-mobile-plus-and-bigger {
    display: block;
    height: 0;
    padding-top: 50%;
    transition: box-shadow 0.3s ease;
    transition-delay: 0.9s;

    // .work__item:first-child & {
    //   transition-delay: 1.5s;
    // }

    .work__item.is-inview & {
      box-shadow: 0 14px 10px -10px rgba(0, 0, 0, 0.1), 0 50px 80px rgba(0, 0, 0, 0.2);
    }
  }
}

.work__item-content {
  position: relative;
  z-index: 1;
  order: 2;

  @include screen-mobile-plus-and-bigger {
    position: absolute;
    top: 8%;
    left: 4%;
    bottom: auto;
  }

  @include screen-tablet-landscape-and-bigger {
    top: auto;
    bottom: 13%;
    left: -12rem;
  }
}

.work__item-count {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 0rem;
  width: 10rem;
  height: 4rem;
  left: 100%;
  margin-left: -8rem;
  transform: rotate(90deg);
  transform-origin: bottom right;
  opacity: 0.7;
}

.work__item-count__divider {
  width: 4rem;
  height: 1px;
  background: $color-white;
  margin: 1px 1rem 0;
}

.item__title {
  position: relative;
  @include fluid-type(320px, 1800px, 22px, 100px);
  line-height: 1.2;
  font-weight: $font-weight-black;
  letter-spacing: -0.014em;
  padding: 0;
  overflow: hidden;

  @include screen-mobile-plus-and-bigger {
    padding: 0 1rem;
  }

  @include screen-tablet-landscape-and-bigger {
    padding: 0 2.2rem;
  }

  > span {
    display: inline-block;
    margin-left: -0.03em;
    opacity: 0;
    transform: translateY(80px);
    transition: transform 0.8s $transition-time, opacity 0.8s $transition-time;
    transition-delay: 0.5s;

    // .work__item:first-child & {
    //   transition-delay: 1.1s;
    // }

    .work__item.is-inview & {
      transform: none;
      opacity: 1;
    }
  }

  &::before {
    @include screen-mobile-plus-and-bigger {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #fff;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.6s cubic-bezier(0.95, 0, 0.35, 1);
      transition-delay: 0.1s;
      mix-blend-mode: difference;
      z-index: 1;

      .work__item-link:hover & {
        transform: scale(1);
        transition-delay: 0s;
      }
    }
  }
}

.item__subtitle {
  position: relative;
  display: inline-block;
  @include fluid-type(320px, 1800px, 16px, 28px);
  font-weight: $font-weight-medium;
  color: rgba(255, 255, 255, 1);
  padding: 0;
  overflow: hidden;

  > span {
    display: inline-block;
    opacity: 0;
    transform: translateY(80px);
    transition: transform 0.8s $transition-time, opacity 0.8s $transition-time;
    transition-delay: 0.6s;

    // .work__item:first-child & {
    //   transition-delay: 1.2s;
    // }

    .work__item.is-inview & {
      transform: none;
      opacity: 1;
    }
  }

  @include screen-mobile-plus-and-bigger {
    padding: 0.3em 1rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: $color-background-html;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.6s cubic-bezier(0.95, 0, 0.35, 1);
      transition-delay: 0.2s;
      mix-blend-mode: difference;

      .work__item-link:hover & {
        transform: scale(1);
        transition-delay: 0s;
      }
    }
  }

  @include screen-tablet-landscape-and-bigger {
    padding: 0.5em 2.2rem;
    font-weight: $font-weight-regular;
  }
}

.item__description {
  position: relative;
  visibility: hidden;
  opacity: 0;
  font-weight: 400;
  padding-top: 4rem;
  max-width: 70%;
  transform: translateY(2rem);
  transition: 0.3s ease;
  z-index: 1;
}

.work__item-year {
  z-index: 1;
  color: #fff;
  position: absolute;
  top: 0;
  left: -8rem;
  transform: rotate(-90deg);
  height: 3rem;
  transform-origin: top right;
  opacity: 0.7;
}

.work__item-device {
  position: absolute;
  bottom: 0;
  right: -3%;
  height: 105%;
  z-index: 1;
}

.work__item-image {
  opacity: 1;
  position: relative;
  top: 0;
  width: 100%;
  min-width: 240px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: opacity 0.3s ease;
  border-radius: 3px;

  @include screen-mobile-plus-and-bigger {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 0;
    margin-bottom: 0;
    height: 100%;
    background-color: lighten($color-background-html, 5%);
  }

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    background: $color-background-html;
    z-index: 1;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    transform-origin: right;
    transition: transform 0.9s cubic-bezier(0.74, 0.18, 0.43, 0.91);

    // .work__item:first-child & {
    //   transition-delay: 0.6s;
    // }

    .work__item.is-inview & {
      transform: scaleX(0);
    }
  }

  img {
    position: relative;
    top: 0;
    left: 0;
    opacity: 1;
    transition: opacity 0.6s ease, transform 0.6s ease;
    width: 100%;
    height: 100%;

    @include screen-mobile-plus-and-bigger {
      position: absolute;
    }

    .work__item-link:hover & {
      // opacity: 0.6;
      transform: scale(1.05);
    }
  }
}

.work__item-cta {
  display: none;
  opacity: 1;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0.75em 1.25em;
  @include fluid-type(320px, 1800px, 16px, 24px);
  font-weight: $font-weight-medium;
  color: $color-white;
  transform: translateX(0);
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: 0s;
  z-index: 1;

  @include screen-mobile-plus-and-bigger {
    display: flex;
  }

  .work__item-link:hover & {
    //visibility: visible;
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.3s;
  }

  @include screen-tablet-landscape-and-bigger {
    top: 100%;
    bottom: auto;
    margin: 0.75em 0 0 0;
    padding: 0;
    opacity: 0;
    transform: translateX(-2rem);
  }

  svg {
    display: inline-block;
  }
}

.cta__label {
  display: inline-block;
  margin-right: 1rem;
}

.cta__icon /deep/ .c-icon svg {
  width: 32px;
}
</style>
