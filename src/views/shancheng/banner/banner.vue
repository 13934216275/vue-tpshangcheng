<template>
    <div class="liebiao">
        <el-card class="box-card">
        <el-tabs v-model="activeName">
            <el-button type="primary" @click="dialogFormVisible = true">添加轮播</el-button>
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
                        prop="id"
                        label="ID"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="标题"
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
                        label="位置分类"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="tj"
                        label="是否轮播"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="ress"
                        label="地址"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="时间"
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
            <el-dialog title="添加轮播图" :visible.sync="dialogFormVisible" class="cc">
                <el-form :model="form">
                    <el-form-item label="图片名" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="图片地址" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="图片地址" :label-width="formLabelWidth" size="small">
                        <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                    <el-form-item label="导航显示" :label-width="formLabelWidth" size="small">
                        <el-switch
                                v-model="value"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </el-form-item>
                    <el-form-item label="运费模板" :label-width="formLabelWidth" size="small" class="mm1">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option label="123" value="shanghai"></el-option>
                            <el-option label="456" value="shanghai"></el-option>
                            <el-option label="789" value="shanghai"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
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
    export default {
        name: "banner",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
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
                            id:'2',
                            ress:'小店区',
                            px:'33',
                            tj:'是',
                            fl:'嘻嘻哈哈',
                            img:require('@/components/img/1.1.png'),
                        },
                        {
                            date: '2016-05-04',
                            name: '王小虎',
                            icon:1,
                            id:'2',
                            ress:'小店区',
                            px:'33',
                            tj:'是',
                            fl:'嘻嘻哈哈',
                            img:require('@/components/img/1.2.png')
                        }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        id:'2',
                        ress:'小店区',
                        px:'33',
                        tj:'是',
                        icon:0,
                        fl:'嘻嘻哈哈',
                        img:require('@/components/img/1.4.png')
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        icon:1,
                        id:'2',
                        ress:'小店区',
                        px:'33',
                        tj:'是',
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
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
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
            float: right;
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