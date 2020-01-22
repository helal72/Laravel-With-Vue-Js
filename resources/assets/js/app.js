
require('./bootstrap');

window.Vue = require('vue');

//Setup Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

require('./routes');

//Routes
import { routes } from './routes';

//Register Routes
const router = new VueRouter({
    routes, 
    mode: 'hash',

})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router
});
