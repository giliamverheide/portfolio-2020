<template>
  <article>
    <base-content classes="o-container">
      <div class="o-grid">
        <div class="o-col-12 o-col-10--md o-col-3--lg u-pre-1--lg">
          <h3 class="js-animate u-animate u-animate-delay--300">About this project</h3>
        </div>
        <div class="o-col-12 o-col-10--md o-col-7--lg">
          <p class="js-animate u-animate u-animate-delay--400">
            In January 2020, ARK announced a theme design competition for their desktop wallet for
            the entire ecosystem to use. Each participant was only elligible for 1 prize, but me
            being me, I decided to design not one, but three different themes. A light theme, a dark
            theme for those working late at night and one using a little bit of both.
          </p>
          <p class="js-animate u-animate u-animate-delay--500">
            I'm pleased to tell you that my theme 'Ark Pure' was awarded with
            <strong>1st place</strong>. Scroll down and swipe through some previews of all three
            themes I designed for ARK. All themes are open-source and can be found on the Github
            pages linked below. They are also all available in the official ARK wallet for anyone to
            use.
          </p>
          <p class="js-animate u-animate u-animate-delay--600">
            <!-- As of today my themes have been downloaded more than {{ totalDownloads }} times. -->
          </p>
        </div>
      </div>
    </base-content>

    <section class="section" style="background: hsl(223, 9%, 66%);">
      <div class="o-container">
        <div class="o-grid">
          <div class="o-col-12 o-col-10--lg u-pre-1--lg">
            <div class="section__title u-flex u-flex-middle u-flex-between u-flex-wrap">
              <h3>Ark Pure</h3>
              <base-button
                href="https://github.com/giliamverheide/ARK-Pure"
                target="_blank"
                rel="noopener"
                size="small"
                variant="outline"
                icon="arrow-right"
                icon-position="right"
                >View on Github</base-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <figure class="o-image">
              <div class="image__inner">
                <picture>
                  <source
                    :srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pure-dashboard.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pure-dashboard.png`)
                    "
                    type="image/png"
                  />
                  <img
                    :src="require(`~/assets/images/projects/ark-wallet-themes/pure-dashboard.png`)"
                    width="1400"
                    height="1000"
                    class=""
                  />
                </picture>
              </div>
            </figure>
          </div>
          <div class="swiper-slide">
            <figure class="o-image">
              <div class="image__inner">
                <picture>
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pure-wallets.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pure-wallets.png`)
                    "
                    type="image/png"
                  />
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    :data-src="
                      require(`~/assets/images/projects/ark-wallet-themes/pure-wallets.png`)
                    "
                    width="1400"
                    height="1000"
                    class="lazyload"
                  />
                </picture>
              </div>
            </figure>
          </div>
          <div class="swiper-slide">
            <figure class="o-image">
              <div class="image__inner">
                <picture>
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pure-transfer.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pure-transfer.png`)
                    "
                    type="image/png"
                  />
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    :data-src="
                      require(`~/assets/images/projects/ark-wallet-themes/pure-transfer.png`)
                    "
                    width="1400"
                    height="1000"
                    class="lazyload"
                  />
                </picture>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section"
      style="background: #50505c linear-gradient(19deg, #838392 0%, #50505c 100%);"
    >
      <div class="o-container">
        <div class="o-grid">
          <div class="o-col-12 o-col-10--lg u-pre-1--lg">
            <div class="section__title u-flex u-flex-middle u-flex-between u-flex-wrap">
              <h3>Ark Pro</h3>
              <base-button
                href="https://github.com/giliamverheide/ARK-Pro"
                target="_blank"
                rel="noopener"
                size="small"
                variant="outline"
                icon="arrow-right"
                icon-position="right"
                >View on Github</base-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <figure class="o-image">
              <div class="image__inner">
                <picture>
                  <source
                    :srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pro-dashboard.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pro-dashboard.png`)
                    "
                    type="image/png"
                  />
                  <img
                    :src="require(`~/assets/images/projects/ark-wallet-themes/pro-dashboard.png`)"
                    width="1400"
                    height="1000"
                    class="lazyload"
                  />
                </picture>
              </div>
            </figure>
          </div>
          <div class="swiper-slide">
            <figure class="o-image">
              <div class="image__inner">
                <picture>
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pro-wallets.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pro-wallets.png`)
                    "
                    type="image/png"
                  />
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    :data-src="
                      require(`~/assets/images/projects/ark-wallet-themes/pro-wallets.png`)
                    "
                    width="1400"
                    height="1000"
                    class="lazyload"
                  />
                </picture>
              </div>
            </figure>
          </div>
          <div class="swiper-slide">
            <figure class="o-image">
              <div class="image__inner">
                <picture>
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pro-transfer.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/pro-transfer.png`)
                    "
                    type="image/png"
                  />
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    :data-src="
                      require(`~/assets/images/projects/ark-wallet-themes/pro-transfer.png`)
                    "
                    width="1400"
                    height="1000"
                    class="lazyload"
                  />
                </picture>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section"
      style="background: #b5a6c5 linear-gradient(19deg, #dcedf1 0%, #b5a6c5 100%);"
    >
      <div class="o-container">
        <div class="o-grid">
          <div class="o-col-12 o-col-10--lg u-pre-1--lg">
            <div class="section__title u-flex u-flex-middle u-flex-between u-flex-wrap">
              <h3>Ark Breeze</h3>
              <base-button
                href="https://github.com/giliamverheide/ARK-Breeze"
                target="_blank"
                rel="noopener"
                size="small"
                variant="outline"
                icon="arrow-right"
                icon-position="right"
                >View on Github</base-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <figure class="o-image">
              <div class="image__inner">
                <picture>
                  <source
                    :srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/breeze-dashboard.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/breeze-dashboard.png`)
                    "
                    type="image/png"
                  />
                  <img
                    :src="
                      require(`~/assets/images/projects/ark-wallet-themes/breeze-dashboard.png`)
                    "
                    width="1400"
                    height="1000"
                    class="lazyload"
                  />
                </picture>
              </div>
            </figure>
          </div>
          <div class="swiper-slide">
            <figure class="o-image">
              <div class="image__inner">
                <picture>
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/breeze-wallets.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/breeze-wallets.png`)
                    "
                    type="image/png"
                  />
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    :data-src="
                      require(`~/assets/images/projects/ark-wallet-themes/breeze-wallets.png`)
                    "
                    width="1400"
                    height="1000"
                    class="lazyload"
                  />
                </picture>
              </div>
            </figure>
          </div>
          <div class="swiper-slide">
            <figure class="o-image">
              <div class="image__inner">
                <picture>
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/breeze-transfer.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :data-srcset="
                      require(`~/assets/images/projects/ark-wallet-themes/breeze-transfer.png`)
                    "
                    type="image/png"
                  />
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    :data-src="
                      require(`~/assets/images/projects/ark-wallet-themes/breeze-transfer.png`)
                    "
                    width="1400"
                    height="1000"
                    class="lazyload"
                  />
                </picture>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import BaseContent from '@/components/base-content';
import BaseButton from '@/components/base-button';

export default {
  components: {
    BaseContent,
    BaseButton
  },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      totalDownloads: 500,
      npmPackages: ['@giliam/ark-pro', '@giliam/ark-breeze', '@giliam/ark-pure']
    };
  },
  computed: {
    currentDate() {
      const date = new Date();
      const y = date.getFullYear().toString();
      const m = (date.getMonth() + 1).toString();
      const d = date.getDate().toString();
      const mm = m < 10 ? `0${m}` : m;
      const dd = d < 10 ? `0${d}` : d;
      return `${y}-${mm}-${dd}`;
    }
  },
  mounted() {
    this.getNpmDownloads('2020-01-01', this.currentDate, this.npmPackages);
    this.swiper = new Swiper('.swiper-container', {
      autoHeight: true,
      spaceBetween: 50,
      slidesPerView: 'auto',
      centeredSlides: true,
      grabCursor: true
    });
  },
  methods: {
    async getNpmDownloads(
      start /* yyyy-mm-dd */,
      end /* yyyy-mm-dd */,
      packageNames /* ['1', '2', '3'] */
    ) {
      try {
        const data = await Promise.all(
          packageNames.map(npmPackage =>
            fetch(
              `https://api.npmjs.org/downloads/point/${start}:${end}/${npmPackage}`
            ).then(resp => resp.json())
          )
        ).then(result => {
          return result;
        });

        this.totalDownloads = data.reduce((a, b) => {
          return a + b.downloads;
        }, 0);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  padding: 0 0 3rem 0;
  // margin: 10rem 0;

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
