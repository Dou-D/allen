<template>
    <div class="header">
        <div class="left">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <span class="text">首页</span>
        </div>
        <div class="right">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="../assets/images/me.jpg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods:{
        handleMenu(){
            //调用tab/modifiCollapse函数
            this.$store.commit('modifiCollapse')
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #333;

    .left {
        .text {
            color: #fff;
            font-size: 14px;
            margin-left: 10px;
        }
    }

    .right {
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>