import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => {
        return {
            theme: "light",
        };
    },
    actions: {
        toggle() {
            this.theme = this.theme === "light" ? "dark" : "light";
        },
    },
    getters: {
        getTheme: (state) => {
            return state.theme;
        },
    },
});
