<template>
    <div class="main-painel" @click="test">
        <div class="top">
            <img :src="store.image" alt="test" />
            <h1 class="name">
                {{ store.name }}
                <span> (rank: #{{ store.rank }}) </span>
            </h1>
        </div>

        <div class="main-painel__info">
            <div class="price">
                <h1 class="tag">
                    Price<span class="currency">(USD)</span>:
                    <span class="value-tag">
                        ${{ String(store.currentPrice).replace(".", ",") }}
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
                    <span class="value-tag"> ${{ store.ath.value }} </span>
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
import { useTokenStore } from "../store/tokenStore";
import { valueFormatter } from "../utils";

export default {
    setup() {
        const store = useTokenStore();

        return {
            store,
        };
    },
    name: "MainPainel",

    methods: {
        format: (value) => {
            return valueFormatter(value);
        },
    },
    created() {
        this.store.select("bitcoin");
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/theme";

.main-painel {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    box-shadow: $bar-shadow;
    background: $lighter-bg-color;
    margin-block: 35px;
    padding-block: 20px;
    padding-inline: 25px;
    overflow: hidden;

    .top {
        width: 100%;
        @include flex-center;
        justify-content: flex-start;
        margin-bottom: 25px;
        /* background: $main-color; */
        img {
            padding-right: 10px;
            width: 40px;
        }
        h1.name {
            border-left: 2px solid rgb(94, 94, 94);
            padding-left: 10px;
            padding-top: 3px;
            font-size: 28px;
            span {
                font-size: 18px;
                font-weight: bold;
                color: rgb(167, 167, 167);
            }
        }
    }

    &__info {
        padding-inline: 15px;
        height: calc(100% - 40px - 25px - 15px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* background: $main-color; */

        h1.tag {
            font-size: 20px;
            color: rgb(78, 78, 78);
            span.currency {
                font-size: 14px;
            }

            span.value-tag {
                color: black;
                font-size: 25px;
            }

            .value-delta {
                margin-left: 5px;
                font-size: 26px;
                font-weight: 500;
                color: rgb(252, 86, 86);
            }
        }

        .price {
            width: 100%;
            display: flex;
            align-items: flex-end;

            h1.tag {
                .value-delta {
                    &.pos {
                        color: $main-color;
                    }

                    &.neg {
                        color: rgb(252, 86, 86);
                    }

                    span {
                        font-size: 17px;
                        font-weight: 300;
                    }
                }
            }
        }
    }
}
</style>
