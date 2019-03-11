<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <p>{{blog.body}}</p>
    <button v-on:click="deleteSingleBlog()">删除</button>
    <router-link :to="'/edit/' + id">编辑</router-link>
  </div>
</template>

<script>
  export default{
    name:"single-blog",
    data(){
        return{
          id:this.$route.params.id,
          blog:{}
        }
    },
    created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(function (data) {
//          console.log(data);
          this.blog = data.body;
        })
    },
    methods:{
      deleteSingleBlog(){
        this.$http.delete('http://jsonplaceholder.typicode.com/posts/' + this.id)
          .then(response=>{
            this.$router.push({path:'/'})
          })
      }
    }
  }
</script>

<style scoped="">
  #single-blog{
    max-width: 960px;
    margin:0 auto;
    padding: 20px;
    background: #eee;
    border:1px solid #aaa;

  }

</style>
