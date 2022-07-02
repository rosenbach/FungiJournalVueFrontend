<script>
import fungiJournalAPIClient from "../client/FungiJournalAPIClient";
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
        },
        async onSubmit(e){
          e.preventDefault();
          const data = new FormData(e.target);

          //create a new entry object from the form data
            const entry = {
                entryId: data.get("entryId"),
                createdAt: data.get('createdAt'),
                lastModified: data.get('lastModified'),
                fungiId: data.get('fungiId'),
                description: data.get('description')
            };

          await fungiJournalAPIClient.putEntry(entry);
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
            <!-- create a form for the description-->
            <form @submit="onSubmit($event)">
            <label for="Description">Description:</label>
            <input type="text" id="description" name="description" :value="description"><br><br>

            <!-- create the rest of the form as hidden fields-->
            <input type="hidden" id="entryId" name="entryId" :value="entryId">
            <input type="hidden" id="createdAt" name="createdAt" :value="createdAt">
            <input type="hidden" id="lastModified" name="lastModified" :value="lastModified">
            <input type="hidden" id="fungiId" name="fungiId" :value="fungiId">
            




            <input class="button" type="submit" value="Submit 📝">
            </form>
            <fungi-item v-bind="fungi"/>
          </div>
    </div>
    </li>
</template>

<style scoped>


.entry-card{
      margin: 1em;
    background-color:rgb(227, 227, 255);
}
    .card-navbar{
    background-color:rgb(194, 194, 255);
    }
</style>