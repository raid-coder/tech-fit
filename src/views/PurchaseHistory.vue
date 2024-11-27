<template>
    <div class="purchase-history">
      <h1>Purchase History</h1>
      <ul>
        <li v-for="(order, index) in orders" :key="index">
          <strong>Order #{{ order.id }}</strong> - {{ order.date }}
          <ul>
            <li v-for="(item, idx) in order.items" :key="idx">{{ item.name }} ({{ item.quantity }})</li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const orders = [
    { id: 1, date: "2024-11-01", items: [{ name: "Football", quantity: 2 }, { name: "Basketball", quantity: 1 }] },
    { id: 2, date: "2024-10-15", items: [{ name: "Tennis Racket", quantity: 1 }] },
    { id: 3, date: "2024-10-01", items: [{ name: "Swimming Goggles", quantity: 3 }] },
  ];
  </script>
  
  <style scoped>
  .purchase-history {
    padding: 2rem;
  }
  h1 {
    margin-bottom: 1rem;
    color: #004080;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  