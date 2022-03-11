import { createRouter, createWebHistory } from 'vue-router'
import principalNaoLogada from '../components/PrincipalNaoLogada.vue'
import LoginItem from '../components/Login.vue'
import cadastro from '../components/Cadastro.vue'
import principalLogada from '../components/PrincipalLogada.vue'
import todasFuncionalidades from '../components/TodasFuncionalidades.vue'
import todasFuncionalidadesLogada from '../components/TodasFuncionalidadesLogada.vue'
import TesteItem from '../components/HelloWorld.vue'







const routes = [
  { path: '/', name: 'principalNaoLogada', component: principalNaoLogada},
  { path: '/login', name: 'login', component: LoginItem},
  { path: '/cadastro', name: 'cadastro', component: cadastro},
  { path: '/posto-saude', name: 'principalLogada', component: principalLogada},
  { path: '/todas-funcionalidades', name: 'todasFuncionalidades', component: todasFuncionalidades},
  { path: '/funcionalidades', name: 'todasFuncionalidadesLogada', component: todasFuncionalidadesLogada},
  { path: '/teste', name: 'teste', component: TesteItem},
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
