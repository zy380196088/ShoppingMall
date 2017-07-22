<template>
    <div>
        <mu-paper class="menu">
            <mu-bottom-nav :value="bottomNav" @change="handleChange">
                <mu-bottom-nav-item value="Main" to="/" title="主页" icon="home"/>
                <mu-bottom-nav-item value="ShoppingCart" to="/ShoppingCart" title="购物车" icon="shopping_cart"/>
                <mu-bottom-nav-item value="Mine" to="/Mine" title="我的" icon="person"/>
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>
<script>
    export default {
        name: 'BottomNavigation',
        data () {
            return {
                bottomNav: 'main',
                bottomNavColor: 'main'
            }
        },
        methods: {
            handleChange (val) {
                this.bottomNav = val
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .menu {
        position: fixed;
        bottom: 0;
        border-top: 0.01rem solid #ebebeb;
        margin: auto;
        width: 7.5rem;
        height: 1.12rem;
        background-color: #ffffff;
        z-index: 999;
    }
</style>
