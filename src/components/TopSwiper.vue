<template>
    <div class="swiper-container top-swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide" v-for="item in swiperImgList">
                <a href="javascript:void(0)">
                    <img :src="item.imgUrl">
                </a>
            </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination" :class="classpage" v-if="showpage"></div>
        <!-- If we need navigation buttons -->
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import swiper from 'swiper'
    export default{
        name: 'TopSwiper',
        components: {
            swiper
        },
        props: {
            /*数据*/
            list: {
                type: Array,
                required: false
            },
            /*滑动方向，可设置水平(horizontal)或垂直(vertical)*/
            direction: {
                type: String,
                default: 'horizontal'
            },
            /*自动切换*/
            autoplay: {
                type: Number,
                default: 3000
            },
            /*滑动速度*/
            speed: {
                type: Number,
                default: 600
            },
            /*循环切换*/
            loop: {
                type: Boolean,
                default: true
            },
            /*重新启动autoplay,默认为false：启动*/
            autoplayDisableOnInteraction: {
                type: Boolean,
                default: false
            },
            /*显示分页容器*/
            showpage: {
                type: Boolean,
                default: true
            },
            /*分页样式*/
            classpage: String,
            /*高度*/
            height: {
                type: String,
                default: "3.6rem"
            },
        },
        create(){
            this.renderSwiper();
        },
        data () {
            return {
                swiperImgList: [
                    {imgUrl: "https://img.alicdn.com/tps/TB104MlMVXXXXaZXpXXXXXXXXXX-570-400.jpg"},
                    {imgUrl: "https://img.alicdn.com/tps/TB1oHwXMVXXXXXnXVXXXXXXXXXX-570-400.jpg"},
                    {imgUrl: "https://img.alicdn.com/tps/i4/TB1VGZBJXXXXXX3aXXXCtjtIVXX-570-400.jpg"}
                ]
            }
        },
        methods: {
            /*渲染swiper组件*/
            renderSwiper(){
                let _this = this;
                _this.swiper = new Swiper('.top-swiper', {
                    direction: _this.direction,
                    autoplay: _this.autoplay,
                    speed: _this.speed,
                    loop: _this.loop,
                    autoplayDisableOnInteraction: _this.autoplayDisableOnInteraction,
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                })
            }
        },
        watch: {
            list: function (val) {
                this.renderSwiper();
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .top-swiper {
        width: 7.5rem;
        height: 3.6rem;
        .swiper-wrapper {
            width: 7.5rem;
            height: 3.6rem;
        }
        .swiper-slide {
            text-align: center;
            background: #fff;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            background: center no-repeat;
            background-size: cover;

            a {
                display: block;
            }
            img {
                width: 100%;
                height: 3.6rem;
            }
        }
    }


</style>