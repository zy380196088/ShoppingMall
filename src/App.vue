<template>
    <div id="app">
        <transition class="Container" name="fade">
            <router-view></router-view>
        </transition>
        <div class="BottomNav">
            <BottomNavigation></BottomNavigation>
        </div>
    </div>
</template>

<script>
    import BottomNavigation from './components/BottomNavigation.vue'
    export default {
        name: 'app',
        components: {
            BottomNavigation
        },
        data() {
            return {
                pageModel: {
                    page: 1,
                    count: 5,
                    total: 100
                },
                isLogin: true
            }
        }
    }
</script>

<style>

    html, body {
        font-family: Helvetica;
        width: 100%;
        height: 100%;
    }

    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
        src: local('Material Icons'),
        local('MaterialIcons-Regular'),
        url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
        url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
        url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px; /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;

        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;

        /* Support for IE. */
        font-feature-settings: 'liga';
    }

    #app {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    a, button, input {
        -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
    }
    *:focus {outline: none;}

    .clearfix {
        clear: both;
        overflow: hidden;
    }

    .clearfix:after {
        content: " ";
        display: block;
        clear: both;
        height: 0;
    }

    .clearfix {
        zoom: 1;
    }

    .BottomNav{
        position: fixed;
        bottom: 0;
        width: 7.5rem;
        height: 1.12rem;
    }
</style>
