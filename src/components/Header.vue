<template>
    <header>
        <button @click="toggleTheme">
            <ion-icon
                class="theme"
                name="radio-button-off-outline"
                v-if="theme === 'light'"
            ></ion-icon>
            <ion-icon
                class="theme"
                name="radio-button-on-outline"
                v-else-if="theme === 'dark'"
            ></ion-icon>
        </button>

        <h1>
            <span> Crypto</span>
            <ion-icon name="logo-bitcoin"></ion-icon>
            <span>DashBoard </span>
        </h1>

        <button>
            <span class="ham"> </span>
        </button>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            theme: "light",
        };
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === "light" ? "dark" : "light";
        },
    },
};
</script>

<style lang="scss">
@import "../styles/mixins";
@import "../styles/theme";
header {
    width: 100%;
    background-color: rgb(245, 245, 245);
    height: 60px;

    @include flex-center;
    justify-content: space-around;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.295);
    margin-bottom: 35px;

    h1 {
        font-size: 24px;
        @include flex-center;
        font-weight: 400;
        color: $main-color;

        ion-icon {
            font-size: 34px;
        }
    }

    button {
        box-shadow: none;
        display: flex;
        padding: 10px;
        span.ham {
            width: 25px;
            border-top: 3px solid $main-color;

            &::after,
            &::before {
                content: "";
                display: block;
                width: 25px;
                height: 3px;
                background: $main-color;
                margin-top: 4px;
                transition: 0.3s;
                position: relative;
            }
        }

        ion-icon.theme {
            font-size: 24px;
            --ionicon-stroke-width: 46px;
            color: $main-color;
        }
    }
}
</style>
