<template>
  <div>
    
    <v-container>
      <h1>Featured Vinyl Records</h1>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="product in featuredProducts"
          :key="product.id"
        >
          <ProductItem :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    ProductItem,
  },
  data() {
    return {
      featuredProducts: [],
    };
  },
};
</script>
