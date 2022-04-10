<template>
    <Header />
    <main>
        <button @click="spinLogo">Aperte aqui para o Logo</button>
        <button
            @click="
                () => {
                    getCrypto('bitcoin');
                }
            "
        >
            Esse botão vai fazer uma requisição
        </button>
        <div class="coins-container">
            <h1 v-for="coin of coins" :key="coin">{{ coin }}</h1>
        </div>
    </main>
</template>

<script>
import axiosInst from "./api";
import Header from "./components/Header.vue";
import Coins from "./data";

export default {
    components: { Header },
    name: "App",
    data() {
        return {
            coins: Coins.coins,
        };
    },
    methods: {
        getCrypto(name) {
            const promise = axiosInst.get(`coins/${name}`);

            promise.then((response) => {
                console.log(response.data);
            });
            promise.catch((err) => console.log(err.response));
        },
    },
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    position: relative;
    width: 100%;
    background-color: rgb(226, 226, 226);
    font-family: "Poppins", sans-serif;
}

#app {
    height: 100vh;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

button {
    padding-inline: 10px;
    padding-block: 15px;
    font-size: 19px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(5, 5, 5, 0.247);
    font-family: "Poppins", sans-serif;
    cursor: pointer;
}
</style>
