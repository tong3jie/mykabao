<template>
    <div class="order-swapper">
        <x-header>{{headerTitle}}</x-header>
        <group>
            <cell title="今日订单" value="共计1024个"></cell>
            <cell-form-preview :list="orderTotal"></cell-form-preview>
        </group>
        <form-preview v-for="(order,index) in orderLists" :key="index" header-label="金额" :header-value="`${order.price}元`" :body-items="order.order" :footer-buttons="deletOrder" :name="index"></form-preview>
    </div>
</template>

<script>
import { CellFormPreview, Group, Cell, XHeader, FormPreview } from 'vux';

export default {
    name: 'orderlist',
    components: {
        CellFormPreview,
        Group,
        Cell,
        XHeader,
        FormPreview,
    },
    data() {
        return {
            orderTotal: [{
                label: '成功',
                value: '800',
            }, {
                label: '失败',
                value: '200',
            }, {
                label: '核实',
                value: '24',
            }],
            headerTitle: '',
            orderLists: [{
                price: 100,
                order: [{
                    label: '订单编号',
                    value: '58fda0b7f6e16911c5c69f82',
                }, {
                    label: '卡号',
                    value: '1111111111111111111111111',
                }, {
                    label: '时间',
                    value: '2017-04-24 14:52:39',
                }, {
                    label: '兑换结果',
                    value: 4,
                }, {
                    label: '兑换金额',
                    value: '97元',
                }],
            }, {
                price: 100,
                order: [{
                    label: '订单编号',
                    value: '58fda0b7f6e16911c5c69f82',
                }, {
                    label: '卡号',
                    value: '1111111111111111111111111',
                }, {
                    label: '时间',
                    value: '2017-04-24 14:52:39',
                }, {
                    label: '兑换结果',
                    value: 4,
                }, {
                    label: '兑换金额',
                    value: '97元',
                }],
            }],
            deletOrder: [{
                style: 'primary',
                text: '删除',
                onButtonClick: (name) => {
                    console.log(`deleOrder button even is ${name}`);
                },
            }],
        };
    },
    created() {
        if (this.$route.params) {
            if (this.$route.params.ordertype === 'today') {
                this.headerTitle = '今日订单';
            }
        }
    },
};
</script>

<style lang="less">

</style>
