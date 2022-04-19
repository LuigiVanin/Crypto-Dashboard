<template>
    <div class="tokens-dashboard">
        <div v-for="token of tokensData" :key="token">
            <TokenBox :tk="token" />
        </div>
    </div>
</template>

<script>
import axiosInst from "../api";
import TokenBox from "./TokenBox.vue";

export default {
    data() {
        return {
            tokensData: [],
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
            for (const token of this.tokens) {
                this.getToken(token);
            }
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
}

@media screen and (max-width: 760px) {
    .tokens-dashboard {
        justify-content: space-around;
        gap: 15px;
    }
}
</style>
