<template>
    <aside :class="status"></aside>
</template>

<script>
export default {
    name: "SideBar",
    props: {
        status: String,
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/theme";

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
    &.hidden {
        right: -280px;
    }

    &.show {
        right: 0px;
    }
}
</style>
