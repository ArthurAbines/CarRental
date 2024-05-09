import { createRouter, createWebHistory } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginForm from '@/components/LoginForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
import BrowseCars from '@/components/BrowseCars.vue';


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
  },
  {
    path: '/browse',
    name: 'browse',
    component: BrowseCars
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
