<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px;">
        <el-card class="box-card">
          <!-- 用户信息区域 -->
          <div class="user-info">
            <!-- 左侧照片 -->
            <div class="img">
              <img src="../assets/images/me.jpg" alt="" />
            </div>
            <div class="access">
              <h1>Admin</h1>
              <p>超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2022-2-2</span></p>
            <p>上次登录地点：<span>南京</span></p>
          </div>
        </el-card>
        <!-- 下方售卖数据 -->
        <el-card style="margin-top: 20px; height: 460px">
          <el-table :data="tableData" style="width: 100%">
            <!-- <el-table-column
              v-for="(val,key) in tableLabel"
              :key="index"
                prop="key"
              :label="tableLabel.name"
            ></el-table-column> -->
            <el-table-column
              v-for="(val, key) in tableLabel"
              :key="val"
              :prop="key"
              :label="val"
            />
          </el-table>
        </el-card>
      </el-col>

      <!-- 右方布局 -->
      <el-col :span="16" style="padding-left: 10px;">
        <!-- 订单部分 -->
        <div class="mall">
          <el-card
            v-for="val in countData"
            :key="val.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${val.icon}`"
              :style="{ background: val.color }"
            ></i>
            <div class="indent">
              <h2>￥{{ val.value }}</h2>
              <p>{{ val.name }}</p>
            </div>
          </el-card>
        </div>

        <el-card style="height: 280px"></el-card>
        <!-- 下方两个表 -->
        <div class="graph">
          <el-card style="height: 260px"></el-card>
          <el-card style="height: 260px"></el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from "../api";

export default {
  data() {
    return {
      // 手机售卖数据
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      //   订单
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData } = data.data;
      this.tableData = tableData;
    });
  },
};
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;

  .img {
    img {
      margin-right: 40px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .access {
      h1 {
        font-size: 32px;
        font-weight: normal;
        margin-bottom: 10px;
      }
      p {
        color: #999;
      }
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999;
    span {
      color: #666;
      margin-left: 60px;
    }
  }
}
.mall {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .indent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    p {
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card{
  width: 48%;

  }
}
</style>