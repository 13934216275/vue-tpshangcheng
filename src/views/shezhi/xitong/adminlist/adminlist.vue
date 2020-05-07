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
                            prop="shu"
                            label="ID"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="用户名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="juese"
                            label="所属角色">
                    </el-table-column>
                    <el-table-column
                            prop="em"
                            label="Email地址"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            label="加入时间"
                            width="180"
                            prop="time">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="150">
                        <template slot-scope="scope" style="float: left">
                            <el-button type="text"  size="small" dis @click="bianji00(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="sc(scope.row)">删除</el-button>
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
                    <el-form-item label="用户名" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属角色" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.juese" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="email" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.em" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="时间" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.time" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="add">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible1" class="cc">
                <el-form :model="form1">
                    <el-form-item label="用户名" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属角色" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.juese" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="email" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.em" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="时间" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.time" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="queding">确 定</el-button>
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "adminlist",
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
                            time: '2016-05-02',
                            name: '王小虎',
                            juese: '1518',
                            em:'1692587134@qq.com',
                            shu:'2',
                        },
                        {
                            time: '2016-05-04',
                            name: '王小虎',
                            em:'1692587134@qq.com',
                            shu:'2',
                            juese: '54654'
                        }, {
                        time: '2016-05-01',
                        name: '王小虎',
                        em:'1692587134@qq.com',
                        shu:'2',
                        juese: '63435'
                    }, {
                        time: '2016-05-03',
                        name: '王小虎',
                        em:'1692587134@qq.com',
                        shu:'2',
                        juese: '4554'
                    }],
                form: {
                    name: '',
                    em:'',
                    juese:'',
                    time:'',
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
                    em:'',
                    juese:'',
                    time:'',
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
            add:function () {
                this.tableData.push(this.form);
                this.dialogFormVisible=false;
                this.form={
                    name: '',
                    juese: '',
                    em:'',
                    time:'',
                }
            },
            sc(row){
                this.tableData.splice(this.tableData.indexOf(row), 1)
            },
            bianji00:function (row) {
                this.form1=row;
                this.dialogFormVisible1=true
            },
            queding:function () {
                this.dialogFormVisible1=false
            },
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