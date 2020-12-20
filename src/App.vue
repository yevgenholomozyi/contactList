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
</style>
