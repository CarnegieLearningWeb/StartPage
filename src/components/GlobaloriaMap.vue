<style scoped>
  #container{
    width: 100%; 
    display: flex; 
    display: -webkit-flex;
    align-items: center; 
    justify-content: center;
  }
</style>

<template>
  <div id="container">
    <div id="map" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>
  require('../map.js')
  export default{
      props: ['schools'],
      data() {
          
      },
      methods: {
          
      },
      ready(){
        console.log("SET");
        console.log(this.schools);
        window.mySet = new Set();
        this.schools.forEach(function(school){
          mySet.add(school.state);
        });

        var states = Array.from(mySet);
        console.log(states);
        var defaultColoring = {};
        states.forEach(function(state){
          defaultColoring[state] = {fillKey: 'HAS_SCHOOLS'}
        });
        console.log(defaultColoring);

        // var defaultColoring = {
        //   AR: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   AL: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   CA: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   CO: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   DC: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   IL: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   MI: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   NJ: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   NY: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   OK: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   TX: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   UT: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   VA: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   VT: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   WV: {
        //     fillKey: 'HAS_SCHOOLS'
        //   },
        //   WY: {
        //     fillKey: 'HAS_SCHOOLS'
        //   }
        // };
        // var states = ['AR', 'AL', 'CA', 'CO', 'DC', 'IL', 'MI', 'NJ', 'NY', 'OK', 'TX', 'UT', 'VA', 'VT', 'WV', 'WY'];

        // Smaller states are rendered as bubbles to make them clickable
        var bubblesData = [
         // {name: 'NY', centered: 'NY', radius: 10, fillKey: 'HAS_SCHOOLS'},
         {name: 'DC', centered: 'DC', radius: 10, fillKey: 'HAS_SCHOOLS'},
         // {name: 'AL', centered: 'AL', radius: 10, fillKey: 'HAS_SCHOOLS'}
        ];
        
        initMap(defaultColoring, bubblesData, states);
      },
      components:{
      }
  }
</script>