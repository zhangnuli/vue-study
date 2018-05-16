<template>
<div>
    <div class="notify">{{value}}</div>
</div>
</template>
<script>
export default {
  data() {
    return {value:''};
  },
  methods: {},
  computed: {},
  components: {}
};
</script>
<style scoped>
    .notify{
        width: 100px;
        height: 40px;
        background: rgba(0, 0, 0, .5);
        border-radius: 15px;
        line-height: 40px;
        text-align: center;
        color: aliceblue;
    }
</style>