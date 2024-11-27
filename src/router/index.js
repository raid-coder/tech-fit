import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ContactPage from "@/views/ContactPage.vue";
import CategoryPage from "@/views/CategoryPage.vue";
import AboutUs from "@/views/AboutUs.vue";
import PurchaseHistory from "@/views/PurchaseHistory.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: ContactPage },
  { path: "/category/:category", name: "Category", component: CategoryPage },
  { path: "/about", name: "About Us", component: AboutUs },
  {
    path: "/purchase-history",
    name: "Purchase History",
    component: PurchaseHistory,
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Sign Up", component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
