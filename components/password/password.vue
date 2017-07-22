<template>
    <div class="password-swapper">
        <x-header>密码设置</x-header>
        <group :title="groupTitle === 'set' ? '修改6位密码' : '设定6位密码' " label-width="4.0em" label-margin-right="2em" label-align="justify">
            <x-input title="原密码" :type="pwdTyep" :min=6 :max=6 placeholder="" v-model="oldpassword" v-show="groupTitle === 'set'" :is-type="ispassword">
                <img slot="right" @click="passwordChange" tyle="z-index:10" src="./eye.svg"  width="20px" height="20px" />
            </x-input>
            <x-input title="新密码" :type="pwdTyep" :min=6 :max=6 placeholder="" v-model="password">
                <img slot="right" @click="passwordChange" tyle="z-index:10" src="./eye.svg"  width="20px" height="20px" />
            </x-input>
            <x-input title="再输一次" :type="pwdTyep" :min=6 :max=6 placeholder="" v-model="password2" :equal-with="password">
                <img slot="right" @click="passwordChange" tyle="z-index:10" src="./eye.svg"  width="20px" height="20px" />
            </x-input>
        </group>
    </div>
</template>

<script>
import { XHeader, Group, XInput, md5 } from 'vux';

export default {
    name: 'password',
    components: {
        XHeader,
        Group,
        XInput,
    },
    data() {
        return {
            groupTitle: 'new',  /*  set则为修改 new则为新建  */
            pwdTyep: 'password',
            password: '',
            password2: '',
            oldpassword: '',
            ispassword(val) {
                return {
                    valid: md5(val) === this.oldpassword,
                    msg: '密码不正确',
                };
            },
        };
    },
    methods: {
        passwordChange() {
            if (this.pwdTyep === 'password') {
                this.pwdTyep = 'text';
            } else {
                this.pwdTyep = 'password';
            }
        },
    },

};
</script>

<style lang="less">

</style>
