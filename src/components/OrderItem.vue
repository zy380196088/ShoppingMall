<template>
    <div>
        <section v-for="(item,$index) in OrderItem.productList">
            <div class="orderBox clearfix" v-for="(item,$index) in OrderItem.productList">
                <img :src="item.imgUrl" alt="商品示图">
                <div class="orderInfo">
                    <p class="orderTitle">{{item.title}}</p>
                    <p class="orderPay clearfix">
                        <span class="quantity">x{{item.quantity}}</span>
                        <span class="payPrice">&#165 {{item.quantity * item.unitPrice}}</span>
                    </p>
                </div>
            </div>
            <div class="paySum">
                <span>共{{OrderItem.totalQuantity}}件商品</span>
                <span>付款: &#165{{OrderItem.totalPrice}}</span>
            </div>
            <div>

            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: '',
        props: {}, // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                OrderItem: {
                    totalPrice: "xxxx",
                    totalQuantity: 2,
                    orderState: 0, //0待付款.1待发货,2待收货,3已收货
                    productList: [
                        {
                            id: '16342',
                            title: '维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾',
                            imgUrl: 'https://gd1.alicdn.com/imgextra/i4/1587415772/TB2xkOttbFlpuFjy0FgXXbRBVXa_!!1587415772.jpg',
                            unitPrice: 57.8,
                            quantity: 1,
                            payNumber: 95.6,
                        }, {
                            id: '16342',
                            title: '维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾',
                            imgUrl: 'https://gd1.alicdn.com/imgextra/i4/1587415772/TB2xkOttbFlpuFjy0FgXXbRBVXa_!!1587415772.jpg',
                            unitPrice: 57.8,
                            quantity: 4,
                            payNumber: 95.6,
                        }, {
                            id: '16342',
                            title: '维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾',
                            imgUrl: 'https://gd1.alicdn.com/imgextra/i4/1587415772/TB2xkOttbFlpuFjy0FgXXbRBVXa_!!1587415772.jpg',
                            unitPrice: 57.8,
                            quantity: 2,
                            payNumber: 95.6,
                            orderState: 0 //0待付款.1待发货,2待收货,3已收货
                        }]
                }
            }
        },
        created () {
        }, // 创建周期
        watch: {}, // 状态过渡
        methods: {}, // 方法存放的地方
        computed: {
            getTotalQuantity(){

            }
        }, // 计算属性存放的地方
        filters: {}, // 过滤
        directives: {} // 指令
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .orderBox {
        width: 7.5rem;
        padding: .2rem;
        margin: .2rem auto;

        img {
            float: left;
            width: 2rem;
            height: 2rem;
        }
        .orderInfo {
            float: right;
            width: 5rem;
            height: 2rem;
            .orderTitle {
                width: 5rem;
                height: 1rem;
                line-height: .5rem;
                font-size: .3rem;
                overflow: hidden;
            }
            .quantity, .payPrice {
                font-size: .3rem;
                padding: .2rem;
            }
            .quantity {
                float: left;
            }
            .payPrice {
                float: right;
            }
        }
    }
    .paySum{
        span:nth-child(1){
            float: right;
            color: #2a293b;
        }

        span:nth-child(2){
            float: right;
            font-size: .3rem;
        }
    }

</style>