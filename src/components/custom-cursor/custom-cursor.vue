<template>
  <div class="c-cursor">
    <div class="cursor">
      <div class="cursor__inner"></div>
    </div>
    <canvas class="cursor cursor--canvas" resize></canvas>
  </div>
</template>

<script>
import paper from 'paper';

export default {
  data() {
    return {
      cursor: {
        el: null,
        innerEl: null,
        innerWidth: 6,
        clientX: -100,
        clientY: -100,
        lastX: 0,
        lastY: 0
      },
      cursorCanvas: {
        el: null,
        radius: 26,
        fillColor: 'rgba(0, 0, 0, 0.0)',
        strokeColor: 'rgba(255, 255, 255, 0.3)',
        strokeWidth: 1,
        segments: 8
      },
      isStuck: false,
      showCursor: false,
      arrowCursor: false
    };
  },
  mounted() {
    if (this.isTouchDevice()) return;
    this.cursor.el = document.querySelector('.cursor');
    this.cursor.innerEl = document.querySelector('.cursor__inner');
    this.cursorCanvas.el = document.querySelector('.cursor--canvas');
    this.setCursorWidth(this.cursor.innerWidth);
    this.initCursor();
    this.initCanvas();
    this.initHovers();
  },
  methods: {
    isTouchDevice() {
      const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

      const mq = query => window.matchMedia(query).matches;

      // eslint-disable-next-line no-undef
      if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
        return true;
      }

      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
      return mq(query);
    },

    initCursor() {
      document.addEventListener('mousemove', e => {
        this.cursor.clientX = e.clientX;
        this.cursor.clientY = e.clientY;
      });

      // requestAnimationFrame() for smooth performance
      const render = () => {
        this.cursor.el.style.transform = `translate(${this.cursor.clientX}px,${this.cursor.clientY}px)`;
        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);
    },

    setCursorWidth(innerWidth) {
      this.cursor.innerWidth = innerWidth;
      this.cursor.innerEl.style.width = `${this.cursor.innerWidth}px`;
    },

    initCanvas() {
      paper.setup(this.cursorCanvas.el);
      const { fillColor, strokeColor, strokeWidth, segments, radius } = this.cursorCanvas;

      // Base shape for the noisy circle
      const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);
      polygon.strokeColor = strokeColor;
      polygon.strokeWidth = strokeWidth;
      polygon.fillColor = fillColor;
      polygon.smooth();
      const group = new paper.Group([polygon]);
      group.applyMatrix = false;

      // Function for linear interpolation of values
      const lerp = (a, b, n) => {
        return (1 - n) * a + n * b;
      };

      // Draw loop of Paper.js
      // (60fps with requestAnimationFrame under the hood)
      paper.view.onFrame = () => {
        // Using linear interpolation, the circle will move 0.2 (20%)
        // of the distance between its current position and the mouse
        // coordinates per Frame
        const followSpeed = 0.15;
        this.cursor.lastX = lerp(this.cursor.lastX, this.cursor.clientX, followSpeed);
        this.cursor.lastY = lerp(this.cursor.lastY, this.cursor.clientY, followSpeed);
        group.position = new paper.Point(this.cursor.lastX, this.cursor.lastY);
      };
    },

    initHovers() {
      // find the center of the link element and set stuckX and stuckY
      // these are needed to set the position of the noisy circle
      const handleMouseEnter = () => {
        // this.arrowCursor = true;
        this.setCursorWidth(20);
      };

      // reset isStuck on mouseLeave
      const handleMouseLeave = () => {
        // this.arrowCursor = false;
        this.setCursorWidth(this.$options.data().cursor.innerWidth);
      };

      const links = document.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.c-cursor {
  display: none;

  @include screen-tablet-portrait-and-bigger {
    display: block;
  }
}

.cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
}

.cursor__inner {
  width: 6px;
  height: 0;
  padding-bottom: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 13000;
  background: $color-white;
  transition: width 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.arrow-cursor {
  width: 150px;
  height: 110px;
  position: fixed;
  left: -75px;
  top: -55px;
  z-index: 10000000;
  pointer-events: none;
}

.arrow-cursor__icon {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.arrow-cursor__path {
  fill: $color-white;
  stroke: $color-white;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5px;
}

.cursor--canvas {
  width: 100vw;
  height: 100vh;
  z-index: 12000;
}
</style>
