import { createRouter, createWebHistory } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.min.css';

//views
import BrowseCars from '../Views/BrowseCars.vue'; // Adjust the import path
import Homepage from '../Views/Homepage.vue';

//route for specific car page
import NissanPatrol from '../ListofCars/NissanPatrol.vue';
import BMWX7 from '../ListofCars/BMWX7.vue';
import ChevroletSuburban from '../ListofCars/ChevroletSuburban.vue';
import FotonToano from '../ListofCars/FotonToano.vue';
import GazelleNext from '../ListofCars/GazelleNext.vue';
import NissanNV350 from '../ListofCars/NissanNV350.vue';
import HondaCity from '../ListofCars/HondaCity.vue';
import HyundaiElantraN from '../ListofCars/HyundaiElantraN.vue';
import MitsubishiMirageG4 from '../ListofCars/MitsubishiMirageG4.vue';
import FordRanger from '../ListofCars/FordRanger.vue';
import IsuzuDMax from '../ListofCars/IsuzuDMax.vue';
import NissanNavara from '../ListofCars/NissanNavara.vue';


const routes = [
  {
    path: '/',
    redirect: '/homepage' // Redirect to homepage by default
  },
  {
    path: '/browse',
    name: 'Browse',
    component: BrowseCars
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },





  //route for specific car page
  {
    path: '/nissan-patrol',
    name: 'NissanPatrol',
    component: NissanPatrol
  }, 
  {
    path: '/BMWX7',
    name: 'BMWX7',
    component: BMWX7
  }, 
  {
    path: '/ChevroletSuburban',
    name: 'ChevroletSuburban',
    component: ChevroletSuburban
  }, 
  {
    path: '/FotonToano',
    name: 'FotonToano',
    component: FotonToano
  }, 
  {
    path: '/GazelleNext',
    name: 'GazelleNext',
    component: GazelleNext
  }, 
  {
    path: '/NissanNV350',
    name: 'NissanNV350',
    component: NissanNV350
  }, 
  {
    path: '/  HondaCity',
    name: '  HondaCity',
    component:   HondaCity
  }, 
  {
    path: '/MitsubishiMirageG4',
    name: 'MitsubishiMirageG4',
    component: MitsubishiMirageG4
  }, 
  {
    path: '/HyundaiElantraN',
    name: 'HyundaiElantraN',
    component: HyundaiElantraN
  }, 




  {
    path: '/FordRanger',
    name: 'FordRanger',
    component: FordRanger
  }, 
  {
    path: '/IsuzuDMax',
    name: 'IsuzuDMax',
    component: IsuzuDMax
  }, 
  {
    path: '/NissanNavara',
    name: 'NissanNavara',
    component: NissanNavara
  }, 
 
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
