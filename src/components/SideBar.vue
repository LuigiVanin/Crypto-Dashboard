<template>
    <div :class="['blur', status]" @click="toggle"></div>
    <aside :class="status">
        <h1>Menu</h1>
        <ul class="menu">
            <li>
                <ion-icon name="information-circle-outline"></ion-icon> About
            </li>
            <li><ion-icon name="globe-outline"></ion-icon> API</li>
            <li><ion-icon name="logo-github"></ion-icon> Github</li>
        </ul>
        <div class="search">
            <input type="text" value="" />
        </div>
        <ul class="result"></ul>
        <h1>Close <ion-icon name="close"></ion-icon></h1>
    </aside>
</template>

<script>
export default {
    name: "SideBar",
    props: {
        status: String,
        toggle: Function,
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/theme";

.blur {
    position: fixed;
    z-index: 2;
    top: 60px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    /* width: calc(100% - 280px); */
    background: rgba(77, 77, 77, 0.103);
    transition: all 0.4s ease-in-out;
    &.hidden {
        visibility: hidden;
        opacity: 0;
    }
    &.show {
        visibility: visible;
        opacity: 1;
    }
}

aside {
    width: 280px;
    /* height: calc(100vw - 65px); */
    position: fixed;
    z-index: 2;
    top: 60px;
    bottom: 0px;
    background: $main-color;
    box-shadow: $bar-shadow;
    transition: all 0.4s ease-in-out;
    padding-top: 25px;
    padding-inline: 15px;
    &.hidden {
        right: -280px;
    }

    &.show {
        right: 0px;
    }
    h1 {
        text-align: center;
        color: $lighter-bg-color;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    ul.menu {
        /* background: red; */
        li {
            padding-block: 8px;
            padding-inline: 8px;
            margin-bottom: 0px;
            border-radius: 5px;
            @include flex-center;
            justify-content: flex-start;
            cursor: pointer;
            color: $image-bg-color;
            font-weight: 500;
            font-size: 19px;
            transition: all 0.3s ease-in-out;

            ion-icon {
                font-size: 24px;
                margin-right: 5px;
                --ionicon-stroke-width: 46px;
            }

            &:hover {
                background: rgba(255, 255, 255, 0.158);
            }
        }
    }

    .search {
        margin-top: 15px;
        box-shadow: $bar-shadow;
        height: 45px;
        border-radius: 10px;
        background: linear-gradient(
            45deg,
            rgb(43, 247, 213),
            rgb(26, 247, 118)
        );

        input {
            background: transparent;
            border: none;
            outline: none;
        }
    }
}
</style>
