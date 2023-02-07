<script>
import { useAppStore } from "../stores/app";
import { mapActions, mapState } from "pinia";
export default {
  computed: {
    ...mapState(useAppStore, ["heroes"]),
  },
  methods: {
    ...mapActions(useAppStore, ["logout", "readData"]),
    Logout() {
      this.logout();
    },
  },
  created() {
    this.readData();
    console.log(this.heroes);
  },
}
</script>


<template>
        <!-- Home -->
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-4xl tracking-widest text-white text-center uppercase">
        <span class="block">Choose your Hero</span>
      </h2>
      <div  class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


        <div v-for="el in heroes.data" :el="el" class="max-w-sm rounded overflow-hidden shadow-lg">
          
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">title:   {{ el.title }}</div>
    <div class="font-bold text-xl mb-2">description:   {{ el.description }}</div>
    <div class="font-bold text-xl mb-2">source:   {{ el.source }}</div>
    <p class="text-gray-700 text-base">
    </p>
    <button>Bookmarks</button>
  </div>
</div>
        
        <button @click.prevent="Logout" type="button">logout</button>
      </div>
    </div>
</template>