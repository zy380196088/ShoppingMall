<template>
    <div id="topSelect" class="clearfix">
        <mu-checkbox label='' class="selecctRadio" uncheckIcon="radio_button_unchecked"
                     checkedIcon="radio_button_checked"/>
        <span class="checkLabel">{{labelText}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'TopCheckbox',
        props: [
            'labelText'
        ], // 父到子传参
        components: {}, // 组件接收
        data () { // 基础数据
            return {
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
    $fontColor: #2a293b;
    $activeColor: #ff5400;
    $inputBgColor: rgba(245, 245, 247, .8);
    $originalPriceColor: #b6b2b0;
    $bgColor: #f7f5f5;
    $menuBorderColor: #c1bdbc;
    $cartListBgColor: #f7f5d5;
    $totalPriceBgColor: #ebebeb;
    $payBtnTextColor: #fefefe;
    $radioBorderColor: #c0c0c0;

    #topSelect {
        position: fixed;
        top: 0;
        left: 0;
        width: 7.5rem;
        height: 1rem;
        color: $fontColor;
        background-color: $totalPriceBgColor;
        border-bottom: 1px solid $totalPriceBgColor;
        z-index: 99;
        .selecctRadio {
            float: left;
            display: block;
            width: auto;
            height: .32rem;
            margin: .24rem .2rem;
            border: 0;
            font-size: .24rem;
        }
        span {
            float: left;
            display: inline-block;
            height: 1rem;
            font-size: .24rem;
            line-height: 1rem;
            color: $fontColor;
        }
    }
</style>