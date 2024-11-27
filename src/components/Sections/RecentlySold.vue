<template>
    <div class="section">
      <h2>Recently Sold Products:</h2>
      <div class="products-grid">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  
  <script setup>
  import ProductCard from "@/components/ProductCard.vue";
  import { ref } from "vue";
  
  const products = ref([
    {"id": 1, "name": "bag", "price": "20", "description":"High-quality gear","image": "/bag.jpg"},
  {"id": 2, "name": "bands", "price": "20", "description":"High-quality gear","image": "/bands.jpg"},
  {"id": 3, "name": "basketball shoes", "price": "20", "description":"High-quality gear","image": "/basketball-shoes.jpg"},
  {"id": 4, "name": "basketball short", "price": "20", "description":"High-quality gear","image": "/basketball-shorts.jpg"},
  {"id": 5, "name": "boxing gloves", "price": "20", "description":"High-quality gear","image": "/boxing-gloves.jpg"},
  {"id": 6, "name": "boxing head gear", "price": "20", "description":"High-quality gear","image": "/boxing-headgear.jpg"},
  {"id": 7, "name": "female vest", "price": "20", "description":"High-quality gear","image": "/female-vest.jpg"},
  {"id": 8, "name": "female bottom", "price": "20", "description":"High-quality gear","image": "/female-bottom-thing.jpg"},
  {"id": 9, "name": "female shirt", "price": "20", "description":"High-quality gear","image": "/female-shirt.jpg"},
  {"id": 10, "name": "female shirt", "price": "20", "description":"High-quality gear","image": "/female-shirt2.jpg"},
  {"id": 11, "name": "female shoe", "price": "20", "description":"High-quality gear","image": "/female-shoe.jpg"},
  ]);
  </script>
  
  <style scoped>
  .section {
    padding: 2rem;
  }
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
    h2{
        font-size: 3rem;
    }
  </style>
  