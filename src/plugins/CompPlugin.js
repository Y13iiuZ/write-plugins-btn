import { defineComponent, onBeforeUnmount, onMounted,ref } from "vue"
export const CompPlugin = {
    install(app) {
        const compBox = ref(null)
        let compInstance = null
        const compComponent = defineComponent({
            setup() {
                onMounted(()=>{
                    //创建实例
                    compInstance = createComp(compBox.value)
                })
                onBeforeUnmount(()=>{
                    destroyComp(compInstance)
                })
            },
            template:`
                <div ref="compBox">
                    <slot>我的插件组件Comp</slot>
                </div>
            `
        })
        app.component('compComponent',compComponent)
    }
}

function createComp(el) {
    const comp = {
        el
    }
    console.log('创建实例')
    return comp
}
function destroyComp(instance) {
    console.log(instance,'已销毁')
}