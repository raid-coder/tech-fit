<template>
    <div class="about-us">
      <h1>About Us</h1>
      <div class="team-container">
        <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
          <div class="card-inner">
            <div class="card-front">
              <h2>{{ member.name }}</h2>
              <p>{{ member.role }}</p>
            </div>
            <div class="card-back">
              <!-- Dynamically load images from the assets folder -->
              <img :src="member.image" alt="Team member image" />
              <p>{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Declare your team member data
  const teamMembers = ref([
    {
      name: "John Doe",
      role: "Frontend Developer",
      image: new URL('@/assets/team-images/team-member1.jpg', import.meta.url).href, // Dynamic import for images
      bio: "John is passionate about building beautiful and functional websites. He loves working with Vue.js and frontend technologies.",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      image: new URL('@/assets/team-images/raid.jfif', import.meta.url).href, // Dynamic import for images
      bio: "Jane is an experienced backend developer who specializes in APIs and database management. She loves solving complex problems.",
    },
    {
      name: "John Doe",
      role: "Frontend Developer",
      image: new URL('@/assets/team-images/team-member1.jpg', import.meta.url).href, // Dynamic import for images
      bio: "John is passionate about building beautiful and functional websites. He loves working with Vue.js and frontend technologies.",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      image: new URL('@/assets/team-images/raid.jfif', import.meta.url).href, // Dynamic import for images
      bio: "Jane is an experienced backend developer who specializes in APIs and database management. She loves solving complex problems.",
    },
  ]);
  </script>
  
  <style scoped>
  .about-us {
    text-align: center;
    padding: 2rem;
  }
  
  .team-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .team-card {
    width: 250px;
    height: 350px;
    perspective: 1000px;
  }
  
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
  
  .team-card:hover .card-inner {
    transform: rotateY(180deg);
  }
  
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .card-front {
    background-color: #f0f0f0;
    background-color: black;
  }
  
  .card-back {
    background-color: #007acc;
    color: white;
    transform: rotateY(180deg);
  }
  
  .card-back img {
    width: 80%;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  
  .card-back p {
    text-align: center;
    padding: 0 1rem;
  }
  </style>
  