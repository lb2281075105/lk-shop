<template>
    <div id="myAddress">
        <van-nav-bar title="我的地址"
                     left-arrow
                     @click-left="onClickLeft"
                     :fixed="true"
                     :border=true />

        <van-address-list
                v-model="chosenAddressId"
                :list="list"
                default-tag-text="默认"
                @add="onAdd"
                @edit="onEdit"
                style="margin-top: 3rem"

        />
        <!--出口出口出口-->
        <transition name="router-slider" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                        isDefault: true,
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号',
                    },
                ]
            };
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1);

            },
            onAdd() {
//                Toast('新增地址');
                this.$router.push('/confirmOrder/myAddress/addAddress');
            },
            onEdit(item, index) {
//                Toast('编辑地址:' + index);
                this.$router.push('/confirmOrder/myAddress/editAddress');
            }
        },
        components: {}
    }
</script>
<style scoped>

    #myAddress{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 200;
    }

    /*转场动画*/
    .router-slider-enter-active, .router-slider-leave-active{
        transition: all 0.3s;
    }

    .router-slider-enter, .router-slider-leave-active{
        /*transform: translate3d(2rem, 2rem, 0);*/
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>