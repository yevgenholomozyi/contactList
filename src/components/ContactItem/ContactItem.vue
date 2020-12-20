<template>
  <div class="contact-item">
    <span class='cross' @click="onDelete">&times;</span>
    <div v-for="(val, key) in contactById($route.params.id)" :key="key">
      <div
        v-if="key !== 'id'"
          class="contact-item__item"
        >
          {{ key }}: {{ val }}
      </div>
    </div>
      <div class='contact-item__buttons'>
        <Button caption='Edit Contact' @click="onUpdate"/>
        <Button caption='Add New Field' @click="onAddField"/>
        <Button caption='Roll Me Back' :danger=true @click="onRollback"/>
        <Button caption='Back To All Contacts' :inverse=true @click="onComeBack"/>
      </div>
    </div>
  <Overlay :typeProp="mode" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from '../UI/Button.vue';
import Overlay from '../UI/Modal/Overlay.vue';

export default {
  data: () => ({
    mode: '',
  }),
  name: 'ContactItem',
  components: {
    Button,
    Overlay,
  },
  computed: {
    ...mapGetters('contacts', ['contactList', 'contactById']),
  },
  methods: {
    ...mapActions('overlay', ['changeVisible']),
    onDelete() {
      this.mode = 'delete';
      this.changeVisible(true);
    },
    onAddField() {
      this.mode = 'add';
      this.changeVisible(true);
    },
    onUpdate() {
      this.mode = 'update';
      this.changeVisible(true);
    },
    onRollback() {
      this.mode = 'rollback';
      this.changeVisible(true);
    },
    onComeBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
.contact-item {
  margin: auto;
  margin-top: 3rem;
  position: relative;
  top: 50%;
  width: 90%;
  font-size: 2rem;
  max-width: 90rem;
  background-color: white;
  display: flex;
  padding: 1.2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  color: lightsalmon;
}
.contact-item__item {
  min-height: 2rem;
  margin-top: 1rem;
}
.contact-item__buttons {
  margin-top: 1rem;
}
@media only screen and (max-width: 91rem) {
  .contact-item__buttons {
    min-height: 15rem;
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .contact-item__buttons > * {
    margin-top: 1rem;
    width: 30rem;
  }
}
@media only screen and (max-width: 41rem) {
  .contact-item {
    font-size: 1.5rem;
  }
  .contact-item__item {
    min-height: 3rem;
  }
  .contact-item__buttons > * {
    width: 20rem;
  }
}
@media only screen and (max-width: 35rem) {
  .contact-item__buttons > * {
    width: 18rem;
    font-size: 1rem;
  }
}
.cross {
  display: block;
  position: absolute;
  top: 0;
  left: 96%;
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
