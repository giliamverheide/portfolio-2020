export default {
  mounted() {
    this.$nextTick(() => {
      this.observeAllElements();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.observeAllElements();
    });
  },
  methods: {
    observeAllElements() {
      const elements = document.querySelectorAll('.js-animate:not([data-observed="true"])');
      elements.forEach(el => {
        this.$observe(el);
      });
    }
  }
};
