<template>
    <div class="main-painel" @click="test">
        {{ store.$state.selectedToken.name }}:
        {{ store.currentPrice }}
    </div>
</template>

<script>
import { useTokenStore } from "../store/tokenStore";

export default {
    setup() {
        const store = useTokenStore();

        return {
            store,
        };
    },
    name: "MainPainel",
    created() {
        this.store.select("bitcoin");
    },
};
</script>

<style lang="scss" scoped>
.main-painel {
    width: 100%;
    height: 250px;
    background: red;
    margin-block: 35px;
}
</style>
