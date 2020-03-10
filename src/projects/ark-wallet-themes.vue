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
            <base-image
              image="projects/ark-wallet-themes/pure-dashboard.png"
              image-width="1400"
              image-height="1000"
              image-alt="Ark Wallet Theme Pure - Dashboard"
              :lazyload="false"
            />
          </div>
          <div class="swiper-slide">
            <base-image
              image="projects/ark-wallet-themes/pure-wallets.png"
              image-width="1400"
              image-height="1000"
              image-alt="Ark Wallet Theme Pure - Wallets"
            />
          </div>
          <div class="swiper-slide">
            <base-image
              image="projects/ark-wallet-themes/pure-transfer.png"
              image-width="1400"
              image-height="1000"
              image-alt="Ark Wallet Theme Pure - Transfer"
            />
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
            <base-image
              image="projects/ark-wallet-themes/pro-dashboard.png"
              image-width="1400"
              image-height="1000"
              image-alt="Ark Wallet Theme Pro - Dashboard"
              :lazyload="false"
            />
          </div>
          <div class="swiper-slide">
            <base-image
              image="projects/ark-wallet-themes/pro-wallets.png"
              image-width="1400"
              image-height="1000"
              image-alt="Ark Wallet Theme Pro - Wallets"
            />
          </div>
          <div class="swiper-slide">
            <base-image
              image="projects/ark-wallet-themes/pro-transfer.png"
              image-width="1400"
              image-height="1000"
              image-alt="Ark Wallet Theme Pro - Transfer"
            />
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
            <base-image
              image="projects/ark-wallet-themes/breeze-dashboard.png"
              image-width="1400"
              image-height="1000"
              image-alt="Ark Wallet Theme Breeze - Dashboard"
              :lazyload="false"
            />
          </div>
          <div class="swiper-slide">
            <base-image
              image="projects/ark-wallet-themes/breeze-wallets.png"
              image-width="1400"
              image-height="1000"
              image-alt="Ark Wallet Theme Breeze - Wallets"
            />
          </div>
          <div class="swiper-slide">
            <base-image
              image="projects/ark-wallet-themes/breeze-transfer.png"
              image-width="1400"
              image-height="1000"
              image-alt="Ark Wallet Theme Breeze - Transfer"
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
import BaseContent from '@/components/base-content';
import BaseButton from '@/components/base-button';
import BaseImage from '@/components/base-image';

export default {
  components: {
    BaseContent,
    BaseButton,
    BaseImage
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
