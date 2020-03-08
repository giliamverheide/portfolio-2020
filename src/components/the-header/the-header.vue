<template>
  <header class="c-header">
    <div class="o-container header__container">
      <div class="header__logo js-animate u-animate" data-animation-offset="20">
        <nuxt-link to="/" class="header__logo__link">
          <span class="header__logo__text">Giliam Verheide</span>
        </nuxt-link>
      </div>

      <nav class="header__nav">
        <ul class="header__nav__list">
          <li
            class="header__nav__list__item js-animate u-animate u-animate-delay--300"
            data-animation-offset="20"
          >
            <base-link
              href="mailto:giliam@verheide.com"
              class="header__nav__list__item__link"
              underline
              >giliam@verheide.com</base-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import BaseLink from '@/components/base-link';

export default {
  components: {
    BaseLink
  }
};
</script>

<style lang="scss" scoped>
.c-header {
  margin-bottom: 0;
}

.header__container {
  position: relative;
  display: flex;
  align-items: center;
  height: 12rem;
  z-index: 10;
}

.header__logo__link {
  color: $color-white;
  text-transform: uppercase;
  font-size: 2.2rem;
  font-weight: $font-weight-extrabold;
}

.header__nav {
  margin-left: auto;
}

.header__nav__list {
  display: flex;
  align-items: center;
  list-style: none;
}

.header__nav__list__item {
  display: flex;
  margin-left: 4rem;
}

.header__nav__list__item__link {
  color: rgba($color-white, 0.5);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.012em;

  &.nuxt-link-exact-active {
    color: $color-white;
  }
}
</style>
