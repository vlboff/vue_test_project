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

<script setup lang="ts">
import {
  defineProps, onBeforeMount, onMounted, PropType, ref,
} from "vue";
import getComments from "@/API/getComments";
import PostContent from "@/components/PostContent.vue";
import CommentItem from "@/components/CommentItem.vue";
import usePostIDStore from "@/stores/PostIDStore";
import { IPost } from "@/types";

const props = defineProps({
  posts: {
    type: Array as PropType<IPost[]>,
    required: true,
  },
});

const postIDStore = usePostIDStore();

const post = ref<IPost | undefined | null>(null);
const comments = ref([]);

onBeforeMount(() => {
  const getPostByID = (id: number | string, posts: IPost[]) => {
    const postByID = posts.find((item) => item.id === id);
    return postByID;
  };
  post.value = getPostByID(postIDStore.postID, props.posts);
});
onMounted(async () => {
  const postComments = await getComments(postIDStore.postID);
  comments.value = postComments;
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
