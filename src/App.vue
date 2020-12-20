<template>
  <div class='app'>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
  },

};
</script>
<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    background-color: #948989;
  }

  .app {
    width: 100%;
    height: 100%;
  }

  .center {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bold {
    font-weight: bold;
  }
  .modal {
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    color: lightsalmon;
    width: 40%;
    min-height: 12rem;
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  .modal__erorr {
    color: red;
    text-align: center;
    font-size: .5rem;
  }
  @media only screen and (max-width: 55rem) {
    .modal {
      width: 65%;
    }
  }
  @media only screen and (max-width: 38rem) {
    .modal {
      width: 85%;
    }
  @media only screen and (max-height: 1180px) {
    .modal {
      min-height: 8rem;
      font-size: 1.2rem;
    }
  }
  }
  .modal__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: .8rem;
    width: 85%;
  }
  .cross {
    display: block;
    position: absolute;
    top: 0;
    left: 94%;
    font-size: 4rem;
    cursor: pointer;
    transition: all .2s;
  }
  .cross:hover {
    font-size: 4.2rem;
    color: rgb(248, 137, 94);
  }
  @media only screen and (max-width: 48rem) {
    .cross {
      left: 93%;
      font-size: 3.5rem;
    }
    .cross:hover {
      font-size: 3.7rem;
    }
  }
  @media only screen and (max-width: 36rem) {
    .cross {
      left: 90%;
      font-size: 3.3rem;
    }
    .cross:hover {
      font-size: 3.5rem;
    }
  }
</style>
