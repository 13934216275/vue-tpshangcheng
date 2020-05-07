<template>
    <div class="liebiao">
        <el-card class="box-card">
        <el-tabs v-model="activeName">
            <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
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
                        label="商品名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="sid"
                        label="商品id"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="用户名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="pl"
                        label="评论"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="hf"
                        label="是否回复"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="pf"
                        label="评分"
                        width="180">
                </el-table-column>
                <el-table-column
                        label="评论时间"
                        width="180"
                        prop="date">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope" style="float: left">
                        <el-button type="text"  size="small" dis @click="dialogFormVisible=true">编辑</el-button>
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
                <el-form-item label="ID" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.shu" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="商品名称" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="商品id" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.sid" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户名" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="评论" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.pl" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否回复" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.hf" autocomplete="off"></el-input>
            </el-form-item>
                <el-form-item label="评分" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.pf" autocomplete="off"></el-input>
            </el-form-item>
                <el-form-item label="评论时间" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.date" autocomplete="off"></el-input>
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
        name: "pingjia",
        data() {
            return {
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: '',
                value2: '',
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
                            sid:'99',
                            username:'可靠',
                            pl:'ghgjhgj',
                            hf:'是',
                            pf:'99',
                        },
                        {
                            date: '2016-05-04',
                            name: '王小虎',
                            shu:'2',
                            zhi: '54654',
                            sid:'99',
                            username:'可靠',
                            pl:'ghgjhgj',
                            hf:'是',
                            pf:'99',
                        }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        sid:'99',
                        username:'可靠',
                        pl:'ghgjhgj',
                        hf:'是',
                        pf:'99',
                        shu:'2',
                        zhi: '63435'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        sid:'99',
                        username:'可靠',
                        pl:'ghgjhgj',
                        hf:'是',
                        pf:'99',
                        shu:'2',
                        zhi: '4554'
                    }],
                form: {
                    name: '',
                    date: '',
                    zhi: '',
                    shu:'',
                    sid:'',
                    username:'',
                    pl:'',
                    hf:'',
                    pf:'',
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
            margin-bottom: 20px;
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