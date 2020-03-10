<template>
  <article>
    <!-- <base-content classes="o-container">
      <div class="o-grid">
        <div class="o-col-12 o-col-10--md o-col-3--lg u-pre-1--lg">
          <h3>About this project</h3>
        </div>
        <div class="o-col-12 o-col-10--md o-col-7--lg u-pre-0--lg">
          <p>
            A second screen is an extension or enrichment of the television experience by adding
            extra relevant information and interaction through the use of a laptop, smartphone or
            tablet.
          </p>
          <p>
            The average SBS 6 viewer is between 20 - 49 years old and has an average level of
            education from MBO to HBO. The UEFA Champions League is viewed mostly by men.
          </p>
          <p>
            Based on interviews with people from the target audience I concluded that most men use a
            smartphone while watching television, tablets are a lot less common. Therefor I designed
            the application for mobile only.
          </p>
        </div>
      </div>
    </base-content> -->
    <section class="section">
      <div class="swiper-container">
        <base-device has-frame frame-only />

        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <base-device
              image="projects/second-screen/login.png"
              image-alt="UEFA Champions League Second Screen App - Login"
            />
          </div>

          <div class="swiper-slide">
            <base-device
              image="projects/second-screen/wedstrijden.png"
              image-alt="UEFA Champions League Second Screen App - Wedstrijden"
            />
          </div>
          <div class="swiper-slide">
            <base-device
              image="projects/second-screen/wedstrijd_voorspellen.png"
              image-alt="UEFA Champions League Second Screen App - Voorspellen"
            />
          </div>

          <div class="swiper-slide">
            <base-device
              image="projects/second-screen/wedstrijd_live.png"
              image-alt="UEFA Champions League Second Screen App - Live wedstrijd"
            />
          </div>

          <div class="swiper-slide">
            <base-device
              image="projects/second-screen/wedstrijd_camerahoek.png"
              image-alt="UEFA Champions League Second Screen App - Verander camerahoek"
            />
          </div>

          <div class="swiper-slide">
            <base-device
              image="projects/second-screen/wedstrijd_commentaar.png"
              image-alt="UEFA Champions League Second Screen App - Commentaar"
            />
          </div>

          <div class="swiper-slide">
            <base-device
              image="projects/second-screen/wedstrijd_chat.png"
              image-alt="UEFA Champions League Second Screen App - Chat"
            />
          </div>

          <div class="swiper-slide">
            <base-device
              image="projects/second-screen/wedstrijd_statistieken.png"
              image-alt="UEFA Champions League Second Screen App - Wedstrijd statistieken"
            />
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
// import BaseContent from '@/components/base-content';
import BaseDevice from '@/components/base-device';

export default {
  components: {
    // BaseContent,
    BaseDevice
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
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      autoHeight: true,
      spaceBetween: 15,
      slidesPerView: 'auto',
      centeredSlides: true,
      grabCursor: true,
      initialSlide: 1,
      breakpoints: {
        640: {
          spaceBetween: 30
        },
        768: {
          spaceBetween: 40
        },
        1024: {
          spaceBetween: 50
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container > .c-device {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 10;
}

.swiper-container {
  padding: 0 0 3rem 0;

  @include screen-mobile-plus-and-bigger {
    padding: 0 0 4rem 0;
  }

  @include screen-tablet-portrait-and-bigger {
    padding: 0 0 6rem 0;
  }

  @include screen-tablet-landscape-and-bigger {
    padding: 0 0 7rem 0;
  }
}

.swiper-slide {
  width: auto;
  max-width: 90%;
  box-shadow: 0 60px 70px -30px rgba(0, 0, 0, 0.2);
  opacity: 0.5;
  transition: opacity 0.3s $ease-out-cubic;
}

.swiper-slide-active {
  opacity: 1;
}

.section__title {
  padding: 3rem 0 1.5rem 0;

  @include screen-mobile-plus-and-bigger {
    padding: 4rem 0 2rem 0;
  }

  @include screen-tablet-portrait-and-bigger {
    padding: 6rem 0 3.5rem 0;
  }

  @include screen-tablet-landscape-and-bigger {
    padding: 7rem 0 4rem 0;
  }
}
</style>
