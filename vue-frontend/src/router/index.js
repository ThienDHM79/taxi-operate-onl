import { createRouter, createWebHistory } from 'vue-router'
import Booking from '../views/Booking.vue'

const routes = [
  {
    path: '/Booking',
    name: 'Booking',
    component: Booking
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
