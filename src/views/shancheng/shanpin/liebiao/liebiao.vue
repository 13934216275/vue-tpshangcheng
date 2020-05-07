<template>
    <div class="liebiao">
        <el-card class="box-card">
    <el-tabs v-model="activeName">
        <router-link to="addd">
        <el-button type="primary">增加</el-button>
        </router-link>
        <div class="sou">
            <el-input placeholder="请输入内容" v-model="input2">
                <template slot="append">搜索</template>
            </el-input>
        </div>
        <template>
            <el-select v-model="value1" placeholder="请选择" class="xz">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value1">
                </el-option>
            </el-select>
        </template>
        <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left"><div @click="qb">全部商品</div></el-radio-button>
            <el-radio-button label="right"><div @click="ysj">已上架</div></el-radio-button>
            <el-radio-button label="top"><div @click="wsj">未上架</div></el-radio-button>
        </el-radio-group>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="img"
                label="缩略图"
                width="180">
            <template slot-scope="scope">
                <img :src="scope.row.img" alt="">
            </template>
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
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
            <el-dialog title="编辑商品规格" :visible.sync="dialogFormVisible" class="cc">
                <el-form :model="form">
                    <el-form-item label="属性名" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.date" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.address" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="图" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.img" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.icon" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer" style="float: right;margin-top: -30px">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
           </el-card>
    </div>
</template>

<script>
    import kaiguan from '@/components/kaiguan/kaiguan.vue'
    export default {
        name: "fenlei",
        components:{
            kaiguan
        },
        data() {
            return {
                options: [{
                    value1: '选项1',
                    label: '黄金糕'
                },
                    {
                    value1: '选项2',
                    label: '双皮奶'
                },
                    {
                    value1: '选项3',
                    label: '蚵仔煎'
                },
                    {
                    value1: '选项4',
                    label: '龙须面'
                },
                    {
                    value1: '选项5',
                    label: '北京烤鸭'
                }],
                value1:'',
                labelPosition: 'left',
                value: true,
                input1: '',
                input2: '',
                input3: '',
                select: '',
                activeName: 'first',
                dialogFormVisible:false,
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        icon:0,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        icon:1,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        icon:0,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        icon:1,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1516 弄'
                    }],
                tableData1: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        icon:0,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        icon:1,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        icon:0,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        icon:1,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1516 弄'
                    }],
                tableData2: [
                    {
                        date: '2016-05-02',
                        name: '马志刚',
                        icon:0,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-04',
                        name: '马志刚',
                        icon:1,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '马志刚',
                        icon:0,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '马志刚',
                        icon:1,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1516 弄'
                    }],
                tableData3: [
                    {
                        date: '2016-05-02',
                        name: '陈苗',
                        icon:0,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-04',
                        name: '陈苗',
                        icon:1,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '陈苗',
                        icon:0,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '陈苗',
                        icon:1,
                        img:require('@/components/img/1.1.png'),
                        address: '上海市普陀区金沙江路 1516 弄'
                    }],
                form: {
                    name: '',
                    icon:'',
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
            qb() {
                    this.tableData=this.tableData1;
                },
                ysj () {
                    this.tableData=this.tableData2;
                },
                wsj () {
                    this.tableData=this.tableData3;
            }
        }
    }
</script>

<style scoped lang="less">
    .cell img{
        width: 50px;
    }
.liebiao{
    .el-button{
       float: left;margin-bottom: 40px;
    }
    .xz{
        float: right;
        margin-top: 40px;
        margin-right: -220px;
    }
    .sou{
        float: right;
        margin-right: 30px;
        .el-input{
            width: 400px;
        }

    }
    .el-radio-group{
        margin-top: 50px;
        margin-left: -70px;
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