<script>
import { useAppStore } from "../stores/app";
import { mapActions, mapWritableState} from "pinia";
export default {
  state: () => ({
        result: ""
      }),
  methods: {
    ...mapActions(useAppStore, ["logout", 'readData']),
    Logout() {
      this.logout();
    },
    handleSubmit(){
      this.readData(this.result.toLowerCase())
    },
    handleBookmark(){
      this.isHome = false,
      this.$router.push(`/BookmarkPage`)
    },
    handleHome(){
      this.isHome = true,
      this.$router.push(`/HomePage`)
    }
  },
  computed: {
    ...mapWritableState(useAppStore, ["isLogin", "isHome"]),
  },
  created() {
    if (!localStorage.getItem("access_token")) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
      console.log(this.$route, `<<<<<<<<<<<<<ININ`);
    }
  },
}
</script>

<template>
    <nav v-if="isLogin" class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a  @click.prevent="handleHome" class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a  @click.prevent="handleBookmark" class="nav-link active" aria-current="page" href="#">Bookmark</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="Logout" class="nav-link" href="#">Logout</a>
        </li>
      </ul>
      <form v-if="isHome" @submit.prevent="handleSubmit" class="d-flex" role="search">
        <input v-model="result" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>