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
                            label="日期"
                            width="180"
                            prop="date">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="客户"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="shu"
                            label="商品"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="zhi"
                            label="数量">
                    </el-table-column>
                    <el-table-column
                            prop="dj"
                            label="单价"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="zj"
                            label="总计"
                            width="180">
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
            <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible" class="cc">
                <el-form :model="form">
                    <el-form-item label="日期" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.date" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="客户" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.shu" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="数量" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.zhi" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="单价" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.dj" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="总计" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.zj" autocomplete="off"></el-input>
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
                    <el-form-item label="客户" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.shu" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="数量" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.zhi" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="单价" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.dj" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="总计" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.zj" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible2" class="cc">
                <el-form :model="form2">
                    <el-form-item label="日期" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.date" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="客户" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.shu" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="数量" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.zhi" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="单价" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.dj" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="总计" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form2.zj" autocomplete="off"></el-input>
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
        name: "daikuan",
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
                            date: '2019-07-05',
                            name: '马志刚',
                            zhi: '1518',
                            dj:'111',
                            zj:'666',
                            shu:'沙发',
                            ps:'走路'
                        },
                        {
                            date: '2019-07-05',
                            name: '马志刚',
                            dj:'111',
                            zj:'666',
                            shu:'床',
                            zhi: '54654',
                            ps:'走路'
                        }, {
                        date: '2019-07-05',
                        name: '马志刚',
                        shu:'椅子',
                        zhi: '63435',
                        dj:'111',
                        zj:'666',
                        ps:'走路'
                    }, {
                        date: '2019-07-05',
                        name: '马志刚',
                        shu:'被子',
                        dj:'111',
                        zj:'666',
                        zhi: '4554',
                        ps:'走路'
                    }],
                form: {
                    name: '',
                    date: '',
                    zhi: '',
                    dj:'',
                    zj:'',
                    shu:'',
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
                    zhi: '',
                    dj:'',
                    zj:'',
                    shu:'',
                    ps:'',
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
                    date: '',
                    zhi: '',
                    dj:'',
                    zj:'',
                    shu:'',
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