<template>
    <div class="exchange-swapper">
        <x-header :left-options="{showBack:this.$route.path !== '/'}" slot="header" title="兑换" style="width:110%;margin-left:-5%;margin-right:-5%;"></x-header>
        <swiper loop auto :list="SwiperList" height="110px" class="swiper">
        </swiper>
        <divider>请选择兑换的价格</divider>
        <checker v-model="piceSelected" default-item-class="checker-default" selected-item-class="checker-selected" class="checker">
            <checker-item v-for="price in costSizes" :key="price" :value="price">￥{{price}}</checker-item>
        </checker>
        <div v-if="piceSelected === ''? false : true" class="orderOff">
            <span class="mon">预计到账：
                <p style="color:red">{{(piceSelected*0.97).toFixed(2)}}元</p>
            </span>
            <span class="off">专享折扣：
                <p style="color:red">97折</p>
            </span>
        </div>        
        <group label-width="2em" label-margin-right="2em" label-align="right" gutter="10%">
            <x-input type="tel" title="卡&nbsp;&nbsp;&nbsp;&nbsp;号" placeholder="充值卡卡号" v-model="cardNO"></x-input>
            <x-input type="tel" title="密&nbsp;&nbsp;&nbsp;&nbsp;码" placeholder="充值卡密码" v-model="cardPW"></x-input>
        </group>
        <x-button class="button" type="primary" text="提交" action-type="button"></x-button>
        <div class="protcal">
            <check-icon :value.sync="agree" type="plain" class="checkicon">同意</check-icon>
            <span style="color:blue;line-height: 23px;" @click="goToProtcal">《话费提现服务协议》</span>
        </div>
    </div>
</template>

<script>
import { Swiper, Checker, CheckerItem, Divider, XInput, Group, XButton, XHeader, CheckIcon } from 'vux';

export default {
    name: 'exchange',
    components: {
        Swiper,
        Checker,
        CheckerItem,
        Divider,
        XInput,
        Group,
        XButton,
        XHeader,
        CheckIcon,
    },
    data() {
        return {
            SwiperList: [{
                url: 'http://m.163.com',
                img: 'http://image.elegantliving.ceconline.com/320000/320100/20110815_03_52.jpg',
                title: '今天真热',
            }, {
                url: 'http://m.163.com',
                img: 'http://img.sj33.cn/uploads/allimg/200908/20090821004515837.jpg',
                title: '要下雨了',
            }, {
                url: 'http://m.163.com',
                img: 'http://img.sj33.cn/uploads/allimg/200908/20090821004515269.jpg',
                title: '约吗？',
            }],
            costSizes: [10, 20, 30, 50, 100, 200, 300, 500],
            piceSelected: '',
            cardNO: '',
            cardPW: '',
            agree: true,
        };
    },
    methods: {
        goToProtcal() {
            this.$router.push({ name: 'protcal' });
        },
    },
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

.exchange-swapper {
    width: 90%;
    margin: 0 auto;
    .swiper {
        width: 110%;
        margin-left: -5%;
        margin-right: -5%;
    }
    .checker {
        text-align: center;
        margin-top: 5px;
        .checker-default {
            width: 22%;
            height: 26px;
            line-height: 26px;
            text-align: center;
            border-radius: 3px;
            border: 1px solid #ccc;
            background-color: #fff;
            margin-right: 6px;
            margin-top: 15px;
        }
        .checker-selected {
            background: #ffffff url(./active.png) no-repeat right bottom;
            border-color: #ff4a00;
        }
    }
    .orderOff {
        margin-top: 10px;
        color: #666;
        position: relative;
        line-height: 1;
        .mon {
            position: absolute;
            left: 5px;
            display: flex;
        }
        .off {
            display: flex;
            right: 5px;
            position: absolute;
        }
    }
    .protcal {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 5px 0px 10px;
        .checkicon {
            font-size: 16px;
            span {
                color: #666;
            }
        }
    }
    .button {
        margin-top: 5%;
    }
}
</style>
