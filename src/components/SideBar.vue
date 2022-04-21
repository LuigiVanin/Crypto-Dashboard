<template>
    <div :class="['blur', status]" @click="toggle"></div>
    <aside :class="status">
        <h1>Menu</h1>
        <ul class="menu">
            <a href="#">
                <ion-icon name="information-circle-outline"></ion-icon> About
            </a>
            <a href="https://www.coingecko.com/en/api" target="_blank"
                ><ion-icon name="globe-outline"></ion-icon> API</a
            >
            <a
                href="https://github.com/LuigiVanin/crypto-dashboard"
                target="_blank"
                ><ion-icon name="logo-github"></ion-icon> Github</a
            >
        </ul>

        <hr />

        <div class="search">
            <input v-model="input" type="text" placeholder="Pesquisar..." />
            <ion-icon name="search"></ion-icon>
        </div>
        <ul class="result">
            <li
                v-for="tk in tokens.filter((item) =>
                    item.includes(input.toLowerCase()) ? 1 : 0
                )"
                :key="tk"
                @click="() => store.select(tk)"
            >
                {{ tk }}
            </li>
        </ul>
        <h1 class="close" @click="toggle">
            Close <ion-icon name="close"></ion-icon>
        </h1>
    </aside>
</template>

<script>
import { useTokenStore } from "../store/tokenStore";

export default {
    name: "SideBar",
    data() {
        return {
            input: "",
        };
    },
    props: {
        status: String,
        toggle: Function,
        tokens: Array,
    },
    setup() {
        const store = useTokenStore();
        return {
            store,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/theme";

.blur {
    position: fixed;
    z-index: 2;
    top: 60px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    /* width: calc(100% - 280px); */
    background: rgba(77, 77, 77, 0.103);
    transition: all 0.4s ease-in-out;
    &.hidden {
        visibility: hidden;
        opacity: 0;
    }
    &.show {
        visibility: visible;
        opacity: 1;
    }
}

aside {
    width: 280px;
    /* height: calc(100vw - 65px); */
    position: fixed;
    z-index: 2;
    top: 60px;
    bottom: 0px;
    background: $main-color;
    box-shadow: $bar-shadow;
    transition: all 0.4s ease-in-out;
    padding-top: 25px;
    padding-inline: 15px;
    &.hidden {
        right: -280px;
    }

    &.show {
        right: 0px;
    }

    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid $lighter-bg-color;
        margin: 1em 0;
        padding: 0;
        margin-block: 25px;
    }

    h1 {
        text-align: center;
        color: $lighter-bg-color;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    ul.menu {
        /* background: red; */
        a {
            text-decoration: none;
            padding-block: 8px;
            padding-inline: 8px;
            margin-bottom: 0px;
            border-radius: 5px;
            @include flex-center;
            justify-content: flex-start;
            cursor: pointer;
            color: $image-bg-color;
            font-weight: 500;
            font-size: 19px;
            transition: all 0.3s ease-in-out;

            ion-icon {
                font-size: 24px;
                margin-right: 5px;
                --ionicon-stroke-width: 46px;
            }

            &:hover {
                background: rgba(255, 255, 255, 0.158);
            }
        }
    }

    ul.result {
        color: $image-bg-color;
        margin-top: 15px;
        height: 250px;
        overflow-y: scroll;
        margin-bottom: 75px;

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(8, 8, 8, 0.15);
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(224, 224, 224, 0.904);
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: white;
        }

        li {
            padding-block: 10px;
            padding-inline: 15px;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                background: rgba(255, 255, 255, 0.158);
            }
        }
    }

    .search {
        margin-top: 15px;
        box-shadow: $white-shadow;
        height: 45px;
        border-radius: 10px;
        background: linear-gradient(45deg, $main-color, $side-bar-bg);
        padding-inline: 15px;
        @include flex-center;

        ion-icon {
            font-size: 24px;
            color: white;
        }

        input {
            background: transparent;
            border: none;
            outline: none;
            color: white;
            width: 100%;
            font-size: 21px;

            /* background: black; */

            &::placeholder {
                color: rgba(235, 235, 235, 0.842);
            }
        }
    }

    h1.close {
        margin-inline: auto;
        @include flex-center;
        height: 40px;
        width: 200px;
        border-radius: 10px;
        cursor: pointer;
        color: $main-color;
        background: $lighter-bg-color;
    }
}
</style>
