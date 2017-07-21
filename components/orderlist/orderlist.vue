<template>
    <div class="order-swapper">
        <x-header>{{headerTitle}}</x-header>
        <group>
            <cell title="今日订单" value="共计1024个"></cell>
            <cell-form-preview :list="orderlist"></cell-form-preview>
        </group>
        <form-preview :header-label="$t('付款金额')" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
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
            orderlist: [{
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
