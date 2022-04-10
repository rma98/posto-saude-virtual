import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../components/home.vue'
import loginPage from '../components/login.vue'
import cadastroPage from '../components/cadastro.vue'
import funcionalidadesPage from '../components/funcionalidades.vue'
import agendarConsulta from '../components/agendarConsulta.vue'
import iniciarCadastro from '../components/iniciarCadastro.vue'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/cadastroPage',
    name: 'cadastroPage',
    component: cadastroPage
  },
  {
    path: '/funcionalidadesPage',
    name: 'funcionalidadesPage',
    component: funcionalidadesPage
  },
  {
    path: '/agendarConsulta',
    name: 'agendarConsulta',
    component: agendarConsulta
  },
  {
    path: '/iniciarCadastro',
    name: 'iniciarCadastro',
    component: iniciarCadastro
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router