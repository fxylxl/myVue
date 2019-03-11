<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div  class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>

      <article>
        {{blog.body | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'show-blogs',
    data(){
      return{
        blogs:[],
        search:""
      }
    },
    created(){
      this.$http.get("./../static/posts.json")
        .then(function (data) {
              this.blogs = data.body.slice(0,10);
        })
    },

    computed:{
      //搜索功能
      filteredBlogs:function () {
        return this.blogs.filter((blog) =>{
          return blog.title.match(this.search)
        })
      }
    },
  filters:{
      //自定义过滤器 局部
      "to-uppercase":function (value) {
        return value.toUpperCase();
      }
  },


  directives:{
      //自定义指令 局部
      'rainbow':{
        bind(el,binding,vnode){
          el.style.color = "#" + Math.random().toString(16).slice(2,8);
        }
      }
  }

  }
</script>

<style>
  #show-blogs{
    max-width:800px;
    margin:0 auto;
  }
  .single-blog{
    padding:20px;
    margin:20px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #eee;
  }
  input[type="text"]{
    width:100%;
    padding:10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
</style>
