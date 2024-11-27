<template>
    <div class="product-card">
      <img :src="`http://localhost:5173/src/assets/products/${product.image}`" :alt="product.name" />
      <div class="info">
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
    background-color: white;
    background-image: linear-gradient(to top,var(--primary-color) , 10px, transparent,10px, transparent );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .3s;
    border-radius: 6px;
    border: 2px solid black;
  }
  .product-card:hover{
    scale: 1.5;
  }
  .product-card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  </style>
  