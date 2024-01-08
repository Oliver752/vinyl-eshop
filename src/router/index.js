import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductListView from '@/views/ProductListView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import CheckoutView from '@/views/CheckoutView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/products', name: 'Products', component: ProductListView },
  { path: '/products/:id', name: 'ProductDetail', component: ProductDetailView },
  { path: '/checkout', name: 'Checkout', component: CheckoutView },
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

