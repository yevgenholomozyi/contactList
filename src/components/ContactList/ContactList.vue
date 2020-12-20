<template>
  <div>
    <CreateContact />
    <div
      class='contact-list'
      v-for="c of contactList"
      :key="c.id"
    >
    <ContactListItem :contact="c" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ContactListItem from './ContactListItem.vue';
import CreateContact from './CreateContact.vue';

export default {
  name: 'ContactList',
  components: {
    ContactListItem,
    CreateContact,
  },
  computed: {
    ...mapGetters('contacts', ['contactList']),
  },
};
</script>

<style scoped>
  .contact-list {
    margin: auto;
    margin-bottom: 3rem;
    width: 90%;
    max-width: 60rem;
    background-color: white;
    border-radius: 6px;
  }
</style>
