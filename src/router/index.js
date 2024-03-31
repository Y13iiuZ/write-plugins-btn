import {createRouter,createWebHashHistory} from 'vue-router'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/home',
            component:()=>import('../components/Header.vue'),
        },
        {
            path:'/',
            component:()=>import('../components/Header.vue'),
        },
        {
            path:'/searchnav',
            name:'father',
            component:()=>import('../components/searchNav.vue'),            
        },
        {
            path:'/login',
            component:()=>import('../components/Login.vue')
        },
        {
            path:'/news',
            component:()=>import('../components/news.vue'),
            children:[
                {
                    path:'/news/child1',
                    name:'child1',
                    component:()=>import('../components/productView1.vue')
                },
                {
                    path:'/news/child2/:use',
                    name:'child2',
                    component:()=>import('../components/productView2.vue')
                },

            ],
        },
        {
            path:'/cart',
            component:()=>import('../components/Cart.vue')
        },
        {
            path:'/cartbrowse',
            component:()=>import('../components/cartBrowse.vue')
        },
        {
            path:'/playpinia',
            component:()=>import('../components/demopinia.vue')
        },
        {
            path:'/orderlist',
            component:()=>import('../components/orderlist.vue')
        }
    ]
})

//路由守卫——前置守卫
router.beforeEach((to,from,next)=>{
    let token = localStorage.getItem('users')
    let token2 = localStorage.getItem('pwd')
    if(token=='jack' && token2=='123456'){
        next()
    }
    else if(to.path === "/login"){
        next()
    }
    else {
        next('/login')
    }
})

export default router