<template>
    <ul class="BottomNav">
        <li>
            <router-link to="/">
                <i class="menu-icon"></i>
                <p>首页</p>
            </router-link>
        </li>
        <li>
            <router-link to="/ShppingCart">
                <i class="menu-icon"></i>
                <p>购物</p>
            </router-link>
        </li>
        <li>
            <router-link to="/Mine">
                <i class="menu-icon"></i>
                <p>我的</p>
            </router-link>
        </li>
    </ul>
</template>

<script type="text/ecmascript-6">

    export default{
        name: 'BottomNav',
        components: {},
        extends: {},
        data () {
            return {}
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

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    $fontColor: #2a293b;
    $activeColor: #ff5400;
    $inputBgColor: rgba(245, 245, 247, .8);
    $originalPriceColor: #b6b2b0;
    $bgColor: #f7f5f5;
    $menuBorderColor: #c1bdbc;

    .BottomNav {
        position: fixed;
        bottom: 0;
        margin: 0 auto;
        width: 7.5rem;
        height: .98rem;
        border-top: 0.01rem solid $menuBorderColor;
        border-bottom: 0.01rem solid $menuBorderColor;
        background-color: $bgColor;
        display: block;
        float: left;
        text-align: center;
        li {
            float: left;
            width: 2.5rem;
            height: 100%;
            padding: .1rem 0;
            a {
                display: block;
                margin-top: .4rem;
                height: .2rem;
                text-align: center;
                color: $fontColor;
                font-size: .2rem;
            }
            .menu-icon {
                display: block;
                position: absolute;
                top: 0;
                left: 1rem;
                padding: 0;
                width: .48rem;
                height: .48rem;
                background-size: 1.38rem .96rem;
            }
            p {
                display: block;
                width: 100%;
                height: .2rem;
                font-size: .2rem;
                color: $menuBorderColor;
                text-align: center;
            }
        }
        .menu-icon:nth-child(1) {
        }

    }


</style>