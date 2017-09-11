// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//router:router
  template: '<App/>',
  components: { App }
})
import obj from './mymodel';
console.log(obj);
// let n = 2;
// let promise = new Promise((resolved,rejected)=>{
//   if(n>3){
//     resolved();
//   }else{
//     rejected();
//   }
// });
// promise.then(()=>console.log('大于三'),()=>console.log('小于三'));
// function timeout(ms){
//   return new Promise((resolved,rejected)=>{
//     setTimeout(resolved, ms,'done');
//   });
// }

// timeout(5000).then(value=>console.log(value));