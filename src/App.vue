<template>
    <Header :action="toggleSidebar" />
    <SideBar :status="sidebar" />
    <main>
        <button @click="toggleSidebar">Aperte aqui para isdebar</button>
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
import SideBar from "./components/SideBar.vue";
import Data from "./data";

export default {
    components: { Header, SideBar },
    name: "App",
    data() {
        return {
            coins: Data.coins,
            sidebar: "hidden",
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
        toggleSidebar() {
            this.sidebar = this.sidebar === "hidden" ? "show" : "hidden";
        },
    },
};
</script>

<style lang="scss">
@import "./styles/mixins";
@import "./styles/theme";

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
