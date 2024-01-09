import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        // Ensure that price and quantity are treated as numbers
        const price = Number(item.price);
        const quantity = Number(item.quantity);
        return total + (price * quantity);
      }, 0);
    }
  },
  actions: {
    addToCart(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ 
          ...product, 
          quantity: 1,
          price: parseFloat(product.price) // Ensure price is a number
        });
      }
    },
    removeFromCart(productId) {
      const index = this.items.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity = Number(quantity); // Ensure quantity is a number
      }
    },
    clearCart() {
      this.items = [];
    }
  }
});
