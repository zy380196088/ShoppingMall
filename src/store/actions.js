// /**
//  * Created by zhouyu on 2017/6/14.
//  */
//
// actions:{
//   checkout({commit,state},products){
//     //把当前购物车的商品备份起来
//     const savedCartItems =  [...state.cart.added]
//     //发出结账请求,然后清空购物车
//     commit(types.CHECKOUT_REQUEST)
//     //购物车 API 接受一个成功回调和一个失败回调
//     shop.buyProducts(
//         products,
//         //
//         ()=>commit(types.CHECKOUT_SUCCESS)
//         //失败操作
//         ()=>commit(types.CHECKOUT_FAILURE,savedCartItems)
//     )
//   }
// }