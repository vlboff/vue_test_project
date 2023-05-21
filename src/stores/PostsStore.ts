import { defineStore } from "pinia";
import getPostsBody from "@/API/getPostsBody";
import getSearchedPosts from "@/API/getSearchedPosts";
import useModalShowStore from "./ModalShowStore";

interface IPost {
  id: string | number;
  url?: string;
  title: string;
  body: string;
}

interface IState {
  post: IPost;
  posts: object[];
  searchedPosts: object[];
  loaded: boolean;
}

const usePostsStore = defineStore("posts", {
  state: (): IState => ({
    post: {
      id: "",
      url: "",
      title: "",
      body: "",
    },
    posts: [],
    searchedPosts: [],
    loaded: false,
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
        id: "",
        url: "",
        title: "",
        body: "",
      };
    },
  },
});

export default usePostsStore;
