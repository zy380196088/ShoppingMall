<template>
    <div class="plusSub-btn-box">
        <span class="buyNumbers" v-text="number"></span>
        <mu-float-button icon="remove" mini class="sub-btn" @onclick="sub()"/>
        <mu-float-button icon="add" mini class="add-btn" @onclicknp="add()"/>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'PlusSubButton',
        components: {},
        data () {
            return {
                number: 1
            }
        },
        //组件属性
        //在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。
        props: {},
        methods: {
            sub(){
                let _self = this;
                _self.number--;
                console.log("sub", _self.number)
            },
            add(){
                let _self = this;
                _self.number++;
                console.log("add", _self.number)
            }
        },
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
    $cartListBgColor: #f7f5d5;
    $totalPriceBgColor: #ebebeb;
    $payBtnTextColor: #fefefe;
    $radioBorderColor: #c0c0c0;

    .plusSub-btn-box {
        margin-top: .2rem;
        width: 2rem;
        height: .6rem;
        border-radius: .3rem;
        line-height: .6rem;
        border: .02rem solid $totalPriceBgColor;
        text-align: center;
        .sub-btn, .add-btn {
            margin: .06rem;
            width: .44rem;
            height: .44rem;
        }
        .sub-btn {
            float: left;
        }
        .add-btn {
            float: right;
        }
    }
</style>