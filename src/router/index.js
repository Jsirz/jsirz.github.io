import { createRouter, createWebHashHistory } from "vue-router";

const routes=[
    {
        path :"/",
        component: ()=>import("../components/HomePage/index.vue")
    },
    {
        path :"/math",
        component: ()=>import("../components/Math/Math1.vue")
    },
    {
        path :"/About",
        component: ()=>import("../components/PersonalPage/about.vue")
    },
    
]

const router =createRouter({
    history:createWebHashHistory(),
    routes
})

export default router