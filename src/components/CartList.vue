<template>
    <div class="cartView" v-cloak>
        <TopCheckbox :labelText="cartData.labelText"></TopCheckbox>

        <section class="cartList">
            <div class="productItem clearfix " v-for="(item,index) in cartData.productList">

                <div class="productSelectBox">
                    <mu-checkbox label="" nativeValue="item.id" class="productSelect"
                                 uncheckIcon="radio_button_unchecked"
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
                    <p class="productPrice">{{item.unitPrice * item.quantity | money}}</p>
                </div>
            </div>
        </section>

        <div id="totalPrice">
            <span class="totalPriceTag">金额总计 :</span>
            <span class="totalPriceValue"> {{cartData.totalPrice | money}} </span>
            <router-link to="/payPage"><span class="payBtn">结算</span></router-link>
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
<script type="text/ecmascript-6">
    import TopCheckbox from '../components/TopCheckbox.vue'
    import axios from 'axios'
    export default {
        name: 'CartList',
        props: ['cartData'],
        components: {
            TopCheckbox
        },
        mounted: function () {
            this.getGoodsList();
        },
        create(){
            this.getData()
        },
        data(){
            return {
                goodsList: []
            }
        },
        methods: {
            getGoodsList(){
                axios.get("/goods").then((res) => {
                    console.log(res);
                this.goodsList = res.result;
            })
            },
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
                    _self.cartData.productList.splice(index, 1)
                }
            },
            empty() {
                //清空购物车
                var _self = this;
                _self.cartData.productList.splice(0, _self.cartData.productList.length);
            },
            sub(index){
                console.log(index)
                let _self = this;
                console.log(this.cartData.productList)
                if (_self.cartData.productList[index].quantity <= 1) {
                    _self.delete(index);
                    console.log("删除该商品")
                } else {
                    _self.cartData.productList[index].quantity--;

                }
                console.log("sub", _self.productList[index].quantity)
            },
            add(index){
                console.log(index)
                let _self = this;
                _self.cartData.productList[index].quantity++;
                console.log("add", _self.cartData.productList[index].quantity)
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
        padding-bottom: 2.12rem;
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