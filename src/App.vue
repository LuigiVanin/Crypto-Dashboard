<template>
    <Header :action="toggleSidebar" :sidebar="sidebar" />
    <SideBar :status="sidebar" :toggle="toggleSidebar" />
    <main>
        <div class="container">
            <MainPainel />
            <DashBoard :tokens="coins" />
        </div>
    </main>
</template>

<script>
import axiosInst from "./api";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import DashBoard from "./components/Dashboard.vue";
import MainPainel from "./components/MainPainel.vue";
import Data from "./data";

export default {
    components: { Header, SideBar, DashBoard, MainPainel },
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
    background-color: $light-bg-color;
    font-family: "Poppins", sans-serif;
}

#app {
    height: 100vh;
}

main {
    flex-direction: column;
    width: 100%;

    .container {
        display: flex;
        flex-direction: column;
        width: 760px;
        margin-inline: auto;
    }
}

button {
    @include button;
}

@media screen and (max-width: 760px) {
    main {
        .container {
            width: 100%;
        }
    }
}
</style>
