export default {
    //手写按钮插件
    install(app,option) {
        console.log('pliuns install',app,option)
        app.component('ztxBtn', {
            name:'ztxBtn',
            template: '<button :class="btnClass"><slot/></button>',
            props:{
                type:{
                    type:String,
                    default:'default'
                }
            },
            computed: {
                btnClass() {
                    return `btn ${this.type}`
                }
            }
        });
    }
}