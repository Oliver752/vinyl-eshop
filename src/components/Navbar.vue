<template>
  <nav>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title class="text-h5">Vinyl E-Shop</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/products">Products</v-btn>
      <v-btn text to="/cart">
        Cart
        <v-badge color="red" :content="cart.totalItems" offset-x="-10">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn text to="/checkout">Checkout</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { useCartStore } from '@/stores/cart'; 

export default {
  name: 'Navbar',
  setup() {
    
    const cart = useCartStore();
    
    
    return { cart };
  },
};
</script>
