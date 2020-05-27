<template>
    <div id="order">
        <van-nav-bar title="填写订单"
                     left-arrow
                     @click-left="onClickLeft"
                     fixed="true"
                     :border=true />
        <div>dfafda</div>
    </div>
</template>
<script>
    export default {
        name: 'Order',
        data() {
            return {
                msg: 'hello world!'
            }
        },
        methods: {
            onClickLeft(){
                this.$router.back();

            }
        },
        components: {}
    }
</script>
<style scoped>
    #order{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
</style>