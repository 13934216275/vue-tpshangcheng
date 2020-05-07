<template>
    <div class="fl">
        <el-card class="box-card">
        <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
                  type="text"
                  size="mini"
                 @click="dialogFormVisible = true">
            添加
          </el-button>
             <el-button
                     type="text"
                     size="mini"
                     @click="dialogFormVisible1 = true">
            修改
          </el-button>
          <el-button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
        </el-tree>
        <el-dialog title="添加商品分类" :visible.sync="dialogFormVisible" class="cc">
            <el-form :model="form">
                <el-form-item label="商品名称" :label-width="formLabelWidth" size="small">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="导航显示" :label-width="formLabelWidth" size="small">
                    <el-switch
                            v-model="value"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary"  @click="() => append(data)">确 定</el-button>
            </div>
        </el-dialog>
            <el-dialog title="修改商品分类" :visible.sync="dialogFormVisible1" class="cc">
                <el-form :model="form1">
                    <el-form-item label="商品名称" :label-width="formLabelWidth" size="small">
                        <el-input v-model="form1.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="导航显示" :label-width="formLabelWidth" size="small">
                        <el-switch
                                v-model="value"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
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
        name: "fenlei",
        data() {
            const data = [
                {
                    id: 1,
                    label: '卧室系列',
                    children: [
                        {
                            id: 4,
                            label: '皮床',
                        },
                        {
                            id: 99,
                            label: '布床',
                        },
                    ]
                },
                {
                    id: 2,
                    label: '客餐厅系列',
                    children: [{
                        id: 5,
                        label: '布沙发'
                    },
                        {
                            id: 6,
                            label: '皮沙发'
                        }]
                },
                {
                    id: 3,
                    label: '产品',
                    children: [{
                        id: 7,
                        label: '新品首发'
                    },
                        {
                            id: 8,
                            label: '热销'
                        }]
                }]
            return {
                data: JSON.parse(JSON.stringify(data)),
                data1: JSON.parse(JSON.stringify(data)),
                dialogFormVisible:false,
                dialogFormVisible1:false,
                value: true,
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
                form1: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
            }
        },
        methods: {
            append(data) {
                const newChild = {label: '{{form.name}}', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
                this.dialogFormVisible = false;
            },
             bj(){

             },
            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },


        }
    }
</script>

<style>
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>