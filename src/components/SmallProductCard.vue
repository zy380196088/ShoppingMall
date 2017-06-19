<template>
    <div>
        <a :href="item.link" v-for="item in dataList">
            <figure class="figure-sm">
                <div class="product-Img">
                    <div class="seckillTap"></div>
                    <img :src="item.imgSrc" alt="">
                </div>
                <figcaption class="product-Title">{{item.productTitle}}</figcaption>
                <div class="price-Box">
                    <p class="price-Text">
                        <s class="originalPrice-Text">{{item.originalPrice}}</s>
                        <span class="vipPrice-Text">会员价</span>
                    </p>
                    <p class="price-Value">&#165{{item.VIPPrice}}</p>
                </div>
            </figure>
        </a>
    </div>

</template>

<script type="text/ecmascript-6">
    export default{
        name: '',
        components: {},
        extends: {},
        data () {
            return {
                dataList: [
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a230r.1.14.11.e5uP2J&id=528640170133&cm_id=140105335569ed55e27b&abbucket=14&sku_properties=5919063:6536025',
                        imgSrc: "https://g-search2.alicdn.com/img/bao/uploaded/i4/TB1MutnMXXXXXaWaXXXXXXXXXXX.jpg_360x360Q90.jpg_.webp",
                        productTitle: "高级订制羊皮粗跟高跟撞色鞋",
                        originalPrice: "455",
                        VIPPrice: "200"
                    },
                    {
                        link: 'https://daigou.taobao.com/item.htm?spm=5418.7905509.2.37.VgyEn4&id=2942676',
                        imgSrc: "https://gw.alicdn.com/tfscom/TB1WmfURXXXXXbpaFXXXXXXXXXX_120x120q90",
                        productTitle: "Christian Louboutin萝卜丁红底鞋限量三支唇膏口红礼盒",
                        originalPrice: "5980",
                        VIPPrice: "1877.4"
                    }, {
                        link: 'https://item.taobao.com/item.htm?spm=5704.113171.565426.12.ibzBq2&&id=550728305335',
                        imgSrc: "https://gd2.alicdn.com/imgextra/i4/838749286/TB2hZPbsipnpuFjSZFkXXc4ZpXa_!!838749286.jpg_400x400.jpg",
                        productTitle: "欧式实拍刺绣贡缎美式床上用品全棉四件套1.8m纯棉被套",
                        originalPrice: "1230",
                        VIPPrice: "1180"
                    }
                ]
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

    .figure-sm {
        float: left;
        margin: .2rem .1rem;
        width: 2.24rem;
        height: auto;
        .product-Img {
            position: relative;
            width: 2.24rem;
            height: 2.24rem;
            img {
                width: 2.24rem;
                height: 2.24rem;
                border: 0;
                //background-color: #007aff;
            }
            .seckillTap {
                position: absolute;
                top: 0;
                right: 0;
                width: .88rem;
                height: .88rem;
                background: url("../assets/img/icons/home_icon_jinrimiaosha@2x.png") center no-repeat;
                background-size: .88rem .88rem;
                z-index: 3;
            }
        }

        .product-Title {
            margin: .2rem 0;
            width: 2.24rem;
            height: .8rem;
            line-height: .4rem;
            font-size: .24rem;
            color: $fontColor;
            text-align: left;
            overflow: hidden;
        }
        .price-Box {
            width: 100%;
            overflow: hidden;
            height: .8rem;
            .price-Text {
                float: left;
                margin: 0;
                width: 1rem;
                height: .8rem;
                font-size: .2rem;
                font-weight: normal;
                line-height: .4rem;
                overflow: hidden;
                .originalPrice-Text {
                    display: block;
                    height: .4rem;
                    color: $originalPriceColor;
                }
                .vipPrice-Text {
                    display: block;
                    height: .4rem;
                    font-size: .16rem;
                    color: $activeColor;
                }
            }
            .price-Value {
                float: right;
                margin: .1rem 0;
                width: 1.2rem;
                height: .6rem;
                line-height: .6rem;
                font-size: .3rem;
                text-align: center;
                border-radius: .08rem;
                color: $activeColor;
                border: 0.01rem solid $activeColor;
            }
        }
    }
</style>