<template>
  <div class="c-marquee js-animate">
    <div class="marquee__wrap">
      <div class="marquee__content">
        <div class="marquee__scroll">
          <div v-for="index in 8" :key="index" class="marquee__content__item">
            <span><slot /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import animate from '@/mixins/animate';

export default {
  mixins: [animate]
};
</script>

<style lang="scss" scoped>
.c-marquee {
  position: relative;
  margin: 6rem 0;
  perspective: 3000px;

  @include screen-mobile-plus-and-bigger {
    margin: 7rem 0;
  }

  @include screen-tablet-portrait-and-bigger {
    margin: 9rem 0;
  }

  @include screen-tablet-landscape-and-bigger {
    margin: 10rem 0;
  }

  @include screen-laptop-and-bigger {
    margin: 10rem 0;
  }

  @include screen-laptop-plus-and-bigger {
    margin: 12rem 0;
  }

  @include screen-desktop-and-bigger {
    margin: 14rem 0;
  }
}

.c-marquee,
.marquee__wrap,
.marquee__content {
  height: 10vw;
}

.marquee__wrap,
.marquee__content {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}

.marquee__wrap {
  flex-direction: column;
  justify-content: center;
  transform-style: preserve-3d;
  transform: translateZ(-20px) rotateX(90deg);
  transition: transform 0.8s $ease-in-out-cubic, opacity 0.8s $ease-in-out-cubic;
  transition-delay: 1s;

  @include screen-mobile-plus-and-bigger {
    transform: translateZ(-30px) rotateX(90deg);
  }

  @include screen-tablet-portrait-and-bigger {
    transform: translateZ(-37px) rotateX(90deg);
  }

  @include screen-tablet-landscape-and-bigger {
    transform: translateZ(-45px) rotateX(90deg);
  }

  @include screen-laptop-plus-and-bigger {
    transform: translateZ(-52px) rotateX(90deg);
  }

  @include screen-desktop-and-bigger {
    transform: translateZ(-60px) rotateX(90deg);
  }

  .c-marquee.is-inview & {
    transform: translateZ(-20px) rotateX(0deg);

    @include screen-mobile-plus-and-bigger {
      transform: translateZ(-30px) rotateX(0deg);
    }

    @include screen-tablet-portrait-and-bigger {
      transform: translateZ(-37px) rotateX(0deg);
    }

    @include screen-tablet-landscape-and-bigger {
      transform: translateZ(-45px) rotateX(0deg);
    }

    @include screen-laptop-plus-and-bigger {
      transform: translateZ(-52px) rotateX(0deg);
    }

    @include screen-desktop-and-bigger {
      transform: translateZ(-60px) rotateX(0deg);
    }
  }
}

.marquee__content {
  backface-visibility: hidden;
  transform: rotateY(0deg) translateZ(20px);

  @include screen-mobile-plus-and-bigger {
    transform: rotateY(0deg) translateZ(30px);
  }

  @include screen-tablet-portrait-and-bigger {
    transform: rotateY(0deg) translateZ(37px);
  }

  @include screen-tablet-landscape-and-bigger {
    transform: rotateY(0deg) translateZ(45px);
  }

  @include screen-laptop-plus-and-bigger {
    transform: rotateY(0deg) translateZ(52px);
  }

  @include screen-desktop-and-bigger {
    transform: rotateY(0deg) translateZ(60px);
  }
}

.marquee__scroll {
  display: flex;
  white-space: nowrap;

  .c-marquee.is-inview & {
    animation: scrollLeft 70s infinite linear;
    animation-delay: 0.8s;
  }
}

.marquee__content__item {
  position: relative;
  display: flex;
  font-size: 6vw;
  width: 60vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #4c4c4c;
  opacity: 0;
  transition: opacity 0.8s $ease-in-out-cubic;

  .c-marquee.is-inview & {
    opacity: 1;
  }

  @include screen-mobile-plus-and-bigger {
    font-size: 5vw;
    width: 50vw;
  }

  @include screen-tablet-portrait-and-bigger {
    font-size: 3.8vw;
    width: 40vw;
  }

  @include screen-desktop-and-bigger {
    font-size: 6rem;
    width: 64rem;
  }

  &::after {
    content: '↓';
    position: absolute;
    top: 0;
    left: 100%;
    transform: translateX(-50%);

    @include screen-tablet-portrait-and-bigger {
      top: -1px;
    }
  }
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
