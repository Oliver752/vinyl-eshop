<template>
    <v-dialog v-model="dialog" persistent max-width="300">
      <v-card>
        <v-card-title class="text-h5">Thank You!</v-card-title>
        <v-card-text>Thank you for your purchase. Your order has been placed.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      dialog: {
        get() { return this.value; },
        set(value) { this.$emit('input', value); }
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  