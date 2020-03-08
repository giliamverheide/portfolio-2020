<template>
  <a :href="href" :target="target" :rel="rel" class="c-link">
    <base-icon v-if="icon && iconPosition === 'left'" :icon="icon" />
    <span class="link__text">
      <slot />
    </span>
    <base-icon v-if="icon && iconPosition === 'right'" :icon="icon" />
    <span v-if="underline" class="svg-link-line">
      <svg-line />
    </span>
  </a>
</template>

<script>
import BaseIcon from '@/components/base-icon';
import SvgLine from '@/assets/svg/link-line.svg';

export default {
  components: {
    BaseIcon,
    SvgLine
  },
  props: {
    href: {
      type: String,
      default: '#',
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].indexOf(value) !== -1;
      }
    },
    underline: {
      type: Boolean,
      default: null
    },
    target: {
      type: String,
      default: '_blank'
    },
    rel: {
      type: String,
      default: 'noopener'
    }
  }
};
</script>

<style lang="scss" scoped>
$link-transition-time: 200ms;
$link-transition-ease: ease;

// most basic link style
%link-base {
  position: relative;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  text-overflow: ellipsis;
  display: inline-flex;
  align-items: center;
  vertical-align: top;
}

.c-link {
  @extend %link-base;
  color: $color-primary;
  transition: color $link-transition-time $link-transition-ease;

  .svg-link-line {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;

    svg {
      overflow: hidden;
      margin: 0;
      width: 100%;
      height: 4px;
      transition: stroke-dashoffset 0.3s ease-in-out;
      fill: none;
      stroke: currentColor;
      stroke-width: 5;
      stroke-dasharray: 700px;
      stroke-dashoffset: 700px;
    }
  }

  .link__text + .c-icon,
  .c-icon + .link__text {
    margin-left: 0.4em;
  }

  &:hover {
    .link__text + .c-icon,
    .c-icon + .link__text {
      margin-left: 0.75em;
    }

    .svg-link-line svg {
      stroke-dashoffset: 0px;
    }

    [data-icon='arrow-top-right'] {
      transform: rotate(45deg);
    }
  }
}

.link__text {
  display: inline-block;
  transition: transform 0.3s $ease-in-out-cubic, margin 0.3s $ease-in-out-cubic;
}
</style>
