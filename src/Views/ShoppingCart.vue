<template>
    <CartList :cart-data="cartData"></CartList>
</template>

<script type="text/ecmascript-6">
    import CartList from '../components/CartList.vue'

    export default{
        name: 'ShoppingCart',
        components: {
            CartList
        },
        extends: {},
        data () {
            return {
                cartData:{
                    totalPrice:2900,
                    productList: [
                        {
                            id: '16342',
                            title: '维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾',
                            imgUrl: 'https://gd1.alicdn.com/imgextra/i4/1587415772/TB2xkOttbFlpuFjy0FgXXbRBVXa_!!1587415772.jpg',
                            unitPrice: 57.8,
                            quantity: 2,
                            select: false
                        }, {
                            id: '12342',
                            title: 'Joyoung/九阳 DJ13E-Q3 家用全自动破壁无渣豆浆机',
                            imgUrl: 'https://img.alicdn.com/imgextra/i2/415670368/TB2qrayprVkpuFjSspcXXbSMVXa_!!415670368.jpg_430x430q90.jpg',
                            unitPrice: 297,
                            quantity: 1,
                            select: false
                        },
                        {
                            id: '12542',
                            title: '亿健精灵ELF跑步机家用 款多功能电动超静音可折叠健身房减肥正品',
                            imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/TB12fhMRFXXXXXVXFXXXXXXXXXX_!!0-item_pic.jpg_130x130.jpg',
                            unitPrice: 1457,
                            quantity: 1,
                            select: true
                        },
                        {
                            id: '125346342',
                            title: 'Midea/美的 T7-L382B智能电烤箱家用烘焙多功能38升大容量蛋糕',
                            imgUrl: 'https://img.alicdn.com/bao/uploaded/i1/TB1OYTzRXXXXXa1apXXSutbFXXX.jpg_640x480Q60s0.jpg_.webp',
                            unitPrice: 469,
                            quantity: 1,
                            select: true
                        }, {
                            id: '15329',
                            title: 'INNESS英尼斯全实木餐桌椅休闲桌椅组合简约早餐桌隔断吧台',
                            imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/TB1kETIRpXXXXcbapXXXXXXXXXX_!!2-item_pic.png_430x430q90.jpg',
                            unitPrice: 758,
                            quantity: 1,
                            select: false
                        },
                        {
                            id: '12542',
                            link: 'https://detail.tmall.com/item.htm?id=549352025566&ali_refid=a3_430406_1007:13579762:T:3724950661867899228_0_100:937c5a836c8a664274baa0892753a456&ali_trackid=31_937c5a836c8a664274baa0892753a456&spm=a21bo.50862.201874-sales.7.ZfyQK6',
                            title: 'Harbor House Glory 美式全棉贡缎四件套 印花床上用品',
                            imgUrl: 'https://img.alicdn.com/bao/uploaded/i1/TB10kJ_RFXXXXaYXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                            unitPrice: 588.00,
                            quantity: 1,
                            select: false
                        }, {
                            id: '16342',
                            link: 'https://item.taobao.com/item.htm?ft=t&spm=2013.1.20141001.1.rADeZ7&id=528028436514&scm=1007.12144.81309.42296_0&pvid=bb1cfc71-ee6b-4f04-bf1f-c760c1988867',
                            title: '美国原装进口rumbatime手表女正品腕表女石英表',
                            imgUrl: 'https://gd1.alicdn.com/imgextra/i1/74171808/TB29y5NbipnpuFjSZFkXXc4ZpXa_!!74171808.jpg',
                            unitPrice: 288.00,
                            quantity: 1,
                            select: false
                        }
                    ],
                    labelText: "全选",
                }
            }
        },
        //组件属性
        //在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。
        props: {},
        methods: {},
        mounted () {
        },
        computed: {},
        watch: {}
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>