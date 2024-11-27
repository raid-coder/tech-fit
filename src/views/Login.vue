<template>
  <div class="login-page">
    <div class="form-container">
      <h1>Login</h1>
      <p>Welcome back! Please log in to your account.</p>
      <form @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Your Email Address" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Your Password" required />
        </div>
        <button type="submit" class="submit-button">Log In</button>
      </form>
      <p class="signup-link">Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitLogin() {
      alert(`Logged in with email: ${this.email}`);
      // Reset fields
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.login-page {
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  max-width: 400px;
  background: #ddd;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.form-container h1 {
  font-size: 2rem;
  color: #0056b3;
  margin-bottom: 0.5rem;
}

.form-container p {
  color: #555;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
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

.signup-link {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
}

.signup-link a {
  color: #0056b3;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
