<template>
  <form
    class="modal"
    :id="id+'update'"
    @submit.prevent="onUpdate"
   >
   <div
    class="modal__container"
    v-for="(input, key) in contactById(id)"
    :key="key"
    >
      <Input
        v-if="key !== 'id'"
        type='input'
        :label="key"
        :name="key"
        :id="key + 'update'"
        :value="input"
      />
    </div>
    <div class='modal__buttons'>
      <Button
        caption="Update"
        type="submit"
        :form="id+'update'"
      />
       <Button
        caption="Back To Contact"
        type="button"
        @click="onBack"
       />
    </div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Button from '../Button.vue';
import Input from '../Input.vue';

export default {
  name: 'ModalUpdate',
  components: {
    Button,
    Input,
  },
  computed: {
    ...mapGetters('contacts', ['contactById']),
  },
  methods: {
    ...mapActions('overlay', ['changeVisible']),
    ...mapActions('contacts', ['updateContact']),
    onBack() {
      this.changeVisible(false);
    },
    onUpdate(event) {
      const contact = Array.from(event.target.elements)
        .filter((elem) => elem.nodeName === 'INPUT')
        .reduce((acc, e) => (
          { ...acc, [e.name]: e.value }),
        {});
      contact.id = this.id;
      this.updateContact(contact);
      this.changeVisible(false);
    },
  },
  props: {
    id: String,
  },
};
</script>
