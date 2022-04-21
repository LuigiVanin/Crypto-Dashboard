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
@import "../styles/mixins";
@import "../styles/theme";

header {
    width: 100%;
    height: 60px;
    position: relative;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;

    &.light {
        background-color: $lighter-bg-color;
    }
    &.dark {
        background-color: $dark-bag-color;
    }

    @include flex-center;
    justify-content: space-around;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.295);

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
        z-index: 4;
        background-color: rgba(0, 0, 0, 0.041);

        &.theme {
            padding-block: 7px;
        }

        span.ham {
            width: 25px;
            transition: transform 0.7s ease-in-out;
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

            &.show {
                /* background: black; */
                border-top: 3px solid transparent;

                &::before {
                    transform: rotate(45deg);
                }
                &::after {
                    transform: rotate(-45deg) translate(5px, -5px);
                }
            }
        }

        ion-icon.theme {
            font-size: 24px;
            --ionicon-stroke-width: 46px;
            color: $main-color;
        }
    }
    &::before {
        content: "";
        position: absolute;
        right: 0px;
        bottom: 0px;
        width: 288px;
        height: 15px;
        z-index: 3;
    }
    &.light::before {
        background: $lighter-bg-color;
    }
    &.dark::before {
        background: $dark-bag-color;
    }
}

@media screen and (max-width: 400px) {
    header h1 span {
        display: none;
    }
}
</style>
