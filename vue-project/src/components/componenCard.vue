<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  props: ["el"],
  methods: {
    ...mapActions(useAppStore, ["bookmarks"]),
    addFavorite() {
      this.addBookmark(this.el.id);
    },
    detailCode(id){
    let link = `http://localhost:3000/customer/foods/${id}`
    this.qrCode(link, id)
    this.$router.push(`/customer/foods/${id}`)
  }
  },
};
</script>



<template>

</template>