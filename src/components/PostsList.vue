<template>
  <div class="posts-list">
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import PostItem from "@/components/PostItem.vue";
import { IPost } from "@/types";

defineProps({
  posts: {
    type: Array as PropType<IPost[]>,
    required: true,
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
