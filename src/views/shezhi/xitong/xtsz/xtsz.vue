<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>系统设置</span>
            </div>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="网站名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选择语言">
            <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
            <el-col :span="10">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 60%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="-8" style="margin-left: -150px">-</el-col>
            <el-col :span="10">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 60%;margin-left: -130px"></el-time-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="开启安全模式">
            <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="网站风格">
            <el-radio-group v-model="form.resource">
                <el-radio label="绿色"></el-radio>
                <el-radio label="红色"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="网站简介">
            <el-input type="textarea" v-model="form.desc" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>重置</el-button>
        </el-form-item>
    </el-form>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style scoped lang="less">
   .el-input{
       width: 500px;
   }
    .el-date-picker{
        width: 300px;
    }
</style>