<template>
    <div class="checkBoxs">
        <mu-checkbox name="group" nativeValue="checkbox1" v-model="list" label="" class="product-checkbox"/>
        <br/>
        <mu-checkbox name="group" nativeValue="checkbox2" v-model="list" label="" class="product-checkbox"/>
        <br/>
        <mu-checkbox name="group" nativeValue="checkbox3" v-model="list" label="" class="product-checkbox"/>
        <br/>
        <div class="product-checkbox">
            你选择的是：{{list}}
        </div>
        <mu-checkbox :label="single ? 'true' : 'false'" v-model="single"/>
    </div>
</template>


<script type="text/ecmascript-6">
    export default{
        name: 'CheckBox',
        components: {},
        extends: {},
        data () {
            return {
                list: [],
                single: false
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
    .checkBoxs{
        padding-top: 1rem;
        width: 7.5rem;
        height: 5rem;
    }
</style>