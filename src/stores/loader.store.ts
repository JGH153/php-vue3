import { defineStore } from "pinia";

export const useLoaderStore = defineStore({
  id: "loader",
  state: () => ({
    ongoingBlockingRequests: 0,
  }),
  actions: {
    changeBlockingRequests(change: number) {
      this.ongoingBlockingRequests += change;
    },
  },
});
