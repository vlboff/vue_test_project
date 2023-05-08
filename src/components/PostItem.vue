<template>
    <div class="post">
      <img class="post_image" :src="post.url" alt="image" v-if="post.url">
      <img class="post_image" src="https://career.astra.co.id/static/media/image_not_available1.94c0c57d.png" alt="image" v-else>
      <h3 class="post_title">{{ post.title }}</h3>
      <p class="post_body">
        {{ post.body }}
      </p>
      <h4 class="post_comments">Comments...</h4>
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

</style>
