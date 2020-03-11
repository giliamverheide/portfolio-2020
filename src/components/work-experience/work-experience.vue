<template>
  <div class="c-work-experience">
    <h2>Experience</h2>
    <ul class="work-experience__list">
      <li v-for="(item, index) in experience" :key="index" class="work-experience__list__item">
        <div class="work-experience__list__item__info">
          <div class="work-experience__list__item__info__company">
            <base-link :href="item.companyUrl" underline target="_blank" rel="noopener">
              {{ item.company }}
            </base-link>
          </div>
          <div class="work-experience__list__item__info__role">
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div class="work-experience__list__item__date">
          <span class="work-experience__list__item__date__start">{{ item.dateStart }}</span>
          <span class="work-experience__list__item__date__end">{{ item.dateEnd }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseLink from '@/components/base-link';

export default {
  components: {
    BaseLink
  },
  data() {
    return {
      experience: [
        {
          company: 'Freelance',
          companyUrl: 'https://giliamverheide.nl',
          title: 'Front-end developer',
          dateStart: '2012',
          dateEnd: 'present'
        },
        {
          company: 'Logodrops',
          companyUrl: 'https://logodrops.com',
          title: 'Co-founder',
          dateStart: '2017',
          dateEnd: 'present'
        },
        {
          company: 'TamTam (now Dept)',
          companyUrl: 'https://deptagency.com',
          title: 'Front-end developer',
          dateStart: '2016',
          dateEnd: '2017'
        },
        {
          company: 'Wezz e-Commerce',
          companyUrl: 'https://wezz.nl',
          title: 'Front-end developer',
          dateStart: '2014',
          dateEnd: '2016'
        },
        {
          company: 'AppYourService',
          companyUrl: 'http://appyourservice.nu',
          title: 'Web developer and designer',
          dateStart: '2016',
          dateEnd: '2017'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.c-work-experience {
  display: flex;
  align-items: flex-start;
  margin: 14rem 0;

  h2 {
    margin-right: 14rem;
  }
}

.work-experience__list {
  flex: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
}

.work-experience__list__item {
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  padding: 3rem 0;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #3e3e3e;
  display: flex;
  align-items: center;
  // margin-bottom: 4rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    // margin-top: -1px;
    border-bottom-width: 0;
  }
}

.work-experience__list__item__info {
  margin-right: auto;
}

.work-experience__list__item__info__company {
  @include fluid-type(320px, 1800px, 16px, 20px);
  margin-right: 6rem;
}

.work-experience__list__item__info__role {
  @include fluid-type(320px, 1800px, 16px, 28px);
  // color: #666;
}

.work-experience__list__item__date {
  display: flex;
  margin-left: auto;
}

.work-experience__list__item__date__start {
  position: relative;
}

.work-experience__list__item__date__end {
  position: relative;

  &::before {
    content: '-';
    margin: 0 1rem;
  }
}
</style>
