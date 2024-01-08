<template>
  <v-container>
    <v-card>
      <v-img :src="details.imageUrl" height="300px"></v-img>
      <v-card-title>{{ details.name }}</v-card-title>
      <v-card-subtitle>{{ details.artist }}</v-card-subtitle>
      <v-card-text>${{ details.price }}</v-card-text>
      <v-card-actions>
        <v-btn @click="addToCart(details)">Add to Cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(item) {
      
    },
  },
};
</script>
