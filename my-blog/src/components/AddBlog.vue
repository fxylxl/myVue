<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <label for="">博客标题</label>
      <input type="text" v-model="blog.title" required />
      <label for="">博客内容</label>
      <textarea name="" id="" cols="30" rows="10" v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="">Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label for="">React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label for="">Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>
      <label for="">作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <!--<button v-on:click.prevent="post">添加博客</button>-->
      <button v-on:click.prevent="post">添加博客</button>

    </form>

    <div v-if="submmited">
      <h3>您的博客发布成功！</h3>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>微博分类</p>
      <ul>
        <li v-for="categroy in blog.categories">
          {{categroy}}
        </li>
      </ul>
      <p>作者</p>
      <p>{{blog.author}}</p>
    </div>



  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'add-blog',
    data () {
      return {
        blog:{
          title:"",
          content:"",
          categories:[],
          author:""
        },
        authors:["Henry","T-mac","Kobe","Jordan"],
        submmited:false
      }
    },
    methods:{
      post:function () {
//        this.$http.post("http://jsonplaceholder.typicode.com/posts",{
//          title:this.blog.title,
//          body:this.blog.content,
//          userId:1
//        })
//        var _this = this;
        axios.post("http://jsonplaceholder.typicode.com/posts",{
          title:this.blog.title,
          body:this.blog.content,
          userId:1
        })
          .then((data) =>{
            console.log(data);
            this.submmited = true;
          })
      }
//      addBLog:function () {
//        this.$http.post('./../server/api/single/AddBlog',{
//          title:this.blog.title,
//          author:this.blog.author,
//          content:this.blog.content,
//          categroy:this.blog.categories,
//          time:Date()
//        })
//          .then((response) => {
//          console.log(response);
//          })
//      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-blog *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #add-blog{
    margin:20px auto;
    max-width:600px;
    padding:20px;
    border: 1px solid #000;
  }
  label{
    display: block;
    margin:20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding:8px;
  }

  #checkboxes{
    display: inline-block;
    margin-top:0;
  }
  #checkboxes input{
    display: inline-block;
    margin-right:10px;
  }
  button{
    display: block;
    margin:20px 0;
    background: crimson;
    color:white;
    border:0;
    padding:14px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size:18px;
    cursor:pointer;
  }
  #preview{
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
  }
  h3{
    margin-top:10px;
  }

</style>
