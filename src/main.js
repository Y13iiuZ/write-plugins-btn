import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import myBtn from './plugins'
import { CompPlugin } from './plugins/CompPlugin'
import myDirective from './plugins/permisson'
import './plugins/index.css'
// function SecretPiniaPlugin() {
//     return { secret: '全局属性' }
//   }
const _options = {
    name: 'ztx'
}
const app = createApp(App)
const pinia = createPinia()
// pinia.use(()=>({ secret: 'I AM 全局属性' }))
app.use(router).use(pinia).use(myBtn,_options).use(CompPlugin).use(myDirective)
app.mount('#app')
