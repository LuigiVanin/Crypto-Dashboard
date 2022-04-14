<template>
    <div class="main-painel" @click="test">
        <div class="top">
            <img :src="store.image" alt="test" />
            <h1 class="name">
                {{ store.name }}
                <span> (rank: #{{ store.rank }}) </span>
            </h1>
        </div>

        <div class="price">
            <h1 class="tag">
                Price<span class="currency">(USD)</span>:
                <span class="price-tag">
                    ${{ String(store.currentPrice).replace(".", ",") }}
                </span>
                <span
                    :class="[
                        'time-delta',
                        store.changePercentage < 0 ? 'neg' : 'pos',
                    ]"
                >
                    ({{ store.changePercentage > 0 ? "+" : ""
                    }}{{ store.changePercentage }}%)<span>24h</span>
                </span>
            </h1>
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

    .price {
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: flex-end;
        padding-inline: 10px;
        h1.tag {
            font-size: 24px;

            color: rgb(78, 78, 78);
            span.currency {
                font-size: 14px;
            }
            span.price-tag {
                color: black;
                font-size: 28px;
            }

            .time-delta {
                margin-left: 5px;
                font-size: 28px;
                font-weight: 500;

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
</style>
