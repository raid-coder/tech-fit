<template>
  <div class="signup-page">
    <div class="form-container">
      <h1>Sign Up</h1>
      <p>Create an account to start shopping!</p>
      <form @submit.prevent="submitSignUp">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Your Full Name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Your Email Address" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Create a Password" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            placeholder="Confirm Your Password"
            required
          />
        </div>
        <button type="submit" class="submit-button">Sign Up</button>
      </form>
      <p class="login-link">Already have an account? <router-link to="/login">Log In</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitSignUp() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert(`Account created for ${this.name}`);
      // Reset fields
      this.name = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },
  },
};
</script>

<style scoped>
.signup-page {
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  max-width: 600px;
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

.login-link {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
}

.login-link a {
  color: #0056b3;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
