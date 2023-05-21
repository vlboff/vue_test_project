<template>
  <div class="post_content" v-if="post">
    <img class="post_image" :src="url" alt="image" v-if="url">
    <img class="post_image" src="https://career.astra.co.id/static/media/image_not_available1.94c0c57d.png" alt="image" v-else>
    <h3 class="post_title">{{ post.title ? post.title.trim() : "" }}</h3>
    <p class="post_body">
      {{ post.body ? post.body.trim() : "" }}
    </p>
  </div>
  <div class="post_content" v-else></div>
</template>

<script setup lang="ts">
import {
  ref, defineProps, onMounted, PropType,
} from "vue";
import getImage from "@/API/getImage";
import { IPost } from "@/types";

const props = defineProps({
  post: {
    type: Object as PropType<IPost>,
    required: true,
  },
});

const url = ref(props.post.url);

onMounted(async () => {
  if (!url.value) {
    url.value = await getImage(props.post.id);
  }
});
</script>

<style>
.post_content {
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 10px;
  max-width: 300px;
}

.post_image {
  width: 100%;
  height: auto;
}

.post_title {
  word-wrap: break-word;
}

.post_body {
  word-wrap: break-word;
}
</style>
