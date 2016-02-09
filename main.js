// main.js
require('./src/map.js')
var Vue = require('vue')
// require a *.vue component
var App = require('./src/components/App.vue')
var Grid = require('./src/components/Grid.vue')

// mount a root Vue instance
new Vue({
  el: 'body',
  components: {
    // include the required component
    // in the options
    app: App,
    grid: Grid
  }
})
