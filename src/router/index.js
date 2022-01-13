import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home.vue"
import transferEstate from "../views/transferEstate"
import getEstate from "../views/getEstate"
import registerEstate from "../views/registerEstate"
import about from "../views/About"
import find from "../views/findEstateId"





Vue.use(VueRouter);

const routes = [
  
  {
  path:"/",
  name: home,
  component:home
  },
  

{
  path:"/add",
  name:'add',
  component:registerEstate
},
{
  path:"/transfer",
  name:"transferEstate",
  component:transferEstate
},

{
  path:"/estate",
  name:"getEstate",
  component:getEstate
},

{
  path:"/about",
  name:"About",
  component:about
},
{
  path:"/search",
  name:"FindEstateID",
  component:find
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> 6b562412f815fd20e39a07ae51d730066a686223
