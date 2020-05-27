import Vue from 'vue';


import {Tabbar,TabbarItem,Loading} from 'vant';

//1. 图片懒加载
import { Image } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Loading).use(Image);


// 2. 提示
import { Toast } from 'vant';
Vue.use(Toast);

// 3. 蒙版提示
import { Dialog } from 'vant';
Vue.use(Dialog);

// 5.配置导航栏
import {NavBar} from 'vant'
Vue.use(NavBar);

// 6. 地址
import { ContactCard, ContactList, ContactEdit } from 'vant';
Vue.use(ContactCard).use(ContactList).use(ContactEdit);

import { AddressList } from 'vant';
Vue.use(AddressList);

import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

// 8. 单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);

// 9. 提交订单
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

// 10. 宫格
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);

// 11. 弹出层
import { Popup } from 'vant';
Vue.use(Popup);

// 12. 日期组件
import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);

// 13. 卡片选项
import { Card } from 'vant';
Vue.use(Card);

// 14. 选项卡
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);