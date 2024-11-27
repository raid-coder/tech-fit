<template>
    <nav class="navbar">
        <div class="logo">Tech Fit</div>
        <ul class="nav-links">
            <li><router-link to="/">Home</router-link></li>
            <li>
            <div class="dropdown">
                <button class="dropdown-btn">Categories</button>
                <div class="dropdown-content">
                <router-link to="/category/football">Football</router-link>
                <router-link to="/category/basketball">Basketball</router-link>
                <router-link to="/category/tennis">Tennis</router-link>
                <router-link to="/category/swimming">Swimming</router-link>
                </div>
            </div>
            </li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/login">Login/sign in</router-link></li>
            <li>
                <!-- Search Bar -->
                <div class="search-bar">
                    <input 
                        type="text" 
                        v-model="searchQuery" 
                        placeholder="Search products..."
                        @input="handleSearch" 
                    />
                    <button @click="handleSearch">search</button>
                </div>
            </li>
        </ul>

        
    </nav>
</template>
  
<script setup>
    import { ref } from 'vue';
    
    const searchQuery = ref('');
    
    // Handle search input
    const handleSearch = () => {
        console.log("Searching for:", searchQuery.value);
    };
</script>
  
<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    color: white;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    align-items: center;
  }
  .nav-links a,
  .nav-links router-link {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  .nav-links a:hover,
  .nav-links router-link:hover {
    color: #00bfff;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-btn {
    background-color: #0000;
    color: white;
    padding: 0.7rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
  }
  .dropdown-btn:hover {
    color: #00bfff;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #ddd;
  }
  .search-bar{
    display: flex;
    gap: 5px;
  }
  .search-bar input{
    font-size: 20px;
    border-radius: 6px;
  }
  </style>
  