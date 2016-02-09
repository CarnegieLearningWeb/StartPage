<!--Based on the grid component from Vuejs examples-->
<template>
    <input id="state" v-model="state" type="hidden">
    <input name="query" v-model="filterKey" placeholder="Enter your school name">
    <table class="centered">
        <thead>
        <!-- <tr>
            <th v-for="key in columns"
                @click="sortBy(key)"
                :class="{active: sortKey == key}">
                {{key | capitalize}}
          <span class="arrow"
                :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
            </th>
        </tr> -->
        </thead>
        <tbody>
        <tr v-for="
        entry in data
        | filterBy filterKey
        | filterBy state in 'state'
        | orderBy sortKey sortOrders[sortKey]">
            <td v-for="key in columns">
                <a href="https://myglife.org/usa/{{entry['wiki']}}">{{entry[key]}}</a>
            </td>
        </tr>
        </tbody>
    </table>
</template>
<style>
    thead{
        height: '1px' !important;
    }
</style>
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
                state: ''
            }
        },
        methods: {
            sortBy: function (key) {
                this.sortKey = key
                this.sortOrders[key] = this.sortOrders[key] * -1
            }
        }
    }
</script>