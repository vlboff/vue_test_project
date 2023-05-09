<template>
    <div class="post">
      <img class="post_image" :src="post.url" alt="image" v-if="post.url">
      <img class="post_image" src="https://career.astra.co.id/static/media/image_not_available1.94c0c57d.png" alt="image" v-else>
      <h3 class="post_title">{{ post.title.trim() }}</h3>
      <p class="post_body">
        {{ post.body.trim() }}
      </p>
      <h3 class="post_comments">Comments...</h3>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

});
</script>

<style>

.post {
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid black;
  gap: 10px;
}

.post_image {
  width: 100%;
  height: auto;
}

.post_comments {
  color: var(--main_red);
  cursor: pointer;
  transition: all 0.2s;
}

.post_comments:hover {
  color: var(--hover_red);
}

.post_title {
  word-wrap: break-word;
}

.post_body {
  word-wrap: break-word;
}

</style>
