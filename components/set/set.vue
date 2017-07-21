<template>
    <div class="set-swapper">
        <x-header class="xheader">个人隐私设置</x-header>
        <blur class="blur" :blur-amount=1 url="https://static.pexels.com/photos/512861/pexels-photo-512861.jpeg" :height=120>
            <img src="https://static.pexels.com/photos/512861/pexels-photo-512861.jpeg">
        </blur>
        <group>
            <cell title="姓名" value="让爱慢慢成册"></cell>
            <cell title="性别" value="男"></cell>
            <cell title="余额" is-link value="500"></cell>
        </group>
        <group>
            <cell title="QQ" is-link @click.native="confirmshow('qq')">
                <div slot="value">
                    <span :style="qq === '' ? 'color: green':''">{{qq === '' ? '未绑定':qq}}</span>
                </div>
            </cell>
            <cell title="微信" is-link @click.native="confirmshow('wechat')">
                <div slot="value">
                    <span :style="wechat === '' ? 'color: green':''">{{wechat === '' ? '未绑定':wechat}}</span>
                </div>
            </cell>
            <cell title="手机" is-link @click.native="confirmshow('mobile')">
                <div slot="value">
                    <span :style="mobile === '' ? 'color: green':''">{{mobile === '' ? '未绑定':mobile}}</span>
                </div>
            </cell>
            <cell title="注册日期" is-link value="2017-07-21"></cell>
        </group>
        <confirm v-model="confirmIsShow" show-input :title="confirmTitle" confirm-text="绑定" @on-confirm="confirmDid">
        </confirm>
        <toast v-model="toastIsShow" type="warn" :text="toastText"></toast>
    </div>
</template>


<script>
import { Blur, Group, Cell, Confirm, Toast, XHeader } from 'vux';

export default {
    name: 'set',
    components: {
        Blur,
        Group,
        Cell,
        Confirm,
        Toast,
        XHeader,
    },
    data() {
        return {
            qq: '',
            wechat: '',
            mobile: '',
            confirmIsShow: false,
            confirmTitle: '',
            toastIsShow: false,
            toastText: '',
        };
    },
    methods: {
        confirmshow(val) {
            if (val === 'qq') {
                this.confirmTitle = '请输入您要绑定的QQ';
            } else if (val === 'wechat') {
                this.confirmTitle = '请输入您要绑定的微信号';
            } else {
                this.confirmTitle = '请输入您要绑定的手机';
            }
            this.confirmIsShow = true;
        },
        confirmDid(val) {
            if (this.confirmTitle === '请输入您要绑定的QQ') {
                if (parseInt(val, 10).toString() !== '' && parseInt(val, 10).toString().length >= 5 && parseInt(val, 10).toString().length <= 11) {
                    this.qq = parseInt(val, 10).toString();
                } else {
                    this.toastText = '请输入正确的QQ';
                    this.toastIsShow = true;
                }
            } else if (this.confirmTitle === '请输入您要绑定的微信号') {
                if (val.length !== 0) {
                    this.wechat = val;
                } else {
                    this.toastText = '请输入正确的微信号';
                    this.toastIsShow = true;
                }
            } else if (this.confirmTitle === '请输入您要绑定的手机') {
                if (parseInt(val, 10).toString() === 11) {
                    this.mobile = val;
                } else {
                    this.toastText = '请输入正确的手机号';
                    this.toastIsShow = true;
                }
            }
        },
    },
};
</script>


<style lang="less">
.set-swapper {
    width: 90%;
    margin: 0 auto;
    .blur,
    .xheader {
        width: 110%;
        margin-left: -5%;
        margin-right: -5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        img {
            margin: 16px 0px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 4px solid #ececec;
        }
    }
}
</style>
