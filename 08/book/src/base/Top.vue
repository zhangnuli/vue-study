<template>
<div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui1" v-if="back" @click="goBack"></i>
</div>
</template>
<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:false
        }
    },
data() {
return {};
},
methods: {
    goBack(){
        this.$router.go(-1);
    }
},
computed: {},
components: {}
};
</script>
<style scoped lang='less'>
.header{
    background: #afd9ee;
    height: 40px;
    text-align: center;
    line-height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    i{
       position: absolute;
       left: 10px;
       font: size 20px;
    }
}
</style>