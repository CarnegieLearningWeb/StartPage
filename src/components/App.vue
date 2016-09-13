<style scoped>

</style>

<template>
  
    <div>
        <div v-if="schools.length > 0" id="main" class="mdl-grid">
            <div id="leftnav" class="mdl-cell mdl-cell--9-col">

                <!-- <div class="class="mdl-grid"">
                  <div class="mdl-cell mdl-cell--12-col">
                    <grid 
                        :data="schools"
                        :columns="['name']"
                    >
                    </grid>
                  </div>
                </div> -->
                
                <div class="class="mdl-grid"">
                  <div class="mdl-cell mdl-cell--12-col">
                    <globaloria-map :schools="schools"></globaloria-map>
                  </div>
                </div>

                <div class="class="mdl-grid"">
                  <div class="mdl-cell mdl-cell--12-col">
                    <grid 
                        :data="schools"
                        :columns="['name']"
                    >
                    </grid>
                  </div>
                </div>
            </div>
            <div id="rightnav" class="mdl-cell mdl-cell--3-col">
              
              <news-feed></news-feed>

              <div class="mdl-card mdl-shadow--2dp" style="width:100%;">
                <div class="mdl-card__title" style="background-color: lightgrey;">
                  <h2 class="mdl-card__title-text" style="font-size: 18px;">Tweets by @globaloria</h2>
                </div>
                <div class="mdl-card__supporting-text">
                  <div style="width:100%;">
                    <!-- Replaced with actual feed through script. Should be configured from Twitter account. -->
                    <a 
                      v-twitter 
                      class="twitter-timeline" 
                      href="https://twitter.com/globaloria" 
                      data-widget-id="714918275847729152"
                      data-chrome="noheader"
                      >Tweets by @globaloria</a>
                  </div>    
                </div>
              </div>
            </div>
        </div>        
    </div>
  
</template>

<script>
    import Grid from './Grid.vue';
    import NewsFeed from './NewsFeed.vue';
    import GlobaloriaMap from './GlobaloriaMap.vue';


    export default{
        props: {
            
        },
        data() {
            return {
                  schools: []
            };
        },
        methods: {
            
        },
        ready(){
            $.ajax({
                type: "GET",
                url: 'https://progress.myglife.org/tasks/task_get_active_locations'
              }).success( function(response){
                // console.log(JSON.parse(response));
                this.schools = JSON.parse(response);
              }.bind(this)).error(function(err){
                console.log(err);
              }.bind(this));

            // Load Twitter feed
            setTimeout(function(){
                  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
            }, 500);
        },
        components:{
          Grid,
          NewsFeed,
          GlobaloriaMap
        }
    }
</script>