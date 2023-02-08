import { createRouter, createWebHistory } from "vue-router";
import Loginpage from "../components/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Loginpage,
    }
  ],
});


router.beforeEach((to, _, next) => {
    const isLogin = localStorage.access_token;
    if(to.name === "login" && isLogin){
      next("/HomePage")
    }else {
      next();
    }
  });

export default router;
