<template>
    <table border="2" style="text-align: center;">
        <caption>购物车浏览</caption>
        <tr>
            <th>确认</th>
            <th>序号</th>
            <th>名字</th>
            <th>价格</th>
            <th>数量</th>
        </tr>
            <tr v-for="(s, index) in sites" :key="s.id">
            <td><input type="checkbox" v-model="s.use2"></td>
            <td>{{ index + 1 }}</td>
            <td>{{ s.name }}</td>
            <td>￥{{ s.price }}</td>
            <td>{{ s.num }}</td>
            </tr>
    </table>
</template>

<script>
import {useCounterStore} from '../store/create'
export default {
    data() {
        return {
            sites: [],
        };
    },
    created(){
        this.cart = useCounterStore();
        this.sites = this.cart.cartList
    }
}
</script>