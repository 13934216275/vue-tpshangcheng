<template>
    <div class="liebiao">
        <el-card class="box-card">
            <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
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
                            prop="name"
                            label="物流名称"
                            >
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="150">
                        <template slot-scope="scope" style="float: left">
                            <el-button type="text"  size="small" @click="dialogFormVisible2 = true">查看</el-button>
                            <el-button type="text"  size="small" @click="dialogFormVisible1 = true">编辑</el-button>
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
            <el-dialog title="快递信息" :visible.sync="dialogFormVisible" class="cc">
                <el-form :model="form">
                    <el-form-item label="快递公司名称" :label-width="formLabelWidth" size="small">
                        <el-select v-model="value1" multiple placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="快递信息" :visible.sync="dialogFormVisible1" class="cc">
                <el-form :model="form">
                    <el-form-item label="快递公司名称" :label-width="formLabelWidth" size="small">
                        <el-select v-model="value11" multiple placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="快递信息" :visible.sync="dialogFormVisible2" class="cc">
                <el-form :model="form">
                    <el-form-item label="公司名称" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.mc" autocomplete="off"></el-input>
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
        name: "kd",
        data() {
            return {
                    options: [{
                        value: '选项1',
                        label: '天天快递'
                    }, {
                        value: '选项2',
                        label: '圆通快递'
                    }, {
                        value: '选项3',
                        label: '顺丰快递'
                    }, {
                        value: '选项4',
                        label: '邮政快递'
                    }, {
                        value: '选项5',
                        label: '京东快递'
                    }],
                    value1: [],
                    value11: [],
                    value2: [],
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
                            date: '2019-07-05',
                            name: '圆通快递',
                            zhi: '1518',
                            shu:'5464654',
                            ps:'走路'
                        },
                        {
                            date: '2019-07-05',
                            name: '天天快递',
                            shu:'546564654',
                            zhi: '54654',
                            ps:'走路'
                        }, {
                        date: '2019-07-05',
                        name: '申通快递',
                        shu:'8584654',
                        zhi: '63435',
                        ps:'走路'
                    }, {
                        date: '2019-07-05',
                        name: '顺丰快递',
                        shu:'154655',
                        zhi: '4554',
                        ps:'走路'
                    }],
                form: {
                    name: '',
                    mc:'',
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