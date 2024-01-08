<template>
    <div>
      
      <v-container>
        <CheckoutForm />
      </v-container>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import CheckoutForm from '@/components/CheckoutForm.vue';
  
  export default {
    name: 'CheckoutView',
    components: {
      Navbar,
      CheckoutForm,
    },
    
  };
  </script>
  