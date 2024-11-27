<template>
    <div class="category-page">
      <h1>{{ categoryName }} Products</h1>
      <div class="products-grid">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import ProductCard from "@/components/ProductCard.vue";
  
  const route = useRoute();  // Access the current route
  const categoryName = ref("");
  const products = ref([
  {"id": 1,category: "football", "name": "bag", "price": "20", "description":"High-quality gear","image": "/bag.jpg"},
  {"id": 2,category: "football", "name": "bands", "price": "20", "description":"High-quality gear","image": "/bands.jpg"},
  {"id": 3,category: "basketball", "name": "basketball shoes", "price": "20", "description":"High-quality gear","image": "/basketball-shoes.jpg"},
  {"id": 4,category: "basketball", "name": "basketball short", "price": "20", "description":"High-quality gear","image": "/basketball-shorts.jpg"},
  {"id": 5,category: "lol", "name": "boxing gloves", "price": "20", "description":"High-quality gear","image": "/boxing-gloves.jpg"},
  {"id": 6,category: "lol", "name": "boxing head gear", "price": "20", "description":"High-quality gear","image": "/boxing-headgear.jpg"},
  {"id": 7,category: "football", "name": "female vest", "price": "20", "description":"High-quality gear","image": "/female-vest.jpg"},
  {"id": 8,category: "football", "name": "female bottom", "price": "20", "description":"High-quality gear","image": "/female-bottom-thing.jpg"},
  {"id": 9,category: "football", "name": "female shirt", "price": "20", "description":"High-quality gear","image": "/female-shirt.jpg"},
  {"id": 10,category: "football", "name": "female shirt", "price": "20", "description":"High-quality gear","image": "/female-shirt2.jpg"},
  {"id": 11,category: "football", "name": "female shoe", "price": "20", "description":"High-quality gear","image": "/female-shoe.jpg"},
  {"id": 12,category: "football", "name": "female shoe", "price": "20", "description":"High-quality gear","image": "/female-shoe2.jpg" },
  {"id": 13,category: "football", "name": "female shoe", "price": "20", "description":"High-quality gear","image": "/female-shoe3.jpg" },
  {"id": 14,category: "football", "name": "football shoes", "price": "20", "description":"High-quality gear","image": "/football-shoes.jpg"},
  {"id": 15,category: "football", "name": "football shoes", "price": "20", "description":"High-quality gear","image": "/football-shoes2.jpg"},
  {"id": 16,category: "football", "name": "football socks", "price": "20", "description":"High-quality gear","image": "/football-socks.jpg" },
  {"id": 17,category: "football", "name": "football socks", "price": "20", "description":"High-quality gear","image": "/football-socks2.jpg" },
  {"id": 18,category: "football", "name": "football", "price": "20", "description":"High-quality gear","image": "/football.jpg"},
  {"id": 19,category: "football", "name": "gloves", "price": "20", "description":"High-quality gear","image": "/gloves.jpg"},
  {"id": 20,category: "swimming", "name": "pink bag", "price": "20", "description":"High-quality gear","image": "/pink-bag.jpg" },
  {"id": 21,category: "tennis", "name": "shoes", "price": "20", "description":"High-quality gear","image": "/shoes.jpg" },
  {"id": 22,category: "tennis", "name": "tennis ball", "price": "20", "description":"High-quality gear","image": "/tennis-ball.jpg"}
  ]);
  
  const filteredProducts = ref([]);
  
  function updateCategory() {
    const category = route.params.category;
    categoryName.value = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize first letter
    filteredProducts.value = products.value.filter(product => product.category === category);
  }
  
  // Call the updateCategory function when the component is mounted or when the route changes
  onMounted(updateCategory);
  
  // Watch for changes in the category (route params) and update the content accordingly
  watch(
    () => route.params.category,
    updateCategory
  );
  </script>
  
  <style scoped>
  .category-page {
    padding: 2rem;
  }
  h1 {
    margin-bottom: 1rem;
    color: #004080;
  }
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  </style>
  