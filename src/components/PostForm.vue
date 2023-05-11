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

<script>
import { defineComponent } from "vue";
import usePostsStore from "@/stores/PostsStore";

export default defineComponent({
  setup() {
    const postsStore = usePostsStore();
    const createPost = (post) => postsStore.createPost(post);

    return { createPost };
  },
  data() {
    return {
      post: {
        id: null,
        url: "",
        title: "",
        body: "",
      },
    };
  },
  computed: {
    isValidForm() {
      return this.post.title && this.post.body;
    },
  },
  methods: {
    uploadFile(event) {
      const file = event.target.files[0];
      this.post.url = URL.createObjectURL(file);
    },
  },
});
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
