<template>
    <div class="MainShowPage clearfix">
        <SearchBar></SearchBar>
        <TopSwiper></TopSwiper>
        <SortBar :sortType="sortType"></SortBar>
        <SmallProductCard :top-seckill="topSeckill"></SmallProductCard>
        <ProductList></ProductList>
        <div class="MainPageBottom"></div>
        <div class="ProductDetails">

        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    import CheckBox from '../components/CheckBox.vue'
    import SearchBar from '../components/SearchBar.vue'
    import TopSwiper from '../components/TopSwiper.vue'
    import ProductList from '../components/ProductList.vue'
    import SortBar from '../components/SortBar.vue'
    import SmallProductCard from '../components/SmallProductCard.vue'
    export default{
        name: 'Main',
        data () {
            return {
                isflag: false,   //用于tab切换的最后一个标识
                scroll: true,    //用于判断是否滚动
                activeIndex: 0,      //用于默认active样式
                page: 1,      //当前页数
                sortType: {
                    price: {
                        up: true,
                        down: false
                    },
                    sales: {
                        up: true,
                        down: false
                    }
                },
                topSeckill: [
                    {
                        id:'1232',
                        link: 'https://detail.tmall.com/item.htm?spm=a230r.1.14.11.e5uP2J&id=528640170133&cm_id=140105335569ed55e27b&abbucket=14&sku_properties=5919063:6536025',
                        imgSrc: "https://g-search2.alicdn.com/img/bao/uploaded/i4/TB1MutnMXXXXXaWaXXXXXXXXXXX.jpg_360x360Q90.jpg_.webp",
                        productTitle: "高级订制羊皮粗跟高跟撞色鞋",
                        originalPrice: "455",
                        VIPPrice: "200"
                    },
                    {
                        id: '16342',
                        link: 'https://daigou.taobao.com/item.htm?spm=5418.7905509.2.37.VgyEn4&id=2942676',
                        imgSrc: "https://gw.alicdn.com/tfscom/TB1WmfURXXXXXbpaFXXXXXXXXXX_120x120q90",
                        productTitle: "Christian Louboutin萝卜丁红底鞋限量三支唇膏口红礼盒",
                        originalPrice: "5980",
                        VIPPrice: "1877.4"
                    }, {
                        id: '16342',
                        link: 'https://item.taobao.com/item.htm?spm=5704.113171.565426.12.ibzBq2&&id=550728305335',
                        imgSrc: "https://gd2.alicdn.com/imgextra/i4/838749286/TB2hZPbsipnpuFjSZFkXXc4ZpXa_!!838749286.jpg_400x400.jpg",
                        productTitle: "欧式实拍刺绣贡缎美式床上用品全棉四件套1.8m纯棉被套",
                        originalPrice: "1230",
                        VIPPrice: "1180"
                    }
                ],
                productList: [
                    {
                        id: '16342',
                        imgSrc: "http://img.hb.aicdn.com/5c13cc09f642fd1b444a3db9cae4df73804e1563158ae-ThPIQf_fw658",
                        productTitle: "高级订制羊皮粗跟高跟撞色鞋",
                        originalPrice: "455",
                        VIPPrice: "200"
                    },
                    {
                        id: '16342',
                        imgSrc: "http://img.hb.aicdn.com/5c13cc09f642fd1b444a3db9cae4df73804e1563158ae-ThPIQf_fw658",
                        productTitle: "高级订制羊皮粗跟高跟撞色鞋",
                        originalPrice: "455",
                        VIPPrice: "200"
                    }
                ],     //列表数据
                swiperImgList: [
                    {
                        "url": "https://kenshinsyrup.github.io/public/img/skyrim.jpg"
                    },
                    {
                        "url": "https://img.alicdn.com/tps/TB104MlMVXXXXaZXpXXXXXXXXXX-570-400.jpg"
                    },
                    {
                        "url": "http://img.hb.aicdn.com/2a26e33abe9ad5cfaed5340e3ac239a401fbd79d67597-2eyKmr_fw658"
                    }
                ],     //轮播数据
                globalModal: {},     //自定义弹层
                goodList: [],
                loading: true
            }
        },
        route() {
            let self = this;
            self.imgSwiper();
        },
        beforeCreate(){
            this.$nextTick(function () {
                this.$http.get('http://jspang.com/DemoApi/oftenGoods.php',{}).then(function (res) {
                    console.log(res)
                })
            })
        },
        created(){
//            $.get('http://jspang.com/DemoApi/oftenGoods.php')
//                    .then(response=> {
//                        console.log(response);
//                        this.goodList = response.data;
//                    })
//                    .catch(error=> {
//                        console.log(error);
//                        alert('网络错误，不能访问');
//                    })
        },
        methods: {
//            请求数据
            getAjaxData(){
            },
//            滚动加载数据
            getScrollData(){
            },
//            列表排序
            sortType(){
            },
//            轮播广告
            imgSwiper(){
                let self = this;
                self.$nextTick(() => {
                    self.$set('imglist', imgdata.list);
                });
            }
        },
        mounted () {
        },
        computed: {},
        watch: {},
        components: {
            CheckBox,
            SearchBar,
            SortBar,
            TopSwiper,
            ProductList,
            SmallProductCard
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .MainShowPage{
        width: 7.5rem;
        height: auto
    ;
    }
    .MainPageBottom {
        width: 100%;
        height: 1rem;
    }
</style>