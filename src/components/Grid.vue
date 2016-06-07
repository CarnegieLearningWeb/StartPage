<!--Based on the grid component from Vuejs examples-->
<style>
    .flex-center-center{
        display: flex; 
        justify-content: center; 
        align-items: center;

        display: -webkit-flex;
        -webkit-justify-content: center;
        -webkit-align-items: center;
    }
    thead{
        height: '1px' !important;
    }
    td{
        text-align: center;
    }
</style>
<template>
    <div>
        <input id="state" v-model="state" type="hidden">
        
        <div class="flex-center-center">
            <div>
                <div v-mdl class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" type="text" id="searchbox" name="query" v-model="filterKey" placeholder="Enter your school name">
                    <label class="mdl-textfield__label" for="searchbox">Text...</label>
                </div>
            </div>
            
            <div>
                <select v-model="grade">
                    <option value="">Filter by...</option>
                    <option value="Elementary School">Elementary Schools</option>
                    <option value="Middle School">Middle Schools</option>
                    <option value="High School">High Schools</option>
                    <!-- <option value="College">College</option>
                    <option value="Alternative / At-risk Program">Alternative / At-risk Program</option>
                    <option value="Community Center">Community Center</option> -->
                </select>
            </div>
        </div>
        
        <div v-if="state!=''" class="flex-center-center">{{schoolFilterFullname}} in {{state}}</div>

        <div class="flex-center-center">
            <div class="mdl-grid">
                <div v-for="
                (index, entry) in data
                | filterBy filterKey
                | filterBy state in 'state'
                | filterBy grade in 'grade'
                | orderBy sortKey sortOrders[sortKey]" 
                class="mdl-cell--6-col"
                >
                    <div v-for="key in columns" style="text-align: center; margin-bottom: 0.3rem;">
                        <a 
                            target="_blank" 
                            href="{{entry['url']}}"
                            style="white-space: nowrap;"
                        >{{entry[key]}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            data: Array,
            columns: Array,
            filterKey: String
        },
        data() {
            var sortOrders = {}
            this.columns.forEach(function (key) {
                sortOrders[key] = 1
            })
            return {
                sortKey: '',
                sortOrders: sortOrders,
                state: '',
                grade: ''
            }
        },
        computed: {
            schoolFilterFullname: function(){
                
                if(this.grade != ''){
                    var letters = this.grade.split('school')[0].split('');
                    letters[0] = letters[0].toUpperCase();
                    var word = letters.join('');

                    return word + 's';
                }else{
                    return 'Schools';
                }
            }
        },
        methods: {
            sortBy: function (key) {
                this.sortKey = key
                this.sortOrders[key] = this.sortOrders[key] * -1
            }
        },
        ready: function(){
            
        }
    }
</script>