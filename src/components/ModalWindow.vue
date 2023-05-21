<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div class="modal_content" @click.stop>
      <slot></slot>
    </div>

  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:show"]);

const hideModal = () => {
  emit("update:show", false);
};
</script>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
}

.modal_content {
  margin: auto;
  padding: 10px;
  background-color: white;
  min-width: 300px;
  max-width: 640px;
}
</style>
