new Vue({
    el:"#eve-app",
    data:{
        age:30,
        x:0,
        y:0
    },
    methods:{
        add:function (num) {
            this.age += num
        },
        subtract:function (num) {
            this.age -= num
        },
        updateXY:function (event) {
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopmoving:function (event) {
            event.stopPropagation();
        }
    }
});

