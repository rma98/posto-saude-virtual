import { createRouter, createWebHistory } from 'vue-router'
import principalNaoLogada from '../components/PrincipalNaoLogada.vue'
import login from '../components/Login.vue'
import cadastro from '../components/Cadastro.vue'
import principalLogada from '../components/PrincipalLogada.vue'
import todasFuncionalidades from '../components/TodasFuncionalidades.vue'
import todasFuncionalidadesLogada from '../components/TodasFuncionalidadesLogada.vue'







const routes = [
  { path: '/', name: 'principalNaoLogada', component: principalNaoLogada},
  { path: '/login', name: 'login', component: login},
  { path: '/cadastro', name: 'cadastro', component: cadastro},
  { path: '/posto-saude', name: 'principalLogada', component: principalLogada},
  { path: '/todas-funcionalidades', name: 'todasFuncionalidades', component: todasFuncionalidades},
  { path: '/funcionalidades', name: 'todasFuncionalidadesLogada', component: todasFuncionalidadesLogada},
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
