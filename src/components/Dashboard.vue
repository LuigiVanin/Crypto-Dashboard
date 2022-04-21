<template>
    <div class="tokens-dashboard">
        <div v-for="token of tokensData" :key="token">
            <TokenBox
                :tk="token"
                @painel-update="() => $emit('painel-update')"
            />
        </div>
        <button
            v-show="limits < tokens.length"
            @click="getAllTokens"
            :class="theme.getTheme"
        >
            <ion-icon name="chevron-down"></ion-icon>
        </button>
    </div>
</template>

<script>
import axiosInst from "../api";
import { useThemeStore } from "../store/themeStore";
import TokenBox from "./TokenBox.vue";

export default {
    data() {
        return {
            tokensData: [],
            limits: 0,
        };
    },
    name: "Dashboard",
    emits: ["painel-update"],
    props: {
        tokens: {
            type: Array,
        },
    },
    setup() {
        const theme = useThemeStore();

        return {
            theme,
        };
    },
    components: { TokenBox },
    methods: {
        getToken(name) {
            const promise = axiosInst.get(`coins/${name}`);

            promise.then((response) => {
                // console.log(response.data);
                this.tokensData.push(response.data);
            });
            promise.catch((err) => console.log(err.response));
        },

        getAllTokens() {
            let stop = this.limits + 12;
            if (stop > this.tokens.length) {
                stop = this.tokens.length;
            }
            for (let i = this.limits; i < stop; i++) {
                this.getToken(this.tokens[i]);
            }
            this.limits = stop;
        },
    },
    created() {
        if (this.tokens !== null) {
            this.getAllTokens();
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/partials/dashboard";
</style>
