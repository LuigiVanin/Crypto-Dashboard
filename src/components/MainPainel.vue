<template>
    <div :class="['main-painel', theme.getTheme]">
        <div class="top">
            <img :src="store.image" alt="test" />
            <h1 class="name">
                {{ store.name }}<span>(#{{ store.rank }}) </span>
            </h1>
        </div>

        <div class="main-painel__info">
            <div class="price">
                <h1 class="tag">
                    Price<span class="currency">(USD)</span>:
                    <span class="value-tag">
                        ${{ format(store.currentPrice) }}
                    </span>
                    <span
                        :class="[
                            'value-delta',
                            store.changePercentage < 0 ? 'neg' : 'pos',
                        ]"
                        >{{ "" }}({{ store.changePercentage > 0 ? "+" : ""
                        }}{{
                            store.changePercentage.toFixed(4).replace(".", ",")
                        }}%)<span>24h</span>
                    </span>
                </h1>
            </div>

            <div class="market-cap">
                <h1 class="tag">
                    Market Cap<span class="currency">(USD)</span> :
                    <span class="value-tag">
                        ${{ parseInt(store.marketCap).toLocaleString() }}
                    </span>
                </h1>
            </div>

            <div class="market-cap">
                <h1 class="tag">
                    ATH<span class="currency">(USD)</span> :
                    <span class="value-tag">
                        ${{ store.ath.value.toLocaleString() }}
                    </span>
                    <span class="value-delta neg"
                        >({{
                            store.ath.valueChange.toFixed(4).replace(".", ",")
                        }}%)</span
                    >
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import { useThemeStore } from "../store/themeStore";
import { useTokenStore } from "../store/tokenStore";
import { valueFormatterEasy } from "../utils";

export default {
    setup() {
        const store = useTokenStore();
        const theme = useThemeStore();

        return {
            store,
            theme,
        };
    },
    name: "MainPainel",

    methods: {
        format: (value) => {
            return valueFormatterEasy(value);
        },
    },
    created() {
        this.store.select("bitcoin");
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/partials/mainPainel";
</style>
