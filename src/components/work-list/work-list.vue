<template>
  <div id="section-work" class="work">
    <div class="work__list">
      <div class="o-container">
        <work-list-item
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
          data-scroll
        ></work-list-item>
      </div>
    </div>
  </div>
</template>

<script>
import WorkListItem from '@/components/work-list-item';

export default {
  components: {
    WorkListItem
  },
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    }
  },
  created() {},
  beforeMount() {},
  mounted() {
    const workItems = document.querySelectorAll('.work__item');
    workItems.forEach(item => {
      this.$observe(item);
    });
  }
};
</script>

<style lang="scss" scoped>
.work {
  // margin-top: 4vw;

  .o-container {
    position: relative;
  }
}

.work__list__title {
  // position: absolute;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  h2 {
    // position: absolute;
    display: flex;
    align-items: center;
    font-size: 8vw;
    white-space: nowrap;
    text-transform: uppercase;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 2px $color-white;

    .work__list__title__label {
      display: inline;
      white-space: nowrap;
    }

    .work__list__title__icon {
      svg {
        margin: 0 3vw;

        path {
          fill: none;
        }
      }
    }
  }
}
</style>
