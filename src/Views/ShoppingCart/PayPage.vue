<template>
    <div>
        <div id="topSelect" class="clearfix">
            <mu-checkbox label="全选" class="selecctRadio" uncheckIcon="radio_button_unchecked"
                         checkedIcon="radio_button_checked"/>
        </div>
        <mu-menu-item title="收货地址" rightIcon="chevron_right" to="/MyAddress"/>
        <section class="cartList">
            <div class="productItem clearfix " v-for="(item,index) in productList">

                <div class="productSelectBox">
                    <mu-checkbox label="" class="productSelect" uncheckIcon="radio_button_unchecked"
                                 checkedIcon="radio_button_checked" v-model="item.select"/>
                </div>
                <img class="productImg" :src="item.imgUrl" alt="">
                <div class="productInfo">
                    <div class="productTitle">
                        <p class="productTitleText">{{item.title}}</p>
                    </div>
                    <div class="plusSub-btn-box">
                        <input class="buyNumbers" v-model="item.quantity">
                        <mu-float-button icon="remove" mini class="sub-btn" v-on:click="sub(index)"/>
                        <mu-float-button icon="add" mini class="add-btn" v-on:click="add(index)"/>
                    </div>
                    <p class="productPrice">{{item.unitPrice * item.quantity}}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: '',
        props: {}, // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                //
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
</style>