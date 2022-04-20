<template>
    <div
        class="token"
        @click="selectToken"
        :class="tk.name === store.name ? 'selected' : ''"
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
                ${{ format(tk.market_data.current_price.usd) }}

                <span>USD</span>
            </p>
        </div>
    </div>
</template>

<script>
import { valueFormatter } from "../utils";
import { useTokenStore } from "../store/tokenStore";

export default {
    name: "TokenBox",
    props: {
        tk: {
            type: Object,
        },
    },
    setup() {
        const store = useTokenStore();

        return {
            store,
        };
    },
    methods: {
        format(value) {
            return valueFormatter(value);
        },
        selectToken() {
            console.log(this.store.name, this.tk.name);
            this.store.selectDirectly(this.tk);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/theme";

.token {
    width: 225px;
    background: $lighter-bg-color;
    padding: 15px;
    border-radius: 5px;
    /* margin-bottom: 20px; */
    box-shadow: $bar-shadow;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 1;

    &:hover {
        box-shadow: 0 0 3px 0px $main-color;
    }

    &.selected {
        box-shadow: 0 0 2px 3px $main-color;
    }

    span.price-change {
        position: absolute;
        right: -19px;
        top: 0;
        ion-icon {
            font-size: 19px;
            &.up {
                color: $main-color;
            }
            &.down {
                top: -5px;
                color: rgb(255, 71, 71);
            }
        }
    }

    &__info {
        height: 65px;
        width: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 7px;
        padding-bottom: 10px;

        h1 {
            position: relative;
            font-size: 16px;
            font-weight: bold;
            text-align: center;

            span {
                position: relative;
            }
        }

        p {
            text-align: right;
            font-size: 24px;
            font-weight: 300;
            span {
                font-size: 11px;
                text-decoration: underline;
                color: rgb(78, 78, 78);
            }
        }
    }

    .token__img {
        @include flex-center;
        width: 68px;
        height: 63px;
        border-radius: 5px;
        background-color: $image-bg-color;

        img {
            height: 45px;
        }
    }
}

@media screen and (max-width: 425px) {
    .token {
        /* margin-bottom: 5px; */
        padding-block: 25px;
        width: 100%;
        padding-inline: 45px;
    }
}
</style>
