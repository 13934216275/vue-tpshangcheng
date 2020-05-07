<template>
    <div class="tkmx">
        <el-card class="box-card">
            <div class="tkmx-header">
                <el-input placeholder="请输入内容" v-model="input" class="tkmx-right" size="medium ">
                    <template slot="append">
                        <i class="el-icon-search"></i>
                    </template>
                </el-input>
            </div>
            <template>
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            fixed="left"
                            prop="ljerpbh"
                            label="料件ERP编号">
                    </el-table-column>
                    <el-table-column
                            prop="xh"
                            label="型号">
                    </el-table-column>
                    <el-table-column
                            prop="ck"
                            label="仓库">
                    </el-table-column>
                    <el-table-column
                            prop="kw"
                            label="库位">
                    </el-table-column>
                    <el-table-column
                            prop="dw"
                            label="单位">
                    </el-table-column>
                    <el-table-column
                            prop="kcl"
                            label="库存量">
                    </el-table-column>
                    <el-table-column
                            prop="blxx"
                            label="不良现象">
                    </el-table-column>
                    <el-table-column
                            prop="pdjg"
                            label="判定结果">
                    </el-table-column>
                    <el-table-column
                            prop="pdrq"
                            label="判定日期">
                    </el-table-column>
                    <el-table-column
                            prop="pzpdr"
                            label="品质判定人">
                    </el-table-column>
                    <el-table-column
                            prop="zrgs"
                            label="责任归属">
                    </el-table-column>
                    <el-table-column
                            prop="clfs"
                            label="处理方式">
                    </el-table-column>
                    <el-table-column
                            prop="jarq"
                            label="结案日期">
                    </el-table-column>
                    <el-table-column
                            prop="yqrq"
                            label="逾期日期">
                    </el-table-column>
                    <el-table-column
                            prop="bz"
                            label="备注">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作">
                        <template>
                            <el-button size="mini" @click="dialogFormVisible = true">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <el-pagination
                    background
                    class="fenye"
                    layout="prev, pager, next"
                    :total="50">
            </el-pagination>
        </el-card>
        <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible" class="cc">
            <el-form :model="form">
                <el-form-item label="料件ERPbianhao" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.ljerpbh" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="型号" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.xh" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="仓库" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.ck" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="库位" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.kw" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="单位" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.dw" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="库存量" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.kcl" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="不良现象" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.blxx" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="判定结果" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.pdjg" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="判定日期" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.pdrq" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="品质判定人" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.pzpdr" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="责任归属" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.zrgs" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="处理方式" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.clfs" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="结案日期" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.jarq" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="逾期日期" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.yqrq" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.bz" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "tkmx",
        data(){
            return{
                form:{
                    ljerpbh:"",
                    xh:"",
                    ck:"",
                    kw:"",
                    dw:"",
                    kcl:"",
                    blxx:"",
                    pdjg:"",
                    pdrq:"",
                    pzpdr:"",
                    zrgs:"",
                    clfs:"",
                    jarq:"",
                    yqrq:"",
                    bz:""
                },
                formLabelWidth: '120px',
                dialogFormVisible:false,
                input:"",
                tableData:[
                    {
                        ljerpbh:"123",
                        xh:"23",
                        ck:"uek",
                        kw:"牛",
                        dw:"kg",
                        kcl:"99999",
                        blxx:"无",
                        pdjg:"正常",
                        pdrq:"2019-07-05",
                        pzpdr:"张三",
                        zrgs:"小店区",
                        clfs:"222",
                        jarq:"2019-07-05",
                        yqrq:"2019-07-05",
                        bz:"无"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .tkmx .tkmx-header{
        width: 100%;
    }
    .tkmx .tkmx-right{
        width:30%;
        float: right;
        margin-bottom:20px;
    }
    .tkmx .fenye{
        margin-top:20px;
    }
</style>