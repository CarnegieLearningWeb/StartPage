<style scoped>

</style>

<template>

  <div class="row">
    <div class="col s4 offset-s4">
        <grid 
            :data="[
                    
                    {state: 'Texas', name: 'Beehive Science and Technology Academy', wiki: 'BSTA'},
                    {state: 'Texas', name: 'Bedichek Middle School', wiki: 'bedichekms'},
                    {state: 'Texas', name: 'Covington Middle School', wiki: 'cvms'},
                    {state: 'Texas', name: 'David Crockett High School', wiki: 'dvchs'},
                    {state: 'California', name: 'Alief Taylor High School', wiki: 'ATHS'},
                    {state: 'California', name: 'Elisk Ninth Grade Center', wiki: 'ENGC'},
                    {state: 'California', name: 'Burr and Burton Academy', wiki: 'bba'},
                    {state: 'California', name: 'Cathedral High School Los Angeles', wiki: 'cath'},
                    {state: 'California', name: 'Little Snake River Valley School', wiki: 'LSRV'}

                    ]"
            :columns="['name']"
            :state="Texas"
        >
        </grid>
    </div>
    </div>
</template>

<script>
    import Grid from './Grid.vue';


    export default{
        props: {
            
        },
        data() {
            
        },
        methods: {
            
        },
        components:{
          grid: Grid
        }
    }
</script>