<template>
    <div class="exchange-swapper">
        <x-header :left-options="{showBack:this.$route.path !== '/'}" slot="header" title="兑换" style="width:110%;margin-left:-5%;margin-right:-5%;"></x-header>
        <swiper loop auto :list="SwiperList" height="110px" class="swiper">
        </swiper>
        <button-tab v-model="exchangeTypeIndex" class="buttonTab">
            <button-tab-item>单张兑换</button-tab-item>
            <button-tab-item>批量兑换</button-tab-item>
        </button-tab>
        <divider>{{this.exchangeTypeIndex === 0 ? '请选择兑换的价格':'请输入您要兑换的卡号和密码'}}</divider>
        <checker v-if="this.exchangeTypeIndex === 0" v-model="piceSelected" default-item-class="checker-default" selected-item-class="checker-selected" class="checker">
            <checker-item v-for="price in costSizes" :key="price" :value="price">￥{{price}}</checker-item>
        </checker>
        <div v-if="piceSelected === ''? false : true && this.exchangeTypeIndex === 0" class="orderOff">
            <span class="mon">预计到账：
                <p style="color:red">{{(piceSelected*0.97).toFixed(2)}}元</p>
            </span>
            <span class="off">专享折扣：
                <p style="color:red">97折</p>
            </span>
        </div>
        <group v-if="this.exchangeTypeIndex === 0" label-width="2em" label-margin-right="2em" label-align="right" gutter="10%">
            <x-input type="tel" title="卡&nbsp;&nbsp;&nbsp;&nbsp;号" placeholder="充值卡卡号" v-model="cardNO"></x-input>
            <x-input type="tel" title="密&nbsp;&nbsp;&nbsp;&nbsp;码" placeholder="充值卡密码" v-model="cardPW"></x-input>
        </group>
        <group v-if="this.exchangeTypeIndex === 1">
            <div style="background-color: #F4F4F4;font-size:12px;border-bottom:15px;">
                <span>1.每行请输入一张充值卡卡号和密码，中间以“|”分开，</span>
                <br/>
                <span>2.每次最多提交5~100张</span>
                <br/>
                <span>3.批量提交有一定延迟，且勿重复提交</span>
                <br/>
            </div>
            <x-textarea v-model="batchCards" placeholder="卡号和密码中间以“|”分开"></x-textarea>
        </group>
        <toast v-model="warnShow" is-show-mask  position="default" :text="warnContent" type="text">{{warnContent}}</toast>
        <x-button slot="default" class="button" type="primary" text="提交" action-type="button" @click.native="submit"></x-button>
        <div class="protcal">
            <check-icon :value.sync="agree" type="plain" class="checkicon">同意</check-icon>
            <span style="color:blue;line-height: 23px;" @click="goToProtcal">《话费提现服务协议》</span>
        </div>
    </div>
</template>

<script>
import { Swiper, Checker, CheckerItem, Divider, XInput, Group, XButton, XHeader, CheckIcon, ButtonTab, ButtonTabItem, XTextarea, Toast } from 'vux';

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
        ButtonTab,
        ButtonTabItem,
        XTextarea,
        Toast,
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
            exchangeTypeIndex: 0,
            batchCards: '',
            warnShow: false,
            warnContent: '',
        };
    },
    methods: {
        goToProtcal() {
            this.$router.push({ name: 'protcal' });
        },
        submit() {
            if (this.agree === false) {
                this.warnShow = true;
                this.warnContent = '请同意《话费提现服务协议》';
            } else if (this.piceSelected === '' && this.exchangeTypeIndex === 0) {
                this.warnShow = true;
                this.warnContent = '请选择您要兑换卡的面值';
            } else if (this.cardNO === '' && this.exchangeTypeIndex === 0) {
                this.warnShow = true;
                this.warnContent = '请输入卡号';
            } else if (this.cardPW === '' && this.exchangeTypeIndex === 0) {
                this.warnShow = true;
                this.warnContent = '请输入卡密';
            }
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
    .buttonTab {
        margin-top: 5px;
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
