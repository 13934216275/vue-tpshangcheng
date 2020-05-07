<template>
    <div class="liebiao">
        <el-card class="box-card">
            <el-tabs v-model="activeName">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="name"
                            label="名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="zhi"
                            label="区域">
                    </el-table-column>
                    <el-table-column
                            prop="shu"
                            label="订单号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            label="联系方式"
                            width="180"
                            prop="date">
                    </el-table-column>
                    <el-table-column
                            label="配送方式"
                            width="180"
                            prop="ps">
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
                    <el-form-item label="名称" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="区域" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.zhi" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="订单号" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.shu" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.date" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="配送方式" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.ps" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible1" class="cc">
                <el-form :model="form1">
                    <el-form-item label="名称" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="区域" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.zhi" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="订单号" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.shu" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.date" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="配送方式" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.ps" autocomplete="off"></el-input>
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
        name: "ps",
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
                            date: '120',
                            name: '王小虎',
                            zhi: '1518',
                            shu:'5464654',
                            ps:'走路'
                        },
                        {
                            date: '110',
                            name: '王小虎',
                            shu:'546564654',
                            zhi: '54654',
                            ps:'走路'
                        }, {
                        date: '5436456',
                        name: '王小虎',
                        shu:'8584654',
                        zhi: '63435',
                        ps:'走路'
                    }, {
                        date: '6546465',
                        name: '王小虎',
                        shu:'154655',
                        zhi: '4554',
                        ps:'走路'
                    }],
                form: {
                    name: '',
                    date: '',
                    shu:'',
                    zhi: '',
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
                    date: '',
                    shu:'',
                    zhi: '',
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