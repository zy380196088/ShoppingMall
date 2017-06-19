<template>
    <div class="myMember-Page">
        <div class="header">
            <mu-icon-button icon="chevron_left" to="/Mine"></mu-icon-button>
        </div>
        <section class="showBox">
            <div class="Box showMembersBox">
                <p class="Icon Icon1"></p>
                <p class="Value">22</p>
                <p class="Text">直系会员数</p>
            </div>
            <div class="Box showAgencyBox">
                <p class="Icon Icon2"></p>
                <p class="Value">22</p>
                <p class="Text">直系分销商</p>
            </div>
        </section>
        <section>
            <div class="introductionText">
                <p class="words">
                    扫描你的二维码后,成为轩记的用户即为你的直系会员,你的直系会员购买商品消耗金额时,你可以获得相应提成.当你的会员也有自己的会员时,他就成为了直系分销商.
                </p>
                <p class="btn">成为分销商</p>
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'MyMember',
        props: {}, // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                //
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
    .myMember-Page {
        width: 7.5rem;
        height: 100%;
        background: url("../../assets/img/member/member_bg@2x.png") center no-repeat;
        background-size: cover;
        .header {
            width: 7.5rem;
            height: 1.3rem;
        }
        .showBox {
            display: flex;
            width: 7.5rem;
            height: 5rem;
            margin-bottom: .6rem;
        }
        .Box {
            flex: 2;
            float: left;
            width: 3rem;
            height: 4.6rem;
            background-color: #fff;
            border-radius: .16rem;
            text-align: center;
            padding: 1rem 0;
            box-shadow: .05rem .05rem .8rem 0.05rem rgba(0, 0, 0, 0.2);
            .Icon {
                width: .4rem;
                height: .4rem;
                margin: 0 auto;
            }
            .Icon1 {
                background: url("../../assets/img/icons/member_icon_number@2x.png");
                background-size: cover;
            }
            .Icon2 {
                background: url("../../assets/img/icons/member_icon_merchant@2x.png");
                background-size: cover;
            }
            .Value {
                margin-top: .2rem;
                height: .8rem;
                line-height: .8rem;
                font-size: .8rem;
                font-weight: bold;
            }
            .Text {
                margin-top: .8rem;
                font-size: .25rem;
                color: #2a293b;
            }
        }
        .showMembersBox {
            margin-left: .55rem;
            margin-right: .2rem;
        }
        .showAgencyBox {
            margin-left: .2rem;
            margin-right: .55rem;
        }
        .showMembersBox {
            float: left;
        }
        .showAgencyBox {
            float: left;
        }
        .introductionText {
            margin: .6rem auto;
            width: 6rem;
            height: 4rem;
            border-radius: .16rem;
            box-shadow: .05rem .05rem .8rem 0.05rem rgba(0, 0, 0, 0.2);
            background-color: #fff;
            .words{
                padding-top: .7rem;
                margin: 0 auto;
                width: 5.2rem;
                height: auto;
            }
            .btn{
                margin: 0.5rem auto;
                width: 5.44rem;
                height: .8rem;
                border-radius: .4rem;
                border: .02rem solid #ff5400;
                font-size: .32rem;
                font-weight: bold;
                text-align: center;
                line-height: .8rem;
                color: #ff5400;
            }

        }
    }
</style>