<template>
    <div class="dingdanlist">
        <el-card class="box-card">
            <el-tabs v-model="activeName">
                <div class="ding">
                <el-button>全部</el-button>
                <el-button>待付款</el-button>
                <el-button>待结单</el-button>
                <el-button>待发货</el-button>
                <el-button>待收货</el-button>
                <el-button>已完成</el-button>
                </div>
                <div class="sou">
                    <template>
                        <el-select v-model="value1" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value1">
                            </el-option>
                        </el-select>
                    </template>
                </div>
                <el-button type="primary">筛选</el-button>
                <div class="xuan">
                    <el-input placeholder="请输入内容" v-model="input2">
                        <template slot="append">搜索</template>
                    </el-input>
                </div>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="bh"
                            label="订单编号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="商品名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="je"
                            label="总金额"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="yfje"
                            label="应付金额"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="zt"
                            label="状态"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="fl"
                            label="购买者信息"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="下单时间"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="150">
                        <template slot-scope="scope" style="float: left">
                            <el-button type="text"  size="small" @click="chakan00(scope.row)">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tabs>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
            <el-dialog title="查看订单" :visible.sync="dialogFormVisible" class="cc">
                <el-form :model="form">
                    <el-form-item label="订单编号" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.bh" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品名称" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="总金额" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.je" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="应付金额" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.yfje" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.zt" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="购买者信息" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.fl" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="下单时间" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.date" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "dingdanlist",
        data() {
            return {
                options:
                    [
                        {
                    value1: '选项1',
                    label: '黄金糕'
                }, {
                    value1: '选项2',
                    label: '双皮奶'
                }, {
                    value1: '选项3',
                    label: '蚵仔煎'
                }, {
                    value1: '选项4',
                    label: '龙须面'
                }, {
                    value1: '选项5',
                    label: '北京烤鸭'
                }],
                value1:'',
                value: true,
                input1: '',
                input2: '',
                input3: '',
                select: '',
                activeName: 'first',
                dialogFormVisible:false,
                tableData:
                    [
                        {
                            date: '2016-05-02',
                            name: '王小虎',
                            je:'888',
                            yfje:'999',
                            bh:'666',
                            zt:'待支付',
                            icon:0,
                            fl:'嘻嘻哈哈',
                            img:require('@/components/img/1.1.png')
                        },
                        {
                            date: '2016-05-04',
                            name: '王小虎',
                            icon:1,
                            je:'888',
                            yfje:'999',
                            bh:'666',
                            zt:'待支付',
                            fl:'嘻嘻哈哈',
                            img:require('@/components/img/1.2.png')
                        }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        icon:0,
                        je:'888',
                        yfje:'999',
                        bh:'666',
                        zt:'待支付',
                        fl:'嘻嘻哈哈',
                        img:require('@/components/img/1.4.png')
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        icon:1,
                        je:'888',
                        yfje:'999',
                        bh:'666',
                        zt:'待支付',
                        fl:'嘻嘻哈哈',
                        img:require('@/components/img/1.3.png')
                    }],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            }
        },
        methods:{
            chakan00:function (row) {
                this.form=row;
                this.dialogFormVisible=true
            },
        }
    }
</script>

<style scoped lang="less">
    .cell img{
        width: 50px;
    }
    .dingdanlist{
        .el-button{
            margin-bottom: 15px;
        }
        .sou{
            float: left;
            margin-bottom: 20px;
            .el-input{
                width: 400px;
            }
        }
        .xuan{
            float: right;
            margin-right: 20px;
        }
        .cc{
            .mm{
                .el-select{
                    width: 150px;
                }
            }
            .span{
                margin-left: 30px;
            }
        }
    }
</style>