<template>
  <div class="separate-post">
    <PostContent :post="post"/>
    <div class="comments-list" v-if="comments.length > 0">
      <h3 class="comments-list_title">Comments:</h3>
      <CommentItem
        v-for="comment in comments" :comment="comment" :key="comment.id"/>
    </div>
    <div class="no-comments" v-else>
      <h3 class="comments-list_title">No comments:</h3>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import getComments from "@/API/getComments";
import PostContent from "@/components/PostContent.vue";
import CommentItem from "@/components/CommentItem.vue";
import usePostsStore from "@/stores/PostsStore";
import usePostIDStore from "@/stores/PostIDStore";

export default defineComponent({
  components: {
    PostContent,
    CommentItem,
  },
  setup() {
    const postsStore = usePostsStore();
    const postIDStore = usePostIDStore();
    return {
      postsStore, postIDStore,
    };
  },
  data() {
    return {
      post: {},
      comments: [],
    };
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  beforeMount() {
    const getPostByID = (id, posts) => {
      const post = posts.find((item) => item.id === id);
      return post;
    };
    this.post = getPostByID(this.postIDStore.postID, this.posts);
  },
  async mounted() {
    const comments = await getComments(this.postIDStore.postID);
    this.comments = comments;
  },
});
</script>

<style>
.comments-list_title {
  color: var(--main_red);
}

.separate-post {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 20px;
  max-width: 1000px;
}
</style>
