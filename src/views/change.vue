<template>
    <div >
        <h1>后台管理界面</h1>
        <img src="../../public/356.jpg" alt="">
        <div id="box">
            <button id="s1" @click="change">起来mk</button>
            <button id="s2" @click="change1" >跪下吧tx</button>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "change",
        data(){
            return{
                data:{}
            }
        },
        methods:{
            change(){
                let data = "./cssb/all.css"
                let info = {
                    "style": data,
                };
                fetch('http://localhost:3000/cart/api/cart', {
                    method: "post", //传参方式
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    body: JSON.stringify(info) //传的参数
                }).then(res => {
                    res.json().then(data => {
                        //console.log(data)
                        if (data.state == 1) {
                            alert("切换成功到mk");
                        }
                    });
                })

            },
            change1(){
                let data = "./cssb/tx.css"
                let info = {
                    "style": data,
                };
                fetch('http://localhost:3000/cart/api/cart', {
                    method: "post", //传参方式
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    body: JSON.stringify(info) //传的参数
                }).then(res => {
                    res.json().then(data => {
                        //console.log(data)
                        if (data.state == 1) {
                            alert("切换成功到tx");
                        }
                    });
                })
            },

           
        },
    }
</script>

<style scoped>
        /* .tx{
            background: url(../../public/356.jpg) no-repeat;
            background-size: 100% 100%;
        } */
        h1{
            text-align: center;
        }
    #box{
        width: 100%;
        display: flex;
        height: 194px;
        align-items: center;
        justify-content: space-around;
    } 
       button{
         width: 150px;
         height: 200px;
         border: 1px solid #747474;
         line-height: 80px;
         text-align: center;
         font-size: 2rem;
         font-weight: 900;
         color: red;
     } 
</style>