import { defineStore } from "pinia";
import { objectIsEmpty } from "../utils";
import axiosInst from "../api";

export const useTokenStore = defineStore("token", {
    state: () => {
        return {
            selectedToken: {
                name: "placeholder",
                data: {},
            },
            teste: "teste",
        };
    },
    actions: {
        async select(name) {
            const request = axiosInst.get(`/coins/${name}`);
            request.then((res) => {
                this.selectedToken.name = res.data.name;
                this.selectedToken.data = res.data;
            });
        },
        selectDirectly(data) {
            this.selectedToken.name = data.name;
            this.selectedToken.data = data;
        },
        changeTeste(something) {
            this.teste = `has changed: ${something}`;
        },
    },
    getters: {
        getTeste: (state) => `teste:${state.teste}`,
        currentPrice: (state) => {
            if (state.selectedToken.data.market_data === undefined) {
                return "nada ainda";
            }
            return state.selectedToken.data.market_data.current_price["usd"];
        },
        name: (state) => {
            return state.selectedToken.name;
        },
        marketCap: (state) => {
            if (objectIsEmpty(state.selectedToken.data)) {
                return "nothing to see here";
            }
            return state.selectedToken.data.market_data.market_cap["usd"];
        },
        rank: (state) => {
            if (objectIsEmpty(state.selectedToken.data)) {
                return "nothing to see here";
            }
            return state.selectedToken.data.market_cap_rank;
        },
        image: (state) => {
            if (objectIsEmpty(state.selectedToken.data)) {
                return "nothing to see here";
            }
            return state.selectedToken.data.image.thumb;
        },
        changePercentage: (state) => {
            if (objectIsEmpty(state.selectedToken.data)) {
                return 0;
            }
            return state.selectedToken.data.market_data
                .price_change_percentage_24h;
        },

        ath: (state) => {
            if (objectIsEmpty(state.selectedToken.data)) {
                return { value: 0, valueChange: 0 };
            }
            return {
                value: state.selectedToken.data.market_data.ath["usd"],
                valueChange:
                    state.selectedToken.data.market_data.ath_change_percentage[
                        "usd"
                    ],
            };
        },
    },
});
