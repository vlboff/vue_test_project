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
            id="title">
        </label>
        <textarea
          name="textarea"
          class="create-post_textarea"
          rows="10"
          v-model="post.body"
          placeholder="Text">
        </textarea>
        <button @click="createPost">Send post</button>
      </form>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      post: {
        url: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        url: "",
        title: "",
        body: "",
      };
    },
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
