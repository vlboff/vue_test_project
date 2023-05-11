import { defineStore } from "pinia";
import getPostsBody from "@/API/getPostsBody";
import getSearchedPosts from "@/API/getSearchedPosts";
import useModalShowStore from "./ModalShowStore";

interface IPost {
  id: number | null;
  url: string;
  title: string;
  body: string;
}

interface IState {
  post: IPost;
  posts: object[];
  searchedPosts: object[];
}

const usePostsStore = defineStore("posts", {
  state: (): IState => ({
    post: {
      id: null,
      url: "",
      title: "",
      body: "",
    },
    posts: [],
    searchedPosts: [],
  }),
  actions: {
    async getPosts() {
      this.posts = await getPostsBody();
    },
    async getSearchedPosts(query: string) {
      this.searchedPosts = await getSearchedPosts(query);
    },
    createPost(post: IPost) {
      this.post = {
        id: Date.now(),
        url: post.url,
        title: post.title,
        body: post.body,
      };
      this.posts.push(post);
      const modalShowStore = useModalShowStore();
      modalShowStore.modelVisible = false;
      this.post = {
        id: null,
        url: "",
        title: "",
        body: "",
      };
    },
  },
});

export default usePostsStore;
