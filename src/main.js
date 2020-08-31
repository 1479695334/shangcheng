import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "amfe-flexible";

// 全局引入
// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);



// 按需引入
import {
    Tabbar,
    TabbarItem,
    NavBar,
    Swipe,
    SwipeItem,
    Grid,
    SwipeCell,
    GridItem,
    Card,
    Button,
    Tag,
    Search,
    Sidebar,
    SidebarItem,
    Image as VanImage,

} from 'vant';
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(SwipeCell);
Vue.use(Search);
Vue.use(Sidebar);
Vue.use(SidebarItem);

import './assets/style/style.css'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");