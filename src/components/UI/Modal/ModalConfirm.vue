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
      return this.actionProp === 'Delete' ? this.onDelete : this.onRollback;
    },
  },
  methods: {
    ...mapActions('overlay', ['changeVisible']),
    ...mapActions('contacts', ['deleteContact', 'rollback']),

    onBack() {
      this.changeVisible(false);
    },
    onDelete() {
      this.deleteContact(this.$route.params.id);
      this.changeVisible(false);
      this.$router.push('/');
    },
    onRollback() {
      this.rollback();
      this.changeVisible(false);
    },
  },
  props: {
    question: {
      type: String,
      default: 'Do you realy want to delete this question?',
      required: true,
    },
    actionProp: {
      type: String,
      default: 'Delete',
    },
  },
};
</script>

<style>
</style>
