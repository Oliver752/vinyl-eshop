<template>
  <div>
    <h1 class="x">All products:</h1>
    <v-container>
      <v-select v-model="selectedGenre" :items="genreOptions" label="Select Genre" class="mb-4" clearable></v-select>
      <v-row>
        <v-col cols="12" sm="4" md="3" v-for="product in filteredProducts" :key="product.id">
          <ProductItem :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import productsData from '@/assets/products.json'; 

export default {
  name: 'ProductListView',
  components: {
    ProductItem,
  },
  data() {
    return {
      selectedGenre: '',
      products: productsData, 
    };
  },
  computed: {
    genreOptions() {
      
      const genres = new Set(productsData.map(p => p.genre));
      return ['All', ...genres];
    },
    filteredProducts() {
      
      if (!this.selectedGenre || this.selectedGenre === 'All') {
        return this.products;
      }
      
      return this.products.filter(p => p.genre === this.selectedGenre);
    }
  }
};
</script>

<style scoped>
.x {
  padding: 5px;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
