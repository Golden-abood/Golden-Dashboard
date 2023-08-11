import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const areas = ref(["abood", "golden"]);
  console.log(areas.value);
});
