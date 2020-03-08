<template>
  <article>
    <div class="o-container">
      <figure class="o-image">
        <div class="image__inner">
          <picture>
            <source
              :data-srcset="
                require(`@/assets/images/projects/moviestream/desktop/register.jpg?webp`)
              "
              type="image/webp"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              :data-src="require(`@/assets/images/projects/moviestream/desktop/register.jpg`)"
              width="1600"
              height="1000"
              class="lazyload"
            />
          </picture>
        </div>
      </figure>

      <figure class="o-image">
        <div class="image__inner">
          <picture>
            <source
              :data-srcset="
                require(`@/assets/images/projects/moviestream/desktop/discover.jpg?webp`)
              "
              type="image/webp"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              :data-src="require(`@/assets/images/projects/moviestream/desktop/discover.jpg`)"
              width="1600"
              height="1000"
              class="lazyload"
            />
          </picture>
        </div>
      </figure>

      <figure class="o-image">
        <div class="image__inner">
          <picture>
            <source
              :data-srcset="require(`@/assets/images/projects/moviestream/desktop/movie.jpg?webp`)"
              type="image/webp"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              :data-src="require(`@/assets/images/projects/moviestream/desktop/movie.jpg`)"
              width="1600"
              height="1000"
              class="lazyload"
            />
          </picture>
        </div>
      </figure>

      <figure class="o-image">
        <div class="image__inner">
          <picture>
            <source
              :data-srcset="require(`@/assets/images/projects/moviestream/desktop/search.jpg?webp`)"
              type="image/webp"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              :data-src="require(`@/assets/images/projects/moviestream/desktop/search.jpg`)"
              width="1600"
              height="1000"
              class="lazyload"
            />
          </picture>
        </div>
      </figure>

      <figure class="o-image">
        <div class="image__inner">
          <picture>
            <source
              :data-srcset="require(`@/assets/images/projects/moviestream/desktop/tvshow.jpg?webp`)"
              type="image/webp"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              :data-src="require(`@/assets/images/projects/moviestream/desktop/tvshow.jpg`)"
              width="1600"
              height="1000"
              class="lazyload"
            />
          </picture>
        </div>
      </figure>

      <figure class="o-image">
        <div class="image__inner">
          <picture>
            <source
              :data-srcset="
                require(`@/assets/images/projects/moviestream/desktop/tvshow-modal.jpg?webp`)
              "
              type="image/webp"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              :data-src="require(`@/assets/images/projects/moviestream/desktop/tvshow-modal.jpg`)"
              width="1600"
              height="1000"
              class="lazyload"
            />
          </picture>
        </div>
      </figure>

      <figure class="o-image">
        <div class="image__inner">
          <picture>
            <source
              :data-srcset="
                require(`@/assets/images/projects/moviestream/desktop/premium.png?webp`)
              "
              type="image/webp"
            />
            <img
              :data-src="require(`@/assets/images/projects/moviestream/desktop/premium.png`)"
              width="1600"
              height="1000"
              class="lazyload"
            />
          </picture>
        </div>
      </figure>
    </div>
  </article>
</template>

<script>
export default {
  components: {}
};
</script>
