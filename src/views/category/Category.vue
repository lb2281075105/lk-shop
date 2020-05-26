<template>
    <div id="category">
        <Header/>

        <!--内容-->
        <div class="listWrapper" v-if="!showLoading">
            <!--左边-->
            <div class="leftWrapper">
                <ul class="wrapper">
                    <li
                            class="categoryItem"
                            v-for="(cate, index) in categoriesData"
                            :class="{selected: currentIndex === index}"
                            @click="clickLeftLi(index)"
                            :key="cate.id"
                            ref="menuList"
                    >
                        <span class="textWrapper">{{cate.name}}</span>
                    </li>
                </ul>
            </div>
            <!--右边-->
            <ContentView :categoriesDetailData="categoriesDetailData"/>
        </div>
        <van-loading class="van-loading" v-else type="spinner" color="#75a342">小撩正在加载中</van-loading>
    </div>
</template>
<script>
    import Header from './components/Header.vue'
    import ContentView from './components/ContentView.vue'

    // 引入滚动组件
    import BScroll from 'better-scroll'
    import {getCategories,getCategoriesDetail} from './../../service/api/index'

    // 引入通知插件
    import PubSub from 'pubsub-js'
    import { Toast } from 'vant';
    // 引入vuex 在methods里面进行展开mapMutations
    import {mapMutations} from 'vuex'

    export default {
        name: 'Category',
        data() {
            return {
                // 是否显示加载图标
                showLoading: true,
                // 左边列表数据
                categoriesData:[],
                // 右边列表数据
                categoriesDetailData:[],
                // 左边item选中与否
                currentIndex: 0
            }
        },
        created(){
          this.initData();
        },
        mounted(){
            // 订阅消息(添加到购物车的消息)
            PubSub.subscribe('categoryAddToCart',(msg,goods)=>{

                if(msg === 'categoryAddToCart'){
                    this.ADD_GOODS({
                        goodsId:goods.id,
                        goodsName:goods.name,
                        smallImage:goods.small_image,
                        goodsPrice:goods.price
                    });
                    Toast({
                        message:'添加到购物车成功',
                        duration:800
                    })
                }

            });
        },
        methods: {
            ...mapMutations(["ADD_GOODS"]),

            async initData(){

                let leftRes = await getCategories();
                if (leftRes.success){
                    this.categoriesData = leftRes.data.cate;
                    console.log(this.categoriesData);
                }

                let rightRes = await getCategoriesDetail('/lk001');
                if (rightRes.success){
                    this.categoriesDetailData = rightRes.data.cate;
                    console.log(this.categoriesDetailData);
                }
                this.showLoading = false;

                // 4. 初始化滚动框架
                this.$nextTick(() => {
                    this.leftScroll = new BScroll('.leftWrapper', {
                        probeType: 3,
                        click: true,
                        scrollY: true,
                        tap: true,
                        mouseWheel: true
                    })
                });

            },
            // 2. 处理左边的点击
            async clickLeftLi(index) {
                // 2.1 改变索引
                this.currentIndex = index;
                // 2.2 滚动到对应的位置
                let menuLists = this.$refs.menuList;
                let el = menuLists[index];
                // console.log(el);

                // 2.3 滚动到对应元素上
                this.leftScroll.scrollToElement(el, 300);

                // 2.4 获取右边的数据
                let rightRes = await getCategoriesDetail(`/lk00${index + 1}`);
                if (rightRes.success) {
                    this.categoriesDetailData = rightRes.data.cate;
                }
            }
        },
        components: {
            Header,
            ContentView
        }
    }
</script>
<style lang="less" scoped>

    #category {
        width: 100%;
        height: 100%;
        background-color: #F5F5F5;
        overflow: hidden;
    }

    .listWrapper {
        display: flex;
        position: absolute;
        top: 2.75rem;
        bottom: 3rem;
        width: 100%;
        overflow: hidden;
    }

    .leftWrapper {
        background-color: #F4F4F4;
        width: 5.3125rem;
        flex: 0 0 5.3125rem;
    }

    .categoryItem {
        padding: 0.75rem 0;
        border-bottom: solid 1px #E8E9E8;
        position: relative;
    }

    .categoryItem .textWrapper {
        line-height: 1.25rem;
        border-left: solid 0.1875rem transparent;
        padding: 0.3125rem 0.6875rem;
        font-size: 0.8125rem;
        color: #666666;
    }

    .categoryItem.selected {
        background: #FFF;
    }

    .categoryItem.selected .textWrapper {
        border-left-color: #3cb963;
        font-weight: bold;
        font-size: 0.875rem;
        color: #333333;
    }

    @media (min-width: 960px) {
        .wrapper {
            border-right: 1px solid #E8E9E8;
        }

        .wrapper .categoryItem {
            background: #fff;
        }
    }

</style>