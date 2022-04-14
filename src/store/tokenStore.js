import { defineStore } from "pinia";
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
            return state.selectedToken.data.market_data.current_price.usd;
        },
    },
});
