<template>
<div>
    <!-- <h1>
        <span>{{msg}}</span>
        <router-view></router-view> 
        
    </h1> -->
    <button @click="show">notify</button>
</div>
</template>
<script>
export default {
  data() {
    return {msg:"我是张三"}
  },
  methods: {
    show(){
      this.$notify('你叼我啊')
    }
  },
  computed: {},
  components: {}
};
</script>
<style>

</style>