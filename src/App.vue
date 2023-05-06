<template>
  <main>
    <PostForm @create="createPost"/>
    <PostsList :posts="posts"/>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import PostForm from "@/components/PostForm.vue";
import PostsList from "@/components/PostsList.vue";
import getPostsBody from "@/API/getPostsBody";
import { getPostsImages } from "@/API/getPostsImages";

export default defineComponent({
  components: {
    PostForm,
    PostsList,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
  async mounted() {
    const getPosts = await getPostsBody();
    const getImages = await getPostsImages();

    const concatArr = (firstArr, secondArr) => {
      const mainArr = [...firstArr];
      const imgArr = [...secondArr.photos];
      for (let i = 0; i < mainArr.length; i += 1) {
        mainArr[i].url = imgArr[i].src.large;
      }
      return mainArr;
    };

    this.posts = concatArr(getPosts, getImages);
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
