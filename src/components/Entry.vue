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
        <button @click="$emit('delete-entry')">Delete me!</button>
          <p class="card-icon">📝</p> 

          <table>
            <tr><td class="card-label">EntryId:</td><td> {{ entryId }}</td></tr>
            <tr><td class="card-label">CreatedAt:</td><td> {{ViewDate(createdAt)}}</td></tr>
            <tr><td class="card-label">LastModified:</td><td> {{ViewDate(lastModified)}}</td></tr>
            <tr><td class="card-label">FungiId:</td><td> {{ fungiId }}</td></tr>
            <tr><td class="card-label">Fungi:</td><td>
                <fungi-item v-bind="fungi"/>
            </td></tr>
            <tr><td class="card-label">Description:</td><td> {{ description }}</td></tr>
          </table>
    </div>
    </li>
</template>

<style scoped>
    .entry-card{
        background-color:antiquewhite;
    }
</style>