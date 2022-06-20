<!-- FungiItem.vue -->
<script>
export default {
  props: {
    fungi:Object,
    fungiId:Number,
    name:String,
    latinName:String,
    season:String,
    foodValue:Number,
    occurrence:String
  }
}
</script>

<template>
        <div class="card fungi-card">
          <p class="card-icon">🍄</p> 
          <table>
            <tr><td class="card-label">Id:</td><td> {{ fungiId }}</td></tr>
            <tr><td class="card-label">Name:</td><td> {{ name }}</td></tr>
            <tr><td class="card-label">LatinName:</td><td> {{ latinName }}</td></tr>
            <tr><td class="card-label">Season:</td><td> {{ season }}</td></tr>
            <tr><td class="card-label">FoodValue:</td><td> {{ foodValue }}</td></tr>
            <tr><td class="card-label">Occurrence:</td><td> {{ occurrence }}</td></tr>
          </table>
        </div>
</template>

<style scoped>
.fungi-card{
  background-color:aquamarine;
}
</style>