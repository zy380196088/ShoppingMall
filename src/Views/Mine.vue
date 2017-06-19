<template>
    <div id="userCenterPage">
        <header class="userInfo clearfix">
            <p class="qrCoder-Btn clearfix" v-on:click="openQRcode">
                <i class="qrCoder-icon"></i>
                <span>二维码</span>
            </p>
            <img class="userAvatar" :src="userInfo.userAvatar" alt="">
            <p class="userName">{{userInfo.userName}}</p>
            <a :href="userInfo.agencyURL"><p class="beRetail-Btn">成为分销商</p></a>
        </header>
        <mu-paper v-show="showQR" class="QRshowMask">
            <section class="QRDialog">
                <mu-icon-button class="hideQR-btn" icon="close_black" size=".32rem" v-on:click="closeQRcode"/>
                <header class="Dialog-Title">{{userInfo.userName}}的二维码</header>
                <img :src="userInfo.QRImgUrl" alt="" class="QRImg">
            </section>
        </mu-paper>
        <mu-menu width="7rem">
            <div class="mineItemTitle">
                <i class="icon-order"></i>
                <mu-menu-item title="我的订单" rightIcon="chevron_right" afterText="查看更多订单" to="/MyOrder"/>
            </div>
            <div class="orderInfoBox clearfix">
                <div class="orderState" id="waitForPay">
                    <p>待付款</p>
                </div>
                <div class="orderState" id="waitForDeliver">
                    <p>待发货</p>
                </div>
                <div class="orderState" id="waitForHarvest">
                    <p>待收货</p>
                </div>
            </div>

            <div class="mineItemTitle clearfix">
                <i class="icon-fee material-icons"></i>
                <mu-menu-item title="我的佣金" rightIcon="chevron_right" to="/MyFee"/>
                <i class="icon-go"></i>
            </div>
            <div class="mineItemTitle clearfix">
                <i class="icon-menber"></i>
                <mu-menu-item title="我的会员" rightIcon="chevron_right" to="/MyMember"/>
                <i class="icon-go"></i>
            </div>
            <div class="mineItemTitle clearfix">
                <i class="icon-address"></i>
                <mu-menu-item title="收货地址" rightIcon="chevron_right" to="/MyAddress"/>
                <i class="icon-go"></i>
            </div>
        </mu-menu>
    </div>
</template>

<script type="text/ecmascript-6">
    import BottomNavigation from '../components/BottomNavigation.vue'
    import CheckBox from '../components/CheckBox.vue'
    export default{
        name: 'Mine',
        components: {
            BottomNavigation, CheckBox
        },
        extends: {},
        data () {
            return {
                userInfo: {
                    userAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3625142282,583054845&fm=26&gp=0.jpg',
                    userName: 'Hello',
                    QRImgUrl: 'http://qr.api.cli.im/qr?data=http%253A%252F%252F192.168.1.104%253A9888%252F%2523&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=8a250acbdabbec8b38f987692084c219',
                    agencyURL:'http://baidu.com'
                },
                oderInfo: {
                    waitForPay:2,
                    waitForDeliver:4,
                    waitForHarvest:2
                },
                menber:'',
                fee: "523",
                address: [],
                showQR: 0
            }
        },
        props: {},
        methods: {
            openQRcode(){
                this.showQR = true;
                console.log("showQR")
            },
            closeQRcode(){
                this.showQR = false;
                console.log("hideQR")
            }
        },
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
    $cartListBgColor: #f7f5d5;
    $totalPriceBgColor: #ebebeb;
    $payBtnTextColor: #fefefe;
    $radioBorderColor: #c0c0c0;

    #userCenterPage {
        width: 7.5rem;
        height: 12.06rem;
        .mineItemTitle {
            width: 7.5rem;
            height: 1rem;
            line-height: 1rem;
            font-size: .32rem;
            color: $fontColor;
            padding: 0;
            border-top: 0.01rem solid #ebebeb;
            i:nth-child(1) {
                float: left;
                display: inline-block;
                width: .36rem;
                height: .36rem;
                margin: .28rem 0 .28rem .28rem;
            }
            .icon-order {
                background: url("../assets/img/icons/mine_icon_Oder@2x.png") center no-repeat;
                background-size: .36rem .36rem;
            }
            .icon-fee {
                background: url("../assets/img/icons/mine_icon_fee@2x.png") center no-repeat;
                background-size: .36rem .36rem;
            }
            .icon-menber {
                background: url("../assets/img/icons/mine_icon_member@2x.png") center no-repeat;
                background-size: .36rem .36rem;
            }
            .icon-address {
                background: url("../assets/img/icons/mine_icon_address@2x.png") center no-repeat;
                background-size: .36rem .36rem;
            }
            .icon-go {
                background: url("../assets/img/icons/mine_icon_address@2x.png") center no-repeat;
                background-size: .36rem .36rem;
            }
        }
    }

    .orderInfoBox {
        width: 7.5rem;
        height: 2rem;
        overflow: hidden;
        .orderState {
            float: left;
            width: 2.5rem;
            height: .8rem;
            margin: .2rem 0 .3rem 0;
            padding: 0;
            p {
                margin-top: .96rem;
                width: 100%;
                height: .28rem;
                font-size: .28rem;
                text-align: center;
            }
        }
        .orderState:nth-child(1) {
            background: url("../assets/img/icons/mine_btn_pay@2x.png") center no-repeat;
            background-size: .8rem .8rem;
        }
        .orderState:nth-child(2) {
            background: url("../assets/img/icons/mine_btn_deliver@2x.png") center no-repeat;
            background-size: .8rem .8rem;
        }
        .orderState:nth-child(3) {
            background: url("../assets/img/icons/mine_btn_harvest@2x.png") center no-repeat;
            background-size: .8rem .8rem;
        }
    }

    .userInfo {
        width: 7.5rem;
        height: 3.6rem;
        background: url("../assets/img/mine_bg@2x.png") no-repeat;
        background-size: cover;
        .qrCoder-Btn {
            margin-left: 5.5rem;
            margin-top: .3rem;
            width: 2rem;
            height: .64rem;
            border-radius: .32rem 0 0 .32rem;
            background-color: #f9e9e4;
            i {
                float: left;
                display: inline-block;
                margin: .16rem 0 .16rem .32rem;
                width: .32rem;
                height: .32rem;
                background: url("../assets/img/icons/mine_icon_code@2x.png") center no-repeat;
                background-size: .32rem .32rem;
            }
            span {
                float: left;
                display: inline-block;
                padding-left: .1rem;
                line-height: .64rem;
                font-size: .3rem;
                color: $activeColor;
                font-weight: bold;
            }

        }
        .userAvatar {
            margin: 0 3.15rem;
            width: 1.2rem;
            height: 1.2rem;
            border-radius: .6rem;
            border: .01rem solid $menuBorderColor;
        }
        .userName {
            width: 7.5rem;
            text-align: center;
            line-height: .4rem;
            height: .4rem;
            font-size: .4rem;
            color: #fff;
        }
        .beRetail-Btn {
            margin: .2rem 2.83rem;
            width: 1.84rem;
            height: .5rem;
            line-height: .5rem;
            font-size: .24rem;
            color: #fff;
            text-align: center;
            border: .01rem solid #fff;
            border-radius: .25rem;
        }
    }

    .QRshowMask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .3);
        z-index: 99;
        .QRDialog {
            position: relative;
            margin: 2.8rem auto;
            width: 5.6rem;
            height: 6.28rem;
            background-color: #fff;
            border-radius: .2rem;
            overflow: hidden;
            .hideQR-btn {
                position: absolute;
                right: 0;
                top: 0;
            }
            .Dialog-Title {
                margin-top: .84rem;
                margin-bottom: .6rem;
                text-align: center;
                font-size: .36rem;
                font-weight: bold;
                color: #2a293b;
            }
            .QRImg {
                margin: 0  1.05rem;
                width: 3.5rem;
                height: 3.5rem;
                /*border: .01rem solid sandybrown;*/
            }
        }
    }

</style>