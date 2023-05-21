<template>
  <div class="comment">
    <div class="user-avatar" v-if="avatar">
      <img :src="avatar" alt="avatar" width="50">
    </div>
    <div class="user-avatar" v-else>
      <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="avatar"  width="50">
    </div>
    <div class="comment-content">
      <h3 class="user-name">{{ comment.user.username ? comment.user.username : "" }}:</h3>
      <p class="user-text">{{ comment.body ? comment.body : "" }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";
import getImage from "@/API/getImage";

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

const avatar = ref("");

onMounted(async () => {
  avatar.value = await getImage(props.comment.user.id);
});
</script>

<style>
.comment {
  display: flex;
  gap: 10px;
  padding: 10px 0;
}

.comment-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.user-avatar img{
  width: 50px;
  border-radius: 100%;
}

.black-screen {
  width: 50px;
  border-radius: 100%;
  background-color: black;
}

</style>
