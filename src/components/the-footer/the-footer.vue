<template>
  <footer class="c-footer">
    <div class="o-container">
      <div class="footer__copyright">
        <span>Giliam Verheide &copy; 2020</span>
      </div>
      <ul class="footer__links">
        <li class="footer__links__item">
          <base-link
            href="https://github.com/giliamverheide/"
            underline
            target="_blank"
            rel="noopener"
          >
            Github
          </base-link>
        </li>
        <li class="footer__links__item">
          <base-link href="https://dribbble.com/gv" underline target="_blank" rel="noopener">
            Dribbble
          </base-link>
        </li>
        <li class="footer__links__item">
          <base-link
            href="https://www.linkedin.com/in/giliam-verheide/"
            underline
            target="_blank"
            rel="noopener"
          >
            Linkedin
          </base-link>
        </li>
      </ul>
    </div>
  </footer>
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
.c-footer {
  display: flex;
  align-items: center;
  padding: 3rem 0;
  margin-top: 4rem;

  @include screen-mobile-plus-and-bigger {
    padding: 4rem 0;
    margin-top: 6rem;
  }

  @include screen-tablet-landscape-and-bigger {
    padding: 5rem 0;
    margin-top: 8rem;
  }

  @include screen-laptop-and-bigger {
    padding: 6rem 0;
    margin-top: 10rem;
  }

  .o-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @include screen-tablet-portrait-and-bigger {
      flex-direction: row;
    }
  }
}

.footer__copyright {
  margin-bottom: 1em;

  @include screen-tablet-portrait-and-bigger {
    margin-bottom: 0;
  }
}

.footer__links {
  list-style: none;
  display: flex;
}

.footer__links__item {
  margin-right: 3rem;

  @include screen-tablet-landscape-and-bigger {
    margin-right: 5rem;
  }

  @include screen-laptop-and-bigger {
    margin-right: 6rem;
  }

  @include screen-desktop-and-bigger {
    margin-right: 7rem;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>
