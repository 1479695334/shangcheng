 import Vue from "vue";
 import VueRouter from "vue-router";

 Vue.use(VueRouter);

 const routes = [{
         path: '/',
         redirect: '/index'
     },
     {
         path: "/login",
         component: () =>
             import ('../views/Login.vue')
     },
     {
         path: '/home',
         component: () =>
             import ('../views/Home.vue'),
         children: [{
                 path: '',
                 redirect: '/index'
             },
             {
                 path: '/index',
                 component: () =>
                     import ('../views/Index.vue'),
             },
             {
                 path: '/classify',
                 component: () =>
                     import ('../views/Classify.vue'),
             },
             {
                 path: '/cart',
                 component: () =>
                     import ('../views/Cart.vue'),
             },
             {
                 path: '/mine',
                 component: () =>
                     import ('../views/Mine.vue'),
             }
         ]
     },
     {
         path: '/detail/:id',
         component: () =>
             import ('../views/Detail.vue')
     },
     {
         path: '*',
         component: () =>
             import ('../views/Nofound404.vue'),
     }
 ];

 const router = new VueRouter({
     routes
 });

 export default router;