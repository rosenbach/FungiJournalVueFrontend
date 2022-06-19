<script>

export default {
    name: "entry",
    props:{
        entryId:Number,
        createdAt:String,
        lastModified:String,
        fungiId:Number,
        description:String
    }
}
</script>

<template>
        <div class="card entry-card">
          <p class="card-icon">📝</p> 
          <table>
            <tr><td class="card-label">EntryId:</td><td> {{ entryId }}</td></tr>
            <tr><td class="card-label">CreatedAt:</td><td> {{ createdAt }}</td></tr>
            <tr><td class="card-label">LastModified:</td><td> {{ lastModified }}</td></tr>
            <tr><td class="card-label">FungiId:</td><td> {{ fungiId }}</td></tr>
            <tr><td class="card-label">Description:</td><td> {{ description }}</td></tr>
          </table>
    </div>
</template>

<style scoped>
    .entry-card{
        background-color:antiquewhite;
    }
</style>