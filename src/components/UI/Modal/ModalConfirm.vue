<template>
  <div class='modal'>
    <div> {{question}} </div>
      <div class='modal__buttons'>
        <Button
          :caption="actionProp"
          :danger="true"
          :big="true"
          @click="activeMethod"
        />
        <Button
          caption="Back To Contact"
          :big="true"
          @click="onBack"
        />
     </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '../Button.vue';

export default {
  name: 'ModalConfirm',
  components: {
    Button,
  },
  computed: {
    activeMethod() {
      switch (this.actionProp) {
        case 'Rollback':
          return this.onRollback;
        case 'Delete Input':
          return this.onDeleteInput;
        default:
          return this.onDelete;
      }
    },
  },
  methods: {
    ...mapActions('overlay', ['changeVisible']),
    ...mapActions('contacts', ['deleteContact', 'removeContactField', 'rollback']),

    onBack() {
      this.changeVisible(false);
    },
    onDelete() {
      this.deleteContact(this.$route.params.id ? this.$route.params.id : this.deleteProp);
      this.changeVisible(false);
      this.$router.push('/');
    },
    onDeleteInput() {
      this.removeContactField({
        fieldName: this.fieldName,
        id: this.$route.params.id,
      });
      this.changeVisible(false);
    },
    onRollback() {
      this.rollback();
      this.changeVisible(false);
    },
  },
  props: {
    question: {
      type: String,
      default: 'Do you realy want to perform this action?',
      required: true,
    },
    actionProp: {
      type: String,
      default: 'Yes',
    },
    fieldName: String,
    deleteProp: String,
  },
};
</script>

<style>
</style>
