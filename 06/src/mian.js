import Vue from 'vue';
//这样直接引用vue 引用的并不是vue.js 引用的是vue的runtime
//vue = compiler  +  runtime
//      编译模板
import App from 'App.vue';
new Vue({
    // template:'<div>哈哈</div>'

    // render函数的作用将虚拟的DOM渲染成真实的DOM
    // createElement返回的是虚拟的DOM
    render:(createElement)=> createElement(App)
}).$mount('#app');