import { defineStore } from "pinia";
import useModalShowStore from "./ModalShowStore";

interface IState {
  postID: number | null;
}

const usePostIDStore = defineStore("id", {
  state: (): IState => ({
    postID: null,
  }),
  actions: {
    setPostID(id: number | null) {
      const modalShowStore = useModalShowStore();
      modalShowStore.postVisible = true;
      this.postID = id;
    },
  },
});

export default usePostIDStore;
