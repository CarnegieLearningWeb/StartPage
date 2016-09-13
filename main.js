// main.js
var Vue = require('vue')
var VueResource = require('vue-resource')

Vue.use(VueResource);

var App = require('./src/components/App.vue')
var Grid = require('./src/components/Grid.vue')

Vue.directive('mdl', function() {
  
  if(typeof componentHandler == 'object'){
    componentHandler.upgradeElement(this.el);
    console.log("Upgrading element");
    console.log(this.el);  
  }
  
});



// mount a root Vue instance
new Vue({
  el: '#vue-root',
  template: '<app></app>',
  components: {
    // include the required component
    // in the options
    app: App,
    grid: Grid
  }
})
