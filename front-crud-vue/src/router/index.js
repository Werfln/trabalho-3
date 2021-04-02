import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import ListProdutos from '../views/listProdutos.vue';
import EditProduto from '../views/editProduto.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list-produtos',
    name: 'list',
    component: ListProdutos,
  },
  {
    path: '/edit-produto',
    name: 'edit',
    component: EditProduto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
