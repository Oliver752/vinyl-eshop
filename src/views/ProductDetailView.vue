<template>
    <div>
      <Navbar />
      <ProductDetails :details="product" />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import ProductDetails from '@/components/ProductDetails.vue';
  
  export default {
    name: 'ProductDetailView',
    components: {
      Navbar,
      ProductDetails,
    },
    data() {
      return {
        product: {},
      };
    },
    
  };
  </script>
  