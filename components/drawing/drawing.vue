<template>
    <div class="drawing-swapper">
        <x-header :left-options="{showBack:this.$route.path !== '/drawing'}" slot="header" title="提现" style="width:110%;margin-left:-5%;margin-right:-5%;"></x-header>
        <divider>请选择到账类型</divider>
        <checker class="paytype" v-model="paytype">
            <checker-item class="img" :class="paytype === item.name ? '' : 'payType-item-default'" v-for="item in payTypeList" :key="item.name" :value="item.name" :disabled="item.disabled">
                <img :src="item.src">
                <span>{{item.disc}}</span>
            </checker-item>
        </checker>
        <divider style="margin-top:5%">请输入提款金额</divider>
        <div class="money">
            <span class="sign">￥</span>
            <input type="number" v-model="money" />
            </br>
            <span class="txt">可提现余额{{balance}}元</span>
        </div>
        <x-button class="button" type="primary" text="提交" action-type="button"></x-button>
    </div>
</template>

<script>
import { Divider, Checker, CheckerItem, XInput, XButton, XHeader } from 'vux';

const wechatUrl = require('./wechat.svg');

const alipayUrl = require('./alipay.svg');

const unionpayUrl = require('./unionpay.svg');

export default {
    name: 'drawing',
    components: {
        Divider,
        Checker,
        CheckerItem,
        XInput,
        XButton,
        XHeader,
    },
    data() {
        return {
            payTypeList: [{
                name: 'wechat',
                src: wechatUrl,
                disabled: false,
                disc: '微信支付',
            }, {
                name: 'alipay',
                src: alipayUrl,
                disabled: true,
                disc: '支付宝',
            }, {
                name: 'unionpay',
                src: unionpayUrl,
                disabled: true,
                disc: '银行卡',
            }],
            paytype: 'wechat',
            money: null,
            balance: 0,
        };
    },
};
</script>


<style lang="less">
.drawing-swapper {
    width: 90%;
    margin: 0 auto;
    .paytype {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        .img {
            flex: 1;
            text-align: center;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }
        .payType-item-default {
            filter: grayscale(100%);
        }
        .span {
            margin-top: 12px;
            color: #6a6a6a
        }
    }
    .money {
        text-align: center;
        margin-top: 10%;
        vertical-align:text-bottom;
        input {
            border-bottom: 1px solid black;
            border-top: 0px;
            border-right: 0px;
            border-left: 0px;
            width: 40%;
            font-size: 30px;
            color: red;
            text-align: center;
            background-color: #F4F4F4;
        }
        .sign {
            font-size: 29px;
            margin-right: -5px;
            border-bottom: 1px solid black;
        }
        .txt {
            color: #6a6a6a;
            font-size: 12px;            
        }
    }
    .button {
        margin-top: 10%;
    }
}
</style>
