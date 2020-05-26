import Vue from 'vue';


import {Tabbar,TabbarItem,Loading} from 'vant';

//1. 图片懒加载
import { Image } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Loading).use(Image);


// 2. 提示
import { Toast } from 'vant';
Vue.use(Toast);