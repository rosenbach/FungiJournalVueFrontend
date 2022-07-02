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
            <!-- create a form for the description-->
                      <form @submit="onSubmit($event)">
            <label for="Description">Description:</label>
            <input type="text" id="description" name="description" :value="description"><br><br>
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