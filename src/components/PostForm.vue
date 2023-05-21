<template>
  <div class="create-post">
      <h3>Create post</h3>
      <form class="create-post_form" @submit.prevent>
        <label for="image">
          <input
            @change="uploadFile"
            class="create-post_file-input"
            type="file"
            accept=".png, .jpg, .jpeg"
            id="image">
        </label>
        <label for="title">
          <input
            v-model="post.title"
            class="create-post_input"
            type="text"
            placeholder="Title"
            id="title"
            required>
        </label>
        <textarea
          name="textarea"
          class="create-post_textarea"
          rows="10"
          v-model="post.body"
          placeholder="Text"
          required>
        </textarea>
        <button :disabled="!isValidForm" @click="createPost(post)">Send post</button>
      </form>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import usePostsStore from "@/stores/PostsStore";
import { IPost } from "@/types";

const postsStore = usePostsStore();
const createPost = (post: IPost) => postsStore.createPost(post);

const post = ref({
  id: "",
  url: "",
  title: "",
  body: "",
});

const isValidForm = computed(() => post.value.title && post.value.body);

const uploadFile = (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    post.value.url = URL.createObjectURL(file);
  }
};
</script>

<style>
.create-post_form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.create-post_input {
  display: block;
  width: 100%;
}

.create-post_textarea {
  resize: none;
}
</style>
