<template>
    <div class="token">
        <div class="token__img">
            <img :src="tk.image.small" :alt="tk.symbol" />
        </div>
        <div class="token__info">
            <p>
                ${{ format(tk.market_data.current_price.usd) }}
                <span>USD</span>
            </p>
        </div>
    </div>
</template>

<script>
import { valueFormatter } from "../utils";

export default {
    name: "TokenBox",
    props: {
        tk: {
            type: Object,
        },
    },
    methods: {
        format(value) {
            return valueFormatter(value);
        },
    },
    mounted() {
        console.log("hello");
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/theme";

.token {
    width: 225px;
    background: $lighter-bg-color;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &__info {
        height: 70px;
        width: 130px;
        /* background: $main-color; */
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            font-size: 15px;
            text-align: center;
            font-weight: bold;
        }

        p {
            text-align: center;
            font-size: 24px;
            span {
                font-size: 11px;
                text-decoration: underline;
                color: rgb(78, 78, 78);
            }
        }
    }

    .token__img {
        @include flex-center;
        width: 70px;
        height: 75px;
        border-radius: 5px;
        background-color: $image-bg-color;

        img {
            height: 45px;
        }
    }
}
</style>
