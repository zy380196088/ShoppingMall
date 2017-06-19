<template>
    <div class="SearchBar">
        <i class="iconfont icon-search"></i>
        <input class="input-search" type="text" placeholder="请输入商品">
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'SearchBar',
        components: {},
        extends: {},
        data () {
            return {
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
    $fontColor: #2a293b;
    $activeColor: #ff5400;
    $inputBgColor: rgba(245, 245, 247, .8);
    $originalPriceColor: #b6b2b0;
    $bgColor: #f7f5f5;
    $menuBorderColor: #c1bdbc;

    .SearchBar {
        position: fixed;
        top: 0.14rem;
        left: .95rem;
        z-index: 999;
        .icon-search {
            position: fixed;
            left: 2.6rem;
            line-height: .72rem;
            width: .32rem;
            height: 0.32rem;
            font-size: .32rem;
            z-index: 100;
        }

        .input-search {
            display: inline-block;
            width: 5.6rem;
            height: .72rem;
            background-color: $inputBgColor;
            border-radius: .36rem;
            text-align: center;
            font-size: 0.3rem;
            color: $fontColor;
            border: 0;
        }
        input::-webkit-input-placeholder {
        }
    }

</style>