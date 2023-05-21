<template>
    <ModalWindow v-model:show="modalShowStore.postVisible">
      <SeparatePost :posts="postsStore.searchedPosts"/>
    </ModalWindow>
    <h1>SEARCH POSTS:</h1>
    <div class="search-block">
      <label for="search">
        <input type="text" id="searsh" v-model="inputValue" />
      </label>
      <input type="button" value="Submit" @click="submitInput" />
    </div>
    <div class="posts" v-if="postsStore.searchedPosts.length > 0">
      <PostsList :posts="postsStore.searchedPosts"/>
    </div>
    <div class="loading" v-else>
      <h2>No results.</h2>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import PostsList from "@/components/PostsList.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import SeparatePost from "@/components/SeparatePost.vue";
import usePostsStore from "@/stores/PostsStore";
import useModalShowStore from "@/stores/ModalShowStore";

const modalShowStore = useModalShowStore();
const postsStore = usePostsStore();
const getSearchedPosts = (query: string) => postsStore.getSearchedPosts(query);

const inputValue = ref("");
const searchValue = ref("");

const submitInput = () => {
  searchValue.value = inputValue.value;
  inputValue.value = "";
};

const getSearchValue = (newValue: string) => {
  getSearchedPosts(newValue);
};

watch(searchValue, getSearchValue);
</script>

<style>
.search-block {
  display: flex;
  gap: 20px;
}
</style>
