<template>
    <div id="home">
        <div v-if="!showLoading">
            <Header/>
            <Sowing :sowing_list = "sowing_list"/>
            <Nav :nav_list = "nav_list"/>
            <FlashSale :flash_list = "flash_list"/>
        </div>
        <van-loading class="van-loading" v-else type="spinner" color="#75a342">小撩正在加载中</van-loading>
    </div>
</template>
<script>
    import Header from './components/Header.vue'
    import Sowing from './components/Sowing.vue'
    import Nav from './components/Nav.vue'
    import FlashSale from './components/FlashSale.vue'

    import {getHomeData} from './../../service/api/index'
    export default {
        name: 'Home',
        data() {
            return {
                sowing_list:[],
                nav_list:[],
                flash_list:[],
                showLoading:true
            }
        },

        created(){
            getHomeData().then((response)=>{
                console.log(response);
                if (response.success){
                    this.sowing_list = response.data.list[0].icon_list;
                    this.nav_list = response.data.list[2].icon_list;
                    this.flash_list = response.data.list[3].product_list
                    this.showLoading = false;
                }
            }).catch(error=>{
                console.log(error);
            });
        },
        methods: {},
        components: {
            Header,
            Sowing,
            Nav,
            FlashSale
        }
    }
</script>
<style lang="less" scoped>

    #home{
        width: 100%;
        /*height: 100%;*/
        height: 200rem;

        background-color: #f5f5f5;
    }

    .van-loading{
        position: absolute;
        left: 50%;
        top:40%;
        transform: translate(-50%);;
    }
</style>