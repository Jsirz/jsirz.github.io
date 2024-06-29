import { createRouter, createWebHashHistory } from "vue-router";

const routes=[
    {
        path :"/",
        component: ()=>import("../components/HomePage/index.vue")
    },
    {
        path :"/About",
        component: ()=>import("../components/PersonalPage/about.vue")
    },
    {
        path :"/Knowledge",
        component: ()=>import("/src/components/Knowledge/K_index.vue")
    },
    {
        path :"/Practice",
        component: ()=>import("/src/components/Practice/P_index.vue")
    },
    {
        path :"/Sundry",
        component: ()=>import("/src/components/Sundry/S_index.vue")
    },
    
    
]

const router =createRouter({
    history:createWebHashHistory(),
    routes
})

export default router