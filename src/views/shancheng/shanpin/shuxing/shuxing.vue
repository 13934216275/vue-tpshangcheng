<template>
    <div class="liebiao">
        <el-card class="box-card">
        <el-tabs v-model="activeName">
            <el-button type="primary" @click="dialogFormVisible = true">添加参数模板</el-button>
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
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="参数模板名称"
                        width="300">
                </el-table-column>
                <el-table-column
                        label="日期"
                        width="300"
                        prop="date">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope" style="float: left">
                        <router-link to="sxadd"><el-button type="text"  size="small">添加</el-button></router-link>
                        <el-button type="text"  size="small" dis>编辑</el-button>
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
                <el-form-item label="模板名称" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
           </el-card>
    </div>
</template>

<script>
    export default {
        name: "shuxing",
        data() {
            return {
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