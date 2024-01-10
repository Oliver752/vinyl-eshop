<template>
    <v-container>
      <h1>Your Cart</h1>
  
      
      <div v-for="item in cart.items" :key="item.id" class="my-2">
        <v-card class="d-flex">
          
          <v-card-text class="flex-grow-1">
            <div>{{ item.name }}</div>
            <div>Quantity: {{ item.quantity }}</div>
            <div>Price: ${{ typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A' }}</div>
            <div>Total: ${{ typeof item.price === 'number' ? (item.price * item.quantity).toFixed(2) : 'N/A' }}</div>
          </v-card-text>
  
          
          <v-img
            :src="`/img/${item.image}`"
            class="ma-3"
            height="100"
            width="100"
            contain
          ></v-img>
  
          
          <v-card-actions class="ma-2">
            <v-btn icon @click="removeFromCart(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
  
      
      <div v-if="cart.totalItems > 0" class="text-h5 my-3">
      <div>Total Price: ${{ cart.totalPrice.toFixed(2) }}</div>
      <v-btn color="primary" class="mt-3" @click="goToCheckout">Proceed to Checkout</v-btn>
    </div>

    <div v-else class="text-h5 my-3">
      Your cart is empty.
    </div>
    </v-container>
  </template>
  
  
  <script>
  import { useCartStore } from '@/stores/cart';
  import { useRouter } from 'vue-router';
  export default {
    setup() {
      const cart = useCartStore();
      const router = useRouter();
      const removeFromCart = (productId) => {
        cart.removeFromCart(productId);
      };
      const goToCheckout = () => {
      router.push('/checkout');
    };
  
      return { cart, removeFromCart,goToCheckout };
    }
  };
  </script>
  