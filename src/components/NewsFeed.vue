<style scoped>
</style>

<template>  
  {{{posts}}}
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