<template>
    <ModalWindow v-model:show="modalShowStore.modelVisible">
      <PostForm @create="createPost"/>
    </ModalWindow>
    <ModalWindow v-model:show="modalShowStore.postVisible">
      <SeparatePost />
    </ModalWindow>
    <h1>POST-ITS:</h1>
    <PostsList />
    <button @click="showModal">Creare post</button>
</template>

<script>
import { defineComponent } from "vue";
import PostForm from "@/components/PostForm.vue";
import PostsList from "@/components/PostsList.vue";
import SeparatePost from "@/components/SeparatePost.vue";
import ModalWindow from "@/components/ModalWindow.vue";
// import getPostsBody from "@/API/getPostsBody";
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

    const modalShowStore = useModalShowStore();
    const showModal = () => modalShowStore.showModal();

    const postIDStore = usePostIDStore();
    const setPostID = () => postIDStore.setPostID();

    return {
      postsStore, modalShowStore, showModal, postIDStore, setPostID,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modelVisible = false;
    },

  },

  mounted() {
    this.postsStore.getPosts();
  },
});
</script>

<style>

</style>
