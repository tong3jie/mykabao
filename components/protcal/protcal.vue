<template>
    <div class="protcal-swapper">
        <x-header slot="header" title="话费卡提现服务协议" style="width:110%;margin-left:-5%;margin-right:-5%;"></x-header>
        <div class="title">
            <span>话费卡提现服务协议</span>
        </div>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话费卡提现服务协议（以下称“本协议”）是北京乙未文达科技有限公司（以下称“乙未文达”）与乙未文达用户（以下称“用户”或“您”）就话费卡提现服务(或称”本服务”)所订立的有效合约。用户通过网络页面点击确认或以其他方式选择接受本协议，即表示用户与乙未文达已达成协议并同意接受本协议的全部约定内容。 在接受本协议之前，请您仔细阅读本协议的全部内容（特别是以粗体下划线标注的内容）。如果您不同意本协议的任意内容，或者无法准确理解乙未文达对条款的解释，请您不要进行后续操作。
        </span>
        <br/>
        <span class="title2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一条 相关定义</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、话费卡：本协议所称话费卡，是指电信业务运营商发行的具有一定面值并可用于话费充值的卡片。</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、话费卡提现：本协议所称话费卡提现，是指乙未文达提供的话费卡转让服务。用户可将其持有的话费卡，在乙未文达网站转让给乙未文达合作商户，转让所得的金额将直接转入用户在乙未文达设置的账户中。具体支持的话费卡卡种以用户使用本服务时的页面提示为准。</span>
        <br/>
        <span class="title2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二条 费用</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户使用本服务需承担一定转让折扣，转让折扣金额以页面提示为准。转让折扣将直接从话费卡面值中扣除，即实际到账金额为话费卡面值减去转让折扣后的金额。</span>
        <br/>
        <span class="title2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第三条 权利义务</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、用户需按照页面提示选择正确的话费卡面值。如实际面值与选择的面值不一致的，可能导致延期到账、转让失败或损失差额，由此产生的损失由用户自行承担，乙未文达对此不承担责任。</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、如因话费卡卡密不正确或转让前已经使用等原因,导致话费卡不能转让的,用户需自行解决或联系电信业务运营商解决，乙未文达不介入处理。</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、乙未文达应按照本协议的约定及页面提示，向用户提供话费卡转让服务，并保证用户成功转让并提现的资金在不超过3个工作日内及时转入其在乙未文达设置的账户中。</span>
        <br/>
        <span class="title2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第四条 其他</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、本协议适用中华人民共和国大陆地区法律。因乙未文达与用户就本协议的签订、履行或解释发生争议，双方应努力友好协商解决。如协商不成，任何一方均可向北京仲裁委员会申请仲裁。</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、本协议内容包括协议正文及所有乙未文达已经发布的或将来可能发布的乙未文达服务的使用规则。所有规则为本协议不可分割的一部分，与协议正文具有相同法律效力。</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、如本协议发生变更，乙未文达将通过公告方式提前予以公布，变更后的协议在公告期届满起生效。若您在协议生效后继续使用本服务的，表示您接受变更后的协议，也将遵循变更后的协议使用本服务.</span>
        <br/>
        <span class="title2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;转让说明：</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.当选择的面值与实际面值不一致时，您将损失差额，而且会造成延迟到账，请正确选择。</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.转让成功前请不要丢弃您的充值卡。</span>
        <br/>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.支持移动、联通、电信充值卡。</span>
    </div>
</template>

<script>
import { XHeader } from 'vux';

export default {
    naem: 'protcal',
    components: {
        XHeader,
    },
};
</script>

<style lang="less">
.protcal-swapper {
    width: 90%;
    .title {
        margin: 15px 0px;
        text-align: center;
        font-weight: 700;
    }
    .title2 {
        font-weight: 700;
        margin: 20px 0px;
    }
}
</style>
