<template>
  <header v-on:click="changeTitle">
    <h1>{{tittle}}{{title}}</h1>
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    props:{
      title:{
        type:String
      }
    },


    data () {
      return {
        tittle:"Vue.js Demo"
      }
    },
    methods:{
      changeTitle:function () {
        //this.title = "Changed"
        //注册一个事件
        this.$emit("titleChanged","子向父组件传值");
      }
    }
//    beforeCreate:function () {
//      alert("组件实例化之前执行的函数");
//    },
//    created:function () {
//      alert("组件实例化完毕，单页面还未显示");
//    },
//    beforeMount:function () {
//      alert("组件挂载前，页面仍未展示，但虚拟dom已经配置");
//    },
//    mounted:function () {
//      alert("组件挂载后，此方法执行后页面显示");
//    },
//    beforeUpdate:function () {
//      alert("组件更新前，页面仍未更新");
//    },
//    updated:function () {
//      alert("组件更新，此方法执行后页面显示");
//    },

  }
</script>


<style scoped>
header{
  background: lightgreen;
  padding:10px;
}
h1{
    color:#222;
    text-align: center;
  }
</style>
