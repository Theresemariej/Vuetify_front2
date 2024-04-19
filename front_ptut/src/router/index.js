
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue';
import Country from '../components/Country.vue';
import City from '../components/City.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Accueil },
    { path: '/pageCountry', component: Country },
    { path: '/pageCity', component: City }
  ]
})

export default router
