<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  props: ["el"],
  methods: {
    ...mapActions(useAppStore, ["bookmarks"]),
    addFavorite() {
      this.bookmarks(this.el);
    }
  }
};
</script>



<template>
<div class="card">
  <div class="card-header">
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ el.title }}</h5>
    <p class="card-text">{{ el.description }}</p>
    <p><a :href="el.source">Read more</a></p>
    <p>{{ el.theme }}</p>
    <a @click.prevent="addFavorite" class="btn btn-primary">Bookmarks</a>
  </div>
</div>

<!-- <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">title:   {{ el.title }}</div>
    <div class="font-bold text-xl mb-2">description:   {{ el.description }}</div>
    <div class="font-bold text-xl mb-2">source:   {{ el.source }}</div>
    <p class="text-gray-700 text-base">
    </p>
    <button>Bookmarks</button>
  </div> -->
</template>