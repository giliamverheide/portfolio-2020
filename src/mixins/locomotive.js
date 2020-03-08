import _ from 'lodash';
import imagesLoaded from 'imagesloaded';

export default {
  data() {
    return {
      scrollPosition: 0,
      lmS: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.lmS = new this.LocomotiveScroll({
        el: document.querySelector('[js-smoothscroll]'),
        smooth: true,
        scrollbarClass: 'o-scrollbar'
      });

      this.lmS.on('scroll', _.throttle(this.onLmsScroll, 150));
      window.addEventListener('resize', _.debounce(this.onLmsResize.bind(this), 100));

      imagesLoaded('#app', () => {
        this.lmS.update();
      });
    });
  },
  destroyed() {
    this.lmS.destroy();
    window.removeEventListener('resize', this.onLmsResize);
  },
  methods: {
    onLmsScroll(obj) {
      this.scrollPosition = obj.scroll.y;
    },
    onLmsResize() {
      this.lmS.update();
    }
  }
};
