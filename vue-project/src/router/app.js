import { createRouter, createWebHistory } from "vue-router";
import Loginpage from "../components/LoginPage.vue";
import HomePage from "../components/HomePage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Loginpage,
    },
    {
      path: "/HomePage",
      name: "home",
      component: HomePage,
    },
  ],
});


router.beforeEach((to, _, next) => {
    const isLogin = localStorage.access_token;
    if (to.name === "home" && !isLogin) {
      next("/");
    }if(to.name === "login" && isLogin){
      next("/HomePage")
    } else {
      next();
    }
  });

export default router;