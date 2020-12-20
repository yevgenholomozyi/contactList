<template>
  <form
    class='contact-form'
    @submit.prevent="onSubmit"
  >
    <h3 class="contact-form__heading">Create New Contact</h3>
      <Input
        type='text'
        label="Contact Name"
        errorText="Wrong Name"
        id="contact_name"
      />
      <Input
        type='email'
        label="Contact Email"
        errorText="Wrong Name"
        id="contact_email"
      />
      <Input
        type='phone'
        label="Contact Phone"
        errorText="Wrong Phone"
        id="contact_phone"
      />
      <div class="contact-form__button">
        <Button
          caption='Create Contact'
          :big=true
        />
      </div>
      <div class="contact-form__button">
        <Button
          caption="Roll Me Back"
          :big=true
          :danger=true
          @click="onRollback"
          type="button"
        />
      </div>
    <div class="contact-form__error">
      {{error}}
    </div>
    <Overlay typeProp="rollback" />
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex';
import Button from '../UI/Button.vue';
import Input from '../UI/Input.vue';
import Overlay from '../UI/Modal/Overlay.vue';

export default {
  name: 'CreateContact',
  components: {
    Button,
    Input,
    Overlay,
  },
  data: () => ({
    error: '',
  }),
  computed: {
    ...mapGetters('contacts', ['contactList']),
  },
  methods: {
    ...mapActions('contacts', ['addNewContact']),
    ...mapActions('overlay', ['changeVisible']),
    onRollback() {
      this.changeVisible(true);
    },
    onSubmit(e) {
      const nameInputValue = e.target[0].value;
      const emailInputValue = e.target[1].value;
      const phoneInputValue = e.target[2].value;
      if (!nameInputValue) {
        this.error = 'Please insert a name';
        return;
      }
      if (!emailInputValue) {
        this.error = 'Please insert an email';
        return;
      }
      if (!phoneInputValue) {
        this.error = 'Please insert a phone';
        return;
      }
      if (this.contactList.find((contact) => contact.name === nameInputValue)) {
        this.error = 'This contact has already been created';
        return;
      }
      if (this.contactList.find((contact) => contact.phone === phoneInputValue)) {
        this.error = 'This phone belongs to another user';
        return;
      }
      if (this.contactList.find((contact) => contact.email === emailInputValue)) {
        this.error = 'This email belongs to another user';
        return;
      }
      const newUser = {
        name: nameInputValue,
        email: emailInputValue,
        phone: phoneInputValue,
        id: uuidv4(),
      };

      this.addNewContact(newUser);
      this.error = '';
      e.target[0].value = '';
      e.target[1].value = '';
      e.target[2].value = '';
    },
  },
};
</script>

<style>
  .contact-form {
    position: relative;
    list-style: none;
    margin: 3rem auto;
    padding: 1.5rem;
    width: 90%;
    max-width: 60rem;
    height: 41rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 6px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .contact-form__heading {
    font-size: 1.8rem;
    color: lightsalmon;
  }
  .contact-form__button {
    width: 50%;
    margin-top: .5rem;
    display: flex;
    justify-content: center;
  }
  .contact-form__button button {
    width: 70%;
  }
  @media only screen and (max-width: 55rem) {
    .contact-form__button {
      width: 40%;
    }
  }
   @media only screen and (max-width: 40rem) {
     .contact-form__button {
      width: 70%;
    }
  }
  @media only screen and (max-width: 23rem) {
    .contact-form__button button {
      width: 70%;
      font-size: .6rem;
    }
  }

  .contact-form__error {
    color: red;
    font-size: 1.3rem;
    font-weight: bold;
  }
  @media only screen and (max-height: 42rem) {
    .contact-form {
      height: 35rem;
    }
  }
</style>
