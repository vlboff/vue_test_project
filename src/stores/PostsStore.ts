import { defineStore } from "pinia";
import getPostsBody from "@/API/getPostsBody";

const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),
  actions: {
    async getPosts() {
      this.posts = await getPostsBody();
    },
  },
});

export default usePostsStore;
