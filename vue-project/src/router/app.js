import { createRouter, createWebHistory } from "vue-router";
import Loginpage from "../components/LoginPage.vue";
import HomePage from "../components/HomePage.vue";
import RegisterPage from "../components/RegisterPage.vue"
import BookmarkPage from "../components/BookmarkPage.vue"

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
    {
      path: "/RegisterPage",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/BookmarkPage",
      name: "bookmark",
      component: BookmarkPage,
    },
  ],
});


router.beforeEach((to, _, next) => {
    const isLogin = localStorage.access_token;
    if (to.name === "home" && !isLogin) {
      next("/");
    }if (to.name === "bookmark" && !isLogin) {
      next("/");
    }if(to.name === "login" && isLogin){
      next("/HomePage")
    }if(to.name === "register" && isLogin){
      next("/HomePage")
    } else {
      next();
    }
  });

export default router;