import { defineStore } from "pinia";

const useModalShowStore = defineStore("show", {
  state: () => ({
    modelVisible: false,
    postVisible: false,
  }),
  actions: {
    showModal() {
      this.modelVisible = true;
    },
  },
});

export default useModalShowStore;
