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
        // Get states with schools and set their default color
        let schoolSet = new Set();
        this.schools.forEach(function(school){
          schoolSet.add(school.state);
        });

        var states = Array.from(schoolSet);
        var defaultColoring = {};
        states.forEach(function(state){
          defaultColoring[state] = {fillKey: 'HAS_SCHOOLS'}
        });

        // Smaller states are rendered as bubbles to make them clickable
        // Override when small unclickable states come through
        var bubblesData = [
         {name: 'DC', centered: 'DC', radius: 10, fillKey: 'HAS_SCHOOLS'},
         // {name: 'AL', centered: 'AL', radius: 10, fillKey: 'HAS_SCHOOLS'}
        ];
        
        initMap(defaultColoring, bubblesData, states);
      },
      components:{
      }
  }
</script>