<template>
  <div class="denglu">
    <!--走马灯-->
    <!--<template>-->
      <!--<el-carousel indicator-position="none" class="bj" height="100%" :autoplay="true">-->
        <!--<el-carousel-item v-for="(item,index) in imgs" :key="index">-->
          <!--<img :src="item.url" alt="" class="tu">-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <!--<div class="ceng"></div>-->
    <!--</template>-->

    <!--swiper-->
    <div class="dbj-banner">
      <div class="swiper-container swiper00">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="width: 100%;height: 100%">
            <img src="http://121.42.234.123:8080/public/static/images/banner_1.jpg" alt="">
          </div>
          <div class="swiper-slide" style="width: 100%;height: 100%">
            <img src="http://121.42.234.123:8080/public/static/images/banner_2.jpg" alt="">
          </div>
          <div class="swiper-slide" style="width: 100%;height: 100%">
            <img src="http://121.42.234.123:8080/public/static/images/banner_3.jpg" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="daa">
      <img src="./img/1.png" alt="">
      <div class="da-xia">
        <div class="da-xia-shang">
          <div class="tou">管理中心</div>
          <el-form label-width="80px" label-height="-20px" :model="ruleForm" class="kuan" :rules="rules"  ref="ruleForm">
            <el-form-item prop="name">
              <i class="el-icon-s-custom"></i>
              <el-input v-model="ruleForm.name" placeholder="用户名" type="text"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <i class="el-icon-lock"></i>
              <el-input v-model="ruleForm.pass" placeholder="密码" type="password"></el-input>
            </el-form-item>
            <el-form-item prop="yzm">
                  <!--<el-input type="text" v-model="ruleForm.code" class="code"  placeholder="请输入您的验证码"></el-input>-->
              <el-input v-model="ruleForm.code" placeholder="验证码" type="text"></el-input>
                <div class="login-code" @click="refreshCode">
                  <!--验证码组件-->
                  <yzm1 :identifyCode="identifyCode"></yzm1>
                </div>
              <!--<i class="el-icon-lock"></i>-->
              <!--<el-input v-model="ruleForm.yzm" placeholder="验证码" style="width: 100px" type="text"></el-input>-->
            </el-form-item>
            <span style="color:#fff;font-size: 14px;float: right;margin-right: 100px">忘记密码？</span>
            <el-form-item>
              <el-button type="primary" @click="dl(ruleForm)">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import swiper from 'swiper';
  import yzm1  from '@/components/yzm1/yzm1.vue'

export default {
  components:{
    yzm1
  },
  name: 'denglu',
      // 走马灯图片
      // imgs:[
      //   {url:'http://121.42.234.123:8080/public/static/images/banner_1.jpg'},
      //   {url:'http://121.42.234.123:8080/public/static/images/banner_2.jpg'},
      //   {url:'http://121.42.234.123:8080/public/static/images/banner_3.jpg'}
      // ]
  created(){
    this.refreshCode()
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      } else {
        callback();
      }
    };
    var checkyzm = (rule, value, callback) => {
      if (value==='') {
        return callback(new Error('验证码不能为空'));
      } else if(value!==this.identifyCode && value!==''){
        return callback(new Error('验证码输入有误'));
      }else{
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'));
      } else {
        callback();
      }
    };
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      code:"",//text框输入的验证码
      ruleForm: {
        name:'',
        pass:'',
        yzm:'',
        code:''
      },
      rules: {
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        name: [
          {validator: checkAge, trigger: 'blur'}
        ],
        yzm: [
          {validator: checkyzm, trigger: 'blur'}
        ],
      }
    };

  },
  methods: {
    //验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
                this.randomNum(0, this.identifyCodes.length)
                ];
      }
      console.log(this.identifyCode);
    },

    dl:function() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$message({
            showClose: true,
            message: '恭喜您，登录成功',
            type: 'success'
          });
          // console.log(this.ruleForm);
          // console.log(this.$refs.ruleForm.arr.pass);
          this.$store.commit('denglu',this.ruleForm);
          this.$router.push("index");
        }else {
          // console.log('error submit!!');
          this.$message({
            showClose: true,
            message: '登录失败',
            type: 'error'
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted(){
    new swiper('.swiper00',{
      autoplay:{
        delay:2000,
        stopOnLastSlide:false,
        disableOnInteraction:true
      },
      speed:600,
      effect:"fade"
    });
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  }
}
</script>

<style scoped lang="less">
  /*验证码样式*/
  .code{
    width:124px;
    height:31px;
    border:1px solid rgba(186,186,186,1);
  }
  .login-code{
    cursor: pointer;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
  .dbj-banner{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .ceng{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .tu{
    width: 100%;
    height: 100%;
  }
  .bj{
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__indicators .el-carousel__indicators--horizontal .el-carousel__indicators--outside{
    height: 0;
  }
  .denglu{
  width: 100%;
  height: 100%;
}
.daa{
  width: 413px;
  height: 539px;
  float: right;
  margin-right: 300px;
  margin-top: 10px;
  position: fixed;
  top: 10px;
  right: 100px;
  z-index: 99999;
    img{
      margin-left: 100px;
    }
  .da-xia{
    width: 413px;
    height: 423px;
    margin-top: 30px;
    border: 1px aqua solid;
  }
  .da-xia-shang{
    width: 413px;
    height: 389px;
    padding: 0 10px;
    box-sizing: border-box;
    .tou{
      width: 413px;
      height: 81px;
      font-size: 25px;
      text-align: center;
      line-height: 81px;
      color: #fff;
    }
    .kuan .el-form-item i{
     font-size: 30px;
      float: left;
      margin-left: -50px;
      color: #fff;
    }
    .kuan .el-form-item .el-input{
      width: 230px;
    }
    .kuan .el-form-item .el-button{
      width: 220px;
      height: 55px;
      background: orange;
      border: orange 0 solid;
    }
    .kuan span:hover{
      color: red;
    }
  }




}

</style>
