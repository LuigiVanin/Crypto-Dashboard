<template>
    <div :class="['blur', status]" @click="toggle"></div>
    <aside :class="status"></aside>
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
    &.hidden {
        right: -280px;
    }

    &.show {
        right: 0px;
    }
}
</style>
