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

<script>
import { defineComponent } from "vue";

import PostsList from "@/components/PostsList.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import SeparatePost from "@/components/SeparatePost.vue";

import usePostsStore from "@/stores/PostsStore";
import useModalShowStore from "@/stores/ModalShowStore";

export default defineComponent({
  components: {
    PostsList,
    ModalWindow,
    SeparatePost,
  },
  setup() {
    const postsStore = usePostsStore();
    const getSearchedPosts = (query) => postsStore.getSearchedPosts(query);

    const modalShowStore = useModalShowStore();

    return {
      postsStore, modalShowStore, getSearchedPosts,
    };
  },
  data() {
    return {
      inputValue: "",
      searchValue: "",
    };
  },
  methods: {
    submitInput() {
      this.searchValue = this.inputValue;
      this.inputValue = "";
    },
  },
  watch: {
    searchValue(newValue) {
      this.getSearchedPosts(newValue);
    },
  },

});
</script>

<style>
.search-block {
  display: flex;
  gap: 20px;
}

</style>
