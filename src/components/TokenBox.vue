<template>
    <div
        class="token"
        @click="selectToken"
        :class="[tk.name === store.name ? 'selected' : '', theme.getTheme]"
    >
        <div class="token__img">
            <img :src="tk.image.small" :alt="tk.symbol" />
        </div>
        <div class="token__info">
            <h1>
                <span>
                    {{ tk.name }}
                    <span class="price-change">
                        <ion-icon
                            v-if="
                                tk.market_data.price_change_percentage_24h > 0
                            "
                            name="caret-up-outline"
                            class="up"
                        ></ion-icon>
                        <ion-icon
                            v-else
                            name="caret-down-outline"
                            class="down"
                        ></ion-icon> </span
                ></span>
            </h1>
            <p>
                ${{ format(tk.market_data.current_price.usd) }}<span>USD</span>
            </p>
        </div>
    </div>
</template>

<script>
import { valueFormatter } from "../utils";
import { useTokenStore } from "../store/tokenStore";
import { useThemeStore } from "../store/themeStore";

export default {
    name: "TokenBox",
    props: {
        tk: {
            type: Object,
        },
    },
    setup() {
        const store = useTokenStore();
        const theme = useThemeStore();

        return {
            store,
            theme,
        };
    },
    methods: {
        format(value) {
            return valueFormatter(value);
        },
        painelUpdate() {
            this.$emit("painel-update");
        },
        selectToken() {
            this.painelUpdate();
            this.store.selectDirectly(this.tk);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/partials/tokenBox";
</style>
