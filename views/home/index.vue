<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <!-- 用户信息部署 -->
      <el-card shard="hover">
        <div class="user" slot="header">
          <img :src="userImg" />
          <div class="userinfo" style="float: right; padding: 60px 50px">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>登录时间： <span>2021-07-19</span></p>
          <p>登录地点： <span>China</span></p>
        </div>
      </el-card>

      <!-- 销售数据部分 -->
      <el-card style="margin-top: 20px; height: 480px">
        <el-table :data="tableData">
          <el-table-column fixed v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{ dispaly: 'fix', padding: 0 }">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ backgroud: item.color }"></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="text">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height:280px "></el-card>
      <div class="graph">
        <el-card class="table1">
          <!-- 引入echarts图表 -->
          <div style="height: 280px" ref="echarts"> 

          </div>
        </el-card>
        <el-card class="table2"></el-card>
      </div>
    </el-col>


  </el-row>
</template>

<style lang="less" scoped>
.num {
  width: 280px;

  .i {
    width: 100vh;
    color: rebeccapurple;
    background: #fff;
    size: 100px;
  }
}

.graph {
  margin-top: 20px;
  .el-card {
    height: 260px;
    width: 450px;
    margin-top: 20px;
    display: float;
  }

}
</style>

<script>
import {getData} from '../../api/data.js'
import * as echarts from 'echarts'

export default {
  name: "UserPage",
  data() {
    return {
      userImg: require("../../src/assets/images/user1.png"),
      tableData: [
        {
          name: "oppo",
          total: 20000,
          month: 300,
          addr: 'sh'
        },
        {
          name: "小米",
          total: 1000,
          month: 1300,
          addr: 'bj'
        },
        {
          name: "小1",
          total: 1000,
          month: 1300,
          addr: 'bj'
        },
        {
          name: "米2",
          total: 1000,
          month: 1300,
          addr: 'bj'
        },
      ],
      tableLabel: {
        name: "品牌",
        total: "总销售",
        month: "本月销售",
        addr: '地区'
      },
      countData: [
        {
          name: '支付订单',
          value: 3330,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: '未支付订单',
          value: 130,
          icon: 'star-on',
          color: '#ffb918',
        },
        {
          name: '收藏订单',
          value: 30,
          icon: 's-goods',
          color: '#5ab31e',
        },
      ]
    };
  },
  mounted(){
    getData().then(res => {
      const { code, data} = res.data
      if (code ===200){
        // this.tableData = data.tableData
        const order = data.orderData
        const xData = order.data
        const keyArray = Object.keys(order[0])
        const series = []
        keyArray.forEach(key => {
          series.push({
            name: key, 
            data: order.map(item=>item[key]),
            type: 'line'
          })
          // console.log(order.map(item))
        })
        const option = {
          xAxis: {
            data: xData
          },
          yAxis: {},
          legend: {
            data: keyArray
          },
          series
        }
        const E = echarts.init(this.$ref.echarts)
        E.setOption(option)
      }
    })
  },
};
</script>
