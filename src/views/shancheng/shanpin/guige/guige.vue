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
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="属性名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="zhi"
                        label="属性值">
                </el-table-column>
                <el-table-column
                        label="日期"
                        width="180"
                        prop="date">

                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope" style="float: left">
                        <el-button type="text"  size="small" dis @click="dialogFormVisible1=true">编辑</el-button>
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
                <el-form-item label="属性名" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="属性值" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.shu" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
            <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible1" class="cc">
                <el-form :model="form1">
                    <el-form-item label="属性名" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="属性值" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.shu" autocomplete="off"></el-input>
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
        name: "guige",
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
                            date: '2016-05-02',
                            name: '王小虎',
                            zhi: '1518',
                            shu:'2',
                        },
                        {
                            date: '2016-05-04',
                            name: '王小虎',
                            shu:'2',
                            zhi: '54654'
                        }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        shu:'2',
                        zhi: '63435'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        shu:'2',
                        zhi: '4554'
                    }],
                form: {
                    name: '',
                    shu:'',
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
                    shu:'',
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