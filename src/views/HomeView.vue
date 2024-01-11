<template>
  <v-container>
    <Banner />
    <h2>Our best sellers:</h2>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="product in featuredProducts" :key="product.id">
        <ProductItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import Banner from '@/components/Banner.vue';
import ProductItem from '@/components/ProductItem.vue';
import productsData from '@/assets/products.json';

export default {
  components: {
    ProductItem,
    Banner
  },
  data() {
    return {
      featuredProducts: []
    };
  },
  mounted() {
    this.featuredProducts = productsData.slice(4, 7);
  }
};
</script>
