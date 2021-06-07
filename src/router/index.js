import { createRouter, createWebHistory } from 'vue-router'
import Crear from '../components/Crear.vue'
import Listar from '../components/Listar.vue'
import Editar from '../components/Editar.vue'


const routes = [
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
