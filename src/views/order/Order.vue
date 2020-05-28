<template>
    <div id="order">
        <van-nav-bar title="填写订单"
                     left-arrow
                     @click-left="onClickLeft"
                     :fixed="true"
                     :border=true ></van-nav-bar>
        <van-contact-card type="add" add-text="选择收获地址" @click="chooseAddress" style="margin-top: 3rem;"></van-contact-card>


        <van-cell-group style="margin-top: 0.6rem">
            <van-cell title="送达时间" :value="arriveDate" @click="showDatePopup" is-link></van-cell>
            <router-link :to="{path: '/confirmOrder/orderDetail'}">
                <van-cell :value="`共${goodsCount}件`" is-link :center=true>
                    <template slot="title">
                        <img v-for="(goods, index) in threeShopCart" :src="goods.small_image" alt="" style="width: 3rem;">
                    </template>
                </van-cell>
            </router-link>
        </van-cell-group>

        <van-cell-group style="margin-top: 0.6rem">
            <van-cell title="支付方式" value="微信"></van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top: 0.6rem">
            <van-cell title="备注">
                <input type="text" style="text-align: right" placeholder="选填，备注您的特殊需求！" v-model="notice">
            </van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top: 0.6rem">
            <van-cell title="商品金额" :value="`¥${totalPrice}`"></van-cell>
            <van-cell title="配送费" :value="`¥${disPrice}`"></van-cell>
        </van-cell-group>

        <van-submit-bar
                :price="totalPrice*100 + disPrice*100"
                button-text="提交订单"
                label="实付"
                @submit="onSubmit">
        </van-submit-bar>

        <!--弹出日期组件-->
        <van-popup v-model="dateShow" round position="bottom">
            <van-datetime-picker
                    v-model="currentDate"
                    type="datetime"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @cancel="onDateCancel"
                    @confirm="onDateConfirm"
            >
            </van-datetime-picker>
        </van-popup>

        <!--支付二维码-->
        <van-popup  v-model="isPay" round position="center">
            <qriously :value="qrcode" :size="200" />
        </van-popup>


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