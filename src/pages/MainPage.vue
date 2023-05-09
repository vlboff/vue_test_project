<template>
    <ModalWindow v-model:show="modelVisible">
      <PostForm @create="createPost"/>
    </ModalWindow>
    <h1>POST-ITS:</h1>
    <PostsList :posts="posts" :openModal="showModal"/>
</template>

<script>
import { defineComponent } from "vue";
import PostForm from "@/components/PostForm.vue";
import PostsList from "@/components/PostsList.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import getPostsBody from "@/API/getPostsBody";
import { getPostsImages } from "@/API/getPostsImages";

export default defineComponent({
  components: {
    ModalWindow,
    PostForm,
    PostsList,
  },
  data() {
    return {
      posts: [],
      modelVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modelVisible = false;
    },
    showModal() {
      this.modelVisible = true;
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

</style>
