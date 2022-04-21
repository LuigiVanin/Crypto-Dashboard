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
    updated() {
        this.$emit("painel-update");
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
    margin-block: 35px;
    padding-block: 20px;
    padding-inline: 25px;
    overflow: hidden;

    &.light {
        box-shadow: $bar-shadow;
        background: $lighter-bg-color;
    }

    &.dark {
        box-shadow: $bar-shadow;
        background: $dark-bag-color;
        .top h1.name {
            border-left: 2px solid rgb(221, 221, 221);
            color: $lighter-bg-color;
        }

        .main-painel__info {
            h1.tag {
                color: $lighter-bg-color;
                span.value-tag {
                    color: white;
                }
            }

            /* .price h1.tag{
                .value-tag{

                }
            } */
        }
    }

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
                font-size: 20px;
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

@media screen and (max-width: 455px) {
    .main-painel {
        height: 320px;
        position: relative;
        padding-block: 35px;
        border-radius: 0px;
        .top {
            justify-content: center;

            h1.name span {
                margin: auto;
            }
        }

        &__info {
            padding-inline: 0;
        }
        h1.tag {
            .value-delta,
            .value-tag {
                font-size: 22px;
                margin-inline: auto;
            }
        }
    }
}
</style>
