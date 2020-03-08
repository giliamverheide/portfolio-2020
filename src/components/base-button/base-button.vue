<template>
  <component
    :is="componentTag"
    class="c-button"
    :class="[variant && 'c-button--' + variant, size && 'c-button--' + size]"
    :href="href"
    :target="target"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <base-icon v-if="icon && iconPosition === 'left'" :icon="icon" />
    <span class="button__label">
      <slot>Submit</slot>
    </span>
    <base-icon v-if="icon && iconPosition === 'right'" :icon="icon" />
  </component>
</template>

<script>
import BaseIcon from '@/components/base-icon';

export default {
  components: {
    BaseIcon
  },
  props: {
    name: {
      type: String,
      default: null
    },

    // Applies a color variant to the component
    variant: {
      type: String,
      default: null
    },

    // The value to set the button's 'type' attribute to. Can be one of 'button', 'submit', or 'reset'
    type: {
      type: String,
      default: 'button'
    },

    // Denotes the target URL of the link for standard a links
    href: {
      type: String,
      default: null
    },

    // Sets the 'target' attribute on the rendered link
    target: {
      type: String,
      default: '_self'
    },

    // Specify the HTML tag to render instead of the default tag
    tag: {
      type: String,
      default: 'button'
    },

    // Set the size of the component's appearance. 'small' or 'large'
    size: {
      type: String,
      default: null
    },

    // When set to 'true', disables the component's functionality and places it in a disabled state
    disabled: {
      type: Boolean,
      default: false
    },

    // Adds an icon to the component from the 'assets/svg' directory
    icon: {
      type: String,
      default: null
    },

    iconPosition: {
      type: String,
      default: 'right',
      validator(value) {
        return ['left', 'right'].indexOf(value) !== -1;
      }
    }
  },

  computed: {
    componentTag() {
      return this.href ? 'a' : this.tag;
    },
    iconPath() {
      return `~/assets/svg/${this.icon}.svg`;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>

<style lang="scss" scoped>
.c-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  user-select: none;
  text-decoration: none;
  vertical-align: top;
  text-align: center;
  margin: 0;
  padding: 1.75rem 2.5rem;
  min-width: 240px;
  line-height: 1.5;
  border: 0;
  font-weight: 600;
  appearance: none;
  cursor: pointer;
  background-color: #333333;
  color: #fff;
  transition: transform 0.08s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  z-index: 2;

  &:active {
    transform: translateY(0.2rem);
  }

  /deep/ .c-icon {
    margin-top: 2px;
    margin-left: 1em;
  }

  .button__icon {
    display: inline-block;
    font-size: 0;
    margin-right: 1rem;

    svg {
      fill: currentColor;
      transition-property: fill;
    }
  }

  .button__label {
    position: relative;
    display: inline-block;
    margin-right: auto;
    z-index: 1;
  }

  &:not(:disabled):hover {
    background-color: $color-secondary;
  }
}

// Style variants

.c-button--primary {
  background-color: $color-primary;
  color: $color-white;

  &:not(:disabled):hover {
    background-color: darken($color-primary, 10%);
  }
}

.c-button--secondary {
  background-color: $color-secondary;
  color: $color-white;

  &:not(:disabled):hover {
    background-color: darken($color-secondary, 10%);
  }
}

.c-button--outline {
  background-color: transparent;
  box-shadow: inset 0 0 0 2px $color-white;

  &:not(:disabled):hover {
    background-color: $color-white;
    color: $color-background-html;
  }
}

// .c-button--secondary {}

// Size variants

.c-button--xsmall {
  font-size: $font-size-body * 0.75;
  padding: 0.5rem 1rem;
}

.c-button--small {
  font-size: $font-size-body * 0.875;
  padding: 1rem 1.5rem;
  min-width: 160px;
}

.c-button--large {
  font-size: $font-size-body * 1.125;
  padding: 2.75rem 3rem;
  min-width: 270px;
}

.c-button--xlarge {
  font-size: $font-size-body * 1.25;
  padding: 2.5rem 3.5rem;
}

// Shape variants

.c-button--circle {
  position: relative;
  display: inline-flex;
  align-items: center;
  user-select: none;
  text-decoration: none;
  vertical-align: top;
  text-align: center;
  margin: 0;
  padding: 1rem 2rem;
  line-height: 1.5;
  border: 0;
  font-weight: $font-weight-bold;
  appearance: none;
  cursor: pointer;
  background: linear-gradient(115deg, #2ab2ff 14.05%, #0081c9 85.29%);
  width: 8.5em;
  height: 8.5em;
  border-radius: 50%;
  margin: 3px;
  color: #fff;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    right: 3px;
    bottom: 3px;
    background: #11a8fd linear-gradient(115deg, #157cc7 14.75%, #1eaeff 84.81%);
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.1s ease-in-out;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: -12px -15px 40px rgba(255, 255, 255, 0.08), 12px 15px 40px #000000;
    background: linear-gradient(115deg, #2ab2ff 14.05%, #0081c9 85.29%);
    border-radius: 50%;
    z-index: -1;
    pointer-events: none;
    transition: box-shadow 0.3s ease;
  }

  .button__label {
    position: relative;
  }

  /deep/ .c-icon {
    position: relative;
  }
}
</style>
