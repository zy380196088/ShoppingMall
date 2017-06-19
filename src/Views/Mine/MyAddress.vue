<template>
    <div class="MyAddressView">
        <div class="topBar">
            <div class="icon-back">
                <mu-icon-button icon="chevron_left" to="/Mine"></mu-icon-button>
            </div>
            <span class="top-title">收货地址</span>
        </div>
        <section class="addressItem" v-for="(item,index) in addressList">
            <div class="addressBox">
                <p class="userInfoBox clearfix">
                    <span class="userName">{{item.name}}</span>
                    <span class="phoneNumber">{{item.phoneNumber}}</span>
                </p>
                <p class="addressText">{{item.address}}</p>
            </div>
            <div class="EditToolBox">
                <mu-flat-button label="编辑" class="tool-button" icon="edit" to="/EditAddress"/>
                <mu-flat-button label="删除" class="tool-button" icon="delete"/>
            </div>
        </section>
        <p class="addNewAd-btn">添加新地址</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'MyAddress',
        props: {}, // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                addressList: [{
                    name: '华路',
                    phoneNumber: '13726738272',
                    address: '浙江省杭州市西湖国贸中心622室杭州华夏紫砂博物馆浙江省杭州市西湖国贸中心622室杭州华夏紫砂博物馆'
                },
                    {
                        name: '华路',
                        phoneNumber: '13726738272',
                        address: '浙江省杭州市拱墅区环城北路318号'
                    }]
            }
        },
        created () {
        }, // 创建周期
        watch: {}, // 状态过渡
        methods: {}, // 方法存放的地方
        computed: {}, // 计算属性存放的地方
        filters: {}, // 过滤
        directives: {} // 指令
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    $borderColor: #dfdfdf;
    $fontColorWhite: #fefefe;
    $fontColorBlack: #2a293b;
    .MyAddressView {
        .topBar {
            position: relative;
            height: .96rem;
            line-height: .96rem;
            font-size: .32rem;
            overflow: hidden;
            .icon-back {
                float: left;
                display: block;
                z-index: 99;
            }
            .top-title {
                display: block;
                width: 6.5rem;
                height: .96rem;
                font-size: .32rem;
                font-weight: bold;
                line-height: .96rem;
                text-align: center;
                z-index: 2;
            }
        }
    }

    .addressItem {
        padding: .2rem;
        width: 7.5rem;
        height: auto;
        min-height: 2.54rem;
        .addressBox {
            width: 100%;
            border-bottom: .01rem solid $borderColor;
            font-size: .32rem;
            .userInfoBox {
                width: 7.5rem;
                padding-bottom: .2rem;
                .userName {
                    display: block;
                    float: left;
                    text-align: left;
                    padding-right: .3rem;
                }
                .phoneNumber {
                    display: block;
                    float: left;
                    text-align: left;
                }
            }
            .addressText {
                padding-bottom: .2rem;
                color: #a4a4a4;
                font-size: .28rem;
                text-align: left;
            }
        }
        .EditToolBox {
            width: 100%;
            color: $borderColor;
        }
    }

    .addNewAd-btn {
        width: 7rem;
        height: .8rem;
        border-radius: .4rem;
        background-color: #ff5400;
        text-align: center;
        line-height: .8rem;
        font-size: .32rem;
        font-weight: bold;
        color: #fff;
        margin: 0.6rem auto;
    }
</style>