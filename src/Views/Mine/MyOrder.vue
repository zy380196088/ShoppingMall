<template>
    <div>
        <div class="headerBar clearfix">
            <mu-icon-button icon="chevron_left" to="/Mine"></mu-icon-button>
            <!--<span class="headerTitle">我的订单</span>-->
        </div>
        <mu-tabs :value="activeTab" class="orderTabs" @change="handleTabChange">
            <mu-tab value="tab1" title="全部"/>
            <mu-tab value="tab2" @active="handleActive" title="代付款"/>
            <mu-tab value="tab3" title="代发货"/>
            <mu-tab value="tab4" @active="handleActive" title="待收货"/>
        </mu-tabs>
        <section class="orderList">
            <div v-if="activeTab === 'tab1'">
                <h2>Tab 1</h2>
                <p>
                    全部
                </p>
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
    export default{
        name: 'MyOrder',
        props: {}, // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                activeTab:'tab1'
            }
        },
        created () {
        }, // 创建周期
        watch: {}, // 状态过渡
        methods: {
            handleTabChange (val) {
                this.activeTab = val
            },
        }, // 方法存放的地方
        computed: {}, // 计算属性存放的地方
        filters: {}, // 过滤
        directives: {} // 指令
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .headerBar{
        width: 7.5rem;
        height: 1rem;
        .headerTitle{
            position: absolute;
            display: inline-block;
            font-size: .36rem;
            line-height: 1rem;
        }
        .orderTabs{
            width: 6rem;
        }
    }
    .orderList{
    }
</style>