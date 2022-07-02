<!-- FungiItem.vue -->
<script>
import fungiJournalAPIClient from "../client/FungiJournalAPIClient";

export default {
  data(){
    return {
      isExpanded : true,
      buttonText : "🌂",
      isReadonly : true
    }
  },
  props: {
    fungi:Object,
    fungiId:Number,
    commonName:String,
    latinName:String,
    season:String,
    foodValue:Number,
    occurrence:String
  },
  methods:{
        collapseFungiItem(){
          if(this.isExpanded){
            this.isExpanded = false;
            this.buttonText = "☂️";
          }else{
            this.isExpanded = true;
            this.buttonText = "🌂";
          }
        },
        async onSubmit(e){
          e.preventDefault();
          const data = new FormData(e.target);

          const fungi = {
            fungiId: data.get("fungiId"),
            commonName: data.get('commonName'),
            latinName: data.get('latinName'),
            season: data.get('season'),
            foodValue: data.get('foodValue'),
            occurrence: data.get('occurrence')
          };

          await fungiJournalAPIClient.putFungi(fungi);
        }
  }
}


</script>

<template>
        <div class="card fungi-card">
          <div class="card-navbar" :class="{ hide: !isExpanded }">
            <button @click="collapseFungiItem()">{{buttonText}}</button>
            <span class="card-icon"><h3>🍄 Fungi {{fungiId}}</h3></span> 
          </div>
          <div class="card-content" :class="{ hide: !isExpanded }">
          <form @submit="onSubmit($event)">
            <label for="fungiId">FungiId:</label>
            <input type="number" id="fungiId" name="fungiId" :value="fungiId" readonly><br><br>
            
            <label for="commonName">CommonName:</label>
            <input type="text" id="commonName" name="commonName" :value="commonName" maxlength="200"><br><br>
            <!-- <input type="text" id="commonName" name="commonName" :value="commonName" :readonly="isReadonly" @focusin="setTextInputfieldReadOnly(false)" @focusout="setTextInputfieldReadOnly(true)"><br><br> -->

            <label for="latinName">LatinName:</label>
            <input type="text" id="latinName" name="latinName" :value="latinName" maxlength="200"><br><br>

            <label for="season">Season:</label>
            <input type="text" id="season" name="season" :value="season" maxlength="200"><br><br>

            <label for="foodValue">FoodValue:</label>
            <input type="number" id="foodValue" name="foodValue" :value="foodValue" min="0" max="5" pattern="/[0-5]/"><br><br>

            <label for="occurrence">Occurrence:</label>
            <input type="text" id="occurrence" name="occurrence" :value="occurrence" maxlength="400"><br><br>
            <input class="button" type="submit" value="Submit 🍄">
          </form>
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



input:read-only{
  background-color: antiquewhite;
}

input.button:read-only{
  background-color: white;
}

form > input.button{
    float:inherit;
    border-radius: inherit;
    height: inherit;
    width: inherit;
    border-radius: 10px;
}

.fungi-card > .card-content .hide {
  display:none;
}

.clicked{
  background-color:red;
}

.fungi-card{
  background-color:rgb(255, 196, 190);
  margin:1em;
}

.card-navbar{
    background-color:rgb(253, 153, 144);
}

h3{
  margin-right:1em;
}
</style>