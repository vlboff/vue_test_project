<template>
  <div>
    <button @click="addLikes">Add like</button>
    <button @click="addDislikes">Add dislike</button>
    <div>Likes: {{likes}}</div>
    <div>Dislikes: {{dislikes}}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    addLikes() {
      this.likes += 1;
    },
    addDislikes() {
      this.dislikes += 1;
    },
  },
});
</script>

<style>

</style>
