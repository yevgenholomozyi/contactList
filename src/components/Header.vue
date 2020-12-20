<template>
  <header class = 'header'>
    <h1 class = 'heading'>My Awesome Contact List</h1>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters('contacts', ['rollbackStack']),
  },
};
</script>
<style scoped>
  .header {
    width: 100%;
    height: 6vh;
    background-color: lightsalmon;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heading {
    width: 50%;
    font-size: 2.5rem;
    color: white;
    text-align: center;
    font-style: italic;
  }
  @media only screen and (max-width: 61rem) {
    .heading {
      width: 70%;
      font-size: 2rem;
    }
  }
   @media only screen and (max-width: 34rem) {
    .header {
      height: 7rem;
    }
  }
</style>
