<template>
     <div class="cwgl">
          <el-card class="box-card">
               <div slot="header" class="clearfix">
                    <span>余额统计</span>
               </div>
               <div  class="text item">
                    <div v-for="v in bgurls" class="ll">
                         <caiwuzujian  :titles="v.title" :nums="v.num"></caiwuzujian>
                    </div>
               </div>
          </el-card>
          <el-row>
               <el-col :span="12">
                    <el-card class="box-card">
                         <div slot="header" class="clearfix">
                              <span>余额分布图</span>
                         </div>
                         <div  >
                              <template>
                                   <ve-histogram :data="chartData" :tooltip="{type:''}"></ve-histogram>
                              </template>

                         </div>
                    </el-card>
               </el-col>
               <el-col :span="12">
                    <el-card class="box-card">
                         <div  >
                              <el-date-picker
                                      v-model="value1"
                                      type="daterange"
                                      range-separator="至"
                                      start-placeholder="开始日期"
                                      end-placeholder="结束日期">
                              </el-date-picker>
                              <el-button class="sx">筛选</el-button>
                         </div>
                         <el-table
                                 :data="tableData"
                                 style="width: 100%">
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
                                      prop="address"
                                      label="地址">
                              </el-table-column>
                         </el-table>
                    </el-card>
               </el-col>
          </el-row>
     </div>
</template>
<script>
     import caiwuzujian from "../../components/caiwuzujian/caiwuzujian";
     export default{
          components:{
               caiwuzujian,
          },
          data:function () {
               return{
                    bgurls:[
                         {num:"$4292",title:"会员消费"},
                         {num:"$4292",title:"会员充值"},
                         {num:"$4292",title:"退款存入"},
                         {num:"$4292",title:"提现"},
                         {num:"$4292",title:"冻结"},
                         {num:"$4292",title:"剩余余额"},
                    ],
                    chartData: {
                         columns: ['日期', '访问用户'],
                         rows: [
                              { '日期': '消费', '访问用户': 1393, },
                              { '日期': '充值', '访问用户': 3530,  },
                              { '日期': '退款', '访问用户': 2923,  },
                              { '日期': '提现', '访问用户': 1723,  },
                              { '日期': '冻结', '访问用户': 3792,  },
                         ]
                    },
                    value1:"",
                    tableData: [{
                         date: '2016-05-02',
                         name: '王小虎',
                         address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                         date: '2016-05-04',
                         name: '王小虎',
                         address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                         date: '2016-05-01',
                         name: '王小虎',
                         address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                         date: '2016-05-03',
                         name: '王小虎',
                         address: '上海市普陀区金沙江路 1516 弄'
                    }]
               }
          }
     }
</script>
<style  scoped >
     .cwgl .box-card{
          margin: 10px;
     }
     .cwgl .text{
          display: flex;
          justify-content: space-between;
     }
</style>