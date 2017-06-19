<template>
    <div class="cartView">
        <div id="topSelect" class="clearfix">
            <mu-checkbox label="全选" class="selecctRadio" uncheckIcon="radio_button_unchecked"
                         checkedIcon="radio_button_checked"/>
        </div>

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

        <div id="totalPrice">
            <span class="totalPriceTag">金额总计 :</span>
            <span class="totalPriceValue">&#165 </span>
            <router-link to="payPage"></router-link><span class="payBtn">结算</span>
        </div>
        <!--<mu-table class="cartView" multiSelectable enableSelectAll fixedHeader fixedFooter selectable showCheckbox-->
        <!--ref="table">-->
        <!--<mu-thead class="cart-header">-->
        <!--<mu-tr>-->
        <!--<mu-th>全选</mu-th>-->
        <!--<mu-th></mu-th>-->
        <!--</mu-tr>-->
        <!--</mu-thead>-->
        <!--<mu-tbody class="cartList clearfix">-->
        <!--<mu-tr v-for="item,index in productList" :key="index" :selected="item.selected" class="productItem">-->
        <!--<mu-td class="img-col">-->
        <!--<img :src="item.imgUrl" alt="" class="productImg">-->
        <!--</mu-td>-->
        <!--<mu-td class="productInfo">-->
        <!--<div class="productTitle">-->
        <!--<p class="productTitleText">{{item.title}}</p>-->
        <!--</div>-->
        <!--<PlusSubButton class="changeNumTool">{{item.count}}</PlusSubButton>-->
        <!--</mu-td>-->
        <!--</mu-tr>-->
        <!--</mu-tbody>-->
        <!--</mu-table>-->
    </div>
</template>
<script>
    export default {
        name: 'CartList',
        components: {
        },
        create(){
            this.getData()
        },
        data(){
            return {
                productList: [
                    {
                        id: '16342',
                        title: '维达抽纸24包家庭装面巾纸卫生纸抽整箱超韧餐巾纸巾',
                        imgUrl: 'https://gd1.alicdn.com/imgextra/i4/1587415772/TB2xkOttbFlpuFjy0FgXXbRBVXa_!!1587415772.jpg',
                        unitPrice: 57.8,
                        quantity: 2,
                        select: false
                    }, {
                        id: '12342',
                        title: 'Joyoung/九阳 DJ13E-Q3 家用全自动破壁无渣豆浆机',
                        imgUrl: 'https://img.alicdn.com/imgextra/i2/415670368/TB2qrayprVkpuFjSspcXXbSMVXa_!!415670368.jpg_430x430q90.jpg',
                        unitPrice: 297,
                        quantity: 1,
                        select: false
                    },
                    {
                        id: '12542',
                        title: '亿健精灵ELF跑步机家用 款多功能电动超静音可折叠健身房减肥正品',
                        imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/TB12fhMRFXXXXXVXFXXXXXXXXXX_!!0-item_pic.jpg_130x130.jpg',
                        unitPrice: 1457,
                        quantity: 1,
                        select: true
                    },
                    {
                        id: '125346342',
                        title: 'Midea/美的 T7-L382B智能电烤箱家用烘焙多功能38升大容量蛋糕',
                        imgUrl: 'https://img.alicdn.com/bao/uploaded/i1/TB1OYTzRXXXXXa1apXXSutbFXXX.jpg_640x480Q60s0.jpg_.webp',
                        unitPrice: 469,
                        quantity: 1,
                        select: true
                    }, {
                        id: '15329',
                        title: 'INNESS英尼斯全实木餐桌椅休闲桌椅组合简约早餐桌隔断吧台',
                        imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/TB1kETIRpXXXXcbapXXXXXXXXXX_!!2-item_pic.png_430x430q90.jpg',
                        unitPrice: 758,
                        quantity: 1,
                        select: false
                    },
                    {
                        id: '12542',
                        link: 'https://detail.tmall.com/item.htm?id=549352025566&ali_refid=a3_430406_1007:13579762:T:3724950661867899228_0_100:937c5a836c8a664274baa0892753a456&ali_trackid=31_937c5a836c8a664274baa0892753a456&spm=a21bo.50862.201874-sales.7.ZfyQK6',
                        title: 'Harbor House Glory 美式全棉贡缎四件套 印花床上用品',
                        imgUrl: 'https://img.alicdn.com/bao/uploaded/i1/TB10kJ_RFXXXXaYXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                        unitPrice: 588.00,
                        quantity: 1,
                        select: false
                    }, {
                        id: '16342',
                        link: 'https://item.taobao.com/item.htm?ft=t&spm=2013.1.20141001.1.rADeZ7&id=528028436514&scm=1007.12144.81309.42296_0&pvid=bb1cfc71-ee6b-4f04-bf1f-c760c1988867',
                        title: '美国原装进口rumbatime手表女正品腕表女石英表',
                        imgUrl: 'https://gd1.alicdn.com/imgextra/i1/74171808/TB29y5NbipnpuFjSZFkXXc4ZpXa_!!74171808.jpg',
                        unitPrice: 288.00,
                        quantity: 1,
                        select: false
                    }
                ]
            }
        },
        methods: {
            getData(){
                $.get('http://rapapi.org/mockjsdata/20862/cart?userID=123', {}, function (res) {
                    console.log("res", res)
                })
            },
            unselect () {
                this.$refs.table.unSelectAll()
            },
            selectAll(){
            },
            delete(index){
                //删除某商品
                var _self = this;
                if (confirm("你确定移除该商品？")) {
                    _self.productList.splice(index, 1)
                }
            },
            empty() {
                //清空购物车
                var _self = this;
                _self.productList.splice(0, _self.productList.length);
            },
            sub(index){
                console.log(index)
                let _self = this;
                if (_self.productList[index].quantity <= 1) {
                    _self.delete(index);
                    console.log("删除该商品")
                } else {
                    _self.productList[index].quantity--;

                }
                console.log("sub", _self.productList[index].quantity)
            },
            add(index){
                console.log(index)
                let _self = this;
                _self.productList[index].quantity++;
                console.log("add", _self.productList[index].quantity)
            },
            computeTotalPrice(){

            }
        },
        computed: {}
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

    .cartView {
        width: 7.5rem;
    }

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
            height: .6rem;
            font-size: .24rem;
            line-height: .6rem;
            color: $fontColor;
        }
    }

    .cartList {
        width: 7.5rem;
        padding-top: 1rem;
        padding-bottom: 1.8rem;
        overflow: hidden;

    }

    #totalPrice {
        position: fixed;
        padding: 0;
        width: 7.5rem;
        bottom: 1.1rem;
        height: 1rem;
        line-height: 1rem;
        font-weight: bold;
        background-color: $totalPriceBgColor;
        z-index: 99;
        .totalPriceTag {
            display: inline-block;
            float: left;
            margin: 0 .2rem;
            width: 1.6rem;
            font-size: .3rem;
            color: $fontColor;
            font-weight: bold;
        }
        .totalPriceValue {
            display: inline-block;
            float: left;
            width: auto;
            font-size: .36rem;
            font-weight: bold;
            color: $activeColor;
        }
        .payBtn {
            display: inline-block;
            float: right;
            width: 1.8rem;
            height: 100%;
            text-align: center;
            font-size: .36rem;
            color: $payBtnTextColor;
            background-color: $activeColor;

        }
    }

    .productItem {
        width: 7.5rem;
        height: 2.6rem;
        margin-top: 0;
        border-bottom: .01rem solid $totalPriceBgColor;
        .productSelectBox {
            float: left;
            width: .48rem;
            height: 2.6rem;
            margin: auto .12rem;
            padding: 1.06rem 0;
            .productSelect {
                display: inline-block;
                vertical-align: middle;
                /*width: .32rem;*/
                /*height: .32rem;*/
            }
        }
        .productImg {
            float: left;
            margin: .3rem .3rem .3rem 0;
            width: 2rem;
            height: 2rem;
        }
        .productInfo {
            float: right;
            width: 4.48rem;
            height: 2.6rem;
            .productTitle {
                padding: .3rem 0 0;
                width: 4.28rem;
                .productTitleText {
                    height: 1.1rem;
                    text-align: left;
                    line-height: .42rem;
                    font-size: .3rem;
                    color: $fontColor;
                }
            }
            .plusSub-btn-box {
                float: left;
                position: relative;
                margin-top: .2rem;
                width: 2rem;
                height: .6rem;
                /*border-radius: .3rem;*/
                /*line-height: .6rem;*/
                /*border: .02rem solid $totalPriceBgColor;*/
                text-align: center;
                .buyNumbers {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 2rem;
                    height: .6rem;
                    border-radius: .3rem;
                    line-height: .6rem;
                    border: .02rem solid $totalPriceBgColor;
                    text-align: center;
                    outline: none;
                }
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

            .productPrice {
                float: right;
                margin-top: .2rem;
                margin-right: .2rem;
                width: 2rem;
                height: .6rem;
                line-height: .6rem;
                text-align: right;
                font-size: .4rem;
                font-weight: bold;
                color: $activeColor;
            }
        }
    }
</style>