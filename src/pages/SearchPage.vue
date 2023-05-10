<template>
    <ModalWindow v-model:show="postVisible">
      <SeparatePost :postID="postID" :posts="searchedPosts"/>
    </ModalWindow>
    <h1>SEARCH POSTS:</h1>
    <div class="search-block">
      <label for="search">
        <input type="text" id="searsh" v-model="inputValue" />
      </label>
      <input type="button" value="Submit" @click="submitInput" />
    </div>
    <PostsList :posts="searchedPosts" :setPostID="setPostID"/>
</template>

<script>
import { defineComponent } from "vue";
import getSearchedPosts from "@/API/getSearchedPosts";
import PostsList from "@/components/PostsList.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import SeparatePost from "@/components/SeparatePost.vue";

export default defineComponent({
  components: {
    PostsList,
    ModalWindow,
    SeparatePost,
  },
  data() {
    return {
      inputValue: "",
      searchValue: "",
      searchedPosts: [],
      postVisible: false,
      postID: null,
    };
  },
  methods: {
    submitInput() {
      this.searchValue = this.inputValue;
      this.inputValue = "";
    },
    setPostID(id) {
      this.postVisible = true;
      this.postID = id;
    },
  },
  watch: {
    async searchValue(newValue) {
      this.searchedPosts = await getSearchedPosts(newValue);
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
