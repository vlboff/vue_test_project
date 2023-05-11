<template>
    <ModalWindow v-model:show="modalShowStore.modelVisible">
      <PostForm @create="createPost"/>
    </ModalWindow>
    <ModalWindow v-model:show="modalShowStore.postVisible">
      <SeparatePost :posts="postsStore.posts"/>
    </ModalWindow>
    <h1>POST-ITS:</h1>
    <div class="posts" v-if="postsStore.posts.length > 0">
      <PostsList :posts="postsStore.posts"/>
    </div>
    <div class="loading" v-else>
      <h2>Loading...</h2>
    </div>
    <button @click="showModal">Creare post</button>
</template>

<script>
import { defineComponent } from "vue";
import PostForm from "@/components/PostForm.vue";
import PostsList from "@/components/PostsList.vue";
import SeparatePost from "@/components/SeparatePost.vue";
import ModalWindow from "@/components/ModalWindow.vue";

import usePostsStore from "@/stores/PostsStore";
import useModalShowStore from "@/stores/ModalShowStore";
import usePostIDStore from "@/stores/PostIDStore";

export default defineComponent({
  components: {
    ModalWindow,
    PostForm,
    PostsList,
    SeparatePost,
  },
  setup() {
    const postsStore = usePostsStore();
    postsStore.getPosts();
    const createPost = () => postsStore.createPost();

    const modalShowStore = useModalShowStore();
    const showModal = () => modalShowStore.showModal();

    const postIDStore = usePostIDStore();
    const setPostID = () => postIDStore.setPostID();

    return {
      postsStore, modalShowStore, showModal, postIDStore, setPostID, createPost,
    };
  },
});
</script>

<style>

</style>
