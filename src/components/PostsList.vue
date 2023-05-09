<template>
  <div class="posts-list" v-if="posts.length > 0">
    <PostItem v-for="post in posts" :post="post" :key="post.id"/>
  </div>
  <div class="loading" v-else>
    <h2>Loading...</h2>
  </div>
  <button @click="openModal">Creare post</button>
</template>

<script>
import { defineComponent } from "vue";
import PostItem from "@/components/PostItem.vue";

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

.loading {
  padding: 20px 0;
}
</style>
