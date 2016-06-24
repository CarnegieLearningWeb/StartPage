<style scoped>
 .newsfeed{
  
 }
</style>

<template>  
  <div class="newsfeed">
    <h2 style="font-size: 30px;">News</h2>

  <!-- {{{posts}}} -->

    <!-- *****BEGIN CARD****** -->
<div class="mdl-card mdl-shadow--2dp">
<div class="mdl-card__title" style="background-color: lightgrey;">
<h2 class="mdl-card__title-text" style="font-size: 18px;">Globaloria Students Featured in NYC ELL’s STEMTastic Day</h2>
<p></p></div>
<div class="mdl-card__supporting-text">5/17 – Globaloria students from Entrada Academy, Manhattan Academy for Arts and Language and George Ryan Middle School showcased their games at STEMTastic Day at the New York Hall of Science. <a href="http://globaloria.com/globaloria-students-featured-nyc-ells-stemtastic-day/" target="_blank">Read more here.</a></div>
<p></p></div>
<p>  <!-- ******END CARD****** --><br>
  <!-- *****BEGIN CARD****** --></p>
<div class="mdl-card mdl-shadow--2dp">
<div class="mdl-card__title" style="background-color: lightgrey;">
<h2 class="mdl-card__title-text" style="font-size: 18px;">Featured Student Game!</h2>
<p></p></div>
<div class="mdl-card__supporting-text"><a href="http://globaloria.com/globaloria-game/save-me/"><img src="http://globaloria.com/wp-content/uploads/2015/05/saveMe.png" alt="saveMe" width="300" height="217" class="alignleft size-full wp-image-2687"></a><br>In “Save Me”, you play as different endangered animals – a giant panda, a poisoned frog, a bluefin tuna and an amur tiger – to learn about their environments and how they survive in their habitats.</div>
<p></p></div>

  </div>
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
              // console.log(response);
              
              this.posts = response.page.content;
          }.bind(this)).error(function(err){
              console.log(err);
          }.bind(this));
        },
        components:{
        }
    }
</script>