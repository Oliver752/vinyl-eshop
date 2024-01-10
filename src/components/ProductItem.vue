<template>
  <div>
    <v-card class="mx-auto v-card" max-width="500" @click="toggleDialog">
      <div>
        <v-img :src="`/img/${product.image}`" />
      </div>
      <v-card-title v-text="product.name"></v-card-title>
      <v-card-subtitle v-text="`By ${product.author} (${product.year})`"></v-card-subtitle>
      <v-card-text v-text="`Genre: ${product.genre}`"></v-card-text>
      <v-card-text>${{ product.price }}</v-card-text>
      <v-card-actions style="justify-content: center;">
        <v-btn variant="outlined" color="primary" @click.stop="addToCart">Add to Cart</v-btn>
      </v-card-actions>
    </v-card>

    
    <v-dialog v-model="dialog" persistent max-width="1200px">
      <v-card>
        <v-img :src="`/img/${product.image}`" height="500px" />
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-subtitle>{{ `By ${product.author} (${product.year})` }}</v-card-subtitle>
        <v-card-text>{{ product.description }}</v-card-text>
        <v-card-text>{{ `Genre: ${product.genre}` }}</v-card-text>
        <v-card-text>${{ product.price }}</v-card-text>
        <v-card-actions>
          <v-btn color="red darken-1" text @click="toggleDialog">Close</v-btn>
          <v-btn color="green darken-1" text @click="addToCart">Add to Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart';
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    },
    addToCart() {
      const cartStore = useCartStore();
      cartStore.addToCart(this.product);
      console.log('Product added to cart:', this.product);
    }
  },
};
</script>
