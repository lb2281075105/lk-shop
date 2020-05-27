<template>
    <div id="order">
        <van-nav-bar title="填写订单"
                     left-arrow
                     @click-left="onClickLeft"
                     :fixed="true"
                     :border=true ></van-nav-bar>
        <van-contact-card type="add" add-text="选择收获地址" @click="chooseAddress" style="margin-top: 3rem;"></van-contact-card>

        <transition name="router-slider" mode="out-in">
            <router-view></router-view>
        </transition>
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

            },
            chooseAddress(){
                this.$router.push('/confirmOrder/myAddress')
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
    /*转场动画*/
    .router-slider-enter-active, .router-slider-leave-active {
        transition: all 0.3s;
    }

    .router-slider-enter, .router-slider-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>