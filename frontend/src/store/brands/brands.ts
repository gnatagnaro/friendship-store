import { defineStore } from 'pinia';

import axios from 'axios';

export const useBrandsStore = defineStore('brands', {
  state: () => ({
    brands: [],
  }),
  actions: {
    async fetchBrands() {
      try {
        const respone = await axios.get('http://127.0.0.1:8000/api/v1/brands/');
        this.brands = await respone.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  },
})