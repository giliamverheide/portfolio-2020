<template>
  <div
    :class="[frameOnly && 'c-device--frameonly', isSimple && 'c-device--simple']"
    class="c-device"
  >
    <div v-if="hasFrame" class="device__frame">
      <base-svg v-if="!isSimple" :path="`devices/${device}`" />
    </div>
    <div v-if="!frameOnly" class="device__image">
      <figure class="o-image">
        <div class="image__inner">
          <picture>
            <source :srcset="require(`@/assets/images/${image}?webp`)" type="image/webp" />
            <img
              :src="require(`@/assets/images/${image}`)"
              :width="imageWidth"
              :height="imageHeight"
              :class="lazyload ? 'lazyload' : ''"
              :alt="imageAlt"
            />
          </picture>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-dynamic-require, global-require */
import BaseSvg from '@/components/base-svg';

export default {
  components: {
    BaseSvg
  },
  props: {
    isSimple: {
      type: Boolean,
      default: false
    },
    hasFrame: {
      type: Boolean,
      default: false
    },
    frameOnly: {
      type: Boolean,
      default: false
    },
    device: {
      type: String,
      default: 'iphone-x-transparent'
    },
    image: {
      type: String,
      default: '@/assets/images/projects/moviestream/mobile/register.png'
    },
    imageWidth: {
      type: String,
      default: '375'
    },
    imageHeight: {
      type: String,
      default: '812'
    },
    imageAlt: {
      type: String,
      default: null
    },
    lazyload: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.device-list {
  display: flex;
  justify-content: center;

  .c-device {
    margin: 0 3rem;
  }
}

.c-device {
  position: relative;
  display: inline-block;
  min-width: 260px;
  width: 260px;
  max-width: 100%;

  .swiper-container > & {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 10;
  }

  @include screen-mobile-plus-and-bigger {
    min-width: 290px;
    width: 290px;
  }

  @include screen-tablet-portrait-and-bigger {
    min-width: 310px;
    width: 310px;
  }

  @include screen-laptop-and-bigger {
    min-width: 320px;
    width: 320px;
  }

  @include screen-desktop-and-bigger {
    min-width: 340px;
    width: 340px;
  }
}

.device__frame {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;

  .c-device--simple & {
    box-shadow: inset 0 0 0px 2px rgba(255, 255, 255, 0.04), inset 0 0 0 9px #212121,
      inset 0 0 0 12px #000, 0 20px 50px rgba(0, 0, 0, 0.22);
    border-radius: 12%/6%;
  }

  .c-device--frameonly & {
    position: relative;
    height: 100%;
  }

  img,
  svg {
    width: 100%;
    height: auto;
  }
}

.device__image {
  position: relative;
  padding: 6.6%;
  border-radius: 14%/7%;
  overflow: hidden;

  .c-device--simple & {
    padding: 12px;
  }
}
</style>
