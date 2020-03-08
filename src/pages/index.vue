<template>
  <div>
    <home-intro />
    <!-- <section>
      <div class="o-container">
        <div class="o-grid">
          <div class="o-col-12 o-col-8--lg u-pre-4--lg">
            <h2>Awards</h2>
            <p>Something here</p>
          </div>
        </div>
      </div>
    </section> -->
    <work-list />
  </div>
</template>

<script>
import animate from '@/mixins/animate';
import HomeIntro from '@/components/home-intro';
import WorkList from '@/components/work-list';

export default {
  components: {
    HomeIntro,
    WorkList
  },
  mixins: [animate]
};
</script>

<style lang="scss"></style>
