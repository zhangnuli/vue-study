<template>
<div class="footer">
    <router-link to="home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
    </router-link>
    <router-link to="list">
        <i class="iconfont icon-liebiao"></i>
        <span>列表</span>
    </router-link>
    <router-link to="add">
        <i class="iconfont icon-add"></i>
        <span>添加</span>
    </router-link>
    <router-link to="collect">
        <i class="iconfont icon-shoucang0"></i>
        <span>收藏</span>
    </router-link>
</div>
</template>
<style lang="less" scoped>
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: flex;
        a{
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            align-items: center;
            color: rgb(113, 226, 226);
        }
        a.router-link-active{
            color:  red;
        }
    }
</style>
