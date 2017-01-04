<style scoped>
 .newsfeed{
  
 }
</style>

<template>  
  <div class="newsfeed">
    <!-- <h2 style="font-size: 30px; text-align: center;">News</h2> -->

    {{{posts}}}

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
              url: 'https://globaloria.com/api/core/get_page/?slug=globaloriastart',
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