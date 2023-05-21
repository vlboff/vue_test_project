import { defineStore } from "pinia";
import useModalShowStore from "./ModalShowStore";

interface IState {
  postID: number;
}

const usePostIDStore = defineStore("id", {
  state: (): IState => ({
    postID: 0,
  }),
  actions: {
    setPostID(id: number) {
      const modalShowStore = useModalShowStore();
      modalShowStore.postVisible = true;
      this.postID = id;
    },
  },
});

export default usePostIDStore;
