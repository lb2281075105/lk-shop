<template>
    <div id="dashboard">
        <van-tabbar v-model="active" active-color="#75a342">
            <van-tabbar-item replace to="/dashboard/home" >
                <span>首页</span>
                <template #icon="props">
                    <img :src="props.active ? home_icon.active : home_icon.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/dashboard/category">
                <span>分类</span>
                <template #icon="props">
                    <img :src="props.active ? category_icon.active : category_icon.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/dashboard/cart" :info="goodsNum > 0 ? goodsNum : '' ">
                <span>购物车</span>
                <template #icon="props">
                    <img :src="props.active ? cart_icon.active : cart_icon.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/dashboard/mine">
                <span>我的</span>
                <template #icon="props">
                    <img :src="props.active ? mine_icon.active : mine_icon.inactive" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>

    </div>
</template>
<script>
    import {mapState,mapMutations,mapActions} from 'vuex'
    // 在vuex拿到的所有的数据,状态 都需要放到computed里面
    export default {
        name: 'DashBoard',
        computed:{
            ...mapState(['shopCart']),
            goodsNum(){
                if (this.shopCart){
                    let num = 0;
                    Object.values(this.shopCart).forEach((value,index)=>{
                        num += value.num;
                    });
                    return num
                }
                return 0;
            }
        },
        methods: {
            ...mapMutations(['INIT_SHOP_CART']),
            ...mapActions(['reqUserInfo']),

        },
        mounted(){
            this.reqUserInfo();
            this.INIT_SHOP_CART();
        },
        data() {
            return {
                active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0,
                home_icon: {
                    active: require('@/images/tabbar/home_selected.png'),
                    inactive: require('@/images/tabbar/home_default.png'),
                },
                category_icon: {
                    active: require('@/images/tabbar/category_selected.png'),
                    inactive: require('@/images/tabbar/category_default.png'),
                },
                cart_icon: {
                    active: require('@/images/tabbar/shoppingcart_selected.png'),
                    inactive: require('@/images/tabbar/shoppingcart_default.png'),
                },
                mine_icon: {
                    active: require('@/images/tabbar/mine_selected.png'),
                    inactive: require('@/images/tabbar/mine_default.png'),
                }
            };
        },
        components: {},
        watch:{
            active(value){
                let tabBarActiveIndex = value > 0 ? value : 0;
                sessionStorage.setItem('tabBarActiveIndex',value);
            }
        }

    }
</script>
<style lang="less" scoped>

    #dashboard{
        width: 100%;
        height: 100%;
        background-color: blue;
    }

</style>