<template>
    <div>
    <table border="2" style="text-align: center;">
        <caption>图书馆购物车</caption>
        <tr>
            <th>确认</th>
            <th>序号</th>
            <th>名字</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
        </tr>
            <tr v-for="(s, index) in sites" :key="s.id">
            <td><input type="checkbox" v-model="s.use2"></td>
            <td>{{ index + 1 }}</td>
            <td>{{ s.name }}</td>
            <td>￥{{ s.price }}</td>
            <td><button @click="reduceSl(s)">-</button><span id="sl">{{ s.num }}</span><button
                    @click="addSl(s)">+</button></td>
            <td><button @click="reMove(index)">删除</button></td>
             </tr>
    </table>
    <span>总价格:{{ allPrice() }}(人民币)</span>
    <button @click="sendData()">提交</button>
</div>
</template>

    <script>
    import axios from "axios"
    import {useCounterStore} from '../store/create'
    export default {
        data() {
            return {
                sites:[],
                orderList:[],
            }
        },
        created(){
            this.cart = useCounterStore();
            this.sites = this.cart.cartList
        },
        methods: {
            reduceSl(s)
            {
              if(s.num<=0){
                alert("到底了!!!")
                return -1;
              } 
              s.num--;
            },
            addSl(s){
              if(s.num>=10)
              {
                alert("库存没有啦,请过几天再来!")
                return -1;
              }
              s.num++;
            },
            allPrice(){
              var total=0,b;
                for(let ss of this.sites){
                  if(ss.use2){
                    b=ss.price*ss.num;
                    total+=b;
                  }
                  else total+=0;
                }
                return total;
              },
            reMove(index){
              this.sites.splice(index,1);
            },
            sendData(){
                this.sites.forEach((book)=>{
                    var order={title:'',price:0,num:1};
                    order.title = book.name;
                    order.price = book.price;
                    order.num = book.num;
                    this.orderList.push(order);
                })
                axios.post('http://127.0.0.1:8081/orderlist',this.orderList).then((res)=>{  //返回的promise
                    console.log(res);
                    this.sites = [];
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
    </script>

    <style scoped>
        .addBooks {
            cursor: pointer;
        }
    </style>