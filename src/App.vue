<template>
  <div id="app2">
    <Navbar />
    <router-view /> <!-- Dynamically loads the component for the current route -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<style>
*{
  transition: .3s;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
#app2{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
</style>
