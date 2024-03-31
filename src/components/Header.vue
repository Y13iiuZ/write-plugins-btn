<template>
    <div>
        <h4>新书推荐：
            《 <a href="https://img1.doubanio.com/dae/frodo/img_handler/doulist_cover/447503/round_rec?version=20100122115220">JavaScriptDom高级程序设计</a> 》
            《 <a href="http://www.kfzimg.com/sw/kfzimg/2000/018c2b914648076dd9_n.jpg">前端技术架构与工程</a> 》
        </h4>
        <div class="left">
            <img src="https://img1.doubanio.com/dae/frodo/img_handler/doulist_cover/447503/round_rec?version=20100122115220" alt="">
            <img src="http://www.kfzimg.com/sw/kfzimg/2000/018c2b914648076dd9_n.jpg" alt="">
        </div>
        <echarts class="right" />
    </div>
</template>

<script>
import echarts from '../components/echarts.vue'
export default {
    components:{
        echarts
    }
}
</script>

<style scoped>
    img {
        width: 200px;
        height: 200px;
    }
    .left {
        position: relative;
    }
    .right {
        position: absolute;
        top: 150px;
        left: 500px;
    }
</style>