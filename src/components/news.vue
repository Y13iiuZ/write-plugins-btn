<template>
    <div>
        <h3>新闻浏览</h3>
        <ul style="list-style: none;">
            <li v-for="(item,index) in items" :key="index">
            <router-link :to="{path:item.ph,query:{news:item.itemsInfo}}">{{index}}.{{ item.info }}</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    ph:'/news/child1',
                    info:'VS Code 是如何优化启动性能的',
                    itemsInfo:'1.性能优化基本的法则2.确保代码尽可能快的加载3.requestIdleCallback, 将不那么重要的工作放在浏览器空闲时间执行'
                },
                {
                    ph:'/news/child1',
                    info:'服饰3D柔性渲染调研及实践',
                    itemsInfo:'当前全球服装制造的产业链中，我国的中小企业的难以参与到其中利润最高的环节比如产品的设计和研发，主要原因就是服装设计的难度和成本高，因此需要一些创新技术来减少制作成本、降低门槛。3D服装设计就是解决方案之一，采用3D技术可以直接在虚拟模特上实现打样，并且迭代修改、交付样品也可以通过线上实时完成，相比于传统服装设计方式，大幅减少了服装出品的时间成本，并且也在一定程度上降低了上手难度和学习门槛。'
                },
                {
                    ph:'/news/child1',
                    info:'前端智能化实践— P2C 从需求文档生成代码',
                    itemsInfo:"狼叔（上图左），Node.js 技术布道者，Node 全栈公众号运营者，曾就职于去哪儿、新浪、网秦，做过前端、后端、数据分析，是一名全栈技术的实践者。已出版《狼书(卷1) 更了不起的 Node.js》《狼书(卷2) Node.js Web 应用开发》。入职阿里的三年时间，主要是在优酷 PC/H5 端从 0 到 1 的落地 Node.js 全栈，使用 SSR 对 Web 页面进行优化和重构，建设 SSR 应用的容灾、发布、灰度等能力，是集团内第一大 QPS 的 SSR 应用。在支撑好业务的同时，与组内同学一起孵化出开源框架 egg-react-ssr。2020 年到淘宝技术部，开启前端智能化的旅程，目前负责 P2C，和卓风是搭档。"
                },
                {
                    ph:'/news/child1',
                    info:'浅谈阿里前端的多样化',
                    itemsInfo:"2007年，Jeff Atwood 提出了一个著名的观点, 戏谑又似认真地称其为 Atwood's Law（https://blog.codinghorror.com/the-principle-of-least-power/）：any application that can be written in JavaScript, will eventually be written in JavaScript.时间快速穿行13年到今天，仿佛在印证戏言成真：在互联网软件工业的疆域上，以ECMAScript 为圆点朝各个方向射出一箭，凡目力所及的范围内，皆似洒落上了这一箭之威。而在阿里，也像在诠释着这些上述断言，前端技术如初生牛犊般从蛮荒时代的PC Web 踏入到多个领域，在许多重要战场中发挥着重要作用。在这儿，借着 D2 大会的契机，简单分享几个前端领域在阿里的应用场景，附带一些我对前端技术领域的一些思考，期待能够和众多的行业同仁们有交流互动的机会"
                }
            ],
        };
    },
}
</script>