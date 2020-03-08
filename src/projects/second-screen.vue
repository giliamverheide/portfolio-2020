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
        <div class="device device--frameonly">
          <div class="device__frame">
            <base-svg path="devices/iphone-x-transparent" />
          </div>
        </div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="device">
              <div class="device__image">
                <figure class="o-image">
                  <div class="image__inner">
                    <picture>
                      <source
                        :srcset="require(`~/assets/images/projects/second-screen/login.png?webp`)"
                        type="image/webp"
                      />
                      <img
                        :src="require(`~/assets/images/projects/second-screen/login.png`)"
                        width="375"
                        height="812"
                      />
                    </picture>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="device">
              <div class="device__image">
                <figure class="o-image">
                  <div class="image__inner">
                    <picture>
                      <source
                        :srcset="
                          require(`~/assets/images/projects/second-screen/wedstrijden.png?webp`)
                        "
                        type="image/webp"
                      />
                      <img
                        :src="require(`~/assets/images/projects/second-screen/wedstrijden.png`)"
                        width="375"
                        height="812"
                      />
                    </picture>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="device">
              <div class="device__image">
                <figure class="o-image">
                  <div class="image__inner">
                    <picture>
                      <source
                        :srcset="
                          require(`~/assets/images/projects/second-screen/wedstrijd_voorspellen.png?webp`)
                        "
                        type="image/webp"
                      />
                      <img
                        :src="
                          require(`~/assets/images/projects/second-screen/wedstrijd_voorspellen.png`)
                        "
                        width="375"
                        height="812"
                      />
                    </picture>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="device">
              <div class="device__image">
                <figure class="o-image">
                  <div class="image__inner">
                    <picture>
                      <source
                        :srcset="
                          require(`~/assets/images/projects/second-screen/wedstrijd_live.png?webp`)
                        "
                        type="image/webp"
                      />
                      <img
                        :src="require(`~/assets/images/projects/second-screen/wedstrijd_live.png`)"
                        width="375"
                        height="812"
                      />
                    </picture>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="device">
              <div class="device__image">
                <figure class="o-image">
                  <div class="image__inner">
                    <picture>
                      <source
                        :srcset="
                          require(`~/assets/images/projects/second-screen/wedstrijd_camerahoek.png?webp`)
                        "
                        type="image/webp"
                      />
                      <img
                        :src="
                          require(`~/assets/images/projects/second-screen/wedstrijd_camerahoek.png`)
                        "
                        width="375"
                        height="812"
                      />
                    </picture>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="device">
              <div class="device__image">
                <figure class="o-image">
                  <div class="image__inner">
                    <picture>
                      <source
                        :srcset="
                          require(`~/assets/images/projects/second-screen/wedstrijd_commentaar.png?webp`)
                        "
                        type="image/webp"
                      />
                      <img
                        :src="
                          require(`~/assets/images/projects/second-screen/wedstrijd_commentaar.png`)
                        "
                        width="375"
                        height="812"
                      />
                    </picture>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="device">
              <div class="device__image">
                <figure class="o-image">
                  <div class="image__inner">
                    <picture>
                      <source
                        :srcset="
                          require(`~/assets/images/projects/second-screen/wedstrijd_chat.png?webp`)
                        "
                        type="image/webp"
                      />
                      <img
                        :src="require(`~/assets/images/projects/second-screen/wedstrijd_chat.png`)"
                        width="375"
                        height="812"
                      />
                    </picture>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="device">
              <div class="device__image">
                <figure class="o-image">
                  <div class="image__inner">
                    <picture>
                      <source
                        :srcset="
                          require(`~/assets/images/projects/second-screen/wedstrijd_statistieken.png?webp`)
                        "
                        type="image/webp"
                      />
                      <img
                        :src="
                          require(`~/assets/images/projects/second-screen/wedstrijd_statistieken.png`)
                        "
                        width="375"
                        height="812"
                      />
                    </picture>
                  </div>
                </figure>
              </div>
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
// import BaseContent from '@/components/base-content';
import BaseSvg from '@/components/base-svg';

export default {
  components: {
    // BaseContent,
    BaseSvg
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
.device-list {
  display: flex;
  justify-content: center;

  .device {
    margin: 0 3rem;
  }
}

.device {
  position: relative;
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
    width: 320px;
  }

  @include screen-laptop-and-bigger {
    width: 360px;
  }
}

.device__frame {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;

  .device--frameonly & {
    position: relative;
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
