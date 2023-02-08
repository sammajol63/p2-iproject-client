<script>
import LoginPage from './components/LoginPage.vue'
import HomePage from './components/HomePage.vue'
import Navbar from './components/Navbar.vue'
import RegisterPage from './components/RegisterPage.vue'
import BookmarkPage from './components/BookmarkPage.vue'

export default {
  components:{
    LoginPage,
    HomePage,
    Navbar,
    RegisterPage,
    BookmarkPage
  }
}
</script>


<template>
  <Navbar />
<router-view/>
</template>