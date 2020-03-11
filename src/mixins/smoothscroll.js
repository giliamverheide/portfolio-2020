/* eslint-disable no-unused-vars */
import _ from 'lodash';
// import imagesLoaded from 'imagesloaded';

export default {
  data() {
    return {
      scrollPosition: {
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    console.log('mounted()');
    this.$nextTick(() => {
      // const scrollArea = document.querySelector('[js-smooth-scroll]');
      // this.lmS = new this.LocomotiveScroll({
      //   el: scrollArea,
      //   smooth: true,
      //   scrollbarClass: 'o-scrollbar'
      // });
      // this.lmS.on('scroll', _.throttle(this.onLmsScroll, 150));
      // window.addEventListener('resize', _.debounce(this.onLmsResize.bind(this), 100));
      // imagesLoaded('#app', () => {
      //   this.lmS.update();
      // });
      // Lazyload
      // document.addEventListener('lazybeforeunveil', () => {
      //   console.log(e);
      //   this.lmS.update();
      // });
    });
  },
  destroyed() {
    console.log('destroyed()');
    // this.lmS.destroy();
    // window.removeEventListener('resize', this.onLmsResize);
  },
  methods: {
    onLmsScroll(obj) {
      // this.scrollPosition = obj.scroll.y;
    },
    onLmsResize() {
      // this.lmS.update();
    }
  }
};
