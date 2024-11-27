<template>
    <div class="landing">
        <div class="text-holder">
            <h1>Welcome to Tech Fit</h1>
            <p>Your one-stop shop for all sports equipment needs!</p>
            <button @click="scrollToProducts">Shop Now</button>
        </div>
    </div>
</template>

<script setup>
    function scrollToProducts() {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }
</script>

<style scoped>
    .landing {
        padding: 4rem;
        min-height: 100vh; 
        background: linear-gradient(0deg, #000, transparent), url('@/assets/landing-background.jpg');
        background-size: cover; 
        background-position: center;
        background-repeat: no-repeat;

        color: white;

        display: flex;
        align-items: center;
    }
    .text-holder{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
    }
    .text-holder h1{
        font-size: 45px;
        font-weight: bold;
    }
    .text-holder p{
        font-size: 25px;
        max-width: 700px;
    }
    button {
        margin-top: 1rem;
        padding: 0.5rem 2rem;
        font-size: 1.5rem;
        background-color: white;
        color: #004080;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    button:hover {
        background-color: #0099cc;
        color: white;
    }
</style>
