<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="post">
      <PostContent :post="post"/>
      <h3 class="post_comments" @click="setPostID(post.id)">Comments...</h3>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import PostContent from "@/components/PostContent.vue";

export default defineComponent({
  components: {
    PostContent,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    setPostID: {
      type: Function,
      required: true,
    },
  },
});
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
