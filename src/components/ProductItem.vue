<template>
    <v-card>
      <v-img :src="product.imageUrl" class="white--text" height="200px" />
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>{{ product.artist }}</v-card-subtitle>
      <v-card-text>${{ product.price }}</v-card-text>
      <v-card-actions>
        <v-btn @click="addToCart">Add to Cart</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'ProductItem',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      addToCart() {
        
      },
    },
  };
  </script>
  