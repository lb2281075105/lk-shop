import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

import DashBoard from './../views/dashboard/DashBoard.vue'

const Home = ()=> import('./../views/home/Home.vue');
const Cart = ()=> import('./../views/cart/Cart.vue');
const Category = ()=> import('./../views/category/Category.vue');
const Mine = ()=> import('./../views/mine/Mine.vue');
const UserCenter = ()=> import('./../views/mine/children/UserCenter.vue');
const MineOrder = ()=> import('./../views/mine/children/MineOrder');

const Order = ()=> import('./../views/order/Order.vue');
const OrderDetail = ()=> import('./../views/order/children/OrderDetail.vue');
const MyAddress = ()=> import('./../views/order/children/MyAddress.vue');
const AddAddress = ()=> import('./../views/order/children/children/AddAddress.vue')
const EditAddress = ()=> import('./../views/order/children/children/EditAddress.vue')

const Login = ()=> import('./../views/login/Login.vue')

export default new Router({

    routes:[
        {path:'/',redirect:'/dashboard'},
        {
            path:'/dashboard',
            name:'dashboard',
            component:DashBoard,
            children:[
                {path:'/dashboard',redirect:'/dashboard/home'},
                {path:'home',name:'home',component:Home,meta:{keepAlive:true}},
                {path:'category',name:'category',component:Category,meta:{keepAlive:true}},
                {path:'cart',name:'cart',component:Cart},
                {path:'mine',name:'mine',component:Mine,
                    children:[
                        {path:'userCenter',name:'userCenter',component:UserCenter},
                        {path: 'mineOrder', component: MineOrder} // 我的订单

                    ]
                }
            ]

        },
        {
            path:'/confirmOrder',
            name:'order',
            component:Order,
            children:[
                {   path:'myAddress',
                    name:'myAddress',
                    component:MyAddress,
                    children:[
                        {path:'addAddress',name:'addAddress',component:AddAddress},
                        {path:'editAddress',name:'editAddress',component:EditAddress}

                    ]
                },
                {
                    path: 'orderDetail',
                    name: 'orderDetail',
                    component: OrderDetail
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component:Login
        }
    ]
})