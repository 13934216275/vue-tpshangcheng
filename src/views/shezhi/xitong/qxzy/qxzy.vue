<template>
    <div class="liebiao">
        <el-card class="box-card">
            <el-button type="primary" @click="dialogFormVisible = true">增加</el-button>
            <el-tabs v-model="activeName">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="name"
                            label="角色名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="fz"
                            label="资源类型"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="lx"
                            label="所属分组"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="ma"
                            label="权限码"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="150">
                        <template slot-scope="scope" style="float: left">
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
            <el-dialog title="添加角色" :visible.sync="dialogFormVisible" class="cc">
                <el-form :model="form">
                    <el-form-item label="角色名称" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="资源类型" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.lx" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属分组" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.fz" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="权限码" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.ma" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="添加角色" :visible.sync="dialogFormVisible1" class="cc">
                <el-form :model="form1">
                    <el-form-item label="角色名称" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="资源类型" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.lx" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属分组" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.fz" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="权限码" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.ma" autocomplete="off"></el-input>
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
        name: "qxzy",
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
                            ma: 'hghghfhgfhghgfhgfhgfhg',
                            id:2,
                            name: '王小虎',
                            fz: '1518',
                            shu:'5464654',
                            lx:'走路'
                        },
                        {
                            ma: 'dfdfdsdfdf',
                            id:2,
                            name: '王小虎',
                            shu:'546564654',
                            fz: '54654',
                            lx:'走路'
                        }, {
                        ma: 'gfggfhbfdgdstfgds',
                        id:2,
                        name: '王小虎',
                        shu:'8584654',
                        fz: '63435',
                        lx:'走路'
                    }, {
                        ma: 'gfdgffdgfdgfdgfdg',
                        id:2,
                        name: '王小虎',
                        shu:'154655',
                        fz: '4554',
                        lx:'走路'
                    }],
                form: {
                    name: '',
                    lx: '',
                    fz: '',
                    ma: '',
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
                    lx: '',
                    fz: '',
                    ma: '',
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