<template>
    <div class="liebiao">
        <el-card class="box-card">
        <el-tabs v-model="activeName">
<div class="xuan">
    <template>
        <el-select v-model="value1" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value1">
            </el-option>
        </el-select>
    </template>
</div>
            <div class="sou">
                <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">搜索</template>
                </el-input>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="商品名称"
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
                        prop="fl"
                        label="分类">
                </el-table-column>
                <el-table-column
                        label="状态"
                        width="180">
                    <template slot-scope="scope">
                        <kaiguan :icon="scope.row.icon"></kaiguan>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope" style="float: left">
                        <el-button type="text"  size="small" dis>恢复</el-button>
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
           </el-card>
    </div>
</template>

<script>
    import kaiguan from '@/components/kaiguan/kaiguan.vue'
    export default {
        name: "huishouzhan",
        components:{
            kaiguan
        },
        data() {
            return {
                options: [{
                    value1: '选项1',
                    label: '黄金糕'
                }, {
                    value1: '选项2',
                    label: '双皮奶'
                }, {
                    value1: '选项3',
                    label: '蚵仔煎'
                }, {
                    value1: '选项4',
                    label: '龙须面'
                }, {
                    value1: '选项5',
                    label: '北京烤鸭'
                }],
                value1:'',
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
                            icon:0,
                            fl:'嘻嘻哈哈',
                            img:require('@/components/img/1.1.png')
                        },
                        {
                            date: '2016-05-04',
                            name: '王小虎',
                            icon:1,
                            fl:'嘻嘻哈哈',
                            img:require('@/components/img/1.2.png')
                        }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        icon:0,
                        fl:'嘻嘻哈哈',
                        img:require('@/components/img/1.4.png')
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        icon:1,
                        fl:'嘻嘻哈哈',
                        img:require('@/components/img/1.3.png')
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
    .cell img{
        width: 50px;
    }
    .liebiao{
        .el-button{
            margin-bottom: 15px;
        }
        .sou{
            float: left;
            margin-bottom: 20px;
            .el-input{
                width: 400px;
            }
        }
        .xuan{
            float: right;
            margin-right: 20px;
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