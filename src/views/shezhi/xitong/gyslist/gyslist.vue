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
                            label="供应商名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="ms"
                            label="供应商描述">
                    </el-table-column>
                    <el-table-column
                            prop="ren"
                            label="供应商联系人"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            label="供应商电话"
                            width="180"
                            prop="date">
                    </el-table-column>
                    <el-table-column
                            label="所属管理员"
                            width="180"
                            prop="yuan">
                    </el-table-column>
                    <el-table-column
                            label="状态"
                            width="180">
                        <template slot-scope="scope">
                            <kaiguan :icon="scope.row.icon"></kaiguan>
                        </template>
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="150">
                        <template slot-scope="scope" style="float: left">
                            <el-button type="text"  size="small" dis @click="dialogFormVisible1 = true">编辑</el-button>
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
                    <el-form-item label="供应商名称" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商描述" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.ms" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商联系人" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.ren" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商电话" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.dh" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属管理员" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.yuan" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.icon" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible1" class="cc">
                <el-form :model="form1">
                    <el-form-item label="供应商名称" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商描述" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.ms" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商联系人" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.ren" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商电话" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.dh" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属管理员" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.yuan" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.icon" autocomplete="off"></el-input>
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
    import kaiguan from '@/components/kaiguan/kaiguan.vue'
    export default {
        name: "gyslist",
        components:{
            kaiguan
        },
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
                            gly:'马志刚',
                            dh:'110',
                            ren:'马志刚',
                            ms:'好',
                            yuan:'陈苗',
                            icon:0,
                            adres:'1692587134@qq.com',
                            shu:'2',
                        },
                        {
                            date: '2016-05-04',
                            name: '王小虎',
                            adres:'1692587134@qq.com',
                            shu:'2',
                            gly:'马志刚',
                            dh:'110',
                            ren:'马志刚',
                            ms:'好',
                            yuan:'陈苗',
                            icon:0,
                            zhi: '54654'
                        }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        adres:'1692587134@qq.com',
                        shu:'2',
                        gly:'马志刚',
                        dh:'110',
                        ren:'马志刚',
                        ms:'好',
                        yuan:'陈苗',
                        icon:0,
                        zhi: '63435'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        adres:'1692587134@qq.com',
                        shu:'2',
                        gly:'马志刚',
                        icon:0,
                        zhi: '4554',
                        dh:'110',
                        ren:'马志刚',
                        ms:'好',
                        yuan:'陈苗',
                    }],
                form: {
                    name: '',
                    ren:'',
                    ms:'',
                    dh:'',
                    yuan:'',
                    icon:'',
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
                    ren:'',
                    ms:'',
                    dh:'',
                    yuan:'',
                    zt:'',
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