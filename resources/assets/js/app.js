
require('./bootstrap');

window.Vue = require('vue');

//Setup Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

require('./routes');
require('./filter');

//setup vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import storeData from "./store/index"
const store = new Vuex.Store(
   storeData
)
//Import Sweetalert2
import Swal from 'sweetalert2'
window.Swal = Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
window.Toast = Toast

//Routes
import { routes } from './routes';

//v-form Setup
    import { Form, HasError, AlertError } from 'vform'
    window.Form = Form;
    Vue.component(HasError.name, HasError)
    Vue.component(AlertError.name, AlertError)

//Register Routes
const router = new VueRouter({
    routes, 
    mode: 'hash',

})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router,
    store,
});
