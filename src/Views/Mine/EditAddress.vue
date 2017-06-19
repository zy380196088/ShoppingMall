<template>
    <div>
        <div class="topBar">
            <span class="cancel-btn"> 取消 </span>
            <span class="top-title">编辑地址</span>
            <span class="save-btn"> 保存 </span>
        </div>
        <section class="addressEditBox">
            <div class="clearfix">
                <span>收货人:</span>
                <div class="inputBox">
                    <input type="text">
                </div>
            </div>
            <div class="clearfix">
                <span>联系方式:</span>
                <p class="inputBox">
                    <input label="lia" type="text">
                </p>
            </div>
            <div class="clearfix">
                <span>详细地址:</span>
                <p class="inputBox">
                    <input type="text">
                </p>
            </div>
        </section>

    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'EditAddress',
        props: {}, // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                addressDetail: {
                    name: '华路',
                    phoneNumber: '13726738272',
                    address: '浙江省杭州市西湖国贸中心622室杭州华夏紫砂博物馆浙江省杭州市西湖国贸中心622室杭州华夏紫砂博物馆'
                }
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
    .topBar {
        position: relative;
        height: .96rem;
        line-height: .96rem;
        font-size: .32rem;
        overflow: hidden;
        border-bottom: .01rem solid #dfdfdf;
        span {
            display: block;
            padding: 0 .2rem;
            font-size: .32rem;
            color: #303032;
        }
        .cancel-btn {
            float: left;
        }
        .save-btn {
            float: right;
        }
        .top-title {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 7.5rem;
            height: .96rem;
            font-size: .32rem;
            font-weight: bold;
            line-height: .96rem;
            text-align: center;
        }
    }

    .addressEditBox {
        width: 100%;
        padding: .2rem;
        font-size: .28rem;
        div {
            height: 1rem;
            border-bottom: .01rem solid #dfdfdf;
            overflow: hidden;
            span {
                float: left;
                display: inline-block;
                width: 1.3rem;
                height: 1rem;
                line-height: 1rem;
                margin-right: .3rem;
            }
            .inputBox {
                float: left;
                input {
                    border: 0;
                    display: inline-block;
                    height: .8rem;
                    width: 5.5rem;
                    outline: none;
                }
                input:focus {
                    border-bottom: .02rem solid #ff5400;
                }
            }
        }
    }
</style>