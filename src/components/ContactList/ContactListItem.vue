<template>
  <div class='contact-list__item'>
    <h2 class='contact-list__item-heading bold'>
      {{ contact.name }}
    </h2>
    <div class='contact-list__item-elem'>
      Phone: <span class='bold'>{{ contact.phone }}</span>
    </div>
    <div class='contact-list__item-elem'>
      Email: <span class='bold'>{{ contact.email }}</span>
    </div>
    <router-link :to="{
      name: 'ContactItem',
      params: { id: contact.id },
      query: contact
    }">
      <Button caption="View More" :big=true />
    </router-link>

  </div>
</template>

<script>
import Button from '../UI/Button.vue';

export default {
  name: 'ContactListItem',
  components: {
    Button,
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.contact-list__item {
  width: 100%;
  max-width: 60rem;
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

.contact-list__item-elem {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

</style>
