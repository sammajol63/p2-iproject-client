<script>
import { useAppStore } from "../stores/app";
import { mapActions, mapState } from "pinia";
import componenCard from "./componenCard.vue";

export default {
  components : {
    componenCard
  },
  computed: {
    ...mapState(useAppStore, ["news"]),
  },
  methods: {
    ...mapActions(useAppStore, ["logout", "readData"]),
    Logout() {
      this.logout();
    },
  },
  created() {
    this.readData();
    // console.log(this.heroes);
  },
}
</script>


<template>
        <!-- Home -->
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-4xl tracking-widest text-white text-center uppercase">
      </h2>
      <div  class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <componenCard v-for="el in news.data" :key="el.id" :el="el"/>
        </div>
        <!-- <button @click.prevent="Logout" type="button">logout</button> -->
      </div>
    </div>
</template>