<template>
  <h1>POST-ITS:</h1>
  <div class="posts-list">
    <PostItem v-for="post in posts" :post="post" :key="post.id"/>
  </div>
  <button @click="openModal">Creare post</button>
</template>

<script>
import { defineComponent } from "vue";
import PostItem from "./PostItem.vue";

export default defineComponent({
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    openModal: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style>

.posts-list {
  padding: 20px 0;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.post {
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid green;
  gap: 10px;
}

.post_image {
  width: 100%;
  height: auto;
}

.post_comments {
  color: green;
  cursor: pointer;
  transition: all 0.2s;
}

.post_comments:hover {
  color: rgb(0, 70, 0);
}
</style>
