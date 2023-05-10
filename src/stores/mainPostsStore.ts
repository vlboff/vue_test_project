import { defineStore } from "pinia";

const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),
  actions: {},
});

export default usePostsStore;
