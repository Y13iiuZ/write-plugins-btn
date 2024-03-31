<template>
    <h2 style="color: red;">用户登录</h2>
    <form action="">
    用户名:<input type="text" placeholder="请输入你的名字" v-model="user"><br><br>
    密码： <input type="password" placeholder="请输入你的密码" v-model="pwd"><br><br>
    <button class="butn" @click="initHome">登录</button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            user:'',
            pwd:''
        }
    },
    methods:{
        initHome(){
            localStorage.setItem('users',this.user)
            localStorage.setItem('pwd',this.pwd)
            this.$router.push('/')
        }
    }
}
</script>

<style>
    .butn {
        margin: 0 100px;
    }
</style>