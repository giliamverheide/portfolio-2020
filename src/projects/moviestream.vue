<template>
  <article>
    <div class="o-container">
      <base-image
        image="projects/moviestream/mockups/tv-discover.png"
        image-width="1600"
        image-height="1000"
        image-alt="Moviestream Discover - Smart TV"
        class="tv-mockup"
      />

      <base-image
        image="projects/moviestream/desktop/register.png"
        image-width="1600"
        image-height="1000"
        image-alt="Moviestream Register - Desktop"
      />
    </div>

    <section class="o-section">
      <div class="o-container">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <base-device
                has-frame
                is-simple
                image="projects/moviestream/mobile/register.png"
                image-alt="Moviestream Register - Mobile"
              />
            </div>
            <div class="swiper-slide">
              <base-device
                has-frame
                is-simple
                image="projects/moviestream/mobile/discover.png"
                image-alt="Moviestream Discover - Mobile"
              />
            </div>
            <div class="swiper-slide">
              <base-device
                has-frame
                is-simple
                image="projects/moviestream/mobile/movie.png"
                image-alt="Moviestream Movie Details - Mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="o-section">
      <div class="o-container">
        <base-image
          image="projects/moviestream/desktop/movie.png"
          image-width="1600"
          image-height="1000"
          image-alt="Moviestream Movie Details - Desktop"
        />
      </div>
    </section>

    <section class="o-section">
      <div class="o-container">
        <div class="device-combo">
          <base-image
            image="projects/moviestream/desktop/search.png"
            image-width="1600"
            image-height="1000"
            image-alt="Moviestream Search - Desktop"
          />
          <base-device
            has-frame
            is-simple
            image="projects/moviestream/mobile/search.png"
            image-alt="Moviestream Search - Mobile"
          />
        </div>
      </div>
    </section>

    <section class="o-section">
      <div class="o-container">
        <div class="device-combo">
          <base-device has-frame is-simple image="projects/moviestream/mobile/tvshow.png" />
          <base-image
            image="projects/moviestream/desktop/tvshow.png"
            image-width="1600"
            image-height="1000"
            image-alt="Moviestream TV show - Desktop"
          />
        </div>
      </div>
    </section>

    <section class="o-section">
      <div class="o-container">
        <base-image
          image="projects/moviestream/desktop/tvshow-modal.png"
          image-width="1600"
          image-height="1000"
          image-alt="Moviestream TV show episode information - Desktop"
        />

        <base-image
          image="projects/moviestream/desktop/premium.png"
          image-width="1600"
          image-height="1000"
          image-alt="Moviestream Premium - Desktop"
        />
      </div>
    </section>

    <section class="o-section">
      <div class="o-container">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <base-device
                has-frame
                is-simple
                image="projects/moviestream/mobile/support.png"
                image-alt="Moviestream Support - Mobile"
              />
            </div>
            <div class="swiper-slide">
              <base-device
                has-frame
                is-simple
                image="projects/moviestream/mobile/support-new-ticket.png"
                image-alt="Moviestream Support New Ticket - Mobile"
              />
            </div>
            <div class="swiper-slide">
              <base-device
                has-frame
                is-simple
                image="projects/moviestream/mobile/support-viewticket.png"
                image-alt="Moviestream Support View Ticket - Mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import BaseImage from '@/components/base-image';
import BaseDevice from '@/components/base-device';

export default {
  components: {
    BaseImage,
    BaseDevice
  },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      autoHeight: true,
      spaceBetween: 15,
      slidesPerView: 'auto',
      grabCursor: true,
      breakpoints: {
        640: {
          spaceBetween: 30
        },
        768: {
          spaceBetween: 40
        },
        1024: {
          spaceBetween: 50,
          slidesPerView: 3
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.tv-mockup {
  margin: 0 -33%;

  @include screen-mobile-plus-and-bigger {
    margin: 0 -25%;
  }

  @include screen-tablet-landscape-and-bigger {
    margin: 0 -20%;
  }

  @include screen-laptop-and-bigger {
    margin: 0 -8%;
  }

  @include screen-laptop-plus-and-bigger {
    margin: 0 -2%;
  }

  @include screen-desktop-and-bigger {
    margin: 0;
  }
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
  display: flex;
  justify-content: center;
  width: auto;
  max-width: 90%;
  box-shadow: 0 60px 70px -30px rgba(0, 0, 0, 0.2);
}

.device-combo {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include screen-tablet-portrait-and-bigger {
    flex-direction: row;
    align-items: flex-end;
  }

  .c-image {
    margin-bottom: 4rem;

    @include screen-tablet-portrait-and-bigger {
      margin-bottom: 6rem;
    }

    @include screen-tablet-landscape-and-bigger {
      margin-bottom: 8rem;
    }

    @include screen-desktop-and-bigger {
      margin-bottom: 10rem;
    }
  }

  .c-device + .c-image {
    @include screen-mobile-plus-and-smaller {
      margin-top: 4rem;
    }
  }

  .c-image + .c-device,
  .c-device + .c-image {
    @include screen-tablet-portrait-and-bigger {
      margin-left: -14rem;
    }

    @include screen-tablet-landscape-and-bigger {
      margin-left: -19rem;
    }

    @include screen-desktop-and-bigger {
      margin-left: -21rem;
    }
  }

  .c-device {
    @include screen-tablet-portrait-and-bigger {
      min-width: 200px;
    }

    @include screen-tablet-landscape-and-bigger {
      min-width: 240px;
    }

    @include screen-laptop-and-bigger {
      min-width: 300px;
    }

    @include screen-desktop-and-bigger {
      min-width: 340px;
    }
  }
}
</style>
