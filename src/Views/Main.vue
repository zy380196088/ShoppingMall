<template>
    <div>
        <SearchBar></SearchBar>
        <TopSwiper></TopSwiper>
        <SortBar></SortBar>
        <TodaySeckill></TodaySeckill>
        <ProductList></ProductList>
        <div class="MainPageBottom"></div>
    </div>

</template>

<script type="text/ecmascript-6">
    import CheckBox from '../components/CheckBox.vue'
    import SearchBar from '../components/SearchBar.vue'
    import TopSwiper from '../components/TopSwiper.vue'
    import ProductList from '../components/ProductList.vue'
    import SortBar from '../components/SortBar.vue'
    import TodaySeckill from '../Views/Main/TodaySeckill.vue'
    export default{
        name: 'Main',
        extends: {},
        data () {
            return {
                isflag: false,   //用于tab切换的最后一个标识
                scroll: true,    //用于判断是否滚动
                activeIndex: 0,      //用于默认active样式
                page: 1,      //当前页数
                mark: {up: false, down: false},  //用于判断价格升降序
                tablist: [{title: "默认", key: '1'}, {title: "销量", key: '2'}, {title: "上新", key: '3'}, {
                    title: "价格",
                    key: '4'
                }],  //tab数据
                productList: [
                    {
                        imgSrc: "http://img.hb.aicdn.com/5c13cc09f642fd1b444a3db9cae4df73804e1563158ae-ThPIQf_fw658",
                        productTitle: "高级订制羊皮粗跟高跟撞色鞋",
                        originalPrice: "455",
                        VIPPrice: "200"
                    },
                    {
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
                goodList:[],
                loading: true
            }
        },
        route() {
            let self = this;
            self.imgSwiper();
        },
        created(){
            $.get('http://jspang.com/DemoApi/oftenGoods.php')
                    .then(response=>{
                        console.log(response);
                        this.goodList=response.data;
                    })
                    .catch(error=>{
                        console.log(error);
                        alert('网络错误，不能访问');
                    })
        },
        props: {},
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
            TopSwiper,
            ProductList,
            SortBar,
            TodaySeckill,
        }

    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.MainPageBottom{
    width: 100%;
    height: 1rem;
}
</style>