<template>
    <div class="contact-us">
      <div class="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below or reach us through our social channels.</p>
      </div>
      <div class="contact-form-container">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" placeholder="Your Full Name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Your Email Address" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        message: "",
      };
    },
    methods: {
      submitForm() {
        alert(`Thank you for contacting us, ${this.name}! We'll get back to you soon.`);
        // Reset form fields
        this.name = "";
        this.email = "";
        this.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-us {
    padding: 2rem;
    font-family: Arial, sans-serif;
    color: #333;
    min-height: 100vh;
  }
  
  .contact-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .contact-header h1 {
    font-size: 2.5rem;
    color: #0056b3;
  }
  
  .contact-header p {
    font-size: 1rem;
    color: #555;
  }
  
  .contact-form-container {
    max-width: 600px;
    margin: 0 auto;
    background: #ddd;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .contact-form .form-group {
    margin-bottom: 1.5rem;
  }
  
  .contact-form label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease-in-out;
  }
  
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: #0056b3;
    outline: none;
  }
  
  .submit-button {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    color: #fff;
    background: linear-gradient(to right, #0056b3, #00aaff);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }
  
  .submit-button:hover {
    background: linear-gradient(to right, #003c7e, #0077cc);
  }
  </style>
  