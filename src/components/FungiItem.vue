<!-- FungiItem.vue -->
<script>

export default {
  data(){
    return {
      isActive : false,
      buttonText : "🌂"
    }
  },
  props: {
    fungi:Object,
    fungiId:Number,
    name:String,
    latinName:String,
    season:String,
    foodValue:Number,
    occurrence:String
  },
  methods:{
        collapseFungiItem(){
          if(this.isActive){
            this.isActive = false;
            this.buttonText = "🌂";
          }else{
            this.isActive = true;
            this.buttonText = "☂️";
          }
        }
  }
}
</script>

<template>
        <div class="card fungi-card">
          <div class="card-navbar" :class="{ hide: isActive }">
            <button @click="collapseFungiItem()">{{buttonText}}</button>
            <span class="card-icon"><h3>🍄 Fungi {{fungiId}}</h3></span> 
          </div>
          <div class="card-content" :class="{ hide: isActive }">
          <table>
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
.card-navbar.hide{
  box-shadow: none;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  border-bottom:none;
}

.card-content.hide{
  display:none;
}


button{
    float:left;
    margin-left:0.6em;
}


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

h3{
  margin-right:1em;
}
</style>