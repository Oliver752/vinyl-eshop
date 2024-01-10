<template>
  <v-container>
    <h1>Checkout</h1>
    <CheckoutForm @submit="processCheckout" :totalPrice="cart.totalPrice" />
    <ThankYouPopup v-model="showThankYou" @close="closeThankYou" />
  </v-container>
</template>

<script>
import { ref } from 'vue';
import CheckoutForm from '@/components/CheckoutForm.vue';
import ThankYouPopup from '@/components/ThankYouPopup.vue';
import { useCartStore } from '@/stores/cart';

export default {
  components: {
    CheckoutForm,
    ThankYouPopup
  },
  setup() {
    const cart = useCartStore();
    const showThankYou = ref(false);

    const processCheckout = (checkoutData) => {
      console.log('Processing checkout:', checkoutData);

      
      cart.clearCart();

      
      showThankYou.value = true;
    };

    const closeThankYou = () => {
      showThankYou.value = false;
    };

    return { cart, showThankYou, processCheckout, closeThankYou };
  }
};
</script>
