<template>
  <div id="app">
    <div id="content">
      <Header />

      <main>
        <nuxt />
        <div class="o-page-transition"></div>
      </main>

      <TheFooter />
    </div>
  </div>
</template>

<script>
import Header from '@/components/the-header';
import TheFooter from '@/components/the-footer';

export default {
  components: {
    Header,
    TheFooter
  }
};
</script>

<style lang="scss">
#content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  main {
    margin-bottom: auto;
  }
}
</style>
