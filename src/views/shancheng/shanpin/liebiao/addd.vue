<template>
    <div class="ttt">
        <el-card class="box-card">
        <el-form :model="form">
            <el-form-item label="商品名称" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" :label-width="formLabelWidth" size="small" class="mm">
                <el-select v-model="form.region" placeholder="请选择商品分类">
                    <el-option label=" " value="shanghai"></el-option>
                    <el-option label="12" value="beijing"></el-option>
                </el-select>
                <el-select v-model="form.region" placeholder="请选择商品分类">
                    <el-option label="请选择商品分类" value="shanghai"></el-option>
                </el-select>
                <el-select v-model="form.region" placeholder="请选择商品分类">
                    <el-option label="请选择商品分类" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品简介" :label-width="formLabelWidth" size="small" style="width: 780px">
                <el-input v-model="form.name" autocomplete="off" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="商品货号" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <span>如果不填会自动生成</span>
            <el-form-item label="SPU" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="SKU" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品品牌" :label-width="formLabelWidth" size="small" class="cm">
                <el-select v-model="form.region" placeholder="所有品牌">
                    <el-option label="耐克 " value="shanghai"></el-option>
                    <el-option label="阿迪" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="供应商" :label-width="formLabelWidth" size="small" class="mc">
                <el-select v-model="form.region" placeholder="不指定供应商属于本店商品">
                    <el-option label="千岛店 " value="shanghai"></el-option>
                    <el-option label="海岛店" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="本地售价" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="市场价" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="成本价" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="图片上传" :label-width="formLabelWidth" size="small">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="商品重量" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <span>务必设置商品重量, 用于计算物流费.以克为单位</span>
            <el-form-item label="商品体积" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <span>务必设置商品体积, 用于计算物流费.以立方米为单位</span>
            <el-form-item label="是否包邮" :label-width="formLabelWidth" size="small" style="margin-top: 10px">
                <el-switch
                        v-model="value1"
                        active-text="是"
                        inactive-text="否">
                </el-switch>
            </el-form-item>
            <el-form-item label="运费模板" :label-width="formLabelWidth" size="small" class="mm1">
                <el-select v-model="form.region" placeholder="请选择商品分类">
                    <el-option label="123" value="shanghai"></el-option>
                    <el-option label="456" value="shanghai"></el-option>
                    <el-option label="789" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="总库存" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.shu" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品关键字" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <span>多个关键词，用空格隔开</span>
            <el-form-item label="是否为虚拟商品" :label-width="formLabelWidth" size="small" style="margin-top: 10px">
                <el-switch
                        v-model="value2"
                        active-text="是"
                        inactive-text="否">
                </el-switch>
            </el-form-item>
            <el-form-item label="虚拟销售量" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <span>虚拟销售量（请输入0~9999999）：虚拟销售量 + 真实销量</span>
            <el-form-item label="虚拟收藏量" :label-width="formLabelWidth" size="small">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <span>虚拟收藏量（请输入0~9999999）：虚拟收藏量 + 真实收藏量</span>
            <el-form-item label="商品详情描述" :label-width="formLabelWidth" size="small">
            <template>
                <quill-editor
                        v-model="content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                        @change="onEditorChange($event)" style="margin-top: 15px;height: 300px">
                </quill-editor>
            </template>
            </el-form-item>

        </el-form>
        <div style="margin-top: 90px;float: right;margin-right: 30px;margin-bottom: 10px">
            <el-button type="primary">确 定</el-button>
        </div>
           </el-card>
    </div>

</template>

<script>
    export default {
        name: "addd",
        data() {
            return {
                content:null,
                editorOption:{},
                fileList: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }],
                labelPosition: 'left',
                ue: null,
                ueId: `J_ueditorBox_${new Date().getTime()}`,
                ueContent: '',
                prefixUrl: '',
                dialogVisible: false,
                value: true,
                value1: true,
                value2: true,
                input1: '',
                input2: '',
                input3: '',
                select: '',
                activeName: 'first',
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    shu: 100,
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
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            },
            getContent() {
                this.ue.ready(() => {
                    this.ueContent = this.ue.getContent()
                })
                return this.ueContent;
            },
            setContent(value) {
                this.ue.ready(() => {
                    this.ue.setContent(value)
                })
            },
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            }

        }
    }
</script>

<style scoped lang="less">
    .ttt {
        span {
            margin-left: 120px;
            margin-top: -10px;
        }

        .mm1 {
            margin-left: 200px;
            margin-top: -50px;
        }
        .el-input{
            width: 650px;
        }
        .dialog-footer{
            .el-button{
                float: right;
                margin-top: 10px;
            }
        }
    }
</style>