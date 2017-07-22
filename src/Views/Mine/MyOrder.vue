<template>
    <div id="myOrderPage">
        <div class="headerBar clearfix">
            <div style="width: 1rem;float: left;">
                <mu-icon-button icon="chevron_left" to="/Mine"></mu-icon-button>
            </div>
            <!--<span class="headerTitle">我的订单</span>-->
            <div style="float: left;">
                <mu-tabs :value="activeTab" class="orderTabs" @change="handleTabChange">
                    <mu-tab value="tab1" title="全部"/>
                    <mu-tab value="tab2" @active="handleActive" title="待付款"/>
                    <mu-tab value="tab3" title="待发货"/>
                    <mu-tab value="tab4" @active="handleActive" title="待收货"/>
                </mu-tabs>
            </div>
        </div>

        <section class="orderList">
            <div v-if="activeTab === 'tab1'">
                <OrderItem></OrderItem>
            </div>
            <div v-if="activeTab === 'tab2'">
                <h2>Tab 2</h2>
                <p>
                    这是第三个 tab
                </p>
            </div>
            <div v-if="activeTab === 'tab3'">
                <h2>Tab 3</h2>
                <p>
                    代发货
                </p>
            </div>
            <div v-if="activeTab === 'tab4'">
                <h2>Tab 4</h2>
                <p>
                    待收货
                </p>
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    import  OrderItem from '../../components/OrderItem.vue'
    export default{
        name: 'MyOrder',
        props: {}, // 父到子传参
        components: {
            OrderItem
        }, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                activeTab: 'tab1',
                orderList: [
                    {
                        id: '16342',
                        title: '维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾',
                        imgUrl: 'https://gd1.alicdn.com/imgextra/i4/1587415772/TB2xkOttbFlpuFjy0FgXXbRBVXa_!!1587415772.jpg',
                        unitPrice: 57.8,
                        quantity: 2,
                        payNumber: 95.6,
                        orderState: 0 //0待付款.1待发货,2待收货,3已收货
                    },
                    {
                        id: '16342',
                        title: '维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾',
                        imgUrl: 'https://gd1.alicdn.com/imgextra/i4/1587415772/TB2xkOttbFlpuFjy0FgXXbRBVXa_!!1587415772.jpg',
                        unitPrice: 57.8,
                        quantity: 2,
                        payNumber: 95.6,
                        orderState: 3
                    }
                ],
            }
        },
        created () {
        }, // 创建周期
        watch: {}, // 状态过渡
        methods: {
            handleTabChange (val) {
                this.activeTab = val
            }
        }, // 方法存放的地方
        computed: {}, // 计算属性存放的地方
        filters: {}, // 过滤
        directives: {} // 指令
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .headerBar {
        width: 7.5rem;
        height: 1rem;
        .headerTitle {
            position: absolute;
            display: inline-block;
            font-size: .36rem;
            line-height: 1rem;
        }
        .orderTabs {
            width: 6rem;
        }
    }
    .orderList {
        width: 7.5rem;
        height: auto;
    }
</style>