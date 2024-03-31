<template>
    <div>
      <div id="hhh1" style="width: 400px;height: 400px;"></div>
      <div id="hhh2" style="width: 400px;height: 400px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  methods: {
    drawPie(id) {
      var myChart = echarts.init(document.getElementById(id), 'light'); // dark/light
      myChart.setOption({
          series : [
              {
                  name: '图书种类',
                  type: 'pie',    // 设置图表类型为饼图
                  radius: '55%',  // 饼图的半径
                  data:[
                      {value:3, name:'前端'},
                      {value:3, name:'后端'},
                      {value:3, name:'数据库'}
                  ]
              }
          ]
      })
    },
    drawBar(id){
      var echart  = echarts.init(document.getElementById(id));
      echart.setOption({
        title: {
                text: '图书价格'
            },
            tooltip: {},//提示信息
            legend: {
                data:['价格(￥)']
            },
            xAxis: {
                data: ["《JavaScript程序设计》","《HTML5+CSS3网页实战》","《Vue.js框架项目实战》","《SpringBoot实战》","《Node.js后端服务开发》","《Node.js实战》",
                '《MySQL教程》','《MongoDB从入门到实战》','《MongoDB设计与应用实战》']
            },
            yAxis: {},
            series: [{
                name: '价格(￥)',
                type: 'bar',
                data: [30, 40, 50, 70, 25, 35,40,70,90],
                color: ['#f49f42']
            }],
      })
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawPie("hhh1")
      this.drawBar('hhh2')
    });
  }
}
</script>

<style scoped>
  #hhh1 {
    position: relative;
  }
  #hhh2 {
    position: absolute;
    top: 80px;
    left: 500px;
  }
</style>
