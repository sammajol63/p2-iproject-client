<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
    props: ['el']
};
</script>


<template>
<div class="card">
  <div class="card-header">
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ el.News.title }}</h5>
    <p class="card-text">{{ el.News.description }}</p>
    <p><a :href="el.News.source">Read more</a></p>
    <p>{{ el.News.theme }}</p>
  </div>
</div>

</template>