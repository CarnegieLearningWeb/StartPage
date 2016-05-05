<style scoped>
</style>

<template>
  <div style="width:300px;">
    <div class="mdl-card mdl-shadow--2dp" style="background-color: #24a4cd; border-radius: 25px;">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Globey winners announced!</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
      </div>
    </div>
    <br>
    <div class="mdl-card mdl-shadow--2dp" style="background-color: #24a4cd;">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Globey winners announced!</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
      </div>
    </div>
    <br>
    <div class="mdl-card mdl-shadow--2dp" style="border-radius: 25px;">
      <div class="mdl-card__title" style="background-color: #24a4cd;">
        <h2 class="mdl-card__title-text">Try our new course</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
    <br>
    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title" style="background-color: #24a4cd;">
        <h2 class="mdl-card__title-text">Try our new course</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
    <br>
    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Try our new course</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  </div>  
  <!-- {{{posts}}} -->
</template>

<script>
    export default{
        props: {
            
        },
        data: function(){
          return {
            posts: []  
          }
        },
        methods: {
            
        },
        ready(){

          $.ajax({
              type: "GET",
              url: 'http://globaloria.com/api/core/get_page/?slug=globaloriastart',
              dataType: 'jsonp',
          }).success( function(response){
              // console.log(JSON.stringify(response));
              console.log(response);
              
              this.posts = response.page.content;
          }.bind(this)).error(function(err){
              console.log(err);
          }.bind(this));
        },
        components:{
        }
    }
</script>