<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="post">
      <PostContent :post="post"/>
      <h3 class="post_comments" @click="setPostID(post.id)">Comments...</h3>
    </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import PostContent from "@/components/PostContent.vue";
import usePostIDStore from "@/stores/PostIDStore";
import { IPost } from "@/types";

defineProps({
  post: {
    type: Object as PropType<IPost>,
    required: true,
  },
});

const postIDStore = usePostIDStore();
const setPostID = (id: number) => postIDStore.setPostID(id);
</script>

<style>

.post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid black;
  gap: 10px;
}

.post_comments {
  color: var(--main_red);
  cursor: pointer;
  transition: all 0.2s;
}

.post_comments:hover {
  color: var(--hover_red);
}

</style>
