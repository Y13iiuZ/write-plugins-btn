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
        })
        //增加打印插件
        app.config.globalProperties.$print = (msg = '') => {
            console.log('日志打印姓名为:',option.name,msg)
        }
    }
}