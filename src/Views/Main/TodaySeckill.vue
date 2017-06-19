<template>
    <div class="todaySeckill">
        <SmallProductCard></SmallProductCard>
    </div>

</template>

<script type="text/ecmascript-6">
    import SmallProductCard from '../../components/SmallProductCard.vue'
    export default{
        name: 'TodaySeckill',
        components: {
            SmallProductCard
        },
        extends: {},
        data () {
            return {}
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

    .todaySeckill{
        width: 7.5rem;
    }
</style>