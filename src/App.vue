<template>
  <main>
    <div class="post" v-for="post in posts" v-bind:key="post.id">
      <h3>{{ post.title }}</h3>
      <p>
        {{ post.body }}
      </p>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";

const makeRequest = async () => fetch("https://dummyjson.com/posts")
  .then((res) => res.json()).then((res) => res.posts);

export default defineComponent({
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    const getPosts = await makeRequest();
    this.posts = getPosts;
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  padding: 20px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.post {
  padding: 15px;
  border: 2px solid green;
}
</style>
