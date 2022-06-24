<script>
import FungiItem from "./FungiItem.vue";
import EntryMapper from "../services/EntryMapper.js";

export default {
    name: "entry",
    props:{
        entryId:Number,
        createdAt:String,
        lastModified:String,
        fungiId:Number,
        fungi:Object,
        description:String
    },
    components:{
        FungiItem
    },
    methods:{
        ViewDate(date){
            return EntryMapper.createViewDate(date);
        }
    }
}
</script>

<template>
<li>
        <div class="card entry-card">
            <div class="card-navbar">
                <span class="card-icon"><h3>📝 Entry {{entryId}}, Created at: {{ViewDate(createdAt)}}, Last Modified at: {{ViewDate(lastModified)}}</h3></span> 
                <button @click="$emit('delete-entry')">❌</button>
            </div>
        <div class="card-content">
          <table>
              <tr><td class="card-label">Description:</td><td> {{ description }}</td></tr>
            <tr><td class="card-label">Fungi:</td><td>
                <fungi-item v-bind="fungi"/>
            </td></tr>
          </table>
          </div>
    </div>
    </li>
</template>

<style scoped>

.entry-card{
    background-color:rgb(227, 227, 255);
}
    .card-navbar{
    background-color:rgb(194, 194, 255);
    }
</style>