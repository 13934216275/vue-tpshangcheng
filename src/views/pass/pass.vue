<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>修改密码</span>
        </div>
        <el-form :inline="true" :model="ruleForm" ref="ruleForm" class="demo-form-inline">
            <el-form-item label="账号" prop="name">
                <el-input v-model="ruleForm.name" placeholder="账号" style="margin-left: 35px"></el-input>
            </el-form-item>
            <el-form-item label="旧密码" prop="oldpass">
                <el-input v-model="ruleForm.oldpass" placeholder="旧密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newpass">
                <el-input v-model="ruleForm.newpass" placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item label="再次输入新密码" prop="renewpass">
                <el-input v-model="ruleForm.renewpass" placeholder="再次输入新密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    export default {
        name: "pass",
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    name:this.$store.state.arr.name,
                    oldpass: this.$store.state.arr.pass,
                    newpass: '',
                    renewpass: '',
                },
                rules: {
                    name: [
                        { validator: checkAge, trigger: 'blur' }
                    ],
                    oldpass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    newpass: [
                        { validator: checkAge, trigger: 'blur' }
                    ],
                    renewpass: [
                        { validator: checkAge, trigger: 'blur' }
                    ],
                }
            }
        },
        methods:{
            onSubmit() {
                console.log(this.$refs);

                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        if (this.ruleForm.name!=this.$store.state.arr.name) {
                            this.$message.error('账号输入有误,请重新输入');
                            return;
                        }
                        if (this.ruleForm.oldpass!=this.$store.state.arr.pass) {
                            this.$message.error('密码输入有误,请重新输入');
                            return;
                        }
                    } else {
                        console.log('error submit!!');
                        alert('失败');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
            // console.log(this.$store.state);
            // console.log(this.$refs);


        }
    }
</script>

<style scoped>
    .el-button{
        margin-top: 50px;
    }
    .el-input{
        margin-left: 20px;
    }
    .clearfix{
        margin-left: -1000px;
    }
    .el-form-item{
        float: left;
    }
    .el-input{
        width: 500px;
    }
    .box-card {
        width: 1120px;
    }
</style>