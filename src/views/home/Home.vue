<template>
    <div id="home">
        <div v-if="!showLoading">
            <Header/>
            <Sowing :sowing_list = "sowing_list"/>
            <Nav :nav_list = "nav_list"/>
            <FlashSale :flash_list = "flash_list"/>
            <YouLike :youlike_list = "youlike_list"/>
            <MarkPage v-if="showBackStatus" :scrollToTop = "scrollToTop"/>
        </div>
        <van-loading class="van-loading" v-else type="spinner" color="#75a342">小撩正在加载中</van-loading>
    </div>
</template>
<script>
    import Header from './components/Header.vue'
    import Sowing from './components/Sowing.vue'
    import Nav from './components/Nav.vue'
    import FlashSale from './components/FlashSale.vue'
    import YouLike from './components/YouLike.vue'
    import MarkPage from './components/MarkPage.vue'

    // 引入处理返回顶部的函数
    import { showBack , animate} from '@/config/global.js'



    import {getHomeData} from './../../service/api/index'
    export default {
        name: 'Home',
        data() {
            return {
                sowing_list:[],
                nav_list:[],
                flash_list:[],
                youlike_list:[],
                showLoading:true,
                // 是否显示返回顶部的按钮
                showBackStatus:false
            }
        },

        created(){

            this.requestData();

//            getHomeData().then((response)=>{
//                console.log(response);
//                if (response.success){
//                    this.sowing_list = response.data.list[0].icon_list;
//                    this.nav_list = response.data.list[2].icon_list;
//                    this.flash_list = response.data.list[3].product_list;
//                    this.youlike_list = response.data.list[12].product_list;
//                    this.showLoading = false;
//
//                    // 开始监听滑动
//                    showBack((status)=>{
//
//                        this.showBackStatus = status;
//                        if (status){
//
//                        }else {
//
//                        }
//                    });
//                }
//            }).catch(error=>{
//                console.log(error);
//            });
        },
        methods: {
            // getHomeData 是一个promise异步的,在前面添加await变成同步的,
            // requestData添加async转化成异步的
            async requestData(){

                let res = await getHomeData();
                if (res.success){
                    this.sowing_list = res.data.list[0].icon_list;
                    this.nav_list = res.data.list[2].icon_list;
                    this.flash_list = res.data.list[3].product_list;
                    this.youlike_list = res.data.list[12].product_list;
                    this.showLoading = false;

                    // 开始监听滑动
                    showBack((status)=>{

                        this.showBackStatus = status;
                        if (status){

                        }else {

                        }
                    });
                }else {
                    console.log(error);

                }
            },
            scrollToTop(){
//                console.log('滑动');
                let documentBody = document.documentElement || document.body;
                animate(documentBody,{'scrollTop':0},400,'ease-out');
            }
        },
        components: {
            Header,
            Sowing,
            Nav,
            FlashSale,
            YouLike,
            MarkPage
        }
    }
</script>
<style lang="less" scoped>

    #home{
        width: 100%;
        height: 100%;
        /*height: 200rem;*/
        background-color: #f5f5f5;
    }

    .van-loading{
        position: absolute;
        left: 50%;
        top:40%;
        transform: translate(-50%);;
    }
</style>