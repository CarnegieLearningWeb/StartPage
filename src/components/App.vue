<style scoped>

</style>

<template>
  <grid 
    :data="[{ name: 'RTC', link: 'rtc' },
            { name: 'AAA', link: 'aaa' },
            { name: 'TWYLS', link: 'tywls' }]"
    :columns="['name', 'link']"
    >
    </grid>

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