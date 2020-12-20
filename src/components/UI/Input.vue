<template>
    <div class='form-control'>
      <label :for=id>{{label}}</label>
      <input :type="type" :id="id" :value="value" :name="name">
    </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'input',
    },
    label: {
      type: String,
      required: true,
    },
    value: String,
    name: String,
    errorText: {
      type: String,
    },
  },
};
</script>

<style scoped>
  .form-control {
    margin: 1rem 0;
    width: 50%;
  }

  @media only screen and (max-width: 400px) {
    .from-control {
      width: 80%;
    }
  }

  .form-control label,
  .form-control input {
    display: block;
  }

  .form-control label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: lightsalmon;
  }

  .form-control input {
    height: 3rem;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    background: #f8f8f8;
    padding: 0.15rem 0.25rem;
  }
  @media only screen and (max-height: 42rem) {
    .form-control input,
   .form-control textarea  {
      height: 2rem;
    }
  }

  .form-control input:focus,
  .form-control textarea:focus {
    outline: none;
    background: #ebebeb;
    border-color: #510077;
  }

  .form-control--invalid label,
  .form-control--invalid p {
    color: red;
  }

  .form-control--invalid input,
  .form-control--invalid textarea {
    border-color: red;
    background: #ffd1d1;
  }
</style>
