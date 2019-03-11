//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:"大狸子",
        job:"web开发",
        age:"25",
        website:"http://www.baidu.com",
        websiteTag:"<a href='http://www.baidu.com'>白白白度</a>"
    },
    methods:{
        greet:function (time) {
            return 'Good '+ time+" "+ this.name +"!";
        }
    }

});
/*
 *   el:element 需要获取的元素，一定是html中的根容器元素
 *   data:用于数据的存储
 *   methods:用于存储各种方法
 *   data-binding:给属性绑定对应的值
 */

var key = new Vue({
    el:"#key-app",
    data:{

    },
    methods:{

    }
})