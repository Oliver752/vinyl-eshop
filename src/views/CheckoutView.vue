<template>
  <v-container>
    <h1>Checkout</h1>
    <CheckoutForm @submit="processCheckout" :totalPrice="totalPrice" />
    <ThankYouPopup v-model="showThankYou" @close="closeThankYou" />
  </v-container>
</template>

<script>
import CheckoutForm from '@/components/CheckoutForm.vue';
import ThankYouPopup from '@/components/ThankYouPopup.vue';
import { useCartStore } from '@/stores/cart';

export default {
  components: {
    CheckoutForm,
    ThankYouPopup
  },
  data() {
    return {
      showThankYou: false,
      cartStore: useCartStore(),
    };
  },
  computed: {
    totalPrice() {
      return this.cartStore.totalPrice;
    }
  },
  methods: {
    processCheckout(checkoutData) {
      console.log('Processing checkout:', checkoutData);
      // Clear the cart after successful checkout
      this.cartStore.clearCart();
      // Show thank you message
      this.showThankYou = true;
    },
    closeThankYou() {
      this.showThankYou = false;
    }
  }
};
</script>

