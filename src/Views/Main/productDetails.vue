<template>
    <div>
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
                productDetails:{
                    imgSrc: "https://g-search2.alicdn.com/img/bao/uploaded/i4/TB1MutnMXXXXXaWaXXXXXXXXXXX.jpg_360x360Q90.jpg_.webp",
                    productTitle: "高级订制羊皮粗跟高跟撞色鞋",
                    originalPrice: "455",
                    VIPPrice: "200"
                }
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