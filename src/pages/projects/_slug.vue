<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <work-hero :project="project"></work-hero>
    <component :is="projectContent" :project="project" />
    <cta-full :next-project="nextProject" />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars, global-require */
import animate from '@/mixins/animate';
import WorkHero from '@/components/work-hero';
import CtaFull from '@/components/cta-full';

const getProjectContent = fileName => ({
  component: import(`@/projects/${fileName}`)
});

export default {
  scrollToTop: true,
  components: {
    WorkHero,
    CtaFull
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
    },
    projectIndex() {
      return this.$store.state.projects.projects.findIndex(project => project.slug === this.slug);
    },
    nextProject() {
      return this.projectIndex + 1 === this.$store.state.projects.projects.length
        ? this.$store.state.projects.projects[0]
        : this.$store.state.projects.projects[this.projectIndex + 1];
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
