<template>
  <div>
    <home-intro />
    <base-marquee>Selected projects</base-marquee>
    <work-list />
  </div>
</template>

<script>
import HomeIntro from '@/components/home-intro';
import WorkList from '@/components/work-list';
import BaseMarquee from '@/components/base-marquee';

export default {
  components: {
    HomeIntro,
    WorkList,
    BaseMarquee
  }
};
</script>
