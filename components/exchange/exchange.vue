<template>
    <div class="exchange-swapper">
        <swiper loop auto :list="SwiperList" height="150px" class="swiper">
        </swiper>
        <divider>请选择兑换的价格</divider>
        <checker v-model="piceSelected" default-item-class="checker-default" selected-item-class="checker-selected" class="checker">
            <checker-item v-for="price in costSizes" :key="price" :value="price">￥{{price}}</checker-item>
        </checker>
        <group label-width="2em" label-margin-right="2em" label-align="right" gutter="10%">
            <x-input type="tel" title="卡&nbsp;&nbsp;&nbsp;&nbsp;号" placeholder="充值卡卡号" v-model="cardNO"></x-input>
            <x-input type="tel" title="密&nbsp;&nbsp;&nbsp;&nbsp;码" placeholder="充值卡密码" v-model="cardPW"></x-input>
        </group>
        <x-button class="button" type="primary" text="提交" action-type="button"></x-button>
    </div>
</template>

<script>
import { Swiper, Checker, CheckerItem, Divider, XInput, Group, XButton } from 'vux';

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
            piceSelected: null,
            cardNO: '',
            cardPW: '',
        };
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
    .button {
        margin-top: 5%;
    }
}
</style>
