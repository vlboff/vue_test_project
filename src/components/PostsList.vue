<template>
  <div class="posts-list">
    <PostItem
      v-for="post in postsStore.posts"
      :post="post"
      :key="post.id"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PostItem from "@/components/PostItem.vue";
import usePostsStore from "@/stores/PostsStore";

export default defineComponent({
  components: {
    PostItem,
  },
  setup() {
    const postsStore = usePostsStore();
    return {
      postsStore,
    };
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
