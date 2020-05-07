import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import denglu from "./components/denglu.vue"
import index from "./components/index.vue"
import shouye from "./views/shouye/shouye.vue"
import xitong from "./views/shezhi/xitong/xitong.vue"
import adminlist from "./views/shezhi/xitong/adminlist/adminlist.vue"
import gyslist from "./views/shezhi/xitong/gyslist/gyslist.vue"
import juese from "./views/shezhi/xitong/juese/juese.vue"
import qxzy from "./views/shezhi/xitong/qxzy/qxzy.vue"
import xtsz from "./views/shezhi/xitong/xtsz/xtsz.vue"
import shanpin from "./views/shancheng/shanpin/shanpin.vue"
import fenlei from "./views/shancheng/shanpin/fenlei/fenlei.vue"
import guige from "./views/shancheng/shanpin/guige/guige.vue"
import huishouzhan from "./views/shancheng/shanpin/huishouzhan/huishouzhan.vue"
import liebiao from "./views/shancheng/shanpin/liebiao/liebiao.vue"
import pingjia from "./views/shancheng/shanpin/pingjia/pingjia.vue"
import pinpai from "./views/shancheng/shanpin/pinpai/pinpai.vue"
import shuxing from "./views/shancheng/shanpin/shuxing/shuxing.vue"
import sxadd from "./views/shancheng/shanpin/shuxing/sxadd.vue"
import addd from "./views/shancheng/shanpin/liebiao/addd.vue"
import dingdan from "./views/shancheng/dingdan/dingdan.vue"
import dingdanlist from "./views/shancheng/dingdan/dingdanlist/dingdanlist.vue"
import huanhuolist from "./views/shancheng/dingdan/huanhuolist/huanhuolist.vue"
import shouhoulist from "./views/shancheng/dingdan/shouhoulist/shouhoulist.vue"
import tuikuanlist from "./views/shancheng/dingdan/tuikuanlist/tuikuanlist.vue"
import banner from "./views/shancheng/banner/banner.vue"
import vip from "./views/shancheng/vip/vip.vue"
import caiwu from "./views/caiwu/caiwu.vue"
import pass from "./views/pass/pass.vue"
import tjjs from "./views/tjjs/tjjs.vue"
import jiaoyi from "./views/tjjs/jiaoyi/jiaoyi.vue"
import tuiku from "./views/tjjs/tuiku/tuiku.vue"
import daikuan from "./views/tjjs/daikuan/daikuan.vue"
import xiaoshou from "./views/tjjs/xiaoshou/xiaoshou.vue"
import wuliu from "./views/wuliu/wuliu.vue"
import fahuoadres from "./views/wuliu/fahuoadres/fahuoadres.vue"
import kd from "./views/wuliu/kd/kd.vue"
import ps from "./views/wuliu/ps/ps.vue"
import zt from "./views/wuliu/zt/zt.vue"

const router=new VueRouter({
    routes:[
        {
            path:'/',
            name:"denglu",
            meta:{
                title:"denglu",
                icon:"",
            },
            component:denglu
        },
        {
            path:'/index',
            name:"index",
            meta:{
                title:"主页",
                icon:"",
            },
            component:index,
            redirect:"shouye",
            children:[
                {
                    path:'/shouye',
                    name:"shouye",
                    meta:{
                        title:"概览",
                        icon:"el-icon-s-home",
                    },
                    component:shouye,
                },
                {
                    path:'/banner',
                    name:"banner",
                    meta:{
                        title:"轮播图",
                        icon:"el-icon-s-home",
                    },
                    component:banner,
                },
                {
                    path:'/vip',
                    name:"vip",
                    meta:{
                        title:"会员",
                        icon:"el-icon-s-home",
                    },
                    component:vip,
                },
                {
                    path:'/caiwu',
                    name:"caiwu",
                    meta:{
                        title:"财务",
                        icon:"el-icon-setting",
                    },
                    component:caiwu,
                },
                {
                    path:'/addd',
                    name:"addd",
                    meta:{
                        isshow:true,
                        title:"列表添加",
                        icon:"el-icon-s-home",
                    },
                    component:addd,
                },
                {
                    path:'/sxadd',
                    name:"sxadd",
                    meta:{
                        isshow:true,
                        title:"属性添加",
                        icon:"el-icon-s-home",
                    },
                    component:sxadd,
                },
                {
                    path: '/xitong',
                    name: "xitong",
                    meta: {
                        title: "系统",
                        icon: "el-icon-s-home",
                    },
                    component: xitong,
                    redirect:"/adminlist",
                    children:[
                        {
                            path: '/adminlist',
                            name: "adminlist",
                            meta: {
                                title: "管理员列表",
                                icon: "",
                            },
                            component: adminlist,
                        },
                        {
                            path: '/gyslist',
                            name: "gyslist",
                            meta: {
                                title: "供应商列表",
                                icon: "",
                            },
                            component: gyslist,
                        },
                        {
                            path: '/juese',
                            name: "juese",
                            meta: {
                                title: "角色管理",
                                icon: "",
                            },
                            component: juese,
                        },
                        {
                            path: '/qxzy',
                            name: "qxzy",
                            meta: {
                                title: "权限资源管理",
                                icon: "",
                            },
                            component: qxzy,
                        },
                        {
                            path: '/xtsz',
                            name: "xtsz",
                            meta: {
                                title: "系统设置",
                                icon: "",
                            },
                            component: xtsz,
                        },
                    ]
                },
                {
                    path:'/tjjs',
                    name:"tjjs",
                    meta:{
                        title:"统计结算",
                        icon:"el-icon-setting",
                    },
                    component:tjjs,
                    redirect:"/jiaoyi",
                    children:[
                        {
                            path: '/jiaoyi',
                            name: "jiaoyi",
                            meta: {
                                title: "交易退库",
                                icon: "",
                            },
                            component: jiaoyi,
                        },
                        {
                            path: '/tuiku',
                            name: "tuiku",
                            meta: {
                                title: "退库明细",
                                icon: "",
                            },
                            component: tuiku,
                        },
                        {
                            path: '/daikuan',
                            name: "daikuan",
                            meta: {
                                title: "贷款明细",
                                icon: "",
                            },
                            component: daikuan,
                        },
                        {
                            path: '/xiaoshou',
                            name: "xiaoshou",
                            meta: {
                                title: "销售金额",
                                icon: "",
                            },
                            component: xiaoshou,
                        },
                    ]
                },
                {
                    path:'/wuliu',
                    name:"wuliu",
                    meta:{
                        title:"物流",
                        icon:"el-icon-setting",
                    },
                    component:wuliu,
                    redirect:"/fahuoadres",
                    children:[
                        {
                            path: '/fahuoadres',
                            name: "fahuoadres",
                            meta: {
                                title: "发货地址",
                                icon: "",
                            },
                            component: fahuoadres,
                        },
                        {
                            path: '/kd',
                            name: "kd",
                            meta: {
                                title: "快递公司",
                                icon: "",
                            },
                            component: kd,
                        },
                        {
                            path: '/ps',
                            name: "ps",
                            meta: {
                                title: "物流配送",
                                icon: "",
                            },
                            component: ps,
                        },
                        {
                            path: '/zt',
                            name: "zt",
                            meta: {
                                title: "自提列表",
                                icon: "",
                            },
                            component: zt,
                        },
                    ]
                },
                {
                    path: '/shanpin',
                    name: "shanpin",
                    meta: {
                        title: "商品",
                        icon: "el-icon-s-home",
                    },
                    component: shanpin,
                    redirect:"/fenlei",
                    children:[
                        {
                            path: '/fenlei',
                            name: "fenlei",
                            meta: {
                                title: "分类",
                                icon: "",
                            },
                            component: fenlei,
                        },
                        {
                            path: '/guige',
                            name: "guige",
                            meta: {
                                title: "规格",
                                icon: "",
                            },
                            component: guige,
                        },
                        {
                            path: '/huishouzhan',
                            name: "huishouzhan",
                            meta: {
                                title: "回收站",
                                icon: "",
                            },
                            component: huishouzhan,
                        },
                        {
                            path: '/liebiao',
                            name: "liebiao",
                            meta: {
                                title: "列表",
                                icon: "",
                            },
                            component: liebiao,
                        },
                        {
                            path: '/pingjia',
                            name: "pingjia",
                            meta: {
                                title: "评价",
                                icon: "",
                            },
                            component: pingjia,
                        },
                        {
                            path: '/pinpai',
                            name: "pinpai",
                            meta: {
                                title: "品牌",
                                icon: "",
                            },
                            component: pinpai,
                        },
                        {
                            path: '/shuxing',
                            name: "shuxing",
                            meta: {
                                title: "属性",
                                icon: "",
                            },
                            component: shuxing,
                        },
                    ]
                },
                {
                    path: '/dingdan',
                    name: "dingdan",
                    meta: {
                        title: "订单",
                        icon: "el-icon-s-home",
                    },
                    component: dingdan,
                    redirect:"/dingdanlist",
                    children:[
                        {
                            path: '/dingdanlist',
                            name: "dingdanlist",
                            meta: {
                                title: "订单列表",
                                icon: "",
                            },
                            component: dingdanlist,
                        },
                        {
                            path: '/huanhuolist',
                            name: "huanhuolist",
                            meta: {
                                title: "换货列表",
                                icon: "",
                            },
                            component: huanhuolist,
                        },
                        {
                            path: '/shouhoulist',
                            name: "shouhoulist",
                            meta: {
                                title: "售后列表",
                                icon: "",
                            },
                            component: shouhoulist,
                        },
                        {
                            path: '/tuikuanlist',
                            name: "tuikuanlist",
                            meta: {
                                title: "退款列表",
                                icon: "",
                            },
                            component: tuikuanlist,
                        },
                    ]
                },
                {
                    path:'/pass',
                    name:"pass",
                    meta:{
                        isshow:true,
                        title:"修改密码",
                        icon:"el-icon-setting",
                    },
                    component:pass,
                },
            ]

        },
    ]
});
export default router;