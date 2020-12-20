<template>
  <button
    :type=type
    class="button"
    :class="{
      center: center,
      button__danger: danger,
      button__inverse: inverse,
      button__big: big,
    }"
  >
    {{caption}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    caption: {
      type: String,
      required: true,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
    big: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
  .button {
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid lightsalmon;
    border-radius: 4px;
    background: lightsalmon;
    color: white;
    cursor: pointer;
    margin-right: 1rem;
    text-decoration: none;
    display: inline-block;
  }

  .center {
    margin: 0 auto;
  }

  .button:focus {
    outline: none;
  }

  .button:hover,
  .button:active {
    background: #ff4382;
    border-color: #ff4382;
  }

  .button__inverse {
    background: transparent;
    color: lightsalmon;
  }

  .button__inverse:hover,
  .button__inverse:active {
    color: white;
    background: lightsalmon;
  }

  .button__danger {
    background: #830000;
    border-color: #830000;
  }

  .button__danger:hover,
  .button__danger:active {
    background: #f34343;
    border-color: #f34343;
  }

  .button:disabled,
  .button:hover:disabled,
  .button:active:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
  }

  .button__small {
    font-size: 0.8rem;
  }

  .button__big {
    font-size: 1.5rem;
  }
  @media only screen and (max-height: 42rem) {
    .button__big {
        font-size: 1rem;
    }
  }
</style>
