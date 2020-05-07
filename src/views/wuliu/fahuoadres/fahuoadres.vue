<template>
    <div class="liebiao">
        <el-card class="box-card">
            <div class="sou">
                <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">搜索</template>
                </el-input>
            </div>
            <el-tabs v-model="activeName" class="biao">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            label="日期"
                            width="180"
                            prop="date">
                    </el-table-column>
                    <el-table-column
                            prop="shu"
                            label="订单号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="zhi"
                            label="发货地址">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="商品"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="150">
                        <template slot-scope="scope" style="float: left">
                            <el-button type="text"  size="small" @click="dialogFormVisible1 = true">查看</el-button>
                            <el-button type="text"  size="small" @click="dialogFormVisible = true">编辑</el-button>
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
                    <el-form-item label="日期" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.date" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="订单号" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.shu" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="发货地址" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.shu" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible1" class="cc">
                <el-form :model="form1">
                    <el-form-item label="日期" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.date" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="订单号" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.shu" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="发货地址" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.shu" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "fahuoadres",
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
                tableData:
                    [
                        {
                            date: '2019-07-05',
                            name: '手机',
                            zhi: '1518',
                            shu:'5464654',
                            ps:'走路'
                        },
                        {
                            date: '2019-07-05',
                            name: '电脑',
                            shu:'546564654',
                            zhi: '54654',
                            ps:'走路'
                        }, {
                        date: '2019-07-05',
                        name: '自行车',
                        shu:'8584654',
                        zhi: '63435',
                        ps:'走路'
                    }, {
                        date: '2019-07-05',
                        name: '跑车',
                        shu:'154655',
                        zhi: '4554',
                        ps:'走路'
                    }],
                form: {
                    name: '',
                    date:'',
                    shu:'',
                    zhi:'',
                    ps:'',
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
                    date:'',
                    shu:'',
                    zhi:'',
                    ps:'',
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
            float: left;
            .el-input{
                width: 400px;
            }
        }
        .biao{
            margin-top:50px;
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