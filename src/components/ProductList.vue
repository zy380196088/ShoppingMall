<template>
    <div class="clearfix">
        <a :href="item.link" v-for="item in data">
            <figure class="figure-lg " >
                <div class="product-Img-lg">
                    <img :src="item.imgSrc" alt="">
                </div>
                <figcaption class="product-Title-lg">{{item.productTitle}}</figcaption>
                <div class="price-Box-lg">
                    <span class="vipPrice-Text-lg">会员价</span>
                    <span class="price-Value-lg">&#165{{item.VIPPrice}}</span>
                    <s class="originalPrice-Text-lg">{{item.originalPrice}}</s>
                </div>
            </figure>
        </a>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'ProductList',
        components: {},
        extends: {},
        data () {
            return {
                data: [
                    {
                        link:"https://item.taobao.com/item.htm?spm=a217i.7269965.1998349987.23.xPtaq4&scm=1007.11266.15715.100200300000000&pvid=93cacd7a-a0e1-4b74-b213-008ee6cede3b&id=39944855436",
                        imgSrc: "https://gd3.alicdn.com/imgextra/i4/274286644/TB2_FXhjXXXXXaPXpXXXXXXXXXX_!!274286644.jpg",
                        productTitle: "雅漾喷雾300ml正品代购香港爽肤水大舒护活泉水清爽保湿补水avene",
                        originalPrice: "200",
                        VIPPrice: "150.00"
                    }, {
                        link:"https://item.taobao.com/item.htm?spm=5704.147556.763803.3.QAiMXq&scm=1007.12144.81309.43812_0&pvid=6041cf43-1198-4ad2-b7af-e8946912f25b&id=525890246079",
                        imgSrc: "https://gd4.alicdn.com/imgextra/i2/60721786/TB2RA0_bBLzQeBjSZFDXXc5MXXa_!!60721786.jpg_400x400.jpg",
                        productTitle: "纯实木橡木黑胡桃 北欧原创气质八斗柜抽屉柜",
                        originalPrice: "5990",
                        VIPPrice: "3990"
                    }, {
                        link:"https://item.taobao.com/item.htm?spm=5704.147556.763805.8.QAiMXq&id=538900035058&scene=ta",
                        imgSrc: "https://gd1.alicdn.com/imgextra/i2/63125253/TB2doigxbBmpuFjSZFuXXaG_XXa_!!63125253.jpg",
                        productTitle: " 理想家卫浴智能防雾浴室柜组合简约现代洗脸手盆柜组合灯镜洗漱台",
                        originalPrice: "5990",
                        VIPPrice: "3868.80"
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

    .figure-lg {
        margin: .2rem 0;
        float: left;
        width: 7.5rem;
        height: 5rem;
        .product-Img-lg {
            position: relative;
            width: 7.5rem;
            height: 3.6rem;
            img {
                width: 100%;
                height: 3.6rem;
                border: 0;
                //background-color: #007aff;
            }
        }
        .product-Title-lg {
            margin: .2rem;
            width: 7.1rem;
            height: .56rem;
            line-height: .56rem;
            font-size: .32rem;
            color: $fontColor;
            text-align: left;
            overflow: hidden;
        }
        .price-Box-lg {
            padding-left: .2rem;
            width: 7.5rem;
            height: .5rem;
            font-size: .3rem;
            font-weight: normal;
            line-height: .5rem;
            overflow: hidden;
            text-align: left;
            .originalPrice-Text-lg {
                padding-left: .1rem;
                display: inline-block;
                color: $originalPriceColor;
                text-align: left;
            }
            .vipPrice-Text-lg {
                display: inline-block;
                color: $activeColor;
                padding-right: .1rem;
            }
            .price-Value-lg {
                display: inline-block;
                width: 1.4rem;
                height: .5rem;
                line-height: .5rem;
                font-size: .3rem;
                text-align: center;
                border-radius: .08rem;
                color: $activeColor;
                border: 0.01rem solid $activeColor;
            }
        }
    }

</style>