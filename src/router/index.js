import { createRouter, createWebHistory } from 'vue-router';

import LoginForm from '@/components/LoginForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
import '@fortawesome/fontawesome-free/css/all.min.css';




// Add solid icons to the library



const routes = [
  {
    path: '/',
    redirect: '/login' // Redirect to login page by default
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationForm
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
