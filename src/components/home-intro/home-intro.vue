<template>
  <section class="c-intro">
    <div class="o-container">
      <div class="intro__heading">
        <div class="text--intro u-animate u-animate-delay--100 js-animate">
          <h1>
            Hello! I'm Giliam Verheide, a twenty-four year old Dutch digital designer and front-end
            developer.
          </h1>
          <span>
            Currently freelancing and building
            <base-link href="https://logodrops.com" underline target="_blank" rel="noopener"
              >Logodrops</base-link
            >, a do-it-yourself logo maker.
          </span>
        </div>
        <div class="intro__image">
          <base-image image="me-bw.png" />
        </div>
      </div>

      <p class="u-animate u-animate-delay--250 js-animate">
        I've had the pleasure to work for clients such as Damen Shipyards Group, Nationale Opera en
        Ballet, ASN Bank, Bouwgarant, Vacanceselect and more.
      </p>

      <p class="u-animate u-animate-delay--400 js-animate">
        Previously a front-end developer at
        <base-link href="https://deptagency.com" underline target="_blank" rel="noopener">
          TamTam (now Dept)
        </base-link>
        (2016-2017) and
        <base-link href="https://wezz.nl" underline target="_blank" rel="noopener">
          Wezz e-Commerce
        </base-link>
        (2014-2016) and designer at
        <base-link href="http://appyourservice.nl" underline target="_blank" rel="noopener">
          AppYourService
        </base-link>
        (2013-2014).
      </p>

      <p class="u-animate u-animate-delay--550 js-animate">
        <base-link href="https://www.linkedin.com/in/giliam-verheide/" icon="arrow-top-right">
          View Linkedin profile
        </base-link>
      </p>
    </div>
  </section>
</template>

<script>
import BaseLink from '@/components/base-link';
import BaseImage from '@/components/base-image';

export default {
  components: {
    BaseLink,
    BaseImage
  }
};
</script>

<style lang="scss" scoped>
.c-intro {
  position: relative;
  padding-top: calc(2rem + 4%);
  // padding-bottom: calc(2rem + 6%);
  // margin-bottom: 12rem;

  h1 {
    display: inline;
  }

  .text--intro {
    margin-bottom: 4em;

    h1,
    span {
      @include fluid-type(320px, 1800px, 22px, 46px);
      line-height: 1.4;
      font-weight: 400;
    }
  }

  p {
    @include fluid-type(320px, 1800px, 16px, 26px);
    line-height: 1.65;
    font-weight: 400;
    max-width: 40em;

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
}

.intro__heading {
  position: relative;
}

.intro__image {
  display: none;

  @include screen-laptop-and-bigger {
    display: block;
    position: absolute;
    top: -50%;
    right: -30px;
    width: 28vw;
    max-width: 520px;
    z-index: -1;
  }

  @include screen-desktop-and-bigger {
    top: -80%;
  }

  .c-image {
    opacity: 0;
    transition: opacity 0.7s $ease-in-cubic;
    transition-delay: 0.2s;

    &.lazyloaded {
      opacity: 0.2;
    }
  }
}
</style>
