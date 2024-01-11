<template>
  <v-form ref="form" v-model="valid" >
    <v-text-field label="Full Name"   v-model="checkoutForm.fullName"   :rules="[rules.required]" ></v-text-field>
    <v-text-field label="Email"       v-model="checkoutForm.email"      :rules="[rules.required]" ></v-text-field>
    <v-text-field label="Address"     v-model="checkoutForm.address"    :rules="[rules.required]" ></v-text-field>
    <v-text-field label="City"        v-model="checkoutForm.city"       :rules="[rules.required]" ></v-text-field>
    <v-text-field label="Postal Code" v-model="checkoutForm.postalCode" :rules="[rules.required]" ></v-text-field>
    <v-text-field label="Country"     v-model="checkoutForm.country"    :rules="[rules.required]" ></v-text-field>
    <div class="text-h5 my-3">
      Total to Pay: {{ totalPrice.toFixed(2) }}€
    </div>
    <v-btn color="primary" class="mr-4" @click="submitForm" :disabled="!valid">Submit</v-btn>
  </v-form>
</template>


<script>
export default {
  props: {
    totalPrice: Number
  },
  data() {
    return {
      valid: false,
      checkoutForm: {
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
      },
      rules: {
        required: value => !!value || 'Required field'
      }
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.$emit('submit', this.checkoutForm);
      }
    }
  }
};
</script>
