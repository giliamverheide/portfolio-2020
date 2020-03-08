<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <work-hero :project="project"></work-hero>
    <component :is="projectContent" :project="project" />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars, global-require */
import animate from '@/mixins/animate';
import WorkHero from '@/components/work-hero';

const getProjectContent = fileName => ({
  component: import(`@/projects/${fileName}`)
});

export default {
  scrollToTop: true,
  components: {
    WorkHero
  },
  mixins: [animate],
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    project() {
      return this.$store.state.projects.projects.find(project => project.slug === this.slug);
    }
  },
  beforeCreate() {
    const projectName = this.$store.state.projects.projects.find(
      project => project.slug === this.$route.params.slug
    );
    const fileName = projectName.title.toLowerCase().replace(/ /g, '-');
    this.projectContent = () => getProjectContent(fileName);
  },
  head() {
    return {
      htmlAttrs: {
        style: `background-color: ${this.project.backgroundColor}`
      },
      title: this.project.title
    };
  }
};
</script>

<style lang="scss" scoped></style>
