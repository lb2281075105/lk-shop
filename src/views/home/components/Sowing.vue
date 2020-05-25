<template>
    <swiper id="swiper" :options="swiperOption" ref="mySwiper">

        <swiper-slide v-for="(sowing,index) in sowing_list" :key="sowing.public_id">
            <img :src="sowing.icon_url" :alt="sowing.public_name">
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>
    import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: 'Sowing',
        props:{
            sowing_list:Array
        },
        data() {
            return {
                swiperOption: {
                    notNextClick:true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable:true
//                        bulletActiveClass:'swiper-pagination-bullet-active'
                    },
                    loop:true,
                    autoplay:{
                        delay:1000
                    },
                    speed:600,
                    on:{
                        slideChangeTransitionEnd(){
//                            console.log(this.activeIndex);
                        }
                    }

                }
            }
        },
        computed:{
            swiper(){
                return this.$refs.mySwiper.swiper;
            }

        },
        mounted(){
//            console.log(this.$refs.mySwiper);
//            console.log(this.swiper);
        },
        components: {
            swiper,
            swiperSlide
        }
//        directives: {
//            swiper: directive
//        }
    }
</script>
<style lang="less" scoped>

    #swiper {
        width: 100%;
        height: 14rem;
        background-color: transparent;
    }

    #swiper img{
        width: 100%;
        height: 100%;
    }

    /*
      穿透修改样式 >>>
   */
    /deep/ .swiper-pagination-bullet-active{
        background-color: #75a342 !important;
    }
</style>