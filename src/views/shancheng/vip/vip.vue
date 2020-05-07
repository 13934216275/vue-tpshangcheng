<template>
    <div class="liebiao">
        <el-card class="box-card">
        <el-tabs v-model="activeName">
            <el-button type="primary" @click="dialogFormVisible = true">增加</el-button>
            <div class="sou">
                <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">搜索</template>
                </el-input>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="shu"
                        label="ID"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="会员名"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="zhi"
                        width="130"
                        label="手机号码">
                </el-table-column>
                <el-table-column
                        label="注册日期"
                        width="130"
                        prop="date">
                </el-table-column>
                    <el-table-column
                            prop="zj"
                            label="可用资金"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="jf"
                            label="积分"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="dj"
                            label="会员等级"
                            width="130">
                    </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope" style="float: left">
                        <el-button type="text"  size="small"  @click="dialogFormVisible1 = true">查看</el-button>
                        <el-button type="text"  size="small"  @click="dialogFormVisible2 = true">编辑</el-button>
                        <el-button type="text"  size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tabs>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
        <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible" class="cc">
            <el-form :model="form">
                <el-form-item label="会员名" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.hm" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="注册日期" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.date" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="可用资金" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.zj" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="积分" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.jf" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="会员等级" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.dj" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
            <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible1" class="cc">
                <el-form :model="form1">
                    <el-form-item label="会员名" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.hm" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="注册日期" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.date" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="可用资金" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.zj" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="积分" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.jf" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="会员等级" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.dj" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible2" class="cc">
                <el-form :model="form2">
                    <el-form-item label="会员名" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.hm" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="注册日期" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.date" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="可用资金" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.zj" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="积分" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.jf" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="会员等级" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.dj" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "vip",
        data() {
            return {
                value: true,
                input1: '',
                input2: '',
                input3: '',
                select: '',
                activeName: 'first',
                dialogFormVisible:false,
                dialogFormVisible1:false,
                dialogFormVisible2:false,
                tableData:
                    [
                        {
                            date: '2016-05-02',
                            name: '王小虎',
                            zhi: '151-8847-7744',
                            shu:'2',
                            zj:212123,
                            jf:55,
                            dj:'皇冠9',
                        },
                        {
                            date: '2016-05-04',
                            name: '王小虎',
                            shu:'2',
                            zj:212123,
                            jf:55,
                            dj:'皇冠9',
                            zhi: '151-8847-7744',
                        }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        shu:'2',
                        zhi: '151-8847-7744',
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        shu:'2',
                        zj:212123,
                        jf:55,
                        dj:'皇冠9',
                        zhi: '151-8847-7744',
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
                form1: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                form2: {
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
        }
    }
</script>

<style scoped lang="less">

    .liebiao{
        .el-button{
            margin-bottom: 15px;
        }
        .sou{
            float: right;
            margin-right: 30px;
            .el-input{
                width: 400px;
            }

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