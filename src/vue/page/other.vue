<template>
    <!-- html -->
    <div class='other-page'>
    <top></top>
    <h1>this is the other page</h1>
    <bottom></bottom>
    </div>
</template>
<script>
    import Top from '../component/top.vue';
    import Bottom from '../component/bottom.vue';

    const COMPONENT_NAME = 'other-page';
    export default {
        name: COMPONENT_NAME,
        components: {
            Top, Bottom
        }
    }
</script>
<style lang="css">
    /* css */
    .other-page{
        background-color: #5f5f5f;
    }
</style>