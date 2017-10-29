<template>
    <div class="sortBar clearfix">
        <mu-raised-button class="sortType-btn" label="销量" labelPosition="before" icon="arrow_drop_down"
                          rippleColor="#ff5400"/>
        <mu-raised-button class="sortType-btn" label="价格" labelPosition="before" icon="arrow_drop_up"
                          rippleColor="#ff5400"/>
        <!--<div class="sortType-btn sortBySale-btn">-->
        <!--<span>销量<i class="fa fa-chevron-circle-down"></i></span>-->
        <!--</div>-->
        <!--<div class="sortType-btn sortByPrice-btn">-->
        <!--<span>价格<i class="fa fa-chevron-circle-up"></i></span>-->
        <!--</div>-->
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'SortBar',
        components: {},
        data () {
            return {
//                sortType: {
//                    price: {
//                        up: true,
//                        down: false
//                    },
//                    sales: {
//                        up: true,
//                        down: false
//                    }
//                }
            }
        },
        props: ['sortType'],
        methods: {
            toggleSortType(){
                var _self = this;
                _self.sortType.price.up == false;
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

    .sortBar {
        width: 7.5rem;
        height: .6rem;
        font-size: .32rem;
        .sortType-btn {
            float: left;
            width: 3.75rem;
            margin: 0 auto;
            height: 0.6rem;
            line-height: .6rem;
            background-color: #ffffff;
            span {
                color: $activeColor;
                font-size: 0.24rem;
                i {
                    padding: 0.08rem;
                    font-size: 0.2rem;
                }
            }
        }

        .sortBySale-btn {
            text-align: right;
            padding-right: .6rem;
        }

        .sortByPrice-btn {
            text-align: left;
            padding-left: .6rem;
        }

        .choose {
            color: $activeColor;
        }

        .unchoose {
            color: $fontColor;
        }

    }

    .sortBar:hover {
        color: #ff5400;
    }

</style>