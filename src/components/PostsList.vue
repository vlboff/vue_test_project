<template>
  <div class="posts-list">
    <div class="post" v-for="post in posts" v-bind:key="post.id">
      <img class="post_image" :src="post.url" alt="image">
      <h3>{{ post.title }}</h3>
      <p>
        {{ post.body }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style>

.posts-list {
  padding: 20px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.post {
  padding: 15px;
  border: 2px solid green;
}

.post_image {
  width: 100%;
  height: auto;
}

</style>
