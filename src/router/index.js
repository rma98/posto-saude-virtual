import { createRouter, createWebHistory } from 'vue-router'
import principalNaoLogada from '../components/PrincipalNaoLogada.vue'
import LoginItem from '../components/Login.vue'
import CadastroItem from '../components/Cadastro.vue'
import principalLogada from '../components/PrincipalLogada.vue'
import todasFuncionalidades from '../components/TodasFuncionalidades.vue'
import todasFuncionalidadesLogada from '../components/TodasFuncionalidadesLogada.vue'
import TesteItem from '../components/HelloWorld.vue'
import TesteCadastro from '../components/TesteCadastro.vue'
import AgendarConsulta from '../components/AgendarConsulta.vue'








const routes = [
  { path: '/', name: 'principalNaoLogada', component: principalNaoLogada},
  { path: '/login', name: 'login', component: LoginItem},
  { path: '/cadastro', name: 'cadastro', component: CadastroItem},
  { path: '/posto-saude', name: 'principalLogada', component: principalLogada},
  { path: '/todas-funcionalidades', name: 'todasFuncionalidades', component: todasFuncionalidades},
  { path: '/funcionalidades', name: 'todasFuncionalidadesLogada', component: todasFuncionalidadesLogada},
  { path: '/teste', name: 'teste', component: TesteItem},
  { path: '/testecadastro', name: 'teste2', component: TesteCadastro},
  { path: '/agendamento', name: 'agendarCansulta', component: AgendarConsulta},
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
