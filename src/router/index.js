import Vue from 'vue'
import Router from 'vue-router'
import Main from '../Views/Main.vue'
import ProductDetails from '../Views/Main/ProductDetails.vue'
import ShoppingCart from '../Views/ShoppingCart.vue'
import PayPage from '../Views/ShoppingCart/PayPage.vue'
import Mine from '../Views/Mine.vue'
import MyOrder from '../Views/Mine/MyOrder.vue'
import MyFee from '../Views/Mine/MyFee.vue'
import MyMember from '../Views/Mine/MyMember.vue'
import MyAddress from '../Views/Mine/MyAddress.vue'
import EditAddress from '../Views/Mine/EditAddress.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }, {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
    }, {
      path: '/MyFee',
      name: 'MyFee',
      component: MyFee
    }, {
      path: '/MyOrder',
      name: 'MyOrder',
      component: MyOrder
    }, {
      path: '/MyMember',
      name: 'MyMember',
      component: MyMember
    }, {
      path: '/MyAddress',
      name: 'MyAddress',
      component: MyAddress
    }, {
      path: '/EditAddress',
      name: 'EditAddress',
      component: EditAddress
    },{
      path: '/PayPage',
      name: 'PayPage',
      component: PayPage
    },{
      path: '/ProductDetails/:productId',
      name: 'ProductDetails',
      component: ProductDetails
    }

  ]
})
