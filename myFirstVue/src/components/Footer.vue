<template>
  <footer>
    <p>{{copyright}}{{title}}</p>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    props:{
      title:{
        type:String
      }
    },
    data () {
      return {
        copyright:"Copyright 2019 Vue Demo"
      }
    }
  }
</script>


<style scoped>
  footer{
    background: #222 ;
    padding:4px;
  }
  p{
    color:lightgreen;
    text-align: center;
  }
</style>
