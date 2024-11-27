<template>
    <div class="landing">
        <LandingPage/>
        <div class="sections">
            <PriceDrops/>
            <RecentlyAdded/>
            <RecentlySold/>
        </div>
    </div>
</template>

<script setup>
import LandingPage from '@/components/LandingPage.vue';
import PriceDrops from '@/components/Sections/PriceDrops.vue';
import RecentlyAdded from '@/components/Sections/RecentlyAdded.vue';
import RecentlySold from '@/components/Sections/RecentlySold.vue';

    function scrollToProducts() {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }
</script>

<style scoped>
    
</style>
