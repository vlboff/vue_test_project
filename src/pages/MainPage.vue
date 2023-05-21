<template>
    <ModalWindow v-model:show="modalShowStore.modelVisible">
      <PostForm />
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

<script setup lang="ts">
import PostForm from "@/components/PostForm.vue";
import PostsList from "@/components/PostsList.vue";
import SeparatePost from "@/components/SeparatePost.vue";
import ModalWindow from "@/components/ModalWindow.vue";

import usePostsStore from "@/stores/PostsStore";
import useModalShowStore from "@/stores/ModalShowStore";

const postsStore = usePostsStore();

if (!postsStore.loaded) {
  postsStore.getPosts();
  postsStore.loaded = true;
}

const modalShowStore = useModalShowStore();
const showModal = () => modalShowStore.showModal();

</script>
