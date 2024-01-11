import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductListView from '@/views/ProductListView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import CartView from '@/views/CartView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/products', name: 'Products', component: ProductListView },
  { path: '/checkout', name: 'Checkout', component: CheckoutView },
  { path: '/cart', component: CartView }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

