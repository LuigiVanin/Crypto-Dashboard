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
@import "../styles/partials/sideBar";
</style>
