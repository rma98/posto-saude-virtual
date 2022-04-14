import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../components/home.vue'
import loginPage from '../components/Login.vue'
import cadastroPage from '../components/Cadastro.vue'
import funcionalidadesPage from '../components/funcionalidades.vue'
import agendarConsulta from '../components/AgendarConsulta.vue'
import iniciarCadastro from '../components/iniciarCadastro.vue'
import cadastrarMedicos from '../components/cadastrarMedicos.vue'

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
  {
    path: '/cadastrarMedicos',
    name: 'cadastrarMedicos',
    component: cadastrarMedicos
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router