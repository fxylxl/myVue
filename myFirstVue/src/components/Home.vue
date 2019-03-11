<template>
  <div id="home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <user v-bind:users="users"></user>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
  import Users from './Users'
  import Header from './Header'
  import Footer from './Footer'
  export default {
    name: 'home',
    data(){
      return{
        users:[
//          {name:"T-mac",position:"Web开发",show:false},
//          {name:"T-mac",position:"Web开发",show:false},
//          {name:"T-mac",position:"Web开发",show:false},
//          {name:"T-mac",position:"Web开发",show:false},
//          {name:"T-mac",position:"Web开发",show:false},
//          {name:"T-mac",position:"Web开发",show:false},
//          {name:"T-mac",position:"Web开发",show:false},
//          {name:"T-mac",position:"Web开发",show:false},
//          {name:"T-mac",position:"Web开发",show:false}
        ],
        title:"传递的是一个值，(number,string,boolean...)"
      }
    },
    methods:{
      updateTitle(title){
        this.title = title;
      }
    },
    components:{
      "user":Users,
      "app-header":Header,
      "app-footer":Footer
    },
    created(){
      this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data)=>{
        this.users = data.body;
        })
    }
  }
</script>

<style scoped="">
  h1{
    color:purple;
  }
</style>
