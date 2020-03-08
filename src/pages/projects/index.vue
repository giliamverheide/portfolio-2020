<template>
  <div>
    <work-list />
  </div>
</template>

<script>
import animate from '@/mixins/animate';
import WorkList from '@/components/work-list';

export default {
  components: {
    WorkList
  },
  mixins: [animate],
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    }
  },
  head() {
    return {
      title: 'Projects'
    };
  }
};
</script>

<style lang="scss" scoped></style>
