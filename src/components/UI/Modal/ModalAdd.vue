<template>
  <form
    class="modal"
    :id="id+'update'"
    @submit.prevent="onAdd"
   >
    <Input
      type='input'
      label="Enter a Field Name"
      name="fieldName"
      id="newFieldName"
    />

    <Input
      type='input'
      label="Enter a Value"
      name="fieldValue"
      id="newFielValue"
    />

    <div class='modal__buttons'>
      <Button
        caption="Add"
        type="submit"
        :form="id+'update'"
      />
       <Button
        caption="Back To Contact"
        type="button"
        @click="onBack"
       />
      <div class="modal__error">{{errorText}}</div>
    </div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Button from '../Button.vue';
import Input from '../Input.vue';

export default {
  name: 'ModalAdd',
  components: {
    Button,
    Input,
  },
  data: () => ({
    errorText: '',
  }),
  computed: {
    ...mapGetters('contacts', ['contactById']),
  },
  methods: {
    ...mapActions('overlay', ['changeVisible']),
    ...mapActions('contacts', ['addContactField']),
    onBack() {
      this.changeVisible(false);
    },
    onAdd(event) {
      const fieldName = event.target[0].value;
      const fieldValue = event.target[1].value;
      if (!fieldName || !fieldValue) {
        this.errorText = 'No empty inputs allowed';
        return;
      }
      const contactId = this.id;
      const newFieldArr = [];
      if (fieldName && fieldValue) {
        newFieldArr.push(fieldName);
        newFieldArr.push(fieldValue);
        newFieldArr.push(contactId);
        this.addContactField(newFieldArr);
      }
      this.changeVisible(false);
    },
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
