<template>
    <div class="index">

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>管理中心</span>
            </div>
            <div v-for="v in bigboxList">
                <bigBox :http="v.http" :tit="v.tit" :span="v.span" :bgcolor="v.bgcolor"></bigBox>
            </div>
            <ul class="smalltot">
                <li v-for="v in smallboxList">
                    <smallBox :span="v.span" :h6="v.h6"></smallBox>
                </li>
            </ul>
        </el-card>
        <el-card class="box-card" style="margin-top: 30px">
            <div class="sechead">
                <i class="sc_icon"></i>
                <span>版本信息</span>
            </div>
            <template>
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="程序版本:"
                            width="230">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="TPshop v3.5.3"
                            width="350">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="更新时间:"
                            width="235">
                    </el-table-column>
                    <el-table-column
                            prop="address1"
                            label="2019-07-03"
                            width="350">
                    </el-table-column>
                </el-table>
            </template>
        </el-card>
        <el-card class="box-card" style="margin-top: 30px">
            <div class="sechead1">
                <i class="sc_icon1"></i>
                <span>系统信息</span>
            </div>
            <template>
                <el-table
                        :data="tableData1"
                        border
                        style="width: 100%;margin-top: 30px">
                    <el-table-column
                            prop="date"
                            label="服务器操作系统:"
                            width="230">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="WINNT"
                            width="350">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="服务器域名/IP:"
                            width="235">
                    </el-table-column>
                    <el-table-column
                            prop="address1"
                            label="121.42.234.123:8080 [ 121.42.234.123 ]"
                            width="350">
                    </el-table-column>
                </el-table>
            </template>
        </el-card>
    </div>
</template>
<script>
    import bigBox from "@/components/bigBox/bigBox"
    import smallBox from "@/components/smallBox/smallBox"
    export default{
        components:{
            bigBox,
            smallBox
        },
        data(){
            return{
                bigboxList:[
                    {http:"http://121.42.234.123:8080/public/static/images/1.png",tit:"1",span:"今日订单总数",bgcolor:{background:'#32cc7f'}},
                    {http:"http://121.42.234.123:8080/public/static/images/2.png",tit:"2",span:"今日会员总数",bgcolor:{background:'#e4eaec'}},
                    {http:"http://121.42.234.123:8080/public/static/images/3.png",tit:"3",span:"今日待审评论数",bgcolor:{background:'#e4eaec'}},
                    {http:"http://121.42.234.123:8080/public/static/images/4.png",tit:"4",span:"今日访问量",bgcolor:{background:'#6c6fbf'}},
                ],
                backcolor:[
                    {background:'#32cc7f'},
                    {background:'#e4eaec'},
                    {background:'#e4eaec'},
                    {background:'#6c6fbf'},
                ],
                smallboxList:[
                    {span:"待处理订单",h6:"1"},
                    {span:"商品数量",h6:"2"},
                    {span:"文章数量",h6:"3"},
                    {span:"会员总数",h6:"4"},
                ],
                tableData: [
                    {
                        date: '程序开发:',
                        name: 'TPshop开源商城',
                        address: '版权所有:',
                        address1: '盗版必究'
                    }, {
                        date: '官方授权:',
                        name: '商业授权',
                        address: '官方论坛:',
                        address1: 'TPshop交流论坛'
                    }
                ],
                tableData1: [
                    {
                        date: '服务器环境:',
                        name: 'Apache/2.4.9 (Win64) PHP/5.5.12',
                        address: '	PHP 版本:',
                        address1: '	5.5.12:'
                    }, {
                        date: 'Mysql 版本:',
                        name: '5.6.17',
                        address: '	GD 版本:',
                        address1: '	bundled (2.1.0 compatible)'
                    }, {
                        date: '文件上传限制:',
                        name: '300M',
                        address: '最大占用内存:',
                        address1: '	1024M'
                    }, {
                        date: '最大执行时间:',
                        name: '120s',
                        address: '安全模式:',
                        address1: 'NO:'
                    }, {
                        date: 'Zlib支持::',
                        name: '	YES',
                        address: 'Curl支持::',
                        address1: 'YES:'
                    },
                ],
            }
        }
    }
</script>
<style>
    .smalltot{
        width: 1106px;
        height: 235px;
        display: flex;
        justify-content: space-between;
    }
    .smalltot :nth-child(1) i {
        background: url('http://121.42.234.123:8080/public/static/images/admin-icon.png') no-repeat;
        background-position: 0 -214px;
    }
    .smalltot :nth-child(2) i {
        background: url('http://121.42.234.123:8080/public/static/images/admin-icon.png') no-repeat;
        background-position: -224px -214px;
    }
    .smalltot :nth-child(3) i {
        background: url('http://121.42.234.123:8080/public/static/images/admin-icon.png') no-repeat;
        background-position: -168px -214px;
    }
    .smalltot :nth-child(4) i {
        background: url('http://121.42.234.123:8080/public/static/images/admin-icon.png') no-repeat;
        background-position: -112px -214px;
    }

    .sechead{
        width: 100%;
        height: 41px;
        padding: 6px 0 14px;
        border-bottom: 1px solid #e4eaec;
        box-sizing: border-box;
    }
    .sc_icon{
        width: 20px;
        height: 20px;
        float: left;
        margin-right: 10px;
    }
    .sechead i{
        background: url('http://121.42.234.123:8080/public/static/images/admin-icon.png') no-repeat;
        background-position: -64px -286px;
    }
    .sechead span{
        font-size: 16px;
        color: #000;
        line-height: 20px;
        float: left;
        font-weight: 800;
    }
    tr th{
        color: #606266;
        font-weight: 400;
    }
    .sechead1{
        width: 100%;
        height: 41px;
        padding: 6px 0 14px;
        border-bottom: 1px solid #e4eaec;
        box-sizing: border-box;
    }
    .sc_icon1{
        width: 20px;
        height: 20px;
        float: left;
        margin-right: 10px;
    }
    .sechead1 i{
        background: url('http://121.42.234.123:8080/public/static/images/admin-icon.png') no-repeat;
        background-position: -44px -286px;
    }
    .sechead1 span{
        font-size: 16px;
        color: #000;
        line-height: 20px;
        float: left;
        font-weight: 800;
    }
</style>
