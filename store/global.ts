import { defineStore } from "pinia";
import { GlobalState } from "./interface";

export const useGlobalStore = defineStore("global", {
  state: (): GlobalState => ({
    language: null,
    isDark: false
  }),
  getters: {},
  actions: {
    changeLanguage(language: string) {
      this.language = language;
    },
    changeTheme(isDark: boolean) {
      this.isDark = isDark;
    }
  }
});
