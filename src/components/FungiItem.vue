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
  },
  data(){
    return{
      btnClicked:false
    }
  },
  methods:{
        clickBtn(){
          console.log(this);
          this.btnClicked = true;
        }

  }
}

</script>

<template>
        <div class="card fungi-card">
          <div class="card-navbar">
                <span class="card-icon"><h3>🍄 Fungi {{fungiId}}</h3></span> 
                <button >❌</button>
                <button @click="clickBtn()" ref="el">🌂</button>
          </div>
          <div class="card-content">
          <table>
            <tr><td class="card-label">Id:</td><td> {{ fungiId }}</td></tr>
            <tr><td class="card-label">Name:</td><td> {{ name }}</td></tr>
            <tr><td class="card-label">LatinName:</td><td> {{ latinName }}</td></tr>
            <tr><td class="card-label">Season:</td><td> {{ season }}</td></tr>
            <tr><td class="card-label">FoodValue:</td><td> {{ foodValue }}</td></tr>
            <tr><td class="card-label">Occurrence:</td><td> {{ occurrence }}</td></tr>
          </table>
          </div>
        </div>
</template>

<style scoped>

.fungi-card > .card-content .hide {
  display:none;
}

.clicked{
  background-color:red;
}

.fungi-card{
  background-color:rgb(255, 196, 190);
}

.card-navbar{
    background-color:rgb(253, 153, 144);
}
</style>