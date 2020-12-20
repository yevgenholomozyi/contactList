import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../components/ContactList/ContactList.vue';
import ContactItem from '../components/ContactItem/ContactItem.vue';
// import App from '../App.vue';

const routes = [
  {
    path: '/',
    component: ContactList,
  },
  {
    path: '/:id',
    component: ContactItem,
    name: 'ContactItem',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
