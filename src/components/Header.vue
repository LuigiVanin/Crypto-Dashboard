<template>
    <header :class="theme.getTheme">
        <button class="theme" @click="toggleTheme">
            <ion-icon
                class="theme"
                name="radio-button-off-outline"
                v-if="theme.getTheme === 'light'"
            ></ion-icon>
            <ion-icon
                class="theme"
                name="radio-button-on-outline"
                v-else-if="theme.getTheme === 'dark'"
            ></ion-icon>
        </button>

        <h1>
            <span> Crypto</span>
            <ion-icon name="logo-bitcoin"></ion-icon>
            <span>DashBoard </span>
        </h1>

        <button @click="action">
            <span :class="['ham', sidebar]"> </span>
        </button>
    </header>
</template>

<script>
import { useThemeStore } from "../store/themeStore";

export default {
    name: "Header",
    props: {
        action: Function,
        sidebar: String,
    },
    setup() {
        const theme = useThemeStore();

        return {
            theme,
        };
    },
    methods: {
        toggleTheme() {
            console.log(this.theme.getTheme);
            this.theme.toggle();
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/partials/header";
</style>
