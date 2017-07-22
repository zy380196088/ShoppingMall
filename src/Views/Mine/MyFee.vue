<template>
    <div class="MyFeeView">
        <section class="myFeeHeader">
            <div class="topBar">
                <div class="icon-back">
                    <mu-icon-button icon="chevron_left" to="/Mine"></mu-icon-button>
                </div>
                <span class="top-title">我的当前佣金</span>
            </div>
            <div class="clearfix feeBanner">
                <div class="withdrawCash-Value">{{withdrawCashValue}}</div>
                <div class="withdrawCash-Btn">提现</div>
            </div>
        </section>
        <section class="detial">
            <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab value="tab1" title="佣金收入"/>
                <mu-tab value="tab2" @active="" title="提现记录"/>
            </mu-tabs>
            <div v-if="activeTab === 'tab1'">
                <!--佣金收入-->
                <div class="feeShowBox" v-for="item in feeList">
                    <p class="clearfix">
                        <span class="text">{{item.text}}</span>
                        <span class="value">{{item.number}}</span>
                    </p>
                    <p class="time">{{item.time}}</p>
                </div>
            </div>
            <div v-if="activeTab === 'tab2'">
                <!--提现-->
                <div class="withdrawCashBox" v-for="item in withdrawCashList">
                    <p class="clearfix">
                        <span class="text">{{item.text}}</span>
                        <span class="value">{{item.number}}</span>
                    </p>
                    <p class="clearfix">
                        <span class="time">{{item.time}}</span>
                        <span class="state">{{item.state}}</span>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'MyFee',
        props: {}, // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                withdrawCashValue: 256.20,
                activeTab: 'tab1',
                feeList: [
                    {
                        text: '直系会员购买商品提成金额',
                        time: '2017-05-15 15:24',
                        number: 500
                    },
                    {
                        text: '直系会员购买商品提成金额',
                        time: '2017-05-15 15:24',
                        number: 500
                    },
                    {
                        text: '直系会员购买商品提成金额',
                        time: '2017-05-15 15:24',
                        number: 500
                    }, {
                        text: '直系会员购买商品提成金额',
                        time: '2017-05-15 15:24',
                        number: 500
                    }
                ],
                withdrawCashList: [
                    {
                        text: '佣金体现到支付宝(137****4728)',
                        time: '2017-05-15 15:24',
                        number: 500,
                        state: '提现中'
                    },
                    {
                        text: '佣金体现到支付宝(137****4728)',
                        time: '2017-05-15 15:24',
                        number: 500,
                        state: '交易失败'
                    },
                    {
                        text: '佣金体现到支付宝(137****4728)',
                        time: '2017-05-15 15:24',
                        number: 500,
                        state: '交易成功'
                    }
                ]
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
    $fontColorWhite: #fefefe;
    $fontColorBlack: #2a293b;
    .MyFeeView {
        width: 7.5rem;
        height: auto;
        .myFeeHeader {
            position: relative;
            width: 7.5rem;
            height: 2.6rem;
            background: url("../../assets/img/money_bg@2x.png") no-repeat;
            background-size: 7.5rem 2.6rem;
            .topBar {
                height: .96rem;
                line-height: .96rem;
                font-size: .32rem;
                color: $fontColorWhite;
                overflow: hidden;
                .icon-back {
                    float: left;
                    display: block;
                }
                .top-title {
                    float: left;
                    display: block;
                    height: .96rem;
                    font-size: .32rem;
                    line-height: .96rem;
                }
            }
            .feeBanner {
                position: relative;
            }
            .withdrawCash-Value {
                width: 5.6rem;
                height: 100%;
                padding-left: .6rem;
                text-align: left;
                font-size: .8rem;
                font-weight: bold;
                color: $fontColorWhite;
            }
            .withdrawCash-Value:after {
                content: ' 元';
                font-size: .4rem;
                font-weight: bold;
            }
            .withdrawCash-Btn {
                position: absolute;
                right: .2rem;
                top: .2rem;
                width: 1.6rem;
                height: .8rem;
                line-height: .8rem;
                text-align: center;
                font-size: .32rem;
                color: #fefefe;
                border-radius: .16rem;
                border: .02rem solid #fff;
            }
        }
    }

    .feeShowBox, .withdrawCashBox {
        padding: .2rem;
        width: 7.5rem;
        height: 1.3rem;
        border-bottom: .01rem solid #c1bdbc;
        .text {
            float: left;
        }

        .value {
            float: right;
            font-size: .3rem;
            font-weight: bold;
            color: #00b548;
        }
    }

    .feeShowBox {

    }

    .withdrawCashBox {

    }



    .value:after {
        content: '元';
    }

    .time {
        float: left;
        font-size: .28rem;
        color: #c1bdbc;
    }

    .state {
        float: right;
        font-size: .28rem;
    }
</style>