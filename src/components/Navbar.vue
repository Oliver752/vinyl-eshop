<template>
    <nav>
      <v-app-bar app>
        <v-toolbar-title>Vinyl E-Shop</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/products">Products</v-btn>
        <v-btn text to="/cart">Cart</v-btn>
        <v-btn text to="/checkout">Checkout</v-btn>
      </v-app-bar>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  