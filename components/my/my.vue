<template>
    <div class="my-swapper" >
        <x-header :left-options="{showBack:this.$route.path !== '/my'}" slot="header" title="我的" style="width:110%;margin-left:-5%;margin-right:-5%;"></x-header>
        <blur class="blur" :blur-amount=1 url="https://static.pexels.com/photos/512861/pexels-photo-512861.jpeg" :height=120>
            <img src="https://static.pexels.com/photos/512861/pexels-photo-512861.jpeg">
            <span>让爱慢慢成册</span>
        </blur>
        <card class="card">
            <div slot="content" class="card-content">
                <div class="vux-1px-r" @click="goToOrder('today')">
                    <span>1130</span>
                    <br/> 今日订单
                </div>
                <div class="vux-1px-r">
                    <span>15</span>
                    <br/> 兑换订单
                </div>
                <div class="vux-1px-r">
                    <span>0</span>
                    <br/> 提现订单
                </div>
                <div>
                    <span>88</span>
                    <br/> 余额
                </div>
            </div>
        </card>
        <group>
            <cell title="隐私设置" is-link link="/set">
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="./setting.svg">
            </cell>
            <cell title="密码设置" is-link link="/password">
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="./password.svg">
            </cell>
        </group>
        <group>
            <cell title="联系客服" is-link link="/call">
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="./callme.svg">
            </cell>
            <cell title="关于我们" is-link link="/about">
                <img slot="icon" width="22" style="display:block;margin-right:5px;" src="./about.svg">
            </cell>
        </group>
    </div>
</template>


<script>
import { Blur, Card, Group, Cell, XHeader } from 'vux';

export default {
    name: 'my',
    components: {
        Blur,
        Card,
        Group,
        Cell,
        XHeader,
    },
    methods: {
        goToOrder(val) {
            if (val === 'today') {
                this.$router.push({ name: 'orderlist', params: { ordertype: val } });
            }
        },
    },
};
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.my-swapper {
    width: 90%;
    margin: 0 auto;
    .blur {
        width: 110%;
        margin-left: -5%;
        margin-right: -5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        img {
            margin: 31px 20px 31px 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 4px solid #ececec;
        }
        span {
            color: #fff;
            font-size: 20px;
            margin-top: 50px;
            line-height: 20px;
        }
    }
    .card {
        .card-content {
            background-color: #F4F4F4;
            display: flex;
            flex-direction: row;
            padding: 10px 0;
            div {
                flex: 1;
                text-align: center;
                font-size: 12px;
                line-height: 2.2;
                color: #6a6a6a;
                span {
                    color: red;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
