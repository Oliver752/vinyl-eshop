<template>
  <div>
    <h1 class="x">All products:</h1>
    <v-container>
      <!-- Genre Selection -->
      <v-select
        v-model="selectedGenre"
        :items="genreOptions"
        label="Select Genre"
        @change="filterByGenre"
        class="mb-4"
        clearable
      ></v-select>

      <v-row>
        <!-- Filtered list of products -->
        <v-col
          cols="12"
          sm="4"
          md="3"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <ProductItem :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import productsData from '@/assets/products.json'; // Import the JSON file

export default {
  name: 'ProductListView',
  components: {
    ProductItem,
  },
  data() {
    return {
      selectedGenre: '',
      products: productsData, // The data from the JSON file
    };
  },
  computed: {
    genreOptions() {
      // Unique list of genres with 'All' option at the beginning
      const genres = new Set(productsData.map(p => p.genre));
      return ['All', ...genres];
    },
    filteredProducts() {
      // If 'All' is selected, return all products
      if (!this.selectedGenre || this.selectedGenre === 'All') {
        return this.products;
      }
      // Return products that match the selected genre
      return this.products.filter(p => p.genre === this.selectedGenre);
    }
  },
  methods: {
    filterByGenre() {
      // The computed property 'filteredProducts' will reactively update the list
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
