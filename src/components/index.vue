<template>
    <el-container class="da">
        <el-aside class="ce" width="auto">
            <div>
                <img src="./img/2.png" alt="" style="margin-top: 10px;margin-left: 10px">
            </div>
            <el-menu  :default-active="yyy" :router="true" class="el-menu-vertical-demo"  :collapse="isCollapse">
                <template v-for="(v,i) in arr" v-if="v.children && v.children.length>0">
                    <el-submenu :index="v.name">
                        <template slot="title">
                            <i :class="v.meta.icon"></i>
                            <span slot="title" style="color: #fff;">{{v.meta.title}}</span>
                        </template>
                        <el-menu-item style="background: #2f3e4e" v-for="(val,index) in v.children" :index="val.name">
                            <i :class="val.meta.icon"></i>
                            <span slot="title">{{val.meta.title}}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else-if="!v.meta.isshow">
                    <el-menu-item  :index="v.name">
                        <i :class="v.meta.icon"></i>
                        <span slot="title">{{v.meta.title}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header class="tou">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <i class="el-icon-ego-menu" :class="{activ:isCollapse}" @click="isCollapse=!isCollapse" style="font-size: 25px"></i>
                </el-radio-group>
                <div class="yous">
                    <div class="yous-zuo">
<span class="bz">帮助手册</span>
                    <p class="ad">admin</p>
                    <h6 class="gl">管理员</h6>
                        <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img src="./img/3.png" alt=""><i class="el-icon-arrow-down el-icon--right"></i>
      </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <div class="zui">
                                    <p>最后登录</p>
                                        <router-link to="/pass">
                                            <div class="yaoshi" ></div>
                                        </router-link>

                                    </div>
                                    <div class="zhong">
                                        2019-07-06 21:04:36
                                        <span>(IP: 183.184.145.36 )</span>
                                    </div>
                               <div class="chan">
                                    <p>常用操作</p>
                                   <div class="tianjia"></div>
                               </div>
                                    <div class="mo">站点设置</div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

                </div>
                    <div class="yous-you">
                        <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    我的工作台<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="denglu"><img src="http://121.42.234.123:8080/public/static/images/icon-exit.png" alt="" style="width: 15px;height: 15px">退出系统</el-dropdown-item>
                                <el-dropdown-item><img src="http://121.42.234.123:8080/public/static/images/cle-cache.png" alt="" style="width: 15px;height: 15px">更新缓存</el-dropdown-item>
                                <el-dropdown-item><img src="http://121.42.234.123:8080/public/static/images/icon-switch.png" alt="" style="width: 15px;height: 15px">切换小程序</el-dropdown-item>
                                <el-dropdown-item><img src="http://121.42.234.123:8080/public/static/images/icon-home.png" alt="" style="width: 15px;height: 15px">打开商城</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </el-header>
            <el-main class="nr">
                <!--面包屑-->
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="v in $route.matched" :to="{ path: v.path}" >{{v.meta.title}}</el-breadcrumb-item>
                </el-breadcrumb>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                isCollapse: false,
                arr:[],
                // actives:this.$route.name,
                yyy:this.$route.name
            };
        },
        watch:{
            $route:function (newVal,oldVal) {
                this.yyy=newVal.name;
            }
        },
        created(){
            console.log(this.$router);
            console.log("........",this.$route);
            this.arr=this.$router.options.routes[1].children;
            // console.log(this.$router);
        },
        methods: {
            handleCommand(command) {
                this.$router.push({
                    name:command,
                });
            },
            xiugai(){

            }
        }
    }
</script>

<style lang="less">
    .el-dropdown-menu__item .zhong{
        width: 220px;
        height: 30px;
        line-height: 15px;
    }
    .el-dropdown-menu__item .chan{
        width: 220px;
        height: 30px;
        position: relative;
        border-bottom: 1px #ccc dashed;
    }
    .el-dropdown-menu__item .zui{
        width: 220px;
        height: 30px;
       position: relative;
        border-bottom: 1px #ccc dashed;
    }
    .el-dropdown-menu__item .chan .tianjia{
        background: transparent url("http://121.42.234.123:8080/public/static/images/combine_img.png"
        ) no-repeat;
        width: 60px;
        height: 16px;
        float: right;
        border-radius: 2px;
        background-position: -60px -260px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 0;
    }
    .el-dropdown-menu__item .zui .yaoshi{
        background: transparent url("http://121.42.234.123:8080/public/static/images/combine_img.png"
        ) no-repeat;
        width: 60px;
        height: 16px;
        float: right;
        border-radius: 2px;
        background-position: 0px -260px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 0;
    }
    .yous{
        width: 350px;
        height:60px;
        float: right;
        color: #fff;
        .yous-zuo{
            width: 180px;
            height: 60px;
            position: relative;
            overflow: hidden;
            border-right:1px #ccc solid;
            .bz{
               position: absolute;
                top: 10px;
            }
            .ad{
                font-size: 16px;
                margin-top: 7px;
                margin-left: 70px;
            }
            .gl{
                margin-left: 70px;
                font-size: 18px;
            }
            .el-dropdown-link{
                position: absolute;
                top: -50px;
                left: -20px;
                i{
                    position: absolute;
                    top: 10px;
                    color: #fff;
                }
            }
        }
        .yous-you{
            position: relative;
          .el-dropdown-link{
              font-size: 16px;
              margin-left: 15px;
              margin-top: -60px;
              color: #fff;
          }
        }
    }
    .el-submenu__title:hover{
        background:#2f3e4e;
    }
    .activ{
        transform: rotate(90deg);
    }
    .el-icon-ego-menu{
        color: #fff;
    }
    .el-dropdown{
        float: right;
        margin-top: 20px;
        margin-right: 30px;
    }
    .el-radio-group{
        float: left;
        margin-top: 15px;
    }
    .el-menu{
        border-right:0;
    }
    .el-menu-item.is-active{
        background:#2f3e4e;
        color: blue;
    }
    .el-breadcrumb{
        margin-bottom: 15px;
    }
    .el-submenu__title span{
        color: #fff;
    }
    .da{
        width: 100%;
        height: 100%;
    }
    .ce{
        background:#2f3e4e;

    }
    .el-menu{
        background-color: #2f3e4e;
    }
   .da .tou{
        background:#2f3e4e;
    }
    .nr{
        background:#f7f7f7;
    }
    .el-menu-item {
        color: #fff;
    }
    .el-menu-item:hover{
        background: #2f3e4e;
    }
    .el-submenu_title:hover{
        background:#2f3e4e;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #000;
        margin-right: 20px;
        float: right;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>

