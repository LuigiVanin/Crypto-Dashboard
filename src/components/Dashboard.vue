<template>
    <div class="tokens-dashboard">
        <div v-for="token of tokensData" :key="token">
            <TokenBox :tk="token" />
        </div>
        <button v-show="limits < tokens.length" @click="getAllTokens">
            <ion-icon name="chevron-down"></ion-icon>
        </button>
    </div>
</template>

<script>
import axiosInst from "../api";
import TokenBox from "./TokenBox.vue";

export default {
    data() {
        return {
            tokensData: [],
            limits: 0,
        };
    },
    name: "Dashboard",
    props: {
        tokens: {
            type: Array,
        },
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
@import "../styles/mixins";
@import "../styles/theme";

.tokens-dashboard {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 25px;
    position: relative;
    z-index: 1;
    padding-bottom: 15px;

    button {
        position: absolute;
        left: calc(50% - 22px);
        bottom: -45px;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        box-shadow: $bar-shadow;
        @include flex-center;

        ion-icon {
            padding-top: 2px;
            color: black;
            --ionicon-stroke-width: 46px;
        }
    }
}

@media screen and (max-width: 760px) {
    .tokens-dashboard {
        justify-content: space-around;
        gap: 15px;
    }
}
</style>
