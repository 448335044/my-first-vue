/**
 * Created by BO on 2019/6/29.
 */
/*导入路由的包*/
import VueRouter from 'vue-router'
/*导入对应的路由组件*/
import Main from './components/main'
import About from './components/about'
import Add from './components/add'
import Detail from  './components/detail'
import Update from  './components/update'
import Exit from  './components/exit'
/*创建路由对象*/
var router = new VueRouter({
  routes:[
    /*配置漏油规则的*/
    {path:'/',redirect:'/main'},
    {path:'/main',component:Main},
    {path:'/about',component:About},
    {path:'/add',component:Add},
    {path:'/detail/:id',component:Detail},
    {path:'/update/:id',component:Update},
    {path:'/exit',component:Exit}
  ]


})

/*把路由对象暴露出去*/
export default router
