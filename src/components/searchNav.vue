<template>
    <h2 style="color: #7FFF00;">图书列表</h2>
    <div>
        图书种类:<select v-model="currentType">
        <option v-for=" item in bookType" :value="item.idType" :key="item">{{item.type}}</option>         
        </select>
        书名:<input type="text" v-model="searchWord" placeholder="请输入关键字"/>
        <table cellspacing="0" border="1">
            <thead>
            <tr>
                <th>序号</th>
                <th>图书题目</th>
                <th>单价（元）</th>
                <th>购买操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(items,index) in bookFilter" :key="index">
                    <td>{{items.bookid}}</td>
                    <td>{{items.title}}</td>
                    <td>{{items.price}}</td>
                    <td><button @click="addCart(index)">添加到购物车</button></td>
            </tr>
        </tbody>
        </table>
    </div>
    
</template>

<script>
import {useCounterStore} from '../store/create'
import axios from 'axios'
export default {
    mounted(){
        this.carts = useCounterStore();
        this.cartList = this.carts.cartList;
        axios.get('http://127.0.0.1:8081/searchnav')
        .then((res)=>{
            console.log(res.data)
            this.bookList = res.data
        })
    },
    data(){
        return{
            currentType:'000',
            searchWord:'',
            bookType:[
                {idType:'000',type:'全部类型'},
                {idType:'001',type:'前端'},
                {idType:'002',type:'后端'},
                {idType:'003',type:'数据库'}
            ],
            bookList:[],
            cart:{name:'',price:0,num:1,use2:true},//初始化
            cartList:[]
        }
    },
    computed:{
        bookFilter(){
            let booktype = this.currentType;
            let keyword = this.searchWord;
            if(this.currentType=='000'){
                booktype=''
            }
            return this.bookList.filter(items=>items.type.indexOf(booktype)!==-1 && items.title.indexOf(keyword)!==-1);
        }
    },
    methods:{
        addCart(index){
            // console.log(index)//测试
            this.cart.name = this.bookFilter[index].title;
            this.cart.price = this.bookFilter[index].price;
            this.cartList.push(this.cart);
            this.$router.push('/cart')
        }
    }
}
</script>
